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

<style lang="scss" scoped>
.docs-page {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

@media (max-width: 600px) {
  .docs-page {
    padding: 0;
  }
}

.docs-header {
  margin-bottom: 48px;

  h1 {
    font-size: 36px;
    font-weight: 800;
    background: linear-gradient(135deg, $primary, $secondary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 0 0 12px;
  }

  /* Shared header styles for the standalone dropdown documentation page. */
  &--sub {
    margin-top: 24px;
    padding-top: 48px;
    border-top: 1px solid rgba($primary, 0.12);

    h1 {
      font-size: 28px;
    }
  }
}

.subtitle {
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.65;
  margin: 0;
}

.docs-section {
  margin-bottom: 56px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 8px;
  }

  > p {
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.65;
    margin: 0 0 20px;

    code {
      background: rgba($primary, 0.1);
      color: $primary;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
    }
  }
}

.section-note {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.65;
  margin: 0 0 16px;

  code {
    background: rgba($primary, 0.1);
    color: $primary;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 13px;
  }
}

.example-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba($primary, 0.12);
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 16px;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba($primary, 0.12);
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 16px;
}

/* valore corrente del v-model negli esempi del Toggle */
.example-value {
  align-self: center;
  font-family: monospace;
  font-size: 13px;
  opacity: 0.65;
}

/* contenuto custom delle voci nell'esempio dello slot #item del Dropdown */
.docs-user-item {
  display: flex;
  flex-direction: column;
  gap: 2px;

  small {
    font-size: 12px;
    opacity: 0.6;
  }
}

/* Esempio di hover custom gestito direttamente nella pagina docs */
.docs-hover-custom {
  &:hover:not(.vx-btn--disabled) {
    background: repeating-linear-gradient(
      45deg,
      var(--btn-bg),
      var(--btn-bg) 10px,
      color-mix(in srgb, var(--btn-bg) 70%, black) 10px,
      color-mix(in srgb, var(--btn-bg) 70%, black) 20px
    );
  }
}
</style>