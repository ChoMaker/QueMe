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
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC02</th>
                            <td>Feel Goose</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC03</th>
                            <td>เปรี้ยวหวานบ้านเพื่อน</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC04</th>
                            <td>วิบวับ</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC05</th>
                            <td>พักใจบ้านเพื่อน</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC06</th>
                            <td>บ้านเพื่อน Spritz</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC07</th>
                            <td>Mojito บ้านเพื่อน</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC08</th>
                            <td>Cherry Zero</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC09</th>
                            <td>Shirley Temple</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC10</th>
                            <td>Yuzu Martini</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SC11</th>
                            <td>Long Island Blue Sea</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT18</th>
                            <td>Rainbow Shot</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT20</th>
                            <td>Lamboghini</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT22</th>
                            <td>ชิงช้าบ้านเพื่อน</td>
                            <td>1,290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT01</th>
                            <td>เหล้าปั่น สตอเบอร์รี่</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT02</th>
                            <td>เหล้าปั่น ลิ้นจี่</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT03</th>
                            <td>เหล้าปั่น กีวี่</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT04</th>
                            <td>เหล้าปั่น บลูเบอรี่</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT05</th>
                            <td>เหล้าปั่น แอปเปิ้ล</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT06</th>
                            <td>เหล้าปั่น บลูฮาวาย</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">CT07</th>
                            <td>เหล้าปั่น องุ่น</td>
                            <td>390.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ01</th>
                            <td>JINRO Green Grape(360ml)</td>
                            <td>239.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ02</th>
                            <td>JINRO GrapeFruit(360ml)</td>
                            <td>239.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ03</th>
                            <td>JINRO Peach(360ml)</td>
                            <td>239.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ04</th>
                            <td>JINRO Palm(360ml)</td>
                            <td>239.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ05</th>
                            <td>JINRO Strawberry(360ml)</td>
                            <td>239.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ06</th>
                            <td>JINRO Toktok WhiteGrape(รสองุ่นขาว) กระป๋อง</td>
                            <td>79.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ07</th>
                            <td>JINRO Toktok Yuzu(รสยูซุ) กระป๋อง</td>
                            <td>79.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ08</th>
                            <td>JINRO Toktok Peach(รสพีข) กระป๋อง</td>
                            <td>79.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ09</th>
                            <td>JINRO Toktok Ume(รสบ๊วย) กระป๋อง</td>
                            <td>79.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ10</th>
                            <td>JINRO Toktok Melon(รสเมลอน) กระป๋อง</td>
                            <td>79.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ11</th>
                            <td>JINRO Toktok WhiteSour(รสนมเปรี้ยว) กระป๋อง</td>
                            <td>79.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">SJ12</th>
                            <td>JINRO Toktok Strawberry(รสสตรอว์เบอร์รี่) กระป๋อง</td>
                            <td>79.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE01</th>
                            <td>My ขวด</td>
                            <td>119.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BEO2</th>
                            <td>Chang Classic ขวด</td>
                            <td>129.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE03</th>
                            <td>Leo ขวด</td>
                            <td>129.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE04</th>
                            <td>Chang Cold Brew ขวด</td>
                            <td>139.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE05</th>
                            <td>Singha ขวด</td>
                            <td>149.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE06</th>
                            <td>Budweiser ขวด</td>
                            <td>159.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE07</th>
                            <td>Heineken</td>
                            <td>169.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE08</th>
                            <td>Budweiser ทาวเวอร์ 3 L</td>
                            <td>890.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE09</th>
                            <td>Hoegaarden White กระป๋อง (500ML)</td>
                            <td>330.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">BE10</th>
                            <td>Hoegaarden Rosee</td>
                            <td>220.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI01</th>
                            <td>WINE (GLASS)</td>
                            <td>290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI02</th>
                            <td>WOLF BLASS EAGLEHAWK CHARDONNAY</td>
                            <td>990.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI03</th>
                            <td>WOLF BLASS EAGLEHAWK SHIRAZ</td>
                            <td>990.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI04</th>
                            <td>WOLF BLASS EAGLEHAWK MERLOT</td>
                            <td>990.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI05</th>
                            <td>WOLF BLASS EAGLEHAWK CUVEE BRUT</td>
                            <td>990.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI06</th>
                            <td>WOLF BLASS EAGLEHAWK CABERNET SAUVIGNON</td>
                            <td>990.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI07</th>
                            <td>WOLF BLASS YELLOW LABEL CHARDONNAY</td>
                            <td>1,590.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI08</th>
                            <td>WOLF BLASS GOLD LABEL SHIRAZ</td>
                            <td>1,990.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI09</th>
                            <td>WOLF BLASS GOLD LABEL CHARDONNAY</td>
                            <td>1,990.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI10</th>
                            <td>MATUA SAUVIGNON BLANC</td>
                            <td>1,590.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI11</th>
                            <td>19 CRIMES SHIRAZ</td>
                            <td>1,290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI12</th>
                            <td>19 CRIMES RED BLEND</td>
                            <td>1,290.-</td>
                            <td><input class="form-control" style="width: 50px;" type="text" placeholder="0"
                                    aria-label="default input example"></td>
                        </tr>
                        <tr>
                            <th scope="row">WI13</th>
                            <td>19 CRIMES CABERNET SAUVIGNON</td>
                            <td>1,290.-</td>
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