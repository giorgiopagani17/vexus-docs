export const setupCode = `import VxInput from '@vexus'`

export const variantCode = `<VxInput v-model="value" placeholder="Outline" />
<VxInput v-model="value" variant="ghost" placeholder="Ghost" />
<VxInput v-model="value" variant="text" placeholder="Text" />`

export const typeCode = `<VxInput v-model="value" type="password" placeholder="Password" />
<VxInput v-model="value" type="email" placeholder="Email" />
<VxInput v-model="value" type="number" placeholder="Numero" />
<VxInput v-model="value" type="tel" placeholder="Telefono" />
<VxInput v-model="value" type="url" placeholder="URL" />
<VxInput v-model="value" type="search" placeholder="Cerca..." />

<VxInput v-model="value" type="file" />`

export const colorCode = `<VxInput v-model="value" color="#7c3aed" placeholder="Hex" />
<VxInput v-model="value" color="rgb(34, 197, 94)" placeholder="rgb()" />
<VxInput v-model="value" color="crimson" placeholder="Nome CSS" />
<VxInput v-model="value" color="var(--vx-primary)" placeholder="CSS variable" />`

export const sizeCode = `<VxInput v-model="value" size="sm" placeholder="Small" />
<VxInput v-model="value" size="md" placeholder="Medium" />
<VxInput v-model="value" size="lg" placeholder="Large" />`

export const labelHintCode = `<VxInput
  v-model="email"
  label="Email"
  hint="Inserisci l'indirizzo associato al tuo account"
  placeholder="nome@dominio.it"
  block
/>

<VxInput
  v-model="username"
  label="Username"
  error
  errorMessage="Questo username non è disponibile"
  placeholder="Scegli uno username"
  block
/>`

export const getInputCodeExamples = (
  tm: (key: string) => unknown,
  namespace = 'inputDocs',
) => {
  const labels = tm(`${namespace}.codeLabels`) as Record<string, string>
  const source = {
    setupCode, variantCode, typeCode, colorCode, sizeCode, labelHintCode, iconCode,
    stateCode, accessCode, layoutCode, focusEffectCode, textareaCode, colorsOverrideCode,
    eventsCode
  }
  const replacements: Record<string, string> = {
    'Outline (default)': labels.outlineDefault, Outline: labels.outline, Ghost: labels.ghost,
    Text: labels.text, Password: labels.password, Email: labels.email, Numero: labels.number,
    Telefono: labels.phone, Cerca: labels.search, Hex: labels.hex, 'Nome CSS': labels.cssName,
    'CSS variable': labels.cssVariable, Small: labels.small, Medium: labels.medium, Large: labels.large,
    'Inserisci l\'indirizzo associato al tuo account': labels.emailHint,
    'Questo username non è disponibile': labels.usernameError, 'Scegli uno username': labels.chooseUsername,
    'Search...': labels.searchPlaceholder, 'Slot left': labels.slotLeft, 'Slot right': labels.slotRight,
    'Loading...': labels.loading, 'Campo svuotabile': labels.clearable, Disabled: labels.disabled,
    Readonly: labels.readonly, 'Full width': labels.fullWidth, 'Custom radius': labels.customRadius,
    Pill: labels.pill, Ring: labels.ring, Lift: labels.lift, Glow: labels.glow, None: labels.none,
    Custom: labels.custom, Messaggio: labels.message, 'Scrivi qui il tuo messaggio...': labels.messagePlaceholder,
    'Colori misti': labels.mixedColors, 'Full custom colors': labels.fullCustomColors,
    'Event demo': labels.eventDemo, 'Interagisci con questo campo': labels.eventPlaceholder,
    'Accetto i termini e condizioni': labels.acceptTerms, 'Opzione A': labels.optionA,
    'Opzione B': labels.optionB, 'Opzione C': labels.optionC, Mensile: labels.monthly,
    Annuale: labels.yearly
  }
  return Object.fromEntries(Object.entries(source).map(([key, value]) => {
    let localized = value
    for (const [from, to] of Object.entries(replacements)) localized = localized.split(from).join(to)
    return [key, localized]
  }))
}

export const iconCode = `<VxInput
  v-model="value"
  :icon="Search"
  iconPosition="left"
  placeholder="Search..."
/>

<VxInput
  v-model="value"
  :icon="Mail"
  iconPosition="right"
  placeholder="Email"
/>

<VxInput v-model="value" placeholder="Slot left">
  <template #icon-left>
    <Search />
  </template>
</VxInput>

<VxInput v-model="value" placeholder="Slot right">
  <template #icon-right>
    <CircleAlert />
  </template>
</VxInput>`

export const stateCode = `<VxInput v-model="value" loading placeholder="Loading..." />
<VxInput v-model="value" clearable placeholder="Campo svuotabile" />`

export const accessCode = `<VxInput v-model="value" disabled placeholder="Disabled" />
<VxInput v-model="value" readonly placeholder="Readonly" />`

export const layoutCode = `<VxInput v-model="value" block placeholder="Full width" />
<VxInput v-model="value" :radius="20" placeholder="Custom radius" />
<VxInput v-model="value" pill placeholder="Pill" />`

export const focusEffectCode = `<VxInput v-model="value" focusEffect="ring" placeholder="Ring" />
<VxInput v-model="value" focusEffect="lift" placeholder="Lift" />
<VxInput v-model="value" focusEffect="glow" placeholder="Glow" />
<VxInput v-model="value" focusEffect="none" placeholder="None" />
<VxInput v-model="value" focusEffect="custom" placeholder="Custom" />`

export const textareaCode = `<VxInput
  v-model="message"
  tag="textarea"
  label="Messaggio"
  placeholder="Scrivi qui il tuo messaggio..."
  hint="Puoi ridimensionare verticalmente il campo"
  block
/>`

export const colorsOverrideCode = `<VxInput
  v-model="value"
  :colors="{
    background: '#faf5ff',
    text: '#3b0764',
    icon: '#7c3aed',
    border: '#d8b4fe',
    focusBorder: '#7c3aed',
    focusShadow: 'rgba(124, 58, 237, 0.22)',
    placeholder: '#a78bfa'
  }"
  :icon="Search"
  placeholder="Full custom colors"
  block
/>

<VxInput
  v-model="value"
  :colors="{
    background: 'white',
    border: '#4ade80',
    text: '#16a34a',
    focusBorder: '#7c3aed',
    placeholder: '#a78bfa'
  }"
  placeholder="Colori misti"
  block
/>`

export const eventsCode = `<VxInput
  v-model="value"
  clearable
  label="Event demo"
  hint="Apri la console o aggancia una notify per vedere gli eventi"
  placeholder="Interagisci con questo campo"
  block
  @focus="onFocus"
  @blur="onBlur"
  @clear="onClear"
  @input="onInput"
/>`
