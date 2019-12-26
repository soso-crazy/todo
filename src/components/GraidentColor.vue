<template>
  <div
    class="gradient_color"
    :class="[{ gradient_color__active: active },`${colorsName}BgColor`]"
  />
</template>

<script>
export default {
  props: {
    colorsName: {
      type: String
    },
    active: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
@import '../scss/setColor.scss';
.gradient_color {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 0.5s ease;
}
.gradient_color__active {
  opacity: 1;
}

.PersonalBgColor{
  background: setBgColor(-45deg,$PersonalColor1,$PersonalColor2);
}

.WorkBgColor{
  background: setBgColor(-45deg,$WorkColor1,$WorkColor2);
}

.HomeBgColor{
  background: setBgColor(-45deg,$HomeColor1,$HomeColor2);
}
</style>