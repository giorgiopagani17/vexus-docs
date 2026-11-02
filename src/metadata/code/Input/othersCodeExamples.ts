const localize = (
  source: string,
  tm: (key: string) => unknown,
  labels: Record<string, string>,
) => {
  const translations = tm('inputOthersDocs.codeLabels') as Record<string, string>
  let localized = source
  for (const [text, key] of Object.entries(labels)) {
    localized = localized.split(text).join(translations[key] ?? text)
  }
  return localized
}

const colorPickerCode = `import VxColorPicker from '@vexus'

<VxColorPicker v-model="color" />
<VxColorPicker v-model="color" clearable />
<VxColorPicker v-model="color" :showHex="false" />`

const rangeCode = `import VxRange from '@vexus'

<VxRange v-model="value" block />
<VxRange v-model="value" :min="0" :max="10" :step="1" color="#22c55e" block />
<VxRange v-model="value" :showValue="false" color="#f97316" block />`

const checkboxCode = `import VxCheckbox from '@vexus'

<VxCheckbox v-model="accepted" label="Accetto i termini e condizioni" />
<VxCheckbox v-model="selected" value="a" label="Opzione A" />
<VxCheckbox v-model="selected" value="b" label="Opzione B" />
<VxCheckbox v-model="accepted" error errorMessage="Devi accettare per continuare" label="Checkbox con errore" />
<VxCheckbox :modelValue="false" indeterminate label="Stato indeterminato" />
<VxCheckbox v-model="loading" loading label="Salvataggio in corso..." />`

const radioCode = `import VxRadio from '@vexus'

<VxRadio v-model="plan" name="plan" value="monthly" label="Mensile" />
<VxRadio v-model="plan" name="plan" value="yearly" label="Annuale" />
<VxRadio v-model="choice" name="choice" value="yes" label="Radio con errore" error errorMessage="Seleziona un'opzione per continuare" />`

const checkboxLabels = {
  'Accetto i termini e condizioni': 'acceptTerms',
  'Opzione A': 'optionA',
  'Opzione B': 'optionB',
  'Devi accettare per continuare': 'mustAccept',
  'Checkbox con errore': 'checkboxError',
  'Stato indeterminato': 'indeterminate',
  'Salvataggio in corso...': 'saving',
}
const radioLabels = {
  Mensile: 'monthly',
  Annuale: 'yearly',
  'Radio con errore': 'radioError',
  "Seleziona un'opzione per continuare": 'selectOption',
}

export const getOthersCodeExamples = (tm: (key: string) => unknown) => ({
  colorPickerCode,
  rangeCode,
  checkboxCode: localize(checkboxCode, tm, checkboxLabels),
  radioCode: localize(radioCode, tm, radioLabels),
})
