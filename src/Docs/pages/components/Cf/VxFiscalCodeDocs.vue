<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxFiscalCode</h1>
      <p class="subtitle">{{ $t('apiDocs.cfDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.cfDocs.sections.setup') }}</h2>
      <p>{{ $t('apiDocs.cfDocs.setupDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Generate -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.cfDocs.sections.generate') }}</h2>
      <p>{{ $t('apiDocs.cfDocs.generateDescription') }}</p>

      <div class="example-col">
        <div class="example-row">
          <VxInput v-model="generateForm.name" :label="$t('apiDocs.cfDocs.labels.name')" :placeholder="$t('apiDocs.cfDocs.labels.mario')" block />
          <VxInput v-model="generateForm.surname" :label="$t('apiDocs.cfDocs.labels.surname')" :placeholder="$t('apiDocs.cfDocs.labels.rossi')" block />
        </div>

        <div class="example-row">
          <VxRadio v-model="generateForm.gender" name="gen-gender" value="M" label="M" />
          <VxRadio v-model="generateForm.gender" name="gen-gender" value="F" label="F" />
        </div>

        <div class="example-row">
          <VxDate v-model="generateForm.birthdayDate" :label="$t('apiDocs.cfDocs.labels.birthDate')" block />
          <VxInput
            v-model="generateForm.birthplaceCode"
            :label="$t('apiDocs.cfDocs.labels.birthplaceCode')"
            :hint="$t('apiDocs.cfDocs.labels.birthplaceHint')"
            placeholder="H501"
            block
          />
        </div>

        <div class="docs-result" :class="{ 'docs-result--error': !generatedCF }">
          <span class="docs-result-label">{{ $t('apiDocs.cfDocs.labels.generated') }}</span>
          <span class="docs-result-value">{{ generatedCF || '—' }}</span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.generateCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="generateInputRows"
        :widths="['160px', '160px', '110px', '1fr']"
      />
    </section>

    <!-- Validate -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.cfDocs.sections.validate') }}</h2>
      <p>{{ $t('apiDocs.cfDocs.validateDescription') }}</p>

      <div class="example-col">
        <VxInput v-model="validateInput" :label="$t('apiDocs.cfDocs.labels.fiscalCode')" placeholder="RSSMRA90D15H501U" block />

        <div class="example-row docs-badges">
          <span class="docs-badge" :class="formatValid ? 'docs-badge--ok' : 'docs-badge--ko'">
            {{ $t('apiDocs.cfDocs.labels.format') }} {{ formatValid ? $t('apiDocs.cfDocs.labels.valid') : $t('apiDocs.cfDocs.labels.invalid') }}
          </span>
          <span class="docs-badge" :class="checksumValid ? 'docs-badge--ok' : 'docs-badge--ko'">
            {{ $t('apiDocs.cfDocs.labels.checksum') }} {{ checksumValid ? $t('apiDocs.cfDocs.labels.valid') : $t('apiDocs.cfDocs.labels.invalid') }}
          </span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.validateFormatCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="functionsRows"
        :widths="['260px', '280px', '160px', '1fr']"
      />
    </section>

    <!-- Decode -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.cfDocs.sections.decode') }}</h2>
      <p>{{ $t('apiDocs.cfDocs.decodeDescription') }}</p>

      <div class="example-col">
        <VxInput v-model="decodeInput" :label="$t('apiDocs.cfDocs.labels.fiscalCode')" placeholder="RSSMRA90D15H501U" block />

        <div v-if="decoded" class="docs-result">
          <span class="docs-result-label">{{ $t('apiDocs.cfDocs.labels.decoded') }}</span>
          <span class="docs-result-value">
            {{ decoded.gender }} · {{ String(decoded.day).padStart(2, '0') }}/{{ String(decoded.month).padStart(2, '0') }}/{{ decoded.year }} · {{ decoded.birthplaceCode }}
          </span>
        </div>
        <div v-else class="docs-result docs-result--error">
          <span class="docs-result-label">{{ $t('apiDocs.cfDocs.labels.decoded') }}</span>
          <span class="docs-result-value">null ({{ $t('apiDocs.cfDocs.labels.invalidFormat') }})</span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.decodeCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="decodeOutputRows"
        :widths="['160px', '160px', '110px', '1fr']"
      />
    </section>

    <!-- Hook -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.cfDocs.sections.hook') }}</h2>
      <p>{{ $t('apiDocs.cfDocs.hookDescription') }}</p>

      <div class="example-col">
        <div class="example-row">
          <VxInput v-model="hookForm.name" :label="$t('apiDocs.cfDocs.labels.name')" block />
          <VxInput v-model="hookForm.surname" :label="$t('apiDocs.cfDocs.labels.surname')" block />
        </div>

        <div class="example-row">
          <VxRadio v-model="hookForm.gender" name="hook-gender" value="M" label="M" />
          <VxRadio v-model="hookForm.gender" name="hook-gender" value="F" label="F" />
        </div>

        <div class="example-row">
          <VxDate v-model="hookForm.birthdayDate" :label="$t('apiDocs.cfDocs.labels.birthDate')" block />
          <VxInput v-model="hookForm.birthplaceCode" :label="$t('apiDocs.cfDocs.labels.birthplaceCode')" block />
        </div>

        <VxInput v-model="hookForm.codiceFiscale" :label="$t('apiDocs.cfDocs.labels.fiscalCodeToValidate')" block />

        <VxCheckbox v-model="hookForm.requireAdult" :label="$t('apiDocs.cfDocs.labels.requireAdult')" />

        <button type="button" class="docs-button" @click="runHookValidation">
          {{ $t('apiDocs.cfDocs.labels.validate') }}
        </button>

        <div v-if="hookResult" class="docs-result" :class="{ 'docs-result--error': hookResult.invalidFields.length }">
          <span class="docs-result-label">{{ $t('apiDocs.cfDocs.labels.result') }}</span>
          <span class="docs-result-value">
            {{ $t('apiDocs.cfDocs.labels.invalidFields') }}: [{{ hookResult.invalidFields.join(', ') }}] · {{ $t('apiDocs.cfDocs.labels.error') }}: {{ hookResult.error ?? $t('apiDocs.cfDocs.labels.none') }} · {{ $t('apiDocs.cfDocs.labels.minor') }}: {{ hookResult.minor }}
          </span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.hookBasicCode" />

      <h3 class="docs-subheading">{{ $t('apiDocs.cfDocs.sections.exists') }}</h3>
      <p>{{ $t('apiDocs.cfDocs.existsDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.hookExistsCode" />

      <h3 class="docs-subheading">{{ $t('apiDocs.cfDocs.sections.requireAdult') }}</h3>
      <p>{{ $t('apiDocs.cfDocs.requireAdultDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.hookRequireAdultCode" />

      <h3 class="docs-subheading">{{ $t('apiDocs.cfDocs.sections.hookOptions') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="hookOptionsRows"
        :widths="['160px', '260px', '110px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('apiDocs.cfDocs.sections.validateInput') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="validateInputRows"
        :widths="['160px', '200px', '110px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('apiDocs.cfDocs.sections.output') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="validateReturnRows"
        :widths="['160px', '260px', '110px', '1fr']"
      />
    </section>

    <!-- Limiti noti -->
    <section class="docs-section">
      <h2>{{ $t('apiDocs.cfDocs.sections.limitations') }}</h2>
      <p>{{ $t('apiDocs.cfDocs.limitationsIntro') }}</p>
      <ul class="docs-list">
        <li>
          <strong>{{ $t('apiDocs.cfDocs.limitations.omocodyTitle') }}</strong>: {{ $t('apiDocs.cfDocs.limitations.omocody') }}
        </li>
        <li>
          <strong>{{ $t('apiDocs.cfDocs.limitations.databaseTitle') }}</strong>: {{ $t('apiDocs.cfDocs.limitations.database') }}
        </li>
        <li>
          <strong>{{ $t('apiDocs.cfDocs.limitations.centuryTitle') }}</strong>: {{ $t('apiDocs.cfDocs.limitations.century') }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import VxInput from '@/Library/components/Input/VxInput.vue'
import VxDate from '@/Library/components/Input/VxDate.vue'
import VxCheckbox from '@/Library/components/Input/VxCheckbox.vue'
import VxRadio from '@/Library/components/Input/VxRadio.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import {
  VxGenerateFiscalCode,
  VxIsValidFiscalCodeFormat,
  VxIsValidFiscalCodeChecksum,
  VxDecodeFiscalCode,
  VxUseFiscalCodeValidation
} from '@/Library/composables/Cf/useVxFiscalCode'
import {
  getFiscalCodeMetadata,
} from '@/Docs/metadata/props/Cf/fiscalCodeGeneralProps'
import {
  getFiscalCodeCodeExamples,
} from '@/Docs/metadata/code/Cf/fiscalCodeCodeExample'

const { t, tm } = useI18n()
const metadata = computed(() => getFiscalCodeMetadata(t))
const propsColumns = computed(() => metadata.value.columns)
const generateInputRows = computed(() => metadata.value.generateInputRows)
const decodeOutputRows = computed(() => metadata.value.decodeOutputRows)
const functionsRows = computed(() => metadata.value.functionsRows)
const hookOptionsRows = computed(() => metadata.value.hookOptionsRows)
const validateInputRows = computed(() => metadata.value.validateInputRows)
const validateReturnRows = computed(() => metadata.value.validateReturnRows)
const codeExamples = computed(() => getFiscalCodeCodeExamples(tm))

// ===== Generate demo =====
const generateForm = reactive({
  name: 'Mario',
  surname: 'Rossi',
  gender: 'M',
  birthdayDate: '1990-04-15',
  birthplaceCode: 'H501',
})

const generatedCF = computed(() => {
  if (!generateForm.name || !generateForm.surname || !generateForm.birthdayDate || !generateForm.birthplaceCode) {
    return ''
  }
  const [year, month, day] = generateForm.birthdayDate.split('-').map(Number)
  try {
    return VxGenerateFiscalCode({
      name: generateForm.name,
      surname: generateForm.surname,
      gender: generateForm.gender,
      day,
      month,
      year,
      birthplaceCode: generateForm.birthplaceCode,
    })
  } catch (e) {
    return ''
  }
})

// ===== Validate demo =====
const validateInput = ref('RSSMRA90D15H501U')
const formatValid = computed(() => VxIsValidFiscalCodeFormat(validateInput.value))
const checksumValid = computed(() => VxIsValidFiscalCodeChecksum(validateInput.value))

// ===== Decode demo =====
const decodeInput = ref('RSSMRA90D15H501U')
const decoded = computed(() => VxDecodeFiscalCode(decodeInput.value))

// ===== Hook demo =====
const hookForm = reactive({
  name: 'Mario',
  surname: 'Rossi',
  gender: 'M',
  birthdayDate: '1990-04-15',
  birthplaceCode: 'H501',
  codiceFiscale: 'RSSMRA90D15H501U',
  requireAdult: false,
})

const { validate, error, minor } = VxUseFiscalCodeValidation()
const hookResult = ref(null)

async function runHookValidation() {
  const [year, month, day] = hookForm.birthdayDate.split('-').map(Number)
  const invalidFields = await validate({
    name: hookForm.name,
    surname: hookForm.surname,
    gender: hookForm.gender,
    birthdayDate: new Date(year, month - 1, day),
    codiceFiscale: hookForm.codiceFiscale,
    birthplaceCode: hookForm.birthplaceCode,
    requireAdult: hookForm.requireAdult,
  })

  hookResult.value = {
    invalidFields,
    error: error.value,
    minor: minor.value,
  }
}
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

.docs-subheading {
  font-size: 15px;
  font-weight: 700;
  margin: 24px 0 8px;
}

.docs-list {
  margin: 0;
  padding-left: 20px;
  font-size: 14px;
  line-height: 1.7;
  opacity: 0.75;

  li {
    margin-bottom: 10px;
  }

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
  align-items: flex-end;
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

.docs-result {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px 16px;
  border-radius: 12px;
  background: rgba($primary, 0.08);

  &--error {
    background: rgba($negative, 0.08);
  }
}

.docs-result-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.6;
}

.docs-result-value {
  font-family: monospace;
  font-size: 14px;
  font-weight: 700;
}

.docs-badges {
  gap: 10px;
}

.docs-badge {
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12.5px;
  font-weight: 700;

  &--ok {
    background: rgba(#22c55e, 0.14);
    color: #16a34a;
  }

  &--ko {
    background: rgba($negative, 0.12);
    color: $negative;
  }
}

.docs-button {
  align-self: flex-start;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  background: $primary;
  color: #fff;

  &:hover {
    opacity: 0.9;
  }
}

.docs-props-table {
  margin-top: 20px;
}
</style>