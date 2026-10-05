<template>
  <main class="docs-page versions-page">
    <header class="docs-header">
      <h1>{{ $t('versions.title') }}</h1>
      <p class="subtitle">{{ $t('versions.subtitle') }}</p>
    </header>

    <div class="versions-list">
      <details v-for="(v, index) in versions" :key="v.version" class="version-card" :open="index === 0">
        <summary class="version-summary">
          <span class="version-summary__main">
            <span class="version-badge">v{{ v.version }}</span>
            <span class="version-title">{{ v.title ? $t(v.title) : $t('versions.release') }}</span>
          </span>
          <time :datetime="v.date">{{ formatDate(v.date) }}</time>
        </summary>

        <p class="version-description">{{ $t(v.description) }}</p>
      </details>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { versions } from '@/Docs/metadata/documentation/versions'

const { locale } = useI18n()

const formatDate = (d: string) => {
  const language = locale.value === 'it' ? 'it-IT' : 'en-US'
  return new Intl.DateTimeFormat(language, { dateStyle: 'long' }).format(new Date(d))
}
</script>
