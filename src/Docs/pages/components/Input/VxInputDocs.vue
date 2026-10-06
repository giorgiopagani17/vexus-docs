<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxInput</h1>
      <p class="subtitle">{{ $t('inputDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.setup') }}</h2>
      <p>{{ $t('inputDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>


    <section v-for="section in sections" :key="section.title" class="docs-section">
      <h2>{{ $t(section.title) }}</h2>
      <p>{{ $t(section.description) }}</p>
      <div class="example-grid">
        <VxInput
          v-for="example in section.examples"
          :key="example.key"
          v-model="values[example.key]"
          v-bind="example.props"
          :placeholder="$t(example.label)"
        />
      </div>
      <DesignCodeBlock :code="codeExamples[section.code]" />
    </section>
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.availableOptions') }}</h2>
      <DesignPropsTable :columns="metadata.columns" :rows="metadata.rows" :widths="['140px', '200px', '90px', '1fr']" />
    </section>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import VxInput from '@/Library/components/Input/VxInput.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { getInputGeneralMetadata } from '@/Docs/metadata/props/Input/inputGeneralProps'
import { getInputCodeExamples } from '@/Docs/metadata/code/Input/inputCodeExamples'

const { t, tm } = useI18n()
const codeExamples = computed(() => getInputCodeExamples(tm))
const metadata = computed(() => getInputGeneralMetadata(t))
const values = reactive({ outline: '', ghost: '', text: '', password: '', email: '', number: '', phone: '', url: '', file: '', small: '', medium: '', large: '', loading: '', clearable: 'Testo da cancellare', disabled: '', readonly: '' })
const sections = [
  {
    title: 'inputDocs.sections.variant',
    description: 'inputDocs.variantDescription',
    code: 'variantCode',
    examples: [
      { key: 'outline', label: 'inputDocs.labels.outlineDefault', props: {} },
      { key: 'ghost', label: 'inputDocs.labels.ghost', props: { variant: 'ghost' } },
      { key: 'text', label: 'inputDocs.labels.text', props: { variant: 'text' } },
    ],
  },
  {
    title: 'inputDocs.sections.type',
    description: 'inputDocs.typeDescription',
    code: 'typeCode',
    examples: [
      { key: 'password', label: 'inputDocs.labels.password', props: { type: 'password' } },
      { key: 'email', label: 'inputDocs.labels.email', props: { type: 'email' } },
      { key: 'number', label: 'inputDocs.labels.number', props: { type: 'number' } },
      { key: 'phone', label: 'inputDocs.labels.phone', props: { type: 'tel' } },
      { key: 'url', label: 'inputDocs.labels.url', props: { type: 'url' } },
      { key: 'file', label: 'inputDocs.labels.file', props: { type: 'file', clearable: true } },
    ],
  },
  {
    title: 'inputDocs.sections.size',
    description: 'inputDocs.sizeDescription',
    code: 'sizeCode',
    examples: [
      { key: 'small', label: 'inputDocs.labels.small', props: { size: 'sm' } },
      { key: 'medium', label: 'inputDocs.labels.medium', props: { size: 'md' } },
      { key: 'large', label: 'inputDocs.labels.large', props: { size: 'lg' } },
    ],
  },
  {
    title: 'inputDocs.sections.loadingClear',
    description: 'inputDocs.loadingClearDescription',
    code: 'stateCode',
    examples: [
      { key: 'loading', label: 'inputDocs.labels.loading', props: { loading: true } },
      { key: 'clearable', label: 'inputDocs.labels.clearable', props: { clearable: true } },
      { key: 'disabled', label: 'inputDocs.labels.disabled', props: { disabled: true } },
      { key: 'readonly', label: 'inputDocs.labels.readonly', props: { readonly: true } },
    ],
  },
]
</script>