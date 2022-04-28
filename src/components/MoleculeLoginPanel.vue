<script setup lang="ts">
import TogglePassword from '@/components/AtomTogglePassword.vue'
</script>
<template>
    <div class="loginPanel">
        <h2 class="loginPanel__heading">選擇您的登入方式</h2>
        <div class="btnGroup">
            <button
                class="btn btn--social"
                style="background-color: #1877f2; color: white; border: none"
            >
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_1_448)">
                        <path
                            d="M23.9564 12.3069C23.9564 5.9556 18.8077 0.806879 12.4564 0.806879C6.10514 0.806879 0.956421 5.9556 0.956421 12.3069C0.956421 18.0469 5.1618 22.8044 10.6595 23.6672V15.6311H7.73962V12.3069H10.6595V9.77329C10.6595 6.8911 12.3764 5.29907 15.0033 5.29907C16.2615 5.29907 17.5775 5.52368 17.5775 5.52368V8.35375H16.1274C14.6988 8.35375 14.2533 9.24022 14.2533 10.1497V12.3069H17.4427L16.9329 15.6311H14.2533V23.6672C19.751 22.8044 23.9564 18.0469 23.9564 12.3069Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_448">
                            <rect
                                width="24"
                                height="24"
                                fill="white"
                                transform="translate(0.456421 0.237)"
                            />
                        </clipPath>
                    </defs>
                </svg>

                使用 Facebook 登入
            </button>
            <button class="btn btn--social">
                <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <rect
                        width="24"
                        height="24"
                        transform="translate(0.456421 0.342346)"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M23.4964 12.6037C23.4964 11.7883 23.4232 11.0042 23.2873 10.2515H12.4564V14.6999H18.6455C18.3789 16.1374 17.5687 17.3553 16.3507 18.1708V21.0562H20.0673C22.2419 19.0542 23.4964 16.106 23.4964 12.6037Z"
                        fill="#4285F4"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4564 23.8422C15.5614 23.8422 18.1646 22.8124 20.0673 21.056L16.3507 18.1706C15.3209 18.8606 14.0037 19.2683 12.4564 19.2683C9.46116 19.2683 6.92593 17.2453 6.02161 14.5272H2.17957V17.5067C4.07184 21.2651 7.96093 23.8422 12.4564 23.8422Z"
                        fill="#34A853"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M6.02165 14.5274C5.79165 13.8374 5.66097 13.1004 5.66097 12.3424C5.66097 11.5844 5.79165 10.8474 6.02165 10.1574V7.17786H2.1796C1.40074 8.73036 0.956421 10.4867 0.956421 12.3424C0.956421 14.1981 1.40074 15.9544 2.1796 17.5069L6.02165 14.5274Z"
                        fill="#FBBC05"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.4564 5.41621C14.1448 5.41621 15.6607 5.99644 16.8525 7.13598L20.1509 3.83757C18.1593 1.98189 15.5562 0.842346 12.4564 0.842346C7.96093 0.842346 4.07184 3.41939 2.17957 7.1778L6.02161 10.1573C6.92593 7.43916 9.46116 5.41621 12.4564 5.41621Z"
                        fill="#EA4335"
                    />
                </svg>

                使用 Google 登入
            </button>
        </div>
        <form id="login">
            <hr />
            <label for="e-mail">電子信箱</label>
            <input
                id="e-mail"
                placeholder="請輸入您的電子信箱"
                type="email"
                required
            />
            <label for="password">密碼</label>
            <input
                id="password"
                placeholder="請輸入您的密碼"
                type="password"
                required
            />
            <TogglePassword />
            <button class="btn btn--block btn--solid" type="submit">
                登入
            </button>

            <div class="loginPanel__more">
                <router-link class="loginPanelMore__item" to="/register"
                    >還未註冊帳號？</router-link
                >
                <a class="loginPanelMore__item" href="#">忘記密碼？</a>
            </div>
        </form>
    </div>
</template>
