export const propsColumns = [
  { key: 'name', label: 'Prop', class: 'prop-name' },
  { key: 'type', label: 'Tipo', class: 'prop-type' },
  { key: 'default', label: 'Default', class: 'prop-default' },
  { key: 'desc', label: 'Descrizione', class: 'prop-desc' }
]

export const propsRows = [
  {
    name: 'variant',
    type: "'solid' | 'outline' | 'ghost' | 'text'",
    default: "'solid'",
    desc: 'Stile base del bottone'
  },
  {
    name: 'color',
    type: "'primary' | 'secondary' | 'positive' | 'negative' | 'warning' | 'info' | string",
    default: "'primary'",
    desc: "Palette colore del bottone. Oltre ai 6 token predefiniti, accetta un valore CSS custom qualsiasi ('#7c3aed', 'rgb(...)', 'var(--mio-colore)')"
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    desc: 'Dimensione del bottone'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: 'Disabilita il bottone'
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra spinner e blocca interazione'
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    desc: 'Full width'
  },
  {
    name: 'pill',
    type: 'boolean',
    default: 'false',
    desc: 'Bordo completamente arrotondato'
  },
  {
    name: 'radius',
    type: 'number | string',
    default: 'null',
    desc: 'Override border-radius'
  },
  {
    name: 'icon',
    type: 'Component | Function | null',
    default: 'null',
    desc: 'Icona principale'
  },
  {
    name: 'iconPosition',
    type: "'left' | 'right'",
    default: "'left'",
    desc: 'Posizione icona'
  },
  {
    name: 'iconSize',
    type: 'number | string',
    default: 'auto',
    desc: 'Dimensione icona'
  },
  {
    name: 'colors',
    type: '{ background?, text?, border?, hoverBackground?, hoverText?, hoverBorder?, shadow? }',
    default: 'null',
    desc: "Override completo dei colori, scavalca `color`. Ogni chiave accetta un colore CSS ('#fff', 'rgba(...)'), una custom property ('var(--mio-colore)') oppure un nome token della palette ('primary', 'secondary', ...)"
  },
  {
    name: 'tag',
    type: 'string | object | function',
    default: "'button'",
    desc: 'Elemento root renderizzato'
  }
]

/*
 * Righe per <DesignPropsTable> di VxButtonToggle e VxButtonDropdown.
 * Stessa forma di buttonGeneralProps.js: usare `propsColumns` come colonne.
 */

export const toggleRows = [
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

export const dropdownRows = [
  {
    name: 'items',
    type: '{ label?, value?, icon?, disabled?, color?, href?, target?, closeOnSelect? }[]',
    default: '[]',
    desc: "Voci del menu. Accetta anche `{ separator: true }` per le linee di separazione e `{ header: 'Titolo' }` per le sezioni"
  },
  {
    name: 'label',
    type: 'string',
    default: "''",
    desc: 'Testo del bottone (in alternativa allo slot default)'
  },
  {
    name: 'split',
    type: 'boolean',
    default: 'false',
    desc: 'Bottone diviso: la parte principale emette `click`, il caret apre il menu'
  },
  {
    name: 'placement',
    type: "'bottom-start' | 'bottom-end' | 'top-start' | 'top-end'",
    default: "'bottom-start'",
    desc: 'Posizione del pannello. Si ribalta da solo se manca spazio'
  },
  {
    name: 'closeOnSelect',
    type: 'boolean',
    default: 'true',
    desc: 'Chiude il menu dopo la selezione di una voce (sovrascrivibile per singola voce con `closeOnSelect`)'
  },
  {
    name: 'maxHeight',
    type: 'number | string',
    default: '320',
    desc: 'Altezza massima del pannello, oltre scorre'
  },
  {
    name: 'offset',
    type: 'number',
    default: '6',
    desc: 'Distanza in px tra bottone e pannello'
  },
  {
    name: 'toggleLabel',
    type: 'string',
    default: "'Mostra opzioni'",
    desc: 'aria-label del caret in modalità split'
  },
  {
    name: 'icon',
    type: 'Component | Function | null',
    default: 'null',
    desc: 'Icona a sinistra del testo'
  },
  {
    name: 'iconSize',
    type: 'number | string',
    default: 'auto',
    desc: 'Dimensione icona'
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: "Disabilita il bottone e impedisce l'apertura del menu"
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra spinner e blocca interazione'
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    desc: 'Full width'
  },
  {
    name: 'pill',
    type: 'boolean',
    default: 'false',
    desc: 'Bordo completamente arrotondato'
  },
  {
    name: 'radius',
    type: 'number | string',
    default: 'null',
    desc: 'Override border-radius'
  },
  {
    name: 'variant, color, size, colors, hoverEffect',
    type: 'come VxButton',
    default: '—',
    desc: 'Non dichiarate nel dropdown: vengono passate ai VxButton interni, vedi la tabella di VxButton'
  },
  {
    name: '@click',
    type: '(event) => void',
    default: '—',
    desc: 'Click sul bottone (sulla parte principale in modalità split)'
  },
  {
    name: '@select',
    type: '(item, event) => void',
    default: '—',
    desc: 'Voce scelta'
  },
  {
    name: '@open / @close',
    type: '() => void',
    default: '—',
    desc: 'Il menu si apre / si chiude'
  },
  {
    name: '#default',
    type: 'slot',
    default: '—',
    desc: 'Contenuto del bottone'
  },
  {
    name: '#item',
    type: 'slot { item, index }',
    default: '—',
    desc: 'Contenuto personalizzato della voce'
  },
  {
    name: 'open() / close() / toggle()',
    type: 'metodi (ref)',
    default: '—',
    desc: 'Esposti tramite ref, insieme allo stato `isOpen`'
  }
]

export const getButtonDocsMetadata = (t) => ({
  columns: [
    { key: 'name', label: t('buttonDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('buttonDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('buttonDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('buttonDocs.propsColumns.description'), class: 'prop-desc' }
  ],
  propsRows: propsRows.map(row => ({ ...row, desc: t(`buttonDocs.props.button.${row.name}`) })),
  toggleRows: toggleRows.map(row => ({ ...row, desc: t(`buttonDocs.props.toggle.${row.name}`) })),
  dropdownRows: dropdownRows.map(row => ({ ...row, desc: t(`buttonDocs.props.dropdown.${row.name}`) }))
})