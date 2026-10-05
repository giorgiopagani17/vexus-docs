<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxButtonDropdown</h1>
      <p class="subtitle">{{ $t('buttonDropdownDocs.dropdownSubtitle') }}</p>
    </div>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.setup') }}</h2>
      <p>{{ $t('buttonDropdownDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.base') }}</h2>
      <p>
        {{ $t('buttonDropdownDocs.dropdownBaseDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown :label="$t('buttonDropdownDocs.labels.actions')" :items="actionItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="codeExamples.basicCode" />

      <p class="section-note">{{ $t('buttonDropdownDocs.itemNote') }}</p>
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.variant') }} e {{ $t('buttonDropdownDocs.color').toLowerCase() }}</h2>
      <p>
        {{ $t('buttonDropdownDocs.dropdownVariantDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown :label="$t('buttonDropdownDocs.labels.export')" :icon="Download" variant="outline" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown :label="$t('buttonDropdownDocs.labels.share')" :icon="Share2" variant="ghost" color="secondary" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown :label="$t('buttonDropdownDocs.labels.more')" variant="text" size="sm" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown :label="$t('buttonDropdownDocs.labels.pill')" pill :items="exportItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="codeExamples.variantCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.split') }}</h2>
      <p>
        {{ $t('buttonDropdownDocs.splitDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown
          split
          :label="$t('buttonDropdownDocs.labels.save')"
          :icon="Save"
          :items="saveItems"
          @click="onClick"
          @select="onSelect"
        />
        <VxButtonDropdown
          split
          variant="outline"
          :label="$t('buttonDropdownDocs.labels.save')"
          :items="saveItems"
          @click="onClick"
          @select="onSelect"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.splitCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.placement') }}</h2>
      <p>
        {{ $t('buttonDropdownDocs.placementDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown label="bottom-start" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="bottom-end" placement="bottom-end" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="top-start" placement="top-start" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="top-end" placement="top-end" :items="exportItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="codeExamples.placementCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.slot') }}</h2>
      <p>
        {{ $t('buttonDropdownDocs.slotDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown :items="userItems" @select="onSelect">
          <template #default>{{ $t('buttonDropdownDocs.labels.users') }}</template>

          <template #item="{ item }">
            <span class="docs-user-item">
              <strong>{{ item.label }}</strong>
              <small>{{ item.email }}</small>
            </span>
          </template>
        </VxButtonDropdown>
      </div>

      <DesignCodeBlock :code="codeExamples.slotCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.block') }} e {{ $t('buttonDropdownDocs.disabled').toLowerCase() }}</h2>
      <p>
        {{ $t('buttonDropdownDocs.dropdownBlockDescription') }}
      </p>

      <div class="example-row" style="flex-direction: column;">
        <VxButtonDropdown block :label="$t('buttonDropdownDocs.labels.fullWidth')" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown disabled :label="$t('buttonDropdownDocs.labels.disabled')" :items="exportItems" />
      </div>

      <DesignCodeBlock :code="codeExamples.blockCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.codeControl') }}</h2>
      <p>
        {{ $t('buttonDropdownDocs.codeControlDescription') }}
      </p>

      <DesignCodeBlock :code="codeExamples.exposeCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDropdownDocs.availableOptions') }}</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="propsRows"
        :widths="['140px', '180px', '90px', '1fr']"
      />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Copy, Pencil, Archive, Trash2, Download, Share2, Save } from 'lucide-vue-next'
import VxButtonDropdown from '@/Library/components/Button/VxButtonDropdown.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { useVxNotify } from '@/Library/composables/Notify/useVxNotify'
import { getButtonDropdownMetadata } from '@/Docs/metadata/props/Button/buttonDropdownProps'
import { getButtonDropdownCodeExamples } from '@/Docs/metadata/code/Button/ButtonDropdownCodeExamples'

const { VxNotify } = useVxNotify()
const { t, tm } = useI18n()
const metadata = computed(() => getButtonDropdownMetadata(t))
const codeExamples = computed(() => getButtonDropdownCodeExamples(tm))
const propsColumns = computed(() => metadata.value.columns)
const propsRows = computed(() => metadata.value.rows)
const onClick = () => VxNotify({ title: t('buttonDropdownDocs.clickedTitle'), message: t('buttonDropdownDocs.clickedMessage'), color: 'positive', duration: 3000 })
const actionItems = computed(() => [
  { header: t('buttonDropdownDocs.labels.document') },
  { label: t('buttonDropdownDocs.labels.edit'), value: 'edit', icon: Pencil },
  { label: t('buttonDropdownDocs.labels.duplicate'), value: 'duplicate', icon: Copy },
  { label: t('buttonDropdownDocs.labels.archive'), value: 'archive', icon: Archive, disabled: true },
  { separator: true },
  { label: t('buttonDropdownDocs.labels.delete'), value: 'delete', icon: Trash2, color: 'negative' }
])
const exportItems = computed(() => [{ label: 'PDF', value: 'pdf' }, { label: 'CSV', value: 'csv' }, { label: 'Excel', value: 'xlsx' }])
const saveItems = computed(() => [
  { label: t('buttonDropdownDocs.labels.saveDraft'), value: 'draft' },
  { label: t('buttonDropdownDocs.labels.saveClose'), value: 'close' },
  { label: t('buttonDropdownDocs.labels.saveDuplicate'), value: 'duplicate', icon: Copy }
])
const userItems = [
  { label: 'Mario Rossi', email: 'mario.rossi@example.com', value: 1 },
  { label: 'Giulia Bianchi', email: 'giulia.bianchi@example.com', value: 2 },
  { label: 'Luca Verdi', email: 'luca.verdi@example.com', value: 3 }
]
const onSelect = (item) => VxNotify({ title: t('buttonDropdownDocs.selectedTitle'), message: item.label, color: 'positive', duration: 3000 })
</script>