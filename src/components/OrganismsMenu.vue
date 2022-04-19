<script setup lang="ts">
defineProps({
    isOpen: {
        required: true,
        type: Boolean
    }
})



</script>


<template>
    <div class="menu" v-show=isOpen @click="isOpen = !isOpen" >

        <h2 class="menu__heading">
            <a  href="/">
                SUPER<span class="marked">LARGE</span>
            </a>
        </h2>

        <ul class="menu__list">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>
</template>

<style lang="sass">
    .menu
        z-index: 200
        position: fixed
        display: flex
        flex-direction: column
        justify-content: center
        top: 0
        left: 0
        width: 100%
        height: 100%
        background: var(--gray-900)
        color: var(--gray-50)
        text-align: center
        padding: 1rem

        @include media-lg
            justify-content: space-between
            text-align: left

    .menu__heading
        margin-bottom: 2rem
        display: inline-block
        font-size: clamp(3.5rem, 4vw + 2.5rem, 9.063rem)
        
    .menu__list
        display: flex
        flex-direction: column
        justify-content: space-between

        font-size: 4rem



    
</style>