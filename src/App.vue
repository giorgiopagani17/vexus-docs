<template>
  <router-view />

  <CookieConsent
    @visibility-change="cookieConsentOpen = $event"
  />

  <CookieSettingsButton
    v-if="!cookieConsentOpen"
  />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import CookieConsent from '@/components/Cookie/CookieConsent.vue'
import CookieSettingsButton from '@/components/Cookie/CookieSettingsButton.vue'

import { trackPageView } from '@/services/analytics'
import { hasAnalyticsConsent } from '@/services/cookieConsent'

const route = useRoute()

const cookieConsentOpen = ref(false)

watch(
  () => route.fullPath,
  (path) => {
    if (hasAnalyticsConsent()) trackPageView(path)
  },
)
</script>