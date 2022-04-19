<script lang="ts">
</script>

<template>
    <section class="hero">
        <div class="hero__content">
            <p class="hero__subHeading">SINCE 2011</p>
            <h1 class="hero__heading">SUPERLARGE<br>BURGER</h1>
            <p class="hero__subHeading">Unforgettable Flavor</p>
            <div class="btnGroup">
                <a class="btn btn--ghost" href="#signup">線上預約位置</a>
                <a class="btn btn--solid" href="/shop">線上商城</a>
            </div>
        </div>

        <picture class="hero__img">
            <div class="hero__floatingDot"></div>
            <div class="hero__floatingDot"></div>
            <div class="hero__floatingDot"></div>
            <div class="hero__floatingDot"></div>

            
             <source srcset="https://res.cloudinary.com/thegroup/image/upload/c_fit,h_500,w_585/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" media="(min-width: 75em)" width="585" height="500">

            <source srcset="https://res.cloudinary.com/thegroup/image/upload/c_fit,h_300,w_300/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" type="image/webp"> 
            
            <img width="300" height="300" loading="lazy" src="https://res.cloudinary.com/thegroup/image/upload/c_fit,h_300,w_300/v1650253862/github/superlarge/gibxazzymeop8og9hklc.png" alt="">
        </picture>

    </section>
</template>

<style lang="sass">
.hero
    padding-top: 6rem
    position: relative
    color: var(--gray-900)
    display: flex
    flex-direction: column
    justify-content: center
    width: 100%
    min-height: 100vh
    background: var(--primary)
    text-align: center

.hero__content
    z-index: 10
    height: 70%
    display: flex
    flex-direction: column
    justify-content: center

.hero__heading
    font-size: clamp(3.5rem, 5vw + 2.5rem, 9.063rem)
    line-height: .9

.hero__subHeading
    font-size: clamp(1rem, 2vw + 0.5rem, 1.875rem)
    font-weight: 400
    line-height: 2.5

.hero__img
    z-index: 1
    height: 40%
    position: relative
    width: fit-content
    margin: 0 auto
    animation: float 8s ease-in-out infinite
    display: flex
    justify-content: flex-end
    
    img
        transform: translateY(100px)

.hero__floatingDot
    z-index: -1
    position: absolute
    top: 0
    left: 0
    width: 50px
    height: 50px
    border-radius: 50%
    background: var(--gray-50)
    animation: float 4s ease-in-out infinite

    &:nth-of-type(2)
        top: 50%

        width: 800px
        height: 800px

    &:nth-of-type(3)
        left: 100%
        top: 50%
        width: 100px
        height: 100px

    &:nth-of-type(4)
        width: 80px
        height: 80px
        left: 0%
        top: 40%

</style>