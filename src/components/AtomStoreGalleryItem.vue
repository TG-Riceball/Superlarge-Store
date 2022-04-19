<template>
    <a href="#" class="storeGallery__item">
        <img class="storeGalleryItem__img" height="200" src="https://res.cloudinary.com/thegroup/image/upload/h_200/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" alt="">
        <h3 class="storeGalleryItem__title">經典漢堡套餐</h3>
        
        <div class="storeGalleryItem__price">120$</div>

        <div class="storeGalleryItem__like">
            @
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

    .storeGalleryItem__img
        margin: 0 auto
        width: 200px
        height: 200px
        object-fit: contain

    .storeGalleryItem


    .storeGalleryItem__like
        position: absolute
        top: 0
        right: 0
</style>