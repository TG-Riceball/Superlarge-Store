<script lang="ts">
  // Import Swiper Vue.js components
  import FeedbackCard from "@/components/AtomFeedbackCard.vue"
      
  import { Swiper, SwiperSlide } from 'swiper/vue';
  // Import Swiper styles
  import 'swiper/css';

  export default {
    components: {
      Swiper,
      SwiperSlide,
      FeedbackCard
    },
    setup() {

      const onSwiper = (swiper:String) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
  };

</script>

<template>

<div class="container">
  <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><FeedbackCard content="微定外什新金社人實成有差是了多一，告該強冷女實吃後花！速方者：會特來廣物？場學獲…以。" person="王小明" thumbnail="https://res.cloudinary.com/thegroup/image/upload/c_fill,w_60/v1650385201/github/superlarge/nkaeuirljbuchy58a2cb.jpg"/></swiper-slide>
    <swiper-slide><FeedbackCard content="天並子歡急的雄技是人們；起許教身己資長發了勢用人口們展進公經房意求；動來子可小識實，臺導朋的原。的提作年！者難興著沒是，大上候孩小統叫和華的" person="王小明" thumbnail="https://res.cloudinary.com/thegroup/image/upload/c_fill,w_60/v1650385201/github/superlarge/zopzbudlivni161xc5nv.jpg"/></swiper-slide>
    <swiper-slide><FeedbackCard content="因銀自你、爸的以員持條法呢機國他天天上皮單不學市不程具其刻功！世去見票；利南令時無破力弟一民不門起媽因！" person="王小明" thumbnail="https://res.cloudinary.com/thegroup/image/upload/c_fill,w_60/v1650385201/github/superlarge/cvqonagt9agb9xldkoxg.jpg"/></swiper-slide>
    <swiper-slide><FeedbackCard content="課：死司手；系小文線，於樓你今叫界母成候錢況：共要人錢始東過高有地的，兒品說景來間頭部進參女方品友，和可進回，輕顧象帶的、關山方一有大多邊、格完小高海及家每，在物新行間進流。不高合意年象小程維清什論消軍念質影器，種活看議其，唱提" person="王小明" thumbnail="https://res.cloudinary.com/thegroup/image/upload/c_fill,w_60/v1650385201/github/superlarge/wi2vbcqujcdzswjkwpvm.jpg"/></swiper-slide>
    <swiper-slide><FeedbackCard content="麼了一事上；不日合。加用我過國此再，急不難弟且地是……麼題都古一、少運死民雖以導不朋行房獲不影，立問景車家。前轉我作問交著……生雄不他，東所會平是美操" person="王小明" thumbnail="https://res.cloudinary.com/thegroup/image/upload/c_fill,w_60/v1650385201/github/superlarge/nkaeuirljbuchy58a2cb.jpg"/></swiper-slide>
    <swiper-slide><FeedbackCard content="叫親對理紅戰到不文經一時同北。" person="王小明" thumbnail="https://res.cloudinary.com/thegroup/image/upload/c_fill,w_60/v1650385201/github/superlarge/nkaeuirljbuchy58a2cb.jpg"/></swiper-slide>
    ...
  </swiper>
</div>

</template>
