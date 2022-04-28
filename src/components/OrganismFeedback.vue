<script setup lang="ts">
import FeedbackSwiper from '@/components/MoleculeFeedbackSwiper.vue'
</script>
<template>
    <section class="homeSection sectionFeedback container">
        <div class="sectionDialog">
            <h2 class="sectionDialog__heading">
                We are<br />
                <span class="marked">Burger Lover’s</span>.
            </h2>
            <p class="sectionDialog__paragraph">
                我們的位置不多，事先預約確保您能輕鬆的和我們一同享受經典美式漢堡的快樂，如有特殊飲食需求、備註可以在表單中回應給我們！
            </p>
        </div>
        <FeedbackSwiper />
    </section>
</template>

<style lang="sass">
.sectionFeedback
    display: flex
    flex-direction: column
</style>
