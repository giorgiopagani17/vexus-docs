<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxNotify</h1>
      <p class="subtitle">{{ $t('notifyDocs.intro') }}</p>
    </div>

    <!-- Installazione -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.setup') }}</h2>
      <p>{{ $t('notifyDocs.setupDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Tipi -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.types') }}</h2>
      <p>{{ $t('notifyDocs.typesDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('notifyDocs.labels.default')" @click="VxNotify({ message: t('notifyDocs.messages.generic') })" />
        <DesignButton :text="$t('notifyDocs.labels.success')" variant="primary" @click="VxNotify({ type: 'success', message: t('notifyDocs.messages.success') })" />
        <DesignButton :text="$t('notifyDocs.labels.error')" @click="VxNotify({ type: 'error', message: t('notifyDocs.messages.error') })" />
        <DesignButton :text="$t('notifyDocs.labels.warning')" @click="VxNotify({ type: 'warning', message: t('notifyDocs.messages.warning') })" />
        <DesignButton :text="$t('notifyDocs.labels.info')" @click="VxNotify({ type: 'info', message: t('notifyDocs.messages.info') })" />
      </div>

      <DesignCodeBlock :code="codeExamples.typesCode" />
    </section>

    <!-- Colori custom -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.colors') }}</h2>
      <p>{{ $t('notifyDocs.colorsDescription') }}</p>

      <div class="example-row">
        <DesignButton
          :text="$t('notifyDocs.labels.customColor')"
          variant="ghost"
          @click="VxNotify({
            message: t('notifyDocs.messages.customColor'),
            colors: {
              background: '#7c3aed',
              text: 'rgba(255,255,255,0.85)',
              title: '#ffffff',
              icon: '#ffffff',
              accent: '#ffffff',
              badgeBackground: '#ffffff',
              badgeText: '#7c3aed'
            }
          })"
        />
        <DesignButton
          :text="$t('notifyDocs.labels.partialOverride')"
          variant="ghost"
          @click="VxNotify({
            type: 'success',
            message: t('notifyDocs.messages.override'),
            colors: { background: '#0f766e', shadow: 'rgba(15,118,110,0.35)' }
          })"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.colorsCode" />

      <DesignPropsTable
        :columns="colorColumns"
        :rows="colorKeys"
        :widths="['160px', '1fr']"
        style="margin-top: 16px;"
      />
    </section>

    <!-- Titolo -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.title') }}</h2>
      <p>{{ $t('notifyDocs.titleDescription') }}</p>

      <div class="example-row">
        <DesignButton
          :text="$t('notifyDocs.labels.showTitle')"
          variant="primary"
          @click="VxNotify({
            type: 'success',
            title: t('notifyDocs.messages.savedTitle'),
            message: t('notifyDocs.messages.saved')
          })"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.titleCode" />
    </section>

    <!-- Contenuto HTML -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.html') }}</h2>
      <p>{{ $t('notifyDocs.htmlDescription') }}</p>

      <div class="example-row">
        <DesignButton
          :text="$t('notifyDocs.labels.html')"
          variant="ghost"
          @click="VxNotify({
            type: 'info',
            html: true,
            message: t('notifyDocs.messages.html'),
            duration: 6000
          })"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.htmlCode" />
    </section>

    <!-- Loading / Spinner -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.loading') }}</h2>
      <p>{{ $t('notifyDocs.loadingDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('notifyDocs.labels.simulateUpload')" variant="primary" @click="simulateLoading" />
      </div>

      <DesignCodeBlock :code="codeExamples.loadingCode" />
    </section>

    <!-- Progress bar -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.progress') }}</h2>
      <p>{{ $t('notifyDocs.progressDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('notifyDocs.labels.withProgress')" variant="ghost" @click="VxNotify({ message: t('notifyDocs.messages.closingSoon'), duration: 5000, progress: true })" />
        <DesignButton :text="$t('notifyDocs.labels.withoutProgress')" variant="ghost" @click="VxNotify({ message: t('notifyDocs.messages.noProgress'), duration: 5000 })" />
      </div>

      <DesignCodeBlock :code="codeExamples.progressCode" />
    </section>

    <!-- Posizione -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.position') }}</h2>
      <p>{{ $t('notifyDocs.positionDescription') }}</p>

      <div class="example-grid">
        <DesignButton
          v-for="pos in positions"
          :key="pos"
          :text="$t(`notifyDocs.positions.${pos}`)"
          variant="ghost"
          @click="VxNotify({ message: `${t('notifyDocs.messages.from')} ${pos}`, position: pos })"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.positionCode" />
    </section>

    <!-- Durata -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.duration') }}</h2>
      <p>{{ $t('notifyDocs.durationDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('notifyDocs.labels.fast')" variant="ghost" @click="VxNotify({ message: t('notifyDocs.messages.fast'), duration: 1500 })" />
        <DesignButton :text="$t('notifyDocs.labels.slow')" variant="ghost" @click="VxNotify({ message: t('notifyDocs.messages.slow'), duration: 8000 })" />
        <DesignButton :text="$t('notifyDocs.labels.persistent')" variant="primary" @click="VxNotify({ message: t('notifyDocs.messages.manualClose'), duration: 0 })" />
      </div>

      <DesignCodeBlock :code="codeExamples.durationCode" />
    </section>

    <!-- Azioni -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.actions') }}</h2>
      <p>{{ $t('notifyDocs.actionsDescription') }}</p>

      <div class="example-row">
        <DesignButton
          :text="$t('notifyDocs.labels.showActions')"
          variant="primary"
          @click="VxNotify({
            type: 'warning',
            message: t('notifyDocs.messages.deleteWarning'),
            duration: 0,
            actions: [
              { label: t('notifyDocs.labels.cancel'), action: () => {} },
              { label: t('notifyDocs.labels.delete'), color: '#ffffff', action: () => VxNotify({ type: 'success', message: t('notifyDocs.messages.deleted') }) }
            ]
          })"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.actionsCode" />
    </section>

    <!-- Icona custom -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.icon') }}</h2>
      <p>{{ $t('notifyDocs.iconDescription') }}</p>

      <div class="example-row">
        <DesignButton
          :text="$t('notifyDocs.labels.customIcon')"
          variant="ghost"
          @click="VxNotify({ message: t('notifyDocs.messages.newFeature'), icon: Sparkles, position: 'top-center' })"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.iconCode" />
    </section>

    <!-- Size custom -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.size') }}</h2>
      <p>{{ $t('notifyDocs.sizeDescription') }}</p>

      <div class="example-row">
        <DesignButton
          :text="$t('notifyDocs.labels.largeNotification')"
          variant="ghost"
          @click="VxNotify({
            type: 'info',
            title: t('notifyDocs.messages.largeTitle'),
            message: t('notifyDocs.messages.largeText'),
            iconSize: 32,
            titleSize: 18,
            textSize: 15,
            radius: 20,
            closeButtonSize: 24,
            alignItems: 'flex-end',
            duration: 6000
          })"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.sizeCode" />
    </section>

    <!-- Dismiss -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.dismiss') }}</h2>
      <p>{{ $t('notifyDocs.dismissDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('notifyDocs.labels.dismissAfter')" variant="ghost" @click="programmaticDismiss" />
        <DesignButton :text="$t('notifyDocs.labels.dismissAll')" variant="ghost" @click="dismissAll" />
      </div>

      <DesignCodeBlock :code="codeExamples.dismissCode" />
    </section>

    <!-- Props table -->
    <section class="docs-section">
      <h2>{{ $t('notifyDocs.sections.available') }}</h2>
      <DesignPropsTable
        :columns="generalPropsColumns"
        :rows="generalProps"
        :widths="['130px', '200px', '90px', '1fr']"
      />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Sparkles } from 'lucide-vue-next'
import { useVxNotify } from 'vexus'
import DesignButton from '@/components/Buttons/DesignButton.vue'
import DesignCodeBlock from '@/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/components/Utils/DesignPropsTable.vue'
import { getNotifyGeneralMetadata } from '@/metadata/props/Notify/notifyGeneralProps'
import { getNotifyColorMetadata } from '@/metadata/props/Notify/notifyColorsProps'
import { getNotifyCodeExamples } from '@/metadata/code/Notify/notifyCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => getNotifyGeneralMetadata(t))
const colorMetadata = computed(() => getNotifyColorMetadata(t))
const generalPropsColumns = computed(() => metadata.value.columns)
const generalProps = computed(() => metadata.value.rows)
const colorColumns = computed(() => colorMetadata.value.columns)
const colorKeys = computed(() => colorMetadata.value.rows)
const codeExamples = computed(() => getNotifyCodeExamples(tm))
const { VxNotify, dismiss, dismissAll, update } = useVxNotify()

const positions = [
  'top-left', 'top-center', 'top-right',
  'center-left', 'center-center', 'center-right',
  'bottom-left', 'bottom-center', 'bottom-right'
]

const programmaticDismiss = () => {
  const id = VxNotify({ message: t('notifyDocs.messages.dismissAfter'), duration: 0 })
  setTimeout(() => dismiss(id), 2000)
}

const simulateLoading = () => {
  const id = VxNotify({
    type: 'default',
    message: t('notifyDocs.messages.uploading'),
    loading: true,
    duration: 0,
    closable: false
  })

  setTimeout(() => {
    update(id, {
      type: 'success',
      loading: false,
      message: t('notifyDocs.messages.uploaded'),
      duration: 3000,
      closable: true
    })
  }, 2500)
}
</script>