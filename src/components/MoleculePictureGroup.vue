<script setup lang="ts">
import PictureFrame from '@/components/AtomPictureFrame.vue'
</script>

<template>
    <div class="pictureFrameGroup">
        <PictureFrame />
    </div>
</template>

<style lang="sass">
.pictureFrameGroup
    height: 500px
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    position: relative
</style>
