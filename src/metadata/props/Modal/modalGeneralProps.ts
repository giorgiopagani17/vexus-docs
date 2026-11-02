export const propsRows = [
  {
    name: 'modelValue',
    type: 'boolean',
    default: 'false',
    desc: 'Stato aperto/chiuso del modal, usato con v-model',
  },
  {
    name: 'title',
    type: 'string',
    default: "''",
    desc: 'Titolo mostrato nell’header e usato come nome accessibile del dialog',
  },
  {
    name: 'position',
    type: "'center' | 'left' | 'right' | 'top' | 'bottom'",
    default: "'center'",
    desc: 'Dove compare il pannello: finestra centrale, sidebar a sinistra o a destra, striscia in alto o in basso',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg' | 'full'",
    default: "'md'",
    desc: 'Larghezza del pannello (center, left, right) o altezza massima (top, bottom); full occupa tutto lo schermo',
  },
  {
    name: 'color',
    type: 'string',
    default: 'null',
    desc: 'Colore di accento, usato per l’anello di focus del pulsante di chiusura',
  },
  {
    name: 'colors',
    type: '{ background?, text?, border?, overlay? }',
    default: 'null',
    desc: 'Override completo dei colori di pannello, testo, bordi e overlay',
  },
  {
    name: 'radius',
    type: 'number | string',
    default: 'null',
    desc: 'Override del border-radius; un numero viene interpretato come px',
  },
  {
    name: 'padding',
    type: 'number | string',
    default: 'null',
    desc: 'Padding di header, contenuto e footer (stesso valore per tutti); un numero viene interpretato come px',
  },
  {
    name: 'bodyPadding',
    type: 'number | string',
    default: 'null',
    desc: 'Padding del solo contenuto, ha la precedenza su padding; utile con 0 per immagini, mappe o tabelle a filo',
  },
  {
    name: 'dividers',
    type: 'boolean',
    default: 'true',
    desc: 'Mostra le linee di separazione tra header, contenuto e footer',
  },
  {
    name: 'closable',
    type: 'boolean',
    default: 'true',
    desc: 'Mostra la X di chiusura nell’header',
  },
  {
    name: 'closeOnOverlay',
    type: 'boolean',
    default: 'true',
    desc: 'Chiude il modal cliccando sull’overlay',
  },
  {
    name: 'closeOnEsc',
    type: 'boolean',
    default: 'true',
    desc: 'Chiude il modal premendo Esc',
  },
  {
    name: 'closeLabel',
    type: 'string',
    default: "'Chiudi'",
    desc: 'Testo accessibile del pulsante di chiusura',
  },
  {
    name: 'ariaLabel',
    type: 'string',
    default: "''",
    desc: 'Nome accessibile del dialog quando non ci sono né title né slot header',
  },
]

export const slotsRows = [
  {
    name: 'default',
    type: '{ close }',
    desc: 'Contenuto del modal; riceve close per chiuderlo',
  },
  {
    name: 'header',
    type: '{ close, titleId }',
    desc: 'Sostituisce il titolo; titleId collega un titolo custom ad aria-labelledby',
  },
  {
    name: 'footer',
    type: '{ close }',
    desc: 'Area azioni in fondo al modal; riceve close',
  },
]

// `key` è la chiave i18n (i nomi con ":" non sono adatti come chiavi) e non viene passata alla tabella
export const eventsRows = [
  {
    key: 'updateModelValue',
    name: 'update:modelValue',
    type: 'boolean',
    desc: 'Emesso quando il modal richiede di chiudersi (alimenta il v-model)',
  },
  {
    key: 'open',
    name: 'open',
    type: '—',
    desc: 'Emesso quando il modal si apre',
  },
  {
    key: 'close',
    name: 'close',
    type: '—',
    desc: 'Emesso quando il modal si chiude',
  },
]

export const cssVarsRows = [
  { key: 'bg', name: '--vx-modal-bg', default: '#ffffff', desc: 'Sfondo del pannello' },
  { key: 'text', name: '--vx-modal-text', default: '#1f2937', desc: 'Colore del testo' },
  { key: 'border', name: '--vx-modal-border', default: 'rgba(0, 0, 0, 0.08)', desc: 'Bordi del pannello e separatori di header e footer' },
  { key: 'overlay', name: '--vx-modal-overlay', default: 'rgba(0, 0, 0, 0.55)', desc: 'Sfondo che copre la pagina' },
  { key: 'radius', name: '--vx-modal-radius', default: '16px', desc: 'Raggio degli angoli del pannello' },
  { key: 'padding', name: '--vx-modal-padding', default: '18px 24px', desc: 'Padding di header, contenuto e footer (i valori di default variano leggermente per sezione)' },
  { key: 'bodyPadding', name: '--vx-modal-body-padding', default: '20px 24px', desc: 'Padding del solo contenuto' },
  { key: 'accent', name: '--vx-modal-accent', default: '$primary', desc: 'Colore di accento' },
  { key: 'z', name: '--vx-modal-z', default: '1000', desc: 'z-index dell’overlay (utile se select e picker finiscono dietro il modal)' },
]

export const getModalMetadata = (t: any) => ({
  columns: [
    { key: 'name', label: t('common.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('common.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('common.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  rows: propsRows.map((row) => ({
    ...row,
    desc: t(`modalDocs.props.${row.name}`, row.desc),
  })),

  slotsColumns: [
    { key: 'name', label: t('modalDocs.columns.slot'), class: 'prop-name' },
    { key: 'type', label: t('modalDocs.columns.params'), class: 'prop-type' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  slotsRows: slotsRows.map((row) => ({
    ...row,
    desc: t(`modalDocs.slots.${row.name}`, row.desc),
  })),

  eventsColumns: [
    { key: 'name', label: t('modalDocs.columns.event'), class: 'prop-name' },
    { key: 'type', label: t('modalDocs.columns.payload'), class: 'prop-type' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  eventsRows: eventsRows.map(({ key, ...row }) => ({
    ...row,
    desc: t(`modalDocs.events.${key}`, row.desc),
  })),

  cssVarsColumns: [
    { key: 'name', label: t('modalDocs.columns.variable'), class: 'prop-name' },
    { key: 'default', label: t('common.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  cssVarsRows: cssVarsRows.map(({ key, ...row }) => ({
    ...row,
    desc: t(`modalDocs.cssVars.${key}`, row.desc),
  })),
})