<template>
  <div class="docs-page">
    <div class="docs-header">
      <h1>VxButton</h1>
      <p class="subtitle">
        Componente bottone flessibile con varianti, colori, icone, loading state,
        layout full-width e supporto slot avanzati.
      </p>
    </div>

    <!-- Setup -->
    <section class="docs-section">
      <h2>Setup</h2>
      <p>Importa il Button nel <code>File.vue</code>:</p>
      <DesignCodeBlock :code="setupCode" />
    </section>

    <!-- Variant -->
    <section class="docs-section">
      <h2>Variant</h2>
      <p>Definisce il comportamento visivo del bottone: <code>solid</code>, <code>outline</code>, <code>ghost</code> o <code>text</code>.</p>

      <div class="example-row">
        <VxButton @click="onClick">Solid (default)</VxButton>
        <VxButton @click="onClick" variant="outline">Outline</VxButton>
        <VxButton @click="onClick" variant="ghost">Ghost</VxButton>
        <VxButton @click="onClick" variant="text">Text</VxButton>
      </div>

      <DesignCodeBlock :code="variantCode" />
    </section>

    <!-- Color -->
    <section class="docs-section">
      <h2>Color</h2>
      <p>Definisce la palette del bottone tra le sei varianti predefinite.</p>

      <div class="example-row">
        <VxButton @click="onClick" color="primary">Primary</VxButton>
        <VxButton @click="onClick" color="secondary">Secondary</VxButton>
        <VxButton @click="onClick" color="positive">Positive</VxButton>
        <VxButton @click="onClick" color="negative">Negative</VxButton>
        <VxButton @click="onClick" color="warning">Warning</VxButton>
        <VxButton @click="onClick" color="info">Info</VxButton>
      </div>

      <DesignCodeBlock :code="colorCode" />

      <p class="section-note">
        Oltre ai token predefiniti, <code>color</code> accetta anche un valore CSS
        custom qualsiasi: hex, <code>rgb()</code> o una CSS custom property.
      </p>

      <div class="example-row">
        <VxButton @click="onClick" color="#7c3aed">Hex</VxButton>
        <VxButton @click="onClick" color="var(--vx-primary)">Palette via var</VxButton>
      </div>

      <DesignCodeBlock :code="colorCustomCode" />
    </section>

    <!-- Size -->
    <section class="docs-section">
      <h2>Size</h2>
      <p>Tre dimensioni disponibili: <code>sm</code>, <code>md</code> (default) e <code>lg</code>.</p>

      <div class="example-row">
        <VxButton @click="onClick" size="sm">Small</VxButton>
        <VxButton @click="onClick" size="md">Medium</VxButton>
        <VxButton @click="onClick" size="lg">Large</VxButton>
      </div>

      <DesignCodeBlock :code="sizeCode" />
    </section>

    <!-- Icone -->
    <section class="docs-section">
      <h2>Icone</h2>
      <p>Supporta icone via prop <code>icon</code> o tramite gli slot <code>icon-left</code> / <code>icon-right</code> per un controllo più fine.</p>

      <div class="example-row">
        <VxButton @click="onClick" :icon="Sparkles" iconPosition="left">Left icon</VxButton>
        <VxButton @click="onClick" :icon="Sparkles" iconPosition="right">Right icon</VxButton>
      </div>

      <div class="example-row">
        <VxButton @click="onClick">
          <template #icon-left>
            <Sparkles />
          </template>
          Slot left
        </VxButton>

        <VxButton @click="onClick">
          Slot right
          <template #icon-right>
            <Sparkles />
          </template>
        </VxButton>
      </div>

      <DesignCodeBlock :code="iconCode" />
    </section>

    <!-- Loading -->
    <section class="docs-section">
      <h2>Stato di caricamento</h2>
      <p>Imposta <code>loading: true</code> per disabilitare il bottone e mostrare uno spinner interno al posto del contenuto.</p>

      <div class="example-row">
        <VxButton @click="onClick" loading>Loading</VxButton>
        <VxButton @click="onClick" :loading="true">Async action</VxButton>
      </div>

      <DesignCodeBlock :code="loadingCode" />
    </section>

    <!-- Disabled -->
    <section class="docs-section">
      <h2>Disabled</h2>
      <p>Imposta <code>disabled: true</code> per bloccare l'interazione e ridurre l'opacità del bottone.</p>

      <div class="example-row">
        <VxButton @click="onClick" disabled>Disabled</VxButton>
      </div>

      <DesignCodeBlock :code="disabledCode" />
    </section>

    <!-- Block -->
    <section class="docs-section">
      <h2>Block</h2>
      <p>Il bottone occupa tutta la larghezza disponibile del contenitore con <code>block</code>.</p>

      <div class="example-row" style="flex-direction: column;">
        <VxButton @click="onClick" block>Full width</VxButton>
      </div>

      <DesignCodeBlock :code="blockCode" />
    </section>

    <!-- Radius -->
    <section class="docs-section">
      <h2>Radius</h2>
      <p>Controlla il border radius del bottone tramite <code>radius</code> (numero in px o stringa) oppure la prop <code>pill</code> per bordi completamente arrotondati.</p>

      <div class="example-row">
        <VxButton @click="onClick">Default</VxButton>
        <VxButton @click="onClick" :radius="20">Custom</VxButton>
        <VxButton @click="onClick" pill>Pill</VxButton>
      </div>

      <DesignCodeBlock :code="radiusCode" />
    </section>

    <!-- Hover effect -->
    <section class="docs-section">
      <h2>Hover effect</h2>
      <p>
        Controlla il comportamento visivo al passaggio del mouse tramite <code>hoverEffect</code>.
        Usa <code>custom</code> per disattivare ogni effetto integrato e gestirlo tu via CSS scoped
        nel parent (<code>:deep(.vx-btn--hover-custom:hover)</code>) o tramite la prop <code>colors</code>.
      </p>

      <div class="example-grid">
        <VxButton @click="onClick" hoverEffect="brightness">Brightness</VxButton>
        <VxButton @click="onClick" hoverEffect="scale">Scale</VxButton>
        <VxButton @click="onClick" hoverEffect="lift">Lift</VxButton>
        <VxButton @click="onClick" hoverEffect="glow">Glow</VxButton>
        <VxButton @click="onClick" variant="text" hoverEffect="underline">Underline</VxButton>
        <VxButton @click="onClick" hoverEffect="none">None</VxButton>
        <VxButton
          @click="onClick"
          hoverEffect="custom"
          class="docs-hover-custom"
        >
          Custom
        </VxButton>
      </div>

      <DesignCodeBlock :code="hoverEffectCode" />
    </section>

    <!-- Icon only -->
    <section class="docs-section">
      <h2>Icon only</h2>
      <p>Se non passi contenuto testuale, il bottone si adatta automaticamente a una forma quadrata centrata sull'icona.</p>

      <div class="example-row">
        <VxButton @click="onClick" :icon="Sparkles" />
      </div>

      <DesignCodeBlock :code="iconOnlyCode" />
    </section>

    <!-- Custom colors -->
    <section class="docs-section">
      <h2>Colori custom</h2>
      <p>
        Ogni bottone è completamente ricolorabile tramite l'oggetto <code>colors</code>.
        Le chiavi non specificate mantengono il default del <code>color</code> scelto. Ogni
        chiave accetta un colore CSS, una custom property (<code>var(--...)</code>) oppure
        il nome di un token della palette interna.
      </p>

      <div class="example-row">
        <VxButton
          @click="onClick"
          :colors="{
            background: '#7c3aed',
            text: '#ffffff',
            hoverBackground: '#6d28d9'
          }"
        >
          Custom
        </VxButton>

        <VxButton
          @click="onClick"
          :colors="{
            background: 'positive',
            hoverBackground: 'primary'
          }"
        >
          Token override
        </VxButton>
      </div>

      <DesignCodeBlock :code="colorsOverrideCode" />
    </section>

    <!-- Events -->
    <section class="docs-section">
      <h2>Events</h2>
      <p>Il bottone emette <code>click</code> quando non è disabilitato né in stato di loading.</p>

      <div class="example-row">
        <VxButton @click="onClick">Click me</VxButton>
      </div>

      <DesignCodeBlock :code="eventsCode" />
    </section>

    <!-- Props table -->
    <section class="docs-section">
      <h2>Opzioni disponibili</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="propsRows"
        :widths="['140px', '180px', '90px', '1fr']"
      />
    </section>

    <!-- =====================================================================
         VxButtonToggle
         ===================================================================== -->
    <div id="button-toggle" class="docs-header docs-header--sub">
      <h1>VxButtonToggle</h1>
      <p class="subtitle">
        Gruppo di bottoni uniti per scegliere uno o più valori: selezione singola,
        multipla, solo icone e personalizzazione completa dello stile.
      </p>
    </div>

    <section class="docs-section">
      <h2>Setup</h2>
      <p>Importa il componente nel <code>File.vue</code>:</p>
      <DesignCodeBlock :code="toggleSetupCode" />
    </section>

    <section class="docs-section">
      <h2>Base</h2>
      <p>
        Passa le <code>options</code> e collega il valore con <code>v-model</code>. Ogni opzione è un
        oggetto <code>{ label, value, icon, disabled, ariaLabel }</code>, oppure un semplice primitivo.
      </p>

      <div class="example-row">
        <VxButtonToggle v-model="viewMode" :options="viewOptions" />
        <span class="example-value">valore: {{ viewMode }}</span>
      </div>

      <DesignCodeBlock :code="toggleBasicCode" />
    </section>

    <section class="docs-section">
      <h2>Selezione multipla</h2>
      <p>Con <code>multiple</code> il <code>v-model</code> è un array, sempre ordinato come le opzioni.</p>

      <div class="example-row">
        <VxButtonToggle v-model="days" multiple :options="dayOptions" />
        <span class="example-value">valore: {{ days }}</span>
      </div>

      <DesignCodeBlock :code="toggleMultipleCode" />
    </section>

    <section class="docs-section">
      <h2>Solo icone</h2>
      <p>
        Un'opzione senza <code>label</code> diventa quadrata. Aggiungi <code>ariaLabel</code>
        per renderla comprensibile agli screen reader.
      </p>

      <div class="example-row">
        <VxButtonToggle v-model="textFormat" multiple :options="formatOptions" />
        <span class="example-value">valore: {{ textFormat }}</span>
      </div>

      <DesignCodeBlock :code="toggleIconOnlyCode" />
    </section>

    <section class="docs-section">
      <h2>Stile</h2>
      <p>
        <code>variant</code> e <code>color</code> definiscono le opzioni non attive, mentre
        <code>activeVariant</code> e <code>activeColor</code> l'opzione selezionata. Sono disponibili
        anche <code>size</code>, <code>pill</code>, <code>radius</code> e <code>disabled</code>.
      </p>

      <div class="example-row">
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" variant="ghost" />
        <VxButtonToggle
          v-model="styleDemo"
          :options="abcOptions"
          color="secondary"
          active-color="positive"
        />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" size="sm" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" size="lg" />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" pill />
        <VxButtonToggle v-model="styleDemo" :options="abcOptions" disabled />
      </div>

      <DesignCodeBlock :code="toggleStyleCode" />
    </section>

    <section class="docs-section">
      <h2>Clearable</h2>
      <p>In modalità singola, <code>clearable</code> permette di deselezionare cliccando di nuovo l'opzione attiva.</p>

      <div class="example-row">
        <VxButtonToggle v-model="clearableValue" clearable :options="abcOptions" />
        <span class="example-value">valore: {{ clearableValue }}</span>
      </div>

      <DesignCodeBlock :code="toggleClearableCode" />
    </section>

    <section class="docs-section">
      <h2>Block</h2>
      <p>Con <code>block</code> il gruppo occupa tutta la larghezza e le opzioni si dividono lo spazio in parti uguali.</p>

      <div class="example-row" style="flex-direction: column;">
        <VxButtonToggle v-model="viewMode" block :options="viewOptions" />
      </div>

      <DesignCodeBlock :code="toggleBlockCode" />
    </section>

    <section class="docs-section">
      <h2>Opzioni disponibili</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="toggleRows"
        :widths="['140px', '180px', '90px', '1fr']"
      />
    </section>

    <!-- =====================================================================
         VxButtonDropdown
         ===================================================================== -->
    <div id="button-dropdown" class="docs-header docs-header--sub">
      <h1>VxButtonDropdown</h1>
      <p class="subtitle">
        Bottone che apre un menu di voci: supporta la modalità split, sezioni e separatori,
        posizionamento automatico e navigazione da tastiera.
      </p>
    </div>

    <section class="docs-section">
      <h2>Setup</h2>
      <p>Importa il componente nel <code>File.vue</code>:</p>
      <DesignCodeBlock :code="dropdownSetupCode" />
    </section>

    <section class="docs-section">
      <h2>Base</h2>
      <p>
        Passa le <code>items</code> e ascolta <code>@select</code>, che riceve la voce scelta e l'evento
        originale. Oltre alle voci normali esistono <code>{ header: 'Titolo' }</code> per le sezioni e
        <code>{ separator: true }</code> per le linee di separazione.
      </p>

      <div class="example-row">
        <VxButtonDropdown label="Azioni" :items="actionItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="dropdownBasicCode" />

      <p class="section-note">
        Ogni voce accetta <code>label</code>, <code>value</code>, <code>icon</code>, <code>disabled</code>,
        <code>color</code> (token palette o colore custom), <code>href</code> / <code>target</code> per i link
        e <code>closeOnSelect: false</code> per lasciare il menu aperto dopo la selezione.
      </p>
    </section>

    <section class="docs-section">
      <h2>Variant e colori</h2>
      <p>
        Le prop di <code>VxButton</code> (<code>variant</code>, <code>color</code>, <code>size</code>,
        <code>colors</code>, <code>hoverEffect</code>...) vengono passate direttamente al bottone.
      </p>

      <div class="example-row">
        <VxButtonDropdown label="Esporta" :icon="Download" variant="outline" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="Condividi" :icon="Share2" variant="ghost" color="secondary" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="Altro" variant="text" size="sm" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="Pill" pill :items="exportItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="dropdownVariantCode" />
    </section>

    <section class="docs-section">
      <h2>Split</h2>
      <p>
        Con <code>split</code> il bottone si divide in due: la parte principale emette <code>click</code>
        (l'azione di default), il caret a destra apre il menu con le alternative.
      </p>

      <div class="example-row">
        <VxButtonDropdown
          split
          label="Salva"
          :icon="Save"
          :items="saveItems"
          @click="onClick"
          @select="onSelect"
        />
        <VxButtonDropdown
          split
          variant="outline"
          label="Salva"
          :items="saveItems"
          @click="onClick"
          @select="onSelect"
        />
      </div>

      <DesignCodeBlock :code="dropdownSplitCode" />
    </section>

    <section class="docs-section">
      <h2>Placement</h2>
      <p>
        Scegli dove si apre il pannello con <code>placement</code>. Se non c'è abbastanza spazio sotto
        (o sopra) il pannello si ribalta automaticamente.
      </p>

      <div class="example-row">
        <VxButtonDropdown label="bottom-start" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="bottom-end" placement="bottom-end" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="top-start" placement="top-start" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown label="top-end" placement="top-end" :items="exportItems" @select="onSelect" />
      </div>

      <DesignCodeBlock :code="dropdownPlacementCode" />
    </section>

    <section class="docs-section">
      <h2>Slot</h2>
      <p>
        <code>#default</code> personalizza il contenuto del bottone, <code>#item</code> quello di ogni voce
        e riceve <code>{ item, index }</code>.
      </p>

      <div class="example-row">
        <VxButtonDropdown :items="userItems" @select="onSelect">
          <template #default>Utenti</template>

          <template #item="{ item }">
            <span class="docs-user-item">
              <strong>{{ item.label }}</strong>
              <small>{{ item.email }}</small>
            </span>
          </template>
        </VxButtonDropdown>
      </div>

      <DesignCodeBlock :code="dropdownSlotCode" />
    </section>

    <section class="docs-section">
      <h2>Block e disabled</h2>
      <p>
        <code>block</code> occupa tutta la larghezza, <code>disabled</code> blocca il bottone e impedisce
        l'apertura del menu.
      </p>

      <div class="example-row" style="flex-direction: column;">
        <VxButtonDropdown block label="Full width" :items="exportItems" @select="onSelect" />
        <VxButtonDropdown disabled label="Disabled" :items="exportItems" />
      </div>

      <DesignCodeBlock :code="dropdownBlockCode" />
    </section>

    <section class="docs-section">
      <h2>Controllo da codice</h2>
      <p>
        Tramite <code>ref</code> sono esposti i metodi <code>open()</code>, <code>close()</code> e
        <code>toggle()</code>, oltre allo stato <code>isOpen</code>.
      </p>

      <DesignCodeBlock :code="dropdownExposeCode" />
    </section>

    <section class="docs-section">
      <h2>Opzioni disponibili</h2>
      <DesignPropsTable
        :columns="propsColumns"
        :rows="dropdownRows"
        :widths="['140px', '180px', '90px', '1fr']"
      />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Sparkles,
  List,
  LayoutGrid,
  Bold,
  Italic,
  Underline,
  Pencil,
  Copy,
  Archive,
  Trash2,
  Download,
  Share2,
  Save
} from 'lucide-vue-next'
import VxButton from '@/Library/components/Button/VxButton.vue'
import VxButtonDropdown from '@/Library/components/Button/VxButtonDropdown.vue'
import VxButtonToggle from '@/Library/components/Button/VxButtonToggle.vue'
import DesignCodeBlock from '@/Docs/components/Utils/DesignCodeBlock.vue'
import DesignPropsTable from '@/Docs/components/Utils/DesignPropsTable.vue'
import { useVxNotify } from '@/Library/composables/Notify/useVxNotify'
import { propsColumns, propsRows, toggleRows, dropdownRows } from '@/Docs/metadata/props/Button/buttonGeneralProps'
import {
  setupCode,
  variantCode,
  colorCode,
  colorCustomCode,
  sizeCode,
  iconCode,
  loadingCode,
  disabledCode,
  blockCode,
  radiusCode,
  hoverEffectCode,
  iconOnlyCode,
  colorsOverrideCode,
  eventsCode,
  toggleSetupCode,
  toggleBasicCode,
  toggleMultipleCode,
  toggleIconOnlyCode,
  toggleStyleCode,
  toggleClearableCode,
  toggleBlockCode,
  dropdownSetupCode,
  dropdownBasicCode,
  dropdownVariantCode,
  dropdownSplitCode,
  dropdownPlacementCode,
  dropdownSlotCode,
  dropdownBlockCode,
  dropdownExposeCode
} from '@/Docs/metadata/code/Button/buttonCodeExamples'

