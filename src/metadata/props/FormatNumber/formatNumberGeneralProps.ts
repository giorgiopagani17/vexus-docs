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
    desc: 'Abbrevia i valori da 1.000 in poi usando k/M/B.',
  },
    {
    key: 'decimals',
    name: 'decimals',
    type: 'number',
    default: 'compact: 1 / price: 2',
    desc: 'Numero esatto di cifre decimali da visualizzare, intero da 0 a 20. Se specificato, gli zeri finali vengono mantenuti anche in notazione compatta (es. 1.50k). Se omesso, vengono applicati i valori predefiniti della modalità. Un valore non valido restituisce il fallback.',
  },
  {
    key: 'locale',
    name: 'locale',
    type: 'string',
    default: "'en-US'",
    desc: 'Locale utilizzato da Intl.NumberFormat. Il default è esplicito per avere lo stesso output su server e client (SSR).',
  },
  {
    key: 'fallback',
    name: 'fallback',
    type: 'string',
    default: "number: '0' / price: ''",
    desc: 'Valore restituito per input vuoti o non validi e per opzioni non valide: la funzione non lancia mai eccezioni.',
  },
  {
    key: 'space',
    name: 'space',
    type: 'boolean',
    default: 'false',
    desc: 'Aggiunge uno spazio non separabile prima del suffisso compatto.',
  },
]

export const getFormatNumberMetadata = (
  t: (key: string) => string,
  te: (key: string) => boolean,
) => ({
  columns: [
    { key: 'name', label: t('common.propsColumns.name'), class: 'prop-name' },
    { key: 'type', label: t('common.propsColumns.type'), class: 'prop-type' },
    { key: 'default', label: t('common.propsColumns.default'), class: 'prop-default' },
    { key: 'desc', label: t('common.propsColumns.description'), class: 'prop-desc' },
  ],

  rows: rows.map(({ key, desc, ...row }) => ({
    ...row,
    // t() restituisce la chiave stessa se manca la traduzione: si usa te() per il vero fallback.
    desc: te(`formatNumberDocs.options.${key}`)
      ? t(`formatNumberDocs.options.${key}`)
      : desc,
  })),
})