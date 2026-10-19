// src/metadata/props/Debounce/debounceGeneralProps.ts

// `key` è la chiave i18n della riga e non viene passata alla tabella.

export const valueParamsRows = [
  {
    key: 'source',
    name: 'source',
    type: 'Ref<T> | () => T',
    default: '—',
    desc: 'Ref o getter da osservare',
  },
  {
    key: 'delay',
    name: 'delay',
    type: 'number | Ref<number> | () => number',
    default: '300',
    desc: 'Millisecondi di attesa dopo l’ultima modifica',
  },
  {
    key: 'options',
    name: 'options',
    type: 'VxDebounceOptions',
    default: '{}',
    desc: 'leading, trailing e maxWait: vedi la tabella delle opzioni',
  },
]

export const fnParamsRows = [
  {
    key: 'fn',
    name: 'fn',
    type: '(...args) => unknown',
    default: '—',
    desc: 'Funzione da eseguire in modalità debounce',
  },
  {
    key: 'delay',
    name: 'delay',
    type: 'number | Ref<number> | () => number',
    default: '300',
    desc: 'Millisecondi di attesa dopo l’ultima chiamata',
  },
  {
    key: 'options',
    name: 'options',
    type: 'VxDebounceOptions',
    default: '{}',
    desc: 'leading, trailing e maxWait: vedi la tabella delle opzioni',
  },
]

export const optionsRows = [
  {
    key: 'leading',
    name: 'leading',
    type: 'boolean',
    default: 'false',
    desc: 'Esegue subito alla prima chiamata di una raffica',
  },
  {
    key: 'trailing',
    name: 'trailing',
    type: 'boolean',
    default: 'true',
    desc: 'Esegue alla fine della raffica, con gli argomenti dell’ultima chiamata',
  },
  {
    key: 'maxWait',
    name: 'maxWait',
    type: 'number',
    default: 'non impostato',
    desc: 'Attesa massima in ms: esegue comunque anche se le chiamate continuano',
  },
]

export const valueReturnRows = [
  {
    key: 'debounced',
    name: 'debounced',
    type: 'Readonly<Ref<T>>',
    desc: 'Valore aggiornato con ritardo',
  },
  {
    key: 'pending',
    name: 'pending',
    type: 'Readonly<Ref<boolean>>',
    desc: 'true mentre c’è un aggiornamento in attesa',
  },
  {
    key: 'flush',
    name: 'flush',
    type: '() => void',
    desc: 'Applica subito l’ultimo valore in attesa',
  },
  {
    key: 'cancel',
    name: 'cancel',
    type: '() => void',
    desc: 'Scarta l’aggiornamento in attesa',
  },
]

export const fnReturnRows = [
  {
    key: 'run',
    name: 'run',
    type: '(...args) => void',
    desc: 'Chiama la funzione in modalità debounce',
  },
  {
    key: 'pending',
    name: 'pending',
    type: 'Readonly<Ref<boolean>>',
    desc: 'true mentre c’è una chiamata in attesa',
  },
  {
    key: 'flush',
    name: 'flush',
    type: '() => void',
    desc: 'Esegue subito la chiamata in attesa, se c’è',
  },
  {
    key: 'cancel',
    name: 'cancel',
    type: '() => void',
    desc: 'Annulla la chiamata in attesa senza eseguirla',
  },
]

const translate = (t: any, namespace: string, rows: { key: string; desc: string }[]) =>
  rows.map(({ key, ...row }) => ({
    ...row,
    desc: t(`debounceDocs.${namespace}.${key}`, row.desc),
  }))

export const getDebounceMetadata = (t: any) => ({
  columns: [
    { key: 'name', label: t('common.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('common.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('common.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  // Le tabelle dei valori restituiti non hanno la colonna "default"
  returnColumns: [
    { key: 'name', label: t('common.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('common.propsColumns.type'), class: 'prop-type' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],
  valueParamsRows: translate(t, 'valueParams', valueParamsRows),
  fnParamsRows: translate(t, 'fnParams', fnParamsRows),
  optionsRows: translate(t, 'optionDesc', optionsRows),
  valueReturnRows: translate(t, 'valueReturn', valueReturnRows),
  fnReturnRows: translate(t, 'fnReturn', fnReturnRows),
})