const { VxNotify } = useVxNotify()

const onClick = () => {
  VxNotify({
    title: 'Button clicked!',
    message: 'You have clicked the button.',
    color: 'positive',
    duration: 3000
  })
}

/* ===== VxButtonToggle: stato e opzioni degli esempi ===== */
const viewMode = ref('list')
const days = ref(['Lun', 'Mer'])
const textFormat = ref(['bold'])
const styleDemo = ref('B')
const clearableValue = ref(null)

const viewOptions = [
  { label: 'Lista', value: 'list', icon: List },
  { label: 'Griglia', value: 'grid', icon: LayoutGrid }
]

const dayOptions = ['Lun', 'Mar', 'Mer', 'Gio', 'Ven']

const formatOptions = [
  { value: 'bold', icon: Bold, ariaLabel: 'Grassetto' },
  { value: 'italic', icon: Italic, ariaLabel: 'Corsivo' },
  { value: 'underline', icon: Underline, ariaLabel: 'Sottolineato' }
]

const abcOptions = ['A', 'B', 'C']

/* ===== VxButtonDropdown: voci degli esempi ===== */
const actionItems = [
  { header: 'Documento' },
  { label: 'Modifica', value: 'edit', icon: Pencil },
  { label: 'Duplica', value: 'duplicate', icon: Copy },
  { label: 'Archivia', value: 'archive', icon: Archive, disabled: true },
  { separator: true },
  { label: 'Elimina', value: 'delete', icon: Trash2, color: 'negative' }
]

