import Vue from 'vue';
import Cloudinary, { CldImage, CldTransformation } from "cloudinary-vue";

Vue.use(Cloudinary, {
    configuration: {
        cloudName: process.env.VUE_APP_CLOUDINARY_CLOUD_NAME
    },
    components: {
        CldImage,
        CldTransformation
    }
});