<script setup>
import Ingredient from '@/components/AtomIngredient.vue'
</script>

<template>
    <ul class="ingredientTable">
        <Ingredient title="當日新鮮蔬果" description="最香甜的當季現採蔬果" />
        <Ingredient title="澳洲生草飼牛" description="嚴選高品質餐材" />
        <Ingredient title="土法醃製醬料" description="私房醬料吃過都說好" />
        <Ingredient
            title="法國哈迪羊起司"
            description="濃郁香甜的傳統發酵起司"
        />
    </ul>
</template>

<style lang="sass">
.ingredientTable
    margin-top: 2rem
    display: flex
    justify-content: center
    flex-wrap: wrap
    > *
        flex: 1 1 200px

        &:nth-last-of-type(1)
            aspect-ratio: 3/1
</style>
