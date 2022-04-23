<template>
    <div class="signupBox">
        <h2 class="signupBox__heading">
        ~ 會員享優惠 ~
        <br>
        全館折扣
        <span class="sale">85折</span>
        </h2>
        <div class="signupBox__btnGroup">
            <a class="btn signupBox__btn" href="#">登入</a>
            <a class="btn signupBox__btn" href="#">註冊</a>
        </div>

    </div>
</template>

<style lang="sass">
    .signupBox
        border-radius: var(--rounded-lg)
        display: flex
        flex-direction: column
        justify-content: space-between
        text-align: center
        background: var(--primary)
        border: 2px solid var(--gray-100)
        overflow: hidden

        grid-area: signup

    .signupBox__heading
        font-size: 1.6rem
        width: 100%
        height: 100%
        display: flex
        flex-direction: column
        justify-content: center
        align-content: center

    .sale
        font-size: 5rem

    .signupBox__btnGroup
        display: flex
        width: 100%
        border-top: 2px solid var(--dark-ghost)

    .signupBox__btn
        flex: 1

        &:nth-of-type(1)
            border-right: 2px solid var(--dark-ghost)

</style>