import { sharedPickerRows, sharedCalendarRows, sharedTimeRows } from '@/metadata/props/Input/inputSharedProps'

export const datePickerPropsRows = [
  {
    name: 'modelValue',
    type: 'string',
    default: "''",
    desc: 'Data selezionata, formato ISO \'YYYY-MM-DD\' (v-model)',
  },
  ...sharedCalendarRows,
  ...sharedPickerRows,
  {
    name: 'clearFooterLabel',
    type: 'string',
    default: "'Clear'",
    desc: 'Testo del pulsante che svuota il valore nel footer del pannello',
  },
  {
    name: 'todayLabel',
    type: 'string',
    default: "'Today'",
    desc: 'Testo del pulsante che seleziona la data odierna',
  },
]

export const dateRangePropsRows = [
  {
    name: 'modelValue',
    type: '{ start: string, end: string }',
    default: "{ start: '', end: '' }",
    desc: 'Intervallo selezionato, entrambe le date in formato ISO \'YYYY-MM-DD\' (v-model)',
  },
  ...sharedCalendarRows,
  ...sharedPickerRows,
  {
    name: 'rangeSeparator',
    type: 'string',
    default: "'-'",
    desc: 'Separatore mostrato nel campo tra data di inizio e fine, e riconosciuto in fase di digitazione libera (accetta anche \'to\', \'→\', \'—\', \'–\')',
  },
  {
    name: 'clearFooterLabel',
    type: 'string',
    default: "'Clear'",
    desc: 'Testo del pulsante che svuota il valore nel footer del pannello',
  },
]

export const dateTimePickerPropsRows = [
  {
    name: 'modelValue',
    type: 'string',
    default: "''",
    desc: 'Data e ora selezionate, formato canonico \'YYYY-MM-DD HH:mm\' (v-model)',
  },
  ...sharedCalendarRows,
  ...sharedTimeRows,
  {
    name: 'separator',
    type: 'string',
    default: "' '",
    desc: 'Separatore tra la parte data e la parte ora nel valore/campo',
  },
  ...sharedPickerRows,
  {
    name: 'nowLabel',
    type: 'string',
    default: "'Now'",
    desc: 'Testo del pulsante che seleziona data e ora correnti',
  },
  {
    name: 'confirmLabel',
    type: 'string',
    default: "'Confirm'",
    desc: 'Testo del pulsante di conferma selezione',
  },
  {
    name: 'clearFooterLabel',
    type: 'string',
    default: "'Clear'",
    desc: 'Testo del pulsante che svuota il valore nel footer del pannello',
  },
  {
    name: 'hoursLabel / minutesLabel',
    type: 'string',
    default: "'Hours' / 'Minutes'",
    desc: 'Intestazioni delle colonne ore/minuti nel tab Time',
  },
  {
    name: 'dateTabLabel / timeTabLabel',
    type: 'string',
    default: "'Date' / 'Time'",
    desc: 'Etichette dei due tab del pannello',
  },
  {
    name: 'summaryLabel',
    type: 'string',
    default: "'Selected'",
    desc: 'Etichetta sopra il riepilogo data/ora selezionata in cima al pannello',
  },
]

