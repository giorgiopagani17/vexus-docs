export const setupCode = `import VxButton from '@vexus'`

export const variantCode = `<!-- Variant -->
<VxButton @click="onClick" variant="solid">Solid (default)</Button>
<VxButton @click="onClick" variant="outline">Outline</Button>
<VxButton @click="onClick" variant="ghost">Ghost</Button>
<VxButton @click="onClick" variant="text">Text</Button>`

export const colorCode = `<!-- Color palette -->
<VxButton @click="onClick" color="primary">Primary</Button>
<VxButton @click="onClick" color="secondary">Secondary</Button>
<VxButton @click="onClick" color="positive">Positive</Button>
<VxButton @click="onClick" color="negative">Negative</Button>
<VxButton @click="onClick" color="warning">Warning</Button>
<VxButton @click="onClick" color="info">Info</Button>`

export const colorCustomCode = `<!-- Color custom: hex, rgb, o CSS custom property -->
<VxButton @click="onClick" color="#7c3aed">Hex</Button>
<VxButton @click="onClick" color="var(--brand-color)">CSS var</Button>

<!-- Le variabili SCSS ($primary, ecc.) NON sono utilizzabili a runtime:
     usa il nome token ('primary') oppure var(--vx-primary), entrambi
     derivati dalla stessa palette ed esposti come CSS custom property -->
<VxButton @click="onClick" color="var(--vx-primary)">Palette via var</Button>`

export const sizeCode = `<!-- Size -->
<VxButton @click="onClick" size="sm">Small</Button>
<VxButton @click="onClick" size="md">Medium</Button>
<VxButton @click="onClick" size="lg">Large</Button>`

export const iconCode = `<!-- Icon via prop -->
<VxButton @click="onClick" :icon="Sparkles" iconPosition="left">
  Left icon
</Button>

<VxButton @click="onClick" :icon="Sparkles" iconPosition="right">
  Right icon
</Button>

<!-- Icon via slot -->
<VxButton @click="onClick">
  <template #icon-left>
    <Sparkles />
  </template>
  Slot left
</Button>

<VxButton @click="onClick">
  Slot right
  <template #icon-right>
    <Sparkles />
  </template>
</Button>`

export const loadingCode = `<!-- Loading -->
<VxButton @click="onClick" loading>Loading</Button>

<VxButton @click="onClick" :loading="isLoading">
  Async action
</Button>`

export const disabledCode = `<!-- Disabled -->
<VxButton @click="onClick" disabled>Disabled</Button>

<VxButton @click="onClick" variant="ghost" disabled>
  Ghost disabled
</Button>`

export const blockCode = `<!-- Block full width -->
<VxButton @click="onClick" block>
  Full width
</Button>`

export const radiusCode = `<!-- Radius -->
<VxButton @click="onClick">Default</Button>

<VxButton @click="onClick" :radius="20">
  Custom radius
</Button>

<VxButton @click="onClick" pill>
  Pill button
</Button>`

export const iconOnlyCode = `<!-- Icon only -->
<VxButton @click="onClick" :icon="Sparkles" />

<VxButton @click="onClick" :icon="Sparkles" size="lg" />`

export const colorsOverrideCode = `<!-- Custom colors override -->
<VxButton
  @click="onClick"
  :colors="{
    background: '#7c3aed',
    text: '#ffffff',
    hoverBackground: '#6d28d9',
    border: 'transparent',
    shadow: 'rgba(124,58,237,0.3)'
  }"
>
  Custom button
</Button>

<!-- Le chiavi accettano anche i nomi token della palette interna -->
<VxButton
  @click="onClick"
  :colors="{
    background: 'positive',
    hoverBackground: 'primary'
  }"
>
  Token override
</Button>`

export const eventsCode = `<!-- Click event -->
<VxButton @click="handleClick">
  Click me
</Button>

<script setup>
const handleClick = (event) => {
  console.log('clicked', event)
}
</script>`

export const hoverEffectCode = `<!-- Hover effect -->
<VxButton hoverEffect="brightness">
  Brightness
</Button>


<VxButton hoverEffect="scale">
  Scale
</Button>


<VxButton hoverEffect="lift">
  Lift
</Button>


<VxButton hoverEffect="glow">
  Glow
</Button>


<VxButton variant="text" hoverEffect="underline">
  Underline
</Button>


<VxButton hoverEffect="none">
  None
</Button>


<!-- Custom: nessun effetto integrato, lo gestisci tu -->
<VxButton hoverEffect="custom" class="my-custom-hover">
  Custom
</Button>


<style scoped>
.my-custom-hover {
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
</style>`

export const getButtonCodeExamples = (tm: (key: string) => unknown) => {
  const labels = tm('buttonDocs.codeLabels') as Record<string, string>
  const source = {
    setupCode, variantCode, colorCode, colorCustomCode, sizeCode, iconCode,
    loadingCode, disabledCode, blockCode, radiusCode, hoverEffectCode,
    iconOnlyCode, colorsOverrideCode, eventsCode
  }

  const replacements = {
    'Solid (default)': labels.solid, Outline: labels.outline, Ghost: labels.ghost, Text: labels.text,
    Primary: labels.primary, Secondary: labels.secondary, Positive: labels.positive,
    Negative: labels.negative, Warning: labels.warning, Info: labels.info,
    Small: labels.small, Medium: labels.medium, Large: labels.large,
    'Left icon': labels.leftIcon, 'Right icon': labels.rightIcon,
    'Slot left': labels.slotLeft, 'Slot right': labels.slotRight,
    Loading: labels.loading, 'Async action': labels.asyncAction, Disabled: labels.disabled,
    'Full width': labels.fullWidth, Default: labels.default, 'Custom radius': labels.customRadius,
    'Pill button': labels.pillButton, 'Custom button': labels.customButton,
    'Token override': labels.tokenOverride, 'Click me': labels.clickMe,
    Brightness: labels.brightness, Scale: labels.scale, Lift: labels.lift, Glow: labels.glow,
    Underline: labels.underline, None: labels.none,
    'Color palette': labels.colorPalette,
    'Color custom: hex, rgb o CSS custom property': labels.customColorComment,
    'Color custom: hex, rgb, o CSS custom property': labels.customColorComment,
    'Hover effect': labels.hoverComment, 'Icon only': labels.iconOnlyComment,
    'Custom colors override': labels.customColorsComment, 'Click event': labels.clickComment,
    'Block full width': labels.blockComment,
    Variant: labels.variantComment, Size: labels.sizeComment,
    'Icon via prop': labels.iconPropComment, 'Icon via slot': labels.iconSlotComment,
    'Le variabili SCSS ($primary, ecc.) NON sono utilizzabili a runtime:': labels.scssComment,
    '     usa il nome token (\'primary\') oppure var(--vx-primary), entrambi': labels.scssTokenComment,
    '     derivati dalla stessa palette ed esposti come CSS custom property': labels.scssPropertyComment,
    'Custom: nessun effetto integrato, lo gestisci tu': labels.customHoverComment
  }

  return Object.fromEntries(Object.entries(source).map(([key, value]) => {
    let localized = value
    for (const [from, to] of Object.entries(replacements)) {
      localized = localized.split(from).join(to)
    }
    return [key, localized]
  }))
}
