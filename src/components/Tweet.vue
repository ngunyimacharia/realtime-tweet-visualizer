<template>
  <div>
    <tweet-modal :tweet="tweet" :show="showTweet" @close="showTweet = false" />
    <tweet-image :tweet="tweet" @click.native="showTweet = true" />
  </div>
</template>

<script>
import TweetImage from "./TweetImage.vue";

import TweetModal from "./TweetModal.vue";

export default {
  components: {
    TweetImage,
    TweetModal,
  },
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      showTweet: false,
    };
  },
};
</script>