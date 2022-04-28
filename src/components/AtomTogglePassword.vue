<script setup lang="ts">
import { ref } from 'vue'
const passwordToggle = ref(true)

function togglePasswordVisibility() {
    const password = <HTMLInputElement>document.getElementById('password')
    passwordToggle.value = !passwordToggle.value
    if (password.type === 'password') {
        password.type = 'text'
    } else {
        password.type = 'password'
    }
}
</script>

<template>
    <div class="togglePassword">
        <input
            class="togglePassword__input"
            id="showPassword"
            type="checkbox"
            @click="togglePasswordVisibility"
        />
        <label
            :class="{ 'togglePassword__label--active': passwordToggle }"
            class="togglePassword__label"
            for="showPassword"
        >
            <span v-if="!passwordToggle"> 顯示密碼 </span>
            <span v-if="passwordToggle"> 隱藏密碼 </span>
        </label>
    </div>
</template>

<style lang="sass">
.togglePassword
    display: flex
    padding: 1rem 0

.togglePassword__input
    width: unset
    margin: 0

.togglePassword__label
    margin: 0
    margin-left: 1rem
    user-select: none

.togglePassword__label--active
</style>
