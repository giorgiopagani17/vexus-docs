<template>
  <div class="intro">
    <div class="hero">
      <div class="badge">
        <span class="dot"></span>
        v{{ version }} — {{ $t('home.available') }}
      </div>

      <div class="logo-wrap">
        <h1 class="logo-text">{{ libraryName }}</h1>
      </div>

      <p class="tagline">
        {{ $t('home.taglinePartOne') }} <strong>Vue 3</strong>, {{ $t('home.taglinePartTwo') }}
      </p>

      <div class="cta">
        <DesignButton :text="$t('buttons.getStarted')" :icon-left="Plus" variant="primary" @click="goToDocumentation" />
        <DesignButton :text="$t('buttons.viewOnNpm')" :icon-left="Plus" variant="primary" @click="goToNpm" />
        <DesignButton :text="$t('buttons.versions')" :icon-left="Plus" variant="primary" @click="goToVersions" />
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
      <p>{{$t('home.madeWith')}} <span class="heart">♥</span> {{$t('home.by')}} <strong>Giorgio Pagani</strong></p>
    </div>
  </div>
</template>

<script setup>
import DesignCard from '@/components/Cards/DesignCard.vue'
import DesignButton from '@/components/Buttons/DesignButton.vue'
import { useRouter } from 'vue-router'

const version = __APP_VERSION__ || '0.1.0'
const libraryName = __APP_NAME__ || 'Vexus'

const router = useRouter()

const goToDocumentation = () => {
  router.push('/documentation')
}

const goToVersions = () => {
  router.push('/versions')
}

const goToNpm = () => {
  window.open('https://www.npmjs.com/package/vexus', '_blank')
}
</script>
