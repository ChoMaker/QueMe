<template>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto" />
      </a>
      <div>
        <button class="btn navbarBtn space" @click="router.push({ name: 'ClientHome' })" type="submit">
          Home
        </button>
        <button class="btn navbarBtn space" @click="router.push({ name: 'Profile' })" type="submit">
          Profile
        </button>
        <button class="btn navbarBtn" @click="router.push({ name: 'Login' })" type="submit">
          Logout
        </button>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="row">
      <p class="headTopic">Payment</p>
    </div>
    <div class="row">
      <div class="col-lg-6">
        <p class="textAboveTextfield">Name</p>
        <input ref="name" style="background-color: #e6e5c7; border: none; margin-bottom: 20px;"
          class="form-control textfieldStyle" type="text" :value="userData.name" aria-label="Disabled input example"
          disabled readonly />
        <p class="textAboveTextfield">Phone number</p>
        <input style="background-color: #e6e5c7; border: none; margin-bottom: 20px;" class="form-control textfieldStyle"
          type="text" :value="userData.phone_number" aria-label="Disabled input example" disabled readonly />
        <p class="textAboveTextfield">Date picked</p>
        {{ queDataRef.date_and_time }}
        <input style="background-color: #e6e5c7; border: none; margin-bottom: 20px;" class="form-control textfieldStyle"
          type="text" :value="formattedDate" aria-label="Disabled input example" disabled readonly />
        <p class="textAboveTextfield">Seats (Maximum reservation: 8)</p>
        <input style="background-color: #e6e5c7; border: none; margin-bottom: 20px;" class="form-control textfieldStyle"
          type="text" :value="queDataRef.seat" aria-label="Disabled input example" disabled readonly />
        <p class="textAboveTextfield">Zone : Table</p>
        <div class="d-flex">
          <input class="form-control textfieldStyle"
            style="width: 70px; margin-right: 10px; background-color: #e6e5c7; border: none;" type="text"
            :value="tableDataRef.zone" aria-label="Disabled input example" disabled readonly />
          <input class="form-control textfieldStyle" style="width: 70px; background-color: #e6e5c7; border: none;"
            type="text" :value="tableDataRef.name" aria-label="Disabled input example" disabled readonly />
        </div>

        <div class="row description">
          <p>Description : {{ queDataRef.type }}</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="container checkbox-margin">
          <div class="d-flex" style="justify-content: space-between"></div>
        </div>
        <div class="container mt-3">
          <div class="row d-flex justify-content-center">
            <p class="d-flex justify-content-center" style="font-size: 20px; margin-bottom: 10px">

            <p>Total : {{ totalAmount }}</p>

            </p>
            <img style="height: 400px; width: auto; margin-bottom: 3px" src="/src/assets/QR.png" alt="Logo" />

            <div class="col-7 mt-1 mx-auto" style="margin-bottom: 80px">
              <input class="form-control" type="file" id="formFile" @change="handleFileUpload" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="container checkbox-margin">
    <div class="d-flex justify-content-end">
      <button class="btn navbarBtn space" @click="router.push({ name: 'ClientHome' })" type="submit">
        Cancel
      </button>
      <button class="btn navbarBtn" @click="router.push({ name: 'Profile' });" type="submit">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from "moment";
import { BASR_URL } from "@/config/app";
import RoutePathUrl from "@/config/route";

export default {
  data() {
    return {
      totalAmount: 0,
    };
  },
  created() {
    const amountToPay = localStorage.getItem("amountToPay");
    this.totalAmount = parseFloat(amountToPay) || 0;
  },

  methods: {
    async handleFileUpload() {
      try {
        const fileInput = document.getElementById('formFile');
        console.log("File input:", fileInput);

        const file = fileInput.files[0];
        console.log("Selected file:", file);

        const queID = localStorage.getItem("queID");
        console.log("queID:", queID);

        const formData = new FormData();
        formData.append("image", file);
        formData.append("queID", queID);
        console.log("FormData:", formData);

        const response = await axios.post(
          `${BASR_URL}/${RoutePathUrl.uploadPayslip}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Server response:", response.data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    },
  },

  setup() {
    const router = useRouter();
    const name = ref("");
    const counter = ref(0);

    const userData = ref({
      id: "",
      name: "",
      phone_number: "",
      password: "",
      create_at: "",
    });
    var queDataRef = ref({
      id: "",
      user_id: "",
      table_id: "",
      event_id: "",
      status: "",
      date_and_time: "",
      seat: "",
      type: "",
    });
    const tableDataRef = ref({
      id: "",
      zone: "",
      name: "",
    });

    const orderDataRef = ref({
      id: "",
      food_id: "",
      que_id: "",
      quantity: "",
    });
    const foodDataRef = ref([]);
    var totalSum = ref(0);
    const formattedDate = ref("");

    onMounted(async () => {

      try {
        const userId = parseInt(localStorage.getItem("id"));
        const queId = parseInt(localStorage.getItem("queID"));

        const userResponse = await axios.get(
          `${BASR_URL}/${RoutePathUrl.userDetail}`,
          { params: { id: userId } }
        );
        userData.value = userResponse.data.data;

        const { que, table } = (
          await axios.get(`${BASR_URL}/${RoutePathUrl.getQueDetail}`, {
            params: { id: userId, queID: queId },
          })
        ).data.result;
        queDataRef.value = que;
        tableDataRef.value = table;

        const { order, food } = (
          await axios.get(`${BASR_URL}/${RoutePathUrl.getOrderDetail}`, {
            params: { id: userId, queID: queId },
          })
        ).data.result;
        orderDataRef.value = order;
        foodDataRef.value = food;

        foodDataRef.value = food.map((food) => ({ ...food }));
        console.log("Food: ", foodDataRef.value);

        for (let i = 0; i < foodDataRef.value.length; i++) {
          for (let j = 0; j < order.length; j++) {
            if (order[j].food_id === foodDataRef.value[i].id) {
              foodDataRef.value[i].quantity = order[j].quantity;
            }
          }
          console.log(foodDataRef.value[i]);
        }

        for (let i = 0; i < foodDataRef.value.length; i++) {
          totalSum.value += foodDataRef.value[i].price;
          console.log(totalSum.value);
        }

        formattedDate.value = moment(queDataRef.value.date_and_time).format("LL");
        console.log("Formatted Date:", formattedDate.value);

      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    return {
      router,
      counter,
      userData,
      tableDataRef,
      queDataRef,
      orderDataRef,
      foodDataRef,
      totalSum,
      formattedDate,
    };
  },
};
</script>

<style scoped>
.btn {
  border-radius: 20px;
  min-width: 110px;
}

.navbarBtn {
  width: 100px;
  height: 35px;
  background-color: #ff4e08;
  color: #fff;
  text-align: center;
  padding-inline: 0.5px;
  font-weight: 450;
}

.navbarBtn:hover {
  width: 100px;
  height: 35px;
  background-color: #af3606;
  color: #fff;
  text-align: center;
  padding-inline: 0.5px;
  font-weight: 450;
}

.inndeform {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 18px;
  height: 20px;
  width: 70px;
  text-align: center;
}

.increment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 18px;
  height: 20px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
}

.decrement {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 18px;
  height: 20px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}

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

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
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