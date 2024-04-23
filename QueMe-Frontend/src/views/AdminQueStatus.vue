<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto" />
            </a>
            <div class="d-flex justify-content-end">
                <button class="btn btn-link" style="color: #fff" @click="router.push({ name: 'AdminEvent' })"
                    type="submit">
                    Event
                </button>
                <button class="btn btn-link" style="color: #fff" @click="router.push({ name: 'AdminQue' })"
                    type="submit">
                    Que
                </button>
                <button class="btn btnAll" @click="router.push({ name: 'Login' })" type="submit">
                    Logout
                </button>
            </div>
        </div>
    </nav>

    <div class="container">
        <table class="table table table-hover">
            <thead>
                <tr>
                    <th scope="col" style="text-align: start;">Date</th>
                    <th scope="col" style="text-align: start;">Name</th>
                    <th scope="col" style="text-align: start;">Table</th>
                    <th scope="col" style="text-align: center;">Phone number</th>
                    <th scope="col" style="text-align: center;"></th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="(item, index) in queDataRef" :key="index">
                    <td scope="row" style="text-align: start;">{{ formatDate(item.date_and_time) }}</td>
                    <td style="text-align: start;">{{ getUserById(item.user_id).name }}</td>
                    <td style="text-align: start;">{{ getTableById(item.table_id).zone }}{{
                        getTableById(item.table_id).name }}
                    </td>
                    <td style="text-align: center;">{{ getUserById(item.user_id).phone_number }}</td>
                    <td>
                        <button class="btn btn-primary" @click="openModal(selectedRow)">
                            Reservation Detail
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
    name: "Status",
    components: {
        "ejs-datepicker": DatePickerComponent,
    },

    setup(props, { emit }) {
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
                const [adminTableResponse, foodResponse] = await Promise.all([
                    axios.get(`${BASR_URL}/${RoutePathUrl.adminTable}`),
                    axios.get(`${BASR_URL}/${RoutePathUrl.getFoodData}`)
                ]);

                const { que, user, table, event, order, food } = adminTableResponse.data.result;
                queDataRef.value = que || [];
                userData.value = user || [];
                tableDataRef.value = table || [];
                eventDataRef.value = event || [];
                orderDataRef.value = order || [];
                foodDataRef.value = food || [];

                const { orderList, resultOrder } = foodResponse.data.result;
                orderListRef.value = orderList || [];
                resultOrderRef.value = resultOrder || [];

                console.log("Order List:", orderListRef.value);
                console.log("Result Order:", resultOrderRef.value);
                // console.log("queDataRef", queDataRef.value)
                // console.log("userData", userData.value)
                // console.log("tableDataRef", tableDataRef.value)
                // console.log("eventDataRef", eventDataRef.value)
                console.log("orderDataRef", orderDataRef.value)
                // console.log("foodDataRef", foodDataRef.value)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        });

        const minDate = ref(new Date());
        minDate.value.setDate(minDate.value.getDate());
        const selectedDate = ref("");

        const sortedQueDataRef = computed(() => {
            return queDataRef.value;
        });

        const showButtonLabel = computed(() => {
            return queDataRef.value.status ? "Cancel" : "Confirm";
        });
        return {
            queDataRef,
            userData,
            tableDataRef,
            eventDataRef,
            orderDataRef,
            foodDataRef,
            orderListRef,
            resultOrderRef,
            minDate,
            getImagePath,
            handleClick,
            sortByDate,
            getUserById,
            getTableById,
            getQueById,
            getFoodById,
            getOrderById,
            selectedDate,
            sortedQueDataRef,
            formatDate,
            showButtonLabel
        };
    },
};

</script>

<style scoped>
.btn {
    border-radius: 20px;
    min-width: 110px;
}

.space {
    margin-right: 22px;
}

.btnAll {
    border-radius: 20px;
    min-width: 110px;
    background-color: #ff4e08;
    color: #fff;
}
</style>