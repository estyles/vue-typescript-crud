<template>
  <div class="list row">
    <div class="col-md-8">
      <div class="input-group mb-3">
        <input type="text" class="form-control" placeholder="Search by title" v-model="title" />
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button" @click="searchTitle">Search</button>
        </div>
      </div>
    </div>
    <div class="col-md-6">
      <h4>Houses List</h4>
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(house, index) in houses"
          :key="index"
          @click="setActiveHouse(house, index)"
        >{{ house.zip_city }}</li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllHouses">Remove All</button>
    </div>
    <div class="col-md-6">
      <div v-if="currentHouse">
        <h4>House</h4>
        <div class="form-group">
          <div v-for="(prop, index) in Object.entries(currentHouse)" :key="index">
            <label>
              <strong>{{prop[0]}}</strong>
            </label>
            {{prop[1]}}
          </div>
        </div>
        <a class="badge badge-warning" :href="'/houses/' + currentHouse.id">Edit</a>
      </div>
      <div v-else>
        <br />
        <p>Please click on a House...</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HouseDataService from "../services/HouseDataService";
import { House } from "../../typings/interface/house";

@Component
export default class HousesList extends Vue {
  private houses: House[] = [];
  private currentHouse: House|null = null;
  private currentIndex: number = -1;
  private title: string = "";

  retrieveHouses() {
    HouseDataService.getAll()
      .then((response) => {
        this.houses = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  refreshList() {
    this.retrieveHouses();
    this.currentHouse = null;
    this.currentIndex = -1;
  }

  setActiveHouse(house: House, index: number) {
    this.currentHouse = house;
    this.currentIndex = index;
  }

  removeAllHouses() {
    HouseDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        this.refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  }

  searchTitle() {
    HouseDataService.findByTitle(this.title)
      .then((response) => {
        this.houses = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.retrieveHouses();
  }
}
</script>

<style scoped>
  .list {
    text-align: left;
    max-width: 750px;
    margin: auto;
  }
</style>
