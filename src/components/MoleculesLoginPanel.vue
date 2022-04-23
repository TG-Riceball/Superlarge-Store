<script setup lang="ts">
import TogglePassword from '@/components/AtomTogglePassword.vue'
</script>
<template>




    <form class="loginPanel" id="login">
        <h2>登入會員</h2>
        <button class="btn">使用 Facebook 登入</button>
        <button class="btn">使用 Google 登入</button>
        <hr>
        <label for="e-mail">電子信箱</label>
        <input id="e-mail" placeholder="請輸入您的電子信箱" type="email">
        <label for="password">密碼</label>
        <input id="password" placeholder="請輸入您的密碼" type="password">
        <TogglePassword/>
        <button class="btn btn--solid" type="submit">
        登入
        </button>
    </form>
</template>

<style lang="sass">
.loginPanel
    background: white
    padding: 2rem
    display: flex
    flex-direction: column
</style>