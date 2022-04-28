<template>
    <div class="loginPanel">
        <h2 class="loginPanel__heading">註冊您的帳號</h2>

        <form id="login">
            <hr />
            <div class="divide-2 divide-gap">
                <div>
                    <!-- Name -->
                    <label for="name">姓名</label>
                    <input
                        id="name"
                        placeholder="請輸入您的姓名"
                        type="text"
                        required
                    />
                </div>
                <div>
                    <!-- E-mail -->
                    <label for="e-mail">電子信箱</label>
                    <input
                        id="e-mail"
                        placeholder="請輸入您的電子信箱"
                        type="email"
                        required
                    />
                </div>
            </div>
            <!-- Password -->
            <label for="password">密碼</label>
            <input
                id="password"
                placeholder="輸入您的密碼"
                type="password"
                required
            />
            <!-- Password-Confirm -->
            <label for="password">確認密碼</label>
            <input
                class="loginPanel__confirm"
                id="password"
                placeholder="再重複輸入一次您的密碼"
                type="password"
                required
            />

            <p class="loginPanel__privacy">
                創建帳戶即表示您接受我們的<a class="marked--accent" href="#"
                    >條款</a
                >和<a class="marked--accent" href="#">隱私政策</a>
            </p>

            <button class="btn btn--block btn--solid" type="submit">
                註冊帳號
            </button>

            <div class="loginPanel__more">
                <router-link class="loginPanelMore__item" to="/login"
                    >登入現有帳號</router-link
                >
            </div>
        </form>
    </div>
</template>
