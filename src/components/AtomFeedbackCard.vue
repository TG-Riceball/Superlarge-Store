<script setup lang="ts">
defineProps({
    content: {
        required: true,
        type: String
    },
    person: {
        required: true,
        type: String
    },
    thumbnail: {
        required: true,
        type: String
    }
})

</script>
<template>
    <ul class="feedbackList">
        <li>
            {{ content }}
            <div class="feedbackList__person">
                <img class="feedbackList__thumbnail" :src=thumbnail alt="Feedback Person's Thumbail">
                <p class="feedbackList__name">{{ person }}</p>
            </div>

        </li>
    </ul>
</template>


<style lang="sass">
    .feedbackList
        border: 1px solid var(--light-ghost)
        padding: 2rem

    .feedbackList__person
        margin-top: 1.5rem
        display: flex
        align-items: center
        

    .feedbackList__thumbnail
        border-radius: 50%
        margin: 0
        margin-right: 1rem

</style>