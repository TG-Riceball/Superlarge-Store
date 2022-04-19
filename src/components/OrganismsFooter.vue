<script>

</script>

<template>
<footer class="footer">
    <div class="container">
        <div class="footer__action">
            <p class="footer__quote">想吃道地的美式手工漢堡，
        <br>
        不需要理由！</p>

            <div class="footer__cta">
                <address class="footer__address">臺中市北區三民路三段129號</address>
                <a class="footer__phone" href="tel:555-666-777">(+886) 09 3536 1596</a>
            </div>
        </div>

        <div class="footer__main">
            <div class="footer__brand">
                <h2>
                    <a href="#">
                        SUPER<br><span class="marked">LARGE</span>
                    </a>
                </h2>
                <div class="footerBrand__inner">
                    <p class="footer__slogan">Make Unforgettable Flavor.</p>
                    <ul class="footer__social">
                        <li class="footerSocial__item"><a href="#">Instagram</a></li>
                        <li class="footerSocial__item"><a href="#">Facebook</a></li>
                        <li class="footerSocial__item"><a href="#">Youtube</a></li>
                        
                    </ul>
                </div>
            </div>

            <ul class="footerLinks">
                <li class="footerLinks__item"><a class="footerLinks__link" href="#">線上商店</a></li>
                <li class="footerLinks__item"><a class="footerLinks__link" href="#">關於我們</a></li>
                <li class="footerLinks__item"><a class="footerLinks__link" href="#">隱私權公告</a></li>
                <li class="footerLinks__item"><a class="footerLinks__link" href="#">隱私權公告</a></li>
                <li class="footerLinks__item"><a class="footerLinks__link" href="#">隱私權公告</a></li>
            </ul>
        </div>

        <div class="copyright">@ SUPERLARGE. All Rights Reserved</div>
    </div>
</footer>
</template>

<style lang="sass">
.footer
    background: var(--gray-900)
    color: var(--gray-50)
    padding: 0 1rem
    padding-top: 4rem

.footer__action
    border-radius: 5px
    display: flex
    flex-direction: column
    justify-content: space-between
    padding: 2rem 1rem
    background: var(--primary)
    color: var(--gray-900)
    
    @include media-lg
        padding: 2rem 0
        border-bottom: 1px solid var(--light-ghost)
        border-radius: 0
        color: var(--gray-50)
        background: unset
        text-align: left
        flex-direction: row

.footer__quote
    font-weight: bold
    font-size: 1.8rem
    line-height: 1.4

.footer__cta
    font-size: 1.5rem
    margin-top: 2rem
    @include media-lg
        margin: 0

.footer__phone
    color: var(--gray-900)
    @include media-lg
        color: var(--gray-50)

.footer__main
    position: relative
    display: flex
    flex-direction: column
    border-bottom: 2px solid var(--light-ghost)
    padding: 2rem 1rem


    &::after
        content: ''
        width: 100%
        background: var(--light-ghost)
        height: 1px
        position: absolute
        bottom: -8px
        left: 0

    @include media-lg
        padding: 2rem 0
        flex-direction: row
        justify-content: space-between

.footer__brand
    font-size: 2rem
    @include media-lg
        display: flex


.footerBrand__inner
    @include media-lg
        margin-left: 2rem
        align-self: end

.footer__slogan
    font-size: 1.5rem
    align-self: end

.footer__social
    font-size: 1rem
    color: var(--gray-50)

.footerSocial__item
    padding: 0 1rem
    display: inline-block
    position: relative

    &:nth-of-type(1)
        padding-left: 0

    &::after
        content: '/'
        position: absolute
        top: 0
        right: 0        
        transform: translate(50%)

    &:nth-last-of-type(1)  
        &::after
            content: ''
        

.footerLinks
    color: var(--gray-50)
    display: flex
    flex-wrap: wrap
    margin-top: 2rem

.footerLinks__item
    align-self: flex-end

.footerLinks__link
    padding-right: 1rem
    padding-bottom: 1rem
    display: inline-block

    @include media-lg
        padding-bottom: 0
    

.copyright
    font-size: .9rem
    padding: 2rem 0
</style>