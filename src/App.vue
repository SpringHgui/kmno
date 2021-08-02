<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <router-link :to="{ name: 'home', params: { name: 'dadsadasds' } }" v-if="!isHome">返回首页</router-link>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {

    };
  },
  computed: {
    isHome() {
      return this.$router.currentRoute.value.path == "/";
    }
  },
  mounted(){
    console.log(this.$router.currentRoute.value, "ddsd");
    
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

<style>
:root {
  --font-sans: "Poppins", "sans-serif";
  --font-mono: "Roboto Mono", "monospace";
  --font-icon: "Material Icons";
  --primary-color: #202124;
  --primary-light-color: hsla(0, 0%, 100%, 0.04);
  --primary-dark-color: rgba(0, 0, 0, 0.2);
  --secondary-color: hsla(0, 0%, 100%, 0.9);
  --secondary-light-color: hsla(0, 0%, 100%, 0.5);
  --divider-color: hsla(0, 0%, 100%, 0.05);
  --error-color: hsla(0, 0%, 100%, 0.05);
  --tooltip-color: #303030;
  --editor-theme: "twilight";
  --accent-color: #34d399;
}
:root.light {
  --primary-color: #fff;
  --primary-light-color: rgba(0, 0, 0, 0.05);
  --primary-dark-color: rgba(0, 0, 0, 0.02);
  --secondary-color: rgba(0, 0, 0, 0.9);
  --secondary-light-color: rgba(0, 0, 0, 0.6);
  --divider-color: rgba(0, 0, 0, 0.1);
  --error-color: rgba(0, 0, 0, 0.1);
  --tooltip-color: #fff;
  --editor-theme: "iplastic";
}
:root.dark {
  --primary-color: #202124;
  --primary-light-color: hsla(0, 0%, 100%, 0.04);
  --primary-dark-color: rgba(0, 0, 0, 0.2);
  --divider-color: hsla(0, 0%, 100%, 0.05);
  --tooltip-color: #303030;
  --editor-theme: "twilight";
}
:root.black,
:root.dark {
  --secondary-color: hsla(0, 0%, 100%, 0.9);
  --secondary-light-color: hsla(0, 0%, 100%, 0.5);
  --error-color: hsla(0, 0%, 100%, 0.05);
}
:root.black {
  --primary-color: #000;
  --primary-light-color: hsla(0, 0%, 100%, 0.02);
  --primary-dark-color: hsla(0, 0%, 100%, 0.07);
  --divider-color: hsla(0, 0%, 100%, 0.11);
  --tooltip-color: #202020;
  --editor-theme: "vibrant_ink";
}
:root[data-accent="blue"] {
  --accent-color: #60a5fa;
}
:root[data-accent="green"] {
  --accent-color: #34d399;
}
:root[data-accent="teal"] {
  --accent-color: #2dd4bf;
}
:root[data-accent="indigo"] {
  --accent-color: #818cf8;
}
:root[data-accent="purple"] {
  --accent-color: #a78bfa;
}
:root[data-accent="orange"] {
  --accent-color: #fb923c;
}
:root[data-accent="pink"] {
  --accent-color: #f472b6;
}
:root[data-accent="red"] {
  --accent-color: #f87171;
}
:root[data-accent="yellow"] {
  --accent-color: #fbbf24;
}
</style>