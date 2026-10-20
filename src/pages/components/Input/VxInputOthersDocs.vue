<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxInput Others</h1>
      <p class="subtitle">{{ $t('inputOthersDocs.intro') }}</p>
    </div>

    <section
      v-for="item in items"
      :key="item.title"
      class="docs-section"
    >
      <h2>{{ item.title }}</h2>
      <p>{{ $t(item.description) }}</p>

      <div class="example-col">
        <template v-if="item.key === 'radio'">
          <VxRadio
            v-for="option in radioOptions"
            :key="option.value"
            :name="option.name"
            :value="option.value"
            :label="option.label"
            v-model="values.radio"
          />
        </template>

        <component
          v-else
          :is="item.component"
          v-bind="item.props"
          v-model="values[item.key]"
        />
      </div>

      <DesignCodeBlock :code="item.code" />

      <section class="props-section">
        <h2>{{ $t('common.availableOptions') }}</h2>

        <DesignPropsTable
          :columns="item.metadata.columns"
          :rows="item.metadata.rows"
          :widths="widths"
        />
      </section>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'

import {
  VxColorPicker,
  VxRange,
  VxCheckbox,
  VxRadio,
} from 'vexus'

import DesignCodeBlock from '@/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/components/Utils/DesignPropsTable.vue'

import {
  getColorPickerMetadata,
  getRangeMetadata,
  getCheckboxMetadata,
  getRadioMetadata,
} from '@/metadata/props/Input/othersProps'

import { getOthersCodeExamples } from '@/metadata/code/Input/othersCodeExamples'

const { t, tm } = useI18n()

const metadata = computed(() => ({
  color: getColorPickerMetadata(t),
  range: getRangeMetadata(t),
  checkbox: getCheckboxMetadata(t),
  radio: getRadioMetadata(t),
}))

const codeExamples = computed(() => getOthersCodeExamples(tm))

const widths = ['140px', '200px', '90px', '1fr']

const values = reactive({
  color: '#7c3aed',
  range: 50,
  checkbox: false,
  radio: 'monthly',
})

const radioOptions = [
  {
    name: 'plan',
    value: 'monthly',
    label: 'Monthly',
  },
  {
    name: 'plan',
    value: 'yearly',
    label: 'Yearly',
  },
  {
    name: 'plan',
    value: 'lifetime',
    label: 'Lifetime',
  },
]

const items = computed(() => [
  {
    title: 'VxColorPicker',
    description: 'inputOthersDocs.colorPickerSectionDescription',
    component: VxColorPicker,
    key: 'color',
    code: codeExamples.value.colorPickerCode,
    metadata: metadata.value.color,
    props: {},
  },
  {
    title: 'VxRange',
    description: 'inputOthersDocs.rangeSectionDescription',
    component: VxRange,
    key: 'range',
    code: codeExamples.value.rangeCode,
    metadata: metadata.value.range,
    props: {
      block: true,
    },
  },
  {
    title: 'VxCheckbox',
    description: 'inputOthersDocs.checkboxSectionDescription',
    component: VxCheckbox,
    key: 'checkbox',
    code: codeExamples.value.checkboxCode,
    metadata: metadata.value.checkbox,
    props: {
      label: 'Checkbox',
    },
  },
  {
    title: 'VxRadio',
    description: 'inputOthersDocs.radioSectionDescription',
    component: VxRadio,
    key: 'radio',
    code: codeExamples.value.radioCode,
    metadata: metadata.value.radio,
    props: {},
  },
])
</script>