const localize = (
  source: string,
  tm: (key: string) => unknown,
  labels: Record<string, string>,
) => {
  const translations = tm('inputPickersDocs.codeLabels') as Record<string, string>
  let localized = source
  for (const [text, key] of Object.entries(labels)) {
    localized = localized.split(text).join(translations[key] ?? text)
  }
  return localized
}

const dateCode = `import VxDate from '@vexus'

<VxDate v-model="date" placeholder="Seleziona una data" />
<VxDate v-model="date" clearable placeholder="Con clear" />
<VxDate v-model="birthDate" label="Data di nascita" hint="Formato gg/mm/aaaa" block />`

const dateRangeCode = `import VxDateRange from '@vexus'

<VxDateRange v-model="range" placeholder="Seleziona un intervallo" />
<VxDateRange v-model="range" clearable min="2026-01-01" max="2026-12-31" />
<VxDateRange v-model="range" rangeSeparator="→" />`

const dateTimeCode = `import VxDateTime from '@vexus'

<VxDateTime v-model="value" />
<VxDateTime v-model="value" clearable :minuteStep="15" />
<VxDateTime v-model="value" separator=" - " timeFormat="HH.mm" />`

const dateTimeRangeCode = `import VxDateTimeRange from '@vexus'

<VxDateTimeRange v-model="range" placeholder="Seleziona data e ora di inizio/fine" />
<VxDateTimeRange v-model="range" clearable :minuteStep="15" />
<VxDateTimeRange v-model="range" startLabel="Check-in" endLabel="Check-out" />`

const timeCode = `import VxTime from '@vexus'

<VxTime v-model="time" placeholder="Seleziona un orario" />
<VxTime v-model="time" clearable color="#f97316" />
<VxTime v-model="time" :minuteStep="15" placeholder="Step 15 min" />`

const colorPickerCode = `import VxColorPicker from '@vexus'

<VxColorPicker v-model="color" />
<VxColorPicker v-model="color" clearable />
<VxColorPicker v-model="color" :showHex="false" />`

const dateLabels = {
  'Seleziona una data': 'selectDate',
  'Con clear': 'withClear',
  'Data di nascita': 'birthDate',
  'Formato gg/mm/aaaa': 'dateFormat',
}
const dateRangeLabels = { 'Seleziona un intervallo': 'selectRange' }
const dateTimeRangeLabels = {
  'Seleziona data e ora di inizio/fine': 'selectDateTimeRange',
}
const timeLabels = {
  'Seleziona un orario': 'selectTime',
  'Step 15 min': 'step15Min',
}

export const getPickerCodeExamples = (tm: (key: string) => unknown) => ({
  datePickerCode: localize(dateCode, tm, dateLabels),
  dateRangeCode: localize(dateRangeCode, tm, dateRangeLabels),
  dateTimeCode,
  dateTimeRangeCode: localize(dateTimeRangeCode, tm, dateTimeRangeLabels),
  timePickerCode: localize(timeCode, tm, timeLabels),
  colorPickerCode,
})
