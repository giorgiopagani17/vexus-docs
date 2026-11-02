<template>
  <div class="layout">
    <header class="app-header">
      <button class="icon-btn icon-btn--mobile-only" @click="toggleDrawer">
        <Menu :size="20" />
      </button>

      <div class="logo-wrap">
        <div class="image-wrapper">
          <img :src="VexusLogo" class="logo-image" alt="Vexus Logo" />
        </div>
        <div v-if="libraryName && !isMobile">
          <h1 class="logo-text">{{ libraryName }} Docs</h1>
        </div>
      </div>

      <div class="header-actions">
        <button class="spotlight-trigger" type="button" @click="openSpotlight">
          <Search :size="16" />
          <span>{{ t('layout.search.open') }}</span>
          <kbd>CTRL+K</kbd>
        </button>
        <DesignLanguageSwitcher />
      </div>
    </header>

    <aside
      class="sidebar"
      :class="{ 'sidebar--mini': isMini, 'sidebar--hidden': !drawerOpen }"
    >
      <nav class="menu">
        <template v-for="item in menu" :key="item.id">
          <!-- Voce semplice, senza sottomenu -->
          <RouterLink
            v-if="!item.children"
            :to="item.to"
            class="menu-item"
            active-class="menu-item--active"
          >
            <component :is="item.icon" :size="20" />
            <span v-if="!isMini" class="menu-label">{{ item.label }}</span>
            <span v-if="isMini" class="tooltip">{{ item.label }}</span>
          </RouterLink>

          <!-- Voce con sottomenu -->
          <div
            v-else
            class="menu-group"
            :class="{ 'menu-group--open': isGroupOpen(item.id) }"
          >
            <button
              class="menu-item menu-item--group"
              :class="{
                'menu-item--active': isChildActive(item) || flyoutGroup === item.id,
              }"
              :aria-expanded="isMini ? flyoutGroup === item.id : isGroupOpen(item.id)"
              @click="onGroupClick(item.id)"
            >
              <component :is="item.icon" :size="20" />
              <span v-if="!isMini" class="menu-label">{{ item.label }}</span>
              <ChevronDown v-if="!isMini" :size="16" class="group-chevron" />
              <!-- Tooltip in mini, nascosto quando il flyout è aperto -->
              <span
                v-if="isMini && flyoutGroup !== item.id"
                class="tooltip"
              >{{ item.label }}</span>
            </button>

            <!-- Sottomenu ad accordion (sidebar espansa) -->
            <div v-if="!isMini && isGroupOpen(item.id)" class="submenu-wrapper">
              <RouterLink
                v-for="child in item.children"
                :key="child.id"
                :to="child.to"
                class="submenu-item"
                active-class="submenu-item--active"
              >
                <component :is="child.icon" :size="16" />
                <span class="menu-label">{{ child.label }}</span>
              </RouterLink>
            </div>

            <!-- Sottomenu a flyout (sidebar mini), aperto al click -->
            <div
              v-else-if="isMini && flyoutGroup === item.id"
              class="submenu-flyout"
            >
              <div class="submenu-flyout__title">{{ item.label }}</div>
              <RouterLink
                v-for="child in item.children"
                :key="child.id"
                :to="child.to"
                class="submenu-item"
                active-class="submenu-item--active"
                @click="flyoutGroup = null"
              >
                <component :is="child.icon" :size="16" />
                <span class="menu-label">{{ child.label }}</span>
              </RouterLink>
            </div>
          </div>
        </template>
      </nav>

      <button class="collapse-btn" @click="miniState = !miniState">
        <component :is="miniState ? ChevronRight : ChevronLeft" :size="18" />
      </button>
    </aside>

    <main class="content" :class="{ 'content--mini': isMini }">
      <RouterView />
    </main>

    <Teleport to="body">
      <div v-if="spotlightOpen" class="spotlight-backdrop" @mousedown.self="closeSpotlight">
        <section class="spotlight" role="dialog" aria-modal="true" :aria-label="t('layout.search.title')">
          <div class="spotlight-input">
            <Search :size="20" />
            <input
              ref="spotlightInput"
              v-model="spotlightQuery"
              type="search"
              :placeholder="t('layout.search.placeholder')"
              @keydown="onSpotlightKeydown"
            />
            <kbd>ESC</kbd>
          </div>
          <div
            v-if="spotlightResults.length"
            ref="spotlightList"
            class="spotlight-results"
            role="listbox"
          >
            <button
              v-for="(result, index) in spotlightResults"
              :key="result.to"
              type="button"
              class="spotlight-result"
              :class="{ 'spotlight-result--active': index === spotlightIndex }"
              role="option"
              :aria-selected="index === spotlightIndex"
              @mouseenter="spotlightIndex = index"
              @click="goToResult(result.to)"
            >
              <component :is="result.icon" :size="18" />
              <span>
                <strong>{{ result.label }}</strong>
                <small>{{ result.category }}</small>
              </span>
              <ChevronRight :size="16" />
            </button>
          </div>
          <p v-else class="spotlight-empty">{{ t('layout.search.empty') }}</p>
        </section>
      </div>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { useI18n } from 'vue-i18n'
