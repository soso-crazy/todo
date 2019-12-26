<template>
  <transition name="fade">
    <div class="task" v-if="!task.deleted">
      <input type="checkbox" :id="id" />
      <label for="id">{{task.title}}</label>
      <transition name="fade">
          <span class="task_delete" v-show="task.done" @click="DELETETASK({task})">
              <i class="fa  fa-trash"></i>
          </span>
      </transition>
    </div>
  </transition>
</template>

<script>
let GID = 1;
import { mapMutations } from "vuex";
export default {
  props: {
    task: {
      type: Object
    }
  },
  data() {
    return {
      id: `task-${GID++}`
    };
  },
  methods: {
    ...mapMutations(["DELETETASK"]),
  }
};
</script>