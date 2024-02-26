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
                <button class="btn btn-outline-light" @click="router.push({ name: 'Login' })" type="submit">Logout</button>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="row">
            <p class="profileText">Profile</p>
        </div>
        <div class="row">
            <div class="col-lg-5">
                <div class="card" style="background-color: #D9D9D9;">
                    <div class="overlay">
                        <p class="textInCard">Name</p>
                        <p>Thanapong Kamolvittayakul</p>
                        <p class="textInCard">Member code</p>
                        <p>123190</p>
                        <p class="textInCard">Birthday date</p>
                        <p>04/10/2001</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-7">
                <div class="card" style="background-color: #D9D9D9;">
                    <div class="overlay">
                        <p class="textInCard mb-2">My reserve</p>
                        <div class="card" style="background-color: #fff;">
                            <div class="card-body">
                                <div class="row">
                                    <p>Monday 29 January, 2024</p>
                                </div>
                                <div class="row">
                                    <div class="herizontal-line"></div>
                                </div>
                                <div class="row">
                                    <p class="col-6">Thanapong Kamolvittayakul</p>
                                    <p class="col-6 text-end">098-xxx-xxxx</p>
                                </div>
                                <div class="row">
                                    <p class="col-6">Normal zone</p>
                                    <p class="col-6 text-end">8 people, 2 tables</p>
                                </div>
                                <p class="text-end mb-0">#13593</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter()
        return { router }
    }
}
</script>

<style scoped>
.leftText {
    align-self: self-end;
}

.flex-container {
    display: flex;
    justify-content: space-between;
}

.herizontal-line {
    width: 100%;
    height: 1px;
    background-color: #000;
    margin-bottom: 20px;
}

.textInCard {
    color: black;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 0px;
}

.overlay {
    margin-top: 50px;
    margin-bottom: 50px;
    margin-left: 50px;
    margin-right: 50px;
}

.profileText {
    font-size: 25px;
    line-height: 24px;
    text-align: left;
    font-weight: 500;
    margin-top: 25px;
    margin-bottom: 20px;
    color: #fff;
}

.btn {
    border-radius: 20px;
    min-width: 110px;
}

.space {
    margin-right: 22px;
}
</style>