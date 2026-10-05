<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxInput</h1>
      <p class="subtitle">{{ $t('inputDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.setup') }}</h2>
      <p>{{ $t('inputDocs.importComponent') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Variant -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.variant') }}</h2>
      <p>{{ $t('inputDocs.variantDescription') }}</p>

      <div class="example-grid">
        <VxInput v-model="variantExamples.outline" :placeholder="$t('inputDocs.labels.outlineDefault')" />
        <VxInput v-model="variantExamples.ghost" variant="ghost" :placeholder="$t('inputDocs.labels.ghost')" />
        <VxInput v-model="variantExamples.text" variant="text" :placeholder="$t('inputDocs.labels.text')" />
      </div>

      <DesignCodeBlock :code="codeExamples.variantCode" />
    </section>

    <!-- Type -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.type') }}</h2>
      <p>{{ $t('inputDocs.typeDescription') }}</p>

      <div class="example-grid">
        <VxInput v-model="typeExamples.password" type="password" :placeholder="$t('inputDocs.labels.password')" />
        <VxInput v-model="typeExamples.email" type="email" :placeholder="$t('inputDocs.labels.email')" />
        <VxInput v-model="typeExamples.number" type="number" :placeholder="$t('inputDocs.labels.number')" />
        <VxInput v-model="typeExamples.tel" type="tel" :placeholder="$t('inputDocs.labels.phone')" />
        <VxInput v-model="typeExamples.url" type="url" :placeholder="$t('inputDocs.labels.url')" />
      </div>

      <div class="example-grid">
        <VxInput v-model="typeExamples.file" type="file" clearable />
      </div>

      <p class="section-note">{{ $t('inputDocs.typeCheckboxNote') }}</p>

      <p class="section-note">{{ $t('inputDocs.typePickerNote') }}</p>

      <DesignCodeBlock :code="codeExamples.typeCode" />
    </section>

    <!-- Date picker -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.datePicker') }}</h2>
      <p>{{ $t('inputDocs.dateDescription') }}</p>

      <div class="example-grid">
        <VxDate v-model="dateExamples.basic" :placeholder="$t('inputDocs.labels.date')" />
        <VxDate
          v-model="dateExamples.clearable"
          clearable
          color="#22c55e"
          :placeholder="$t('inputDocs.labels.clear')"
        />
        <VxDate
          v-model="dateExamples.ranged"
          min="2026-01-01"
          max="2026-12-31"
          :placeholder="$t('inputDocs.labels.year')"
        />
      </div>

      <div class="example-col">
        <VxDate
          v-model="dateExamples.labeled"
          :label="$t('inputDocs.labels.birthDate')"
          :hint="$t('inputDocs.labels.dateFormat')"
          block
        />
      </div>

      <DesignCodeBlock :code="codeExamples.datePickerCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="datePickerPropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- Date range -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.dateRange') }}</h2>
      <p>{{ $t('inputDocs.dateRangeDescription') }}</p>

      <div class="example-col">
        <VxDateRange v-model="dateRangeExamples.basic" />
        <VxDateRange v-model="dateRangeExamples.clearable" clearable />
      </div>

      <DesignCodeBlock :code="codeExamples.dateRangeCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="dateRangePropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- DateTime picker -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.dateTime') }}</h2>
      <p>{{ $t('inputDocs.dateTimeDescription') }}</p>

      <div class="example-grid">
        <VxDateTime v-model="dateTimeExamples.basic" />
        <VxDateTime v-model="dateTimeExamples.clearable" clearable :minuteStep="15" />
        <VxDateTime v-model="dateTimeExamples.custom" separator=" - " timeFormat="HH.mm" />
      </div>

      <DesignCodeBlock :code="codeExamples.dateTimeCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="dateTimePickerPropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- DateTime range -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.dateTimeRange') }}</h2>
      <p>{{ $t('inputDocs.dateTimeRangeDescription') }}</p>

      <div class="example-col">
        <VxDateTimeRange v-model="dateTimeRangeExamples.basic" />
        <VxDateTimeRange v-model="dateTimeRangeExamples.clearable" clearable :minuteStep="15" />
      </div>

      <DesignCodeBlock :code="codeExamples.dateTimeRangeCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="dateTimeRangePropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- Time picker -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.time') }}</h2>
      <p>{{ $t('inputDocs.timeSectionDescription') }}</p>

      <div class="example-grid">
        <VxTime v-model="timeExamples.basic" :placeholder="$t('inputDocs.labels.time')" />
        <VxTime v-model="timeExamples.clearable" clearable color="#f97316" />
        <VxTime v-model="timeExamples.step" :minuteStep="15" :placeholder="$t('inputDocs.labels.timeStep')" />
      </div>

      <DesignCodeBlock :code="codeExamples.timePickerCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="timePickerPropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- Color picker -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.colorPicker') }}</h2>
      <p>{{ $t('inputDocs.colorPickerSectionDescription') }}</p>

      <div class="example-grid">
        <VxColorPicker v-model="colorPickerExamples.basic" />
        <VxColorPicker v-model="colorPickerExamples.clearable" clearable />
        <VxColorPicker v-model="colorPickerExamples.noHex" :showHex="false" />
      </div>

      <DesignCodeBlock :code="codeExamples.colorPickerCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="colorPickerPropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- Range -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.range') }}</h2>
      <p>{{ $t('inputDocs.rangeSectionDescription') }}</p>

      <div class="example-col">
        <VxRange v-model="rangeExamples.basic" block />
        <VxRange v-model="rangeExamples.stepped" :min="0" :max="10" :step="1" color="#22c55e" block />
        <VxRange v-model="rangeExamples.noValue" :showValue="false" color="#f97316" block />
      </div>

      <DesignCodeBlock :code="codeExamples.rangeCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="rangePropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- Checkbox -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.checkbox') }}</h2>
      <p>{{ $t('inputDocs.checkboxSectionDescription') }}</p>

      <div class="example-col">
        <VxCheckbox v-model="checkboxExamples.single" :label="$t('inputDocs.labels.acceptTerms')" />

        <div class="example-row">
          <VxCheckbox v-model="checkboxExamples.group" value="a" :label="$t('inputDocs.labels.optionA')" />
          <VxCheckbox v-model="checkboxExamples.group" value="b" :label="$t('inputDocs.labels.optionB')" />
          <VxCheckbox v-model="checkboxExamples.group" value="c" :label="$t('inputDocs.labels.optionC')" />
        </div>

        <VxCheckbox
          v-model="checkboxExamples.error"
          :label="$t('inputDocs.labels.checkboxError')"
          error
          :errorMessage="$t('inputDocs.labels.acceptToContinue')"
        />

        <VxCheckbox :modelValue="false" indeterminate :label="$t('inputDocs.labels.indeterminate')" />

        <VxCheckbox v-model="checkboxExamples.loading" loading :label="$t('inputDocs.labels.saving')" />
      </div>

      <DesignCodeBlock :code="codeExamples.checkboxCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="checkboxPropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- Radio -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.radio') }}</h2>
      <p>{{ $t('inputDocs.radioSectionDescription') }}</p>

      <div class="example-col">
        <div class="example-row">
          <VxRadio v-model="radioExamples.plan" name="plan" value="monthly" :label="$t('inputDocs.labels.radioMonthly')" />
          <VxRadio v-model="radioExamples.plan" name="plan" value="yearly" :label="$t('inputDocs.labels.radioYearly')" />
        </div>

        <VxRadio
          v-model="radioExamples.error"
          name="radio-error"
          value="yes"
          :label="$t('inputDocs.labels.radioError')"
          error
          :errorMessage="$t('inputDocs.labels.selectToContinue')"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.radioCode" />

      <DesignPropsTable
        class="docs-props-table"
        :columns="propsColumns"
        :rows="radioPropsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>

    <!-- Color -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.color') }}</h2>
      <p>{{ $t('inputDocs.colorDescription') }}</p>

      <div class="example-grid">
        <VxInput v-model="colorExamples.hex" color="#7c3aed" :placeholder="$t('inputDocs.labels.hex')" />
        <VxInput v-model="colorExamples.rgb" color="rgb(34, 197, 94)" :placeholder="$t('inputDocs.labels.rgb')" />
        <VxInput v-model="colorExamples.named" color="crimson" :placeholder="$t('inputDocs.labels.nameAtCss')" />
        <VxInput
          v-model="colorExamples.varColor"
          color="var(--vx-primary)"
          :placeholder="$t('inputDocs.labels.cssVariable')"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.colorCode" />
    </section>

    <!-- Size -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.size') }}</h2>
      <p>{{ $t('inputDocs.sizeDescription') }}</p>

      <div class="example-grid">
        <VxInput v-model="sizeExamples.sm" size="sm" :placeholder="$t('inputDocs.labels.small')" />
        <VxInput v-model="sizeExamples.md" size="md" :placeholder="$t('inputDocs.labels.medium')" />
        <VxInput v-model="sizeExamples.lg" size="lg" :placeholder="$t('inputDocs.labels.large')" />
      </div>

      <DesignCodeBlock :code="codeExamples.sizeCode" />
    </section>

    <!-- Label, hint, error -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.labelHint') }}</h2>
      <p>{{ $t('inputDocs.labelHintDescription') }}</p>

      <div class="example-col">
        <VxInput
          v-model="metaExamples.email"
          :label="$t('inputDocs.labels.email')"
          :hint="$t('inputDocs.codeLabels.emailHint')"
          :placeholder="$t('inputDocs.labels.emailAddress')"
          block
        />

        <VxInput
          v-model="metaExamples.username"
          :label="$t('inputDocs.labels.username')"
          error
          :errorMessage="$t('inputDocs.codeLabels.usernameError')"
          :placeholder="$t('inputDocs.labels.chooseUsername')"
          block
        />
      </div>

      <DesignCodeBlock :code="codeExamples.labelHintCode" />
    </section>

    <!-- Icons -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.icons') }}</h2>
      <p>{{ $t('inputDocs.iconsDescription') }}</p>

      <div class="example-col">
        <div class="example-row">
          <VxInput
            v-model="iconExamples.left"
            :icon="Search"
            iconPosition="left"
            :placeholder="$t('inputDocs.codeLabels.searchPlaceholder')"
          />
          <VxInput
            v-model="iconExamples.right"
            :icon="Mail"
            iconPosition="right"
            :placeholder="$t('inputDocs.labels.email')"
          />
        </div>

        <div class="example-row">
          <VxInput v-model="iconExamples.slotLeft" :placeholder="$t('inputDocs.labels.slotLeft')">
            <template #icon-left>
              <Search />
            </template>
          </VxInput>

          <VxInput v-model="iconExamples.slotRight" :placeholder="$t('inputDocs.labels.slotRight')">
            <template #icon-right>
              <CircleAlert />
            </template>
          </VxInput>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.iconCode" />
    </section>

    <!-- Loading and clear -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.loadingClear') }}</h2>
      <p>{{ $t('inputDocs.loadingClearDescription') }}</p>

      <div class="example-grid">
        <VxInput v-model="stateExamples.loading" loading :placeholder="$t('inputDocs.labels.loading')" />
        <VxInput v-model="stateExamples.clearable" clearable :placeholder="$t('inputDocs.labels.clearable')" />
      </div>

      <DesignCodeBlock :code="codeExamples.stateCode" />
    </section>

    <!-- Disabled / readonly -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.access') }}</h2>
      <p>{{ $t('inputDocs.accessDescription') }}</p>

      <div class="example-grid">
        <VxInput v-model="accessExamples.disabled" disabled :placeholder="$t('inputDocs.labels.disabled')" />
        <VxInput v-model="accessExamples.readonly" readonly :placeholder="$t('inputDocs.labels.readonly')" />
      </div>

      <DesignCodeBlock :code="codeExamples.accessCode" />
    </section>

    <!-- Block, radius, pill -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.layout') }}</h2>
      <p>{{ $t('inputDocs.layoutDescription') }}</p>

      <div class="example-col">
        <VxInput v-model="layoutExamples.block" block :placeholder="$t('inputDocs.labels.fullWidth')" />
        <div class="example-row">
          <VxInput v-model="layoutExamples.default" :placeholder="$t('inputDocs.labels.defaultRadius')" />
          <VxInput v-model="layoutExamples.custom" :radius="20" :placeholder="$t('inputDocs.labels.customRadius')" />
          <VxInput v-model="layoutExamples.pill" pill :placeholder="$t('inputDocs.labels.pill')" />
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.layoutCode" />
    </section>

    <!-- Focus effect -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.focus') }}</h2>
      <p>{{ $t('inputDocs.focusDescription') }}</p>

      <div class="example-grid">
        <VxInput v-model="focusExamples.ring" focusEffect="ring" :placeholder="$t('inputDocs.labels.ring')" />
        <VxInput v-model="focusExamples.lift" focusEffect="lift" :placeholder="$t('inputDocs.labels.lift')" />
        <VxInput v-model="focusExamples.glow" focusEffect="glow" :placeholder="$t('inputDocs.labels.glow')" />
        <VxInput v-model="focusExamples.none" focusEffect="none" :placeholder="$t('inputDocs.labels.none')" />
        <VxInput
          v-model="focusExamples.custom"
          focusEffect="custom"
          class="docs-focus-custom"
          :placeholder="$t('inputDocs.labels.custom')"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.focusEffectCode" />
    </section>

    <!-- Textarea -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.textarea') }}</h2>
      <p>{{ $t('inputDocs.textareaDescription') }}</p>

      <div class="example-col">
        <VxInput
          v-model="textareaExamples.default"
          tag="textarea"
          :label="$t('inputDocs.labels.message')"
          :placeholder="$t('inputDocs.labels.messagePlaceholder')"
          :hint="$t('inputDocs.labels.messageHint')"
          block
        />
      </div>

      <DesignCodeBlock :code="codeExamples.textareaCode" />
    </section>

    <!-- Custom colors -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.customColors') }}</h2>
      <p>{{ $t('inputDocs.customColorsDescription') }}</p>

      <div class="example-col">
        <VxInput
          v-model="colorsExamples.customA"
          :colors="{
            background: '#faf5ff',
            text: '#3b0764',
            icon: '#16a34a',
            border: '#d8b4fe',
            focusBorder: '#7c3aed',
            focusShadow: 'rgba(124, 58, 237, 0.22)',
            placeholder: '#a78bfa'
          }"
          :icon="Search"
          :placeholder="$t('inputDocs.labels.customColors')"
          block
        />

        <VxInput
          v-model="colorsExamples.customB"
          :colors="{
            background: 'white',
            border: '#4ade80',
            text: '#16a34a',
            focusBorder: '#7c3aed',
            placeholder: '#a78bfa'
          }"
          :placeholder="$t('inputDocs.labels.mixedColors')"
          block
        />
      </div>

      <DesignCodeBlock :code="codeExamples.colorsOverrideCode" />
    </section>

    <!-- Events -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.events') }}</h2>
      <p>{{ $t('inputDocs.eventsDescription') }}</p>

      <div class="example-col">
        <VxInput
          v-model="eventsExample"
          clearable
          :label="$t('inputDocs.labels.eventDemo')"
          :hint="$t('inputDocs.labels.eventHint')"
          :placeholder="$t('inputDocs.labels.eventPlaceholder')"
          block
          @focus="onFocus"
          @blur="onBlur"
          @clear="onClear"
          @input="onInput"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.eventsCode" />
    </section>

    <!-- Related components -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.related') }}</h2>
      <p>{{ $t('inputDocs.relatedDescription') }}</p>
    </section>

    <!-- Props table -->
    <section class="docs-section">
      <h2>{{ $t('inputDocs.sections.available') }}</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="propsRows"
        :widths="['140px', '200px', '90px', '1fr']"
      />
    </section>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { Search, Mail, CircleAlert } from 'lucide-vue-next'
