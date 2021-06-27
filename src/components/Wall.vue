  <template>
  <ul
    role="list"
    class="
      grid grid-cols-1
      gap-0
      sm:grid-cols-2
      sm:gap-x-6
      lg:grid-cols-3
      xl:gap-x-8
    "
  >
    <li v-for="(tweet, index) in tweets" :key="index" class="relative">
      <div
        class="
          group
          block
          w-full
          aspect-w-10 aspect-h-7
          focus-within:ring-2
          focus-within:ring-offset-2
          focus-within:ring-offset-gray-100
          focus-within:ring-indigo-500
          overflow-hidden
        "
      >
        <Tweet :tweet="tweet" />
      </div>
    </li>
  </ul>
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
      tweets: [],
    };
  },

  mounted() {
    this.addTweet();

    const channel = PUSHER.subscribe(CHANNEL);
    channel.bind(EVENT, (data) => {
      console.log(data);
    });
  },

  methods: {
    addTweet() {
      const tweet = {
        username: "RobOttoBots",
        text: "RT @Iamdataqueen: What is #NFT aka New Fashion Technology\nRelay Switch in Play Mode.\n#Artist \n#NFT #Copyright #Artlaw\n#Bigdata #MachineLear…",
        full_name: "Rob Otto Bot",
        tweet_url:
          "https://twitter.com/1381744487358078979/status/1407903657279082496",
        user_profile_image:
          "http://pbs.twimg.com/profile_images/1381744739876175878/g88W9wp-_normal.jpg",
        created_at: "Thu Jun 24 03:29:24 +0000 2021",
      };

      this.tweets.push(tweet);

      setTimeout(() => {
        this.addTweet();
      }, 5000);
    },
  },

  beforeDestroy() {
    PUSHER.unsubscribe(CHANNEL);
  },
};
</script>