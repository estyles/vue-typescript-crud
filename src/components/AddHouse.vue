<template>
  <div class="submit-form">
    <div v-if="!submitted">

      <div class="form-group" v-for="(prop, index) in Object.entries(house)" :key="index">
        <label :for="prop[0]">{{prop[0]}}</label>
        ({{prop[1] || prop[1] === 0 || prop[1] === false || prop[1] === "" ? prop[1].constructor.name : "string"}})
        <div v-if="(prop[1] || prop[1] === 0 || prop[1] === false || prop[1] === '') && prop[1].constructor.name.toLowerCase() !== 'string'" >
              <input v-if="prop[1].constructor.name == 'Boolean'" type="checkbox" class="form-control" :id="prop[0]" required v-model="house[prop[0]]" :name="prop[0]" />
              <input v-if="prop[1].constructor.name == 'Number'" :type="prop[1].constructor.name" class="form-control" :id="prop[0]" required v-model.number="house[prop[0]]" :name="prop[0]" />
              <input v-else :type="prop[1].constructor.name.toLowerCase()" class="form-control" :id="prop[0]" required v-model.number="house[prop[0]]" :name="prop[0]" />
        </div>
        <div v-else>
          <input type="text" class="form-control" :id="prop[0]" required v-model="house[prop[0]]" :name="prop[0]" />
        </div>
      </div>
      <!-- <div class="form-group">
        <label for="description">Postcode</label>
        <input class="form-control" id="zipcode" required v-model="house.zip" name="description" />
      </div> -->

      <button @click="saveHouse" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newHouse">Add</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HouseDataService from "../services/HouseDataService";
import { House } from "../../typings/interface/house";

@Component
export default class AddHouse extends Vue {
  private house: Partial<House> = {
    image_thumb: null,
    link: null,
    zip_city: null,
    zip: null,
    geo_lat: null,
    geo_long: null,
    city: null,
    price: null,
    price_number: null,
    living_parcel_rooms: null,
    living: null,
    parcel: null,
    rooms: null,
    street_address: null,
    tuin: true,
    date_tz: new Date(),
  };

  private submitted: boolean = false;

  saveHouse() {
    var data = this.house;

    HouseDataService.create(data)
      .then((response) => {
        this.house.id = response.data.id;
        console.log(response.data);
        this.submitted = true;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  newHouse() {
    this.submitted = false;
    this.house = {};
  }
}
</script>

<style scoped>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
