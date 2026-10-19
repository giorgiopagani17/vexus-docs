
<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxFormatNumber</h1>
      <p class="subtitle">{{ $t('formatNumberDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('formatNumberDocs.sections.setup') }}</h2>
      <p>{{ $t('formatNumberDocs.setupDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Number -->
    <section class="docs-section">
      <h2>{{ $t('formatNumberDocs.sections.number') }}</h2>
      <p>{{ $t('formatNumberDocs.numberDescription') }}</p>

      <div class="example-col">
        <VxInput
          v-model="values.number"
          :label="$t('formatNumberDocs.labels.value')"
          :placeholder="$t('formatNumberDocs.labels.value')"
        />

        <VxSelect
          v-model="values.numberLocale"
          :label="$t('formatNumberDocs.labels.locale')"
          :options="locales"
          emitValue
        />

        <VxCheckbox
          v-model="values.numberCompact"
          :label="$t('formatNumberDocs.labels.compact')"
        />

        <VxCheckbox
          v-model="values.numberSpace"
          :label="$t('formatNumberDocs.labels.space')"
        />

        <div class="format-result">
          <span>{{ $t('formatNumberDocs.labels.result') }}: </span>
          <strong>{{ formattedNumber }}</strong>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.numberCode" />
    </section>

    <!-- Price -->
    <section class="docs-section">
      <h2>{{ $t('formatNumberDocs.sections.price') }}</h2>
      <p>{{ $t('formatNumberDocs.priceDescription') }}</p>

      <div class="example-col">
        <VxInput
          v-model="values.price"
          :label="$t('formatNumberDocs.labels.value')"
          :placeholder="$t('formatNumberDocs.labels.value')"
        />

        <VxSelect
          v-model="values.priceLocale"
          :label="$t('formatNumberDocs.labels.locale')"
          :options="locales"
          emitValue
        />

        <VxSelect
          v-model="values.currency"
          :label="$t('formatNumberDocs.labels.currency')"
          :options="currencies"
          emitValue
        />

        <VxSelect
          v-model="values.currencyDisplayPosition"
          :label="$t('formatNumberDocs.labels.currencyDisplayPosition')"
          :options="currencyPositions"
          emitValue
        />

        <VxCheckbox
          v-model="values.priceCompact"
          :label="$t('formatNumberDocs.labels.compact')"
        />

        <VxCheckbox
          v-model="values.priceSpace"
          :label="$t('formatNumberDocs.labels.space')"
        />

        <VxCheckbox
          v-model="values.forceDecimals"
          :label="$t('formatNumberDocs.labels.forceDecimals')"
        />

        <div class="format-result">
          <span>{{ $t('formatNumberDocs.labels.result') }}: </span>
          <strong>{{ formattedPrice }}</strong>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.priceCode" />
    </section>

    <!-- Fallback -->
    <section class="docs-section">
      <h2>{{ $t('formatNumberDocs.sections.fallback') }}</h2>
      <p>{{ $t('formatNumberDocs.fallbackDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.fallbackCode" />
    </section>

    <!-- Props -->
    <section class="docs-section">
      <h2>{{ $t('common.availableOptions') }}</h2>
      <DesignPropsTable
        :columns="metadata.columns"
        :rows="metadata.rows"
        :widths="['170px', '200px', '150px', '1fr']"
      />
    </section>

    <!-- Limitations -->
    <section class="docs-section">
      <h2>{{ $t('formatNumberDocs.sections.limitations') }}</h2>
      <p>{{ $t('formatNumberDocs.limitationsIntro') }}</p>
      <ul class="docs-list">
        <li>
          <strong>{{ $t('formatNumberDocs.limitations.localeTitle') }}</strong>: {{ $t('formatNumberDocs.limitations.locale') }}
        </li>
        <li>
          <strong>{{ $t('formatNumberDocs.limitations.ambiguousTitle') }}</strong>: {{ $t('formatNumberDocs.limitations.ambiguous') }}
        </li>
        <li>
          <strong>{{ $t('formatNumberDocs.limitations.currencyTitle') }}</strong>: {{ $t('formatNumberDocs.limitations.currency') }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  VxFormatNumber,
  VxInput,
  VxSelect,
  VxCheckbox,
} from 'vexus'
import DesignCodeBlock from '@/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/components/Utils/DesignPropsTable.vue'
import { getFormatNumberMetadata } from '@/metadata/props/FormatNumber/formatNumberGeneralProps'
import { getFormatNumberCodeExamples } from '@/metadata/code/FormatNumber/formatNumberCodeExamples'

const { t, tm } = useI18n()

const metadata = computed(() => getFormatNumberMetadata(t))
const codeExamples = computed(() => getFormatNumberCodeExamples(tm))

const locales = [
  { label: 'Italiano (it-IT)', value: 'it-IT' },
  { label: 'English (en-US)', value: 'en-US' },
  { label: 'Deutsch (de-DE)', value: 'de-DE' },
  { label: 'Svizzera italiana (it-CH)', value: 'it-CH' },
]

const currencies = computed(() => [
  { label: t('formatNumberDocs.labels.noCurrency'), value: '' },
  { label: 'EUR (€)', value: 'EUR' },
  { label: 'USD ($)', value: 'USD' },
  { label: 'CHF', value: 'CHF' },
  { label: 'GBP (£)', value: 'GBP' },
  { label: 'JPY (¥)', value: 'JPY' },
])

const currencyPositions = computed(() => [
  { label: t('formatNumberDocs.labels.auto'), value: 'auto' },
  { label: t('formatNumberDocs.labels.left'), value: 'left' },
  { label: t('formatNumberDocs.labels.right'), value: 'right' },
])

const values = reactive({
  number: '1500',
  numberLocale: 'it-IT',
  numberCompact: true,
  numberSpace: false,

  price: '1234.5',
  priceLocale: 'it-IT',
  currency: 'EUR',
  currencyDisplayPosition: 'auto',
  priceCompact: false,
  priceSpace: false,
  forceDecimals: false,
})

const formattedNumber = computed(() =>
  VxFormatNumber(values.number, {
    type: 'number',
    locale: values.numberLocale,
    compact: values.numberCompact,
    space: values.numberSpace,
    fallback: '—',
  }),
)

const formattedPrice = computed(() =>
  VxFormatNumber(values.price, {
    type: 'price',
    locale: values.priceLocale,
    currency: values.currency || undefined,
    currencyDisplayPosition:
      values.currencyDisplayPosition === 'auto'
        ? undefined
        : values.currencyDisplayPosition as 'left' | 'right',
    compact: values.priceCompact,
    space: values.priceSpace,
    forceDecimals: values.forceDecimals,
    fallback: '—',
  }),
)
</script>