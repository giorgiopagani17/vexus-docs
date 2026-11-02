<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxModal</h1>
      <p class="subtitle">{{ $t('modalDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.setup') }}</h2>
      <p>{{ $t('modalDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Basic -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.basic') }}</h2>
      <p>{{ $t('modalDocs.basicDescription') }}</p>

      <div class="example-row">
        <button type="button" class="docs-button" @click="modals.basic = true">
          {{ $t('modalDocs.labels.openModal') }}
        </button>
      </div>

      <VxModal v-model="modals.basic" :title="$t('modalDocs.labels.deleteProject')" size="sm">
        <p>{{ $t('modalDocs.labels.cannotUndo') }}</p>

        <template #footer="{ close }">
          <button type="button" class="docs-button docs-button--ghost" @click="close">
            {{ $t('modalDocs.labels.cancel') }}
          </button>
          <button type="button" class="docs-button" @click="close">
            {{ $t('modalDocs.labels.confirm') }}
          </button>
        </template>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.basicCode" />
    </section>

    <!-- Sizes -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.sizes') }}</h2>
      <p>{{ $t('modalDocs.sizesDescription') }}</p>

      <div class="example-row">
        <button
          v-for="size in sizes"
          :key="size"
          type="button"
          class="docs-button"
          @click="openSize(size)"
        >
          {{ size }}
        </button>
      </div>

      <VxModal v-model="sizeOpen" :size="currentSize" :title="`Modal ${currentSize}`">
        <p>{{ $t('modalDocs.labels.sizeText', { size: currentSize }) }}</p>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.sizeCode" />
    </section>

    <!-- Position -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.position') }}</h2>
      <p>{{ $t('modalDocs.positionDescription') }}</p>

      <div class="example-row">
        <button
          v-for="position in positions"
          :key="position"
          type="button"
          class="docs-button"
          @click="openPosition(position)"
        >
          {{ position }}
        </button>
      </div>

      <VxModal
        v-model="positionOpen"
        :position="currentPosition"
        :size="isStrip ? 'sm' : 'md'"
        :title="`Modal ${currentPosition}`"
      >
        <p>{{ $t('modalDocs.labels.positionText', { position: currentPosition }) }}</p>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.positionCode" />
    </section>

    <!-- Spacing -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.spacing') }}</h2>
      <p>{{ $t('modalDocs.spacingDescription') }}</p>

      <div class="example-row">
        <button type="button" class="docs-button" @click="modals.compact = true">
          {{ $t('modalDocs.labels.compact') }}
        </button>
        <button type="button" class="docs-button" @click="modals.flush = true">
          {{ $t('modalDocs.labels.preview') }}
        </button>
      </div>

      <VxModal
        v-model="modals.compact"
        :title="$t('modalDocs.labels.compact')"
        :padding="12"
        :dividers="false"
        size="sm"
      >
        <p>{{ $t('modalDocs.labels.compactText') }}</p>
      </VxModal>

      <VxModal v-model="modals.flush" :title="$t('modalDocs.labels.preview')" :bodyPadding="0" size="sm">
        <div style="padding: 32px 24px; background: rgba(124, 58, 237, 0.18); text-align: center">
          {{ $t('modalDocs.labels.flushText') }}
        </div>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.spacingCode" />
    </section>

    <!-- Custom header -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.header') }}</h2>
      <p>{{ $t('modalDocs.headerDescription') }}</p>

      <div class="example-row">
        <button type="button" class="docs-button" @click="modals.header = true">
          {{ $t('modalDocs.labels.openModal') }}
        </button>
      </div>

      <VxModal v-model="modals.header">
        <template #header="{ titleId }">
          <h2 :id="titleId" style="margin: 0; font-size: 18px">{{ $t('modalDocs.labels.orderTitle') }}</h2>
        </template>

        <p>{{ $t('modalDocs.labels.modalContent') }}</p>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.headerCode" />
    </section>

    <!-- Closing -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.closing') }}</h2>
      <p>{{ $t('modalDocs.closingDescription') }}</p>

      <div class="example-row">
        <button type="button" class="docs-button" @click="modals.closing = true">
          {{ $t('modalDocs.labels.openModal') }}
        </button>
      </div>

      <VxModal
        v-model="modals.closing"
        :title="$t('modalDocs.labels.acceptTermsTitle')"
        :closable="false"
        :closeOnOverlay="false"
        :closeOnEsc="false"
        size="sm"
      >
        <p>{{ $t('modalDocs.labels.acceptTermsText') }}</p>

        <template #footer="{ close }">
          <button type="button" class="docs-button" @click="close">
            {{ $t('modalDocs.labels.accept') }}
          </button>
        </template>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.closeCode" />
    </section>

    <!-- Colors -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.colors') }}</h2>
      <p>{{ $t('modalDocs.colorsDescription') }}</p>

      <div class="example-row">
        <button type="button" class="docs-button" @click="modals.colors = true">
          {{ $t('modalDocs.labels.openModal') }}
        </button>
      </div>

      <VxModal
        v-model="modals.colors"
        :title="$t('modalDocs.labels.customTheme')"
        color="#7c3aed"
        :radius="24"
        :colors="customColors"
        size="sm"
      >
        <p>{{ $t('modalDocs.labels.customThemeText') }}</p>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.colorsCode" />

      <p class="section-note">{{ $t('modalDocs.cssVarsDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.cssVarsCode" />
    </section>

    <!-- Form -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.form') }}</h2>
      <p>{{ $t('modalDocs.formDescription') }}</p>

      <div class="example-row">
        <button type="button" class="docs-button" @click="modals.form = true">
          {{ $t('modalDocs.labels.openModal') }}
        </button>
      </div>

      <VxModal v-model="modals.form" :title="$t('modalDocs.labels.newReport')">
        <div class="example-col">
          <VxInput v-model="form.subject" :label="$t('modalDocs.labels.subject')" block />
          <VxInput v-model="form.message" tag="textarea" :label="$t('modalDocs.labels.message')" block />
        </div>

        <template #footer="{ close }">
          <button type="button" class="docs-button docs-button--ghost" @click="close">
            {{ $t('modalDocs.labels.cancel') }}
          </button>
          <button type="button" class="docs-button" @click="close">
            {{ $t('modalDocs.labels.send') }}
          </button>
        </template>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.formCode" />
    </section>

    <!-- Events -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.events') }}</h2>
      <p>{{ $t('modalDocs.eventsDescription') }}</p>

      <div class="example-col">
        <div class="example-row">
          <button type="button" class="docs-button" @click="modals.events = true">
            {{ $t('modalDocs.labels.openModal') }}
          </button>
        </div>

        <div class="docs-result">
          <span class="docs-result-label">{{ $t('modalDocs.labels.lastEvent') }}</span>
          <span class="docs-result-value">{{ lastEvent || '—' }}</span>
        </div>
      </div>

      <VxModal
        v-model="modals.events"
        title="Modal"
        size="sm"
        @open="lastEvent = 'open'"
        @close="lastEvent = 'close'"
      >
        <p>{{ $t('modalDocs.labels.modalContent') }}</p>
      </VxModal>

      <DesignCodeBlock :code="codeExamples.eventsCode" />
    </section>

    <!-- Props, slot, eventi, variabili CSS -->
    <section class="docs-section">
      <h2>{{ $t('modalDocs.sections.available') }}</h2>
      <DesignPropsTable
        :columns="metadata.columns"
        :rows="metadata.rows"
        :widths="['140px', '200px', '90px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('modalDocs.sections.slots') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.slotsColumns"
        :rows="metadata.slotsRows"
        :widths="['140px', '200px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('modalDocs.sections.eventsTable') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.eventsColumns"
        :rows="metadata.eventsRows"
        :widths="['180px', '140px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('modalDocs.sections.cssVars') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.cssVarsColumns"
        :rows="metadata.cssVarsRows"
        :widths="['200px', '180px', '1fr']"
      />
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { VxModal, VxInput } from 'vexus'
import DesignCodeBlock from '@/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/components/Utils/DesignPropsTable.vue'
import { getModalMetadata } from '@/metadata/props/Modal/modalGeneralProps'
import { getModalCodeExamples } from '@/metadata/code/Modal/modalCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => getModalMetadata(t))
const codeExamples = computed(() => getModalCodeExamples(tm))

const modals = reactive({
  basic: false,
  header: false,
  closing: false,
  colors: false,
  form: false,
  events: false,
  compact: false,
  flush: false,
})

// Un solo modal riutilizzato per le quattro dimensioni
const sizes = ['sm', 'md', 'lg', 'full']
const sizeOpen = ref(false)
const currentSize = ref('md')

function openSize(size) {
  currentSize.value = size
  sizeOpen.value = true
}

// Un solo modal riutilizzato per le cinque posizioni
const positions = ['center', 'left', 'right', 'top', 'bottom']
const positionOpen = ref(false)
const currentPosition = ref('center')
// Le strisce (top, bottom) usano size per l'altezza: una striscia bassa mostra meglio la differenza
const isStrip = computed(() => ['top', 'bottom'].includes(currentPosition.value))

function openPosition(position) {
  currentPosition.value = position
  positionOpen.value = true
}

const customColors = {
  background: '#faf5ff',
  text: '#3b0764',
  border: '#d8b4fe',
  overlay: 'rgba(59, 7, 100, 0.45)',
}

const form = reactive({ subject: '', message: '' })
const lastEvent = ref('')
</script>