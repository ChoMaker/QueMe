<template>
    <div class="container card">
        <div class="container">
            <div class="overlay">
                <p class="text1 blankspacehead">Login to your account</p>
                <p class="text3">Username</p>
                <div class="input-group blankspacetextfield">
                    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>
                <p class="text3">Password</p>
                <div class="input-group blankspacetextfield">
                    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">
                </div>
                <div class="center">
                    <router-link to="/client-home">
                        <button class="btn loginbtn" type="button" @click="navigateToClientHome">Login</button>
                    </router-link>
                </div>
                <div class="flex-container">
                    <div>
                        <p>Don’t have an account? <a href="https://example.com">Create Account</a></p>
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
export default {
    methods: {
        navigateToClientHome() {
            // Use Vue Router to navigate to the ClientHome.vue page
            this.$router.push('/client-home');
        }
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
    color: #FFF;
    background: #1B1C21;
    width: 344px;

}

.loginbtn:hover {
    cursor: pointer;
    color: #FFF;
    background: #1B1C21;
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