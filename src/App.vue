<template>
  <div id="app">
    <Hero />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Pusher from "pusher-js";

import Hero from "./components/Hero.vue";

const PUSHER = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
  cluster: process.env.VUE_APP_PUSHER_CLUSTER,
});

const CHANNEL = "tweets";

const EVENT = "new-tweet";

export default {
  name: "App",

  components: {
    Hero,
  },

  data() {
    return {
      tweets: [
        {
          username: "RobOttoBots",
          text: "RT @Iamdataqueen: What is #NFT aka New Fashion Technology\nRelay Switch in Play Mode.\n#Artist \n#NFT #Copyright #Artlaw\n#Bigdata #MachineLear…",
          full_name: "Rob Otto Bot",
          tweet_url:
            "https://twitter.com/1381744487358078979/status/1407903657279082496",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1381744739876175878/g88W9wp-_normal.jpg",
          created_at: "Thu Jun 24 03:29:24 +0000 2021",
        },
      ],
    };
  },

  mounted() {
    const channel = PUSHER.subscribe(CHANNEL);
    channel.bind(EVENT, (data) => {
      console.log(data);
    });
  },

  beforeDestroy() {
    PUSHER.unsubscribe(CHANNEL);
  },
};
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
