<script setup lang="ts">
import Navbar from '@/components/OrganismsNavbar.vue'
import Hero from '@/components/OrganismsHero.vue'
import About from '@/components/OrganismsAbout.vue'
import Chef from '@/components/OrganismsChef.vue'
import Feedback from '@/components/OrganismsFeedback.vue'
import Reservation from '@/components/OrganismsReservation.vue'
import Footer from '@/components/OrganismsFooter.vue'
</script>

<template>
<Navbar/>
<main class="home">
    <Hero/>
    <About/>
    <Chef/>
    <Feedback/>
    <Reservation/>
</main>
<Footer/>
</template>

<style lang="sass">
.home
    background: var(--gray-900)
    color: var(--gray-50)

</style>