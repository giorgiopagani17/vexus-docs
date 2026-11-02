// src/metadata/code/Breadcrumb/breadcrumbCodeExamples.ts

export const setupCode = `import { VxBreadcrumb } from 'vexus'`

export const basicCode = `<VxBreadcrumb
  :items="[
    { label: 'Home', to: '/' },
    { label: 'Componenti', to: '/button' },
    { label: 'VxBreadcrumb' }
  ]"
/>`

export const displayCode = `import { Home, Folder, FileText } from 'lucide-vue-next'

const items = [
  { label: 'Home', icon: Home, to: '/' },
  { label: 'Progetti', icon: Folder, to: '/projects' },
  { label: 'Report', icon: FileText }
]

// Icona e testo (default)
<VxBreadcrumb :items="items" />

// Solo testo
<VxBreadcrumb :items="items" display="text" />

// Solo icone: il testo resta come nome accessibile e tooltip
<VxBreadcrumb :items="items" display="icon" />

// Icona a destra del testo
<VxBreadcrumb :items="items" iconPosition="right" />`

export const displayItemCode = `// Una singola voce può avere la sua modalità e la sua posizione dell'icona
const items = [
  { label: 'Home', icon: Home, to: '/', display: 'icon' },
  { label: 'Progetti', icon: Folder, to: '/projects' },
  { label: 'Report', icon: FileText, iconPosition: 'right' }
]`

export const separatorCode = `import { Minus } from 'lucide-vue-next'

// Parole chiave: chevron (default), arrow, slash, dot
<VxBreadcrumb :items="items" separator="slash" />

// Un testo qualsiasi
<VxBreadcrumb :items="items" separator=">>" />

// Un componente icona
<VxBreadcrumb :items="items" :separator="Minus" />

// Nessun separatore
<VxBreadcrumb :items="items" separator="none" />`

export const separatorItemCode = `// Un separatore diverso dopo una voce
const items = [
  { label: 'Home', to: '/', separator: '→' },
  { label: 'Progetti', to: '/projects', separator: Minus },
  { label: 'Report' }
]

// Slot: controllo totale (riceve index, la voce prima e quella dopo)
<VxBreadcrumb :items="items">
  <template #separator="{ index }">
    <span class="mio-separatore">{{ index + 1 }}</span>
  </template>
</VxBreadcrumb>`

export const activeCode = `// Icona diversa sulla pagina corrente
{ label: 'Report', icon: FileText, activeIcon: Star }

// Classe e stile sulla pagina corrente
<VxBreadcrumb
  :items="items"
  activeClass="mia-attiva"
  :activeStyle="{ letterSpacing: '1px' }"
/>

// Scegli tu quale voce è corrente (le voci devono essere cliccabili)
<VxBreadcrumb
  :items="items"
  :activeIndex="current"
  @item-click="({ index }) => (current = index)"
/>

// Contenuto personalizzato solo per la pagina corrente
<VxBreadcrumb :items="items">
  <template #active="{ item }">
    <strong>{{ item.label }} ✓</strong>
  </template>
</VxBreadcrumb>`

export const itemsCode = `const items = [
  // Colori solo per questa voce
  { label: 'Home', icon: Home, to: '/', colors: { link: '#16a34a', icon: '#16a34a' } },

  // Voce disabilitata
  { label: 'Archivio', to: '/archive', disabled: true },

  // Link esterno
  { label: 'Documentazione', href: 'https://example.com', target: '_blank' },

  // Contenuto con uno slot tutto suo
  { label: 'Novità', to: '/news', slot: 'badge' },

  // Classe e stile sul link
  { label: 'Report', class: 'mia-voce', style: { fontStyle: 'italic' } }
]

<VxBreadcrumb :items="items">
  <template #badge="{ item }">
    <span class="badge">{{ item.label }}</span>
  </template>
</VxBreadcrumb>`

export const variantsCode = `<VxBreadcrumb :items="items" variant="pill" />
<VxBreadcrumb :items="items" variant="outline" size="lg" />

// Colore di accento, raggio e spazio tra le voci
<VxBreadcrumb :items="items" variant="outline" color="#16a34a" :radius="6" :gap="14" />

// Colori personalizzati
<VxBreadcrumb
  :items="items"
  variant="pill"
  :colors="{
    background: '#f3e8ff',
    link: '#6b21a8',
    current: '#ffffff',
    currentBackground: '#7c3aed'
  }"
/>`

export const longCode = `// Oltre 5 voci, quelle centrali si comprimono in «…»
<VxBreadcrumb :items="items" :maxItems="5" />

// Quante voci restano visibili ai lati
<VxBreadcrumb
  :items="items"
  :maxItems="5"
  :itemsBeforeCollapse="2"
  :itemsAfterCollapse="1"
/>

// Testi lunghi: troncati con «…» oltre 120px
<VxBreadcrumb :items="items" :maxLabelWidth="120" />`

export const exposeCode = `const breadcrumb = ref(null)

// Mostra tutte le voci
breadcrumb.value.expand()

// Ricomprime il percorso
breadcrumb.value.collapse()

<VxBreadcrumb ref="breadcrumb" :items="items" :maxItems="5" />`

