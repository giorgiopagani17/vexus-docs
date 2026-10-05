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

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  Sparkles,
} from 'lucide-vue-next'
import VxButton from '@/Library/components/Button/VxButton.vue'
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

const onClick = () => {
  VxNotify({
    title: t('buttonDocs.clickedTitle'),
    message: t('buttonDocs.clickedMessage'),
    color: 'positive',
    duration: 3000
  })
}

</script>