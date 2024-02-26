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
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Menu</th>
                            <th scope="col">Price</th>
                            <th scope="col">Item</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">SC01</th>
                            <td>Fire box shot</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC02</th>
                            <td>Feel Goose</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC03</th>
                            <td>เปรี้ยวหวานบ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC04</th>
                            <td>วิบวับ</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC05</th>
                            <td>พักใจบ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC06</th>
                            <td>บ้านเพื่อน Spritz</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC07</th>
                            <td>Mojito บ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC08</th>
                            <td>Cherry Zero</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC09</th>
                            <td>Shirley Temple</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC10</th>
                            <td>Yuzu Martini</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC11</th>
                            <td>Long Island Blue Sea</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT18</th>
                            <td>Rainbow Shot</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT20</th>
                            <td>Lamboghini</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT22</th>
                            <td>ชิงช้าบ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT01</th>
                            <td>เหล้าปั่น สตอเบอร์รี่</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT02</th>
                            <td>เหล้าปั่น ลิ้นจี่</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT03</th>
                            <td>เหล้าปั่น กีวี่</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT04</th>
                            <td>เหล้าปั่น บลูเบอรี่</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT05</th>
                            <td>เหล้าปั่น แอปเปิ้ล</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT06</th>
                            <td>เหล้าปั่น บลูฮาวาย</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT07</th>
                            <td>เหล้าปั่น องุ่น</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ01</th>
                            <td>JINRO Green Grape(360ml)</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ02</th>
                            <td>JINRO GrapeFruit(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ01</th>
                            <td>JINRO Peach(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ02</th>
                            <td>JINRO Palm(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC01</th>
                            <td>Fire box shot</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC02</th>
                            <td>Feel Goose</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC03</th>
                            <td>เปรี้ยวหวานบ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC04</th>
                            <td>วิบวับ</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC05</th>
                            <td>พักใจบ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC06</th>
                            <td>บ้านเพื่อน Spritz</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC07</th>
                            <td>Mojito บ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC08</th>
                            <td>Cherry Zero</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC09</th>
                            <td>Shirley Temple</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC10</th>
                            <td>Yuzu Martini</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC11</th>
                            <td>Long Island Blue Sea</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT18</th>
                            <td>Rainbow Shot</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT20</th>
                            <td>Lamboghini</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT22</th>
                            <td>ชิงช้าบ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT01</th>
                            <td>เหล้าปั่น สตอเบอร์รี่</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT02</th>
                            <td>เหล้าปั่น ลิ้นจี่</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT03</th>
                            <td>เหล้าปั่น กีวี่</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT04</th>
                            <td>เหล้าปั่น บลูเบอรี่</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT05</th>
                            <td>เหล้าปั่น แอปเปิ้ล</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT06</th>
                            <td>เหล้าปั่น บลูฮาวาย</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT07</th>
                            <td>เหล้าปั่น องุ่น</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ01</th>
                            <td>JINRO Green Grape(360ml)</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ02</th>
                            <td>JINRO GrapeFruit(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ01</th>
                            <td>JINRO Peach(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ02</th>
                            <td>JINRO Palm(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT06</th>
                            <td>เหล้าปั่น บลูฮาวาย</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT07</th>
                            <td>เหล้าปั่น องุ่น</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ01</th>
                            <td>JINRO Green Grape(360ml)</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ02</th>
                            <td>JINRO GrapeFruit(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ01</th>
                            <td>JINRO Peach(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ02</th>
                            <td>JINRO Palm(360ml)</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>

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