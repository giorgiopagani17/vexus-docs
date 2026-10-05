<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxSelect</h1>
      <p class="subtitle">{{ $t('selectDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.setup') }}</h2>
        <p>{{ $t('selectDocs.importComponent') }}</p>
        <DesignCodeBlock :code="codeExamples.setupCode" />
        </section>

        <!-- Basic -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.basic') }}</h2>
        <p>
            {{ $t('selectDocs.basicDescription') }}
        </p>

        <div class="example-grid">
            <VxSelect
            v-model="selectExamples.basic"
            :options="[
                { label: $t('selectDocs.options.apple'), value: 'apple' },
                { label: $t('selectDocs.options.banana'), value: 'banana' },
                { label: $t('selectDocs.options.orange'), value: 'orange' }
            ]"
            :placeholder="$t('selectDocs.labels.selectFruit')"
            />

            <VxSelect
            v-model="selectExamples.simple"
            color="#44C88E"
            :options="[
              $t('selectDocs.options.italy'),
              $t('selectDocs.options.france'),
              $t('selectDocs.options.spain')
            ]"
            :placeholder="$t('selectDocs.labels.country')"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.basicCode" />
        </section>

        <!-- Option mapping -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.optionMapping') }}</h2>

        <p>
            {{ $t('selectDocs.optionMappingDescription') }}
        </p>

        <div class="example-grid">
            <VxSelect
            v-model="selectExamples.user"
            :options="[
                { id: 1, name: 'Mario Rossi' },
                { id: 2, name: 'Anna Verdi' }
            ]"
            optionLabel="name"
            optionValue="id"
            emitValue
            :placeholder="$t('selectDocs.labels.user')"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.optionCode" />
        </section>

        <!-- Search -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.searchable') }}</h2>

        <p>
            {{ $t('selectDocs.searchDescription') }}
        </p>

        <div class="example-grid">
            <VxSelect
            v-model="selectExamples.search"
            :options="[
                'React',
                'Vue',
                'Angular',
                'Svelte'
            ]"
            searchable
            :placeholder="$t('selectDocs.labels.searchFramework')"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.searchCode" />
        </section>

        <!-- Multiple -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.multiple') }}</h2>

        <p>
            {{ $t('selectDocs.multipleDescription') }}
        </p>

        <div class="example-col">
            <VxSelect
            v-model="selectExamples.multiple"
            multiple
            :options="[
                { label:'Vue', value:'vue' },
                { label:'React', value:'react' },
                { label:'Angular', value:'angular' }
            ]"
            emitValue
            :placeholder="$t('selectDocs.labels.technologies')"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.multipleCode" />
        </section>

        <!-- Chips -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.chips') }}</h2>

        <p>
            {{ $t('selectDocs.chipsDescription') }}
        </p>

        <div class="example-grid">
            <VxSelect
            v-model="selectExamples.noChips"
            multiple
            :options="['A','B','C']"
            :useChips="false"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.chipsCode" />
        </section>

        <!-- Clear -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.clearable') }}</h2>

        <p>
            {{ $t('selectDocs.clearableDescription') }}
        </p>

        <div class="example-grid">
            <VxSelect
            v-model="selectExamples.clearable"
            clearable
            :options="[
              $t('selectDocs.options.one'),
              $t('selectDocs.options.two'),
              $t('selectDocs.options.three')
            ]"
            :placeholder="$t('selectDocs.labels.clear')"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.clearCode" />
        </section>

        <!-- Remote -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.remote') }}</h2>

        <p>
            {{ $t('selectDocs.remoteDescription') }}
        </p>

        <p class="section-note">
            {{ $t('selectDocs.remoteNote') }}
        </p>

        <div class="example-grid">
            <VxSelect
              v-model="selectExamples.remote"
              url="https://rickandmortyapi.com/api/character"
              dataPath="results"
              optionLabel="name"
              optionValue="id"
              searchParam="name"
              emitValue
              :placeholder="$t('selectDocs.labels.searchCharacters')"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.remoteCode" />
        </section>

        <!-- Loading -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.loading') }}</h2>

        <p>
            {{ $t('selectDocs.loadingDescription') }}
        </p>

        <div class="example-grid">
            <VxSelect
            v-model="selectExamples.loading"
            loading
            :options="[]"
            :placeholder="$t('selectDocs.labels.loading')"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.loadingCode" />
        </section>

        <!-- Slots -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.slot') }}</h2>

        <p>
            {{ $t('selectDocs.slotDescription') }}
        </p>

        <div class="example-col">
            <VxSelect
            v-model="selectExamples.slot"
            :options="[
                { label: $t('selectDocs.options.admin'), value:'admin' },
                { label: $t('selectDocs.options.user'), value:'user' }
            ]"
            >
            <template #option="{ option, selected }">
                <strong>{{ option.label }}</strong>
                <small v-if="selected"> ✓</small>
            </template>
            </VxSelect>
        </div>

        <DesignCodeBlock :code="codeExamples.slotCode" />
        </section>

        <!-- Chrome -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.style') }}</h2>

        <p>
            {{ $t('selectDocs.styleDescription') }}
        </p>

        <div class="example-grid">
            <VxSelect
            v-model="selectExamples.style"
            :label="$t('selectDocs.labels.category')"
            :hint="$t('selectDocs.labels.chooseCategory')"
            color="#7c3aed"
            :options="['A', 'B', 'C']"
            />

            <VxSelect
            v-model="selectExamples.error"
            error
            :errorMessage="$t('selectDocs.labels.requiredField')"
            :options="['A','B']"
            />
        </div>

        <DesignCodeBlock :code="codeExamples.styleCode" />
        </section>

        <!-- Icons -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.icons') }}</h2>

        <p>
            {{ $t('selectDocs.iconsDescription') }}
        </p>

        <DesignCodeBlock :code="codeExamples.iconCode" />
        </section>

        <!-- Events -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.events') }}</h2>

        <p>
            {{ $t('selectDocs.eventsDescription') }}
        </p>

        <DesignCodeBlock :code="codeExamples.eventsCode" />
        </section>


        <!-- Props -->
        <section class="docs-section">
        <h2>{{ $t('selectDocs.sections.available') }}</h2>

        <DesignPropsTable
        :columns="propsColumns"
        :rows="propsRows"
        :widths="['140px','200px','90px','1fr']"
        />

    </section>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import VxSelect from '@/Library/components/Select/VxSelect.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { getSelectMetadata } from '@/Docs/metadata/props/Select/selectGeneralProps'
