<script setup lang="ts">
import StoreBanner from '@/components/AtomStoreBanner.vue'
import StoreGalleryItem from '@/components/AtomStoreGalleryItem.vue'
</script>

<template>
    <StoreBanner />
    <div class="storeGallery">
        <h2 class="screenreader-only">線上商城</h2>
        <div class="storeGallery__layout">
            <StoreGalleryItem></StoreGalleryItem>
            <StoreGalleryItem></StoreGalleryItem>
            <StoreGalleryItem></StoreGalleryItem>
            <StoreGalleryItem></StoreGalleryItem>
            <StoreGalleryItem></StoreGalleryItem>
            <StoreGalleryItem></StoreGalleryItem>
            <StoreGalleryItem></StoreGalleryItem>
        </div>
    </div>
</template>

<style lang="sass">
.storeGallery
    grid-area: gallery

.storeGallery__layout
    display: grid
    gap: .5rem
    grid-template-columns: 1fr 1fr
    @include media-lg
        grid-template-columns: 1fr 1fr 1fr
</style>
