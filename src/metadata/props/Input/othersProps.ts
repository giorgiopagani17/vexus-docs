import { sharedPickerRows, sharedCalendarRows, sharedTimeRows } from '@/metadata/props/Input/inputSharedProps'

export const colorPickerPropsRows = [
  {
    name: 'modelValue',
    type: 'string',
    default: "''",
    desc: 'Colore selezionato, formato hex \'#rrggbb\' (v-model)',
  },
  {
    name: 'showHex',
    type: 'boolean',
    default: 'true',
    desc: 'Mostra il valore hex accanto allo swatch',
  },
  ...sharedPickerRows.filter((row) => row.name !== 'icon' && row.name !== 'iconPosition' && row.name !== 'iconSize'),
]

export const rangePropsRows = [
  {
    name: 'modelValue',
    type: 'number | string',
    default: '50',
    desc: 'Valore corrente dello slider (v-model)',
  },
  {
    name: 'min',
    type: 'number | string',
    default: '0',
    desc: 'Valore minimo',
  },
  {
    name: 'max',
    type: 'number | string',
    default: '100',
    desc: 'Valore massimo',
  },
  {
    name: 'step',
    type: 'number | string',
    default: '1',
    desc: 'Incremento tra un valore selezionabile e l’altro',
  },
  {
    name: 'showValue',
    type: 'boolean',
    default: 'true',
    desc: 'Mostra il valore numerico corrente a destra dello slider',
  },
  {
    name: 'variant',
    type: "'outline' | 'ghost' | 'text'",
    default: "'outline'",
    desc: 'Stile visivo del campo che contiene lo slider',
  },
  {
    name: 'color',
    type: 'string',
    default: "'#7c3aed'",
    desc: 'Colore della porzione riempita e del thumb',
  },
  {
    name: 'colors',
    type: 'object',
    default: 'null',
    desc: 'Override colori del campo che contiene lo slider',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    desc: 'Dimensione del campo',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: 'Disabilita lo slider',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra spinner e disabilita lo slider',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    desc: 'Occupa tutta la larghezza disponibile',
  },
  {
    name: 'pill',
    type: 'boolean',
    default: 'false',
    desc: 'Bordo completamente arrotondato del campo',
  },
  {
    name: 'radius',
    type: 'number | string',
    default: 'null',
    desc: 'Override del border-radius del campo',
  },
  {
    name: 'icon',
    type: 'Component | Function | null',
    default: 'null',
    desc: 'Icona opzionale a inizio campo',
  },
  {
    name: 'iconPosition',
    type: "'left' | 'right'",
    default: "'left'",
    desc: 'Posizione della prop `icon`',
  },
  {
    name: 'iconSize',
    type: 'number | string',
    default: 'null',
    desc: 'Override della dimensione icona',
  },
  {
    name: 'label',
    type: 'string',
    default: "''",
    desc: 'Etichetta sopra il campo',
  },
  {
    name: 'hint',
    type: 'string',
    default: "''",
    desc: 'Testo di aiuto sotto il campo',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    desc: 'Attiva lo stato di errore',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: "''",
    desc: 'Messaggio mostrato sotto il campo quando `error` è true',
  },
  {
    name: 'focusEffect',
    type: "'ring' | 'lift' | 'glow' | 'none' | 'custom'",
    default: "'ring'",
    desc: 'Effetto visivo applicato allo stato di focus',
  },
]

export const checkboxPropsRows = [
  {
    name: 'modelValue',
    type: 'boolean | any[]',
    default: 'false',
    desc: 'Valore del checkbox. Boolean per uso singolo, array per gruppi (v-model).',
  },
  {
    name: 'value',
    type: 'string | number | object',
    default: 'null',
    desc: 'Valore associato al checkbox quando viene usato in un gruppo (modelValue array).',
  },
  {
    name: 'trueValue',
    type: 'boolean | string | number',
    default: 'true',
    desc: 'Valore emesso quando il checkbox viene selezionato in modalità singola.',
  },
  {
    name: 'falseValue',
    type: 'boolean | string | number',
    default: 'false',
    desc: 'Valore emesso quando il checkbox viene deselezionato in modalità singola.',
  },
  {
    name: 'indeterminate',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra lo stato indeterminato senza modificarne il comportamento.',
  },
  {
    name: 'name',
    type: 'string',
    default: 'undefined',
    desc: 'Nome dell’input nativo; utile per form HTML.',
  },
  {
    name: 'label',
    type: 'string',
    default: "''",
    desc: 'Etichetta mostrata accanto al checkbox.',
  },
  {
    name: 'hint',
    type: 'string',
    default: "''",
    desc: 'Testo di supporto mostrato sotto il controllo.',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    desc: 'Attiva lo stato di errore.',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: "''",
    desc: 'Messaggio mostrato sotto il controllo quando error è true.',
  },
  {
    name: 'color',
    type: 'string',
    default: "'#7c3aed'",
    desc: 'Colore del checkbox selezionato.',
  },
  {
    name: 'colors',
    type: 'object',
    default: 'null',
    desc: 'Override dei colori del componente.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    desc: 'Dimensione del controllo.',
  },
  {
    name: 'radius',
    type: 'number | string',
    default: 'null',
    desc: 'Override del border-radius del checkbox.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: 'Disabilita il controllo.',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra lo spinner e impedisce l’interazione.',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    desc: 'Occupa tutta la larghezza disponibile.',
  },
  {
    name: 'focusEffect',
    type: "'ring' | 'lift' | 'glow' | 'none' | 'custom'",
    default: "'ring'",
    desc: 'Effetto visivo applicato al focus.',
  },
]