import DesignLanguageSwitcher from '@/components/Utils/DesignLanguageSwitcher.vue'
import { useRoute, useRouter } from 'vue-router'
import VexusLogo from '/vexus_logo.png'
import { getMenu } from '@/metadata/documentation/menu'
import { getSpotlightItems } from '@/metadata/documentation/spotlightItems'
import {
  Menu,
  MousePointerClick,
  ToggleLeft,
  ChevronsUpDown,
  TextCursorInput,
  CalendarDays,
  SquareMenu,
  Bell,
  Phone,
  Home,
  Blocks,
  Puzzle,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  IdCard,
  Search,
} from 'lucide-vue-next'

const MOBILE_QUERY = '(max-width: 768px)'
const libraryName = __APP_NAME__ || 'Vexus'

const route = useRoute()
const { t } = useI18n()
const router = useRouter()
const menu = computed(() => getMenu(t))
const spotlightItems = computed(() => getSpotlightItems(t))

// Breakpoint mobile: sotto i 768px la sidebar è sempre espansa (il CSS nasconde tooltip e flyout)
const mql = typeof window !== 'undefined' ? window.matchMedia(MOBILE_QUERY) : null
const isMobile = ref(mql ? mql.matches : false)

const drawerOpen = ref(!isMobile.value)
const miniState = ref(false)
const flyoutGroup = ref(null)
const spotlightOpen = ref(false)
const spotlightQuery = ref('')
const spotlightIndex = ref(0)
const spotlightInput = ref(null)
const spotlightList = ref(null)

// Stato mini effettivo: mai attivo su mobile
const isMini = computed(() => miniState.value && !isMobile.value)

const spotlightResults = computed(() => {
  const query = spotlightQuery.value.trim().toLocaleLowerCase()
  if (!query) return spotlightItems.value
  return spotlightItems.value.filter((item) =>
    `${item.label} ${item.category}`.toLocaleLowerCase().includes(query),
  )
})

function openSpotlight() {
  spotlightOpen.value = true
  spotlightQuery.value = ''
  spotlightIndex.value = 0
  nextTick(() => spotlightInput.value?.focus())
}

function closeSpotlight() {
  spotlightOpen.value = false
}

function goToResult(path) {
  closeSpotlight()
  router.push(path)
}

function onSpotlightKeydown(e) {
  if (e.key === 'Escape') return closeSpotlight()
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    if (spotlightResults.value.length) {
      spotlightIndex.value = (spotlightIndex.value + 1) % spotlightResults.value.length
    }
  }
  if (e.key === 'ArrowUp') {
    e.preventDefault()
    if (spotlightResults.value.length) {
      spotlightIndex.value = (spotlightIndex.value - 1 + spotlightResults.value.length) % spotlightResults.value.length
    }
  }
  if (e.key === 'Enter' && spotlightResults.value[spotlightIndex.value]) {
    goToResult(spotlightResults.value[spotlightIndex.value].to)
  }
}

const openGroups = ref(new Set(['uiComponents', 'composables']))

function isGroupOpen(label) {
  return openGroups.value.has(label)
}

function toggleGroup(label) {
  const next = new Set(openGroups.value)
  if (next.has(label)) {
    next.delete(label)
  } else {
    next.add(label)
  }
  openGroups.value = next
}

function isChildActive(item) {
  return item.children?.some((child) => child.to === route.path) ?? false
}

// Click su un gruppo: in mini apre/chiude il flyout, altrimenti l'accordion
function onGroupClick(label) {
  if (isMini.value) {
    flyoutGroup.value = flyoutGroup.value === label ? null : label
  } else {
    toggleGroup(label)
  }
}

menu.value.forEach((item) => {
  if (item.children && isChildActive(item)) {
    openGroups.value.add(item.id)
  }
})

