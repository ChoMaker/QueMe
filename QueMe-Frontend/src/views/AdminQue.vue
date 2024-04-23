<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto" />
      </a>
      <div class="d-flex justify-content-end">
        <button class="btn btn-link" style="color: #fff" @click="router.push({ name: 'AdminEvent' })" type="submit">
          Event
        </button>
        <button class="btn btn-link" style="color: #fff" @click="router.push({ name: 'AdminQue' })" type="submit">
          Que
        </button>
        <button class="btn btnAll" @click="router.push({ name: 'Login' })" type="submit">
          Logout
        </button>
      </div>
    </div>
  </nav>

  <div class="container">
    <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
      <div class="table-container" style="height: 700px; width: 1200px; overflow-y: auto; margin: 0 auto">
        <!-- Table -->
        <table class="table">
          <!-- Table header -->
          <thead>
            <tr>
              <th scope="col" style="text-align: start;">ID</th>
              <th scope="col" style="text-align: center;">Date</th>
              <th scope="col" style="text-align: start;">Name</th>
              <th scope="col" style="text-align: start;">Table</th>
              <th scope="col" style="text-align: start;">Type</th>
              <th scope="col" style="text-align: center;">Phone number</th>
              <th scope="col" style="text-align: center;">PaySlip</th>
              <th scope="col" style="text-align: center;">Amount</th>
              <th scope="col" style="text-align: center;">Status</th>
              <th scope="col" style="text-align: center;"></th>
              <th scope="col" style="text-align: center;"></th>
            </tr>
          </thead>
          <!-- Table body -->
          <tbody>
            <!-- Check if queDataRef has data -->
            <template v-if="queDataRef.length > 0">
              <tr v-for="(item, index) in queDataRef" :key="index">
                <td scope="row" style="text-align: start;">{{ item.id }}</td>
                <td scope="row" style="text-align: start;">{{ formatDate(item.date_and_time) }}</td>
                <td style="text-align: start;">{{ getUserById(item.user_id).name }}</td>
                <td style="text-align: start;">{{ getTableById(item.table_id).zone }}{{
                  getTableById(item.table_id).name }}
                </td>
                <td style="text-align: start;">{{ item.type }}</td>
                <td style="text-align: center;">{{ getUserById(item.user_id).phone_number }}</td>
                <td style="text-align: center;">
                  <template v-if="item.amount !== 0 && item.payslip_url">
                    <img :src="getImagePath(item.payslip_url)" style="max-width: 50px; max-height: 50px;" />
                  </template>
                  <template v-else>
                    -
                  </template>
                </td>
                <td style="text-align: center;">{{ item.amount !== null ? item.amount : 0 }}</td>
                <td style="text-align: center;">{{ item.status === 0 ? "Cancel" : "Confirm" }}</td>
                <td style="text-align: center;">
                  <button :class="item.status === 0 ? 'btn btn-success' : 'btn btn-danger'"
                    @click.stop="handleClick(item.id, item.status)">
                    {{ item.status === 0 ? "Confirm" : "Cancel" }}
                  </button>
                </td>
                <td>
                  <button class="btn btn-primary" @click="openModal(item)">
                    Details
                  </button>
                </td>
              </tr>
            </template>
            <!-- Show "No data" if queDataRef is empty -->
            <template v-else>
              <tr>
                <td colspan="9" style="text-align: center;">No data</td>
              </tr>
            </template>
          </tbody>
        </table>


        <!-- modal -->
        <div class="modal" tabindex="-1" v-if="isModalOpen">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Detail</h5>
              </div>
              <div class="modal-body">
                {{ selectedRow.id }}
                <p>Date and Time: {{ formatDate(selectedRow.date_and_time) }}</p>
                <p>Name: {{ getUserById(selectedRow.user_id).name }}</p>
                <p>Table: {{ getTableById(selectedRow.table_id).zone }}{{ getTableById(selectedRow.table_id).name }}</p>
                <p>Type: {{ selectedRow.type }}</p>
                <p>Phone Number: {{ getUserById(selectedRow.user_id).phone_number }}</p>
                <p>Food:</p>
                <table>
                  <tbody>
                    <!-- Iterate over foodDataRef based on selectedRow que ID -->
                    <template v-for="(order, index) in getOrderData(selectedRow.id)" :key="index">
                      <tr>
                        <td style="text-align: left;">{{ getFoodById(order.food_id).name }}</td>
                        <td style="text-align: left;">{{ order.quantity }}</td>
                      </tr>
                    </template>
                  </tbody>
                </table>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeModal">Close</button>
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
  data() {
    return {
      isModalOpen: false,
      selectedRow: null,
    };
  },
  methods: {
    openModal(item) {
      this.selectedRow = item;
      this.isModalOpen = true;
    },
    closeModal() {
      this.selectedRow = null;
      this.isModalOpen = false;
    },
    getOrderData(queId) {
      return this.foodDataRef.filter(order => order.que_id === queId);
    }
  },


  setup(props, { emit }) {
    const router = useRouter();
    const queDataRef = ref([]);
    const userData = ref([]);
    const tableDataRef = ref([]);
    const eventDataRef = ref([]);
    const orderDataRef = ref([]);

    const foodDataRef = ref([]);
    const orderListRef = ref([]);
    const resultOrderRef = ref([]);


    const getImagePath = (payslipUrl) => {
      return `${payslipUrl}`;
    };

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
    const getQueById = (queId) => {
      return queDataRef.value.find((que) => que.id === queId) || {};
    };
    const getFoodById = (foodId) => {
      return foodDataRef.value.find((food) => food.id === foodId) || {};
    };
    const getOrderById = (orderId) => {
      return orderDataRef.value.find((order) => order.id === orderId) || {};
    };
    const getOrderData = (queId) => {
      console.log("Food data:", foodDataRef.value);
      const orders = foodDataRef.value.filter((order) => order.que_id === queId);
      console.log("Orders for que ID", queId, ":", orders);
      return orders;
    };



    const showButtonLabel = computed(() => {
      return queDataRef.value.status ? "Cancel" : "Confirm";
    });

    const handleClick = async (id, status) => {
      try {
        const newStatus = status === 0 ? 1 : 0;

        const rowToUpdate = queDataRef.value.find((row) => row.id === id);
        if (rowToUpdate) rowToUpdate.status = newStatus;

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
        const { que, user, table, event, order, food } = response.data.result;
        queDataRef.value = que || [];
        userData.value = user || [];
        tableDataRef.value = table || [];
        eventDataRef.value = event || [];
        orderDataRef.value = order || [];
        foodDataRef.value = food || [];

        
        // sortByDate();
        // console.log("queDataRef", queDataRef.value)
        // console.log("userData", userData.value)
        // console.log("tableDataRef", tableDataRef.value)
        // console.log("eventDataRef", eventDataRef.value)
        // console.log("orderDataRef", orderDataRef.value)
        // console.log("foodDataRef", foodDataRef.value)

        // console.log(getOrderById(orderDataRef.value[3].id));


        const foodResponse = await axios.get(`${BASR_URL}/${RoutePathUrl.getFoodData}`);
        const { orderList, resultOrder } = foodResponse.data.result;
        orderListRef.value = orderList || [];
        resultOrderRef.value = resultOrder || [];

        // console.log("Order List:", orderListRef.value);
        // console.log("Result Order:", resultOrderRef.value);

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
      foodDataRef,
      orderDataRef,
      formatDate,
      getUserById,
      getTableById,
      getQueById,
      getFoodById,
      getOrderById,
      getImagePath,
      getOrderData,
      showButtonLabel,
      handleClick,
      sortByDate,
      sortedQueDataRef,
      orderListRef,
      resultOrderRef,
    };
  },
};
</script>

<style scoped>
.modal-header {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(.3rem - 1px);
  border-top-right-radius: calc(.3rem - 1px);
  padding: 1rem;
}

.modal {
  display: block;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
}

.modal-footer {
  display: flex;
  flex-wrap: wrap;
  flex-shrink: 0;
  align-items: center;
  justify-content: flex-end;
  padding: .75rem;
  border-top: 1px solid #dee2e6;
  border-bottom-right-radius: calc(.3rem - 1px);
  border-bottom-left-radius: calc(.3rem - 1px);
}

.modal-content {
  background-color: #fff;
  width: 400px;
  border: none;
  box-shadow: none;
}




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

.table-container {
  overflow: auto;
  height: 750px;
}

.table-container thead th {
  position: sticky;
  top: 0;
  z-index: 1;
}


table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  padding: 8px 16px;
}

th {
  background: #eee;
}
</style>
