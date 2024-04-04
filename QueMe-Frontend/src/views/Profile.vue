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
                  <div class="col-6">
                    <p>Date: {{ formattedDate }}</p>
                  </div>
                  <div class="col-6 text-end">
                    <p class="card-text" :class="{ 'text-danger': queDataRef.status === 0, 'text-success': queDataRef.status === 1 }">{{ reservationMessage }}</p>                  </div>
                </div>

                <div class="row">
                  <div class="herizontal-line"></div>
                </div>
                <div class="row">
                  <p class="col-6">{{ userData.name }}</p>
                  <p class="col-6 text-end">{{ userData.phone_number }}</p>
                </div>
                <div class="row">
                  <p class="col-6">Table {{ tableDataRef.zone }}{{ tableDataRef.name }}</p>
                  <p class="col-6 text-end">{{ queDataRef.seat }} people</p>
                </div>
                <div class="row">
                  <p class="col-6">Amount {{ totalAmount }}฿</p>
                <p class="col-6 text-end">Reserve no. {{ queDataRef.id }}</p>
                </div>
                <div class="row justify-content-end">
                  <button type="button" class="btn btnInCard" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Order detail
                </button>
              </div>
                

                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">You order</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <template v-for="(food, index) in foodDataRef" :key="food.id">
                          <!-- Make sure orderDataRef has the same length as foodDataRef -->
                          <tr>
                            <!-- Food name and quantity -->
                            <td style="text-align: left;">{{ food.name }}</td>
                            <td style="text-align: left;">{{ food.quantity }}</td>

                            <div class="space"></div>
                            
                            <!-- Order name and quantity -->
                            <td style="text-align: right;">{{ orderDataRef[index].quantity }}</td>
                          </tr>
                        </template>
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn navbarBtn" data-bs-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
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

  computed: {
    reservationStatus() {
      return this.queDataRef.status === 1 ? "Reservation confirmed" : "Reservation denied";
    },
    reservationMessage() {
      return this.queDataRef.status === 1 ? "Your reservation has been confirmed." : "Your reservation has been denied.";
    },
    cardClass() {
      return this.queDataRef.status === 1 ? "card text-white bg-success mb-3" : "card text-white bg-danger mb-3";
    }
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
    const orderDataRef = ref({
      id: "",
      food_id: "",
      que_id: "",
      quantity: "",
    });
    const foodDataRef = ref([]);

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

        const { order, food } = (
          await axios.get(`${BASR_URL}/${RoutePathUrl.getOrderDetail}`, {
            params: { id: userId, queID: queId },
          })
        ).data.result;
        orderDataRef.value = order;
        foodDataRef.value = food;

        const { que, table } = (
          await axios.get(`${BASR_URL}/${RoutePathUrl.getQueDetail}`, {
            params: { id: userId, queID: queId },
          })
        ).data.result;
        queDataRef.value = que;
        tableDataRef.value = table;
        console.log("queData:", queDataRef.value);
        console.log("tableData:", tableDataRef.value);
        console.log("foodDataRef:", foodDataRef.value);
        console.log("oraderDataRef", orderDataRef.value);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    const formattedDate = moment(queDataRef.date_and_time).format('LL');
    console.log(formattedDate);

    return { router, userData, tableDataRef, queDataRef, formattedDate, orderDataRef, foodDataRef, };
  },
};
</script>

<style scoped>
.statusCard{
  border-radius: 50px;
}
.btnInCard{
  width: 120px;
  height: 35px;
  background-color: #ff4e08;
  color: #fff;
  font-weight: 450;

}
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
