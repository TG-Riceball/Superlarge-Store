<template>
    <div class="storeMenu">
        <h2 class="storeMenu__heading">產品清單</h2>
        <input class="storeMenu__search" placeholder="輸入想搜尋的產品……" type="text">
        <ul>
            <li><a class="storeMenu__link" href="#">
            <img src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_100,h_100/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" alt="StoreMenu-item">
            全部品項
            <br>
            All Products
            </a></li>
            <li><a class="storeMenu__link" href="#">
            <img src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_100,h_100/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" alt="StoreMenu-item">
            超值全餐
            <br>
            All Products
            </a></li>
            <li><a class="storeMenu__link" href="#">
            <img src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_100,h_100/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" alt="StoreMenu-item">
            極選系列
            <br>
            All Products
            </a></li>
            <li><a class="storeMenu__link" href="#">
            <img src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_100,h_100/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" alt="StoreMenu-item">
            飲料與點心
            <br>
            All Products
            </a></li>
            <li><a class="storeMenu__link" href="#">
            <img src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_100,h_100/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp" alt="StoreMenu-item">
            分享盒子
            <br>
            All Products
            </a></li>

        </ul>
    </div>
</template>
<style lang="sass">
.storeMenu
    background: var(--gray-50)
    padding: 0 1rem
    text-align: center
    grid-area: menu

.storeMenu__heading
    margin: 1rem

.storeMenu__search
    background: var(--gray-200)
    width: 100%

.storeMenu__link
    font-size: 1.3rem
    font-weight: 500
    text-align: right
    display: inline-block
    padding: 1rem 0
    display: flex
    align-items: center
    justify-content: space-between

</style>