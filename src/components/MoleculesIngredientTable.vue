<script setup>
    import Ingredient from '@/components/AtomIngredient.vue'
</script>

<template>
    <ul class="ingredientTable">
        <Ingredient title="當季新鮮蔬果" description="最香甜的當季現採蔬果" />
        <Ingredient title="當季新鮮蔬果" description="最香甜的當季現採蔬果"/>
        <Ingredient title="當季新鮮蔬果" description="最香甜的當季現採蔬果"/>
        <Ingredient title="當季新鮮蔬果" description="最香甜的當季現採蔬果"/>

    </ul>
</template>

<style lang="sass">
.ingredientTable
    display: flex
    justify-content: center
    flex-wrap: wrap
    > *
        flex: 1 1 150px
        
        &:nth-last-of-type(1)
            aspect-ratio: 3/1


</style>