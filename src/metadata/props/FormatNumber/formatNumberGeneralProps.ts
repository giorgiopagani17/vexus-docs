
const rows = [
  {
    key: 'type',
    name: 'type',
    type: "'number' | 'price'",
    default: "'number'",
    desc: 'Seleziona la modalità di formattazione.',
  },
  {
    key: 'currency',
    name: 'currency',
    type: 'string',
    default: 'undefined',
    desc: 'Codice ISO 4217 della valuta, utilizzato in modalità price.',
  },
  {
    key: 'currencyDisplayPosition',
    name: 'currencyDisplayPosition',
    type: "'left' | 'right'",
    default: 'Locale',
    desc: 'Forza la posizione del simbolo della valuta.',
  },
  {
    key: 'compact',
    name: 'compact',
    type: 'boolean',
    default: 'number: true / price: false',
    desc: 'Abbrevia i valori da 1.000 in poi usando k/M.',
  },
  {
    key: 'decimals',
    name: 'decimals',
    type: 'number',
    default: '1',
    desc: 'Numero massimo di decimali nella notazione compatta, da 0 a 20.',
  },
  {
    key: 'space',
    name: 'space',
    type: 'boolean',
    default: 'false',
    desc: 'Aggiunge uno spazio prima del suffisso compatto.',
  },
  {
    key: 'locale',
    name: 'locale',
    type: 'string',
    default: 'Runtime / it-IT per price',
    desc: 'Locale utilizzato da Intl.NumberFormat.',
  },
  {
    key: 'forceDecimals',
    name: 'forceDecimals',
    type: 'boolean',
    default: 'false',
    desc: 'Mostra sempre due decimali in modalità price.',
  },
  {
    key: 'fallback',
    name: 'fallback',
    type: 'string',
    default: "number: '0' / price: ''",
    desc: 'Valore restituito per input vuoti o non validi.',
  },
]

export const getFormatNumberMetadata = (t: (key: string) => string) => ({
  columns: [
    {
      key: 'name',
      label: t('common.propsColumns.name'),
      class: 'prop-name',
    },
    {
      key: 'type',
      label: t('common.propsColumns.type'),
      class: 'prop-type',
    },
    {
      key: 'default',
      label: t('common.propsColumns.default'),
      class: 'prop-default',
    },
    {
      key: 'desc',
      label: t('common.propsColumns.description'),
      class: 'prop-desc',
    },
  ],

  rows: rows.map(({ key, desc, ...row }) => ({
    ...row,
    desc: t(`formatNumberDocs.options.${key}`) || desc,
  })),
})
