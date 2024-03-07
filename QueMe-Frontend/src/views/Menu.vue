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

      <div class="col-lg-6">
        <div class="card">
    <!-- search bar -->
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

          <table class="table" v-if="searchedItems && searchedItems.length > 0">
            <thead>
              <tr>
                <!-- <th style="width: 20px;">Item</th>
                      <th>Your orders</th>
                      <th style="width: 100px;">Price</th> -->
                <th>Your orders</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in searchedItems" :key="index">
                <td>{{ item.menu }}</td>
                <td>{{ item.price }}</td>
                <td class="d-flex">
                  <div class="input-group" style="width: 160px">
                    <button class="decrement" @click="decrement(index)">
                      -
                    </button>
                    <input
                      class="inndeform"
                      type="number"
                      v-model="item.count"
                      readonly
                    />
                    <button class="increment" @click="increment(index)">
                      +
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>

          <div v-else>
      <p>No results found.</p>
    </div>

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
        Back
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

    const counter = ref(0);
    const items = ref([]);
    const searchTerm = ref("");
    const searchedItems = ref([]);

    const increment = (index) => {
      counter.value++;
      items[index].count++;
      console.log(items[index].count);
    };

    const decrement = (index) => {
      if (items[index].count > 0) {
        counter.value--;
        items[index].count--;
        console.log(items[index].count);
      }
    };

    const handleNextButtonClick = async () => {
      try {
        // Perform the API post request to save data to the database
        const response = await axios.post("http://localhost:4000/gm/getMenu", {
            items: items.value,
        });

        // Log the server response
        console.log("Server response:", response.data);

        // Navigate to the next route (change this based on your router configuration)
        router.push({ name: "NextPage" });
      } catch (error) {
        console.error("Error posting data:", error);
      }
    };

    const filterItems = () => {
      const lowerCaseSearchTerm = searchTerm.value.toLowerCase();
      return items.value.filter(
        (item) => item.menu.toLowerCase().includes(lowerCaseSearchTerm)
      );
    };

    onMounted(async () => {
      try {
        const response = await axios.get("http://localhost:4000/gm/getMenu");
        items.value = response.data;
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    });

    return {
      router,
      items,
      counter,
      increment,
      decrement,
      handleNextButtonClick,searchedItems,
      searchTerm,
      filterItems
    };
  },
};
</script>

<style scoped>

.searchbar{
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
