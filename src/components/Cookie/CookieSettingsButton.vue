<template>
  <div class="cookie-settings">
    <button
      type="button"
      aria-label="Cookie Settings"
      class="cookie-settings__button"
      @click="openCookieSettings"
    >
      <Cookie :size="24" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { Cookie } from "lucide-vue-next";

const COOKIE_SETTINGS_EVENT = 'vexus:open-cookie-settings'

function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(COOKIE_SETTINGS_EVENT))
}
</script>

<style scoped lang="scss">
.cookie-settings {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9998;

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;

    border: none;
    border-radius: 9999px;

    color: white;
    cursor: pointer;

    background: linear-gradient(135deg, $primary, $secondary);

    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 40%);

    transition:
      transform 0.2s ease,
      background 0.2s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:active {
      transform: scale(0.95);
    }
  }
}
</style>