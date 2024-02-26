<template>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto;">
            </a>
            <div>
                <button class="btn btn-outline-light space" @click="router.push({ name: 'ClientHome' })" type="submit">Home</button>
                <button class="btn btn-outline-light space" @click="router.push({ name: 'Profile' })" type="submit">Profile</button>
                <button class="btn btn-outline-light" @click="router.push({ name: 'Login' })" type="submit">Logout</button>
            </div>
        </div>
    </nav>

    <!-- CarlendarPics -->
    <div class="container">
        <div class="row">
            <div class="col-lg-6 center">
                <img src="/src/assets/january.png">
            </div>
            <div class="col-lg-6 center">
                <img src="/src/assets/january.png">
            </div>
        </div>
    </div>


    <!-- UPCOMING EVENTS -->
    <div class="container">
        <p class="upcomingText">UPCOMING EVENTS</p>
        <div class="row">
            <div class="col-lg-3">
                <div class="card">
                    <!-- picture -->
                    <img src="/src/assets/smlCard/LazyLoxy.png" class="card-img-top">
                    <div class="card-body">
                        <p class="card-title">Lazy Loxy & Samblack</p>
                        <p class="card-text">7 January 2024</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <!-- picture -->
                    <img src="/src/assets/smlCard/Polycat.png" class="card-img-top">
                    <div class="card-body">
                        <p class="card-title">Polycat</p>
                        <p class="card-text">15 January 2024</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <!-- picture -->
                    <img src="/src/assets/smlCard/Loey.png" class="card-img-top">
                    <div class="card-body">
                        <p class="card-title">Joey Phuwasit</p>
                        <p class="card-text">17 January 2024</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <!-- picture -->
                    <img src="/src/assets/smlCard/MEAN.png" class="card-img-top">
                    <div class="card-body">
                        <p class="card-title">MEAN</p>
                        <p class="card-text">21 January 2024</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-3">
                <div class="card">
                    <!-- picture -->
                    <img src="/src/assets/smlCard/ThreeManDown.png" class="card-img-top">
                    <div class="card-body">
                        <p class="card-title">Three man down</p>
                        <p class="card-text">25 January 2024</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3">
                <div class="card">
                    <!-- picture -->
                    <img src="/src/assets/smlCard/KwanJai.png" class="card-img-top">
                    <div class="card-body">
                        <p class="card-title">Kwanjai (คณะขวัญใจ)</p>
                        <p class="card-text">31 January 2024</p>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- footer -->
    <div class="container ">
        <div class="flex-container">
            <p class="btmtext">banpuenbangkok</p>
            <p class="btmtext">Contact banpuenbangkok</p>
        </div>
        <div class="row">
            <div class="herizontal-line"></div>
        </div>
        <div class="row felx-container footerMargin">
            <div class="d-grid gap-3 col-7">
                <button class="btn btn-light btnFooter" @click="router.push({ name: 'Menu' })"
                    type="button">MENU</button>
                <button class="btn btn-light btnFooter" @click="router.push({ name: 'Home' })"
                    type="button">RESERVE</button>
                <button class="btn btn-light btnFooter" @click="router.push({ name: 'ClientHome' })"
                    type="button">Line@</button>
            </div>

            <div class="col-3 text-end ms-auto">
                <p style="color: #fff;">Line : @banpuenbangkok</p>
                <p style="color: #fff;">Facebook</p>
                <p style="color: #fff;">Instagram</p>
                <p style="color: #fff;">banpuenbangkok Location</p>
            </div>
        </div>
    </div>

    <div class="container">


    </div>
</template>


<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter()
        return { router }
    },
    name: 'ClientHome',
}
</script>


<style scoped>
.btn {
    border-radius: 20px;
    min-width: 110px;
}

.footerMargin {
    margin-bottom: 22px;
}

.btnFooter {
    border-radius: 50px;
}

.bgcard {
    background-color: aliceblue;
}

.box-black02 {
    background-color: #373743;
}

.box-black01 {
    background-color: #434552;
}

.herizontal-line {
    width: 100%;
    height: 1px;
    background-color: #fff;
    margin-bottom: 20px;
}

.btmtext {
    color: #fff;
    font-size: 15px;
}

.flex-container {
    display: flex;
    justify-content: space-between;
}

.card {
    margin-right: 30px;
    margin-bottom: 30px;
    width: 100%;
    position: relative;
}

.card-body {
    background-color: aliceblue;
}

.card-title {
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    margin-bottom: 0.1rem;
}

.card-text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
}

.upcomingText {
    font-size: 25px;
    line-height: 24px;
    text-align: left;
    font-weight: 500;
    margin-top: 66px;
    margin-bottom: 20px;
    color: #fff;
}

@media (min-width: 1280px) {
    .container {
        max-width: 1100px;
        /* Set the maximum width for the container */
        margin: 0 auto;
        /* Center the container horizontally */
    }
}

.space {
    margin-right: 22px;
}

.center {
    justify-content: center;
    display: flex;
}
</style>
