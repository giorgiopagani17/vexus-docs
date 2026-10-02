<template>
  <div
    ref="rootRef"
    class="vx-btn-dropdown"
    :class="{
      'vx-btn-dropdown--block': block,
      'vx-btn-dropdown--split': split,
      'vx-btn-dropdown--open': isOpen,
    }"
    @keydown="onTriggerKeydown"
  >
    <!-- Split: bottone principale (azione) + caret (apre il menu) -->
    <template v-if="split">
      <VxButton
        v-bind="$attrs"
        class="vx-btn-dropdown__main"
        :icon="icon"
        icon-position="left"
        :icon-size="iconSize"
        :disabled="disabled"
        :loading="loading"
        :radius="splitRadius('main')"
        @click="emit('click', $event)"
      >
        <template v-if="label || $slots.default" #default>
          <slot>{{ label }}</slot>
        </template>
      </VxButton>

      <VxButton
        v-bind="$attrs"
        class="vx-btn-dropdown__caret"
        :disabled="disabled || loading"
        :radius="splitRadius('caret')"
        aria-haspopup="menu"
        :aria-expanded="isOpen"
        :aria-label="toggleLabel"
        @click="onToggleClick"
      >
        <template #icon-left>
          <ChevronDown
            :size="chevronSize()"
            class="vx-btn-dropdown__chevron"
            :class="{ 'is-open': isOpen }"
          />
        </template>
      </VxButton>
    </template>

    <!-- Singolo bottone con chevron a destra -->
    <VxButton
      v-else
      v-bind="$attrs"
      :icon="icon"
      icon-position="left"
      :icon-size="iconSize"
      :disabled="disabled"
      :loading="loading"
      :block="block"
      :pill="pill"
      :radius="radius"
      aria-haspopup="menu"
      :aria-expanded="isOpen"
      @click="onSingleClick"
    >
      <template v-if="label || $slots.default" #default>
        <slot>{{ label }}</slot>
      </template>
      <template #icon-right>
        <ChevronDown
          :size="chevronSize()"
          class="vx-btn-dropdown__chevron"
          :class="{ 'is-open': isOpen }"
        />
      </template>
    </VxButton>

    <!--
      Il pannello è teletrasportato nel body: non viene tagliato da parent con
      overflow hidden (sidebar, tabelle, card) e ha sempre lo z-index giusto.
    -->
    <Teleport to="body">
      <Transition name="vx-dd">
        <div
          v-if="isOpen"
          ref="panelRef"
          class="vx-btn-dropdown__panel"
          role="menu"
          tabindex="-1"
          :style="panelStyle"
          @keydown="onPanelKeydown"
        >
          <template v-for="(item, index) in items" :key="index">
            <div v-if="item.separator" class="vx-btn-dropdown__separator" role="separator" />

            <div v-else-if="item.header" class="vx-btn-dropdown__header">
              {{ item.header }}
            </div>

            <component
              :is="item.href ? 'a' : 'button'"
              v-else
              class="vx-btn-dropdown__item"
              :class="{ 'vx-btn-dropdown__item--disabled': item.disabled }"
              role="menuitem"
              tabindex="-1"
              :type="item.href ? undefined : 'button'"
              :href="item.href"
              :target="item.target"
              :disabled="item.href ? undefined : item.disabled"
              :aria-disabled="item.disabled ? 'true' : undefined"
              :style="itemStyle(item)"
              :title="$slots.item ? undefined : item.label"
              @click="onItemClick(item, $event)"
            >
              <!-- contenuto custom: troncato con ellipsis anche lui -->
              <span v-if="$slots.item" class="vx-btn-dropdown__item-custom">
                <slot name="item" :item="item" :index="index" />
              </span>

              <template v-else>
                <component
                  :is="item.icon"
                  v-if="item.icon"
                  :size="16"
                  class="vx-btn-dropdown__item-icon"
                />
                <span class="vx-btn-dropdown__item-label">{{ item.label }}</span>
              </template>
            </component>
          </template>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onBeforeUnmount, useAttrs } from 'vue'
import { ChevronDown } from 'lucide-vue-next'
// Adatta il path alla posizione reale di VxButton nella libreria
import VxButton from './VxButton.vue'

