<template>
  <div>
    <vue-final-modal
      classes="flex justify-center items-center"
      content-class="w-full"
      v-model="showModal"
      @click-outside="showModal = false"
      @closed="showModal = false"
      @cancel="showModal = false"
    >
      <tweet-image :tweet="tweet" class="w-full" />
    </vue-final-modal>
    <tweet-image :tweet="tweet" @click.native="showModal = true" />
  </div>
</template>

<script>
import TweetImage from "./TweetImage.vue";

export default {
  components: {
    TweetImage,
  },
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
};
</script>