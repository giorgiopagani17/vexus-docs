<template>
  <div
    class="vx-btn-toggle"
    :class="{ 'vx-btn-toggle--block': block }"
    :role="multiple ? 'group' : 'radiogroup'"
  >
    <VxButton
      v-for="(option, index) in normalizedOptions"
      :key="index"
      class="vx-btn-toggle__btn"
      :class="{ 'vx-btn-toggle__btn--active': isActive(option) }"
      :variant="isActive(option) ? activeVariant : variant"
      :color="isActive(option) ? (activeColor ?? color) : color"
      :size="size"
      :radius="radiusFor(index)"
      :icon="option.icon"
      :icon-size="iconSize"
      :hover-effect="hoverEffect"
      :disabled="disabled || option.disabled"
      :role="multiple ? undefined : 'radio'"
      :aria-checked="multiple ? undefined : isActive(option)"
      :aria-pressed="multiple ? isActive(option) : undefined"
      :aria-label="option.ariaLabel"
      @click="onSelect(option)"
    >
      <template v-if="hasContent(option)" #default>
        <slot name="option" :option="option" :active="isActive(option)">
          {{ option.label }}
        </slot>
      </template>
    </VxButton>
  </div>
</template>

<script setup>
import { computed, useSlots } from 'vue'
// Adatta il path alla posizione reale di VxButton nella libreria
import VxButton from './VxButton.vue'

defineOptions({ name: 'VxButtonToggle' })

const props = defineProps({
  /**
   * Valore selezionato.
   * - modalità singola (default): un singolo valore (o null)
   * - `multiple`: array di valori
   */
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: null,
  },
  /**
   * Opzioni del gruppo. Ogni voce può essere:
   * - un primitivo ('a', 1): label = String(valore), value = valore
   * - un oggetto { label, value, icon, disabled, ariaLabel }
   */
  options: {
    type: Array,
    default: () => [],
  },
  /** Selezione multipla: modelValue diventa un array */
  multiple: {
    type: Boolean,
    default: false,
  },
  /** Solo in modalità singola: cliccando l'opzione attiva la deseleziona (emette null) */
  clearable: {
    type: Boolean,
    default: false,
  },
  /** Variante delle opzioni NON attive: 'solid' | 'outline' | 'ghost' | 'text' */
  variant: {
    type: String,
    default: 'outline',
  },
  /** Variante dell'opzione attiva */
  activeVariant: {
    type: String,
    default: 'solid',
  },
  /** Colore del gruppo (token palette o colore custom, come in VxButton) */
  color: {
    type: String,
    default: 'primary',
  },
  /** Colore dell'opzione attiva, se diverso da `color` */
  activeColor: {
    type: String,
    default: null,
  },
  /** 'sm' | 'md' | 'lg' */
  size: {
    type: String,
    default: 'md',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  /** Il gruppo occupa tutta la larghezza e le opzioni si dividono lo spazio in parti uguali */
  block: {
    type: Boolean,
    default: false,
  },
  /** Estremi del gruppo completamente arrotondati */
  pill: {
    type: Boolean,
    default: false,
  },
  /** Override del border-radius degli estremi, number → px, string → usata così com'è */
  radius: {
    type: [Number, String],
    default: null,
  },
  iconSize: {
    type: [Number, String],
    default: null,
  },
  /** Effetto hover passato ai VxButton ('brightness' | 'scale' | 'lift' | 'glow' | 'underline' | 'none' | 'custom') */
  hoverEffect: {
    type: String,
    default: 'brightness',
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const slots = useSlots()

const normalizedOptions = computed(() =>
  props.options.map((option) =>
    option !== null && typeof option === 'object'
      ? option
      : { label: String(option), value: option }
  )
)

function hasContent(option) {
  const hasLabel = option.label !== undefined && option.label !== null && option.label !== ''
  return hasLabel || !!slots.option
}

function isActive(option) {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(option.value)
  }
  return props.modelValue === option.value
}

function onSelect(option) {
  if (props.disabled || option.disabled) return

  const active = isActive(option)
  let next

  if (props.multiple) {
    const selected = new Set(Array.isArray(props.modelValue) ? props.modelValue : [])
    if (active) selected.delete(option.value)
    else selected.add(option.value)
    // Mantiene l'ordine delle opzioni, così il risultato è stabile
    next = normalizedOptions.value
      .map((o) => o.value)
      .filter((value) => selected.has(value))
  } else {
    if (active) {
      if (!props.clearable) return
      next = null
    } else {
      next = option.value
    }
  }

  emit('update:modelValue', next)
  emit('change', next, option)
}

const toCssSize = (value) => {
  if (value === undefined || value === null) return null
  return typeof value === 'number' ? `${value}px` : value
}

// Il default coincide con --btn-radius di VxButton (10px)
const baseRadius = computed(() => (props.pill ? '999px' : toCssSize(props.radius) ?? '10px'))

/**
 * Arrotonda solo gli estremi del gruppo: primo → sinistra, ultimo → destra,
 * intermedi → nessun arrotondamento. Con una sola opzione resta un bottone normale.
 */
function radiusFor(index) {
  const r = baseRadius.value
  const last = normalizedOptions.value.length - 1
  if (last === 0) return r
  if (index === 0) return `${r} 0 0 ${r}`
  if (index === last) return `0 ${r} ${r} 0`
  return '0'
}
</script>

<style lang="scss" scoped>
.vx-btn-toggle {
  display: inline-flex;
  align-items: stretch;
  max-width: 100%;

  &--block {
    display: flex;
    width: 100%;

    .vx-btn-toggle__btn {
      flex: 1 1 0;
      min-width: 0;
    }
  }

  /* niente ombre dentro al gruppo: l'effetto "unito" si perde con le ombre singole */
  .vx-btn-toggle__btn {
    box-shadow: none;
  }

  /* i bordi adiacenti si sovrappongono invece di raddoppiare */
  .vx-btn-toggle__btn:not(:first-child) {
    margin-left: -1px;
  }

  .vx-btn-toggle__btn--active {
    z-index: 1;
  }

  .vx-btn-toggle__btn:hover {
    z-index: 2;
  }

  .vx-btn-toggle__btn:focus-visible {
    z-index: 3;
  }
}
</style>