/*
 * inheritAttrs: false → tutte le prop non dichiarate qui (variant, color, size,
 * colors, hoverEffect, class, style, ...) vengono girate ai VxButton interni
 * tramite v-bind="$attrs", senza doverle ridichiarare una a una.
 * (defineOptions richiede Vue 3.3+)
 */
defineOptions({ name: 'VxButtonDropdown', inheritAttrs: false })

const props = defineProps({
  /**
   * Voci del menu. Ogni voce può essere:
   * - { label, value, icon, disabled, color, href, target, closeOnSelect }
   *   `color` accetta un token della palette ('negative', ...) o un colore custom
   * - { separator: true }  → linea di separazione
   * - { header: 'Titolo' } → intestazione di sezione
   */
  items: {
    type: Array,
    default: () => [],
  },
  /** Testo del bottone (in alternativa allo slot default) */
  label: {
    type: String,
    default: '',
  },
  /** Bottone diviso: parte principale (emette `click`) + caret che apre il menu */
  split: {
    type: Boolean,
    default: false,
  },
  /** 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' (si ribalta se manca spazio) */
  placement: {
    type: String,
    default: 'bottom-start',
    validator: (v) => ['bottom-start', 'bottom-end', 'top-start', 'top-end'].includes(v),
  },
  /** Chiude il menu dopo la selezione di una voce */
  closeOnSelect: {
    type: Boolean,
    default: true,
  },
  /** Altezza massima del pannello, number → px */
  maxHeight: {
    type: [Number, String],
    default: 320,
  },
  /** Distanza in px tra bottone e pannello */
  offset: {
    type: Number,
    default: 6,
  },
  /** aria-label del caret in modalità split */
  toggleLabel: {
    type: String,
    default: 'Mostra opzioni',
  },

  /* ===== prop di VxButton che qui servono esplicitamente ===== */
  icon: {
    type: [Object, Function],
    default: null,
  },
  iconSize: {
    type: [Number, String],
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  block: {
    type: Boolean,
    default: false,
  },
  pill: {
    type: Boolean,
    default: false,
  },
  radius: {
    type: [Number, String],
    default: null,
  },
})

/**
 * - click:  clic sul bottone principale (split) o sul bottone (non split)
 * - select: voce scelta → (item, event)
 * - open / close: cambio di stato del menu
 */
const emit = defineEmits(['click', 'select', 'open', 'close'])

const attrs = useAttrs()

const MARGIN = 8
const paletteTokens = ['primary', 'secondary', 'positive', 'negative', 'warning', 'info', 'white']

const rootRef = ref(null)
const panelRef = ref(null)
const isOpen = ref(false)
const position = ref({ top: '0px', left: '0px', width: 'auto' })
// Colori del bottone (--dd-bg, --dd-hover), letti all'apertura
const theme = ref({})

const toCssSize = (value) => {
  if (value === undefined || value === null) return null
  return typeof value === 'number' ? `${value}px` : value
}

const panelStyle = computed(() => ({
  ...position.value,
  ...theme.value,
  maxHeight: toCssSize(props.maxHeight),
}))

/* ===== apertura / chiusura ===== */

/** focus: 'panel' (clic col mouse) | 'first' | 'last' (tastiera) */
async function open(focus = 'panel') {
  if (isOpen.value || props.disabled || props.loading || !props.items.length) return
  readButtonColors()
  isOpen.value = true
  emit('open')
  await nextTick()
  updatePosition()
  focusItem(focus)
}

function close(restoreFocus = false) {
  if (!isOpen.value) return
  isOpen.value = false
  emit('close')
  if (restoreFocus) nextTick(() => getTriggerEl()?.focus())
}

function toggle(focus = 'panel') {
  if (isOpen.value) close()
  else open(focus)
}

// Un "click" generato dalla tastiera (Invio/Spazio) ha detail === 0
function focusModeFor(event) {
  return event?.detail === 0 ? 'first' : 'panel'
}

function onToggleClick(event) {
  toggle(focusModeFor(event))
}

function onSingleClick(event) {
  emit('click', event)
  toggle(focusModeFor(event))
}

// L'ultimo .vx-btn dentro il root è il bottone che apre il menu (caret in split)
function getTriggerEl() {
  const buttons = rootRef.value?.querySelectorAll('.vx-btn')
  return buttons?.[buttons.length - 1] ?? null
}

/**
 * Il pannello è teletrasportato nel body, quindi non eredita le CSS custom property
 * del bottone (--btn-bg, ...) né quelle impostate da `color` / `colors`.
 * Le leggo dal trigger con getComputedStyle (var() già risolte) e le uso come
 * colore d'accento del pannello (bordo, hover, focus).
 */
function readButtonColors() {
  const el = getTriggerEl()
  if (!el) return
  const style = getComputedStyle(el)
  const read = (name) => style.getPropertyValue(name).trim() || undefined

  theme.value = {
    '--dd-bg': read('--btn-bg'),
    '--dd-hover': read('--btn-bg-hover'),
  }
}

/* ===== posizionamento ===== */

function updatePosition() {
  const root = rootRef.value
  const panel = panelRef.value
  if (!root || !panel) return

  const rect = root.getBoundingClientRect()
  // Il pannello è largo quanto il bottone (in split: bottone + caret)
  const panelWidth = rect.width
  const panelHeight = panel.offsetHeight
  const [wantedSide, align] = props.placement.split('-')

  const spaceBelow = window.innerHeight - rect.bottom - props.offset - MARGIN
  const spaceAbove = rect.top - props.offset - MARGIN

  // Ribalta solo se non c'è spazio dal lato richiesto e ce n'è di più dall'altro
  let side = wantedSide
  if (side === 'bottom' && panelHeight > spaceBelow && spaceAbove > spaceBelow) side = 'top'
  else if (side === 'top' && panelHeight > spaceAbove && spaceBelow > spaceAbove) side = 'bottom'

  const top = side === 'bottom' ? rect.bottom + props.offset : rect.top - panelHeight - props.offset
  let left = align === 'end' ? rect.right - panelWidth : rect.left
  left = Math.max(MARGIN, Math.min(left, window.innerWidth - panelWidth - MARGIN))

  position.value = {
    top: `${Math.round(top)}px`,
    left: `${Math.round(left)}px`,
    width: `${Math.round(rect.width)}px`,
  }
}

/* ===== tastiera / focus ===== */

function enabledItems() {
  return Array.from(
    panelRef.value?.querySelectorAll(
      '[role="menuitem"]:not([disabled]):not([aria-disabled="true"])'
    ) ?? []
  )
}

function focusItem(which) {
  if (which === 'panel') {
    panelRef.value?.focus({ preventScroll: true })
    return
  }
  const els = enabledItems()
  const target = which === 'last' ? els[els.length - 1] : els[0]
  ;(target ?? panelRef.value)?.focus({ preventScroll: true })
}

// Frecce sul bottone: aprono il menu (o spostano il focus se già aperto)
function onTriggerKeydown(event) {
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    if (props.disabled || props.loading) return
    event.preventDefault()
    const which = event.key === 'ArrowDown' ? 'first' : 'last'
    if (isOpen.value) focusItem(which)
    else open(which)
  } else if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    close(true)
  }
}

