<template>
  <div class="topnav">
    <div class="logo" @click="toggleMenu">logo</div>
    <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue';
export default {
  setup(){
    const menuVisible = <Ref<boolean>>inject("xxx");
    const toggleMenu = ()=>{
      menuVisible.value = !menuVisible.value;
    }
    return{
      menuVisible,
      toggleMenu
    }
  }
};
</script>

<style lang="scss" scoped>
.topnav {
  background: pink;
  display: flex;
  padding: 16px;
  z-index: 10;
  position: relative;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>