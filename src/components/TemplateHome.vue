<script setup lang="ts">
import Navbar from '@/components/OrganismNavbar.vue'
import Hero from '@/components/OrganismHero.vue'
import About from '@/components/OrganismAbout.vue'
import Chef from '@/components/OrganismChef.vue'
import Feedback from '@/components/OrganismFeedback.vue'
import Reservation from '@/components/OrganismReservation.vue'
import Footer from '@/components/OrganismFooter.vue'
</script>

<template>
    <Navbar />
    <main class="home">
        <Hero />
        <About />
        <Chef />
        <Feedback />
        <Reservation />
    </main>
    <Footer />
</template>

<style lang="sass">
.home
    background: var(--gray-900)
    color: var(--gray-50)
</style>
