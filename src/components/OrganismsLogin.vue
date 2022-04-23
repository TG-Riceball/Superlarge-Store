<script setup lang="ts">
import LoginPanel from '@/components/MoleculesLoginPanel.vue'
</script>

<template>
    <section class="sectionLogin">
        <LoginPanel/>
    </section>
</template>

<style lang="sass">
.sectionLogin
    display: flex
    justify-content: center
    background: var(--gray-50)
    padding: 4rem 0
</style>