const toggleDrawer = () => {
  drawerOpen.value = !drawerOpen.value
}

// Chiusura flyout: click fuori, Esc, cambio rotta, cambio stato sidebar
function onDocClick(e) {
  if (flyoutGroup.value && !e.target.closest('.menu-group')) {
    flyoutGroup.value = null
  }
}

function onKeydown(e) {
  if (e.key === 'Escape') flyoutGroup.value = null
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    spotlightOpen.value ? closeSpotlight() : openSpotlight()
  }
}

function onMobileChange(e) {
  isMobile.value = e.matches
  flyoutGroup.value = null
  // Entrando in mobile il drawer parte chiuso, tornando a desktop la sidebar è visibile
  drawerOpen.value = !e.matches
}

onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKeydown)
  mql?.addEventListener('change', onMobileChange)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKeydown)
  mql?.removeEventListener('change', onMobileChange)
})

watch(spotlightIndex, () => {
  nextTick(() => {
    spotlightList.value
      ?.querySelector('.spotlight-result--active')
      ?.scrollIntoView({ block: 'nearest' })
  })
})

watch(
  () => route.path,
  () => {
    flyoutGroup.value = null
    if (isMobile.value) drawerOpen.value = false
  }
)

watch(isMini, () => {
  flyoutGroup.value = null
})
</script>

<style lang="scss" scoped>
.layout {
  font-family: 'Fredoka', sans-serif;
}

.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 0 20px;
  background: rgba($tertiary, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba($primary, 0.15);
  z-index: 100;
}

.title {
  flex: 1;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.3px;
  margin: 0;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.spotlight-trigger {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 34px;
  padding: 0 10px;
  border: 1px solid rgba($primary, 0.2);
  border-radius: 9px;
  background: rgba(255, 255, 255, 0.04);
  color: rgba(255, 255, 255, 0.72);
  font: inherit;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    border-color: rgba($primary, 0.45);
    background: rgba($primary, 0.1);
    color: white;
  }

  kbd {
    padding: 2px 5px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 4px;
    font-size: 10px;
    opacity: 0.7;
  }
}

.spotlight-backdrop {
  position: fixed;
  inset: 0;
  z-index: 300;
  display: flex;
  justify-content: center;
  padding: 12vh 20px 20px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(8px);
}

.spotlight {
  width: min(640px, 100%);
  align-self: flex-start;
  overflow: hidden;
  border: 1px solid rgba($primary, 0.28);
  border-radius: 16px;
  background: rgba($tertiary, 0.98);
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.55);
}

.spotlight-input {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 18px;
  border-bottom: 1px solid rgba($primary, 0.14);
  color: $primary;

  input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: white;
    font: inherit;
    font-size: 17px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

  kbd {
    padding: 4px 6px;
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.5);
    font-size: 10px;
  }
}

.spotlight-results {
  max-height: min(60vh, 480px);
  padding: 8px;
  overflow-y: auto;
}

.spotlight-result {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 12px;
  padding: 11px 12px;
  border: 0;
  border-radius: 9px;
  background: transparent;
  color: rgba(255, 255, 255, 0.78);
  font: inherit;
  text-align: left;
  cursor: pointer;

  > svg {
    flex: 0 0 auto;
    color: $primary;
  }

  > span {
    display: grid;
    flex: 1;
    gap: 2px;
  }

  small {
    color: rgba(255, 255, 255, 0.42);
    font-size: 11px;
  }

  > svg:last-child {
    color: rgba(255, 255, 255, 0.3);
  }
}

.spotlight-result:hover,
.spotlight-result--active {
  background: rgba($primary, 0.14);
  color: white;
}

.spotlight-empty {
  margin: 0;
  padding: 28px 20px;
  color: rgba(255, 255, 255, 0.5);
  text-align: center;
}

.icon-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.06);
  }

  &--mobile-only {
    display: none;
  }
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.sidebar {
  position: fixed;
  top: 64px;
  left: 0;
  bottom: 0;
  width: 240px;
  background: rgba($tertiary, 0.85);
  backdrop-filter: blur(12px);
  border-right: 1px solid rgba($primary, 0.15);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  transition: width 0.25s ease, transform 0.25s ease;
  z-index: 90;

  &--mini {
    width: 68px;
    overflow: visible;
  }

  &--hidden {
    transform: translateX(-100%);
  }
}

