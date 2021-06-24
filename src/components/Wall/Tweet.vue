<template>
  <div>
    {{ tweet }}
    <!-- https://res.cloudinary.com/kmashytski/image/upload/v1624510246/realtime-tweet-visualizer/tweet_card_template_uktmom.webp -->
    <cld-image
      publicId="realtime-tweet-visualizer/tweet_card_template_uktmom"
      secure="true"
      class="p-5 mx-auto"
    >
      <cld-transformation
        :overlay="`text:arial_16:${tweet.username}`"
        y="-75"
        x="-175"
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
export default {
  props: {
    tweet: {
      required: true,
      type: Object,
    },
  },
};
</script>