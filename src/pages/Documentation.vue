<template>
  <main class="docs-page">
    <header class="docs-header">
      <h1>{{ $t('documentation.title') }}</h1>
      <p class="subtitle">{{ $t('documentation.subtitle') }}</p>
    </header>

    <!-- Requisiti -->
    <section class="docs-section">
      <h2>{{ $t('documentation.requirements.title') }}</h2>
      <p>{{ $t('documentation.requirements.text') }}</p>
      <ul class="docs-list">
        <li><code>Node.js</code> 20+</li>
        <li><code>Vue</code> ^3.5</li>
        <li>{{ $t('documentation.requirements.sass') }}</li>
      </ul>
    </section>

    <!-- Installazione -->
    <section class="docs-section">
      <h2>{{ $t('documentation.install.title') }}</h2>
      <p>{{ $t('documentation.install.text') }}</p>

      <div class="code-block">
        <div class="code-tabs" role="tablist">
          <button
            v-for="pm in packageManagers"
            :key="pm.id"
            type="button"
            role="tab"
            class="code-tab"
            :class="{ 'code-tab--active': activePm === pm.id }"
            :aria-selected="activePm === pm.id"
            @click="activePm = pm.id"
          >
            {{ pm.id }}
          </button>
        </div>
        <pre><code>{{ activeCommand }}</code></pre>
      </div>
    </section>

    <!-- Dipendenze -->
    <section class="docs-section">
      <h2>{{ $t('documentation.deps.title') }}</h2>
      <p>{{ $t('documentation.deps.text') }}</p>

      <div class="deps-scroll">
        <table class="deps-table">
          <thead>
            <tr>
              <th>{{ $t('documentation.deps.package') }}</th>
              <th>{{ $t('documentation.deps.version') }}</th>
              <th>{{ $t('documentation.deps.purpose') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="dep in dependencies" :key="dep.name">
              <td><code>{{ dep.name }}</code></td>
              <td>{{ dep.version }}</td>
              <td>{{ $t(dep.purpose) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const packageManagers = [
  { id: 'npm', command: 'npm install vexus' },
  { id: 'pnpm', command: 'pnpm add vexus' },
  { id: 'yarn', command: 'yarn add vexus' },
]

const activePm = ref('npm')
const activeCommand = computed(
  () => packageManagers.find((pm) => pm.id === activePm.value)?.command ?? '',
)

// TODO: allinea con le dipendenze reali del package.json di vexus
const dependencies = [
  { name: 'vue', version: '^3.5', purpose: 'documentation.deps.items.vue' },
  { name: '@floating-ui/dom', version: '^1.7', purpose: 'documentation.deps.items.floating' },
  { name: 'lucide-vue-next', version: '^1.0', purpose: 'documentation.deps.items.lucide' },
  { name: 'material-icons', version: '^1.13', purpose: 'documentation.deps.items.material' },
]
</script>