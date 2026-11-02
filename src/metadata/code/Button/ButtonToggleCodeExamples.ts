export const setupCode = `import VxButtonToggle from '@vexus`

export const basicCode = `<VxButtonToggle v-model="viewMode" :options="viewOptions" />

<script setup>
import { ref } from 'vue'
import { List, LayoutGrid } from 'lucide-vue-next'

const viewMode = ref('list')

const viewOptions = [
  { label: 'Lista', value: 'list', icon: List },
  { label: 'Griglia', value: 'grid', icon: LayoutGrid },
]
</script>`

export const multipleCode = `<VxButtonToggle v-model="days" multiple :options="dayOptions" />

<script setup>
import { ref } from 'vue'

// Con "multiple" il v-model è un array (sempre nell'ordine delle opzioni)
const days = ref(['Lun', 'Mer'])

// Le opzioni possono essere anche semplici primitivi
const dayOptions = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven']
</script>`

export const iconOnlyCode = `<VxButtonToggle v-model="textFormat" multiple :options="formatOptions" />

<script setup>
import { ref } from 'vue'
import { Bold, Italic, Underline } from 'lucide-vue-next'

const textFormat = ref(['bold'])

// Senza label l'opzione diventa quadrata: aggiungi ariaLabel per l'accessibilità
const formatOptions = [
  { value: 'bold', icon: Bold, ariaLabel: 'Grassetto' },
  { value: 'italic', icon: Italic, ariaLabel: 'Corsivo' },
  { value: 'underline', icon: Underline, ariaLabel: 'Sottolineato' },
]
</script>`

export const styleCode = `<!-- variant: stile delle opzioni NON attive (l'attiva usa activeVariant, default solid) -->
<VxButtonToggle v-model="value" :options="options" variant="ghost" />

<!-- colore diverso per l'opzione attiva -->
<VxButtonToggle v-model="value" :options="options" color="secondary" active-color="positive" />

<!-- dimensioni -->
<VxButtonToggle v-model="value" :options="options" size="sm" />
<VxButtonToggle v-model="value" :options="options" size="lg" />

<!-- estremi completamente arrotondati -->
<VxButtonToggle v-model="value" :options="options" pill />

<!-- disabilita tutto il gruppo (o una singola opzione con { disabled: true }) -->
<VxButtonToggle v-model="value" :options="options" disabled />`

export const clearableCode = `<!-- Cliccando l'opzione già attiva, il valore torna a null -->
<VxButtonToggle v-model="value" clearable :options="options" />`

export const blockCode = `<!-- Il gruppo occupa tutta la larghezza, le opzioni si dividono lo spazio in parti uguali -->
<VxButtonToggle v-model="viewMode" block :options="viewOptions" />`

export const getButtonToggleCodeExamples = (tm: (key: string) => unknown) => {
  const labels = tm('buttonToggleDocs.codeLabels') as Record<string, string>
  const source = {
    setupCode,
    basicCode,
    multipleCode,
    iconOnlyCode,
    styleCode,
    clearableCode,
    blockCode
  }

  const replacements = {
    Lista: labels.list,
    Griglia: labels.grid,
    Grassetto: labels.bold,
    Corsivo: labels.italic,
    Sottolineato: labels.underlineText,
    'Con "multiple" il v-model è un array (sempre nell\'ordine delle opzioni)': labels.multipleComment,
    'Le opzioni possono essere anche semplici primitivi': labels.primitiveComment,
    'Senza label l\'opzione diventa quadrata: aggiungi ariaLabel per l\'accessibilità': labels.accessibilityComment,
    'variant: stile delle opzioni NON attive (l\'attiva usa activeVariant, default solid)': labels.inactiveVariantComment,
    'colore diverso per l\'opzione attiva': labels.activeColorComment,
    dimensioni: labels.sizeComment,
    'estremi completamente arrotondati': labels.pillComment,
    'disabilita tutto il gruppo (o una singola opzione con { disabled: true })': labels.disableGroupComment,
    'Cliccando l\'opzione già attiva, il valore torna a null': labels.clearableComment,
    'Il gruppo occupa tutta la larghezza, le opzioni si dividono lo spazio in parti uguali': labels.toggleBlockComment
  }

  return Object.fromEntries(Object.entries(source).map(([key, value]) => {
    let localized = value
    for (const [from, to] of Object.entries(replacements)) {
      localized = localized.split(from).join(to)
    }
    return [key, localized]
  }))
}
