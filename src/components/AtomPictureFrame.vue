<template>
    <figure class="pictureFrame">
        <img
            class="picutreFrame__img"
            src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_1000,h_500/v1650710108/github/superlarge/vlfx6r98ypdzl9qchw7o.jpg"
            alt="picture in frame - our chef"
        />
        <figcaption class="pictureFrame__figcaption">
            這裡是大廚的照片
        </figcaption>
    </figure>
</template>

<style lang="sass">
.pictureFrame
    position: relative
    width: 100%
    height: 100%

    @include media-lg
        border: .5rem solid var(--gray-50)
        border-bottom: none
        border-radius: var(--rounded)
        width: 80%
        max-height: 400px

        &:nth-of-type(1)
            transform: rotate(-5deg)

.picutreFrame__img
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    @include media-lg


.pictureFrame__figcaption
    display: none

    @include media-lg
        display: block
        position: absolute
        bottom: 0
        left: 0
        background: var(--gray-50)
        color: var(--gray-900)
        padding: .5rem 0
        width: 100%
</style>