import {
  setupCode,
  iconCode,
  eventsCode,
  basicCode,
  optionCode,
  searchCode,
  multipleCode,
  chipsCode,
  clearCode,
  remoteCode,
  loadingCode,
  slotCode,
  styleCode,
  getSelectCodeExamples
} from '@/Docs/metadata/code/Select/selectCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => getSelectMetadata(t))
const propsColumns = computed(() => metadata.value.columns)
const propsRows = computed(() => metadata.value.rows)
const codeExamples = computed(() => getSelectCodeExamples(tm))
const selectExamples = reactive({
  basic: '',
  simple: '',
  user: null,
  search: '',
  multiple: [],
  noChips: [],
  clearable: '',
  remote: null,
  loading: '',
  slot: null,
  style: '',
  error: '',
})
</script>

<style lang="scss" scoped>
.docs-page {
  max-width: 760px;
  margin: 0 auto;
  padding: 40px 24px 80px;
}

@media (max-width: 600px) {
  .docs-page {
    padding: 0;
  }
}

.docs-header {
  margin-bottom: 48px;

  h1 {
    font-size: 36px;
    font-weight: 800;
    background: linear-gradient(135deg, $primary, $secondary);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    margin: 0 0 12px;
  }
}

.subtitle {
  font-size: 15px;
  line-height: 1.6;
  opacity: 0.65;
  margin: 0;
}

.docs-section {
  margin-bottom: 56px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0 0 8px;
  }

  > p {
    font-size: 14px;
    line-height: 1.6;
    opacity: 0.65;
    margin: 0 0 20px;

    code {
      background: rgba($primary, 0.1);
      color: $primary;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
    }
  }
}

.section-note {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.65;
  margin: 0 0 16px;

  code {
    background: rgba($primary, 0.1);
    color: $primary;
    padding: 2px 6px;
    border-radius: 4px;
    font-size: 13px;
  }
}

.example-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba($primary, 0.12);
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 16px;
}

.example-col {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba($primary, 0.12);
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 16px;
}

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba($primary, 0.12);
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 16px;
}

.docs-focus-custom {
  :deep(.vx-input--focus-custom.vx-input--focused) {
    scale: 1.02;
    transition: all 0.2s ease-in-out;
  }
}

.docs-props-table {
  margin-top: 16px;
}
</style>