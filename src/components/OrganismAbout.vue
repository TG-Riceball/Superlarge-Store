<script setup>
import IngredientTable from '@/components/MoleculeIngredientTable.vue'
</script>

<template>
    <section class="homeSection sectionAbout">
        <div class="container divide-2">
            <div class="sectionDialog">
                <h2 class="sectionDialog__heading">
                    Unforgettable<br /><span class="marked">Flavor</span>.
                </h2>
                <p class="sectionDialog__paragraph">
                    我們製作讓你回味無窮的漢堡，自2001年開始已經填飽了無數的人的肚子，歡迎來嘗嘗我們手工客製化漢堡的魅力！近期開幕的線上商城在疫情期間讓我們24小時在線上為您服務。
                </p>
                <IngredientTable />
            </div>
            <img
                width="600px"
                height="1000"
                src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_600,h_1000/v1650659828/github/superlarge/o6oz5lci6aalwpv5lo51.webp"
                alt=""
            />
        </div>
    </section>
</template>
<style lang="sass">
.sectionAbout
    position: relative
    z-index: 10
    background: var(--gray-900)
</style>
