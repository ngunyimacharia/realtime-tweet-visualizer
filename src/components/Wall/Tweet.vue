<template>
  <div>
    {{ tweet }}

    https://res.cloudinary.com/kmashytski/image/upload/v1624598278/realtime-tweet-visualizer/tweet_card_template_vazitc.webp
    <cld-image
      publicId="realtime-tweet-visualizer/tweet_card_template_vazitc"
      secure="true"
      class="p-5 mx-auto"
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
      <!-- <cld-transformation
        width="150"
        height="150"
        gravity="face"
        crop="thumb"
      />
      <cld-transformation radius="20" />
      <cld-transformation effect="sepia" />
      <cld-transformation
        :overlay="cloudinary_icon_blue"
        gravity="south_east"
        x="5"
        y="5"
        width="50"
        opacity="60"
        effect="brightness:200"
      />
      <cld-transformation angle="10" /> -->
    </cld-image>
  </div>
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