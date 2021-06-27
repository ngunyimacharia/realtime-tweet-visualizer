<template>
  <cld-image
    publicId="realtime-tweet-visualizer/tweet_card_template_vazitc"
    secure="true"
    class="p-5 mx-auto w-max"
  >
    <cld-transformation
      :overlay="`fetch:${tweet.user_profile_image}`"
      y="-70"
      x="-265"
      r="max"
    />
    <cld-transformation
      :overlay="`text:arial_16_bold:${tweet.full_name},co_rgb:34383d`"
      y="-85"
      x="-176"
    />
    <cld-transformation
      :overlay="`text:arial_16_thin:@${tweet.username},co_rgb:536471`"
      y="-60"
      x="-176"
    />
    <cld-transformation
      :overlay="`text:arial_16_thin:@${encodeURIComponent(
        tweet.text.substring(0, 300)
      )},co_rgb:0f1419`"
      y="10"
    />
    <cld-transformation
      :overlay="`text:arial_16_thin:${tweet.created_at},co_rgb:536471`"
      y="95"
      x="-170"
    />
  </cld-image>
</template>

<script>
import trim from "trim-character";

export default {
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },
  computed: {
    profileBase64() {
      let url = window
        .btoa(this.tweet.user_profile_image)
        .replace(/\+/g, "-")
        .replace(/\//g, "_");

      console.log(url);

      var trimmed = trim(url, "=");

      console.log(trimmed);

      return trimmed;
    },
  },
};
</script>