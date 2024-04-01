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
    <div
      data-bs-spy="scroll"
      data-bs-target="#list-example"
      data-bs-offset="0"
      class="scrollspy-example"
      tabindex="0"
    >
      <div
        class="table-container"
        style="height: 700px; width: 1200px; overflow-y: auto; margin: 0 auto"
      >
        <table class="table">
          <thead>
            <tr>
              <th scope="col" style="text-align: center;">Date</th>
              <th scope="col" style="text-align: center;">Name</th>
              <th scope="col" style="text-align: center;">Table</th>
              <th scope="col" style="text-align: center;">Status</th>
              <th scope="col" style="text-align: center;">Phone number</th>
              <th scope="col" style="text-align: center;"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in queDataRef" :key="index">
              <td scope="row" style="text-align: center;">{{ formatDate(item.date_and_time) }}</td>
              <td style="text-align: center;">{{ getUserById(item.user_id).name }}</td>
              <td style="text-align: center;">{{ getTableById(item.table_id).zone}}{{ getTableById(item.table_id).name }}</td>
              <td style="text-align: center;">{{ item.status === 0 ? "Cancel" : "Confirm" }}</td>
              <td style="text-align: center;">{{ getUserById(item.user_id).phone_number }}</td>
              <td style="text-align: center;">
                <button
                  :class="
                    item.status === 0 ? 'btn btn-success' : 'btn btn-danger'
                  "
                  @click="handleClick(item.id, item.status)"
                >
                  {{ item.status === 0 ? "Confirm" : "Cancel" }}
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

    const sortByDate = () => {
      queDataRef.value.sort((a, b) => {
        const dateA = new Date(a.date_and_time);
        const dateB = new Date(b.date_and_time);
        return dateA - dateB;
      });
    };

    const formatDate = (date) => {
      return moment(date).format("LL");
    };

    const getUserById = (userId) => {
      return userData.value.find((user) => user.id === userId) || {};
    };

    const getTableById = (tableId) => {
      return tableDataRef.value.find((table) => table.id === tableId) || {};
    };

    const showButtonLabel = computed(() => {
      return queDataRef.value.status ? "Cancel" : "Confirm";
    });

    const handleClick = async (id, status) => {
      try {
        // Toggle the status
        const newStatus = status === 0 ? 1 : 0;

        // Update the status in the local array
        const rowToUpdate = queDataRef.value.find((row) => row.id === id);
        if (rowToUpdate) rowToUpdate.status = newStatus;

        // Update the status in the database
        const response = await axios.put(
          `${BASR_URL}/${RoutePathUrl.updateStatus}`,
          { id: id, status: newStatus }
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

        sortByDate();
        console.log(eventDataRef.value);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    });

    const minDate = ref(new Date());
    minDate.value.setDate(minDate.value.getDate());
    const selectedDate = ref("");

    const sortedQueDataRef = computed(() => {
      return queDataRef.value;
    });

    return {
      router,
      minDate,
      selectedDate,
      queDataRef,
      userData,
      tableDataRef,
      eventDataRef,
      formatDate,
      getUserById,
      getTableById,
      showButtonLabel,
      handleClick,
      sortByDate,
      sortedQueDataRef,
    };
  },
};
</script>

<style scoped>
.table {
  border-radius: 10px;
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
.table-container        { overflow: auto; height: 750px; }
.table-container thead th { position: sticky; top: 0; z-index: 1; }

/* Just common table stuff. Really. */
table  { border-collapse: collapse; width: 100%; }
th, td { padding: 8px 16px; }
th     { background:#eee; }
</style>
