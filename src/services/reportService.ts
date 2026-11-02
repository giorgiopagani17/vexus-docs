// src/services/reportService.ts

import emailjs from '@emailjs/browser'

export interface ReportPayload {
  category: string
  subject: string
  message: string
  name?: string
  email?: string

  // Contesto utile per riprodurre il problema
  page: string
  version: string
  locale: string
  userAgent: string
}

const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined

export async function sendReport(payload: ReportPayload): Promise<void> {
  if (!PUBLIC_KEY || !SERVICE_ID || !TEMPLATE_ID) {
    throw new Error('Configurazione EmailJS non completa')
  }

  emailjs.init({
    publicKey: PUBLIC_KEY,
    blockHeadless: true,
    limitRate: {
      id: 'vexus-docs-report-form',
      throttle: 30_000,
    },
  })

  const subjectPrefix = {
    bug: 'Bug report',
    suggestion: 'Suggestion',
    other: 'Report',
  }[payload.category] ?? 'Report'

  const response = await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    {
      category: payload.category,
      subject: payload.subject,
      message: payload.message,
      name: payload.name ?? '',
      email: payload.email ?? '',
      page: payload.page,
      version: payload.version,
      locale: payload.locale,
      userAgent: payload.userAgent,

      isBug: payload.category === 'bug',
      isSuggestion: payload.category === 'suggestion',
      isOther: payload.category === 'other',

      emailSubject: `[Vexus] ${subjectPrefix}: ${payload.subject}`,
    }
  )

  if (response.status !== 200) {
    throw new Error(`Invio non riuscito (${response.status})`)
  }
}
