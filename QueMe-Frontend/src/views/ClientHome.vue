<template>
  <div class="row">
    <!-- Navbar -->
    <nav
      class="navbar navbar-expand-lg navbar-light"
      style="position: relative; z-index: 1; padding-left: 10px; padding-right: 10px;"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/src/assets/logo-removebg.png" alt="Logo" style="width: 91px; height: auto"/>
        </a>
        <div>
          <button class="btn navbarBtn space" @click="router.push({ name: 'ClientHome' })" type="submit">
            Home
          </button>
          <button class="btn navbarBtn space" @click="router.push({ name: 'Profile' })" type="submit">
            Profile
          </button>
          <button class="btn navbarBtn" @click="router.push({ name: 'Login' })" type="submit">
            Logout
          </button>
        </div>
      </div>
    </nav>
  </div>

  <!-- Main -->
  <div
    class="container"
    style="
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      color: #fff;
    "
  >
    <div>
      <b style="font-size: 96px">Banpeun</b><br/>
      <b style="font-size: 96px; padding-left: 100px; line-height: 0.1%">Bangkok</b>
      <p style="text-align: left; margin-top: 18px">
        Banpuen Bangkok, a chill-out restaurant in the Kaset area with live
        music, free concerts, and many more promotions.</p>
      <button class="btn reserveBtn justify-content-center" @click="router.push({ name: 'Home' })" type="button">RESERVE</button>
    </div>
    <img src="/src/assets/cola.png" style="width: 620px; margin-bottom: 80px;" />
  </div>


  <!-- UPCOMING EVENTS -->
  <div class="row" style="background-color: #3E3B2C;">
    <div class="container">
      <p class="upcomingText">UPCOMING EVENTS</p>
      <div class="row">
        <div class="col-lg-3">
          <div class="card">
            <!-- picture -->
            <img src="/src/assets/smlCard/LazyLoxy.png" class="card-img-top" />
            <div class="card-body">
              <p class="card-title">Lazy Loxy & Samblack</p>
              <p class="card-text">7 January 2024</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <!-- picture -->
            <img src="/src/assets/smlCard/Polycat.png" class="card-img-top" />
            <div class="card-body">
              <p class="card-title">Polycat</p>
              <p class="card-text">15 January 2024</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <!-- picture -->
            <img src="/src/assets/smlCard/Loey.png" class="card-img-top" />
            <div class="card-body">
              <p class="card-title">Joey Phuwasit</p>
              <p class="card-text">17 January 2024</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <!-- picture -->
            <img src="/src/assets/smlCard/MEAN.png" class="card-img-top" />
            <div class="card-body">
              <p class="card-title">MEAN</p>
              <p class="card-text">21 January 2024</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-3">
          <div class="card">
            <!-- picture -->
            <img
              src="/src/assets/smlCard/ThreeManDown.png"
              class="card-img-top"
            />
            <div class="card-body">
              <p class="card-title">Three man down</p>
              <p class="card-text">25 January 2024</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3">
          <div class="card">
            <!-- picture -->
            <img src="/src/assets/smlCard/KwanJai.png" class="card-img-top" />
            <div class="card-body">
              <p class="card-title">Kwanjai (คณะขวัญใจ)</p>
              <p class="card-text">31 January 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- footer -->
  <div class="container" style="margin-top: 20px;">
    <div class="flex-container">
      <p class="btmtext">banpuenbangkok</p>
      <p class="btmtext">Contact banpuenbangkok</p>
    </div>
    <div class="row">
      <div class="herizontal-line"></div>

      <div class="col-3 text-end ms-auto">
        <p style="color: #fff">Line : @banpuenbangkok</p>
        <p style="color: #fff">Facebook</p>
        <p style="color: #fff">Instagram</p>
      </div>
    </div>
  </div>

  <div class="container"></div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  methods: {
    openLinePage() {
      const linePageURL = "https://page.line.me/918szrut?openQrModal=true";
      window.location.href = linePageURL;
    },
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  name: "ClientHome",
};
</script>

<style scoped>
.navbarBtn {
    width: 100px;
    height: 35px;
    background-color: #E6E5C7;
    color: #3E3B2C;
    text-align: center;
    padding-inline: 0.5px;
    font-weight: 550;

}
.navbarBtn:hover {
    width: 100px;
    height: 35px;
    background-color: #acab93;
    color: #3E3B2C;
    text-align: center;
    padding-inline: 0.5px;
    font-weight: 550;

}

.reserveBtn {
    align-items: center;
    width: 250px;
    height: 45px;
    margin-top: 10px;
    background-color: #FF4E08;
    color: #fff;
    font-size: 18px;
    font-weight: 650;
}
.reserveBtn:hover{
    align-items: center;
    width: 250px;
    height: 45px;
    margin-top: 10px;
    background-color: #af3606;
    color: #fff;
    font-size: 18px;
    font-weight: 650;
}
.btn {
  border-radius: 20px;
  min-width: 110px;
}

.footerMargin {
  margin-bottom: 22px;
}

.btnFooter {
  border-radius: 50px;
  height: 45px;
}

.bgcard {
  background-color: aliceblue;
}

.box-black02 {
  background-color: #373743;
}

.box-black01 {
  background-color: #434552;
}

.herizontal-line {
  width: 100%;
  height: 1px;
  background-color: #fff;
  margin-bottom: 20px;
}

.btmtext {
  color: #fff;
  font-size: 15px;
}

.flex-container {
  display: flex;
  justify-content: space-between;
}

.card {
  margin-right: 30px;
  margin-bottom: 30px;
  width: 100%;
  position: relative;
}

.card-body {
  background-color: aliceblue;
}

.card-title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  margin-bottom: 0.1rem;
}

.card-text {
  font-size: 16px;
  line-height: 24px;
  font-weight: 400;
}

.upcomingText {
  font-size: 25px;
  line-height: 24px;
  text-align: left;
  font-weight: 500;
  margin-top: 66px;
  margin-bottom: 20px;
  color: #fff;
}

@media (min-width: 1280px) {
  .container {
    max-width: 1100px;
    /* Set the maximum width for the container */
    margin: 0 auto;
    /* Center the container horizontally */
  }
}

.space {
  margin-right: 22px;
}

.center {
  justify-content: center;
  display: flex;
}
</style>
