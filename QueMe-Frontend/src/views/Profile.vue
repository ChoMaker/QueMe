<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto" />
      </a>
      <div class="d-flex justify-content-end">
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
      <p class="profileText" style="color: #fff;">Profile</p>
    </div>
    <div class="row">
      <div class="col-lg-5">
        <div class="card">
          <div class="overlay">
            <p class="textInCard" style="color: #000;">Name</p>
            <p>{{ userData.name }}</p>
            <p class="textInCard" style="color: #000;">Phone Number</p>
            <p>{{ userData.phone_number }}</p>
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="card">
          <div class="overlay">
            <p class="textInCard mb-2" style="color: #000;">My reserve</p>
            <div class="card" style="background-color: #fff">
              <div class="card-body">
                <div class="row">
                  <p>{{ formattedDate }}</p>
                </div>
                <div class="row">
                  <div class="herizontal-line"></div>
                </div>
                <div class="row">
                  <p class="col-6">{{ userData.name }}</p>
                  <p class="col-6 text-end">{{ userData.phone_number }}</p>
                </div>
                <div class="row">
                  <p class="col-6">{{ tableDataRef.zone }}{{ tableDataRef.name }}</p>
                  <p class="col-6 text-end">{{ queDataRef.seat }} people</p>
                </div>
                <div class="row">
                  <p class="col-6">Total : {{ totalAmount }}</p>
                <p class="col-6 text-end">Reserve no. {{ queDataRef.id }}</p>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
import moment from 'moment';
import { BASR_URL } from '@/config/app';
import RoutePathUrl from '@/config/route';


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

  setup() {
    const router = useRouter();

    const userData = ref({
      id: "",
      name: "",
      phone_number: "",
      password: "",
      create_at: "",
    });
    const queDataRef = ref({
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

    onMounted(async () => {
      try {
        const userId = parseInt(localStorage.getItem("id"));
        const queId = parseInt(localStorage.getItem("queID"));

        const userResponse = await axios.get(
          `${BASR_URL}/${RoutePathUrl.userDetail}`,
          { params: { id: userId } }
        );
        userData.value = userResponse.data.data;
        console.log("User:", userData.value);

        const { que, table } = (
          await axios.get(`${BASR_URL}/${RoutePathUrl.getQueDetail}`, {
            params: { id: userId, queID: queId },
          })
        ).data.result;
        queDataRef.value = que;
        tableDataRef.value = table;
        console.log("queData:", queDataRef.value);
        console.log("tableData:", tableDataRef.value);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    const formattedDate = moment(queDataRef.date_and_time).format('LL');
    console.log(formattedDate);

    return { router, userData, tableDataRef, queDataRef, formattedDate };
  },
};
</script>

<style scoped>
.card {
  background-color: #e6e5c7;
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
