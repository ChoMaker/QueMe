<template>
    <div class="container card">
      <div class="container">
        <div class="overlay">
          <p class="text1 blankspacehead">Login</p>
  
          <!-- Phone number input -->
          <p class="text3">Phone number</p>
          <div class="input-group blankspacetextfield">
            <input v-model="userSignin.phoneNumber" type="text" class="form-control" aria-label="Phone number" />
          </div>
          <p class="error">{{ phoneError }}</p>
  
          <!-- Password input -->
          <p class="text3">Password</p>
          <div class="input-group">
            <input v-model="userSignin.password" type="password" class="form-control" aria-label="Password" />
          </div>
          <p class="error">{{ passwordError }}</p>
  
          <!-- Login button -->
          <div class="center" style="margin-top: 30px;" >
            <button class="btn loginbtn" @click="handleLogin" type="submit">Login</button>
          </div>
  
          <!-- Register and admin login links -->
          <div class="flex-container">
            <div class="flex-container">
              <p>
                Don’t have an account?
                <ul style="list-style: none; padding: 0; margin: 0; display: inline;">
                  <li style="display: inline; margin-left: 2px;">
                    <router-link to="/register">Register</router-link>
                  </li>
                </ul>
              </p>
            </div>
            <div class="right-align ml-5">
              <router-link to="/admin-login">Login as admin</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  import Axios from "axios";
  import { BASR_URL } from '@/config/app';
  import RoutePathUrl from '@/config/route';
  
  const router = useRouter();
  
  const userSignin = ref({
    phoneNumber: '',
    password: ''
  });
  
  const phoneError = ref('');
  const passwordError = ref('');
  
  const handleLogin = async () => {
    phoneError.value = '';
    passwordError.value = '';
  
    // Validate phone number
    if (!userSignin.value.phoneNumber) {
      phoneError.value = 'Please fill the phone number';
    }
  
    // Validate password
    if (!userSignin.value.password) {
      passwordError.value = 'Please fill the password';
    }
  
    // Check if any error occurred
    if (phoneError.value || passwordError.value) {
      return; // Stop further execution if there are errors
    }
  
    try {
      const response = await Axios.post(`${BASR_URL}/${RoutePathUrl.singin}`, userSignin.value);
      localStorage.setItem('id', response.data.data);
      router.push({ name: 'ClientHome' });
    } catch (error) {
      console.error(error);
      // Display error message if login fails
      phoneError.value = 'Invalid Phone number or password';
      passwordError.value = 'Invalid Phone number or password';
    }
  };
  </script>
  
<style scoped>
.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
p{
    color: #fff;
}
.card{
    background-color: #3E3B2C;
}

li {
    display: inline;
    color: black;
}

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
}

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
    margin-top: 5px;
    margin-bottom: 5px;
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
    background: #FF4E08;
    width: 344px;
}

.loginbtn:hover {
    cursor: pointer;
    color: #fff;
    background: #af3606;
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
    font-size: 18px;
    line-height: 28px;
}

.text2 {
    font-size: 22px;
    line-height: 36px;
}

.text1 {
    font-size: 27px;
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
    margin-top: 125px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    /* Optional: Set the container's height to the full viewport height */
}
</style>