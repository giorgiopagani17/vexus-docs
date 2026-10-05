<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxInput Pickers</h1>
      <p class="subtitle">{{ $t('inputPickersDocs.info') }}</p>
    </div>
    <section v-for="picker in pickers" :key="picker.title" class="docs-section">
      <section class="docs-section">
        <h2>{{ $t(picker.title) }}</h2>
        <p>{{ $t(picker.description) }}</p>
        <div class="example-col">
          <component :is="picker.component" v-model="values[picker.key]" v-bind="picker.props" />
        </div>
        <DesignCodeBlock :code="codeExamples[picker.code]" />
      </section>
      <section class="props-section">
        <h2>{{ $t('buttonDocs.availableOptions') }}</h2>
        <DesignPropsTable
          :columns="metadata[picker.key].columns"
          :rows="metadata[picker.key].rows"
          :widths="widths"
        />
      </section>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import VxDate from '@/Library/components/Input/VxDate.vue'
import VxDateRange from '@/Library/components/Input/VxDateRange.vue'
import VxDateTime from '@/Library/components/Input/VxDateTime.vue'
import VxDateTimeRange from '@/Library/components/Input/VxDateTimeRange.vue'
import VxTime from '@/Library/components/Input/VxTime.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { getDateMetadata } from '@/Docs/metadata/props/Input/pickerProps'
import { getDateRangeMetadata } from '@/Docs/metadata/props/Input/pickerProps'
import { getDateTimeMetadata } from '@/Docs/metadata/props/Input/pickerProps'
import { getDateTimeRangeMetadata } from '@/Docs/metadata/props/Input/pickerProps'
import { getTimeMetadata } from '@/Docs/metadata/props/Input/pickerProps'
import { getPickerCodeExamples } from '@/Docs/metadata/code/Input/pickerCodeExamples'

const { t, tm, locale } = useI18n()
const codeExamples = computed(() => getPickerCodeExamples(tm))
const metadata = computed(() => ({
  date: getDateMetadata(t),
  dateRange: getDateRangeMetadata(t),
  dateTime: getDateTimeMetadata(t),
  dateTimeRange: getDateTimeRangeMetadata(t),
  time: getTimeMetadata(t),
}))
const widths = ['140px', '200px', '90px', '1fr']
const values = reactive({ date: '', dateRange: { start: '', end: '' }, dateTime: '', dateTimeRange: { start: '', end: '' }, time: '' })
const pickerLocale = computed(() => (locale.value === 'it' ? 'it-IT' : 'en-US'))
const pickers = computed(() => [
  { key: 'date', title: 'inputPickersDocs.sections.datePicker', description: 'inputPickersDocs.dateDescription', component: VxDate, code: 'datePickerCode', props: { locale: pickerLocale.value } },
  { key: 'dateRange', title: 'inputPickersDocs.sections.dateRange', description: 'inputPickersDocs.dateRangeDescription', component: VxDateRange, code: 'dateRangeCode', props: { locale: pickerLocale.value } },
  { key: 'dateTime', title: 'inputPickersDocs.sections.dateTime', description: 'inputPickersDocs.dateTimeDescription', component: VxDateTime, code: 'dateTimeCode', props: { locale: pickerLocale.value } },
  { key: 'dateTimeRange', title: 'inputPickersDocs.sections.dateTimeRange', description: 'inputPickersDocs.dateTimeRangeDescription', component: VxDateTimeRange, code: 'dateTimeRangeCode', props: { locale: pickerLocale.value } },
  { key: 'time', title: 'inputPickersDocs.sections.time', description: 'inputPickersDocs.timeSectionDescription', component: VxTime, code: 'timePickerCode', props: {} },
])
</script>