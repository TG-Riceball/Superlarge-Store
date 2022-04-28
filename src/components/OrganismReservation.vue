<template>
    <section id="resvation" class="homeSection container">
        <div class="divide-2">
            <div></div>
            <div class="sectionDialog">
                <h2 class="sectionDialog__heading">
                    Enjoy Burgers! <br />In
                    <span class="marked">SUPERLARGE</span>.
                </h2>
                <p class="sectionDialog__paragraph">
                    我們的位置不多，事先預約確保您能輕鬆的和我們一同享受經典美式漢堡的快樂，如有特殊飲食需求、備註可以在表單中回應給我們！
                </p>
            </div>
        </div>

        <div class="divide-2">
            <div class="reservationMap">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.598181238011!2d120.6816958149889!3d24.150745584393494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d68b76d2791%3A0xa7b81677f6e63936!2zNDA0LCBUYWljaHVuZyBDaXR5LCBOb3J0aCBEaXN0cmljdCwgU2VjdGlvbiAzLCBTYW5taW4gUmQsIDEyOeiZn-mrlOiCsumkqA!5e0!3m2!1sen!2stw!4v1650304805531!5m2!1sen!2stw"
                    style="border: 0"
                    allowfullscreen="true"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <form class="reservationForm">
                <label for="name">姓名</label>
                <input
                    class="reservationForm__input"
                    id="name"
                    type="text"
                    placeholder="請輸入您的姓名"
                    required
                />

                <label for="phone">電話號碼</label>
                <input
                    class="reservationForm__input"
                    id="phone"
                    type="tel"
                    placeholder="請輸入您的電話號碼"
                    required
                />

                <label for="email">電子信箱</label>
                <input
                    class="reservationForm__input"
                    id="email"
                    type="email"
                    placeholder="請輸入您的電子信箱"
                    required
                />

                <div class="divide-2 divide-gap">
                    <div class="reservationForm__inner">
                        <label for="date">預約日期</label>
                        <input
                            class="reservationForm__input"
                            id="date"
                            type="date"
                            required
                        />
                    </div>

                    <div class="reservationForm__inner">
                        <div class="reservationForm__inner">
                            <label for="date">預約時間</label>
                            <input
                                class="reservationForm__input"
                                id="date"
                                type="time"
                                min="09:00"
                                max="18:00"
                                required
                            />
                        </div>
                    </div>
                </div>

                <label for="people">人數</label>
                <input
                    min="1"
                    step="1"
                    value="1"
                    class="reservationForm__input"
                    id="people"
                    type="number"
                    required
                />

                <label for="comment">備註</label>
                <textarea
                    name="comment"
                    class="reservationForm__input"
                    id="comment"
                    placeholder="請輸入您對這次預約的備註"
                ></textarea>

                <button
                    class="reservationForm__btn btn btn--ghostLight btn--block"
                    type="submit"
                >
                    送出預約
                </button>
            </form>
        </div>
    </section>
</template>

<style lang="sass">
.reservationMap
    margin-right: 3rem
    border-radius: var(--rounded-lg)
    overflow: hidden
    max-height: 500px

    iframe
        width: 100%
        height: 100%
        opacity: .8
        transition: opacity .3s

        &:hover, &:focus
            opacity: 1

.reservationForm
    margin: 0 auto
    padding: 0 1rem

.reservationForm__input
    color: var(--gray-50)
    background: transparent

.reservationForm__btn
    margin-top: 2rem
</style>