import VxInput from '@/Library/components/Input/VxInput.vue'
import VxDate from '@/Library/components/Input/VxDate.vue'
import VxDateRange from '@/Library/components/Input/VxDateRange.vue'
import VxDateTime from '@/Library/components/Input/VxDateTime.vue'
import VxDateTimeRange from '@/Library/components/Input/VxDateTimeRange.vue'
import VxTime from '@/Library/components/Input/VxTime.vue'
import VxColorPicker from '@/Library/components/Input/VxColorPicker.vue'
import VxCheckbox from '@/Library/components/Input/VxCheckbox.vue'
import VxRadio from '@/Library/components/Input/VxRadio.vue'
import VxRange from '@/Library/components/Input/VxRange.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { useVxNotify } from '@/Library/composables/Notify/useVxNotify'
import { getInputGeneralMetadata } from '@/Docs/metadata/props/Input/inputGeneralProps'
import {
  getInputVariantMetadata,
} from '@/Docs/metadata/props/Input/inputVariantsProps'
import {
  getInputCodeExamples,
} from '@/Docs/metadata/code/Input/inputCodeExamples'

const { VxNotify } = useVxNotify()
const { t, tm } = useI18n()
const codeExamples = computed(() => getInputCodeExamples(tm))
const generalMetadata = computed(() => getInputGeneralMetadata(t))
const variantMetadata = computed(() => getInputVariantMetadata(t))
const propsColumns = computed(() => generalMetadata.value.columns)
const propsRows = computed(() => generalMetadata.value.rows)
const datePickerPropsRows = computed(() => variantMetadata.value.datePickerPropsRows)
const dateRangePropsRows = computed(() => variantMetadata.value.dateRangePropsRows)
const dateTimePickerPropsRows = computed(() => variantMetadata.value.dateTimePickerPropsRows)
const dateTimeRangePropsRows = computed(() => variantMetadata.value.dateTimeRangePropsRows)
const timePickerPropsRows = computed(() => variantMetadata.value.timePickerPropsRows)
const colorPickerPropsRows = computed(() => variantMetadata.value.colorPickerPropsRows)
const rangePropsRows = computed(() => variantMetadata.value.rangePropsRows)
const checkboxPropsRows = computed(() => variantMetadata.value.checkboxPropsRows)
const radioPropsRows = computed(() => variantMetadata.value.radioPropsRows)

