<script setup lang="ts">
defineProps({
    title: {
        required: true,
        type: String,
    },
    description: {
        required: true,
        type: String,
    },
})
</script>
<template>
    <li class="ingredient">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
    </li>
</template>
<style lang="sass">
.ingredient
    aspect-ratio: 1
    border: 1px solid var(--light-ghost)
    padding: 1rem
    opacity: .6
    transition: opacity .3s

    &:hover, &:focus
        opacity: 1
</style>
