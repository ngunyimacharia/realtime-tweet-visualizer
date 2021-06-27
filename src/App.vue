<template>
  <div id="app" class="bg-gray-900 min-h-screen">
    <Hero />
    <Wall />
  </div>
</template>

<script>
import Hero from "./components/Hero.vue";
import Wall from "./components/Wall.vue";

export default {
  name: "App",

  components: {
    Hero,
    Wall,
  },
};
</script>