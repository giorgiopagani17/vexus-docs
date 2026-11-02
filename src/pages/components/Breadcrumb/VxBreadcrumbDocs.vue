<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxBreadcrumb</h1>
      <p class="subtitle">{{ $t('breadcrumbDocs.intro') }}</p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.setup') }}</h2>
      <p>{{ $t('breadcrumbDocs.importDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.setupCode" />
    </section>

    <!-- Uso base -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.basic') }}</h2>
      <p>{{ $t('breadcrumbDocs.basicDescription') }}</p>

      <div class="example-col">
        <VxBreadcrumb :items="baseItems" />
      </div>

      <p class="section-note">{{ $t('breadcrumbDocs.demoNote') }}</p>
      <DesignCodeBlock :code="codeExamples.basicCode" />
    </section>

    <!-- Icone e testo -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.display') }}</h2>
      <p>{{ $t('breadcrumbDocs.displayDescription') }}</p>

      <div class="example-col">
        <div class="breadcrumb-controls">
          <VxRadio v-model="displayMode" name="bc-display" value="both" :label="L('both')" />
          <VxRadio v-model="displayMode" name="bc-display" value="text" :label="L('textOnly')" />
          <VxRadio v-model="displayMode" name="bc-display" value="icon" :label="L('iconOnly')" />
        </div>
        <div class="breadcrumb-controls">
          <VxRadio v-model="iconPosition" name="bc-icon-position" value="left" :label="L('iconLeft')" />
          <VxRadio v-model="iconPosition" name="bc-icon-position" value="right" :label="L('iconRight')" />
        </div>

        <VxBreadcrumb
          :items="iconItems"
          :display="displayMode"
          :icon-position="iconPosition"
          @item-click="onItemClick"
        />
      </div>

      <DesignCodeBlock :code="codeExamples.displayCode" />

      <p class="section-note">{{ $t('breadcrumbDocs.displayItemDescription') }}</p>
      <div class="example-col">
        <VxBreadcrumb :items="mixedItems" @item-click="onItemClick" />
      </div>
      <DesignCodeBlock :code="codeExamples.displayItemCode" />
    </section>

    <!-- Separatori -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.separators') }}</h2>
      <p>{{ $t('breadcrumbDocs.separatorsDescription') }}</p>

      <div class="example-col">
        <div v-for="sep in separators" :key="sep.name" class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ $t(`breadcrumbDocs.separatorNames.${sep.name}`) }}</small>
          <VxBreadcrumb :items="simpleItems" :separator="sep.value" @item-click="onItemClick" />
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.separatorCode" />

      <p class="section-note">{{ $t('breadcrumbDocs.separatorItemDescription') }}</p>
      <div class="example-col">
        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('perItem') }}</small>
          <VxBreadcrumb :items="itemSeparatorItems" @item-click="onItemClick" />
        </div>
        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('slotSeparator') }}</small>
          <VxBreadcrumb :items="simpleItems" @item-click="onItemClick">
            <template #separator="{ index }">
              <span class="demo-separator">{{ index + 1 }}</span>
            </template>
          </VxBreadcrumb>
        </div>
      </div>
      <DesignCodeBlock :code="codeExamples.separatorItemCode" />
    </section>

    <!-- Voce attiva -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.active') }}</h2>
      <p>{{ $t('breadcrumbDocs.activeDescription') }}</p>

      <div class="example-col">
        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('activeIconRow') }}</small>
          <VxBreadcrumb :items="activeIconItems" @item-click="onItemClick" />
        </div>

        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('activeClassRow') }}</small>
          <VxBreadcrumb
            :items="simpleItems"
            active-class="demo-active"
            :active-style="{ letterSpacing: '1px' }"
            @item-click="onItemClick"
          />
        </div>

        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('activeIndexRow') }}</small>
          <VxBreadcrumb
            :items="pathItems"
            :active-index="activeIndex"
            @item-click="({ index }) => (activeIndex = index)"
          />
        </div>

        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('activeSlotRow') }}</small>
          <VxBreadcrumb :items="simpleItems" @item-click="onItemClick">
            <template #active="{ item }">
              <strong>{{ item.label }} ✓</strong>
            </template>
          </VxBreadcrumb>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.activeCode" />
    </section>

    <!-- Voci personalizzate -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.items') }}</h2>
      <p>{{ $t('breadcrumbDocs.itemsDescription') }}</p>

      <div class="example-col">
        <VxBreadcrumb :items="customItems" @item-click="onItemClick">
          <template #badge="{ item }">
            <span class="demo-badge">{{ item.label }}</span>
          </template>
        </VxBreadcrumb>
      </div>

      <DesignCodeBlock :code="codeExamples.itemsCode" />
    </section>

    <!-- Varianti e dimensioni -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.variants') }}</h2>
      <p>{{ $t('breadcrumbDocs.variantsDescription') }}</p>

      <div class="example-col">
        <div v-for="variant in variants" :key="variant" class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">variant="{{ variant }}"</small>
          <VxBreadcrumb :items="iconItems" :variant="variant" @item-click="onItemClick" />
        </div>

        <div v-for="size in sizes" :key="size" class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">size="{{ size }}"</small>
          <VxBreadcrumb :items="iconItems" :size="size" @item-click="onItemClick" />
        </div>

        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('colorRow') }}</small>
          <VxBreadcrumb
            :items="iconItems"
            variant="outline"
            color="#16a34a"
            :radius="6"
            :gap="14"
            @item-click="onItemClick"
          />
        </div>

        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('colorsRow') }}</small>
          <VxBreadcrumb :items="iconItems" variant="pill" :colors="customColors" @item-click="onItemClick" />
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.variantsCode" />
    </section>

    <!-- Percorsi lunghi -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.long') }}</h2>
      <p>{{ $t('breadcrumbDocs.longDescription') }}</p>

      <div class="example-col">
        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('longRow') }}</small>
          <VxBreadcrumb ref="longRef" :items="longItems" :max-items="5" @item-click="onItemClick" />
          <div class="breadcrumb-actions">
            <button type="button" class="docs-button" @click="longRef?.expand()">{{ L('expand') }}</button>
            <button type="button" class="docs-button docs-button--ghost" @click="longRef?.collapse()">
              {{ L('collapse') }}
            </button>
          </div>
        </div>

        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('longBeforeAfterRow') }}</small>
          <VxBreadcrumb
            :items="longItems"
            :max-items="5"
            :items-before-collapse="2"
            :items-after-collapse="1"
            @item-click="onItemClick"
          />
        </div>

        <div class="breadcrumb-demo">
          <small class="breadcrumb-demo__label">{{ L('truncateRow') }}</small>
          <VxBreadcrumb :items="longLabelItems" :max-label-width="120" @item-click="onItemClick" />
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.longCode" />
      <DesignCodeBlock :code="codeExamples.exposeCode" />
    </section>

    <!-- Link, router e pulsanti -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.links') }}</h2>
      <p>{{ $t('breadcrumbDocs.linkDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.linkCode" />
    </section>

    <!-- Dalle rotte -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.route') }}</h2>
      <p>{{ $t('breadcrumbDocs.routeDescription') }}</p>
      <DesignCodeBlock :code="codeExamples.routeCode" />
    </section>

    <!-- Eventi -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.events') }}</h2>
      <p>{{ $t('breadcrumbDocs.eventsDescription') }}</p>

      <div class="example-col">
        <VxBreadcrumb :items="simpleItems" @item-click="onItemClick" />

        <div class="docs-result">
          <span class="docs-result-label">{{ L('lastClick') }}</span>
          <span class="docs-result-value">{{ lastClick || L('none') }}</span>
        </div>
      </div>

      <DesignCodeBlock :code="codeExamples.eventsCode" />
    </section>

    <!-- Riferimento -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.available') }}</h2>

      <h3 class="docs-subheading">{{ $t('breadcrumbDocs.sections.props') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.columns"
        :rows="metadata.rows"
        :widths="['160px', '250px', '110px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('breadcrumbDocs.sections.itemFields') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.threeColumns"
        :rows="metadata.itemFieldsRows"
        :widths="['140px', '260px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('breadcrumbDocs.sections.slots') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.slotsColumns"
        :rows="metadata.slotsRows"
        :widths="['140px', '260px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('breadcrumbDocs.sections.eventsTable') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.eventsColumns"
        :rows="metadata.eventsRows"
        :widths="['140px', '260px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('breadcrumbDocs.sections.expose') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.threeColumns"
        :rows="metadata.exposeRows"
        :widths="['140px', '160px', '1fr']"
      />

      <h3 class="docs-subheading">{{ $t('breadcrumbDocs.sections.cssVars') }}</h3>
      <DesignPropsTable
        class="docs-props-table"
        :columns="metadata.cssVarsColumns"
        :rows="metadata.cssVarsRows"
        :widths="['250px', '190px', '1fr']"
      />
    </section>

    <!-- Note -->
    <section class="docs-section">
      <h2>{{ $t('breadcrumbDocs.sections.notes') }}</h2>
      <p>{{ $t('breadcrumbDocs.notesIntro') }}</p>
      <ul class="docs-list">
        <li>
          <strong>{{ $t('breadcrumbDocs.notes.routerTitle') }}</strong>: {{ $t('breadcrumbDocs.notes.router') }}
        </li>
        <li>
          <strong>{{ $t('breadcrumbDocs.notes.a11yTitle') }}</strong>: {{ $t('breadcrumbDocs.notes.a11y') }}
        </li>
        <li>
          <strong>{{ $t('breadcrumbDocs.notes.collapseTitle') }}</strong>: {{ $t('breadcrumbDocs.notes.collapse') }}
        </li>
        <li>
          <strong>{{ $t('breadcrumbDocs.notes.rtlTitle') }}</strong>: {{ $t('breadcrumbDocs.notes.rtl') }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { FileText, Folder, Home, Minus, Star } from 'lucide-vue-next'
import { VxBreadcrumb, VxRadio } from 'vexus'
import DesignCodeBlock from '@/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/components/Utils/DesignPropsTable.vue'
import { getBreadcrumbMetadata } from '@/metadata/props/Breadcrumb/breadcrumbGeneralProps'
import { getBreadcrumbCodeExamples } from '@/metadata/code/Breadcrumb/breadcrumbCodeExamples'

const { t, tm } = useI18n()
const metadata = computed(() => getBreadcrumbMetadata(t))
const codeExamples = computed(() => getBreadcrumbCodeExamples(tm))

const L = (key) => t(`breadcrumbDocs.labels.${key}`)

// Nelle demo le voci sono pulsanti (clickable) per non cambiare pagina: nel codice vero si usa `to`
const lastClick = ref('')
const onItemClick = ({ item, index }) => {
  lastClick.value = `${item.label || item.ariaLabel} (#${index})`
}

// ===== Uso base: link veri alle pagine della documentazione =====
const baseItems = computed(() => [
  { label: L('home'), to: '/' },
  { label: L('components'), to: '/button' },
  { label: 'VxBreadcrumb' },
])

const simpleItems = computed(() => [
  { label: L('home'), clickable: true },
  { label: L('projects'), clickable: true },
  { label: L('report') },
])

// ===== Icone e testo =====
const displayMode = ref('both')
const iconPosition = ref('left')

const iconItems = computed(() => [
  { label: L('home'), icon: Home, clickable: true },
  { label: L('projects'), icon: Folder, clickable: true },
  { label: L('report'), icon: FileText },
])

const mixedItems = computed(() => [
  { label: L('home'), icon: Home, clickable: true, display: 'icon' },
  { label: L('projects'), icon: Folder, clickable: true },
  { label: L('report'), icon: FileText, iconPosition: 'right' },
])

// ===== Separatori =====
const separators = [
  { name: 'chevron', value: 'chevron' },
  { name: 'arrow', value: 'arrow' },
  { name: 'slash', value: 'slash' },
  { name: 'dot', value: 'dot' },
  { name: 'text', value: '>>' },
  { name: 'component', value: Minus },
  { name: 'none', value: 'none' },
]

const itemSeparatorItems = computed(() => [
  { label: L('home'), clickable: true, separator: '→' },
  { label: L('projects'), clickable: true, separator: Minus },
  { label: L('report') },
])

// ===== Voce attiva =====
const activeIconItems = computed(() => [
  { label: L('home'), icon: Home, clickable: true },
  { label: L('projects'), icon: Folder, clickable: true },
  { label: L('report'), icon: FileText, activeIcon: Star },
])

const activeIndex = ref(1)
const pathItems = computed(() => [
  { label: L('home'), clickable: true },
  { label: L('projects'), clickable: true },
  { label: L('report'), clickable: true },
  { label: L('settings'), clickable: true },
])

// ===== Voci personalizzate =====
const customItems = computed(() => [
  {
    label: L('home'),
    icon: Home,
    clickable: true,
    colors: { link: '#16a34a', icon: '#16a34a', linkHover: '#15803d' },
  },
  { label: L('archive'), clickable: true, disabled: true },
  { label: L('docs'), href: 'https://example.com', target: '_blank' },
  { label: L('news'), clickable: true, slot: 'badge' },
  { label: L('report'), class: 'demo-italic', style: { fontStyle: 'italic' } },
])

// ===== Varianti e dimensioni =====
const variants = ['plain', 'pill', 'outline']
const sizes = ['sm', 'md', 'lg']
const customColors = {
  background: '#f3e8ff',
  link: '#6b21a8',
  current: '#ffffff',
  currentBackground: '#7c3aed',
}

// ===== Percorsi lunghi =====
const longRef = ref(null)

const longItems = computed(() =>
  Array.from({ length: 7 }, (_, i) => ({ label: `${L('level')} ${i + 1}`, clickable: true }))
)

const longLabelItems = computed(() => [
  { label: L('home'), clickable: true },
  { label: L('veryLong'), clickable: true },
  { label: L('veryLong') },
])
</script>

<style lang="scss" scoped>
.breadcrumb-demo {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba($primary, 0.12);

  &:last-child {
    padding-bottom: 0;
    border-bottom: none;
  }

  &__label {  
    font-size: 12px;
    opacity: 0.6;
  }
}

.breadcrumb-controls,
.breadcrumb-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.breadcrumb-actions {
  gap: 10px;
}

// Gli stili di esempio vanno sul contenuto del componente: :deep per le classi passate dal genitore
.breadcrumb-demo :deep(.demo-active) {
  color: #16a34a;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.breadcrumb-demo :deep(.demo-italic) {
  font-style: italic;
}

.demo-separator {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 4px;
  border-radius: 50%;
  background: rgba($primary, 0.18);
  font-size: 11px;
  font-weight: 700;
}

.demo-badge {
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba($primary, 0.2);
  font-size: 12px;
  font-weight: 700;
}
</style>