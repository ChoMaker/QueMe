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
  
    <div class="container">
      <div class="row">
        <p class="reservation">Reservation</p>
        <div class="col-lg-8">
          <img src="/src/assets/map.png" />
          <p class="col-lg-12 description">
            เงื่อนไขการจอง กรุณามาก่อนเวลา 20.00น. เพื่อไม่ให้โต๊ะหลุด<br />
            - จองล่วงหน้าไม่เกิน 7 วัน<br />
            - จองตั้งเเต่ 9 คนขึ้นไป ถึงเวลา 20.00น.<br />
            ลูกค้ามารับโต๊ะไม่ถึง ครึ่งหนึ่งของจำนวนที่จองของอนุญาต เเยกโต๊ะ<br />
            -
            ขอสงวนสิทธิในการเลือกโซนที่นั่งสำหรับผู้ที่มาเอาโต๊ะก่อนเลือกก่อนเท่านั้น<br />
            - ศุกร์-เสาร์ และวันที่คนค่อนข้างเยอะ เลือกโต๊ะแล้วไม่สามารถย้ายได้<br />
            - จำกัดอายุ 20 ปีขึ้นไป<br />
            กรุณาพกบัตรประชาชนหรือใบขับขี่ตัวจริงเท่านั้น<br />
            - การรับโต๊ะจอง โปรดยืนยันสิทธิด้วยการแสดงหน้า การจองของฉัน<br />
            (เจ้าของการจอง)ให้พนักงานดูเพื่อใช้สิทธิการจองนี้
            ไม่สามารถใช้รูปภาพแสดงแทนได้
          </p>
        </div>
  
        <div class="col-lg-4">
          <p class="textAboveTextfield">Pick date</p>
          <div class="card" style="border-radius: 20px">
            <div class="wrapper">
              <ejs-datepicker
                placeholder="Choose a date"
                style="color: #000"
                v-model="selectedDate"
                :min="minDate"
                format="dd-MMM-yyyy"
  
              >
              </ejs-datepicker>
            </div>
          </div>
  
          <p class="description">
            * หากจองในวันเดียวกันกรุณาจองก่อนเวลา เวลา 16:30น. *
            หากเกินเวลาที่กำหนดจะหลุดจอง เวลา 20:00น. * หากจอง Premium
            กรุณาจองก่อนเวลา เวลา 20:00น. * การจองเลยเวลาจองฟรี ต้องจองแบบ Premium
            เท่านั้น ซึ่งจะมีค่าใช้จ่ายมากกว่าปกติ
          </p>
          <p class="textAboveTextfield">
            How many seats (Maximum reservation: 50)
          </p>
          <div class="input-group" style="margin-bottom: 20px">
            <input
              v-model="seatsQuantity"
              @input="validateSeatsQuantity"
              type="text"
              class="form-control textfieldStyle"
              aria-label="seats"
              max="50"
            />
          </div>
          <span class="textAboveTextfield" style="color: #fff"
            >Zone: {{ selected }}</span
          >
          <div class="row">
            <div class="col-6">
              <select
                v-model="selected"
                style="height: 25px; border-radius: 20px"
              >
                <option disabled value="">Please selected one</option>
                <option>VVIIP</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
                <option>D</option>
                <option>E</option>
                <option>F</option>
              </select>
            </div>
            <div class="col-6">
              <input
                v-model="seatZoneNumber"
                class="form-control"
                style="
                  width: 50px;
                  height: 30px;
                  border-radius: 12px;
                  align-self: center;
                "
                type="text"
                placeholder="0"
                aria-label="default input example"
              />
            </div>
          </div>
  
          <div class="description">
            <div
              v-for="(option, index) in options"
              :key="index"
              class="form-check form-check-inline checkbox-margin"
            >
              <input
                class="form-check-input"
                type="radio"
                :id="`inlineRadio${index}`"
                :value="option.value"
                v-model="selectedOption"
              />
              <label
                class="form-check-label"
                :for="`inlineRadio${index}`"
                style="color: #fff"
                >{{ option.label }}</label
              >
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
          @click= 'handleNextButtonClick'
          type="submit"
        >
          Next
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { useRouter } from "vue-router";
  import { ref } from "vue";
  import Axios from "axios";
  import {
    DatePickerComponent,
    MaskedDateTime,
  } from "@syncfusion/ej2-vue-calendars";
