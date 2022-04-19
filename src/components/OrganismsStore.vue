<script setup lang="ts">
import SignupBox from '@/components/MoleculesSignupBox.vue'
import StoreMenu from '@/components/MoleculesStoreMenu.vue'
import StoreGallery from '@/components/MoleculesStoreGallery.vue'
</script>

<template>
    <div class="store">        
        <div class="container">
            <div class="store__layout">
                <SignupBox/>
                <StoreMenu/>
                <StoreGallery/>
            </div>
        </div>
    </div>
</template>
<style lang="sass">
.store
    background: var(--gray-100)

.store__layout
    display: grid
    gap: .5rem
    grid-template-areas: "banner" "signup" "menu" "gallery"

    @include media-lg
        grid-template-columns: 300px 1fr
        grid-template-rows: 300px 1fr
        grid-template-areas: "signup banner" "menu gallery"

</style>