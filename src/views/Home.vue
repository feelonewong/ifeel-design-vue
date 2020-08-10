<template>
  <div>
    <Topnav/>
    <div class="banner">
      <h1>ifeel design</h1>
      <h2>一套基于 Vue3.0的 UI 组件库</h2>
      <p class="actions">
        <a href="https://github.com/feelonewong/ifeel-design-vue" target="_blank">Github</a>
        <router-link to="/doc">开始</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { provide, ref } from 'vue';

export default {
  components:{
    Topnav
  },
  setup(){
    const menuVisible = ref(false); 
    provide('xxx',menuVisible);
    return{
      menuVisible
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>