@mixin gradient-text {
  background: linear-gradient(135deg, $primary, $secondary);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.logo-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-text {
  margin: 0;
  line-height: 1;
  @include gradient-text;
}

.image-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-image {
  width: 34px;
  height: 34px;
  object-fit: cover;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 8px;
}

.menu-item {
  position: relative;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 10px 14px;
  border-radius: 10px;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  white-space: nowrap;
  overflow: visible;
  border: none;
  background: transparent;
  width: 100%;
  box-sizing: border-box; // fix overflow-x: senza questo i <a> sforavano di 28px (padding in content-box)
  font: inherit;
  cursor: pointer;
  text-align: left;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);

    .tooltip {
      opacity: 1;
      visibility: visible;
      transform: translate(4px, -50%);
    }
  }

  &--active {
    background: rgba($primary, 0.12);
    color: $primary;

    svg {
      color: $primary;
    }
  }

  &--group {
    justify-content: flex-start;
  }
}

.menu-label {
  font-size: 14px;
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.group-chevron {
  transition: transform 0.2s ease;
  flex: 0 0 auto;
}

.menu-group--open .group-chevron {
  transform: rotate(180deg);
}

.submenu-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 4px 0 4px 18px;
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.25s ease;
}

.menu-group--open .submenu-wrapper {
  max-height: 400px;
}

.submenu-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 14px;
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  font-size: 13px;
  white-space: nowrap;
  box-sizing: border-box;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }

  &--active {
    background: rgba($primary, 0.1);
    color: $primary;

    svg {
      color: $primary;
    }
  }
}

.tooltip {
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translate(0, -50%);
  margin-left: 8px;
  padding: 6px 12px;
  border-radius: 8px;
  background: rgba($tertiary, 0.95);
  border: 1px solid rgba($primary, 0.25);
  font-size: 13px;
  font-weight: 500;
  color: white;
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.2s ease, transform 0.2s ease, visibility 0.2s ease;
  pointer-events: none;
  z-index: 110;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
}

// Il flyout è montato solo quando serve (v-else-if), quindi è visibile di default
.submenu-flyout {
  position: absolute;
  left: 100%;
  top: 0;
  margin-left: 8px;
  min-width: 180px;
  padding: 8px;
  border-radius: 10px;
  background: rgba($tertiary, 0.97);
  border: 1px solid rgba($primary, 0.25);
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 110;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  animation: flyout-in 0.15s ease;

  &__title {
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.4px;
    color: rgba(255, 255, 255, 0.5);
    padding: 4px 10px 8px;
  }

  .submenu-item {
    border-left: none;
    padding: 8px 10px;
  }
}

@keyframes flyout-in {
  from {
    opacity: 0;
    transform: translateX(-4px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.menu-group {
  position: relative;
}

.collapse-btn {
  margin-top: auto;
  margin-bottom: 16px;
  align-self: flex-end;
  margin-right: 16px;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  background: rgba($primary, 0.1);
  color: $primary;
  cursor: pointer;

  &:hover {
    background: rgba($primary, 0.18);
  }
}

.content {
  box-sizing: border-box;   // il padding resta DENTRO i 100dvh
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  margin-left: 240px;
  padding: 88px 24px 24px;  // 64px header + 24px di respiro sopra, 24px sotto
  transition: margin-left 0.25s ease;

  &--mini {
    margin-left: 68px;
  }
}

// Mobile breakpoint (tenere allineato a MOBILE_QUERY nello script)
@media (max-width: 768px) {
  // Griglia 1fr | auto | 1fr: le colonne laterali hanno sempre la stessa
  // larghezza, quindi il logo resta centrato anche se le actions sono più larghe del burger
  .app-header {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
  }

  .icon-btn--mobile-only {
    display: inline-flex;
    justify-self: start;
  }

  .logo-wrap {
    justify-self: center;
  }

  .header-actions {
    justify-self: end;
  }

  .sidebar {
    transform: translateX(-100%);
    width: 240px !important;

    &:not(.sidebar--hidden) {
      transform: translateX(0);
    }

    &--mini {
      width: 240px;
    }
  }

  .content,
  .content--mini {
    margin-left: 0;
  }

  .collapse-btn {
    display: none;
  }

  .spotlight-trigger span,
  .spotlight-trigger kbd {
    display: none;
  }

  .spotlight-trigger {
    width: 34px;
    justify-content: center;
    padding: 0;
  }

  .tooltip,
  .submenu-flyout {
    display: none;
  }
}
</style>