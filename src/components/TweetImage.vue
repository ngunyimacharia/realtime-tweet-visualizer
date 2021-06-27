<template>
  <cld-image
    publicId="realtime-tweet-visualizer/tweet_card_template_vazitc"
    secure="true"
    width="500"
    :alt="`${tweet.username}'s tweet`"
  >
    <cld-transformation
      :overlay="`fetch:${tweet.user_profile_image}`"
      y="-70"
      x="-265"
      r="max"
    />
    <cld-transformation
      :overlay="`text:arial_16_bold:${encodeURIComponent(
        safeText(tweet.full_name)
      )},co_rgb:34383d`"
      y="-85"
      x="-176"
    />
    <cld-transformation
      :overlay="`text:arial_16_thin:@${encodeURIComponent(
        safeText(tweet.username)
      )},co_rgb:536471`"
      y="-60"
      x="-176"
    />
    <cld-transformation
      :overlay="`text:arial_16_thin:@${encodeURIComponent(
        safeText(tweet.text.substring(0, 300))
      )},co_rgb:0f1419`"
      crop="fit"
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
export default {
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },
  methods: {
    safeText(str) {
      return new String(str)
        .replace(/(?:https?|ftp):\/\/[\n\S]+/g, "URL")
        .replace(/[^ A-Za-z0-9_@.#&+-]/gi, "")
        .replace(/.{70}/g, "$&\n");
    },
  },
};
</script>