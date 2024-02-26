<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto;">
            </a>
            <div>
                <button class="btn btn-outline-light severalbtn space" @click="router.push({ name: 'ClientHome' })"
                    type="submit">Home</button>
                <button class="btn btn-outline-light severalbtn space" @click="router.push({ name: 'Profile' })"
                    type="submit">Profile</button>
                <button class="btn btn-outline-light severalbtn" @click="router.push({ name: 'Login' })"
                    type="submit">Logout</button>
            </div>
        </div>
    </nav>
    <div class="container">
        <div class="row">
            <p class="headTopic">Confirm reservation</p>
        </div>
        <div class="row">
            <div class="col-lg-6">
                <p class="textAboveTextfield">Name</p>
                <div class="input-group">
                    <input type="password" class="form-control textfieldStyle" aria-label="Password" />
                </div>
                <p class="textAboveTextfield">Phone number</p>
                <div class="input-group">
                    <input type="password" class="form-control textfieldStyle" aria-label="Password" />
                </div>
                <p class="textAboveTextfield">Date picked</p>
                <div class="input-group">
                    <input type="password" class="form-control textfieldStyle" aria-label="Password" />
                </div>
                <p class="textAboveTextfield">Seats (Maximum reservation: 18)</p>
                <div class="input-group">
                    <input type="password" class="form-control textfieldStyle" aria-label="Password" />
                </div>
                <p class="textAboveTextfield">Zone</p>
                <div class="input-group">
                    <input type="password" class="form-control textfieldStyle" aria-label="Password" />
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


            <div class="col-lg-6 text-center">
                <img src="/src/assets/QR.png" class="mx-auto" style="display: flex;" alt="qr code">
                <div class="col-7 mt-1 mx-auto">
                    <label for="formFile" class="form-label"></label>
                    <input class="form-control" style="display: flex;" type="file" id="formFile">
                </div>
            </div>


        </div>
    </div>

    <div class="container checkbox-margin ">
        <div class="d-flex justify-content-end">
            <button class="btn severalbtn btn-dark space" @click="router.push({ name: 'Menu' })" type="submit">Back</button>
            <button class="btn severalbtn btn-dark" @click="router.push({ name: 'Profile' })" type="submit">Confirm</button>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();

        const items = [
            { id: 1, name: 'Item 1', count: 0, price: 10 },
            { id: 2, name: 'Item 2', count: 0, price: 20 },
            // ... more data from the database
        ];

        const increaseCount = (item) => {
            item.count++;
        };

        const decreaseCount = (item) => {
            if (item.count > 0) {
                item.count--;
            }
        };


        return { router, items, increaseCount, decreaseCount };
    },
};
</script>


<style scoped>
form {
    width: 300px;
    margin: 0 auto;
    text-align: center;
    padding-top: 50px;
}

.value-button {
    display: inline-block;
    border: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 20px;
    text-align: center;
    vertical-align: middle;
    padding: 11px 0;
    background: #eee;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

.value-button:hover {
    cursor: pointer;
}

form #decrease {
    margin-right: -4px;
    border-radius: 8px 0 0 8px;
}

form #increase {
    margin-left: -4px;
    border-radius: 0 8px 8px 0;
}

form #input-wrap {
    margin: 0px;
    padding: 0px;
}

input#number {
    text-align: center;
    border: none;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    margin: 0px;
    width: 40px;
    height: 40px;
}

input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

.description {
    margin-top: 30px;
    margin-bottom: 30px;
}

.textAboveTextfield {
    font-size: 16px;
    font-family: Sarabun;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 2px;
}

.checkbox-margin {
    margin-bottom: 15px;

}

p {
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
}

.textfieldStyle {
    border-radius: 20px;
}

.severalbtn {
    border-radius: 20px;
    min-width: 110px;
}

.inTableBtn {
    border-radius: 20px;
    min-width: 50px;
}

.headTopic {
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