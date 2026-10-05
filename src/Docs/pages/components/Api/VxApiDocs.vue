<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxApi</h1>
      <p class="subtitle">{{ $t('apiDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.setup') }}</h2>
      <p>{{ $t('apiDocs.setupDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Uso base -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.usage') }}</h2>
      <p>{{ $t('apiDocs.usageDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('apiDocs.labels.getUser')" variant="primary" @click="demoGet" />
      </div>

      <DesignCodeBlock :code="codeExamples.usageCode" />
    </section>

    <!-- GET / POST / query / path params -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.params') }}</h2>
      <p>{{ $t('apiDocs.paramsDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.getPostCode" />
    </section>

    <!-- Notifiche automatiche -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.notifications') }}</h2>
      <p>{{ $t('apiDocs.notificationsDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('apiDocs.labels.success')" variant="primary" @click="demoSuccess" />
        <DesignButton :text="$t('apiDocs.labels.error')" @click="demoError" />
      </div>

      <DesignCodeBlock :code="codeExamples.notifyCode" />
    </section>

    <!-- Message path custom -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.messagePaths') }}</h2>
      <p>{{ $t('apiDocs.messagePathsDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.messagePathCode" />
    </section>

    <!-- Loading -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.loading') }}</h2>
      <p>{{ $t('apiDocs.loadingDescription') }}</p>

      <div class="example-row">
        <DesignButton :text="$t('apiDocs.labels.loadUsers')" variant="ghost" @click="demoLoading" />
      </div>

      <DesignCodeBlock :code="codeExamples.loadingCode" />
    </section>

    <!-- Refresh automatico -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.refresh') }}</h2>
      <p>{{ $t('apiDocs.refreshDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.refreshCode" />
    </section>

    <!-- Blob -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.blob') }}</h2>
      <p>{{ $t('apiDocs.blobDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.blobCode" />
    </section>

    <!-- Config -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.config') }}</h2>
      <p>{{ $t('apiDocs.configDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.configCode" />
      <DesignPropsTable
        :columns="configColumns"
        :rows="configRows"
        :widths="['150px', '220px', '110px', '1fr']"
        style="margin-top: 16px;"
      />
    </section>

    <!-- Options table -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.sections.options') }}</h2>
      <DesignPropsTable
        :columns="optionsColumns"
        :rows="optionsRows"
        :widths="['150px', '220px', '110px', '1fr']"
      />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useVxApi } from '@/Library/composables/Api/useVxApi'
import DesignButton from '@/Docs/components/Buttons/DesignButton.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { getApiMetadata } from '@/Docs/metadata/props/Api/apiGeneralProps'
import {
  setupCode,
  usageCode,
  getPostCode,
  notifyCode,
  messagePathCode,
  loadingCode,
  refreshCode,
  blobCode,
  configCode,
  getApiCodeExamples,
} from '@/Docs/metadata/code/Api/apiCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => getApiMetadata(t))
const optionsColumns = computed(() => metadata.value.optionsColumns)
const optionsRows = computed(() => metadata.value.optionsRows)
const configColumns = computed(() => metadata.value.configColumns)
const configRows = computed(() => metadata.value.configRows)
const codeExamples = computed(() => getApiCodeExamples(tm))
const { VxRequest } = useVxApi()

const demoGet = () => {
  VxRequest('users/1', {
    method: 'GET',
    showNotify: true,
    successMessage: t('apiDocs.notify.userLoaded'),
    errorMessage: t('apiDocs.notify.userLoadError'),
  })
}

const demoSuccess = () => {
  VxRequest('users/1', {
    method: 'GET',
    showNotify: true,
    successMessage: t('apiDocs.notify.success'),
  })
}

const demoError = () => {
  VxRequest('questo-endpoint-non-esiste', {
    method: 'GET',
    showOnlyErroNotify: true,
    errorMessage: t('apiDocs.notify.endpointError'),
  })
}

const demoLoading = () => {
  VxRequest('users', {
    method: 'GET',
    showNotifyLoading: true,
    loadingMessage: t('apiDocs.notify.loadingUsers'),
    successMessage: t('apiDocs.notify.usersLoaded'),
  })
}
</script>
