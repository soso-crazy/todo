<template>
    <div class="app-bar">
        <span class="app-bar_l" @click="$emit('left')">
            <i :class="['fa',`fa-${left} fa-2x`]"></i>
        </span>
        <h1>{{title}}</h1>
        <span class="app-bar_r" @click="$emit('right')">
            <i :class="['fa',`fa-${right} fa-2x`]"></i>
        </span>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:''
        },
        left:{
            type:String,
            default:'chevron-left'
        },
        right:{
            type:String,
            default:'ellipsis-v'
        }
    }
}
</script>

<style lang="scss" scoped>
.app-bar {
  margin: 20px 0 0;
  display: flex;
  align-items: center;
  height: 44px;
  font-size: 15px;
  z-index: 1;
  h1 {
    display: flex;
    justify-content: center;
    flex: 1;
    font-size: 30px;
  }
  span {
    padding: 0 20px;
  }
}
</style>