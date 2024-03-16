<template>
  <div class="container card">
    <div class="container">
      <div class="overlay">
        <p class="text1 blankspacehead">Create your account</p>
        <p :class="'text3 ' + (nameError.length > 0 ? 'error' : '')">
          Name
        </p>
        <div 
          :class="
          'input-group blankspacetextfield ' +
          (phoneNumberError.length > 0 ? 'error' : '')
          "
        >
          <input
            v-model="user.name"
            type="text"
            class="form-control"
            style="width: 495px"
            aria-label="Name"
          />
        </div>
        <div v-if="nameError.length > 0" class="error">
          <ul>
            <li v-for="txt in nameError">
              {{ txt }}
            </li>
          </ul>
        </div>
        <p :class="'text3 ' + (phoneNumberError.length > 0 ? 'error' : '')">
          Phone number
        </p>
        <div
          :class="
            'input-group blankspacetextfield ' +
            (phoneNumberError.length > 0 ? 'error' : '')
          "
        >
          <input
            v-model="user.phoneNumber"
            type="text"
            :class="
              'form-control ' + (phoneNumberError.length > 0 ? 'error' : '')
            "
            style="width: 495px"
            aria-label="phoneNumber"
          />
        </div>
        <div v-if="phoneNumberError.length > 0" class="error">
          <ul>
            <li v-for="txt in phoneNumberError">
              {{ txt }}
            </li>
          </ul>
        </div>
        <p :class="'text3 ' + (passwordError.length > 0 ? 'error' : '')">
          Password
        </p>
        <div :class="'input-group blankspacetextfield ' + (passwordError.length > 0 ? 'error' : '')">
          <input
            v-model="user.password"
            type="password"
            class="form-control"
            style="width: 495px"
            aria-label="password"
          />
        </div>
        <div v-if="passwordError.length > 0" class="error">
          <ul>
            <li v-for="txt in passwordError">
              {{ txt }}
            </li>
          </ul>
        </div>
        <div class="row center">
          <button
            class="btn loginbtn col-6"
            @click="handleSubmit"
            type="submit"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import Axios from "axios";

const router = useRouter();
const user = ref({
  name: "",
  phoneNumber: "",
  password: "",
});
const nameError = ref([]);
const passwordError = ref([]);
const phoneNumberError = ref([]);

const validate = () => {
  nameError.value = [];
  passwordError.value = [];
  phoneNumberError.value = [];
  if (user.value.name === "") {
    nameError.value.push("Name required");
  } else {
    nameError.value.pop();
  }
  if (user.value.password === "") {
    passwordError.value.push("Password required");
  } else {
    passwordError.value.pop();
  }
  if (user.value.phoneNumber === "") {
    phoneNumberError.value.push("Phone Number required");
  } else {
    phoneNumberError.value.pop();
  }
  return nameError.value.length == 0 && passwordError.value.length == 0 && phoneNumberError.value.length == 0;
};

const handleSubmit = async () => {
  try {
    console.log(user.value, validate());
    // Send user data to the server
    if (validate()) {
      const response = await Axios.post(
        "http://localhost:4000/qm/sign-up",
        user.value
      );

      // Log the server response (you can handle it based on your needs)
      console.log(response.data);

      // Redirect to the login page after successful registration
      router.push({ name: "Login" });
    }
  } catch (error) {
    // Handle registration error (e.g., display an error message)
    console.error("Registration failed:", error.message);
  }
};
</script>

<style scoped lang="scss">
.card {
  background-color: #3E3B2C;
}
.error {
  color: red;
  & input {
    border-color: red;
  }
}
p{
  color: #fff;
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
  margin-bottom: 20px;
}

.loginbtn {
  justify-content: center;
  display: flex;
  margin-top: 5px;
  padding: 3px 30px 5px 30px;
  margin-bottom: 5px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border-color: transparent;
  color: #fff;
  background: #FF4E08;
  width: 344px;
}
.returnBtn {
  justify-content: center;
  display: flex;
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
  background: #af3606;
}

.center {
  display: flex;
  flex-direction: column;
  align-items: center;
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
  font-size: 18px;
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
