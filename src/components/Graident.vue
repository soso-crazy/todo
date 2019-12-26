<template>
  <div class="gradient">
    <!-- 获取仓库的状态传给子组件 -->
    <gradient-color
      v-for="(todo, index) in todos"
      :key="todo.name"
      :colorsName="todo.name"
      :active="index <= currentIndex"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import GradientColor from "./GraidentColor.vue";
export default {
  components: {
    GradientColor
  },
  computed: {
    // 将this.$store.state.todos映射为todos，将this.$store.state.currentIndex映射为currentIndex
    ...mapState(["todos", "currentIndex"])
  }
};
</script>

<style lang="scss">
.gradient {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>