const exportItems = [
  { label: 'PDF', value: 'pdf' },
  { label: 'CSV', value: 'csv' },
  { label: 'Excel', value: 'xlsx' }
]

const saveItems = [
  { label: 'Salva come bozza', value: 'draft' },
  { label: 'Salva e chiudi', value: 'close' },
  { label: 'Salva e duplica', value: 'duplicate', icon: Copy }
]

const userItems = [
  { label: 'Mario Rossi', email: 'mario.rossi@example.com', value: 1 },
  { label: 'Giulia Bianchi', email: 'giulia.bianchi@example.com', value: 2 },
  { label: 'Luca Verdi', email: 'luca.verdi@example.com', value: 3 }
]

const onSelect = (item) => {
  VxNotify({
    title: 'Voce selezionata',
    message: item.label,
    color: 'positive',
    duration: 3000
  })
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

  /* intestazione dei componenti successivi (Toggle, Dropdown) nella stessa pagina */
  &--sub {
    margin-top: 24px;
    padding-top: 48px;
    border-top: 1px solid rgba($primary, 0.12);

    h1 {
      font-size: 28px;
    }
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

.example-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: 10px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid rgba($primary, 0.12);
  background: rgba(255, 255, 255, 0.02);
  margin-bottom: 16px;
}

/* valore corrente del v-model negli esempi del Toggle */
.example-value {
  align-self: center;
  font-family: monospace;
  font-size: 13px;
  opacity: 0.65;
}

/* contenuto custom delle voci nell'esempio dello slot #item del Dropdown */
.docs-user-item {
  display: flex;
  flex-direction: column;
  gap: 2px;

  small {
    font-size: 12px;
    opacity: 0.6;
  }
}

/* Esempio di hover custom gestito direttamente nella pagina docs */
.docs-hover-custom {
  &:hover:not(.vx-btn--disabled) {
    background: repeating-linear-gradient(
      45deg,
      var(--btn-bg),
      var(--btn-bg) 10px,
      color-mix(in srgb, var(--btn-bg) 70%, black) 10px,
      color-mix(in srgb, var(--btn-bg) 70%, black) 20px
    );
  }
}
</style>