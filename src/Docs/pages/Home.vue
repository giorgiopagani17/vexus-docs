<template>
  <div class="intro">
    <div class="hero">
      <div class="badge">
        <span class="dot"></span>
        v{{ version }} — {{ $t('home.development') }}
      </div>

      <div class="logo-wrap">
        <h1 class="logo-text">{{ libraryName }}</h1>
      </div>

      <p class="tagline">
        {{ $t('home.taglinePartOne') }} <strong>Vue 3</strong>, {{ $t('home.taglinePartTwo') }}
      </p>

      <div class="cta">
        <DesignButton :text="$t('buttons.startNow')" :icon-left="Plus" variant="primary" @click="doSomething" />
        <DesignButton :text="$t('buttons.documentation')" :icon-left="Plus" variant="primary" @click="doSomething" />
      </div>
    </div>

    <div class="features">
      <DesignCard
        icon="bolt"
        color="primary"
        :title="$t('home.features.fast')"
        :description="$t('home.features.fastDescription')"
      />
      <DesignCard
        icon="extension"
        color="secondary"
        :title="$t('home.features.composable')"
        :description="$t('home.features.composableDescription')"
      />
      <DesignCard
        icon="palette"
        color="primary"
        :title="$t('home.features.customizable')"
        :description="$t('home.features.customizableDescription')"
      />
      <DesignCard
        icon="code"
        color="secondary"
        :title="$t('home.features.typescript')"
        :description="$t('home.features.typescriptDescription')"
      />
    </div>

    <div class="footer">
      <p>Creato con <span class="heart">♥</span> da <strong>Giorgio Pagani</strong></p>
    </div>
  </div>
</template>

<script setup>
import DesignCard from '@/Docs/components/Cards/DesignCard.vue'
import DesignButton from '@/Docs/components/Buttons/DesignButton.vue'

const version = __APP_VERSION__ || '0.1.0'
const libraryName = __APP_NAME__ || 'Vexus'
</script>
