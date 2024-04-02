<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto" />
      </a>
      <div class="d-flex justify-content-end">
        <button class="btn navBtn space" @click="router.push({ name: 'ClientHome' })" type="submit">
          Home
        </button>
        <button class="btn navBtn space" @click="router.push({ name: 'Profile' })" type="submit">
          Profile
        </button>
        <button class="btn navBtn" @click="router.push({ name: 'Login' })" type="submit">
          Logout
        </button>
      </div>
    </div>
  </nav>

  <div class="container">
    <div style="
          margin-top: 40px;
          margin-bottom: 20px;
          display: flex;
          justify-content: space-between;
        ">
      <div></div>
      <div class="row">
        <div class="d-flex justify-content-between">
          <p class="align-self-center" style="margin-right: 20px">
            หากไม่ต้องการสั่งอาหารล่วงหน้าสามารถคลิกปุ่ม "Next"
          </p>
          <button style="color: #fff;" class="btn otherBtn" @click="router.push({ name: 'ConfirmReserve' })"
            type="submit">
            Next
          </button>
        </div>
      </div>
    </div>

    <!-- picture -->
    <div class="row seperateMenu">
      <div class="col-lg-6" style="text-align: center; overflow-x: auto; white-space: nowrap;">
        <img src="/src/assets/menu/food/1.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
        <img src="/src/assets/menu/food/2.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
        <img src="/src/assets/menu/food/3.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
        <img src="/src/assets/menu/food/4.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
        <img src="/src/assets/menu/drink/1.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
        <img src="/src/assets/menu/drink/2.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
        <img src="/src/assets/menu/drink/3.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
        <img src="/src/assets/menu/drink/4.png" alt="Logo" style="display: inline-block; margin-right: 10px;" />
      </div>

      <!-- table -->
      <div class="col-lg-6">
        <div class="card">
          <div class="container-fluid">
            <form class="d-flex searchbar" @submit.prevent="search">
              <input v-model="input" class="form-control me-2" type="text" placeholder="Search.." aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <div class="tableFixHead">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="food in filteredList" :key="food.id">
                  <th scope="row">{{ food.id }}</th>
                  <td>{{ food.name }}</td>
                  <td>{{ food.price }}</td>
                  <td class="d-flex">
                    <div class="input-group" style="width: 160px">
                      <button class="decrement" @click="decrement(food.id)">
                        -
                      </button>
                      <input class="inndeform" type="number" v-model="food.quantity" readonly />
                      <button class="increment" @click="increment(food.id)">
                        +
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="d-flex justify-content-end" style="margin-top: 20px">
          <button style="color: #fff;" class="btn otherBtn space" @click="router.push({ name: 'ClientHome' })"
            type="submit">
            Cancel
          </button>
          <button style="color: #fff;" class="btn otherBtn" @click="handleNextButtonClick" type="submit">
            Next
          </button>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { useRouter } from "vue-router";
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { BASR_URL } from "@/config/app";
import RoutePathUrl from "@/config/route";

export default {
  setup() {
    const router = useRouter();

    const resultFood = ref([]);
    const input = ref("");

    const search = async () => {
      try {
        const response = await axios.get(`${BASR_URL}/${RoutePathUrl.getmenu}`, {
          params: { search: input.value, },
        }
        ); resultFood.value = response.data.data[0].map((food) => ({
          ...food, quantity: 0,
        }));
      } catch (error) {
        console.error("Error searching menu:", error);
      }
    };

    const increment = (id) => {
      const food = resultFood.value.find((item) => item.id === id);
      if (food) {
        food.quantity++;
      }
    };

    const decrement = (id) => {
      const food = resultFood.value.find((item) => item.id === id);
      if (food && food.quantity > 0) {
        food.quantity--;
      }
    };

    const handleNextButtonClick = async () => {
      try {
        // Filter out items with quantity greater than 0
        const selectedItems = resultFood.value.filter(
          (food) => food.quantity > 0
        );

        // Extract only the id and quantity properties
        const itemsToSend = selectedItems.map(({ id, quantity }) => ({
          food_id: id,
          que_id: parseInt(localStorage.getItem("queID")),
          quantity: quantity,
        }));

        // Send only the selected items to the server
        const response = await axios.post(
          `${BASR_URL}/${RoutePathUrl.getque}`,
          itemsToSend
        );
        console.log("Server response:", response.data);
        router.push({ name: "ConfirmReserve" });
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    onMounted(async () => {
      try {
        const response = await axios.get(`${BASR_URL}/${RoutePathUrl.getmenu}`);
        resultFood.value = [];
        resultFood.value = response.data.data[0].map((food) => ({
          ...food,
          quantity: 0,
        }));

        console.log("Response:", response);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    });

    const filteredList = computed(() => {
      return resultFood.value.filter((food) =>
        food.name.toLowerCase().includes(input.value.toLocaleLowerCase())
      );
    });

    return {
      router,
      resultFood,
      increment,
      decrement,
      handleNextButtonClick,
      search,
      input,
      filteredList,
    };
  },
};
</script>

<style scoped>
.otherBtn {
  border-radius: 20px;
  min-width: 110px;
  background-color: #FF4E08;
  color: #000;
}

.navBtn {
  border-radius: 20px;
  min-width: 110px;
  background-color: #e6e5c7;
  color: #000;
}

.searchbar {
  margin: 10px;
  align-self: center;
}

.value-button {
  display: inline-block;
  border: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 20px;
  text-align: center;
  vertical-align: middle;
  padding: 11px 0;
  background: #eee;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.value-button:hover {
  cursor: pointer;
}

form #decrease {
  margin-right: -4px;
  border-radius: 8px 0 0 8px;
}

form #increase {
  margin-left: -4px;
  border-radius: 0 8px 8px 0;
}

form #input-wrap {
  margin: 0px;
  padding: 0px;
}

input#number {
  text-align: center;
  border: none;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin: 0px;
  width: 40px;
  height: 40px;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.inndeform {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 18px;
  height: 20px;
  width: 70px;
  text-align: center;
}

.increment {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 18px;
  height: 20px;
  border-bottom-right-radius: 15px;
  border-top-right-radius: 15px;
}

.decrement {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  text-align: center;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 18px;
  height: 20px;
  border-bottom-left-radius: 15px;
  border-top-left-radius: 15px;
}

.seperateMenu {
  margin-bottom: 40px;
}

.btn {
  border-radius: 20px;
  min-width: 110px;
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

.food {
  font-size: 25px;
  line-height: 24px;
  text-align: left;
  font-weight: 500;
  margin-top: 66px;
  margin-bottom: 20px;
  color: #fff;
}

.space {
  margin-right: 22px;
}

.tableFixHead {
  overflow: auto;
  height: 580px;
}

.tableFixHead thead th {
  position: sticky;
  top: 0;
  z-index: 1;
}

/* Just common table stuff. Really. */
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
