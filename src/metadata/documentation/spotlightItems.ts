import type { Component } from 'vue'
import type { ComposerTranslation } from 'vue-i18n'
import {
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
  Copyright,
  BookOpen,
  GitBranch,
  IdCard,
  AppWindow,
  Timer,
  Calculator,
} from 'lucide-vue-next'

export interface SpotlightItem {
  label: string
  category: string
  to: string
  icon: Component
}

export const getSpotlightItems = (t: ComposerTranslation): SpotlightItem[] => [
  { label: t('layout.menu.home'), category: t('layout.search.pages'), to: '/', icon: Home },
  { label: t('layout.menu.license'), category: t('layout.search.pages'), to: '/license', icon: Copyright },
  { label: t('layout.menu.documentation'), category: t('layout.search.pages'), to: '/documentation', icon: BookOpen },
  { label: t('layout.menu.versions'), category: t('layout.search.pages'), to: '/versions', icon: GitBranch },
  { label: 'VxButton', category: t('layout.search.components'), to: '/button', icon: MousePointerClick },
  { label: 'VxButtonToggle', category: t('layout.search.components'), to: '/button-toggle', icon: ToggleLeft },
  { label: 'VxButtonDropdown', category: t('layout.search.components'), to: '/button-dropdown', icon: ChevronsUpDown },
  { label: 'VxInput', category: t('layout.search.components'), to: '/input', icon: TextCursorInput },
  { label: 'VxInput Others', category: t('layout.search.components'), to: '/input/others', icon: Blocks },
  { label: 'VxInput Pickers', category: t('layout.search.components'), to: '/input/pickers', icon: CalendarDays },
  { label: 'VxSelect', category: t('layout.search.components'), to: '/select', icon: SquareMenu },
  { label: 'VxModal', category: t('layout.search.components'), to: '/modal', icon: AppWindow },
  { label: 'VxNotify', category: t('layout.search.composables'), to: '/notify', icon: Bell },
  { label: 'VxDebounce', category: t('layout.search.composables'), to: '/debounce', icon: Timer },
  { label: 'VxFormatNumber', category: t('layout.search.composables'), to: '/format-number', icon: Calculator },
  { label: 'VxFiscalCode', category: t('layout.search.composables'), to: '/use-fiscal-code', icon: IdCard },
  { label: 'VxApi', category: t('layout.search.composables'), to: '/use-api', icon: Phone },
]