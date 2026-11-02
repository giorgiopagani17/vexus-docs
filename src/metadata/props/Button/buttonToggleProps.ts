export const propsRows = [
  {
    name: 'modelValue',
    type: 'any | any[]',
    default: 'null',
    desc: 'Valore selezionato (v-model). Con `multiple` è un array di valori, sempre nell\'ordine delle opzioni'
  },
  {
    name: 'options',
    type: 'Array<primitivo | { label?, value, icon?, disabled?, ariaLabel? }>',
    default: '[]',
    desc: 'Opzioni del gruppo: primitivi oppure oggetti. Senza `label` l\'opzione diventa quadrata (solo icona)'
  },
  {
    name: 'multiple',
    type: 'boolean',
    default: 'false',
    desc: 'Abilita la selezione multipla'
  },
  {
    name: 'clearable',
    type: 'boolean',
    default: 'false',
    desc: "Solo in modalità singola: cliccando l'opzione attiva il valore diventa null"
  },
  {
    name: 'variant',
    type: "'solid' | 'outline' | 'ghost' | 'text'",
    default: "'outline'",
    desc: 'Stile delle opzioni non attive'
  },
  {
    name: 'activeVariant',
    type: "'solid' | 'outline' | 'ghost' | 'text'",
    default: "'solid'",
    desc: "Stile dell'opzione attiva"
  },
  {
    name: 'color',
    type: "'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'info' | string",
    default: "'primary'",
    desc: 'Colore del gruppo: token della palette o valore CSS custom'
  },
  {
    name: 'activeColor',
    type: 'string | null',
    default: 'null',
    desc: "Colore dell'opzione attiva, se diverso da `color`"
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    desc: 'Dimensione dei bottoni'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: 'Disabilita tutto il gruppo (una singola opzione si disabilita con `disabled: true` nell\'oggetto)'
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    desc: 'Il gruppo occupa tutta la larghezza e le opzioni si dividono lo spazio in parti uguali'
  },
  {
    name: 'pill',
    type: 'boolean',
    default: 'false',
    desc: 'Estremi del gruppo completamente arrotondati'
  },
  {
    name: 'radius',
    type: 'number | string',
    default: 'null',
    desc: 'Override border-radius degli estremi del gruppo'
  },
  {
    name: 'iconSize',
    type: 'number | string',
    default: 'auto',
    desc: 'Dimensione icone'
  },
  {
    name: 'hoverEffect',
    type: "'brightness' | 'scale' | 'lift' | 'glow' | 'underline' | 'none' | 'custom'",
    default: "'brightness'",
    desc: 'Effetto hover dei bottoni, come in VxButton'
  },
  {
    name: '@update:modelValue',
    type: '(value) => void',
    default: '—',
    desc: 'Emesso al cambio di selezione, con il nuovo valore (v-model)'
  },
  {
    name: '@change',
    type: '(value, option) => void',
    default: '—',
    desc: 'Emesso al cambio di selezione, con il nuovo valore e l\'opzione cliccata'
  },
  {
    name: '#option',
    type: 'slot { option, active }',
    default: '—',
    desc: 'Contenuto personalizzato dell\'opzione'
  }
]

export const getButtonToggleMetadata = (t: (key: string) => string) => ({
  columns: [
    { key: 'name', label: t('common.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('common.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('common.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' }
  ],
  rows: propsRows.map(row => ({ ...row, desc: t(`buttonToggleDocs.props.toggle.${row.name}`) }))
})
