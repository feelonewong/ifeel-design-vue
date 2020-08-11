<template>
  <div>
    <Topnav/>
    <div class="content">
     <aside v-if="menuVisible">
      <h2>组件列表</h2>
      <ol>
        <li>
          <router-link to="/doc/switch">Switch组件</router-link>
        </li>
        <li>
          <router-link to="/doc/button">Button组件</router-link>
        </li>
        <li>
          <router-link to="/doc/dialog">Dialog组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs组件</router-link>
        </li>
      </ol>
     </aside>
     <main>main</main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { ref, inject, Ref } from 'vue';
export default {
  components:{
    Topnav
  },
  setup(){
    const menuVisible = inject<Ref<boolean>>('xxx');
    
    return{
      menuVisible
    }
  }
}
</script>

<style lang="scss" scoped>
    aside{
      background-color: lightblue;
      width: 150px;
      padding: 16px;
      position: fixed;
      top: 54px;
      left: 0;
      > h2{
        margin-bottom: 4px;
      }
      > ol{
        >li{
          padding: 4px 0;
        }
      }
    }
</style>