const checkboxExamples = reactive({
  single: false,
  group: [],
  error: false,
  loading: false,
})

const radioExamples = reactive({
  plan: 'monthly',
  error: '',
})

const variantExamples = reactive({
  ghost: '',
  text: '',
})

const typeExamples = reactive({
  password: '',
  email: '',
  number: '',
  tel: '',
  url: '',
  search: '',
  file: '',
})

const colorExamples = reactive({
  hex: '',
  rgb: '',
  named: '',
  varColor: '',
})

const sizeExamples = reactive({
  sm: '',
  md: '',
  lg: '',
})

const metaExamples = reactive({
  email: '',
  username: 'giorgio.dev',
})

const iconExamples = reactive({
  left: '',
  right: '',
  slotLeft: '',
  slotRight: '',
})

const stateExamples = reactive({
  loading: 'Caricamento...',
  clearable: 'Testo da cancellare',
})

const accessExamples = reactive({
  disabled: '',
  readonly: 'Valore in sola lettura',
})

const layoutExamples = reactive({
  block: '',
  default: '',
  custom: '',
  pill: '',
})

const focusExamples = reactive({
  ring: '',
  lift: '',
  glow: '',
  none: '',
  custom: '',
})

const textareaExamples = reactive({
  default: '',
})

const colorsExamples = reactive({
  customA: '',
  customB: '',
})

