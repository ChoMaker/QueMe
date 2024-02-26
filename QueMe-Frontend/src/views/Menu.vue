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


        <!-- Steak -->
        <div class="row seperateMenu">
            <div class="col-lg-6">
                <img src="/src/assets/menu/food/1.png" alt="Logo">
                <img src="/src/assets/menu/food/2.png" alt="Logo">
                <img src="/src/assets/menu/food/3.png" alt="Logo">
                <img src="/src/assets/menu/food/4.png" alt="Logo">
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
                            <th scope="row">ST01</th>
                            <td>Steak เนื้อ Ribeye 250g น้ำจิ้มแจ่ว</td>
                            <td>890.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">ST02</th>
                            <td>ซี่โครง บาร์บีคิว</td>
                            <td>229.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">ST03</th>
                            <td>เนื้อร่องซี่โครง บาร์บีคิว</td>
                            <td>349.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SY01</th>
                            <td>ยำมาม่า</td>
                            <td>189.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SY02</th>
                            <td>ยำวุ้นเส้น</td>
                            <td>189.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SY03</th>
                            <td>ยำหมูยอไข่แดง</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SY04</th>
                            <td>ยำไส้กรอกหมูสับ</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S05</th>
                            <td>คอหมูมะนาว</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S06</th>
                            <td>ลวกจิ้ม ลูกชิ้นปลา</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S07</th>
                            <td>ลวกจิ้ม เกี๊ยวปลา</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S08</th>
                            <td>ลวกจิ้ม ทะเล</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S09</th>
                            <td>ยำแซลม่อน</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S10</th>
                            <td>ยำเกี๊ยวปลา</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S11</th>
                            <td>ยำหอยนางรม</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S12</th>
                            <td>ยำทะเลรวมมิตร</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S13</th>
                            <td>ยำกุ้งใส่ไข่แดง</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S14</th>
                            <td>กุ้งแช่น้ำปลา</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S15</th>
                            <td>แซลม่อนดองน้ำปลา</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">S16</th>
                            <td>ยำคอหมูถั่วพลู</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D01</th>
                            <td>ไข่ดาว</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D02</th>
                            <td>สุกี้</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D03</th>
                            <td>ก๋วยเตี๋ยวคั่ว</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D04</th>
                            <td>ผัดซีอิ๊ว</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D05</th>
                            <td>ผัดมาม่า</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D06</th>
                            <td>ผัดมาม่าขี้เมา</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D07</th>
                            <td>ข้าวต้ม</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D08</th>
                            <td>ข้าวไข่เจียว</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D09</th>
                            <td>ข้าวผัด</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D10</th>
                            <td>ข้าวผัดต้มยำ</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D11</th>
                            <td>คั่วพริกเกลือ</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D12</th>
                            <td>ทอดกระเทียม</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D13</th>
                            <td>ผัดคะน้า</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D14</th>
                            <td>ผัดผงกะหรี่</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D15</th>
                            <td>ผัดพริกแกง</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D16</th>
                            <td>ผัดน้ำมันหอย</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D17</th>
                            <td>ผัดกะเพรา</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D18</th>
                            <td>ผัดพริกหยวก</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D19</th>
                            <td>ข้าวผัดกะเพรา</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">D20</th>
                            <td>ข้าวผัดรถไฟ</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A01</th>
                            <td>ป๊อปคอร์น</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A02</th>
                            <td>มะนาว 10 ชิ้น + เกลือ</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A03</th>
                            <td>ชีสบอล</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A04</th>
                            <td>ไส้กรอกทอด</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A05</th>
                            <td>หมูยอทอด</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A06</th>
                            <td>รวมถั่วอาบัง</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A07</th>
                            <td>ข้าวเกรียบบ้านเพื่อน</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A08</th>
                            <td>เม็ดมะม่วงหิมพานต์</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A09</th>
                            <td>นักเก็ตไก่</td>
                            <td>Otto</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A10</th>
                            <td>ปูอัดซาชิมิ</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A11</th>
                            <td>เฟรนช์ฟราย</td>
                            <td>Thornton</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">A12</th>
                            <td>เกี๊ยวซ่าทอด</td>
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
            <button class="btn btn btn-dark space" @click="router.push({ name: 'ClientHome' })" type="submit">Back</button>
            <button class="btn btn btn-dark" @click="router.push({ name: 'ConfirmReserve' })" type="submit">Next</button>
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