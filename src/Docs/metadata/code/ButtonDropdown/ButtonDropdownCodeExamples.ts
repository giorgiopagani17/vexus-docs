export const setupCode = `import VxButtonDropdown from '@/Library/components/Button/VxButtonDropdown.vue'`

export const basicCode = `<VxButtonDropdown label="Azioni" :items="actionItems" @select="onSelect" />

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

export const variantCode = `<!-- variant, color, size, colors, hoverEffect... sono le stesse prop di VxButton -->
<VxButtonDropdown label="Esporta" :icon="Download" variant="outline" :items="exportItems" />
<VxButtonDropdown label="Condividi" :icon="Share2" variant="ghost" color="secondary" :items="exportItems" />
<VxButtonDropdown label="Altro" variant="text" size="sm" :items="exportItems" />
<VxButtonDropdown label="Pill" pill :items="exportItems" />`

export const splitCode = `<!--
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

export const placementCode = `<!-- 'bottom-start' (default) | 'bottom-end' | 'top-start' | 'top-end' -->
<VxButtonDropdown label="bottom-end" placement="bottom-end" :items="exportItems" />
<VxButtonDropdown label="top-start" placement="top-start" :items="exportItems" />

<!-- Se sotto (o sopra) non c'è abbastanza spazio, il pannello si ribalta da solo -->`

export const slotCode = `<!-- #item sostituisce il contenuto della voce, #default quello del bottone -->
<VxButtonDropdown :items="userItems">
  <template #default>Utenti</template>

  <template #item="{ item }">
    <span class="user-item">
      <strong>{{ item.label }}</strong>
      <small>{{ item.email }}</small>
    </span>
  </template>
</VxButtonDropdown>`

export const blockCode = `<VxButtonDropdown block label="Full width" :items="exportItems" />
<VxButtonDropdown disabled label="Disabled" :items="exportItems" />`

export const exposeCode = `<VxButtonDropdown ref="dropdown" label="Azioni" :items="actionItems" />

<script setup>
import { ref } from 'vue'

const dropdown = ref(null)

// Metodi esposti: open(), close(), toggle()
const openMenu = () => dropdown.value.open()
</script>`

export const getButtonDropdownCodeExamples = (tm: (key: string) => unknown) => {
  const labels = tm('buttonDropdownDocs.codeLabels') as Record<string, string>
  const source = {
    setupCode,
    basicCode,
    variantCode,
    splitCode,
    placementCode,
    slotCode,
    blockCode,
    exposeCode
  }

  const replacements = {
    Documento: labels.document,
    Modifica: labels.edit,
    Duplica: labels.duplicate,
    Archivia: labels.archive,
    Elimina: labels.delete,
    Azioni: labels.actions,
    Esporta: labels.export,
    Condividi: labels.share,
    Altro: labels.more,
    Salva: labels.save,
    Utenti: labels.users,
    'Salva come bozza': labels.saveDraft,
    'Salva e chiudi': labels.saveClose,
    'Salva e duplica': labels.saveDuplicate,
    'intestazione di sezione': labels.sectionHeaderComment,
    'linea di separazione': labels.separatorComment,
    'Riceve la voce scelta e l\'evento originale': labels.selectComment,
    'variant, color, size, colors, hoverEffect... sono le stesse prop di VxButton': labels.forwardedPropsComment,
    "'bottom-start' (default) | 'bottom-end' | 'top-start' | 'top-end'": labels.placementComment,
    "Se sotto (o sopra) non c'è abbastanza spazio, il pannello si ribalta da solo": labels.flipComment,
    '#item sostituisce il contenuto della voce, #default quello del bottone': labels.slotComment,
    'Metodi esposti: open(), close(), toggle()': labels.exposedComment,
    'Color custom: hex, rgb, o CSS custom property': labels.customColorComment
  }

  return Object.fromEntries(Object.entries(source).map(([key, value]) => {
    let localized = value
    for (const [from, to] of Object.entries(replacements)) {
      localized = localized.split(from).join(to)
    }
    return [key, localized]
  }))
}