const dateExamples = reactive({
  basic: '',
  clearable: '2026-07-03',
  ranged: '',
  labeled: '',
})

const dateRangeExamples = reactive({
  basic: { start: '', end: '' },
  clearable: { start: '2026-07-01', end: '2026-07-10' },
})

const dateTimeExamples = reactive({
  basic: '2026-07-03 09:30',
  clearable: '2026-07-03 14:45',
  custom: '2026-07-03 17:00',
})

const dateTimeRangeExamples = reactive({
  basic: { start: '', end: '' },
  clearable: { start: '2026-07-01 09:00', end: '2026-07-03 18:00' },
})

const timeExamples = reactive({
  basic: '',
  clearable: '14:30',
  step: '',
})

const colorPickerExamples = reactive({
  basic: '#7c3aed',
  clearable: '#22c55e',
  noHex: '#f97316',
})

const rangeExamples = reactive({
  basic: 50,
  stepped: 5,
  noValue: 30,
})

const eventsExample = ref('')

const onFocus = () => {
  VxNotify({
    title: t('inputDocs.notify.focusTitle'),
    message: t('inputDocs.notify.focusMessage'),
    color: 'info',
    duration: 2500,
  })
}

const onBlur = () => {
  VxNotify({
    title: t('inputDocs.notify.blurTitle'),
    message: t('inputDocs.notify.blurMessage'),
    color: 'secondary',
    duration: 2500,
  })
}

const onClear = () => {
  VxNotify({
    title: t('inputDocs.notify.clearTitle'),
    message: t('inputDocs.notify.clearMessage'),
    color: 'warning',
    duration: 2500,
  })
}

const onInput = () => {
  // Hook lasciato qui per demo event binding
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