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
    <li
      v-for="(tweet, index) in tweets.filter((tweet) => tweet.lang === 'en')"
      :key="index"
      class="relative"
    >
      <div class="w-full h-full">
        <Tweet :tweet="tweet" />
      </div>
    </li>
  </ul>
</template>

<script>
import Tweet from "./Tweet.vue";

import Pusher from "pusher-js";

const PUSHER = new Pusher(process.env.VUE_APP_PUSHER_APP_KEY, {
  cluster: process.env.VUE_APP_PUSHER_CLUSTER,
});

const CHANNEL = "tweets";

// const EVENT = "new-tweet";

export default {
  components: {
    Tweet,
  },
  data() {
    return {
      tweets: [
        {
          username: "1000dayscodingb",
          text: "RT @Paula_Piccard: Google considered using drones for firefighting\nhttps://t.co/t0E6mTa2Wf @CNET \n#MachineLearning #5G #DataScience #100D…",
          full_name: "1000 Days Of Coding - BOT",
          tweet_url:
            "https://twitter.com/1347291458278080513/status/1409170257630035975",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1377718369844011009/5JZNdqVy_normal.jpg",
          created_at: "Sun Jun 27 15:22:25 +0000 2021",
          lang: "en",
        },
        {
          username: "RobOttoBots",
          text: "RT @motamaiz2030: 🤖ما نقدمه لكم من كافة الاعمال #البرمجية✌️\n▶️#Python #Django\n▶️#Java #CSS #HTML \n▶️#Laravel #PHP \n▶️#IoT #Arduino\n▶️#Matl…",
          full_name: "Rob Otto Bot",
          tweet_url:
            "https://twitter.com/1381744487358078979/status/1409171992499077122",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1381744739876175878/g88W9wp-_normal.jpg",
          created_at: "Sun Jun 27 15:29:18 +0000 2021",
          lang: "ar",
        },
        {
          username: "motamaiz2030",
          text: "🤖ما نقدمه لكم من كافة الاعمال #البرمجية✌️\n▶️#Python #Django\n▶️#Java #CSS #HTML \n▶️#Laravel #PHP \n▶️#IoT #Arduino\n▶️#Matlab \n▶️#C #C++\n▶️#SQL #MySQL \n▶️#Database  \n▶️#JavaScript \n▶️#Csharp \n#طالب #جامعة #ماجستير #دكتوراه #بكالوريوس",
          full_name: "مشارق للخدمات البحثية والخدمات المتعددة",
          tweet_url:
            "https://twitter.com/1216454673479217154/status/1409171963281608707",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1280504985516679177/B5WzWKvW_normal.jpg",
          created_at: "Sun Jun 27 15:29:11 +0000 2021",
          lang: "ar",
        },
        {
          username: "uCloudify",
          text: "RT @PassphraseGen: Secure and random passphrase: escape pat trifling knife | Strength: 0.89787/0.99 | #passphrase #passwords #security #pyt…",
          full_name: "Robot by uCloudify.com",
          tweet_url:
            "https://twitter.com/1356552822859444225/status/1409171954767179778",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1396777856525651972/--a8nGIV_normal.jpg",
          created_at: "Sun Jun 27 15:29:09 +0000 2021",
          lang: "en",
        },
        {
          username: "BotRails",
          text: "RT @wnb_rb: Yesss, @isalafont's talk on the MJML, an email parser, from our last event is now available online🍿\nIsabelle inspired us throu…",
          full_name: "RubyOnRails Bot",
          tweet_url:
            "https://twitter.com/1293482108392894464/status/1409171969656905732",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1293502995670286336/VeAhy6ps_normal.jpg",
          created_at: "Sun Jun 27 15:29:13 +0000 2021",
          lang: "en",
        },
        {
          username: "PassphraseGen",
          text: "Secure and random passphrase: escape pat trifling knife | Strength: 0.89787/0.99 | #passphrase #passwords #security #python #lottery | PowerBall Pick: 13 - 54 - 53 - 62 - 54 | (3)",
          full_name: "SecurePassphrases",
          tweet_url:
            "https://twitter.com/3361492523/status/1409171932105396228",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/960640463962234880/lZq4XY3j_normal.jpg",
          created_at: "Sun Jun 27 15:29:04 +0000 2021",
          lang: "en",
        },
        {
          username: "BotRails",
          text: "RT @n3za_: The Best Ruby Blogs | https://t.co/wakhJcnCTj (from 24/06/2021)  #twitterbot #ruby #rails #rubyonrails #rubydeveloper #railsdeve…",
          full_name: "RubyOnRails Bot",
          tweet_url:
            "https://twitter.com/1293482108392894464/status/1409171931367186434",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1293502995670286336/VeAhy6ps_normal.jpg",
          created_at: "Sun Jun 27 15:29:04 +0000 2021",
          lang: "en",
        },
        {
          username: "cursortek",
          text: "CursorTek is #selling #bulk #data of 3k plus #categories like:\n#plumbing #electricians #contractors #architect #dentists #realtors #leads #HVAC #restaurants #hotels #roofing #flooring #daycare #gym #yoga #automotive #python #scrapy #java #php #emailslist\nhttps://t.co/aZD1HpqhRm https://t.co/4oOA0EVzWn",
          full_name: "cursortek",
          tweet_url:
            "https://twitter.com/931223747985575936/status/1409171923330809859",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1380754355645726720/7fHhI0AI_normal.jpg",
          created_at: "Sun Jun 27 15:29:02 +0000 2021",
          lang: "en",
        },
        {
          username: "DataChaz",
          text: "RT @DataChaz: Some of my favourite #Python video tutorials are on Vince's https://t.co/5WO6VJTUGC! 🐍🔥\n✓ 577 videos\n✓ 75 courses\n✓ Beginner…",
          full_name: "Charly Wargnier 🐍🎈",
          tweet_url: "https://twitter.com/19628766/status/1409171917299388416",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1362781887098454025/5cwyKZED_normal.jpg",
          created_at: "Sun Jun 27 15:29:00 +0000 2021",
          lang: "en",
        },
        {
          username: "motamaiz2030",
          text: "🔴اقدم لكم افضل الخدمات #البرمجية بكل احترافية👌\n1- #Java #C++ #C #CSS #HTML #Laravel\n#Matlab #PHP #Python #Django #Csharp \n2- #IoT #Arduino #Microcontrollers \n3- #ابحاث_تخرج - عروض #بوربوينت\n #تاسي",
          full_name: "مشارق للخدمات البحثية والخدمات المتعددة",
          tweet_url:
            "https://twitter.com/1216454673479217154/status/1409171907170164741",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1280504985516679177/B5WzWKvW_normal.jpg",
          created_at: "Sun Jun 27 15:28:58 +0000 2021",
          lang: "ar",
        },
        {
          username: "PythonExpertBot",
          text: "RT @Analytics_699: Quantum Optically Integrated Light Cage▶️\n#Analytics #MachineLearning #AI #Python #Rstats #Reactjs #IoT #IIoT #Linux #Se…",
          full_name: "Python Expert",
          tweet_url:
            "https://twitter.com/1151494493054484481/status/1409171904833929218",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1278999198176665602/o3B15TSY_normal.jpg",
          created_at: "Sun Jun 27 15:28:57 +0000 2021",
          lang: "en",
        },
        {
          username: "TheAngularBot",
          text: "RT @contempedia: ASPNET Core MVC - Up and Running Part 1 (.NET 5) | #udemy \n=> https://t.co/mBoazFP2Vy\n#webdevelopment #Typescript #VueJS…",
          full_name: "AngularBot",
          tweet_url:
            "https://twitter.com/1405502581086900226/status/1409171904041213956",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1405507166786625538/ley3PcjC_normal.jpg",
          created_at: "Sun Jun 27 15:28:57 +0000 2021",
          lang: "en",
        },
        {
          username: "PythonExpertBot",
          text: "RT @Analytics_699: OCTO & Google ☁️ Growth 🗾▶️\n#Analytics #MachineLearning #AI #Python #Rstats #Reactjs #IoT #IIoT #Linux #Serverless #flut…",
          full_name: "Python Expert",
          tweet_url:
            "https://twitter.com/1151494493054484481/status/1409171902694932483",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1278999198176665602/o3B15TSY_normal.jpg",
          created_at: "Sun Jun 27 15:28:57 +0000 2021",
          lang: "en",
        },
        {
          username: "PythonExpertBot",
          text: "RT @IainLJBrown: Ping An Makes Breakthrough in Artificial Intelligence-Driven Drug Research - PRNewswire\nRead more here: https://t.co/DVfG…",
          full_name: "Python Expert",
          tweet_url:
            "https://twitter.com/1151494493054484481/status/1409171899129733126",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1278999198176665602/o3B15TSY_normal.jpg",
          created_at: "Sun Jun 27 15:28:56 +0000 2021",
          lang: "en",
        },
        {
          username: "TheAngularBot",
          text: "RT @WeArePirple: In javascript, what is the value of foo?\n#javascript #js #es9 #es8 #es7 #es6 #es5 #ecmascript #angular #reactjs #vuejs #c…",
          full_name: "AngularBot",
          tweet_url:
            "https://twitter.com/1405502581086900226/status/1409171886651625477",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1405507166786625538/ley3PcjC_normal.jpg",
          created_at: "Sun Jun 27 15:28:53 +0000 2021",
          lang: "en",
        },
        {
          username: "Bills_Bot",
          text: "RT @wpsitework: #100daysofcode day 31 2021-06-26\nSetup #MySQL, #Java, #EclipseIDE on Windows10. Adding GUI interface to program to display…",
          full_name: "Bills Bot",
          tweet_url:
            "https://twitter.com/1364497572509880322/status/1409171877344448518",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1364497797517479944/clU3j0DW_normal.jpg",
          created_at: "Sun Jun 27 15:28:51 +0000 2021",
          lang: "en",
        },
        {
          username: "py_data_sci",
          text: "RT @akbarth3great: #python #datascience INTRODUCTION TO DATA SCIENCE https://t.co/JI8X1COh8D",
          full_name: "Python for Data Science",
          tweet_url:
            "https://twitter.com/1288754505211883521/status/1409171864899969029",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1288765343339614208/JNqvhKEe_normal.jpg",
          created_at: "Sun Jun 27 15:28:48 +0000 2021",
          lang: "en",
        },
        {
          username: "RobotProud",
          text: "RT @wpsitework: #100daysofcode day 31 2021-06-26\nSetup #MySQL, #Java, #EclipseIDE on Windows10. Adding GUI interface to program to display…",
          full_name: "Very Proud Robot",
          tweet_url:
            "https://twitter.com/1251909062222020609/status/1409171857945812996",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1251909382570418183/3k_ZJMYF_normal.jpg",
          created_at: "Sun Jun 27 15:28:46 +0000 2021",
          lang: "en",
        },
        {
          username: "100xcode",
          text: "RT @wpsitework: #100daysofcode day 31 2021-06-26\nSetup #MySQL, #Java, #EclipseIDE on Windows10. Adding GUI interface to program to display…",
          full_name: "🤖 #100DaysOfCode",
          tweet_url:
            "https://twitter.com/1000814755664150528/status/1409171857534640128",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1243649090048663552/HVlhkgCM_normal.jpg",
          created_at: "Sun Jun 27 15:28:46 +0000 2021",
          lang: "en",
        },
        {
          username: "TheAngularBot",
          text: "RT @CouponFreeDisc8: Coupons Free Discount - Complete Web Design Course: HTML, CSS, Javascript and jQuery Courses -> https://t.co/ReIaRbhPe…",
          full_name: "AngularBot",
          tweet_url:
            "https://twitter.com/1405502581086900226/status/1409171856758874116",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1405507166786625538/ley3PcjC_normal.jpg",
          created_at: "Sun Jun 27 15:28:46 +0000 2021",
          lang: "en",
        },
        {
          username: "TheAngularBot",
          text: "RT @offersndeal2020: https://t.co/GKi4JW2vsZ\nHacker Rank: Day 5 Loops \n#HackerRank #PHP #phpday #Operators #programming #blog #programmer…",
          full_name: "AngularBot",
          tweet_url:
            "https://twitter.com/1405502581086900226/status/1409171843664261124",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1405507166786625538/ley3PcjC_normal.jpg",
          created_at: "Sun Jun 27 15:28:43 +0000 2021",
          lang: "en",
        },
        {
          username: "cameliaclement",
          text: "RT @wpsitework: #100daysofcode day 31 2021-06-26\nSetup #MySQL, #Java, #EclipseIDE on Windows10. Adding GUI interface to program to display…",
          full_name: "Camila Clement Bot",
          tweet_url:
            "https://twitter.com/1274628718913155075/status/1409171841617367049",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1386703943216996361/TRrQbc0o_normal.jpg",
          created_at: "Sun Jun 27 15:28:42 +0000 2021",
          lang: "en",
        },
        {
          username: "wpsitework",
          text: "#100daysofcode day 31 2021-06-26\nSetup #MySQL, #Java, #EclipseIDE on Windows10. Adding GUI interface to program to display current actions and database result",
          full_name: "WordPress Site Work",
          tweet_url:
            "https://twitter.com/1113412866810568705/status/1409171835942486029",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1113414458162982912/WPHN-IEZ_normal.jpg",
          created_at: "Sun Jun 27 15:28:41 +0000 2021",
          lang: "en",
        },
        {
          username: "motamaiz2030",
          text: "لدينا مجموعة من المحترفين القادرين علي حل الواجبات البرمجية بكفاءه 😉❤️\nواجبات ومشاريع لكل من :\n#بايثون\n#Java \n#php\n#HTML \n#Android \n#Website \n#cplusplus \n#aspnet \n#javascript \n#Python \n#مشاريع_تخرج\n#جامعة_الكويت #جامعة_الملك_سعود #جامعه_القصيم #",
          full_name: "مشارق للخدمات البحثية والخدمات المتعددة",
          tweet_url:
            "https://twitter.com/1216454673479217154/status/1409171834390581254",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1280504985516679177/B5WzWKvW_normal.jpg",
          created_at: "Sun Jun 27 15:28:41 +0000 2021",
          lang: "ar",
        },
        {
          username: "TheAngularBot",
          text: "RT @akram_cse: https://t.co/cc8pBTMCqg\nHacker Rank: Day 5 Loops \n#HackerRank #PHP #phpday #Operators #programming #blog #programmer \n#php…",
          full_name: "AngularBot",
          tweet_url:
            "https://twitter.com/1405502581086900226/status/1409171817940537345",
          user_profile_image:
            "http://pbs.twimg.com/profile_images/1405507166786625538/ley3PcjC_normal.jpg",
          created_at: "Sun Jun 27 15:28:37 +0000 2021",
          lang: "en",
        },
      ],
    };
  },

  mounted() {
    // const channel = PUSHER.subscribe(CHANNEL);
    // channel.bind(EVENT, (data) => {
    //   this.tweets.push(data);
    //   console.log(this.tweets);
    // });
  },

  beforeDestroy() {
    PUSHER.unsubscribe(CHANNEL);
  },
};
</script>