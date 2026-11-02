// src/metadata/props/Breadcrumb/breadcrumbGeneralProps.ts

// `key` è la chiave i18n della riga (quando il nome non è adatto) e non viene passata alla tabella.

export const propsRows = [
  { name: 'items', type: 'array', default: '[]', desc: 'Voci del percorso, dalla radice alla pagina corrente' },
  { name: 'display', type: "'both' | 'text' | 'icon'", default: "'both'", desc: 'Cosa mostrare di ogni voce: icona e testo, solo testo o solo icona' },
  { name: 'iconPosition', type: "'left' | 'right'", default: "'left'", desc: 'Posizione dell’icona rispetto al testo' },
  { name: 'iconSize', type: 'number', default: 'null', desc: 'Dimensione delle icone in px; di default dipende da size' },
  { name: 'separator', type: "string | Component | 'none'", default: "'chevron'", desc: 'Separatore: chevron, arrow, slash, dot, un testo qualsiasi, un componente icona oppure none' },
  { name: 'separatorSize', type: 'number', default: 'null', desc: 'Dimensione delle icone dei separatori in px' },
  { name: 'separatorClass', type: 'string | array | object', default: 'null', desc: 'Classi aggiuntive sul contenitore di ogni separatore' },
  { name: 'size', type: "'sm' | 'md' | 'lg'", default: "'md'", desc: 'Dimensione del testo e delle icone' },
  { name: 'variant', type: "'plain' | 'pill' | 'outline'", default: "'plain'", desc: 'Aspetto delle voci: solo testo, pillola o con bordo' },
  { name: 'color', type: 'string', default: 'null', desc: 'Colore di accento: hover dei link, focus e pagina corrente nelle varianti pill e outline' },
  { name: 'colors', type: 'object', default: 'null', desc: 'Override dei colori: vedi la tabella delle variabili CSS per le chiavi disponibili' },
  { name: 'gap', type: 'number | string', default: 'null', desc: 'Spazio tra le voci e i separatori; un numero è in px' },
  { name: 'radius', type: 'number | string', default: 'null', desc: 'Raggio degli angoli delle varianti pill e outline; un numero è in px' },
  { name: 'itemClass', type: 'string | array | object', default: 'null', desc: 'Classi aggiuntive su tutti i link' },
  { name: 'activeClass', type: 'string | array | object', default: 'null', desc: 'Classi aggiuntive sul link della pagina corrente' },
  { name: 'activeStyle', type: 'string | object', default: 'null', desc: 'Stile aggiuntivo sul link della pagina corrente' },
  { name: 'activeIndex', type: 'number', default: 'null', desc: 'Indice della voce corrente; ha la precedenza su item.current (di default è l’ultima)' },
  { name: 'maxItems', type: 'number', default: 'null', desc: 'Oltre questo numero di voci, quelle centrali si comprimono in un pulsante «…»' },
  { name: 'itemsBeforeCollapse', type: 'number', default: '1', desc: 'Voci sempre visibili all’inizio quando il percorso è compresso' },
  { name: 'itemsAfterCollapse', type: 'number', default: '2', desc: 'Voci sempre visibili alla fine quando il percorso è compresso (minimo 1)' },
  { name: 'linkLast', type: 'boolean', default: 'false', desc: 'Rende link anche la pagina corrente, mantenendo aria-current' },
  { name: 'maxLabelWidth', type: 'number | string', default: 'null', desc: 'Larghezza massima del testo di ogni voce: oltre, si tronca con «…» e compare il titolo completo' },
  { name: 'ariaLabel', type: 'string', default: "'Percorso di navigazione'", desc: 'Nome accessibile della navigazione' },
  { name: 'expandLabel', type: 'string', default: "'Mostra il percorso completo'", desc: 'Nome accessibile del pulsante «…»' },
]

export const itemFieldsRows = [
  { name: 'label', type: 'string', desc: 'Testo della voce' },
  { name: 'icon', type: 'Component', desc: 'Icona della voce, per esempio da lucide-vue-next' },
  { name: 'activeIcon', type: 'Component', desc: 'Icona usata quando la voce è la pagina corrente' },
  { name: 'display', type: "'both' | 'text' | 'icon'", desc: 'Sovrascrive la prop display solo per questa voce' },
  { name: 'iconPosition', type: "'left' | 'right'", desc: 'Sovrascrive la prop iconPosition solo per questa voce' },
  { name: 'to', type: 'string | object', desc: 'Destinazione del router; senza vue-router una stringa diventa un href' },
  { name: 'href', type: 'string', desc: 'Link classico' },
  { name: 'target', type: 'string', desc: 'Target del link; con _blank viene aggiunto rel="noopener noreferrer"' },
  { name: 'clickable', type: 'boolean', desc: 'Senza to né href rende la voce un pulsante, da gestire con item-click' },
  { name: 'disabled', type: 'boolean', desc: 'Voce non cliccabile e attenuata' },
  { name: 'current', type: 'boolean', desc: 'Marca la voce come pagina corrente (di default è l’ultima)' },
  { name: 'ariaLabel', type: 'string', desc: 'Nome accessibile; con la sola icona si usa il testo se manca' },
  { name: 'title', type: 'string', desc: 'Tooltip nativo; con la sola icona si usa il testo se manca' },
  { name: 'separator', type: "string | Component | false", desc: 'Separatore dopo questa voce; none o false lo toglie' },
  { name: 'colors', type: 'object', desc: 'Colori solo per questa voce, con le stesse chiavi della prop colors' },
  { name: 'class', type: 'string | array | object', desc: 'Classi sul link della voce' },
  { name: 'activeClass', type: 'string | array | object', desc: 'Classi sul link solo quando la voce è la pagina corrente' },
  { name: 'style', type: 'string | object', desc: 'Stile sul link della voce' },
  { name: 'slot', type: 'string', desc: 'Nome di uno slot con cui renderizzare il contenuto di questa voce' },
]

