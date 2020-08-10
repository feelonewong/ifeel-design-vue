<template>
  <h1>
    导航条 |
    <router-link to="/">第一个组件</router-link>|
    <router-link to="/xxx">第二个组件 1</router-link>
  </h1>
  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