export const radioPropsRows = [
  {
    name: 'modelValue',
    type: 'string | number | boolean | object',
    default: 'null',
    desc: 'Valore selezionato del gruppo radio (v-model).',
  },
  {
    name: 'value',
    type: 'string | number | boolean | object',
    default: 'null',
    desc: 'Valore rappresentato da questo radio.',
  },
  {
    name: 'name',
    type: 'string',
    default: "''",
    desc: 'I radio con lo stesso name appartengono allo stesso gruppo.',
  },
  {
    name: 'label',
    type: 'string',
    default: "''",
    desc: 'Etichetta mostrata accanto al radio.',
  },
  {
    name: 'hint',
    type: 'string',
    default: "''",
    desc: 'Testo di supporto mostrato sotto il controllo.',
  },
  {
    name: 'error',
    type: 'boolean',
    default: 'false',
    desc: 'Attiva lo stato di errore.',
  },
  {
    name: 'errorMessage',
    type: 'string',
    default: "''",
    desc: 'Messaggio mostrato sotto il controllo quando error è true.',
  },
  {
    name: 'color',
    type: 'string',
    default: "'#7c3aed'",
    desc: 'Colore del radio selezionato.',
  },
  {
    name: 'colors',
    type: 'object',
    default: 'null',
    desc: 'Override dei colori del componente.',
  },
  {
    name: 'size',
    type: "'sm' | 'md' | 'lg'",
    default: "'md'",
    desc: 'Dimensione del controllo.',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: 'false',
    desc: 'Disabilita il controllo.',
  },
  {
    name: 'loading',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra lo spinner e impedisce l’interazione.',
  },
  {
    name: 'block',
    type: 'boolean',
    default: 'false',
    desc: 'Occupa tutta la larghezza disponibile.',
  },
  {
    name: 'focusEffect',
    type: "'ring' | 'lift' | 'glow' | 'none' | 'custom'",
    default: "'ring'",
    desc: 'Effetto visivo applicato al focus.',
  },
]

export const getColorPickerMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: colorPickerPropsRows.map((row) => ({
    ...row,
    desc: t(`inputOthersDocs.props.${row.name === 'modelValue' ? 'colorPickerModelValue' : row.name}`, row.desc),
  })),
  columns: [
    { key: 'name', label: t('inputOthersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputOthersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputOthersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputOthersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

export const getRangeMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: rangePropsRows.map((row) => ({
    ...row,
    desc: t(`inputOthersDocs.props.${row.name === 'modelValue' ? 'rangeModelValue' : row.name}`, row.desc),
  })),
  columns: [
    { key: 'name', label: t('inputOthersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputOthersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputOthersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputOthersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

export const getCheckboxMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: checkboxPropsRows.map((row) => ({
    ...row,
    desc: t(`inputOthersDocs.props.${row.name === 'modelValue' ? 'checkboxModelValue' : row.name}`, row.desc),
  })),
  columns: [
    { key: 'name', label: t('inputOthersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputOthersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputOthersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputOthersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

export const getRadioMetadata = (t: (key: string, fallback?: string) => string) => ({
  rows: radioPropsRows.map((row) => ({
    ...row,
    desc: t(`inputOthersDocs.props.${row.name === 'modelValue' ? 'radioModelValue' : row.name}`, row.desc),
  })),
  columns: [
    { key: 'name', label: t('inputOthersDocs.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('inputOthersDocs.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('inputOthersDocs.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('inputOthersDocs.propsColumns.description'), class: 'prop-desc' },
  ],
})