import { TypeOfQue } from "@/util/util";
  
  export default {
    name: "Home",
    components: {
      "ejs-datepicker": DatePickerComponent,
    },
  
    setup() {
      const router = useRouter();
  
      const selectedOption = ref("");
  
      // Options for radio buttons
      const options = [
        { label: "จองโต๊ะก่อน 20:00 น. (ฟรี)", value: TypeOfQue.BEFORE20 },
        { label: "จองโต๊ะที่หลุดจอง 21:00 น. (฿1,000 ต่อโต๊ะ)", value: TypeOfQue.IN21 },
        { label: "จองโต๊ะที่หลุดจอง 22:00 น. (฿2,000 ต่อโต๊ะ)", value: TypeOfQue.IN22 },
        { label: "จองโต๊ะที่หลุดจอง 23:00 น. (฿3,000 ต่อโต๊ะ)", value: TypeOfQue.IN23 },
        { label: "จองโต๊ะแล้วมาเวลาไหนก็ได้ (฿4,500 ต่อโต๊ะ)", value: TypeOfQue.ANYTIME },
      ];
  
      //datepicker
      const minDate = ref(new Date());
      minDate.value.setDate(minDate.value.getDate());
      const selectedDate = ref("");
  
  
      //select dropdown and seats quantity
      const selected = ref("");
      const seatsQuantity = ref("");
  
      //input seat zone number
      const seatZoneNumber = ref("");
  
      const validateSeatsQuantity = () => {
        // Remove non-numeric characters
        seatsQuantity.value = seatsQuantity.value.replace(/\D/g, "");
        // Ensure the value is not greater than 50
        if (seatsQuantity.value > 50) {
          seatsQuantity.value = 50;
        }    };
  
      return {
        router,
        selected,
        selectedDate,
        minDate,
        seatsQuantity,
        validateSeatsQuantity,
        seatZoneNumber,
        selectedOption,
        options,
      };
    },
    methods: {
    async handleNextButtonClick() {
      // Log all the relevant values
      console.log("Selected Option:", this.selectedOption);
      console.log("Selected Date:", this.selectedDate);
      console.log("Selected Zone:", this.selected);
      console.log("Seats Quantity:", this.seatsQuantity);
      console.log("Seat Zone Number:", this.seatZoneNumber);

      try {
        const response = await Axios.post('http://localhost:4000/qm/reserveQue', {
            event_id: null,
            user_id: localStorage.getItem('id'),
          type: this.selectedOption,
          date_and_time: this.selectedDate,
          zone: this.selected,
          seat: this.seatsQuantity,
          name: this.seatZoneNumber,
        });

        console.log('Server response:', response.data);

        // Now you can perform the router push
        this.router.push({ name: 'Menu' });
      } catch (error) {
        console.error('Error:', error);
      }
    },
  },
};
  </script>
  
  <style scoped>
  @import "../../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
  @import "../../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
  @import "../../../node_modules/@syncfusion/ej2-popups/styles/material.css";
  @import "../../../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
  .wrapper {
    max-width: 250px;
    margin: 0 auto;
  }
  #ej2-datepicker_0 {
    color: #000;
  }
  .e-input-group input.e-input,
  .e-input-group.e-control-wrapper input.e-input {
    height: 25px;
    font-size: 18px;
    color: #000;
  }
  .e-input-group .e-input-group-icon:last-child,
  .e-input-group.e-control-wrapper .e-input-group-icon:last-child {
    font-size: 12px;
    color: #000;
  }
  
  select {
    word-wrap: normal;
    height: 40px;
  }
  .btn {
    border-radius: 20px;
    min-width: 110px;
  }
  
  .checkbox-margin {
    margin-bottom: 15px;
  }
  
  .description {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  
  .textfieldStyle {
    border-radius: 20px;
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
  
  .reservation {
    font-size: 25px;
    line-height: 24px;
    text-align: left;
    font-weight: 500;
    margin-top: 25px;
    margin-bottom: 20px;
    color: #fff;
  }
  
  .space {
    margin-right: 22px;
  }
  </style>