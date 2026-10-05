export const setupCode = `import VxButton from '@vexus'`

export const variantCode = `<!-- Variant -->
<VxButton @click="onClick" variant="solid">Solid (default)</Button>
<VxButton @click="onClick" variant="outline">Outline</Button>
<VxButton @click="onClick" variant="ghost">Ghost</Button>
<VxButton @click="onClick" variant="text">Text</Button>`

export const colorCode = `<!-- Color palette -->
<VxButton @click="onClick" color="primary">Primary</Button>
<VxButton @click="onClick" color="secondary">Secondary</Button>
<VxButton @click="onClick" color="positive">Positive</Button>
<VxButton @click="onClick" color="negative">Negative</Button>
<VxButton @click="onClick" color="warning">Warning</Button>
<VxButton @click="onClick" color="info">Info</Button>`

export const colorCustomCode = `<!-- Color custom: hex, rgb, o CSS custom property -->
<VxButton @click="onClick" color="#7c3aed">Hex</Button>
<VxButton @click="onClick" color="var(--brand-color)">CSS var</Button>

<!-- Le variabili SCSS ($primary, ecc.) NON sono utilizzabili a runtime:
     usa il nome token ('primary') oppure var(--vx-primary), entrambi
     derivati dalla stessa palette ed esposti come CSS custom property -->
<VxButton @click="onClick" color="var(--vx-primary)">Palette via var</Button>`

export const sizeCode = `<!-- Size -->
<VxButton @click="onClick" size="sm">Small</Button>
<VxButton @click="onClick" size="md">Medium</Button>
<VxButton @click="onClick" size="lg">Large</Button>`

export const iconCode = `<!-- Icon via prop -->
<VxButton @click="onClick" :icon="Sparkles" iconPosition="left">
  Left icon
</Button>

<VxButton @click="onClick" :icon="Sparkles" iconPosition="right">
  Right icon
</Button>

<!-- Icon via slot -->
<VxButton @click="onClick">
  <template #icon-left>
    <Sparkles />
  </template>
  Slot left
</Button>

<VxButton @click="onClick">
  Slot right
  <template #icon-right>
    <Sparkles />
  </template>
</Button>`

export const loadingCode = `<!-- Loading -->
<VxButton @click="onClick" loading>Loading</Button>

<VxButton @click="onClick" :loading="isLoading">
  Async action
</Button>`

export const disabledCode = `<!-- Disabled -->
<VxButton @click="onClick" disabled>Disabled</Button>

<VxButton @click="onClick" variant="ghost" disabled>
  Ghost disabled
</Button>`

export const blockCode = `<!-- Block full width -->
<VxButton @click="onClick" block>
  Full width
</Button>`

export const radiusCode = `<!-- Radius -->
<VxButton @click="onClick">Default</Button>

<VxButton @click="onClick" :radius="20">
  Custom radius
</Button>

<VxButton @click="onClick" pill>
  Pill button
</Button>`

export const iconOnlyCode = `<!-- Icon only -->
<VxButton @click="onClick" :icon="Sparkles" />

<VxButton @click="onClick" :icon="Sparkles" size="lg" />`

export const colorsOverrideCode = `<!-- Custom colors override -->
<VxButton
  @click="onClick"
  :colors="{
    background: '#7c3aed',
    text: '#ffffff',
    hoverBackground: '#6d28d9',
    border: 'transparent',
    shadow: 'rgba(124,58,237,0.3)'
  }"
>
  Custom button
</Button>

<!-- Le chiavi accettano anche i nomi token della palette interna -->
<VxButton
  @click="onClick"
  :colors="{
    background: 'positive',
    hoverBackground: 'primary'
  }"
>
  Token override
</Button>`

export const eventsCode = `<!-- Click event -->
<VxButton @click="handleClick">
  Click me
</Button>

<script setup>
const handleClick = (event) => {
  console.log('clicked', event)
}
</script>`

