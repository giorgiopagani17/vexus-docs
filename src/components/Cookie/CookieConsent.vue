<template>
  <Teleport to="body">
    <section v-if="showBanner" class="cookie-banner" role="dialog" aria-live="polite" :aria-label="t('cookies.banner.title')">
      <div>
        <h2>{{ t('cookies.banner.title') }}</h2>
        <p>
          {{ t('cookies.banner.text') }}
          <button class="link-button" type="button" @click="openPolicy">{{ t('cookies.actions.readPolicy') }}</button>
        </p>
      </div>

      <div class="cookie-banner__actions">
        <button class="ghost-button" type="button" @click="rejectOptional">{{ t('cookies.actions.reject') }}</button>
        <button class="ghost-button" type="button" @click="openSettings">{{ t('cookies.actions.settings') }}</button>
        <button class="primary-button" type="button" @click="acceptAll">{{ t('cookies.actions.accept') }}</button>
      </div>
    </section>

    <div v-if="showSettings || showPolicy" class="cookie-backdrop" @mousedown.self="closeModal">
      <section v-if="showSettings" class="cookie-modal" role="dialog" aria-modal="true" :aria-label="t('cookies.settings.title')">
        <header class="cookie-modal__header">
          <h2>{{ t('cookies.settings.title') }}</h2>
          <button class="icon-close" type="button" :aria-label="t('cookies.actions.close')" @click="closeModal">
            <X :size="18" :stroke-width="2.5" />
          </button>
        </header>

        <div class="cookie-settings-content">
          <p class="cookie-modal__intro">{{ t('cookies.settings.intro') }}</p>

          <div class="cookie-option">
            <div>
              <h3>{{ t('cookies.categories.necessary.title') }}</h3>
              <p>{{ t('cookies.categories.necessary.description') }}</p>
            </div>
            <span class="status-pill">{{ t('cookies.categories.necessary.alwaysOn') }}</span>
          </div>

          <label class="cookie-option cookie-option--interactive">
            <div>
              <h3>{{ t('cookies.categories.analytics.title') }}</h3>
              <p>{{ t('cookies.categories.analytics.description') }}</p>
            </div>
            <input v-model="draftPreferences.analytics" type="checkbox" />
          </label>

          <button class="link-button cookie-policy-link" type="button" @click="openPolicy">
            {{ t('cookies.actions.readPolicy') }}
          </button>
        </div>

        <footer class="cookie-modal__actions">
          <button class="ghost-button" type="button" @click="rejectOptional">{{ t('cookies.actions.reject') }}</button>
          <button class="primary-button" type="button" @click="saveSettings">{{ t('cookies.actions.save') }}</button>
        </footer>
      </section>

      <section v-if="showPolicy" class="cookie-modal cookie-modal--policy" role="dialog" aria-modal="true" :aria-label="t('cookies.policy.title')">
        <header class="cookie-modal__header">
          <h2>{{ t('cookies.policy.title') }}</h2>
          <button class="icon-close" type="button" :aria-label="t('cookies.actions.close')" @click="closeModal">
            <X :size="18" :stroke-width="2.5" />
          </button>
        </header>

        <div class="policy-content">
          <p>{{ t('cookies.policy.updated') }}</p>

          <h3>{{ t('cookies.policy.sections.what.title') }}</h3>
          <p>{{ t('cookies.policy.sections.what.text') }}</p>

          <h3>{{ t('cookies.policy.sections.used.title') }}</h3>
          <p>{{ t('cookies.policy.sections.used.text') }}</p>

          <div class="policy-table-wrap">
            <table class="policy-table">
              <thead>
                <tr>
                  <th>{{ t('cookies.policy.table.headers.tool') }}</th>
                  <th>{{ t('cookies.policy.table.headers.provider') }}</th>
                  <th>{{ t('cookies.policy.table.headers.purpose') }}</th>
                  <th>{{ t('cookies.policy.table.headers.data') }}</th>
                  <th>{{ t('cookies.policy.table.headers.duration') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>vexus_cookie_consent</code></td>
                  <td>{{ t('cookies.policy.table.rows.consent.provider') }}</td>
                  <td>{{ t('cookies.policy.table.rows.consent.purpose') }}</td>
                  <td>{{ t('cookies.policy.table.rows.consent.data') }}</td>
                  <td>{{ t('cookies.policy.table.rows.consent.duration') }}</td>
                </tr>
                <tr>
                  <td><code>lang</code></td>
                  <td>{{ t('cookies.policy.table.rows.language.provider') }}</td>
                  <td>{{ t('cookies.policy.table.rows.language.purpose') }}</td>
                  <td>{{ t('cookies.policy.table.rows.language.data') }}</td>
                  <td>{{ t('cookies.policy.table.rows.language.duration') }}</td>
                </tr>
                <tr>
                  <td><code>_ga</code>, <code>_ga_*</code></td>
                  <td>Google Analytics</td>
                  <td>{{ t('cookies.policy.table.rows.ga.purpose') }}</td>
                  <td>{{ t('cookies.policy.table.rows.ga.data') }}</td>
                  <td>{{ t('cookies.policy.table.rows.ga.duration') }}</td>
                </tr>
                <tr>
                  <td><code>vexus-docs-report-form</code></td>
                  <td>EmailJS</td>
                  <td>{{ t('cookies.policy.table.rows.emailjsStorage.purpose') }}</td>
                  <td>{{ t('cookies.policy.table.rows.emailjsStorage.data') }}</td>
                  <td>{{ t('cookies.policy.table.rows.emailjsStorage.duration') }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3>{{ t('cookies.policy.sections.analytics.title') }}</h3>
          <p>{{ t('cookies.policy.sections.analytics.text') }}</p>

          <h3>{{ t('cookies.policy.sections.emailjs.title') }}</h3>
          <p>{{ t('cookies.policy.sections.emailjs.text') }}</p>
          <ul>
            <li>{{ t('cookies.policy.sections.emailjs.items.formData') }}</li>
            <li>{{ t('cookies.policy.sections.emailjs.items.context') }}</li>
            <li>{{ t('cookies.policy.sections.emailjs.items.antiSpam') }}</li>
          </ul>

          <h3>{{ t('cookies.policy.sections.manage.title') }}</h3>
          <p>{{ t('cookies.policy.sections.manage.text') }}</p>

          <h3>{{ t('cookies.policy.sections.providers.title') }}</h3>
          <p>
            <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" rel="noreferrer">
              EmailJS Privacy Policy
            </a>
            ·
            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
              Google Privacy Policy
            </a>
          </p>
        </div>

        <footer class="cookie-modal__actions">
          <button class="ghost-button" type="button" @click="openSettings">{{ t('cookies.actions.settings') }}</button>
          <button class="primary-button" type="button" @click="closeModal">{{ t('cookies.actions.close') }}</button>
        </footer>
      </section>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { X } from 'lucide-vue-next'
import { applyAnalyticsConsent } from '@/services/analytics'
import {
  defaultCookiePreferences,
  readCookieConsent,
  saveCookieConsent,
  type CookiePreferences,
} from '@/services/cookieConsent'

const COOKIE_SETTINGS_EVENT = 'vexus:open-cookie-settings'

const { t } = useI18n()

const showBanner = ref(false)
const showSettings = ref(false)
const showPolicy = ref(false)
const draftPreferences = reactive<CookiePreferences>(defaultCookiePreferences())

const emit = defineEmits<{
  (e: 'visibility-change', visible: boolean): void
}>()

function emitVisibility() {
  emit(
    'visibility-change',
    showBanner.value || showSettings.value || showPolicy.value,
  )
}

function syncDraft(preferences: CookiePreferences) {
  draftPreferences.necessary = true
  draftPreferences.analytics = preferences.analytics
}

function persist(preferences: CookiePreferences) {
  const consent = saveCookieConsent(preferences)
  applyAnalyticsConsent(consent.preferences.analytics)
  syncDraft(consent.preferences)
  showBanner.value = false
  showSettings.value = false
  showPolicy.value = false
  emitVisibility()
}

function acceptAll() {
  persist({ necessary: true, analytics: true })
}

function rejectOptional() {
  persist({ necessary: true, analytics: false })
}

function saveSettings() {
  persist({ necessary: true, analytics: draftPreferences.analytics })
}

function openSettings() {
  const storedConsent = readCookieConsent()
  syncDraft(storedConsent?.preferences ?? defaultCookiePreferences())
  showBanner.value = false
  showPolicy.value = false
  showSettings.value = true
  emitVisibility()
}

function openPolicy() {
  showBanner.value = false
  showSettings.value = false
  showPolicy.value = true
  emitVisibility()
}

function closeModal() {
  showSettings.value = false
  showPolicy.value = false
  showBanner.value = !readCookieConsent()
  emitVisibility()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeModal()
}

onMounted(() => {
  const storedConsent = readCookieConsent()
  if (storedConsent) {
    syncDraft(storedConsent.preferences)
    applyAnalyticsConsent(storedConsent.preferences.analytics)
  } else {
    showBanner.value = true
    applyAnalyticsConsent(false)
  }

  emitVisibility()
  
  window.addEventListener(COOKIE_SETTINGS_EVENT, openSettings)
  document.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener(COOKIE_SETTINGS_EVENT, openSettings)
  document.removeEventListener('keydown', onKeydown)
})
</script>

<style lang="scss" scoped>
.cookie-banner {
  position: fixed;
  left: 24px;
  right: 24px;
  bottom: 24px;
  z-index: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  max-width: 980px;
  margin: 0 auto;
  padding: 18px;
  border: 1px solid rgba($primary, 0.28);
  border-radius: 14px;
  background: rgba($tertiary, 0.97);
  box-shadow: 0 20px 70px rgba(0, 0, 0, 0.48);

  h2 {
    margin: 0 0 6px;
    font-size: 17px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.68);
    font-size: 14px;
    line-height: 1.5;
  }
}

.cookie-banner__actions {
  display: grid;
  grid-template-columns: repeat(3, max-content);
  align-items: center;
  justify-content: end;
  gap: 10px;
  flex: 0 0 auto;

  button {
    white-space: nowrap;
  }
}

.cookie-modal__actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
  flex-wrap: wrap;
}

.cookie-backdrop {
  position: fixed;
  inset: 0;
  z-index: 410;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  background: rgba(0, 0, 0, 0.58);
  backdrop-filter: blur(8px);
}

.cookie-modal {
  width: min(620px, 100%);
  max-height: min(720px, calc(100dvh - 48px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid rgba($primary, 0.24);
  border-radius: 16px;
  background: rgba($tertiary, 0.98);
  box-shadow: 0 24px 90px rgba(0, 0, 0, 0.55);

  &--policy {
    width: min(760px, 100%);
  }
}

.cookie-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 22px;
  border-bottom: 1px solid rgba($primary, 0.14);

  h2 {
    margin: 0;
    font-size: 22px;
  }
}

.cookie-modal__intro,
.policy-content {
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  line-height: 1.6;
}

.cookie-settings-content {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
}

.cookie-modal__intro {
  margin: 0;
  padding: 18px 22px 0;
}

.cookie-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  margin: 16px 22px 0;
  padding: 16px;
  border: 1px solid rgba($primary, 0.14);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.035);

  h3 {
    margin: 0 0 6px;
    font-size: 16px;
  }

  p {
    margin: 0;
    color: rgba(255, 255, 255, 0.62);
    font-size: 13.5px;
    line-height: 1.5;
  }

  input {
    width: 42px;
    height: 24px;
    flex: 0 0 auto;
    accent-color: $primary;
    cursor: pointer;
  }
}

