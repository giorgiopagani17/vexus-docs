export const setupCode = `import { VxFormatNumber } from 'vexus'`

export const numberCode = `import { VxFormatNumber } from 'vexus'

VxFormatNumber(1500)
// '1.5k'

VxFormatNumber(1500, { locale: 'it-IT' })
// '1,5k' con locale it-IT

VxFormatNumber(2500000)
// '2.5M'

VxFormatNumber(2500000000)
// '2.5B'

VxFormatNumber(12500, {
  compact: false,
  locale: 'it-IT',
})
// '12.500'

VxFormatNumber(1500, { space: true })
// '1.5 k'

VxFormatNumber(1234567, { decimals: 2 })
// '1.23M'

VxFormatNumber(1234567, { decimals: 0 })
// '1M'

VxFormatNumber(3.14159, { decimals: 2 })
// '3.14'

VxFormatNumber(999999)
// '1M'  Promosso all’unità successiva dopo l’arrotondamento (non '1000k')`

export const priceCode = `import { VxFormatNumber } from 'vexus'

// Prezzo con valuta e posizione automatica
VxFormatNumber(12345.5, {
  type: 'price',
  currency: 'EUR',
})
// '€12,345.50'

VxFormatNumber(12345.5, {
  type: 'price',
  currency: 'EUR',
  locale: 'it-IT',
})
// '12.345,50 €'

// Valuta forzata a sinistra
VxFormatNumber(12345.5, {
  type: 'price',
  currency: 'EUR',
  currencyDisplayPosition: 'left',
})
// '€ 12,345.50'

// Valuta forzata a destra
VxFormatNumber(12345.5, {
  type: 'price',
  currency: 'USD',
  currencyDisplayPosition: 'right',
})
// '12,345.50 $'

// Prezzo compatto con valuta
VxFormatNumber(1500, {
  type: 'price',
  currency: 'EUR',
  compact: true,
  currencyDisplayPosition: 'right',
})
// '1.5k €'

// Prezzo senza simbolo
VxFormatNumber(12345.5, {
  type: 'price',
})
// '12,345.50'

// Due decimali di default
VxFormatNumber(12000, { type: 'price', currency: 'EUR' })
// '€12,000.00'

// Senza centesimi con decimals: 0 (arrotonda anche i valori non interi)
VxFormatNumber(12000, { type: 'price', currency: 'EUR', decimals: 0 })
// '€12,000'`

export const fallbackCode = `import { VxFormatNumber } from 'vexus'

VxFormatNumber(null)
// '0'

VxFormatNumber('not a number', {
  fallback: '—',
})
// '—'

VxFormatNumber(undefined, {
  type: 'price',
})
// ''

VxFormatNumber('', {
  type: 'price',
  fallback: 'N/D',
})
// 'N/D'

// Più punti raggruppati a tre cifre = separatore delle migliaia
VxFormatNumber('1.234.567', { compact: false })
// '1,234,567'

// Opzioni non valide: ritorna il fallback invece di lanciare
VxFormatNumber(1500, { decimals: 99, fallback: '—' })
// '—'

// Evita stringhe con separatori ambigui.
// Preferisci numeri o stringhe non ambigue:
VxFormatNumber(12345.6, {
  compact: false,
  locale: 'it-IT',
})
// '12.345,6'

VxFormatNumber('12345.6', {
  compact: false,
  locale: 'it-IT',
})
// '12.345,6'`

export const getFormatNumberCodeExamples = (tm: any) => {
  const labels = tm('formatNumberDocs.codeLabels')

  const source: Record<string, string> = {
    setupCode,
    numberCode,
    priceCode,
    fallbackCode,
  }

  const replacements: Record<string, string> = {
    'con locale it-IT': labels.italianLocale,
    'Promosso all’unità successiva dopo l’arrotondamento (non \'1000k\')':
      labels.promoted,
    'Prezzo con valuta e posizione automatica': labels.priceAuto,
    'Valuta forzata a sinistra': labels.currencyLeft,
    'Valuta forzata a destra': labels.currencyRight,
    'Prezzo compatto con valuta': labels.priceCompact,
    'Prezzo senza simbolo': labels.priceNoSymbol,
    'Due decimali di default': labels.twoDecimals,
    'Senza centesimi con decimals: 0 (arrotonda anche i valori non interi)': labels.noCents,
    'Più punti raggruppati a tre cifre = separatore delle migliaia':
      labels.dotThousands,
    'Opzioni non valide: ritorna il fallback invece di lanciare':
      labels.invalidOptions,
    'Evita stringhe con separatori ambigui.': labels.ambiguousWarning,
    'Preferisci numeri o stringhe non ambigue:': labels.unambiguousInput,
  }

  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => {
      let localized = value

      for (const [from, to] of Object.entries(replacements)) {
        if (typeof to === 'string') {
          localized = localized.split(from).join(to)
        }
      }

      return [key, localized]
    }),
  )
}