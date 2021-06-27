<template>
  <vodal
    width="800"
    height="600"
    :show="show"
    animation="rotate"
    @hide="$emit('close')"
  >
    <tweet-image :tweet="tweet" />
  </vodal>
</template>

<script>
import TweetImage from "./TweetImage.vue";
import Vodal from "vodal";

export default {
  components: {
    TweetImage,
    Vodal,
  },
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    tweet: {
      type: Object,
      required: true,
    },
  },
};
</script>