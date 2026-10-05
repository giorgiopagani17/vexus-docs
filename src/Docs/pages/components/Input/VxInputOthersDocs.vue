<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxInput Others</h1>
      <p class="subtitle">{{ $t('inputOthersDocs.intro') }}</p>
    </div>
    <section v-for="item in items" :key="item.title" class="docs-section">
      <h2>{{ item.title }}</h2>
      <p>{{ $t(item.description) }}</p>
      <div class="example-col">
        <component :is="item.component" v-bind="item.props" v-model="values[item.key]" />
      </div>
      <DesignCodeBlock :code="item.code" />
      <section class="props-section">
        <h2>{{ $t('buttonDocs.availableOptions') }}</h2>
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
import VxColorPicker from '@/Library/components/Input/VxColorPicker.vue'
import VxRange from '@/Library/components/Input/VxRange.vue'
import VxCheckbox from '@/Library/components/Input/VxCheckbox.vue'
import VxRadio from '@/Library/components/Input/VxRadio.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { getColorPickerMetadata } from '@/Docs/metadata/props/Input/othersProps'
import { getRangeMetadata } from '@/Docs/metadata/props/Input/othersProps'
import { getCheckboxMetadata } from '@/Docs/metadata/props/Input/othersProps'
import { getRadioMetadata } from '@/Docs/metadata/props/Input/othersProps'
import { getOthersCodeExamples } from '@/Docs/metadata/code/Input/othersCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => ({
  color: getColorPickerMetadata(t),
  range: getRangeMetadata(t),
  checkbox: getCheckboxMetadata(t),
  radio: getRadioMetadata(t),
}))
const codeExamples = computed(() => getOthersCodeExamples(tm))
const widths = ['140px', '200px', '90px', '1fr']
const values = reactive({ color: '#7c3aed', range: 50, checkbox: false, radio: 'monthly' })
const items = computed(() => [
  { title: 'VxColorPicker', description: 'inputOthersDocs.colorPickerSectionDescription', component: VxColorPicker, key: 'color', code: codeExamples.value.colorPickerCode, metadata: metadata.value.color, props: {} },
  { title: 'VxRange', description: 'inputOthersDocs.rangeSectionDescription', component: VxRange, key: 'range', code: codeExamples.value.rangeCode, metadata: metadata.value.range, props: { block: true } },
  { title: 'VxCheckbox', description: 'inputOthersDocs.checkboxSectionDescription', component: VxCheckbox, key: 'checkbox', code: codeExamples.value.checkboxCode, metadata: metadata.value.checkbox, props: { label: 'Checkbox' } },
  { title: 'VxRadio', description: 'inputOthersDocs.radioSectionDescription', component: VxRadio, key: 'radio', code: codeExamples.value.radioCode, metadata: metadata.value.radio, props: { name: 'plan', value: 'monthly', label: 'Monthly' } },
])
</script>