.cookie-option--interactive {
  cursor: pointer;
}

.status-pill {
  flex: 0 0 auto;
  padding: 5px 9px;
  border-radius: 999px;
  background: rgba($secondary, 0.12);
  color: $secondary;
  font-size: 12px;
  font-weight: 700;
}

.cookie-policy-link {
  margin: 16px 22px 0;
  align-self: flex-start;
}

.cookie-modal__actions {
  flex: 0 0 auto;
  margin-top: 22px;
  padding: 18px 22px;
  border-top: 1px solid rgba($primary, 0.14);
  background: rgba($tertiary, 0.98);
}

.policy-content {
  overflow-y: auto;
  padding: 18px 22px 4px;

  h3 {
    margin: 22px 0 8px;
    color: white;
    font-size: 16px;
  }

  p {
    margin: 0 0 12px;
  }

  ul {
    margin: 0 0 12px;
    padding-left: 20px;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: $primary;
    font-weight: 700;
  }
}

.policy-table-wrap {
  overflow-x: auto;
  margin: 18px 0 8px;
  border: 1px solid rgba($primary, 0.16);
  border-radius: 12px;
}

.policy-table {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 13px;

  th,
  td {
    padding: 11px 12px;
    border-top: 1px solid rgba($primary, 0.1);
    text-align: left;
    vertical-align: top;
  }

  th {
    border-top: 0;
    background: rgba($primary, 0.08);
    color: rgba(255, 255, 255, 0.78);
    font-size: 11px;
    text-transform: uppercase;
  }

  code {
    display: inline-block;
    margin: 0 2px 2px 0;
    padding: 2px 5px;
    border-radius: 4px;
    background: rgba($primary, 0.1);
    color: $primary;
    white-space: nowrap;
  }
}

