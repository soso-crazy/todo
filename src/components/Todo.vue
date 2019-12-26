<template>
  <div class="todo" :class="{'todo_selected':selected}">
    <div class="todo_head" @click="clickTodo">
      <div class="todo_icon" :class="`${todo.name}IconColor`">
        <i :class="['fa',`fa-${todo.icon} fa-2x`]"></i>
      </div>
      <div class="todo_menu">
        <i class="fa fa-ellipsis-v fa-2x"></i>
      </div>
    </div>
    <div class="todo_body">
      <p class="todo_tips">{{todo.tasks.length}} Tasks</p>
      <h3>{{todo.name}}</h3>
      <div class="todo_progress">
        <span class="todo_progress_line">
          <i :style="{width:progress}" :class="`${todo.name}BgColor`"></i>
        </span>
        <span class="todo_progress_num">{{progress}}</span>
      </div>
      <div class="todo_tasks">
        <h4 class="todo_subtitle" v-if="todayTasks.length">Today</h4>
        <ul>
          <li v-for="task in todayTasks" :key="task.id">
            <task :task="task" />
          </li>
        </ul>
        <h4 class="todo_subtitle" v-if="tomorrowTasks.length">tomorrow</h4>
        <ul>
          <li v-for="task in tomorrowTasks" :key="task.id">
            <task :task="task" />
          </li>
        </ul>
        <h4 class="todo_subtitle" v-if="outdatedTasks.length">outdated</h4>
        <ul>
          <li v-for="task in outdatedTasks" :key="task.id">
            <task :task="task" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { today, tomorrow } from "../js/time";
import Task from "./Task.vue";
export default {
  components: {
    Task
  },
  props: {
    selected: {
      type: Boolean
    },
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    clickTodo() {
      const appRect = document.getElementById("app").getBoundingClientRect();

      // 获取todo组件dom元素相对于视窗的位置集合
      const elRect = this.$el.getBoundingClientRect();

      const rect = {};
      rect.top = elRect.top - appRect.top;
      rect.left = elRect.left - appRect.left;
      rect.width = elRect.width;
      rect.height = elRect.height;
      rect.appWidth = appRect.width;
      rect.appHeight = appRect.height;

      const todo = this.todo;

      this.$emit("select", { rect, todo });
    }
  },
  computed: {
    progress() {
      const totalTaskCount = this.todo.tasks.filter(item => !item.deleted)
        .length;

      const doneTaskCount = this.todo.tasks.filter(
        item => !item.deleted && item.done
      ).length;

      return `${Math.round(doneTaskCount / totalTaskCount) * 100}%`;
    },

    todayTasks() {
      return this.todo.tasks.filter(item => {
        return item.date > today && item.date < tomorrow;
      });
    },

    tomorrowTasks() {
      return this.todo.tasks.filter(item => {
        return item.date >= tomorrow;
      });
    },

    outdatedTasks() {
      return this.todo.tasks.filter(item => {
        return item.date < today;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/setColor.scss";
.PersonalIconColor {
  color: $PersonalColor1;
}

.WorkIconColor {
  color: $WorkColor1;
}

.HomeIconColor {
  color: $HomeColor1;
}

.PersonalBgColor {
  background: setBgColor(left, $PersonalColor1, $PersonalColor2);
}

.WorkBgColor {
  background: setBgColor(left, $WorkColor1, $WorkColor2);
}

.HomeBgColor {
  background: setBgColor(left, $HomeColor1, $HomeColor2);
}

.todo {
  flex: 1;
  margin: 0 8px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #666;
  display: flex;
  flex-direction: column;
}

.todo_selected {
  visibility: hidden;
}

.todo_head {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.todo_icon {
  width: 66px;
  height: 66px;
  border: 1px solid #d2d3da;
  border-radius: 100%;
  position: relative;
  i{
    // 解决由于reset中i的font导致fontawesome不显示问题
    font:normal normal normal 30px FontAwesome;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.todo_menu {
  color: #d2d3da;
  i{
    display: block;
    font:normal normal normal 30px FontAwesome;
  }
}

.todo_body{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 20px;
}

.todo_tips{
  color: #d2d3da;
  font-size: 25px;
  &~h3{
    font-size: 50px;
    color: #373738;
  }
}

.todo_progress{
  margin-top: 30px;
}

.todo_progress_line{
  display: inline-block;
  position: relative;
  vertical-align: 5px;
  margin-right: 10px;
  width: 90%;
  height: 6px;
  background-color: #eee;

   i {
    display: block;
    height: 100%;
    transition: all 0.3s ease;
  }
}

.todo_progress_num{
  font-size: 25px;
}

.todo_tasks{
  opacity: 0;
  transform: scale3d(1, 0, 1);
}

.todo_subtitle {
  margin-top: 32px;
  margin-bottom: 8px;
  color: #999;
}
</style>