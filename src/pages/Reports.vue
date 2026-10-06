<template>
  <main class="docs-page">
    <header class="docs-header">
      <h1>{{ t('reports.title') }}</h1>
      <p class="subtitle">{{ t('reports.subtitle') }}</p>
    </header>

    <section class="docs-section">
      <div class="example-col">
        <div class="report-radios">
          <VxRadio
            v-for="category in categories"
            :key="category"
            v-model="form.category"
            name="report-category"
            :value="category"
            :label="t(`reports.categories.${category}`)"
          />
        </div>

        <div class="example-row">
          <VxInput v-model="form.name" :label="t('reports.name')" :placeholder="t('reports.namePlaceholder')" block />
          <VxInput
            v-model="form.email"
            type="email"
            :label="t('reports.email')"
            :hint="t('reports.emailHint')"
            :error="!!errors.email"
            :errorMessage="errors.email"
            placeholder="nome@dominio.it"
            block
          />
        </div>

        <VxInput
          v-model="form.subject"
          :label="t('reports.subject')"
          :error="!!errors.subject"
          :errorMessage="errors.subject"
          block
        />

        <VxInput
          v-model="form.message"
          tag="textarea"
          :label="t('reports.message')"
          :placeholder="t('reports.messagePlaceholder')"
          :error="!!errors.message"
          :errorMessage="errors.message"
          block
        />

        <!-- Honeypot: nascosto agli utenti, i bot tendono a compilarlo -->
        <input
          v-model="form.website"
          class="report-hp"
          type="text"
          name="website"
          tabindex="-1"
          autocomplete="off"
          aria-hidden="true"
        />

        <VxButton
          :icon="Send"
          iconPosition="left"
          variant="primary"
          @click="submit"
          :loading="sending"
        >
            {{ sending ? t('reports.sending') : t('reports.send') }}
        </VxButton>

        <div v-if="status" class="docs-result" :class="{ 'docs-result--error': status === 'error' }" role="status">
          <span class="docs-result-label">{{ t(`reports.status.${status}Label`) }}</span>
          <span>{{ t(`reports.status.${status}`) }}</span>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Send } from 'lucide-vue-next'
import { VxInput, VxRadio } from 'vexus'
import { VxButton } from 'vexus'
import { sendReport } from '@/services/reportService'

const { t, locale } = useI18n()

const categories = ['bug', 'suggestion', 'other']
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const emptyForm = () => ({
  category: 'bug',
  name: '',
  email: '',
  subject: '',
  message: '',
  website: '', // honeypot
})

const form = reactive(emptyForm())
const errors = reactive({ email: '', subject: '', message: '' })
const sending = ref(false)
const status = ref(null) // null | 'success' | 'error'

function validate() {
  errors.subject = form.subject.trim() ? '' : t('reports.errors.subjectRequired')
  errors.message = form.message.trim().length >= 10 ? '' : t('reports.errors.messageTooShort')
  errors.email = !form.email || EMAIL_PATTERN.test(form.email.trim()) ? '' : t('reports.errors.emailInvalid')
  return !errors.subject && !errors.message && !errors.email
}

async function submit() {
  if (sending.value) return
  status.value = null
  if (!validate()) return

  // Un bot ha compilato il campo nascosto: finge un successo e non invia nulla
  if (form.website) {
    status.value = 'success'
    Object.assign(form, emptyForm())
    return
  }

  sending.value = true
  try {
    await sendReport({
      category: form.category,
      name: form.name.trim(),
      email: form.email.trim(),
      subject: form.subject.trim(),
      message: form.message.trim(),
      page: window.location.href,
      version: typeof __APP_VERSION__ !== 'undefined' ? __APP_VERSION__ : '',
      locale: locale.value,
      userAgent: navigator.userAgent,
    })
    status.value = 'success'
    Object.assign(form, emptyForm())
  } catch (e) {
    console.error(e)
    status.value = 'error'
  } finally {
    sending.value = false
  }
}
</script>