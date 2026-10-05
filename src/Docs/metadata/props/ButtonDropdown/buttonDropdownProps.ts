export const propsRows = [
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

export const getButtonDropdownMetadata = (t: (key: string) => string) => ({
  columns: [
    { key: 'name', label: t('buttonDropdownDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('buttonDropdownDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('buttonDropdownDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('buttonDropdownDocs.propsColumns.description'), class: 'prop-desc' }
  ],
  rows: propsRows.map(row => ({ ...row, desc: t(`buttonDropdownDocs.props.dropdown.${row.name}`) }))
})
