<template>
    <div class="signupBox">
        <h2 class="signupBox__heading">~ 會員享優惠 ~<br>全館<span class="sale">75</span>折</h2>
        <div>
            <a class="btn btn--solid" href="#">登入</a>
            <a class="btn" href="#">註冊</a>
        </div>

    </div>
</template>

<style lang="sass">
    .signupBox
        display: flex
        flex-direction: column
        justify-content: center
        text-align: center
        background: var(--primary)
        border: 2px solid var(--gray-100)
        padding: 1rem
        grid-area: signup

    .signupBox__heading
        font-size: 1.6rem

    .sale
        font-size: 5rem

</style>