export const hoverEffectCode = `<!-- Hover effect -->
<VxButton hoverEffect="brightness">
  Brightness
</Button>


<VxButton hoverEffect="scale">
  Scale
</Button>


<VxButton hoverEffect="lift">
  Lift
</Button>


<VxButton hoverEffect="glow">
  Glow
</Button>


<VxButton variant="text" hoverEffect="underline">
  Underline
</Button>


<VxButton hoverEffect="none">
  None
</Button>


<!-- Custom: nessun effetto integrato, lo gestisci tu -->
<VxButton hoverEffect="custom" class="my-custom-hover">
  Custom
</Button>


<style scoped>
.my-custom-hover {
  &:hover:not(.vx-btn--disabled) {
    background: repeating-linear-gradient(
      45deg,
      var(--btn-bg),
      var(--btn-bg) 10px,
      color-mix(in srgb, var(--btn-bg) 70%, black) 10px,
      color-mix(in srgb, var(--btn-bg) 70%, black) 20px
    );
  }
}
</style>`

/* =====================================================================
 * VxButtonToggle
 * ===================================================================== */

export const toggleSetupCode = `import VxButtonToggle from '@/Library/components/Button/VxButtonToggle.vue'`

export const toggleBasicCode = `<VxButtonToggle v-model="viewMode" :options="viewOptions" />

<script setup>
import { ref } from 'vue'
import { List, LayoutGrid } from 'lucide-vue-next'

const viewMode = ref('list')

const viewOptions = [
  { label: 'Lista', value: 'list', icon: List },
  { label: 'Griglia', value: 'grid', icon: LayoutGrid },
]
</script>`

export const toggleMultipleCode = `<VxButtonToggle v-model="days" multiple :options="dayOptions" />

<script setup>
import { ref } from 'vue'

// Con "multiple" il v-model è un array (sempre nell'ordine delle opzioni)
const days = ref(['Lun', 'Mer'])

// Le opzioni possono essere anche semplici primitivi
const dayOptions = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven']
</script>`

