<script setup lang="ts">
defineProps({
    rating: {
        type: Number,
        default: 1,
    },
})
</script>
<template>
    <ul :key="index" class="rating">
        <li v-for="index in rating" class="rating__item">
            <svg height="25" width="23" class="rating__star">
                <polygon
                    points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
                    style="fill: var(--primary)"
                />
            </svg>
        </li>
    </ul>
</template>

<style lang="sass">
.rating
    margin-left: 1rem

.rating__item
    display: inline-block
</style>
