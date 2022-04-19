<script setup lang="ts">
    import FeedbackSwiper from "@/components/MoleculesFeedbackSwiper.vue"
</script>
<template>
    <section class="homeSection sectionFeedback container">
        <div class="sectionDialog">
            <h2 class="sectionDialog__heading">We are<br>
<span class="marked">Burger Lover’s</span>.</h2>
        </div>
        <FeedbackSwiper/>
    </section>
</template>

<style lang="sass">
.sectionFeedback
    display: flex
    flex-direction: column
</style>