<template>
  <div id="app" class="text-white p-24 text-center">
    <Tweet v-for="(tweet, index) in tweets" :key="index" :tweet="tweet" />
  </div>
</template>

<script>
import Tweet from "./Wall/Tweet.vue";

import Pusher from "pusher-js";

const PUSHER = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
  cluster: process.env.VUE_APP_PUSHER_CLUSTER,
});

const CHANNEL = "tweets";

const EVENT = "new-tweet";

export default {
  components: {
    Tweet,
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