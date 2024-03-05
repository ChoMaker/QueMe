<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto;">
            </a>
            <div class="d-flex justify-content-end">
                <button class="btn btn-outline-light space" @click="router.push({ name: 'ClientHome' })"
                    type="submit">Home</button>
                <button class="btn btn-outline-light space" @click="router.push({ name: 'Profile' })"
                    type="submit">Profile</button>
                <button class="btn btn-outline-light" @click="router.push({ name: 'Login' })"
                    type="submit">Logout</button>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <p class="reservation">Reservation</p>
            <div class="col-lg-8">
                <img src="/src/assets/map.png">
                <p class="col-lg-12 description">
                    เงื่อนไขการจอง กรุณามาก่อนเวลา 20.00น. เพื่อไม่ให้โต๊ะหลุด<br>
                    - จองล่วงหน้าไม่เกิน 7 วัน<br>
                    - จองตั้งเเต่ 9 คนขึ้นไป ถึงเวลา 20.00น.<br>
                    ลูกค้ามารับโต๊ะไม่ถึง ครึ่งหนึ่งของจำนวนที่จองของอนุญาต เเยกโต๊ะ<br>
                    - ขอสงวนสิทธิในการเลือกโซนที่นั่งสำหรับผู้ที่มาเอาโต๊ะก่อนเลือกก่อนเท่านั้น<br>
                    - ศุกร์-เสาร์ และวันที่คนค่อนข้างเยอะ เลือกโต๊ะแล้วไม่สามารถย้ายได้<br>
                    - จำกัดอายุ 20 ปีขึ้นไป<br>
                    กรุณาพกบัตรประชาชนหรือใบขับขี่ตัวจริงเท่านั้น<br>
                    - การรับโต๊ะจอง โปรดยืนยันสิทธิด้วยการแสดงหน้า การจองของฉัน<br>
                    (เจ้าของการจอง)ให้พนักงานดูเพื่อใช้สิทธิการจองนี้ ไม่สามารถใช้รูปภาพแสดงแทนได้
                </p>
            </div>

            <div class="col-lg-4">

                <p class="textAboveTextfield">Pick date</p>
                <div class="input-group">
                    <input type="password" class="form-control textfieldStyle" aria-label="Password" />
                </div>
                <p class="description">* หากจองในวันเดียวกันกรุณาจองก่อนเวลา
                    เวลา 16:30น.
                    * หากเกินเวลาที่กำหนดจะหลุดจอง
                    เวลา 20:00น.
                    * หากจอง Premium กรุณาจองก่อนเวลา
                    เวลา 20:00น.
                    * การจองเลยเวลาจองฟรี ต้องจองแบบ Premium เท่านั้น ซึ่งจะมีค่าใช้จ่ายมากกว่าปกติ</p>
                <p class="textAboveTextfield">How many seats (Maximum reservation: 18)</p>
                <div class="input-group" style="margin-bottom: 20px;" >
                    <input type="password" class="form-control textfieldStyle" aria-label="Password" />
                </div>
                <span class="textAboveTextfield" style="color: #fff;">Zone: {{ selected }}</span>
                <div class="row">
    <div class="col-5">
        <select v-model="selected">
        <option disabled value=""> Please selected one </option>
        <option>VVIIP</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
        </select>

        <!-- <div class="dropdown">
            <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenu2"
                    data-bs-toggle="dropdown" aria-expanded="false">
                Select zone
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button class="dropdown-item" id="vvip" type="button">VVIP</button></li>
                <li><button class="dropdown-item" id="a" type="button">A</button></li>
                <li><button class="dropdown-item" id="b" type="button">B</button></li>
                <li><button class="dropdown-item" id="c" type="button">C</button></li>
                <li><button class="dropdown-item" id="d" type="button">D</button></li>
                <li><button class="dropdown-item" id="e" type="button">E</button></li>
                <li><button class="dropdown-item" id="f" type="button">F</button></li>
            </ul>
        </div> -->
    </div>
    <div class="col-6">
        <input class="form-control" style="width: 50px; height: 30px;" type="text" placeholder="0" aria-label="default input example">
    </div>
</div>


                <div class="row description">
                    <div class="form-check form-check-inline checkbox-margin">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                            value="option1">
                        <label class="form-check-label" style="color: #fff;" for="inlineRadio1">จองฟรี โต๊ะหลุด
                            20:00น. (ฟรี)</label>
                    </div>
                    <div class="form-check form-check-inline checkbox-margin">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" style="color: #fff;" for="inlineRadio2">โต๊ะหลุด 21:00น.
                            (฿1000 ต่อโต๊ะ)</label>
                    </div>
                    <div class="form-check form-check-inline checkbox-margin">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" style="color: #fff;" for="inlineRadio2">โต๊ะหลุด 22:00น.
                            (฿2000 ต่อโต๊ะ)</label>
                    </div>
                    <div class="form-check form-check-inline checkbox-margin">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" style="color: #fff;" for="inlineRadio2">โต๊ะหลุด 23:00น.
                            (฿3000 ต่อโต๊ะ)</label>
                    </div>
                    <div class="form-check form-check-inline checkbox-margin">
                        <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                            value="option2">
                        <label class="form-check-label" style="color: #fff;" for="inlineRadio2">มาตอนไหนก็ได้ (฿4500
                            ต่อโต๊ะ)</label>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container checkbox-margin ">
        <div class="d-flex justify-content-end">
            <button class="btn btn btn-dark space" @click="router.push({ name: 'ClientHome' })"
                type="submit">Back</button>
            <button class="btn btn btn-dark" @click="router.push({ name: 'Menu' })" type="submit">Next</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import {ref} from 'vue';

export default {
    setup() {
        const router = useRouter();

        const selected = ref('');

        return { router, selected };
    }

}
</script>

<style scoped>
select {
word-wrap: normal;
height: 40px;
}
.btn {
    border-radius: 20px;
    min-width: 110px;
}

.checkbox-margin {
    margin-bottom: 15px;

}

.description {
    margin-top: 30px;
    margin-bottom: 30px;
}

.textfieldStyle {
    border-radius: 20px;
}

p {
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
}

.textAboveTextfield {
    font-size: 16px;
    font-family: Sarabun;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 2px;
}

.reservation {
    font-size: 25px;
    line-height: 24px;
    text-align: left;
    font-weight: 500;
    margin-top: 25px;
    margin-bottom: 20px;
    color: #fff;
}

.space {
    margin-right: 22px;
}
</style>