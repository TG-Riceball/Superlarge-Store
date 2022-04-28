<script setup>
import { ref } from 'vue'

let isLiked = ref(true)
function toggleLike() {
    isLiked = !isLiked.value
}
</script>
<template>
    <a href="#" class="storeGallery__item">
        <img
            class="storeGalleryItem__img"
            height="200"
            src="https://res.cloudinary.com/thegroup/image/upload/h_200/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp"
            alt=""
        />
        <h3 class="storeGalleryItem__title">經典漢堡套餐</h3>

        <div class="storeGalleryItem__price">120$</div>

        <div class="storeGalleryItem__like" @click="toggleLike">
            <svg
                v-show="isLiked"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
            >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                    d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"
                />
            </svg>
        </div>
    </a>
</template>

<style lang="sass">
.storeGallery__item
    background: var(--gray-50)
    position: relative
    display: flex
    flex-direction: column
    justify-content: center
    text-align: center
    padding: 1rem 0
    transition: transform .3s
    border-radius: var(--rounded-lg)


    &:hover, &:target, &:focus
        transform: scale(0.95)

.storeGalleryItem__img
    margin: 0 auto
    width: 200px
    height: 200px
    padding: 0 1rem
    object-fit: contain
    @include media-lg
        padding: 0

.storeGalleryItem__like
    position: absolute
    top: 0
    right: 0
    margin: 1rem

.storeGalleryItem__title
    font-size: 1.25rem
    font-weight: 400

.storeGalleryItem__price
    font-size: 1.5rem
    font-weight: 600
</style>
