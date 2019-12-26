<template>
    <div class="home">
        <app-bar title="TODO" left="bars" right="search"/>
        <avatar name="Joey"/>
        <gradient />
        <todo-list />
        <!-- <todo-detail /> -->
    </div>
</template>

<script>
import AppBar from '../components/AppBar.vue';
import Avatar from '../components/Avatar.vue';
import Gradient from '../components/Graident.vue';
import TodoList from '../components/TodoList.vue';
import TodoDetail from '../components/TodoDetail.vue';
export default {
    components:{
        AppBar,
        Avatar,
        Gradient,
        TodoList,
        TodoDetail
    }
}
</script>

<style lang="scss" scoped>
.home{
    height: 100%;
    width: 100%;
    overflow: hidden;
    color: #fff;
}
</style>