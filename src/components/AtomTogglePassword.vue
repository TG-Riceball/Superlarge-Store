<script setup lang="ts">

function togglePasswordVisibility(){

    const password = (<HTMLInputElement>document.getElementById("password"));
    if (password.type === "password"){
        password.type = "text"
    } else {
        password.type = "password"
    }
}
</script>

<template>
    <div class="togglePassword">
        <input id="showPassword" type="checkbox" @click="togglePasswordVisibility">
        <label class="togglePassword__label" for="showPassword">顯示密碼</label>
    </div>
</template>

<style lang="sass">
.togglePassword
    display: flex
    padding: 1rem 0



.togglePassword__label
    margin: 0
    margin-left: 1rem
</style>