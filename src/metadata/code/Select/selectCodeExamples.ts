export const setupCode = `import VxSelect from '@vexus'`

export const basicCode = `<VxSelect
  v-model="value"
  :options="[
    { label:'Apple', value:'apple' },
    { label:'Banana', value:'banana' }
  ]"
/`

export const optionCode = `<VxSelect
  v-model="user"
  :options="users"
  optionLabel="name"
  optionValue="id"
  emitValue
/>`

export const searchCode = `<VxSelect
  v-model="value"
  searchable
  :options="options"
/>`

export const multipleCode = `<VxSelect
  v-model="values"
  multiple
  emitValue
  :options="options"
/>`

export const chipsCode = `<VxSelect
  v-model="values"
  multiple
  :useChips="false"
/>`

export const clearCode = `<VxSelect
  v-model="value"
  clearable
/>`

export const remoteCode = `<VxSelect
  v-model="user"
  url="/api/users"
  optionLabel="name"
  optionValue="id"
  searchParam="name"
  emitValue
/>`

export const loadingCode = `<VxSelect
  v-model="value"
  loading
/>`

export const slotCode = `<VxSelect
  v-model="value"
  :options="options"
>
  <template #option="{ option }">
    {{ option.label }}
  </template>
</VxSelect>`

export const styleCode = `<VxSelect
  v-model="value"
  label="Categoria"
  hint="Descrizione"
  color="#7c3aed"
  variant="outline"
/>`

export const iconCode = `<VxSelect
  v-model="value"
  :icon="Search"
/>

<VxSelect>
  <template #icon-left>
    <Search />
  </template>
</VxSelect>`

export const eventsCode = `<VxSelect
  v-model="value"
  @open="onOpen"
  @close="onClose"
  @filter="onFilter"
/>`

export const getSelectCodeExamples = (tm) => {
  const labels = tm('selectDocs.codeLabels')
  const source = {
    setupCode, basicCode, optionCode, searchCode, multipleCode, chipsCode,
    clearCode, remoteCode, loadingCode, slotCode, styleCode, iconCode, eventsCode
  }
  const replacements = {
    Apple: labels.apple,
    Banana: labels.banana,
    Orange: labels.orange,
    Categoria: labels.category,
    Descrizione: labels.description,
    'Importa il componente Select': labels.importComponent
  }
  return Object.fromEntries(Object.entries(source).map(([key, value]) => {
    let localized = value
    for (const [from, to] of Object.entries(replacements)) localized = localized.split(from).join(to)
    return [key, localized]
  }))
}