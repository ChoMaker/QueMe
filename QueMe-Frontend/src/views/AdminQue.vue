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
          class="btn btn-link "
          style="color: #fff"
          @click="router.push({ name: 'AdminHome' })"
          type="submit"
        >
          Event
        </button>
        <button
          class="btn btn-link "
          style="color: #fff"
          @click="router.push({ name: 'AdminMenu' })"
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
      <p class="profileText">Que Mangement</p>
    </div>
    <div class="row">
      <div
        class="card"
        style="border-radius: 20px; width: 420px; margin-bottom: 30px"
      >
        <div class="wrapper"></div>
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
          <th scope="col" style="width: 15%">Status</th>
          <th scope="col" style="width: 25%">Phone number</th>
          <th scope="col" style="width: 20%"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in queDataRef" :key="index">
          <th scope="row">{{ item.id }}</th>
          <td>{{ getUserById(item.user_id).name }}</td>
          <td>
            {{ getTableById(item.table_id).zone
            }}{{ getTableById(item.table_id).name }}
          </td>
          <td>{{ item.status === 0 ? "Cancel" : "Confirm" }}</td>
          <td>{{ getUserById(item.user_id).phone_number }}</td>
          <td>
            <button :class="item.status === 0 ? 'btn btn-success' : 'btn btn-danger'" @click="handleClick(item.id, item.status)">
              {{ item.status === 0 ? "Confirm" : "Cancel" }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import moment from "moment";
import { BASR_URL } from "@/config/app";
import RoutePathUrl from "@/config/route";
import { DatePickerComponent } from "@syncfusion/ej2-vue-calendars";

export default {
  name: "Home",
  components: {
    "ejs-datepicker": DatePickerComponent,
  },

  setup(props, { emit }) {
    const router = useRouter();

    const queDataRef = ref([]);
    const userData = ref([]);
    const tableDataRef = ref([]);
    const eventDataRef = ref([]);

    const getUserById = (userId) => {
      return userData.value.find((user) => user.id === userId) || {};
    };

    const getTableById = (tableId) => {
      return tableDataRef.value.find((table) => table.id === tableId) || {};
    };
    console.log("Que Status", queDataRef.value.status);

    const showButtonLabel = computed(() => {
      return queDataRef.value.status ? "Cancel" : "Confirm";
    });

    const handleClick = async (id, status) => {
      try {
        // Toggle the status
        const newStatus = status === 0 ? 1 : 0;

        // Update the status in the local array
        const rowToUpdate = queDataRef.value.find(row => row.id === id);
        if (rowToUpdate) rowToUpdate.status = newStatus;

        // Update the status in the database
        const response = await axios.put(
          `${BASR_URL}/${RoutePathUrl.updateStatus}`,
          {
            id: id,
            status: newStatus,
          }
        );

        console.log("Status updated successfully:", response.data);
      } catch (error) {
        console.error("Error handling que:", error);
      }
    };

    onMounted(async () => {
      try {
        const response = await axios.get(
          `${BASR_URL}/${RoutePathUrl.adminTable}`
        );
        const { que, user, table, event } = response.data.result;
        // console.log("Response.data", response.data.result);

        queDataRef.value = que || [];
        userData.value = user || [];
        tableDataRef.value = table || [];
        eventDataRef.value = event || [];
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
      queDataRef,
      userData,
      tableDataRef,
      eventDataRef,
      formattedDate,
      getUserById,
      getTableById,
      showButtonLabel,
      handleClick,
    };
  },
};
</script>

<style scoped>
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
