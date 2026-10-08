<template>
  <router-view />

  <CookieConsent />
  <CookieSettingsButton />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

import CookieConsent from '@/components/Cookie/CookieConsent.vue'
import CookieSettingsButton from '@/components/Cookie/CookieSettingsButton.vue'

import { trackPageView } from '@/services/analytics'
import { hasAnalyticsConsent } from '@/services/cookieConsent'

const route = useRoute()

watch(
  () => route.fullPath,
  (path) => {
    if (hasAnalyticsConsent()) trackPageView(path)
  },
)
</script>