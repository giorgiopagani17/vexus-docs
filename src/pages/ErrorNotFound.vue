<template>
  <div class="not-found">
    <div class="card">
      <div class="glitch-number" data-text="404">404</div>

      <h2>{{ t('errorNotFound.title') }}</h2>

      <p>
        {{ t('errorNotFound.message') }}
      </p>

      <div class="actions">
        <DesignButton :text="$t('buttons.backToHome')" :icon-left="Plus" variant="primary" @click="goHome" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import DesignButton from '@/components/Buttons/DesignButton.vue'

const { t } = useI18n()
const router = useRouter()

const goHome = () => router.push('/')
</script>
