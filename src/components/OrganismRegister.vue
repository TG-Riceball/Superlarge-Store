<script setup lang="ts">
import RegisterPanel from '@/components/MoleculeRegisterPanel.vue'
</script>

<template>
    <section class="sectionLogin">
        <RegisterPanel />
    </section>
</template>

<style lang="sass">
.sectionLogin
    display: flex
    justify-content: center
    background: var(--gray-50)
    padding: 2rem 0
</style>
