<template>
    <div class="container card">
        <div class="container">
            <div class="overlay">
                <p class="text1 blankspacehead">Login to your account</p>
                <p class="text3">Username</p>
                <div class="input-group blankspacetextfield">
                    <input type="text" class="form-control" aria-label="Username" />
                </div>
                <p class="text3">Password</p>
                <div class="input-group blankspacetextfield">
                    <input type="password" class="form-control" aria-label="Password" />
                </div>
                <!-- <router-link to="/client-home">Home</router-link> -->
                <!-- <router-link to="/client-home">Client</router-link> -->
                <div class="center">
                    <button class="btn loginbtn" @click="router.push({ name: 'ClientHome' })" type="button">Login</button>
                </div>
                <div class="flex-container">
                    <div>
                        <p>
                            Don’t have an account?
                            <a href="https://example.com">Create Account</a>
                        </p>
                    </div>
                    <div class="right-align">
                        <a href="https://example.com">Forget password</a>
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
.flex-container {
    display: flex;
    justify-content: space-between;
}

.right-align {
    text-align: right;
}

.overlay {
    margin-top: 100px;
    margin-bottom: 100px;
    margin-left: 100px;
    margin-right: 100px;
}

.blankspacehead {
    margin-top: 100px;
    margin-bottom: 50px;
}

.blankspacetextfield {
    margin-top: 20px;
    margin-bottom: 20px;
}

.loginbtn {
    justify-content: center;
    display: flex;
    margin: 5px;
    padding: 3px 30px 5px 30px;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 20px;
    border-color: transparent;
    color: #fff;
    background: #1b1c21;
    width: 344px;
}

.loginbtn:hover {
    cursor: pointer;
    color: #fff;
    background: #1b1c21;
}

.center {
    justify-content: center;
    display: flex;
}

p {
    margin-top: 0;
    margin-bottom: 0rem;
}

.text4 {
    font-size: 18px;
    line-height: 28px;
}

.text3 {
    font-size: 20px;
    line-height: 28px;
}

.text2 {
    font-size: 22px;
    line-height: 36px;
}

.text1 {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    font-family: Sarabun;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}

.card {
    width: 848px;
    height: 578px;
    place-items: center;
}

</style>
