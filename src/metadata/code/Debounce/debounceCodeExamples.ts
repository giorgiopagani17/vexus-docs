// src/metadata/code/Debounce/debounceCodeExamples.ts

export const setupCode = `import { useVxDebounce, useVxDebounceFn } from 'vexus'`

export const valueCode = `<template>
  <VxInput v-model="query" label="Cerca un utente" block />
  <small v-if="pending">Ricerca in attesa...</small>
</template>

<script setup>
import { ref, watch } from 'vue'
import { VxInput, useVxDebounce } from 'vexus'

const query = ref('')
const { debounced, pending } = useVxDebounce(query, 500)

// Parte solo 500 ms dopo l'ultima digitazione
watch(debounced, (value) => search(value))
</script>`

export const fnCode = `const { run: onSearch } = useVxDebounceFn((text) => {
  api.get('/users', { params: { q: text } })
}, 500)

// Ad ogni digitazione: la richiesta parte una sola volta
watch(query, (text) => onSearch(text))`

export const optionsCode = `// Default: esegue alla fine della raffica
useVxDebounceFn(save, 800)

// Solo leading: esegue subito e ignora il resto della raffica
useVxDebounceFn(save, 800, { leading: true, trailing: false })

// Leading e trailing: subito il primo, alla fine l'ultimo
useVxDebounceFn(save, 800, { leading: true })

// maxWait: esegue comunque dopo 3 secondi, anche se si continua a digitare
useVxDebounceFn(save, 800, { maxWait: 3000 })`

export const flushCode = `const { debounced, pending, flush, cancel } = useVxDebounce(draft, 2000)

// Invio: applica subito il valore in attesa
function onEnter() {
  flush()
}

// Esc: scarta l'aggiornamento in attesa
function onEscape() {
  cancel()
}`

export const getDebounceCodeExamples = (tm: any) => {
  const labels = tm('debounceDocs.codeLabels')
  const source: Record<string, string> = {
    setupCode,
    valueCode,
    fnCode,
    optionsCode,
    flushCode,
  }
  // Le chiavi più lunghe prima, così una non viene sostituita dentro un'altra
  const replacements: Record<string, string> = {
    'Parte solo 500 ms dopo l\'ultima digitazione': labels.valueComment,
    'Ad ogni digitazione: la richiesta parte una sola volta': labels.fnComment,
    'Default: esegue alla fine della raffica': labels.defaultComment,
    'Solo leading: esegue subito e ignora il resto della raffica': labels.leadingComment,
    'Leading e trailing: subito il primo, alla fine l\'ultimo': labels.bothComment,
    'maxWait: esegue comunque dopo 3 secondi, anche se si continua a digitare': labels.maxWaitComment,
    'Invio: applica subito il valore in attesa': labels.enterComment,
    'Esc: scarta l\'aggiornamento in attesa': labels.escapeComment,
    'Cerca un utente': labels.searchUser,
    'Ricerca in attesa...': labels.searchPending,
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