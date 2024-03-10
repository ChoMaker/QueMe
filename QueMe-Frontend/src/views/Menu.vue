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
          class="btn btn-outline-light space"
          @click="router.push({ name: 'ClientHome' })"
          type="submit"
        >
          Home
        </button>
        <button
          class="btn btn-outline-light space"
          @click="router.push({ name: 'Profile' })"
          type="submit"
        >
          Profile
        </button>
        <button
          class="btn btn-outline-light"
          @click="router.push({ name: 'Login' })"
          type="submit"
        >
          Logout
        </button>
      </div>
    </div>
  </nav>

  <div class="flex-container">
    <div
      style="
        margin-top: 40px;
        margin-bottom: 40px;
        display: flex;
        justify-content: space-between;
      "
    >
      <div>
        <button
          class="btn btn-outline-light space"
          @click="router.push({ name: 'Menu' })"
          type="submit"
        >
          Food & Appetizer
        </button>
        <button
          class="btn btn-outline-light space"
          @click="router.push({ name: 'MenuDrink' })"
          type="submit"
        >
          Drinks & Beverages
        </button>
      </div>
      <div class="row">
        <div class="d-flex justify-content-between">
          <p class="align-self-center" style="margin-right: 20px">
            หากไม่ต้องการสั่งอาหารล่วงหน้าสามารถคลิกปุ่ม "Next"
          </p>
          <button
            class="btn btn btn-dark"
            @click="router.push({ name: 'ConfirmReserve' })"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </div>
    <!-- picture -->
    <div class="row seperateMenu">
      <div class="col-lg-6">
        <img src="/src/assets/menu/food/1.png" alt="Logo" />
        <img src="/src/assets/menu/food/2.png" alt="Logo" />
        <img src="/src/assets/menu/food/3.png" alt="Logo" />
        <img src="/src/assets/menu/food/4.png" alt="Logo" />
      </div>

      <!-- table -->

      <!-- table -->
      <div class="col-lg-6">
        <div class="card">
          <div class="container-fluid">
            <form class="d-flex searchbar" @submit.prevent="search">
              <input
                v-model="searchTerm"
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>

          <table class="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="food in resultFood" :key="food.id">
                <th scope="row">{{ food.id }}</th>
                <td>{{ food.name }}</td>
                <td>{{ food.price }}</td>
                <td class="d-flex">
                  <div class="input-group" style="width: 160px">
                    <button class="decrement" @click="decrement(food.id)">
                      -
                    </button>
                    <input
                      class="inndeform"
                      type="number"
                      v-model="food.quantity"
                      readonly
                    />
                    <button class="increment" @click="increment(food.id)">
                      +
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <!-- <div v-else>
            <p>No results found.</p>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <div class="container checkbox-margin">
    <div class="d-flex justify-content-end">
      <button
        class="btn btn btn-dark space"
        @click="router.push({ name: 'ClientHome' })"
        type="submit"
      >
        Cancel
      </button>
      <button
        class="btn btn btn-dark"
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
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const router = useRouter();

    const resultFood = ref([]);

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
        const itemsToSend = selectedItems.map(({ id, quantity }) => ({ id,quantity,}));
        console.log("Items to Send:", itemsToSend);
        console.log("Result Food :", resultFood.value);

        // Send only the selected items to the server
        const response = await axios.post("http://localhost:4000/qm/reserveorder",{items: itemsToSend,});
        console.log("Server response:", response.data);
        router.push({ name: "ConfirmReserve" });
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    const search = () => {
      // Implement your search logic here
    };

    const searchTerm = ref("");

    onMounted(async () => {
      try {
        const response = await axios.get("http://localhost:4000/qm/getfoods");
        // Initialize resultFood as an empty array
        resultFood.value = [];
        // Update resultFood with the data from the server
        resultFood.value = response.data.data[0].map((food) => ({
          ...food,
          quantity: 0,
        }));
        // console.log("result foodddd:",resultFood.value);
        console.log("Response:", response);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    });

    return {
      router,
      resultFood,
      increment,
      decrement,
      handleNextButtonClick,
      search,
      searchTerm,
    };
  },
};
</script>

<style scoped>
.searchbar {
  margin: 10px;
  align-self: center;
}
/* form {
  width: 300px;
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
} */

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

.checkbox-margin {
  margin-bottom: 15px;
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
</style>
