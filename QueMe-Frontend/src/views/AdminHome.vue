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
          <button class="btn btn-link space" style="color: #fff;" @click="router.push({ name: 'AdminHome' })" type="submit">
            Event</button>
          <button class="btn btn-link space" style="color: #fff;" @click="router.push({ name: 'AdminQue' })" type="submit">
            Que</button>
          <button class="btn btnAll" @click="router.push({ name: 'Login' })" type="submit">
            Logout</button>
        </div>
      </div>
    </nav>
  <div class="container">
    <div class="row">
      <p class="reservation">Event Update</p>

      <div class="col-lg-4 align-item-center">
        <p class="textAboveTextfield">Event</p>
        <div class="input-group" style="margin-bottom: 20px; width: 420px;">
          <input
            placeholder="Fill the event name"
            v-model="eventName"
            type="text"
            class="form-control textfieldStyle"
            style="background-color: #e6e5c7"
            aria-label="seats"
            max="50"
          />
        </div>
        <p class="textAboveTextfield">Pick date</p>
        <div class="card textFieldStyle" style="border-radius: 20px; width: 420px">
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

        <div style="margin-bottom: 80px; margin-top: 20px;">
                    <label for="formFile" class="form-label"></label>
                    <input class="form-control" style="display: flex; border-radius: 20px; background-color: #e6e5c7;width: 420px;" type="file" id="formFile">
                </div>

      </div>

      <div class="col-lg-7">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Event</th>
              <th scope="col">Date</th>
              <th scope="col">Photo</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td>{{name}}</td>
              <td>{{event_end_date}}</td>
              <td>{{file}}</td>
              <td>
                <button class="btn btnAll" style="background-color: red;" @click="handleNextButtonClick" type="submit">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      
    </div>
  </div>

  <div class="container checkbox-margin">
    <div class="d-flex justify-content-end">
      <button
        class="btn btnAll btn-dark space"
        @click="router.push({ name: 'ClientHome' })"
        type="submit"
      >
        Back
      </button>
      <button
        class="btn btnAll btn-dark"
        @click="handleNextButtonClick"
        type="submit"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import Axios from "axios";
import { DatePickerComponent,MaskedDateTime,} from "@syncfusion/ej2-vue-calendars";
import { TypeOfQue } from "@/util/util";
import { BASR_URL } from "@/config/app";
import RoutePathUrl from "@/config/route";

export default {
  name: "Home",
  components: {
    "ejs-datepicker": DatePickerComponent,
  },

  setup() {
    const router = useRouter();

    //set not to select old day
    const minDate = ref(new Date());
    minDate.value.setDate(minDate.value.getDate());
    const selectedDate = ref("");

    const eventName = ref("");

    const eventUpdate = ref({
      name: "",
      event_start_date: "",
      event_end_date: "",
      file: "",
    });


    return {
      router,
      selectedDate,
      minDate,
      eventName,
      eventUpdate
    };
  },
  methods: {
    async handleNextButtonClick() {
      // Log all the relevant values
      console.log("Selected Date:", this.selectedDate);
      try {
        const response = await Axios.post(
          `${BASR_URL}/${RoutePathUrl.reserve}`,
          {
            event_id: null,
            user_id: localStorage.getItem("id"),
            type: this.selectedOption,
            date_and_time: this.selectedDate,
            zone: this.selected,
            seat: this.seatsQuantity,
            name: this.seatZoneNumber,
          }
        );

        localStorage.setItem("queID", response.data.result);

        console.log("Server response:", response.data);

        // Now you can perform the router push
        this.router.push({ name: "Menu" });
      } catch (error) {
        console.error("Error:", error);
      }
    },
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
.textFieldStyle {
  justify-content: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 20px;
  border-color: transparent;
  color: #fff;
  background: #e6e5c7;
  width: 416px;
}
.wrapper {
  max-width: 250px;
  margin: 0 auto;
}
#ej2-datepicker_0 {
  color: #000;
}
.e-input-group input.e-input,
.e-input-group.e-control-wrapper input.e-input {
  height: 25px;
  font-size: 18px;
  color: #000;
}
.e-input-group .e-input-group-icon:last-child,
.e-input-group.e-control-wrapper .e-input-group-icon:last-child {
  font-size: 12px;
  color: #000;
}

select {
  word-wrap: normal;
  height: 40px;
}

.btnAll {
  border-radius: 20px;
  min-width: 110px;
  background-color: #ff4e08;
  color: #fff;
}

.checkbox-margin {
  margin-bottom: 15px;
}

.description {
  margin-top: 30px;
  margin-bottom: 30px;
}

.textfieldStyle {
  border-radius: 20px;
}

p {
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
}

.textAboveTextfield {
  font-size: 16px;
  font-family: Sarabun;
  line-height: 24px;
  margin-top: 10px;
  margin-bottom: 2px;
}

.reservation {
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