export const toggleIconOnlyCode = `<VxButtonToggle v-model="textFormat" multiple :options="formatOptions" />

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

export const toggleStyleCode = `<!-- variant: stile delle opzioni NON attive (l'attiva usa activeVariant, default solid) -->
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

export const toggleClearableCode = `<!-- Cliccando l'opzione già attiva, il valore torna a null -->
<VxButtonToggle v-model="value" clearable :options="options" />`

export const toggleBlockCode = `<!-- Il gruppo occupa tutta la larghezza, le opzioni si dividono lo spazio in parti uguali -->
<VxButtonToggle v-model="viewMode" block :options="viewOptions" />`

/* =====================================================================
 * VxButtonDropdown
 * ===================================================================== */

export const dropdownSetupCode = `import VxButtonDropdown from '@/Library/components/Button/VxButtonDropdown.vue'`

export const dropdownBasicCode = `<VxButtonDropdown label="Azioni" :items="actionItems" @select="onSelect" />

<script setup>
import { Pencil, Copy, Archive, Trash2 } from 'lucide-vue-next'

const actionItems = [
  { header: 'Documento' },                                        // intestazione di sezione
  { label: 'Modifica', value: 'edit', icon: Pencil },
  { label: 'Duplica', value: 'duplicate', icon: Copy },
  { label: 'Archivia', value: 'archive', icon: Archive, disabled: true },
  { separator: true },                                            // linea di separazione
  { label: 'Elimina', value: 'delete', icon: Trash2, color: 'negative' },
]

// Riceve la voce scelta e l'evento originale
const onSelect = (item, event) => {
  console.log(item.value)
}
</script>`

export const dropdownVariantCode = `<!-- variant, color, size, colors, hoverEffect... sono le stesse prop di VxButton -->
<VxButtonDropdown label="Esporta" :icon="Download" variant="outline" :items="exportItems" />
<VxButtonDropdown label="Condividi" :icon="Share2" variant="ghost" color="secondary" :items="exportItems" />
<VxButtonDropdown label="Altro" variant="text" size="sm" :items="exportItems" />
<VxButtonDropdown label="Pill" pill :items="exportItems" />`

export const dropdownSplitCode = `<!--
  split: la parte principale emette "click" (azione di default),
  il caret a destra apre il menu con le alternative
-->
<VxButtonDropdown
  split
  label="Salva"
  :icon="Save"
  :items="saveItems"
  @click="save"
  @select="onSelect"
/>

<VxButtonDropdown split variant="outline" label="Salva" :items="saveItems" />`

export const dropdownPlacementCode = `<!-- 'bottom-start' (default) | 'bottom-end' | 'top-start' | 'top-end' -->
<VxButtonDropdown label="bottom-end" placement="bottom-end" :items="exportItems" />
<VxButtonDropdown label="top-start" placement="top-start" :items="exportItems" />

<!-- Se sotto (o sopra) non c'è abbastanza spazio, il pannello si ribalta da solo -->`

export const dropdownSlotCode = `<!-- #item sostituisce il contenuto della voce, #default quello del bottone -->
<VxButtonDropdown :items="userItems">
  <template #default>Utenti</template>

  <template #item="{ item }">
    <span class="user-item">
      <strong>{{ item.label }}</strong>
      <small>{{ item.email }}</small>
    </span>
  </template>
</VxButtonDropdown>`

export const dropdownBlockCode = `<VxButtonDropdown block label="Full width" :items="exportItems" />
<VxButtonDropdown disabled label="Disabled" :items="exportItems" />`

export const dropdownExposeCode = `<VxButtonDropdown ref="dropdown" label="Azioni" :items="actionItems" />

<script setup>
import { ref } from 'vue'

const dropdown = ref(null)

// Metodi esposti: open(), close(), toggle()
const openMenu = () => dropdown.value.open()
</script>`

const codeExampleKeys = [
  'setupCode', 'variantCode', 'colorCode', 'colorCustomCode', 'sizeCode', 'iconCode',
  'loadingCode', 'disabledCode', 'blockCode', 'radiusCode', 'hoverEffectCode',
  'iconOnlyCode', 'colorsOverrideCode', 'eventsCode', 'toggleSetupCode',
  'toggleBasicCode', 'toggleMultipleCode', 'toggleIconOnlyCode', 'toggleStyleCode',
  'toggleClearableCode', 'toggleBlockCode', 'dropdownSetupCode', 'dropdownBasicCode',
  'dropdownVariantCode', 'dropdownSplitCode', 'dropdownPlacementCode', 'dropdownSlotCode',
  'dropdownBlockCode', 'dropdownExposeCode'
]

export const getButtonCodeExamples = (tm: (key: string) => unknown) => {
  const labels = tm('buttonDocs.codeLabels') as Record<string, string>
  const source = {
    setupCode, variantCode, colorCode, colorCustomCode, sizeCode, iconCode,
    loadingCode, disabledCode, blockCode, radiusCode, hoverEffectCode,
    iconOnlyCode, colorsOverrideCode, eventsCode, toggleSetupCode,
    toggleBasicCode, toggleMultipleCode, toggleIconOnlyCode, toggleStyleCode,
    toggleClearableCode, toggleBlockCode, dropdownSetupCode, dropdownBasicCode,
    dropdownVariantCode, dropdownSplitCode, dropdownPlacementCode, dropdownSlotCode,
    dropdownBlockCode, dropdownExposeCode
  }

  const replacements = {
    'Solid (default)': labels.solid, Outline: labels.outline, Ghost: labels.ghost, Text: labels.text,
    Primary: labels.primary, Secondary: labels.secondary, Positive: labels.positive,
    Negative: labels.negative, Warning: labels.warning, Info: labels.info,
    Small: labels.small, Medium: labels.medium, Large: labels.large,
    'Left icon': labels.leftIcon, 'Right icon': labels.rightIcon,
    'Slot left': labels.slotLeft, 'Slot right': labels.slotRight,
    Loading: labels.loading, 'Async action': labels.asyncAction, Disabled: labels.disabled,
    'Full width': labels.fullWidth, Default: labels.default, 'Custom radius': labels.customRadius,
    'Pill button': labels.pillButton, 'Custom button': labels.customButton,
    'Token override': labels.tokenOverride, 'Click me': labels.clickMe,
    Brightness: labels.brightness, Scale: labels.scale, Lift: labels.lift, Glow: labels.glow,
    Underline: labels.underline, None: labels.none, Lista: labels.list, Griglia: labels.grid,
    Grassetto: labels.bold, Corsivo: labels.italic, Sottolineato: labels.underlineText,
    Documento: labels.document, Modifica: labels.edit, Duplica: labels.duplicate,
    Archivia: labels.archive, Elimina: labels.delete, Azioni: labels.actions,
    Esporta: labels.export, Condividi: labels.share, Altro: labels.more, Salva: labels.save,
    Utenti: labels.users, 'Salva come bozza': labels.saveDraft, 'Salva e chiudi': labels.saveClose,
    'Salva e duplica': labels.saveDuplicate,
    'Color palette': labels.colorPalette, 'Color custom: hex, rgb o CSS custom property': labels.customColorComment,
    'Hover effect': labels.hoverComment, 'Icon only': labels.iconOnlyComment,
    'Custom colors override': labels.customColorsComment, 'Click event': labels.clickComment,
    'Block full width': labels.blockComment, 'Metodi esposti: open(), close(), toggle()': labels.exposedComment,
    Variant: labels.variantComment,
    'Color custom: hex, rgb, o CSS custom property': labels.customColorComment,
    Size: labels.sizeComment, 'Icon via prop': labels.iconPropComment, 'Icon via slot': labels.iconSlotComment,
    'Le variabili SCSS ($primary, ecc.) NON sono utilizzabili a runtime:': labels.scssComment,
    '     usa il nome token (\'primary\') oppure var(--vx-primary), entrambi': labels.scssTokenComment,
    '     derivati dalla stessa palette ed esposti come CSS custom property': labels.scssPropertyComment,
    'Custom: nessun effetto integrato, lo gestisci tu': labels.customHoverComment,
    'Con "multiple" il v-model è un array (sempre nell\'ordine delle opzioni)': labels.multipleComment,
    'Le opzioni possono essere anche semplici primitivi': labels.primitiveComment,
    'Senza label l\'opzione diventa quadrata: aggiungi ariaLabel per l\'accessibilità': labels.accessibilityComment,
    'variant: stile delle opzioni NON attive (l\'attiva usa activeVariant, default solid)': labels.inactiveVariantComment,
    'colore diverso per l\'opzione attiva': labels.activeColorComment,
    dimensioni: labels.sizeComment, 'estremi completamente arrotondati': labels.pillComment,
    'disabilita tutto il gruppo (o una singola opzione con { disabled: true })': labels.disableGroupComment,
    'Cliccando l\'opzione già attiva, il valore torna a null': labels.clearableComment,
    'Il gruppo occupa tutta la larghezza, le opzioni si dividono lo spazio in parti uguali': labels.toggleBlockComment,
    'intestazione di sezione': labels.sectionHeaderComment, 'linea di separazione': labels.separatorComment,
    'Riceve la voce scelta e l\'evento originale': labels.selectComment,
    'variant, color, size, colors, hoverEffect... sono le stesse prop di VxButton': labels.forwardedPropsComment,
    "'bottom-start' (default) | 'bottom-end' | 'top-start' | 'top-end'": labels.placementComment,
    "Se sotto (o sopra) non c'è abbastanza spazio, il pannello si ribalta da solo": labels.flipComment,
    '#item sostituisce il contenuto della voce, #default quello del bottone': labels.slotComment
  }

  return Object.fromEntries(Object.entries(source).map(([key, value]) => {
    let localized = value
    for (const [from, to] of Object.entries(replacements)) {
      localized = localized.split(from).join(to)
    }
    return [key, localized]
  }))
}