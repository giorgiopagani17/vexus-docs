<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxButton</h1>
      <p class="subtitle">
        {{ $t('buttonDocs.intro') }}
      </p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.setup') }}</h2>
      <p>{{ $t('buttonDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Variant -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.variant') }}</h2>
      <p>{{ $t('buttonDocs.variantDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick">{{ $t('buttonDocs.labels.solid') }}</VxButton>
        <VxButton @click="onClick" variant="outline">{{ $t('buttonDocs.labels.outline') }}</VxButton>
        <VxButton @click="onClick" variant="ghost">{{ $t('buttonDocs.labels.ghost') }}</VxButton>
        <VxButton @click="onClick" variant="text">{{ $t('buttonDocs.labels.text') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.variantCode" />
    </section>

    <!-- Color -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.color') }}</h2>
      <p>{{ $t('buttonDocs.colorDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick" color="primary">{{ $t('buttonDocs.labels.primary') }}</VxButton>
        <VxButton @click="onClick" color="secondary">{{ $t('buttonDocs.labels.secondary') }}</VxButton>
        <VxButton @click="onClick" color="positive">{{ $t('buttonDocs.labels.positive') }}</VxButton>
        <VxButton @click="onClick" color="negative">{{ $t('buttonDocs.labels.negative') }}</VxButton>
        <VxButton @click="onClick" color="warning">{{ $t('buttonDocs.labels.warning') }}</VxButton>
        <VxButton @click="onClick" color="info">{{ $t('buttonDocs.labels.info') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.colorCode" />

      <p class="section-note">{{ $t('buttonDocs.customColorNote') }}</p>

      <div class="example-row">
        <VxButton @click="onClick" color="#7c3aed">Hex</VxButton>
        <VxButton @click="onClick" color="var(--vx-primary)">Palette via var</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.colorCustomCode" />
    </section>

    <!-- Size -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.size') }}</h2>
      <p>{{ $t('buttonDocs.sizeDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick" size="sm">{{ $t('buttonDocs.labels.small') }}</VxButton>
        <VxButton @click="onClick" size="md">{{ $t('buttonDocs.labels.medium') }}</VxButton>
        <VxButton @click="onClick" size="lg">{{ $t('buttonDocs.labels.large') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.sizeCode" />
    </section>

    <!-- Icone -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.icons') }}</h2>
      <p>{{ $t('buttonDocs.iconsDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick" :icon="Sparkles" iconPosition="left">{{ $t('buttonDocs.labels.leftIcon') }}</VxButton>
        <VxButton @click="onClick" :icon="Sparkles" iconPosition="right">{{ $t('buttonDocs.labels.rightIcon') }}</VxButton>
      </div>

      <div class="example-row">
        <VxButton @click="onClick">
          <template #icon-left>
            <Sparkles />
          </template>
          {{ $t('buttonDocs.labels.slotLeft') }}
        </VxButton>

        <VxButton @click="onClick">
          {{ $t('buttonDocs.labels.slotRight') }}
          <template #icon-right>
            <Sparkles />
          </template>
        </VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.iconCode" />
    </section>

    <!-- Loading -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.loading') }}</h2>
      <p>{{ $t('buttonDocs.loadingDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick" loading>{{ $t('buttonDocs.labels.loading') }}</VxButton>
        <VxButton @click="onClick" :loading="true">{{ $t('buttonDocs.labels.asyncAction') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.loadingCode" />
    </section>

    <!-- Disabled -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.disabled') }}</h2>
      <p>{{ $t('buttonDocs.disabledDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick" disabled>{{ $t('buttonDocs.labels.disabled') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.disabledCode" />
    </section>

    <!-- Block -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.block') }}</h2>
      <p>{{ $t('buttonDocs.blockDescription') }}</p>

      <div class="example-row" style="flex-direction: column;">
        <VxButton @click="onClick" block>{{ $t('buttonDocs.labels.fullWidth') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.blockCode" />
    </section>

    <!-- Radius -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.radius') }}</h2>
      <p>{{ $t('buttonDocs.radiusDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick">{{ $t('buttonDocs.labels.default') }}</VxButton>
        <VxButton @click="onClick" :radius="20">{{ $t('buttonDocs.labels.custom') }}</VxButton>
        <VxButton @click="onClick" pill>{{ $t('buttonDocs.labels.pill') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.radiusCode" />
    </section>

    <!-- Hover effect -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.hoverEffect') }}</h2>
      <p>{{ $t('buttonDocs.hoverDescription') }}</p>

      <div class="example-grid">
        <VxButton @click="onClick" hoverEffect="brightness">{{ $t('buttonDocs.labels.brightness') }}</VxButton>
        <VxButton @click="onClick" hoverEffect="scale">{{ $t('buttonDocs.labels.scale') }}</VxButton>
        <VxButton @click="onClick" hoverEffect="lift">{{ $t('buttonDocs.labels.lift') }}</VxButton>
        <VxButton @click="onClick" hoverEffect="glow">{{ $t('buttonDocs.labels.glow') }}</VxButton>
        <VxButton @click="onClick" variant="text" hoverEffect="underline">{{ $t('buttonDocs.labels.underline') }}</VxButton>
        <VxButton @click="onClick" hoverEffect="none">{{ $t('buttonDocs.labels.none') }}</VxButton>
        <VxButton
          @click="onClick"
          hoverEffect="custom"
          class="docs-hover-custom"
        >
          {{ $t('buttonDocs.labels.custom') }}
        </VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.hoverEffectCode" />
    </section>

    <!-- Icon only -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.iconOnly') }}</h2>
      <p>{{ $t('buttonDocs.iconOnlyDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick" :icon="Sparkles" />
      </div>

      <DesignCodeBlock :code="codeExamples.iconOnlyCode" />
    </section>

    <!-- Custom colors -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.customColors') }}</h2>
      <p>{{ $t('buttonDocs.customColorsDescription') }}</p>

      <div class="example-row">
        <VxButton
          @click="onClick"
          :colors="{
            background: '#7c3aed',
            text: '#ffffff',
            hoverBackground: '#6d28d9'
          }"
        >
          {{ $t('buttonDocs.labels.custom') }}
        </VxButton>

        <VxButton
          @click="onClick"
          :colors="{
            background: 'positive',
            hoverBackground: 'primary'
          }"
        >
          {{ $t('buttonDocs.labels.tokenOverride') }}
        </VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.colorsOverrideCode" />
    </section>

    <!-- Events -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.events') }}</h2>
      <p>{{ $t('buttonDocs.eventsDescription') }}</p>

      <div class="example-row">
        <VxButton @click="onClick">{{ $t('buttonDocs.labels.clickMe') }}</VxButton>
      </div>

      <DesignCodeBlock :code="codeExamples.eventsCode" />
    </section>

    <!-- Props table -->
    <section class="docs-section">
      <h2>{{ $t('buttonDocs.availableOptions') }}</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="propsRows"
        :widths="['140px', '180px', '90px', '1fr']"
      />
    </section>

    <!-- =====================================================================
         VxButtonToggle
         ===================================================================== -->
    <div id="button-toggle" class="docs-header docs-header--sub">
      <h1>VxButtonToggle</h1>
      <p class="subtitle">{{ $t('buttonDocs.toggleSubtitle') }}</p>
    </div>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.setup') }}</h2>
      <p>{{ $t('buttonDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.toggleSetupCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.base') }}</h2>
      <p>
        {{ $t('buttonDocs.baseDescription') }}
      </p>

      <div class="example-row">
        <VxButtonToggle v-model="viewMode" :options="viewOptions" />
        <span class="example-value">{{ $t('buttonDocs.value') }} {{ viewMode }}</span>
      </div>

      <DesignCodeBlock :code="codeExamples.toggleBasicCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.multipleSelection') }}</h2>
      <p>{{ $t('buttonDocs.multipleDescription') }}</p>

      <div class="example-row">
        <VxButtonToggle v-model="days" multiple :options="dayOptions" />
        <span class="example-value">{{ $t('buttonDocs.value') }} {{ days }}</span>
      </div>

      <DesignCodeBlock :code="codeExamples.toggleMultipleCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.iconOnlySelection') }}</h2>
      <p>
        {{ $t('buttonDocs.iconOnlySelectionDescription') }}
      </p>

      <div class="example-row">
        <VxButtonToggle v-model="textFormat" multiple :options="formatOptions" />
        <span class="example-value">{{ $t('buttonDocs.value') }} {{ textFormat }}</span>
      </div>

      <DesignCodeBlock :code="codeExamples.toggleIconOnlyCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.style') }}</h2>
      <p>
        {{ $t('buttonDocs.styleDescription') }}
      </p>

      <div class="example-row">
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" variant="ghost" />
        <VxButtonToggle
          v-model="styleDemo"
          :options="abcOptions"
          color="secondary"
          active-color="positive"
        />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" size="sm" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" size="lg" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" pill />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" disabled />
      </div>

      <DesignCodeBlock :code="codeExamples.toggleStyleCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.clearable') }}</h2>
      <p>{{ $t('buttonDocs.clearableDescription') }}</p>

      <div class="example-row">
        <VxButtonToggle v-model="clearableValue" clearable :options="abcOptions" />
        <span class="example-value">{{ $t('buttonDocs.value') }} {{ clearableValue }}</span>
      </div>

      <DesignCodeBlock :code="codeExamples.toggleClearableCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.block') }}</h2>
      <p>{{ $t('buttonDocs.toggleBlockDescription') }}</p>

      <div class="example-row" style="flex-direction: column;">
        <VxButtonToggle v-model="viewMode" block :options="viewOptions" />
      </div>

      <DesignCodeBlock :code="codeExamples.toggleBlockCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.availableOptions') }}</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="toggleRows"
        :widths="['140px', '180px', '90px', '1fr']"
      />
    </section>

    <!-- =====================================================================
         VxButtonDropdown
         ===================================================================== -->
    <div id="button-dropdown" class="docs-header docs-header--sub">
      <h1>VxButtonDropdown</h1>
      <p class="subtitle">{{ $t('buttonDocs.dropdownSubtitle') }}</p>
    </div>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.setup') }}</h2>
      <p>{{ $t('buttonDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.dropdownSetupCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.base') }}</h2>
      <p>
        {{ $t('buttonDocs.dropdownBaseDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown :label="$t('buttonDocs.labels.actions')" :items="actionItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="codeExamples.dropdownBasicCode" />

      <p class="section-note">{{ $t('buttonDocs.itemNote') }}</p>
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.variant') }} e {{ $t('buttonDocs.color').toLowerCase() }}</h2>
      <p>
        {{ $t('buttonDocs.dropdownVariantDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown :label="$t('buttonDocs.labels.export')" :icon="Download" variant="outline" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown :label="$t('buttonDocs.labels.share')" :icon="Share2" variant="ghost" color="secondary" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown :label="$t('buttonDocs.labels.more')" variant="text" size="sm" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown :label="$t('buttonDocs.labels.pill')" pill :items="exportItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="codeExamples.dropdownVariantCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.split') }}</h2>
      <p>
        {{ $t('buttonDocs.splitDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown
          split
          :label="$t('buttonDocs.labels.save')"
          :icon="Save"
          :items="saveItems"
          @click="onClick"
          @select="onSelect"
        />
        <VxButtonDropdown
          split
          variant="outline"
          :label="$t('buttonDocs.labels.save')"
          :items="saveItems"
          @click="onClick"
          @select="onSelect"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.dropdownSplitCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.placement') }}</h2>
      <p>
        {{ $t('buttonDocs.placementDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown label="bottom-start" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="bottom-end" placement="bottom-end" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="top-start" placement="top-start" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="top-end" placement="top-end" :items="exportItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="codeExamples.dropdownPlacementCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.slot') }}</h2>
      <p>
        {{ $t('buttonDocs.slotDescription') }}
      </p>

      <div class="example-row">
        <VxButtonDropdown :items="userItems" @select="onSelect">
          <template #default>{{ $t('buttonDocs.labels.users') }}</template>

          <template #item="{ item }">
            <span class="docs-user-item">
              <strong>{{ item.label }}</strong>
              <small>{{ item.email }}</small>
            </span>
          </template>
        </VxButtonDropdown>
      </div>

      <DesignCodeBlock :code="codeExamples.dropdownSlotCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.block') }} e {{ $t('buttonDocs.disabled').toLowerCase() }}</h2>
      <p>
        {{ $t('buttonDocs.dropdownBlockDescription') }}
      </p>

      <div class="example-row" style="flex-direction: column;">
        <VxButtonDropdown block :label="$t('buttonDocs.labels.fullWidth')" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown disabled :label="$t('buttonDocs.labels.disabled')" :items="exportItems" />
      </div>

      <DesignCodeBlock :code="codeExamples.dropdownBlockCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.codeControl') }}</h2>
      <p>
        {{ $t('buttonDocs.codeControlDescription') }}
      </p>

      <DesignCodeBlock :code="codeExamples.dropdownExposeCode" />
    </section>

    <section class="docs-section">
      <h2>{{ $t('buttonDocs.availableOptions') }}</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="dropdownRows"
        :widths="['140px', '180px', '90px', '1fr']"
      />
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Sparkles,
  List,
  LayoutGrid,
  Bold,
  Italic,
  Underline,
  Pencil,
  Copy,
  Archive,
  Trash2,
  Download,
  Share2,
  Save
} from 'lucide-vue-next'
import VxButton from '@/Library/components/Button/VxButton.vue'
import VxButtonDropdown from '@/Library/components/Button/VxButtonDropdown.vue'
import VxButtonToggle from '@/Library/components/Button/VxButtonToggle.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { useVxNotify } from '@/Library/composables/Notify/useVxNotify'
import { getButtonDocsMetadata } from '@/Docs/metadata/props/Button/buttonGeneralProps'
import { getButtonCodeExamples } from '@/Docs/metadata/code/Button/buttonCodeExamples'

const { VxNotify } = useVxNotify()
const { t, tm } = useI18n()
const metadata = computed(() => getButtonDocsMetadata(t))
const codeExamples = computed(() => getButtonCodeExamples(tm))
const propsColumns = computed(() => metadata.value.columns)
const propsRows = computed(() => metadata.value.propsRows)
const toggleRows = computed(() => metadata.value.toggleRows)
const dropdownRows = computed(() => metadata.value.dropdownRows)

const onClick = () => {
  VxNotify({
    title: t('buttonDocs.clickedTitle'),
    message: t('buttonDocs.clickedMessage'),
    color: 'positive',
    duration: 3000
  })
}

/* ===== VxButtonToggle: stato e opzioni degli esempi ===== */
const viewMode = ref('list')
const days = ref(['Lun', 'Mer'])
const textFormat = ref(['bold'])
const styleDemo = ref('B')
const clearableValue = ref(null)

const viewOptions = computed(() => [
  { label: t('buttonDocs.labels.list'), value: 'list', icon: List },
  { label: t('buttonDocs.labels.grid'), value: 'grid', icon: LayoutGrid }
])

const dayOptions = computed(() => [
  t('buttonDocs.labels.mon'), t('buttonDocs.labels.tue'), t('buttonDocs.labels.wed'),
  t('buttonDocs.labels.thu'), t('buttonDocs.labels.fri')
])

const formatOptions = computed(() => [
  { value: 'bold', icon: Bold, ariaLabel: t('buttonDocs.labels.bold') },
  { value: 'italic', icon: Italic, ariaLabel: t('buttonDocs.labels.italic') },
  { value: 'underline', icon: Underline, ariaLabel: t('buttonDocs.labels.underlineText') }
])

const abcOptions = ['A', 'B', 'C']

/* ===== VxButtonDropdown: voci degli esempi ===== */
const actionItems = computed(() => [
  { header: t('buttonDocs.labels.document') },
  { label: t('buttonDocs.labels.edit'), value: 'edit', icon: Pencil },
  { label: t('buttonDocs.labels.duplicate'), value: 'duplicate', icon: Copy },
  { label: t('buttonDocs.labels.archive'), value: 'archive', icon: Archive, disabled: true },
  { separator: true },
  { label: t('buttonDocs.labels.delete'), value: 'delete', icon: Trash2, color: 'negative' }
])

const exportItems = computed(() => [
  { label: 'PDF', value: 'pdf' },
  { label: 'CSV', value: 'csv' },
  { label: 'Excel', value: 'xlsx' }
])

const saveItems = computed(() => [
  { label: t('buttonDocs.labels.saveDraft'), value: 'draft' },
  { label: t('buttonDocs.labels.saveClose'), value: 'close' },
  { label: t('buttonDocs.labels.saveDuplicate'), value: 'duplicate', icon: Copy }
])

const userItems = [
  { label: 'Mario Rossi', email: 'mario.rossi@example.com', value: 1 },
  { label: 'Giulia Bianchi', email: 'giulia.bianchi@example.com', value: 2 },
  { label: 'Luca Verdi', email: 'luca.verdi@example.com', value: 3 }
]

const onSelect = (item) => {
  VxNotify({
    title: t('buttonDocs.selectedTitle'),
    message: item.label,
    color: 'positive',
    duration: 3000
  })
}
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

  /* intestazione dei componenti successivi (Toggle, Dropdown) nella stessa pagina */
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