export const linkCode = `// Router: to accetta una stringa o un oggetto
{ label: 'Utenti', to: '/users' }
{ label: 'Ricerca', to: { path: '/search', query: { q: 'abc' } } }

// Link classico
{ label: 'Sito', href: 'https://example.com', target: '_blank' }

// Pulsante (senza to né href): gestiscilo con item-click
{ label: 'Apri menu', clickable: true }

// Rende link anche la pagina corrente
<VxBreadcrumb :items="items" linkLast />`

export const routeCode = `// router.js: un meta.breadcrumb per ogni rotta del percorso
{
  path: '/users',
  meta: { breadcrumb: 'Utenti' },
  children: [
    { path: ':id', name: 'user', meta: { breadcrumb: 'Dettaglio' }, component: UserPage }
  ]
}

// Nel componente
const route = useRoute()

const items = computed(() =>
  route.matched
    .filter((record) => record.meta.breadcrumb)
    .map((record) => ({
      label: record.meta.breadcrumb,
      // I parametri servono per le rotte dinamiche come :id
      to: { name: record.name, params: route.params }
    }))
)`

export const eventsCode = `<VxBreadcrumb :items="items" @item-click="onItemClick" />

function onItemClick({ item, index, event }) {
  // item: la voce cliccata, index: la sua posizione, event: l'evento originale
}`

export const getBreadcrumbCodeExamples = (tm: any) => {
  const labels = tm('breadcrumbDocs.codeLabels')
  const source: Record<string, string> = {
    setupCode,
    basicCode,
    displayCode,
    displayItemCode,
    separatorCode,
    separatorItemCode,
    activeCode,
    itemsCode,
    variantsCode,
    longCode,
    exposeCode,
    linkCode,
    routeCode,
    eventsCode,
  }
  // Le chiavi più lunghe prima, così una non viene sostituita dentro un'altra
  const replacements: Record<string, string> = {
    'Una singola voce può avere la sua modalità e la sua posizione dell\'icona': labels.singleItemComment,
    'Solo icone: il testo resta come nome accessibile e tooltip': labels.iconOnlyComment,
    'Icona e testo (default)': labels.bothComment,
    'Icona a destra del testo': labels.iconRightComment,
    'Solo testo': labels.textOnlyComment,
    'Parole chiave: chevron (default), arrow, slash, dot': labels.keywordsComment,
    'Un testo qualsiasi': labels.anyTextComment,
    'Un componente icona': labels.iconComponentComment,
    'Nessun separatore': labels.noSeparatorComment,
    'Un separatore diverso dopo una voce': labels.itemSeparatorComment,
    'Slot: controllo totale (riceve index, la voce prima e quella dopo)': labels.slotSeparatorComment,
    'Icona diversa sulla pagina corrente': labels.activeIconComment,
    'Classe e stile sulla pagina corrente': labels.activeClassComment,
    'Scegli tu quale voce è corrente (le voci devono essere cliccabili)': labels.activeIndexComment,
    'Contenuto personalizzato solo per la pagina corrente': labels.activeSlotComment,
    'Colori solo per questa voce': labels.itemColorsComment,
    'Voce disabilitata': labels.disabledComment,
    'Link esterno': labels.externalComment,
    'Contenuto con uno slot tutto suo': labels.ownSlotComment,
    'Classe e stile sul link': labels.classStyleComment,
    'Colore di accento, raggio e spazio tra le voci': labels.accentComment,
    'Colori personalizzati': labels.customColorsComment,
    'Oltre 5 voci, quelle centrali si comprimono in «…»': labels.collapseComment,
    'Quante voci restano visibili ai lati': labels.beforeAfterComment,
    'Testi lunghi: troncati con «…» oltre 120px': labels.truncateComment,
    'Mostra tutte le voci': labels.expandComment,
    'Ricomprime il percorso': labels.collapseAgainComment,
    'Router: to accetta una stringa o un oggetto': labels.routerComment,
    'Link classico': labels.classicLinkComment,
    'Pulsante (senza to né href): gestiscilo con item-click': labels.buttonComment,
    'Rende link anche la pagina corrente': labels.linkLastComment,
    'router.js: un meta.breadcrumb per ogni rotta del percorso': labels.routeMetaComment,
    'Nel componente': labels.inComponentComment,
    'I parametri servono per le rotte dinamiche come :id': labels.paramsComment,
    'item: la voce cliccata, index: la sua posizione, event: l\'evento originale': labels.eventPayloadComment,
    Componenti: labels.components,
    Progetti: labels.projects,
    Archivio: labels.archive,
    Documentazione: labels.docs,
    Novità: labels.news,
    Utenti: labels.users,
    Ricerca: labels.search,
    Dettaglio: labels.detail,
    'Apri menu': labels.openMenu,
    Sito: labels.site,
  }
  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => {
      let localized = value
      for (const [from, to] of Object.entries(replacements)) {
        localized = localized.split(from).join(to)
      }
      return [key, localized]
    })
  )
}