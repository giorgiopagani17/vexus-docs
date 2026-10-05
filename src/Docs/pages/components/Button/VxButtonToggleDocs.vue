<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxButtonToggle</h1>
      <p class="subtitle">{{ $t('buttonToggleDocs.toggleSubtitle') }}</p>
    </div>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.setup') }}</h2>
      <p>{{ $t('buttonToggleDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.base') }}</h2>
      <p>{{ $t('buttonToggleDocs.baseDescription') }}</p>
      <div class="example-row">
        <VxButtonToggle v-model="viewMode" :options="viewOptions" />
        <span class="example-value">{{ $t('buttonToggleDocs.value') }} {{ viewMode }}</span>
      </div>
      <DesignCodeBlock :code="codeExamples.basicCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.multipleSelection') }}</h2>
      <p>{{ $t('buttonToggleDocs.multipleDescription') }}</p>
      <div class="example-row">
        <VxButtonToggle v-model="days" multiple :options="dayOptions" />
        <span class="example-value">{{ $t('buttonToggleDocs.value') }} {{ days }}</span>
      </div>
      <DesignCodeBlock :code="codeExamples.multipleCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.iconOnlySelection') }}</h2>
      <p>{{ $t('buttonToggleDocs.iconOnlySelectionDescription') }}</p>
      <div class="example-row">
        <VxButtonToggle v-model="textFormat" multiple :options="formatOptions" />
        <span class="example-value">{{ $t('buttonToggleDocs.value') }} {{ textFormat }}</span>
      </div>
      <DesignCodeBlock :code="codeExamples.iconOnlyCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.style') }}</h2>
      <p>{{ $t('buttonToggleDocs.styleDescription') }}</p>
      <div class="example-row">
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" variant="ghost" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" color="secondary" active-color="positive" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" size="sm" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" size="lg" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" pill />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" disabled />
      </div>
      <DesignCodeBlock :code="codeExamples.styleCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.clearable') }}</h2>
      <p>{{ $t('buttonToggleDocs.clearableDescription') }}</p>
      <div class="example-row">
        <VxButtonToggle v-model="clearableValue" clearable :options="abcOptions" />
        <span class="example-value">{{ $t('buttonToggleDocs.value') }} {{ clearableValue }}</span>
      </div>
      <DesignCodeBlock :code="codeExamples.clearableCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.block') }}</h2>
      <p>{{ $t('buttonToggleDocs.toggleBlockDescription') }}</p>
      <div class="example-row" style="flex-direction: column;">
        <VxButtonToggle v-model="viewMode" block :options="viewOptions" />
      </div>
      <DesignCodeBlock :code="codeExamples.blockCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonToggleDocs.availableOptions') }}</h2>
      <DesignPropsTable :columns="propsColumns" :rows="propsRows" :widths="['140px', '180px', '90px', '1fr']" />
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { List, LayoutGrid, Bold, Italic, Underline } from 'lucide-vue-next'
import VxButtonToggle from '@/Library/components/Button/VxButtonToggle.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { getButtonToggleMetadata } from '@/Docs/metadata/props/Button/buttonToggleProps'
import { getButtonToggleCodeExamples } from '@/Docs/metadata/code/Button/ButtonToggleCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => getButtonToggleMetadata(t))
const codeExamples = computed(() => getButtonToggleCodeExamples(tm))
const propsColumns = computed(() => metadata.value.columns)
const propsRows = computed(() => metadata.value.rows)
const viewMode = ref('list')
const days = ref(['Lun', 'Mer'])
const textFormat = ref(['bold'])
const styleDemo = ref('B')
const clearableValue = ref(null)
const viewOptions = computed(() => [
  { label: t('buttonToggleDocs.labels.list'), value: 'list', icon: List },
  { label: t('buttonToggleDocs.labels.grid'), value: 'grid', icon: LayoutGrid }
])
const dayOptions = computed(() => [
  t('buttonToggleDocs.labels.mon'), t('buttonToggleDocs.labels.tue'), t('buttonToggleDocs.labels.wed'),
  t('buttonToggleDocs.labels.thu'), t('buttonToggleDocs.labels.fri')
])
const formatOptions = computed(() => [
  { value: 'bold', icon: Bold, ariaLabel: t('buttonToggleDocs.labels.bold') },
  { value: 'italic', icon: Italic, ariaLabel: t('buttonToggleDocs.labels.italic') },
  { value: 'underline', icon: Underline, ariaLabel: t('buttonToggleDocs.labels.underlineText') }
])
const abcOptions = ['A', 'B', 'C']
</script>