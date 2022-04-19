<template>
    <figure class="pictureFrame" >
        <img src="https://picsum.photos/300/200" alt="">
        <figcaption>這裡是大廚的照片</figcaption>
    </figure>
</template>

<style lang="sass">
.pictureFrame
    color: var(--gray-900)
    position: absolute
    width: 300px
    height: 200px
    background: var(--gray-50)
    border: .5rem solid var(--gray-50)
    border-radius: 5px
    padding-bottom: 2rem

    &:nth-of-type(1)
        transform: rotate(-2deg)
        

    &:nth-of-type(2)
        transform: rotate(-15deg) translate(-25%, 30%)
        
</style>