.primary-button,
.ghost-button,
.link-button,
.icon-close {
  font: inherit;
  cursor: pointer;
}

.primary-button,
.ghost-button {
  min-height: 38px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid rgba($primary, 0.26);
  color: white;
}

.primary-button {
  border: 0;
  background: linear-gradient(135deg, $primary, $secondary);
  box-shadow: none;
  font-weight: 700;
}

.ghost-button {
  background: rgba(255, 255, 255, 0.04);

  &:hover {
    background: rgba($primary, 0.12);
  }
}

.link-button {
  padding: 0;
  border: 0;
  background: transparent;
  color: $primary;
  font-weight: 700;
}

.icon-close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: rgba(255, 255, 255, 0.8);

  svg {
    display: block;
  }
}

@media (max-width: 720px) {
  .cookie-banner {
    left: 12px;
    right: 12px;
    bottom: 12px;
    flex-direction: column;
    align-items: stretch;
  }

  .cookie-modal__actions {
    justify-content: stretch;

    button {
      flex: 1;
    }
  }

  .cookie-banner__actions {
    grid-template-columns: 1fr;
    justify-content: stretch;
  }

  .cookie-backdrop {
    padding: 12px;
  }

  .cookie-option {
    align-items: flex-start;
    flex-direction: column;
  }
}
</style>
