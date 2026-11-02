<template>
  <main class="docs-page">
    <header class="docs-header">
      <h1>{{ $t('license.title') }}</h1>
      <p class="subtitle">{{ $t('license.subtitle') }}</p>
    </header>

    <section class="docs-section">
      <h2>{{ $t('license.allowed.title') }}</h2>
      <ul class="docs-list">
        <li>{{ $t('license.allowed.use') }}</li>
        <li>{{ $t('license.allowed.commercial') }}</li>
        <li>{{ $t('license.allowed.bundle') }}</li>
      </ul>
    </section>

    <section class="docs-section">
      <h2>{{ $t('license.forbidden.title') }}</h2>
      <ul class="docs-list">
        <li>{{ $t('license.forbidden.modify') }}</li>
        <li>{{ $t('license.forbidden.redistribute') }}</li>
        <li>{{ $t('license.forbidden.reverse') }}</li>
        <li>{{ $t('license.forbidden.claim') }}</li>
      </ul>
    </section>

    <section class="docs-section">
      <h2>{{ $t('license.full.title') }}</h2>
      <p>{{ $t('license.full.text') }}</p>
      <a
        href="https://github.com/giorgiopagani17/vexus-docs/blob/main/VEXUS-LICENSE.md"
        target="_blank"
        rel="noopener noreferrer"
        class="docs-link"
      >
        {{ $t('license.full.link') }}
      </a>
    </section>
  </main>
</template>