<template>
    <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto;">
            </a>
            <div class="d-flex justify-content-end">
                <button class="btn btn-outline-light space" @click="router.push({ name: 'ClientHome' })"
                    type="submit">Home</button>
                <button class="btn btn-outline-light space" @click="router.push({ name: 'Profile' })"
                    type="submit">Profile</button>
                <button class="btn btn-outline-light" @click="router.push({ name: 'Login' })" type="submit">Logout</button>
            </div>
        </div>
    </nav>
    <div class="flex-container">
        <div style="margin-top: 40px; margin-bottom: 40px; display: flex; justify-content: space-between;">
            <div>
                <button class="btn btn-outline-light space" @click="router.push({ name: 'Menu' })" type="submit">Food &
                    Appetizer</button>
                <button class="btn btn-outline-light space" @click="router.push({ name: 'MenuDrink' })" type="submit">Drinks
                    & Beverages</button>
            </div>
            <div class="row">
                <p class="justify-content-between">หากไม่ต้องการสั่งอาหารล่วงหน้าสามารถคลิกปุ่ม "Next"</p>
                <button class="btn btn-outline-light space" @click="router.push({ name: 'ConfirmReserve' })"
                    type="submit">Next</button>
            </div>
        </div>


        <div class="row seperateMenu">
            <div class="col-lg-6">
                <img src="/src/assets/menu/drink/1.png" alt="Logo">
                <img src="/src/assets/menu/drink/2.png" alt="Logo">
                <img src="/src/assets/menu/drink/3.png" alt="Logo">
                <img src="/src/assets/menu/drink/4.png" alt="Logo">
            </div>
            <div class="col-lg-6">
                <table class="table" id="menuDrinkTable">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Price</th>
                            <th scope="col">Item</th>
                        </tr>
                    </thead>
                    <tbody>
                         </tbody>
                </table>
            </div>
        </div>  
    </div>
    <div class="container checkbox-margin ">
        <div class="d-flex justify-content-end">
            <button class="btn btn btn-dark space" @click="router.push({ name: 'ClientHome' })"
                type="submit">Back</button>
            <button class="btn btn btn-dark" @click="router.push({ name: 'ConfirmReserve' })"
                type="submit">Next</button>
        </div>
    </div>
</template>
<script>
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter();
        return { router };
    }

}
</script>
<style scoped>
p {
    color: #fff;
    margin-top: 0;
    margin-bottom: 0;
}

.seperateMenu {
    margin-bottom: 40px;
}

.btn {
    border-radius: 20px;
    min-width: 110px;
}

.space {
    margin-right: 22px;
}
</style>