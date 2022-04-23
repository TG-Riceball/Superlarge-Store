<template>
    <section id="reservation" class="homeSection container">
        <div class="divide-2">
            <div></div>
            <div class="sectionDialog">
                <h2 class="sectionDialog__heading">Enjoy Burgers!
    <br>In
    <span class="marked">SUPERLARGE</span>.</h2>
            </div>
        </div>
        
        <div class="divide-2">
            <div class="reservationMap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.598181238011!2d120.6816958149889!3d24.150745584393494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d68b76d2791%3A0xa7b81677f6e63936!2zNDA0LCBUYWljaHVuZyBDaXR5LCBOb3J0aCBEaXN0cmljdCwgU2VjdGlvbiAzLCBTYW5taW4gUmQsIDEyOeiZn-mrlOiCsumkqA!5e0!3m2!1sen!2stw!4v1650304805531!5m2!1sen!2stw" width="600" height="600" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <form class="reservationForm">
                <label for="name">姓名</label>
                <input class="reservationForm__input" id="name" type="text">

                <label for="phone">電話號碼</label>
                <input class="reservationForm__input" id="phone" type="tel">

                <label for="email">電子信箱</label>
                <input class="reservationForm__input" id="email" type="email">

                <div class="divide-2">
                    <div class="reservationForm__inner">
                        <label for="date">時間</label>
                        <input class="reservationForm__input" id="date" type="date">
                    </div>
                    
                    <div class="reservationForm__inner">
                        <label for="date">特別飲食需求</label>
                        <input class="reservationForm__input reservationForm__specialRequest" id="date" type="radio">
                    </div>

                </div>

                <label for="people">人數</label>

                <div class="">
                    <button>+</button>
                    <input class="reservationForm__input" id="people" type="number">
                    <button>-</button>
                </div>

                <button class="btn btn--ghostLight" type="submit">送出</button>
                
            </form>

        </div>

    </section>
</template>

<style lang="sass">
    .sectionreservation
        text-align: right

    .reservationMap
        margin: 0 auto

    .reservationForm
        display: flex
        flex-direction: column
        padding: 0 1rem

    .reservationForm__inner
        display: flex
        flex-direction: column

    .reservationForm__input
        color: var(--gray-50)
        background: transparent

    .reservationForm__specialRequest
        background: red

</style>