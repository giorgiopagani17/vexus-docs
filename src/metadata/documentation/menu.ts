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
  TriangleAlert,
  Phone,
  Home,
  Blocks,
  Puzzle,
  BookOpen,
  IdCard,
} from 'lucide-vue-next'

export interface MenuLeaf {
  id: string
  label: string
  icon: Component
  to: string
}

export interface MenuGroup {
  id: string
  label: string
  icon: Component
  children: MenuLeaf[]
}

export type MenuItem = MenuLeaf | MenuGroup

export const isMenuGroup = (item: MenuItem): item is MenuGroup => 'children' in item

export const getMenu = (t: ComposerTranslation): MenuItem[] => [
  { id: 'home', label: t('layout.menu.home'), icon: Home, to: '/' },
  { id: 'documentation', label: t('layout.menu.documentation'), icon: BookOpen, to: '/documentation' },
  { id: 'versions', label: t('layout.menu.versions'), icon: BookOpen, to: '/versions' },
  { id: 'reports', label: t('layout.menu.reports'), icon: TriangleAlert, to: '/reports' },
  {
    id: 'uiComponents',
    label: t('layout.menu.uiComponents'),
    icon: Blocks,
    children: [
      { id: 'button', label: 'VxButton', icon: MousePointerClick, to: '/button' },
      { id: 'buttonToggle', label: 'VxButtonToggle', icon: ToggleLeft, to: '/button-toggle' },
      { id: 'buttonDropdown', label: 'VxButtonDropdown', icon: ChevronsUpDown, to: '/button-dropdown' },
      { id: 'input', label: 'VxInput', icon: TextCursorInput, to: '/input' },
      { id: 'inputOthers', label: 'VxInput Others', icon: Blocks, to: '/input/others' },
      { id: 'inputPickers', label: 'VxInput Pickers', icon: CalendarDays, to: '/input/pickers' },
      { id: 'select', label: 'VxSelect', icon: SquareMenu, to: '/select' },
    ],
  },
  {
    id: 'composables',
    label: t('layout.menu.composables'),
    icon: Puzzle,
    children: [
      { id: 'notify', label: 'VxNotify', icon: Bell, to: '/notify' },
      { id: 'api', label: 'VxApi', icon: Phone, to: '/use-api' },
      { id: 'fiscalCode', label: 'VxFiscalCode', icon: IdCard, to: '/use-fiscal-code' },
    ],
  },
]