function onPanelKeydown(event) {
  const els = enabledItems()
  const index = els.indexOf(document.activeElement)

  switch (event.key) {
    case 'ArrowDown':
      event.preventDefault()
      els[(index + 1) % (els.length || 1)]?.focus()
      break
    case 'ArrowUp':
      event.preventDefault()
      els[index <= 0 ? els.length - 1 : index - 1]?.focus()
      break
    case 'Home':
      event.preventDefault()
      els[0]?.focus()
      break
    case 'End':
      event.preventDefault()
      els[els.length - 1]?.focus()
      break
    case 'Escape':
      event.preventDefault()
      event.stopPropagation()
      close(true)
      break
    case 'Tab':
      // Il pannello vive nel body: meglio tornare al bottone che perdere il focus
      event.preventDefault()
      close(true)
      break
  }
}

/* ===== voci ===== */

function onItemClick(item, event) {
  if (item.disabled) {
    event.preventDefault()
    return
  }
  emit('select', item, event)
  if (props.closeOnSelect && item.closeOnSelect !== false) close(true)
}

function itemStyle(item) {
  if (!item.color) return null
  const color = paletteTokens.includes(item.color) ? `var(--vx-${item.color})` : item.color
  return { '--item-color': color }
}

/* ===== split: estremi arrotondati ===== */

const baseRadius = computed(() => (props.pill ? '999px' : toCssSize(props.radius) ?? '10px'))

function splitRadius(part) {
  const r = baseRadius.value
  return part === 'main' ? `${r} 0 0 ${r}` : `0 ${r} ${r} 0`
}

