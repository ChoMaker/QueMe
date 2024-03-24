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
          class="btn btn-link"
          style="color: #fff"
          @click="router.push({ name: 'AdminEvent' })"
          type="submit"
        >
          Event
        </button>
        <button
          class="btn btn-link"
          style="color: #fff"
          @click="router.push({ name: 'AdminQue' })"
          type="submit"
        >
          Que
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
      <p class="reservation">Event Update</p>

      <div class="col-lg-4 align-item-center">
        <p class="textAboveTextfield">Event</p>
        <div class="input-group" style="margin-bottom: 20px; width: 420px">
          <input
            placeholder="Fill the event name"
            v-model="name"
            type="text"
            class="form-control textfieldStyle"
            style="background-color: #e6e5c7"
            aria-label="seats"
            max="50"
          />
        </div>
        <p class="textAboveTextfield">Start Date</p>
        <div
          class="card textFieldStyle"
          style="border-radius: 20px; width: 420px"
        >
          <div class="wrapper">
            <ejs-datepicker
              placeholder="Choose start date"
              style="color: #000"
              v-model="event_start_date"
              :min="minDate"
              format="dd-MMM-yyyy"
            >
            </ejs-datepicker>
          </div>
        </div>
        <p class="textAboveTextfield">End Date</p>
        <div
          class="card textFieldStyle"
          style="border-radius: 20px; width: 420px"
        >
          <div class="wrapper">
            <ejs-datepicker
              placeholder="Choose end date"
              style="color: #000"
              v-model="event_end_date"
              :min="minDate"
              format="dd-MMM-yyyy"
            >
            </ejs-datepicker>
          </div>
        </div>

        <div style="margin-bottom: 20px; margin-top: 20px">
          <input
            class="form-control"
            style="
              display: flex;
              border-radius: 20px;
              background-color: #e6e5c7;
              width: 420px;
            "
            type="file"
            id="formFile"
          />
        </div>

        <button class="btn btnAll" @click="postData" type="button">Post</button>
      </div>

      <div class="col-lg-7">
        <table class="table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="event in eventDataRef" :key="index">
              <td>{{ event.name }}</td>
              <td>{{ formatDate(event.event_end_date) }}</td>
              <td>
                <button class="btn btn-danger" @click="deleteEvent(event.id)">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { onMounted, ref } from "vue";
import axios from "axios";
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";
import { BASR_URL } from "@/config/app";
import RoutePathUrl from "@/config/route";
import moment from "moment";

export default {
  name: "AdminEvent",
  components: {
    "ejs-datepicker": DatePickerComponent,
  },

  methods: {
    async postData() {
      try {
        const fileInput = document.getElementById("formFile"); // Get the file input element
        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
          console.error("No file selected");
          return;
        }

        const file = fileInput.files[0]; // Get the first file from the input
        console.log("Selected File:", file.name);

        const formData = new FormData();
        formData.append("name", this.name);
        formData.append("event_start_date", this.event_start_date);
        formData.append("event_end_date", this.event_end_date);
        formData.append("image", file);

        const response = await axios.post(
          `${BASR_URL}/${RoutePathUrl.postEvent}`,
          formData, // Send formData directly as the request body
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error posting data:", error);
      }
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
        console.log("Event data fetched successfully");
      } catch (error) {
        console.error("Error fetching event data:", error);
      }
    };

    onMounted(() => {
      fetchEventData(); // Fetch event data when the component is mounted
    });

    const formatDate = (date) => {
      return moment(date).format("LL");
    };

    const deleteEvent = async (eventId) => {
      try {
        await axios.delete(`${BASR_URL}/${RoutePathUrl.deleteEvent}`, {
          data: { id: eventId },
        });
        console.log('Event deleted successfully');
        fetchEventData(); // Fetch event data after deleting an event
      } catch (error) {
        console.error('Error deleting event:', error);
      }
    };
    

    return {
      router,
      selectedDate,
      minDate,
      eventDataRef,
      formatDate,
      deleteEvent,
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
.btn {
  border-radius: 20px;
  min-width: 110px;
}
.space {
  margin-right: 22px;
}
</style>
