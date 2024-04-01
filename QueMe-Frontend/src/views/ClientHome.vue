<template>
  <div class="row">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="
        position: relative;
        z-index: 1;
        padding-left: 10px;
        padding-right: 10px;
      "
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="/src/assets/logo-removebg.png"
            alt="Logo"
            style="width: 91px; height: auto"
          />
        </a>
        <div>
          <button
            class="btn navbarBtn space"
            @click="router.push({ name: 'ClientHome' })"
            type="submit"
          >
            Home
          </button>
          <button
            class="btn navbarBtn space"
            @click="router.push({ name: 'Profile' })"
            type="submit"
          >
            Profile
          </button>
          <button
            class="btn navbarBtn"
            @click="router.push({ name: 'Login' })"
            type="submit"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>

  <!-- Main -->
  <div
    class="container"
    style="
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      color: #fff;
    "
  >
    <div>
      <b style="font-size: 96px">Banpeun</b><br />
      <b style="font-size: 96px; padding-left: 100px; line-height: 0.1%"
        >Bangkok</b
      >
      <p style="text-align: left; margin-top: 18px">
        Banpuen Bangkok, a chill-out restaurant in the Kaset area with live
        music, free concerts, and many more promotions.
      </p>
      <button
        class="btn reserveBtn justify-content-center"
        @click='reserve'
        type="button"
      >
        RESERVE
      </button>
    </div>
    <img src="/src/assets/cola.png" style="width: 620px; margin-bottom: 80px" />
  </div>

  <!-- UPCOMING EVENTS -->
  <div class="row" style="background-color: #3e3b2c">
    <div class="container">
      <p class="upcomingText">UPCOMING EVENTS</p>
      <div class="row">
        <div class="d-flex justify-content-center flex-lg-wrap">
          <!-- Getter -->

          <div class="card col-3" v-for="event in eventDataRef" :key="event.id">
            <a href="/home" @click="sendDate(event.event_end_date, event.id)">
              <img
                :src="getImageUrl(event.image_url)"
                class="card-img-top"
                style="height: 263px"
              />
            </a>
            <div class="card-body">
              <p class="card-title">{{ event.name }}</p>
              <p class="card-text">{{ formatDate(event.event_end_date) }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- footer -->
  <div class="container" style="margin-top: 20px">
    <div class="flex-container">
      <p class="btmtext">banpuenbangkok</p>
      <p class="btmtext">Contact banpuenbangkok</p>
    </div>
    <div class="row">
      <div class="herizontal-line"></div>

      <div class="col-3 text-end ms-auto">
        <p style="color: #fff">Line : @banpuenbangkok</p>
        <p style="color: #fff">Facebook</p>
        <p style="color: #fff">Instagram</p>
      </div>
    </div>
  </div>

  <div class="container"></div>
</template>

<script>
import { useRouter } from "vue-router";
import axios from "axios";
import moment from "moment";
import { onMounted, ref } from "vue";
import { BASR_URL, imageUrl } from "@/config/app";
import RoutePathUrl from "@/config/route";
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "Home",
  components: {
    "ejs-datepicker": DatePickerComponent,
  },
  methods: {
    openLinePage() {
      const linePageURL = "https://page.line.me/918szrut?openQrModal=true";
      window.location.href = linePageURL;
    },
    getImageUrl(imageUrl) {
      // Assuming the image URL is relative to the root of the server
      // return `${VUE_APP_BASR_URL}/${imageUrl}`;
      console.log("This is image: ", imageUrl);
      return `${imageUrl}`;
    },
  },

  setup() {
    const router = useRouter();
    const minDate = ref(new Date());
    minDate.value.setDate(minDate.value.getDate());
    const selectedDate = ref("");
    const eventDataRef = ref([]);

    const fetchEventData = async () => {
      try {
        const response = await axios.get(
          `${BASR_URL}/${RoutePathUrl.getEvent}`
        );
        eventDataRef.value = response.data.data[0];
        console.log("Event data fetched successfully", eventDataRef.value);
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    const sendDate = (end_date, event_id) => {
          router.push({ name: 'Home' });
       localStorage.setItem("end_date", end_date);
       localStorage.setItem("event_id", event_id);
    };

    const reserve = () => {
          router.push({ name: 'Home' });
       localStorage.setItem("end_date", "");
    };

    onMounted(() => {
      fetchEventData(); // Fetch event data when the component is mounted
    });

    const formatDate = (date) => {
      return moment(date).format("LL");
    };

    return {
      router,
      selectedDate,
      minDate,
      eventDataRef,
      formatDate,
      sendDate,
      reserve,
    };
  },
};
</script>

<style scoped>
.navbarBtn {
  width: 100px;
  height: 35px;
  background-color: #e6e5c7;
  color: #3e3b2c;
  text-align: center;
  padding-inline: 0.5px;
  font-weight: 550;
}
.navbarBtn:hover {
  width: 100px;
  height: 35px;
  background-color: #acab93;
  color: #3e3b2c;
  text-align: center;
  padding-inline: 0.5px;
  font-weight: 550;
}

.reserveBtn {
  align-items: center;
  width: 250px;
  height: 45px;
  margin-top: 10px;
  background-color: #ff4e08;
  color: #fff;
  font-size: 18px;
  font-weight: 650;
}
.reserveBtn:hover {
  align-items: center;
  width: 250px;
  height: 45px;
  margin-top: 10px;
  background-color: #af3606;
  color: #fff;
  font-size: 18px;
  font-weight: 650;
}
.btn {
  border-radius: 20px;
  min-width: 110px;
}

.footerMargin {
  margin-bottom: 22px;
}

.btnFooter {
  border-radius: 50px;
  height: 45px;
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
