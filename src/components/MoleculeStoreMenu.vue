<template>
    <div class="storeMenu">
        <h2 class="storeMenu__heading">產品清單</h2>
        <div class="iconInput">
            <input
                class="iconInput__input"
                placeholder="輸入想搜尋的產品……"
                type="text"
            />
            <button class="storeMenu__btn">
                <svg
                    class="iconInput__icon"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    width="24"
                    fill="currentColor"
                >
                    <path
                        d="M19.6 21 13.3 14.7Q12.55 15.3 11.575 15.65Q10.6 16 9.5 16Q6.775 16 4.888 14.113Q3 12.225 3 9.5Q3 6.775 4.888 4.887Q6.775 3 9.5 3Q12.225 3 14.113 4.887Q16 6.775 16 9.5Q16 10.6 15.65 11.575Q15.3 12.55 14.7 13.3L21 19.6ZM9.5 14Q11.375 14 12.688 12.688Q14 11.375 14 9.5Q14 7.625 12.688 6.312Q11.375 5 9.5 5Q7.625 5 6.312 6.312Q5 7.625 5 9.5Q5 11.375 6.312 12.688Q7.625 14 9.5 14Z"
                    />
                </svg>
            </button>
        </div>
        <ul class="storeMenu__list">
            <li>
                <a class="storeMenu__link" href="#">
                    <img
                        width="80"
                        height="80"
                        loading="lazy"
                        src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_80,h_80/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp"
                        alt="StoreMenu-item"
                    />
                    全部品項
                    <br />
                    All Products
                </a>
            </li>
            <li>
                <a class="storeMenu__link" href="#">
                    <img
                        width="80"
                        height="80"
                        loading="lazy"
                        src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_80,h_80/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp"
                        alt="StoreMenu-item"
                    />
                    超值全餐
                    <br />
                    Best C/P
                </a>
            </li>
            <li>
                <a class="storeMenu__link" href="#">
                    <img
                        width="80"
                        height="80"
                        loading="lazy"
                        src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_80,h_80/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp"
                        alt="StoreMenu-item"
                    />
                    極選系列
                    <br />
                    SUPER Series
                </a>
            </li>
            <li>
                <a class="storeMenu__link" href="#">
                    <img
                        width="80"
                        height="80"
                        loading="lazy"
                        src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_80,h_80/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp"
                        alt="StoreMenu-item"
                    />
                    飲料與點心
                    <br />
                    Drinks & Snake
                </a>
            </li>
            <li>
                <a class="storeMenu__link" href="#">
                    <img
                        width="80"
                        height="80"
                        loading="lazy"
                        src="https://res.cloudinary.com/thegroup/image/upload/c_fit,w_80,h_80/v1650253862/github/superlarge/gibxazzymeop8og9hklc.webp"
                        alt="StoreMenu-item"
                    />
                    分享盒子
                    <br />
                    Share Box
                </a>
            </li>
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

.storeMenu__btn
    background: transparent
    border: 0
    padding: 1rem
    cursor: pointer
    border-radius: var(--rounded-lg)
    transition: .3s

    &:hover, &:focus, &:target
        background: var(--gray-900)
        color: var(--gray-50)


.storeMenu__list
    margin-top: 1rem
    display: grid
    grid-template-columns: repeat(2, minmax(0, 1fr))
    border-top: 2px solid var(--gray-200)
    border-left: 2px solid var(--gray-200)

    @include media-md
        grid-template-columns: repeat(3, minmax(0, 1fr))

    @include media-lg
        border: none
        grid-template-columns: repeat(1, minmax(0, 1fr))


.storeMenu__link
    background: var(--gray-50)
    font-size: 1rem
    font-weight: 500
    text-align: right
    display: inline-block
    display: flex
    align-items: center
    justify-content: space-between
    border-right: 2px solid var(--gray-200)
    border-bottom: 2px solid var(--gray-200)
    padding: 1rem

    @include media-lg
        border: none
</style>