// Stessa scala delle icone di VxButton
function chevronSize() {
  return { sm: 14, md: 16, lg: 18 }[attrs.size] ?? 16
}

/* ===== listener globali, attivi solo a menu aperto ===== */

function onPointerDown(event) {
  const target = event.target
  if (rootRef.value?.contains(target) || panelRef.value?.contains(target)) return
  close(false)
}

function onReposition() {
  updatePosition()
}

function addListeners() {
  document.addEventListener('pointerdown', onPointerDown, true)
  window.addEventListener('resize', onReposition)
  window.addEventListener('scroll', onReposition, true)
}

function removeListeners() {
  document.removeEventListener('pointerdown', onPointerDown, true)
  window.removeEventListener('resize', onReposition)
  window.removeEventListener('scroll', onReposition, true)
}

watch(isOpen, (value) => (value ? addListeners() : removeListeners()))

watch(
  () => props.disabled || props.loading,
  (blocked) => {
    if (blocked) close()
  }
)

onBeforeUnmount(removeListeners)

defineExpose({ open, close, toggle, isOpen })
</script>

<style lang="scss" scoped>
.vx-btn-dropdown {
  display: inline-flex;
  align-items: stretch;
  max-width: 100%;

  &--block {
    display: flex;
    width: 100%;
  }

  &--split .vx-btn-dropdown__main {
    flex: 1 1 auto;
  }

  /* niente ombre che si sommano tra le due metà */
  &--split .vx-btn-dropdown__main,
  &--split .vx-btn-dropdown__caret {
    box-shadow: none;
  }

  /* divisore tra le due metà (per outline basta il bordo, sovrapposto) */
  &--split .vx-btn-dropdown__caret {
    &:not(.vx-btn--outline)::before {
      content: '';
      position: absolute;
      left: 0;
      top: 20%;
      bottom: 20%;
      width: 1px;
      background: currentColor;
      opacity: 0.3;
    }

    &.vx-btn--outline {
      margin-left: -1px;
    }
  }
}

.vx-btn-dropdown__chevron {
  transition: transform 0.2s ease;

  &.is-open {
    transform: rotate(180deg);
  }
}

/*
 * ===== pannello (teleportato nel body) =====
 * Sfondo bianco opaco. L'accento (bordo, hover, focus) eredita il colore del
 * bottone tramite --dd-bg / --dd-hover (v. readButtonColors).
 */
.vx-btn-dropdown__panel {
  position: fixed;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 6px;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 12px;
  background: #ffffff;
  color: #1f2328;
  border: 1px solid color-mix(in srgb, var(--dd-bg, var(--vx-primary)) 25%, transparent);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
  outline: none;
}

.vx-btn-dropdown__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  min-width: 0;
  overflow: hidden;
  padding: 8px 12px;
  border: none;
  border-radius: 8px;
  background: transparent;
  color: var(--item-color, #1f2328);
  font: inherit;
  font-size: 14px;
  text-align: left;
  text-decoration: none;
  white-space: nowrap;
  cursor: pointer;
  box-sizing: border-box;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover:not(.vx-btn-dropdown__item--disabled),
  &:focus-visible {
    background: var(
      --dd-hover,
      color-mix(in srgb, var(--item-color, var(--dd-bg, var(--vx-primary))) 12%, transparent)
    );
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid color-mix(in srgb, var(--dd-bg, var(--vx-primary)) 60%, transparent);
    outline-offset: -2px;
  }

  &--disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
}

.vx-btn-dropdown__item-icon {
  flex: 0 0 auto;
}

/* testo troncato con "…" quando supera la larghezza del pannello */
.vx-btn-dropdown__item-label {
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* contenuto dello slot #item: ellipsis su tutti i discendenti */
.vx-btn-dropdown__item-custom {
  display: block;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  :deep(*) {
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.vx-btn-dropdown__separator {
  height: 1px;
  margin: 4px 6px;
  background: rgba(0, 0, 0, 0.08);
}

.vx-btn-dropdown__header {
  padding: 6px 12px 4px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(0, 0, 0, 0.45);
}

/* ===== transizione ===== */
.vx-dd-enter-active,
.vx-dd-leave-active {
  transition: opacity 0.12s ease, transform 0.12s ease;
}

.vx-dd-enter-from,
.vx-dd-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>