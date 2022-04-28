<script setup lang="ts">
import SignupBox from '@/components/MoleculeSignupBox.vue'
import StoreMenu from '@/components/MoleculeStoreMenu.vue'
import StoreGallery from '@/components/MoleculeStoreGallery.vue'
</script>

<template>
    <div class="store">
        <div class="container">
            <div class="store__layout">
                <SignupBox />
                <StoreMenu />
                <StoreGallery />
            </div>
        </div>
    </div>
</template>
<style lang="sass">
.store
    padding: 2rem 0
    background: var(--gray-100)

.store__layout
    margin-top: -4rem
    display: grid
    gap: .5rem
    grid-template-areas: "banner" "signup" "menu" "gallery"

    @include media-lg
        grid-template-columns: 300px 1fr
        grid-template-rows: 300px 1fr
        grid-template-areas: "signup banner" "menu gallery"
</style>
