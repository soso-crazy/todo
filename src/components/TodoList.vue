<template>
  <div class="todo-list" :class="{'todo-list_selected':selected}">
    <ul :style="{width:`${todos.length*100}%`}">
      <li
        v-for="todo in todos"
        :key="todo.name"
        :style="{transform:`translate3d(-${currentIndex*100}%,0,0)`}"
      >
        <todo :todo="todo" :selected="selected&&todo==selected.todo" @select="selectTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState,mapMutations } from "vuex";
import Todo from "./Todo.vue";
export default {
  components: {
    Todo
  },
  computed: {
    ...mapState(["todos", "selected","currentIndex"])
  },
  methods:{
      ...mapMutations({
        selectTodo:'SELECTTODO'
      })
  }
};
</script>

<style lang="scss" scoped>
.todo-list {
  margin: 10px 0 0;
  padding: 0 32px;
  transition: all 0.5s ease;
  height: 600px;
  ul {
    display: flex;
    height: 100%;
    li {
      @extend ul;
      flex: 1;
      transition: transform 0.5s ease;
    }
  }
}

.todo {
  border-radius: 18px;
  background-color: #fff;
}

.todo-list_selected {
  transform: scaleX(1.25);
}
</style>