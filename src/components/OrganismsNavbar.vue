<script setup lang="ts">
import Menu from '@/components/OrganismsMenu.vue'
import { ref } from 'vue'
let menuToggle = ref(false)
</script>

<template>
    <Menu :isOpen=menuToggle />
    <nav class="navbar">
        <div class="container navbar__inner">
            <h2>
                <a href="/">
                    SUPERLARGE
                </a>
            </h2>

            <div class="navbar__action">

                <button class="navbar__btn navbar__shop">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                </button>

                <button @click="menuToggle = !menuToggle" class="navbar__btn navbar__hamburger" aria-expanded="false" aria-lable="導覽列按鈕">
                        <div class="hamburger">
                            <div class="hamburger__bar"></div>
                            <div class="hamburger__bar"></div>
                            <div class="hamburger__bar"></div>
                        </div>
                </button>
            </div>
        </div>
    </nav>
</template>

<style lang="sass">
.navbar
    position: fixed
    top: 0
    left: 0
    z-index: 100
    width: 100%
    padding: 0 1rem

.navbar__inner
    display: flex
    justify-content: space-between
    align-items: center
    height: 6rem

.navbar__action
    display: flex
    align-items: center

.navbar__btn
    border: none
    background: none

.navbar__hamburger


    &:target, &:focus
        border-color: var(--primary)

.hamburger__bar
    width: 24px
    height: 3px
    margin: 5px
    transition: .3s ease-in-out
    background: var(--gray-900)

</style>