export const slotsRows = [
  {
    name: 'item',
    type: '{ item, index, isCurrent, isFirst, isLast, display, iconSize }',
    desc: 'Sostituisce il contenuto di ogni voce (icona e testo)',
  },
  {
    name: 'active',
    type: '{ item, index, isCurrent, isFirst, isLast, display, iconSize }',
    desc: 'Sostituisce il contenuto della sola pagina corrente; ha la precedenza su item',
  },
  {
    key: 'custom',
    name: '<item.slot>',
    type: '{ item, index, isCurrent, isFirst, isLast, display, iconSize }',
    desc: 'Slot con il nome indicato in item.slot: ha la precedenza su active e item',
  },
  {
    name: 'separator',
    type: '{ index, item, next }',
    desc: 'Sostituisce il separatore: riceve la voce che precede (item) e quella che segue (next)',
  },
]

export const eventsRows = [
  {
    key: 'itemClick',
    name: 'item-click',
    type: '{ item, index, event }',
    desc: 'Emesso al click su una voce cliccabile, con la voce, il suo indice e l’evento originale',
  },
]

export const exposeRows = [
  { name: 'expand', type: '() => void', desc: 'Mostra tutte le voci di un percorso compresso' },
  { name: 'collapse', type: '() => void', desc: 'Ricomprime il percorso, se maxItems lo richiede' },
]

export const cssVarsRows = [
  { key: 'accent', name: '--vx-breadcrumb-accent', default: 'colore primario', desc: 'Colore di accento (prop color)' },
  { key: 'text', name: '--vx-breadcrumb-text', default: 'inherit', desc: 'Colore del testo del contenitore' },
  { key: 'link', name: '--vx-breadcrumb-link', default: 'testo al 70%', desc: 'Colore delle voci' },
  { key: 'linkHover', name: '--vx-breadcrumb-link-hover', default: 'accento', desc: 'Colore delle voci al passaggio del mouse' },
  { key: 'current', name: '--vx-breadcrumb-current', default: 'colore del testo', desc: 'Colore della pagina corrente' },
  { key: 'icon', name: '--vx-breadcrumb-icon', default: 'colore della voce', desc: 'Colore delle icone' },
  { key: 'currentIcon', name: '--vx-breadcrumb-current-icon', default: 'colore delle icone', desc: 'Colore dell’icona della pagina corrente' },
  { key: 'separator', name: '--vx-breadcrumb-separator', default: 'testo al 40%', desc: 'Colore dei separatori' },
  { key: 'bg', name: '--vx-breadcrumb-bg', default: 'testo all’8%', desc: 'Sfondo delle voci nella variante pill' },
  { key: 'hoverBg', name: '--vx-breadcrumb-hover-bg', default: 'accento al 14%', desc: 'Sfondo delle voci al passaggio del mouse' },
  { key: 'currentBg', name: '--vx-breadcrumb-current-bg', default: 'accento al 16%', desc: 'Sfondo della pagina corrente' },
  { key: 'border', name: '--vx-breadcrumb-border', default: 'trasparente (pill)', desc: 'Bordo delle voci nelle varianti pill e outline' },
  { key: 'hoverBorder', name: '--vx-breadcrumb-hover-border', default: 'accento (outline)', desc: 'Bordo delle voci al passaggio del mouse' },
  { key: 'currentBorder', name: '--vx-breadcrumb-current-border', default: 'accento (outline)', desc: 'Bordo della pagina corrente' },
  { key: 'gap', name: '--vx-breadcrumb-gap', default: '8px', desc: 'Spazio tra le voci e i separatori (prop gap)' },
  { key: 'radius', name: '--vx-breadcrumb-radius', default: '999px (pill), 8px (outline)', desc: 'Raggio degli angoli (prop radius)' },
  { key: 'labelMax', name: '--vx-breadcrumb-label-max', default: '—', desc: 'Larghezza massima del testo (prop maxLabelWidth)' },
]

const translate = (t: any, namespace: string, rows: any[]) =>
  rows.map(({ key, ...row }) => ({
    ...row,
    desc: t(`breadcrumbDocs.${namespace}.${key ?? row.name}`, row.desc),
  }))

export const getBreadcrumbMetadata = (t: any) => ({
  columns: [
    { key: 'name', label: t('common.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('common.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('common.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  // Tabelle senza la colonna "default": campi di una voce e metodi esposti
  threeColumns: [
    { key: 'name', label: t('common.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('common.propsColumns.type'), class: 'prop-type' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  rows: translate(t, 'props', propsRows),
  itemFieldsRows: translate(t, 'itemFields', itemFieldsRows),

  slotsColumns: [
    { key: 'name', label: t('breadcrumbDocs.columns.slot'), class: 'prop-name' },
    { key: 'type', label: t('breadcrumbDocs.columns.params'), class: 'prop-type' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  slotsRows: translate(t, 'slotsDesc', slotsRows),

  eventsColumns: [
    { key: 'name', label: t('breadcrumbDocs.columns.event'), class: 'prop-name' },
    { key: 'type', label: t('breadcrumbDocs.columns.payload'), class: 'prop-type' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  eventsRows: translate(t, 'eventsDesc', eventsRows),

  exposeRows: translate(t, 'exposeDesc', exposeRows),

  cssVarsColumns: [
    { key: 'name', label: t('breadcrumbDocs.columns.variable'), class: 'prop-name' },
    { key: 'default', label: t('common.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  cssVarsRows: translate(t, 'cssVars', cssVarsRows),
})