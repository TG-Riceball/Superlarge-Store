<script setup lang="ts">
import LoginPanel from '@/components/MoleculeLoginPanel.vue'
</script>

<template>
    <section class="sectionLogin">
        <LoginPanel />
    </section>
</template>

<style lang="sass">
.sectionLogin
    display: flex
    justify-content: center
    background: var(--gray-50)
    padding: 2rem 0
</style>
