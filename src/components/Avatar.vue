<template>
  <div class="avatar" :class="{avatar_selected:!!selected}">
    <div class="avatar_face">
      <img src="../img/avatar.jpg" alt="">
    </div>
    <h3 class="avatar_name">Hello,&nbsp;{{name}}.</h3>
    <p class="avatar_tips">
      Looks like feels good.
      <br />
      You have {{todayTasks.length}} to do todays
    </p>
    <!-- 组件过滤器，将today作为函数dateString的参数val -->
    <p class="avatar_date">Today&nbsp;:&nbsp;{{today|dateString}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      today: new Date()
    };
  },
  props: {
    name: {
      type: String,
      default: ""
    }
  },
  computed: {
    // 当映射的计算属性的名称与 state 的子节点名称相同时，可以给 mapState 传一个字符串数组
    ...mapState([
      // 映射this.selected为store.state.seleted
      "selected"
    ]),

    ...mapGetters(["todayTasks"])
  },
  filters: {
    // 显示当天的时间
    dateString(val) {
      return val
        .toDateString()
        .toUpperCase()
        .replace(/(\s\d{4})$/, ",$1");
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar {
  display: flex;
  padding: 0 40px;
  flex-direction: column;
  transition: all 0.5s ease;
}

.avatar_selected {
  transform: translate3d(0, 20px, 0);
  opacity: 0;
}

.avatar_face{
  width: 100px;
  height: 100px;
  margin: 40px 0 0;

  img{
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 100%;
  }
}

 .avatar_name{
    font-size: 70px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: normal;
    letter-spacing: 2px;
    margin: 40px 0 0;
  }

  .avatar_tips{
    margin: 20px 0 0;
    font-size: 30px;
    font-weight: lighter;
    letter-spacing: 2px;
  }

  .avatar_date{
    margin: 100px 0 0;
    font-size: 25px;
    letter-spacing: 2px;
  }

</style>