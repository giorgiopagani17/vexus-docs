<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>useVxDebounce</h1>
      <p class="subtitle">{{ $t('debounceDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('debounceDocs.sections.setup') }}</h2>
      <p>{{ $t('debounceDocs.importDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Valore -->
    <section class="docs-section">
      <h2>{{ $t('debounceDocs.sections.value') }}</h2>
      <p>{{ $t('debounceDocs.valueDescription') }}</p>

      <div class="example-col">
        <VxInput v-model="query" :label="$t('debounceDocs.labels.typeHere')" clearable block />

        <div class="docs-result">
          <span class="docs-result-label">{{ $t('debounceDocs.labels.immediate') }}</span>
          <span class="docs-result-value">{{ query || '—' }}</span>
        </div>

        <div class="docs-result">
          <span class="docs-result-label">{{ $t('debounceDocs.labels.debounced') }}</span>
          <span class="docs-result-value">{{ debounced || '—' }}</span>
        </div>

        <div class="docs-result">
          <span class="docs-result-label">{{ $t('debounceDocs.labels.pending') }}</span>
          <span class="docs-result-value">{{ yesNo(queryPending) }}</span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.valueCode" />
    </section>

    <!-- Funzione -->
    <section class="docs-section">
      <h2>{{ $t('debounceDocs.sections.fn') }}</h2>
      <p>{{ $t('debounceDocs.fnDescription') }}</p>

      <div class="example-col">
        <VxInput v-model="searchText" :label="$t('debounceDocs.labels.typeHere')" clearable block />

        <div class="docs-result">
          <span class="docs-result-label">{{ $t('debounceDocs.labels.result') }}</span>
          <span class="docs-result-value">
            {{ $t('debounceDocs.labels.keystrokes') }}: {{ keystrokes }} ·
            {{ $t('debounceDocs.labels.executions') }}: {{ executions }} ·
            {{ $t('debounceDocs.labels.lastExecuted') }}: {{ lastExecuted || '—' }}
          </span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.fnCode" />
    </section>

    <!-- Opzioni -->
    <section class="docs-section">
      <h2>{{ $t('debounceDocs.sections.options') }}</h2>
      <p>{{ $t('debounceDocs.optionsDescription') }}</p>

      <div class="example-col">
        <div v-for="demo in optionDemos" :key="demo.key" class="debounce-demo">
          <div class="debounce-demo__info">
            <strong>{{ $t(`debounceDocs.modes.${demo.key}.title`) }}</strong>
            <small>{{ $t(`debounceDocs.modes.${demo.key}.text`) }}</small>
          </div>

          <span class="debounce-demo__count">
            {{ $t('debounceDocs.labels.clicks') }}: {{ demo.clicks.value }} ·
            {{ $t('debounceDocs.labels.executions') }}: {{ demo.executed.value }}
          </span>

          <button type="button" class="docs-button" @click="demo.press()">
            {{ $t('debounceDocs.labels.clickFast') }}
          </button>
          <button type="button" class="docs-button docs-button--ghost" @click="demo.reset()">
            {{ $t('debounceDocs.labels.reset') }}
          </button>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.optionsCode" />
    </section>

    <!-- Flush e cancel -->
    <section class="docs-section">
      <h2>{{ $t('debounceDocs.sections.flush') }}</h2>
      <p>{{ $t('debounceDocs.flushDescription') }}</p>

      <div class="example-col">
        <VxInput v-model="draft" :label="$t('debounceDocs.labels.draft')" block />

        <div class="debounce-actions">
          <button type="button" class="docs-button" @click="flush">
            {{ $t('debounceDocs.labels.flushNow') }}
          </button>
          <button type="button" class="docs-button docs-button--ghost" @click="cancel">
            {{ $t('debounceDocs.labels.cancelNow') }}
          </button>
        </div>

        <div class="docs-result">
          <span class="docs-result-label">{{ $t('debounceDocs.labels.applied') }}</span>
          <span class="docs-result-value">{{ applied || '—' }}</span>
        </div>

        <div class="docs-result">
          <span class="docs-result-label">{{ $t('debounceDocs.labels.pending') }}</span>
          <span class="docs-result-value">{{ yesNo(draftPending) }}</span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.flushCode" />
    </section>

    <!-- Riferimento -->
    <section class="docs-section">
      <h2>{{ $t('debounceDocs.sections.available') }}</h2>

      <h3 class="docs-subheading">{{ $t('debounceDocs.sections.valueParams') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.columns"
        :rows="metadata.valueParamsRows"
        :widths="['120px', '240px', '90px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('debounceDocs.sections.valueReturn') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.returnColumns"
        :rows="metadata.valueReturnRows"
        :widths="['120px', '240px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('debounceDocs.sections.fnParams') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.columns"
        :rows="metadata.fnParamsRows"
        :widths="['120px', '240px', '90px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('debounceDocs.sections.fnReturn') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.returnColumns"
        :rows="metadata.fnReturnRows"
        :widths="['120px', '240px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('debounceDocs.sections.optionsTable') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.columns"
        :rows="metadata.optionsRows"
        :widths="['120px', '240px', '110px', '1fr']"
      />
    </section>

    <!-- Limiti noti -->
    <section class="docs-section">
      <h2>{{ $t('debounceDocs.sections.limitations') }}</h2>
      <p>{{ $t('debounceDocs.limitationsIntro') }}</p>
      <ul class="docs-list">
        <li>
          <strong>{{ $t('debounceDocs.limitations.resultTitle') }}</strong>: {{ $t('debounceDocs.limitations.result') }}
        </li>
        <li>
          <strong>{{ $t('debounceDocs.limitations.shallowTitle') }}</strong>: {{ $t('debounceDocs.limitations.shallow') }}
        </li>
        <li>
          <strong>{{ $t('debounceDocs.limitations.cleanupTitle') }}</strong>: {{ $t('debounceDocs.limitations.cleanup') }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { VxInput, useVxDebounce, useVxDebounceFn } from 'vexus'
import DesignCodeBlock from '@/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/components/Utils/DesignPropsTable.vue'
import { getDebounceMetadata } from '@/metadata/props/Debounce/debounceGeneralProps'
import { getDebounceCodeExamples } from '@/metadata/code/Debounce/debounceCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => getDebounceMetadata(t))
const codeExamples = computed(() => getDebounceCodeExamples(tm))

const yesNo = (value) => (value ? t('debounceDocs.labels.yes') : t('debounceDocs.labels.no'))

// ===== useVxDebounce: ritarda un valore =====
const query = ref('')
const { debounced, pending: queryPending } = useVxDebounce(query, 500)

// ===== useVxDebounceFn: ritarda una funzione =====
const searchText = ref('')
const keystrokes = ref(0)
const executions = ref(0)
const lastExecuted = ref('')

const { run: runSearch } = useVxDebounceFn((value) => {
  executions.value += 1
  lastExecuted.value = value
}, 500)

watch(searchText, (value) => {
  keystrokes.value += 1
  runSearch(value)
})

// ===== Opzioni: una demo per ogni modalità =====
const modes = [
  { key: 'trailing', options: {} },
  { key: 'leading', options: { leading: true, trailing: false } },
  { key: 'both', options: { leading: true } },
  { key: 'maxWait', options: { maxWait: 2000 } },
]

// Le ref stanno dentro oggetti semplici: nel template si leggono con .value
const optionDemos = modes.map(({ key, options }) => {
  const clicks = ref(0)
  const executed = ref(0)
  const { run, cancel } = useVxDebounceFn(
    () => {
      executed.value += 1
    },
    800,
    options
  )

  return {
    key,
    clicks,
    executed,
    press() {
      clicks.value += 1
      run()
    },
    reset() {
      cancel()
      clicks.value = 0
      executed.value = 0
    },
  }
})

// ===== flush e cancel =====
const draft = ref('')
const { debounced: applied, pending: draftPending, flush, cancel } = useVxDebounce(draft, 2000)
</script>

<style lang="scss" scoped>
.debounce-demo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba($primary, 0.12);

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  &__info {
    display: flex;
    flex: 1 1 220px;
    flex-direction: column;
    gap: 2px;

    small {
      font-size: 12px;
      opacity: 0.65;
    }
  }

  &__count {
    font-family: monospace;
    font-size: 13px;
    opacity: 0.8;
  }
}

.debounce-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>