<script setup lang="ts">
import Rating from '@/components/AtomRating.vue'
defineProps({
    content: {
        required: true,
        type: String,
    },
    person: {
        required: true,
        type: String,
    },
    thumbnail: {
        required: true,
        type: String,
    },
    rating: {
        type: Number,
        default: 1,
    },
})
</script>

<template>
    <li class="feedbackItem">
        <p>
            {{ content }}
        </p>
        <div class="feedbackItem__person">
            <img
                class="feedbackItem__thumbnail"
                :src="thumbnail"
                loading="lazy"
                alt="Feedback Person's Thumbail"
            />
            <p class="feedbackItem__name">{{ person }}</p>
            <Rating :rating="rating" />
        </div>
    </li>
</template>

<style lang="sass">
.feedbackItem
    border: 1px solid var(--light-ghost)
    padding: 2rem
    border-radius: var(--rounded-lg)

.feedbackItem__person
    margin-top: 1.5rem
    display: flex
    align-items: center

.feedbackItem__thumbnail
    border-radius: 50%
    margin: 0
    margin-right: 1rem
</style>