export const dateTimeRangePropsRows = [
  {
    name: 'modelValue',
    type: '{ start: string, end: string }',
    default: "{ start: '', end: '' }",
    desc: 'Intervallo selezionato, entrambi i valori in formato canonico \'YYYY-MM-DD HH:mm\' (v-model)',
  },
  ...sharedCalendarRows,
  ...sharedTimeRows,
  {
    name: 'separator',
    type: 'string',
    default: "' '",
    desc: 'Separatore tra la parte data e la parte ora di ciascun valore',
  },
  ...sharedPickerRows,
  {
    name: 'rangeSeparator',
    type: 'string',
    default: "'-'",
    desc: 'Separatore mostrato/riconosciuto nel campo tra inizio e fine intervallo',
  },
  {
    name: 'confirmLabel',
    type: 'string',
    default: "'Confirm'",
    desc: 'Testo del pulsante di conferma selezione (attivo solo con inizio e fine impostati)',
  },
  {
    name: 'clearFooterLabel',
    type: 'string',
    default: "'Clear'",
    desc: 'Testo del pulsante che svuota il valore nel footer del pannello',
  },
  {
    name: 'startLabel / endLabel',
    type: 'string',
    default: "'Start' / 'End'",
    desc: 'Etichette usate nel riepilogo e nel tab-switch mobile per inizio/fine',
  },
  {
    name: 'emptyStartLabel / emptyEndLabel',
    type: 'string',
    default: "'Select start' / 'Select end'",
    desc: 'Testo mostrato nel riepilogo quando inizio/fine non sono ancora impostati',
  },
  {
    name: 'startHourLabel / startMinuteLabel / endHourLabel / endMinuteLabel',
    type: 'string',
    default: "'Hours' / 'Minutes'",
    desc: 'Intestazioni delle colonne ore/minuti per inizio e fine nel tab Time',
  },
  {
    name: 'dateTabLabel / timeTabLabel',
    type: 'string',
    default: "'Date' / 'Time'",
    desc: 'Etichette dei due tab principali del pannello',
  },
  {
    name: 'summaryLabel',
    type: 'string',
    default: "'Selected range'",
    desc: 'Etichetta sopra il riepilogo inizio/fine in cima al pannello',
  },
]

export const timePickerPropsRows = [
  {
    name: 'modelValue',
    type: 'string',
    default: "''",
    desc: 'Orario selezionato, formato \'HH:mm\' 24h (v-model)',
  },
  ...sharedTimeRows.filter((row) => row.name === 'minuteStep'),
  {
    name: 'format',
    type: 'string',
    default: "'HH:mm'",
    desc: 'Formato di visualizzazione dell’orario nel campo',
  },
  ...sharedPickerRows,
  {
    name: 'openLabel',
    type: 'string',
    default: "'Open time picker'",
    desc: 'aria-label del pulsante che apre il pannello',
  },
  {
    name: 'clearLabel',
    type: 'string',
    default: "'Clear'",
    desc: 'aria-label del pulsante clear',
  },
  {
    name: 'dialogLabel',
    type: 'string',
    default: "'Select a time'",
    desc: 'aria-label del pannello (dialog)',
  },
  {
    name: 'clearFooterLabel',
    type: 'string',
    default: "'Clear'",
    desc: 'Testo del pulsante che svuota il valore nel footer del pannello',
  },
]

export const getDateMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: datePickerPropsRows.map((row) => ({ ...row, desc: t(`inputPickersDocs.props.${row.name}`, row.desc) })),
  columns: [
    { key: 'name', label: t('inputPickersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputPickersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputPickersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputPickersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

export const getDateRangeMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: dateRangePropsRows.map((row) => ({
    ...row,
    desc: t(`inputPickersDocs.props.${row.name === 'modelValue' ? 'dateRangeModelValue' : row.name}`, row.desc),
  })),
  columns: [
    { key: 'name', label: t('inputPickersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputPickersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputPickersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputPickersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

export const getDateTimeMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: dateTimePickerPropsRows.map((row) => ({ ...row, desc: t(`inputPickersDocs.props.${row.name}`, row.desc) })),
  columns: [
    { key: 'name', label: t('inputPickersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputPickersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputPickersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputPickersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

export const getDateTimeRangeMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: dateTimeRangePropsRows.map((row) => ({
    ...row,
    desc: t(`inputPickersDocs.props.${row.name === 'modelValue' ? 'dateTimeRangeModelValue' : row.name}`, row.desc),
  })),
  columns: [
    { key: 'name', label: t('inputPickersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputPickersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputPickersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputPickersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

export const getTimeMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: timePickerPropsRows.map((row) => ({ ...row, desc: t(`inputPickersDocs.props.${row.name}`, row.desc) })),
  columns: [
    { key: 'name', label: t('inputPickersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputPickersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputPickersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputPickersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

