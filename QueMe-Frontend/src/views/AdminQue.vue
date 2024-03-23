<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="/src/assets/logo-removebg.png"
          alt="Logo"
          style="width: 91px; height: auto"
        />
      </a>
      <div class="d-flex justify-content-end">
        <button
          class="btn btn-link space"
          style="color: #fff"
          @click="router.push({ name: 'AdminHome' })"
          type="submit"
        >
          Event
        </button>
        <button
          class="btn btn-link space"
          style="color: #fff"
          @click="router.push({ name: 'AdminMenu' })"
          type="submit"
        >
          Menu
        </button>
        <button
          class="btn btnAll"
          @click="router.push({ name: 'Login' })"
          type="submit"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>

  <div class="container">
    <div class="row">
      <p class="profileText">Que Manage</p>
    </div>
    <div class="row">
      <div
        class="card"
        style="border-radius: 20px; width: 420px; margin-bottom: 30px"
      >
        <div class="wrapper">
          <ejs-datepicker
            placeholder="Choose a date"
            style="color: #000"
            v-model="selectedDate"
            :min="minDate"
            format="dd-MMM-yyyy"
          >
          </ejs-datepicker>
        </div>
      </div>
      <div
        type="button"
        class="btn btn-success"
        style="width: 130px; margin-bottom: 30px; margin-left: 20px"
      >
        Search
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="width: 5%">#</th>
          <th scope="col" style="width: 20%">Name</th>
          <th scope="col" style="width: 15%">Table</th>
          <th scope="col" style="width: 15%">Event</th>
          <th scope="col" style="width: 25%">Menu</th>
          <th scope="col" style="width: 20%">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ tableDataRef.id }}</th>
          <td>{{ userData.name }}</td>
          <td>{{ tableDataRef.zone }}{{ tableDataRef.name }}</td>
          <td>{{ userData.phone_number }}</td>
          <td>{{ orderDataRef.food_id }}{{ orderDataRef.quantity }}</td>
          <td>
            <button class="btn btnAll" @click="openModal">Reservation failed</button>
            <ModalComponent
              :isOpen="isModalOpened"
              @modal-close="closeModal"
              @submit="submitHandler"
              name="first-modal"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";
import { defineProps, defineEmits } from "vue";
import { onClickOutside } from "@vueuse/core";
import moment from "moment";
import { BASR_URL } from "@/config/app";
import RoutePathUrl from "@/config/route";
import {
  DatePickerComponent,
  MaskedDateTime,
} from "@syncfusion/ej2-vue-calendars";

export default {
  name: "Home",
  components: {
    "ejs-datepicker": DatePickerComponent,
  },

  setup() {
    const router = useRouter();

    const props = defineProps({ isOpen: Boolean });
    const emit = defineEmits(["modal-close"]);
    const isModalOpened = ref(false);

    const openModal = () => {
      isModalOpened.value = true;
    };

    const closeModal = () => {
      isModalOpened.value = false;
    };

    const submitHandler = () => {
      // Handle form submission
    };

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
        // const userId = parseInt(localStorage.getItem("id"));
        // const queId = parseInt(localStorage.getItem("queID"));

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
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    const formattedDate = moment(queDataRef.date_and_time).format("LL");
    console.log(formattedDate);

    const minDate = ref(new Date());
    minDate.value.setDate(minDate.value.getDate());
    const selectedDate = ref("");

    return {
      router,
      minDate,
      selectedDate,
      userData,
      tableDataRef,
      queDataRef,
      formattedDate,
      foodDataRef,
      orderDataRef,
    };
  },
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal-container {
  width: 300px;
  margin: 150px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
}
.btnAll {
  border-radius: 20px;
  min-width: 110px;
  background-color: #ff4e08;
  color: #fff;
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
  color: black;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 0px;
}

.overlay {
  margin-top: 30px;
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
