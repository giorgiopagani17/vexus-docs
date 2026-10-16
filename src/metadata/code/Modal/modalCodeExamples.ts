export const setupCode = `import { VxModal } from 'vexus'`

export const basicCode = `<button @click="open = true">Apri modal</button>

<VxModal v-model="open" title="Elimina progetto" size="sm">
  <p>Questa azione non può essere annullata.</p>

  <template #footer="{ close }">
    <button @click="close">Annulla</button>
    <button @click="remove">Conferma</button>
  </template>
</VxModal>`

export const sizeCode = `<VxModal v-model="open" size="sm" title="Modal sm" />
<VxModal v-model="open" size="md" title="Modal md" />
<VxModal v-model="open" size="lg" title="Modal lg" />
<VxModal v-model="open" size="full" title="Modal full" />`

export const positionCode = `<!-- Sidebar a destra (o "left") -->
<VxModal v-model="open" position="right" title="Filtri">
  <p>Contenuto della sidebar</p>
</VxModal>

<!-- Striscia in basso (o "top"): size controlla l'altezza massima -->
<VxModal v-model="open" position="bottom" size="sm" title="Cookie">
  <p>Usiamo i cookie per migliorare il sito.</p>

  <template #footer="{ close }">
    <button @click="close">Accetto</button>
  </template>
</VxModal>`

export const spacingCode = `<!-- Spaziature ridotte e nessuna linea tra le sezioni -->
<VxModal v-model="open" title="Compatto" :padding="12" :dividers="false">
  <p>Contenuto con meno spazio attorno.</p>
</VxModal>

<!-- Contenuto a filo (immagini, tabelle, mappe) -->
<VxModal v-model="open" title="Anteprima" :bodyPadding="0" size="sm">
  <div style="padding: 32px 24px; background: rgba(124, 58, 237, 0.18); text-align: center">
    Il contenuto arriva fino ai bordi del pannello.
  </div>
</VxModal>`

export const headerCode = `<VxModal v-model="open">
  <template #header="{ titleId }">
    <h2 :id="titleId">Ordine 1042</h2>
  </template>

  <p>Contenuto del modal</p>
</VxModal>`

export const closeCode = `<VxModal
  v-model="open"
  title="Accetta i termini"
  :closable="false"
  :closeOnOverlay="false"
  :closeOnEsc="false"
>
  <p>Per continuare devi accettare i termini di servizio.</p>

  <template #footer="{ close }">
    <button @click="close">Accetto</button>
  </template>
</VxModal>`

export const colorsCode = `<VxModal
  v-model="open"
  title="Tema personalizzato"
  color="#7c3aed"
  :radius="24"
  :colors="{
    background: '#faf5ff',
    text: '#3b0764',
    border: '#d8b4fe',
    overlay: 'rgba(59, 7, 100, 0.45)'
  }"
>
  <p>Colori e raggio personalizzati.</p>
</VxModal>`

export const cssVarsCode = `:root {
  --vx-modal-bg: #1a1625;
  --vx-modal-text: #ffffff;
  --vx-modal-border: rgba(255, 255, 255, 0.12);
  --vx-modal-radius: 12px;
}`

export const formCode = `<VxModal v-model="open" title="Nuova segnalazione">
  <VxInput v-model="subject" label="Oggetto" block />
  <VxInput v-model="message" tag="textarea" label="Messaggio" block />

  <template #footer="{ close }">
    <button @click="close">Annulla</button>
    <button @click="send">Invia</button>
  </template>
</VxModal>`

export const eventsCode = `<VxModal
  v-model="open"
  title="Modal"
  @open="onOpen"
  @close="onClose"
/>`

export const getModalCodeExamples = (tm: any) => {
  const labels = tm('modalDocs.codeLabels')
  const source: Record<string, string> = {
    setupCode,
    basicCode,
    sizeCode,
    positionCode,
    spacingCode,
    headerCode,
    closeCode,
    colorsCode,
    cssVarsCode,
    formCode,
    eventsCode,
  }
  // Le chiavi più lunghe prima, così una non viene sostituita dentro un'altra
  const replacements: Record<string, string> = {
    'Elimina progetto': labels.deleteProject,
    'Questa azione non può essere annullata.': labels.cannotUndo,
    'Apri modal': labels.openModal,
    Annulla: labels.cancel,
    Conferma: labels.confirm,
    'Spaziature ridotte e nessuna linea tra le sezioni': labels.spacingComment,
    'Contenuto a filo (immagini, tabelle, mappe)': labels.flushComment,
    'Contenuto con meno spazio attorno.': labels.compactText,
    'Il contenuto arriva fino ai bordi del pannello.': labels.flushText,
    Compatto: labels.compact,
    Anteprima: labels.preview,
    'Sidebar a destra (o "left")': labels.sidebarComment,
    'Striscia in basso (o "top"): size controlla l\'altezza massima': labels.stripComment,
    'Contenuto della sidebar': labels.sidebarContent,
    'Usiamo i cookie per migliorare il sito.': labels.cookieText,
    '"Filtri"': `"${labels.filters}"`,
    'Ordine 1042': labels.orderTitle,
    'Contenuto del modal': labels.modalContent,
    'Accetta i termini': labels.acceptTermsTitle,
    'Per continuare devi accettare i termini di servizio.': labels.acceptTermsText,
    Accetto: labels.accept,
    'Tema personalizzato': labels.customTheme,
    'Colori e raggio personalizzati.': labels.customThemeText,
    'Nuova segnalazione': labels.newReport,
    Oggetto: labels.subject,
    Messaggio: labels.message,
    Invia: labels.send,
  }
  return Object.fromEntries(
    Object.entries(source).map(([key, value]) => {
      let localized = value
      for (const [from, to] of Object.entries(replacements)) {
        localized = localized.split(from).join(to)
      }
      return [key, localized]
    })
  )
}