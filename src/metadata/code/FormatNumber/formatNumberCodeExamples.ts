
export const setupCode = `import { VxFormatNumber } from 'vexus'`

export const numberCode = `import { VxFormatNumber } from 'vexus'

VxFormatNumber(1500)
// '1,5k' con locale it-IT

VxFormatNumber(2500000)
// '2,5M'

VxFormatNumber(1500, { locale: 'en-US' })
// '1.5k'

VxFormatNumber(1500, {
  compact: false,
  locale: 'it-IT',
})
// '1.500'

VxFormatNumber(1500, { space: true })
// '1,5 k'`

export const priceCode = `import { VxFormatNumber } from 'vexus'

// Prezzo con valuta e posizione automatica
VxFormatNumber(1234.5, {
  type: 'price',
  currency: 'EUR',
})
// '1.234,50 €'

// Valuta forzata a sinistra
VxFormatNumber(1234.5, {
  type: 'price',
  currency: 'EUR',
  currencyDisplayPosition: 'left',
})
// '€ 1.234,50'

// Valuta forzata a destra
VxFormatNumber(1234.5, {
  type: 'price',
  currency: 'USD',
  currencyDisplayPosition: 'right',
  locale: 'en-US',
})
// '1,234.50 $'

// Prezzo compatto con valuta
VxFormatNumber(1500, {
  type: 'price',
  currency: 'EUR',
  compact: true,
  currencyDisplayPosition: 'right',
})
// '1,5k €'

// Prezzo senza simbolo
VxFormatNumber(1234.5, {
  type: 'price',
})
// '1.234,50'`

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

// Evita stringhe con separatori ambigui.
// Preferisci numeri o stringhe non ambigue:
VxFormatNumber(1234.56, {
  locale: 'it-IT',
})

VxFormatNumber('1234.56', {
  locale: 'it-IT',
})`

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
    'Evita stringhe con separatori ambigui.':
      labels.ambiguousWarning,
    'Preferisci numeri o stringhe non ambigue:':
      labels.unambiguousInput,
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