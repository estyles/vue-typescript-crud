<template>
  <div class="flex-column container-restrict-height d-block d-md-flex ">
    <div class="row header-search-row">
      <div class="col-12">
        <b-card no-body class="mb-2 w-100">
          <b-card-header
            header-tag="header"
            class="card-header px-2 py-1"
            id="headingOne"
            role="tab"
          >
            <div class="row align-items-center">
              <div class="align-items-center col-md-1 d-flex">
                <h4 class="mb-0">Vinda</h4>
              </div>
              <div class="col-md-2">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="region"
                    v-model="region"
                  />
                </div>
              </div>
              <div class="col-md-4">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="City"
                    v-model="city"
                  />
                  <div class="input-group-append">
                    <button
                      class="btn btn-secondary"
                      type="button"
                      @click="searchHouses"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="align-items-center col-md-4 d-flex justify-content-around"
              >
                <span>
                  Total Count:
                  <div>{{ totalCount ? totalCount.count : "0" }}</div>
                </span>
                <span>
                  Last Update:
                  <div>{{ lastUpdate ? lastUpdate.date_tz : "unknown" }}</div>
                </span>
              </div>
              <div class="col-md-1 text-right">
                <b-button v-b-toggle.accordion-1 variant="outline-secondary">
                  More
                </b-button>
              </div>
            </div>
          </b-card-header>

          <b-collapse
            id="accordion-1"
            visible
            accordion="my-accordion"
            role="tabpanel"
          >
            <b-card-body class="card-body pb-0 pt-2 px-2 row">
              <div class="col-12">
                <div
                  class="align-items-center form-row justify-content-between"
                >
                  <div class="col-md-3">
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Postcode"
                        v-model="zipcode"
                      />
                    </div>
                  </div>
                  <div class="col-auto">
                    <div class="form-check form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox1"
                        v-model="tuin"
                      />
                      <label class="form-check-label" for="inlineCheckbox1"
                        >Tuin</label
                      >
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="form-check form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox2"
                        v-model="dakterras"
                      />
                      <label class="form-check-label" for="inlineCheckbox2"
                        >Dakterras</label
                      >
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="form-check form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox3"
                        v-model="klushuis"
                      />
                      <label class="form-check-label" for="inlineCheckbox3"
                        >klushuis</label
                      >
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="form-check form-check-inline mb-2">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="inlineCheckbox4"
                        v-model="nieuwbouw"
                      />
                      <label class="form-check-label" for="inlineCheckbox4"
                        >nieuwbouw</label
                      >
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="input-group mb-2">
                      <label class="col-auto col-form-label">List Date</label>
                      <div class="input-group-prepend">
                        <div class="input-group-text">From:</div>
                      </div>
                      <input type="date" placeholder v-model="startDate" />
                      <div class="input-group-prepend">
                        <div class="input-group-text">To:</div>
                      </div>
                      <input type="date" placeholder v-model="endDate" />
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="input-group mb-2">
                      <label class="col-auto col-form-label">Price</label>
                      <div class="input-group-prepend">
                        <div class="input-group-text">Min:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="5000000"
                        step="25000"
                        v-model="minPrice"
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">Max:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="5000000"
                        step="25000"
                        v-model="maxPrice"
                      />
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="input-group mb-2">
                      <label class="col-auto col-form-label">Rooms</label>
                      <div class="input-group-prepend">
                        <div class="input-group-text">Min:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        step="1"
                        v-model="minRooms"
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">Max:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="20"
                        step="1"
                        v-model="maxRooms"
                      />
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="input-group mb-2">
                      <label class="col-auto col-form-label">Parcel</label>
                      <div class="input-group-prepend">
                        <div class="input-group-text">Min:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="500"
                        step="10"
                        v-model="minParcel"
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">Max:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="500"
                        step="10"
                        v-model="maxParcel"
                      />
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="input-group mb-2">
                      <label class="col-auto col-form-label">Living</label>
                      <div class="input-group-prepend">
                        <div class="input-group-text">Min:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="500"
                        step="10"
                        v-model="minLiving"
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">Max:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="500"
                        step="10"
                        v-model="maxLiving"
                      />
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="input-group mb-2">
                      <label class="col-auto col-form-label"
                        >Energy Label</label
                      >
                      <input type="text" v-model="energyLabel" />
                    </div>
                  </div>

                  <div class="col-auto">
                    <div class="input-group mb-2">
                      <label class="col-auto col-form-label">BuildYear</label>
                      <div class="input-group-prepend">
                        <div class="input-group-text">From:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="2500"
                        step="10"
                        v-model="minBouwjaar"
                      />
                      <div class="input-group-prepend">
                        <div class="input-group-text">To:</div>
                      </div>
                      <input
                        type="number"
                        min="0"
                        max="2500"
                        step="10"
                        v-model="maxBouwjaar"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </div>

    <div class="row body-content-row">
      <div class="col-md-3 search-result-col pb-2">
        <b-card no-body>
          <b-tabs card>
            <b-tab :title="`Results (${houses.length})`" active no-body>
              <b-card-text>
                <RecycleScroller
                  class="scroller"
                  ref="resultScroller"
                  :items="houses"
                  :item-size="50"
                  key-field="id"
                  v-slot="{ item, index }"
                >
                  <div
                    class="houseItem"
                    :class="{ active: item.id == currentIndex }"
                    @click="setActiveHouse(item, item.id, true, false)"
                  >
                    <div class="house-data">
                      {{ item.city }}<br /><span>{{
                        item.living_parcel_rooms
                      }}</span>
                    </div>
                    <div class="house-price ml-auto">
                      {{ item.price }} <br />
                      <div
                        class="fav-icon text-right"
                        @click="toggleFav(item.id)"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-star"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          v-if="favoriteIds.indexOf(item.id) == -1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                          />
                        </svg>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-star-fill"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          v-if="favoriteIds.indexOf(item.id) > -1"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </RecycleScroller>
              </b-card-text>
            </b-tab>
            <b-tab :title="`Favorites (${favorites.length})`" no-body>
              <b-card-text>
                <RecycleScroller
                  class="scroller"
                  ref="resultScroller"
                  :items="favorites"
                  :item-size="50"
                  key-field="houseId"
                  v-slot="{ item, index }"
                >
                  <div
                    class="houseItem"
                    v-if="item.house"
                    :class="{ active: item.house.id == currentIndex }"
                    @click="
                      setActiveHouse(item.house, item.house.id, true, false)
                    "
                  >
                    <div class="house-data">
                      {{ item.house.city }}<br /><span>{{
                        item.house.living_parcel_rooms
                      }}</span>
                    </div>
                    <div class="house-price ml-auto">
                      {{ item.house.price }} <br />
                      <div
                        class="fav-icon text-right"
                        @click="toggleFav(item.house.id)"
                      >
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-star"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          v-if="favoriteIds.indexOf(item.house.id) == -1"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                          />
                        </svg>
                        <svg
                          width="1em"
                          height="1em"
                          viewBox="0 0 16 16"
                          class="bi bi-star-fill"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                          v-if="favoriteIds.indexOf(item.house.id) > -1"
                        >
                          <path
                            d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </RecycleScroller>
              </b-card-text>
            </b-tab>
          </b-tabs>
        </b-card>
      </div>
      <div class="heatMapContainer col-md-5 pb-2">
        <!-- <l-map ref="myMap" @ready="doSomethingOnReady()"></l-map> -->
        <l-map
          :zoom="zoom"
          :center="currentCenter"
          :options="mapOptions"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          ></l-tile-layer>
          <div v-if="neighborhoodsVisible">
            <l-geo-json
              v-for="feature in neighborhoods.features"
              :key="feature.id"
              :geojson="feature"
              >X</l-geo-json
            >
          </div>
          <l-tile-layer :url="url" :attribution="attribution" />
          <Vue2LeafletHeatmap
            :lat-lng="latlngs"
            v-if="heatVisible"
            :radius="15"
            :min-opacity="0"
            :max-zoom="12"
            :blur="1"
          ></Vue2LeafletHeatmap>
          <l-marker
            v-for="marker in markers"
            :key="marker.id"
            :visible="marker.visible"
            :lat-lng.sync="marker.position"
            :opacity="0.2"
            :icon="marker.icon"
            @click="setActiveHouse(marker.house, marker.house.id, false, true)"
          >
            <l-popup :content="marker.tooltip" />
            <l-tooltip :content="marker.tooltip" />
          </l-marker>
        </l-map>
        <!--
<l-choropleth-layer
          v-if="neighborhoods"
          :geojson="neighborhoods"
          cityKey="department_name"
          :data="pyDepartmentsData"
          idKey="department_id"
          :value="value"
          :extraValues="extraValues"
          geojsonIdKey="dpto"
          :colorScale="colorScale"
        >
          <template slot-scope="props">
            <l-info-control
              :item="props.currentItem"
              :unit="props.unit"
              city="Department"
              placeholder="Hover over a department"
            />
            <l-reference-chart
              city="Girls school enrolment"
              :colorScale="colorScale"
              :min="props.min"
              :max="props.max"
              position="topright"
            />
          </template>
        </l-choropleth-layer>

      --></div>
      <div class="col-md-4 house-details-container pb-2">
        <div v-if="currentHouse" class="row mr-0">
          <!-- <modal name="iframeModal">
          <div>
            <div slot="top-right">
              <button @click="$modal.hide('iframeModal')">❌</button>
            </div>
            <iframe
              :src="currentHouse.galleryLink"
              class="galleryIframe"
              style="width: 100%, height: 100%; border: 0;"
              is="x-frame-bypass"
            ></iframe>
          </div>
        </modal> -->
          <h3 class="col-10">
            {{ currentHouse.street_address }} {{ currentHouse.city }}
          </h3>
          <div
            class="col-2 fav-icon text-right"
            @click="toggleFav(currentHouse.id)"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-star"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              v-if="favoriteIds.indexOf(currentHouse.id) == -1"
            >
              <path
                fill-rule="evenodd"
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              />
            </svg>
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              class="bi bi-star-fill"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              v-if="favoriteIds.indexOf(currentHouse.id) > -1"
            >
              <path
                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
              />
            </svg>
          </div>
          <div class="form-group col-12">
            <!-- <button @click="showModal(currentHouse)">images</button> -->
            <div v-if="currentHouse.image_thumb" class="houseDataRow">
              <a :href="currentHouse.galleryLink" target="_blank"
                >Open Funda gallery</a
              >
              <hooper :itemsToShow="2" :itemsToSlide="2" ref="hooper">
                <slide
                  v-for="(image, index) in currentHouse.images"
                  :key="index"
                >
                  <img :src="image.thmb" />
                </slide>
                <hooper-navigation slot="hooper-addons"></hooper-navigation>
              </hooper>
            </div>
            <div v-if="currentHouse.link" class="houseDataRow">
              <a :href="currentHouse.link" target="_blank">link</a>
            </div>
            <div
              class="houseDataRow"
              v-for="(prop, index) in Object.entries(currentHouse)"
              :key="index"
            >
              <div
                v-if="
                  [
                    'zip',
                    'city',
                    'region',
                    'price_number',
                    'living',
                    'parcel',
                    'rooms',
                    'street_address',
                    'tuin',
                    'date_tz',
                    'dakterras',
                    'klushuis',
                    'nieuwbouw',
                    'energyLabel',
                    'bouwjaar',
                  ].indexOf(prop[0]) > -1
                "
              >
                <div class="house-info-row">
                  <div>
                    <strong>{{ prop[0] }}</strong>
                  </div>
                  <div>
                    {{ prop[1] }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- <a class="badge badge-warning" :href="'/houses/' + currentHouse.id"
          >Edit</a
        > -->
        </div>
        <div v-else>
          <br />
          <p>Please click on a House...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Favorite } from "../../typings/interface/favorite";
import L, { MapOptions, latLng, Icon, LatLng } from "leaflet";
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup,
  LTooltip,
  LGeoJson,
} from "vue2-leaflet";

import Vue2LeafletHeatmap from "vue2-leaflet-heatmap";

import { ChoroplethLayer } from "vue-choropleth";

import { RecycleScroller } from "vue-virtual-scroller";

import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "leaflet/dist/leaflet.css";

import "bootstrap-vue/dist/bootstrap-vue.css";

import { CardPlugin } from "bootstrap-vue";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-geo-json", LGeoJson);
Vue.component("l-marker", LMarker);
Vue.component("l-popup", LPopup);
Vue.component("l-tooltip", LTooltip);

Vue.component("Vue2LeafletHeatmap", Vue2LeafletHeatmap);
// Vue.component("l-choropleth-layer", ChoroplethLayer);

import "vue-virtual-scroller/dist/vue-virtual-scroller.css";
Vue.component("RecycleScroller", RecycleScroller);

import "hooper/dist/hooper.css";
Vue.component("hooper", Hooper);
Vue.component("hooper-navigation", HooperNavigation);
Vue.component("slide", Slide);

import HouseDataService from "../services/HouseDataService";
import { House } from "../../typings/interface/house";

import { Component, Vue, Watch } from "vue-property-decorator";
import { SearchData } from "typings/globals";

// Vue.component("l-info-control", InfoControl);
// Vue.component("l-reference-chart", ReferenceChart);

// import L, { MapOptions, latLng, Icon } from "leaflet";
// import { findRealParent, propsBinder, L } from "vue2-leaflet";

type D = Icon.Default & {
  _getIconUrl: string;
};

delete (Icon.Default.prototype as D)._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

type Marker = {
  id: string;
  position: { lat: number; lng: number };
  tooltip: string;
  visible: boolean;
  icon: L.DivIcon;
  draggable: boolean;
  house?: House;
};

@Component
export default class HousesList extends Vue {
  private houses: House[] = [];
  private currentHouse: House | null = null;
  private currentIndex: number = -1;
  private city: string = "haarlem amsterdam zaandam amstelveen diemen bussum hilversum";
  private region: string = "";
  private zipcode: string = "";
  private tuin: boolean = true;
  private startDate: string = new Date(
    new Date().setDate(new Date().getDate() - 4)
  )
    .toISOString()
    .substr(0, 10);
  private endDate: string | null = null; //new Date().toISOString().substr(0, 10);
  private minPrice: number = 200000;
  private maxPrice: number = 350000;
  private minRooms: number = 3;
  private maxRooms: number | null = null;
  private minParcel: number = 0;
  private maxParcel: number | null = null;
  private minLiving: number = 60;
  private maxLiving: number | null = null;

  private dakterras: boolean = false;
  private garage: boolean = false;
  private klushuis: boolean = false;
  private nieuwbouw: boolean = false;
  private energyLabel: string = "";
  private minBouwjaar: number | null = null;
  private maxBouwjaar: number | null = null;

  private favorites: Favorite[] = [];
  private favoriteIds: number[] = [];

  // map options start
  private zoom = 10;
  private center = latLng(51.505, -0.09);
  private url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
  private attribution = "&copy; e-Styles";
  private currentZoom = 10;
  private currentCenter = latLng(51.505, -0.09);
  private showParagraph = false;
  private mapOptions = {
    zoomSnap: 0.5,
  };

  private showMap = true;

  // geojson
  private neighborhoods: Object | null = null; //{ features: null };
  private geojsonOptions = {
    weight: 3,
    opacity: 1,
    color: "#ffffff",
    dashArray: "3",
    fillOpacity: 0.7,
    fillColor: "#f555",
  };

  // heatmap
  private heatVisible = false;

  private latLngNumbers: number[][] = [];

  private latlngs: number[][] = [];

  private maxValue = 100;

  private neighborhoodsVisible: boolean = false;
  private totalCount: any = null;
  private lastUpdate: any = null;

  @Watch("latlngs", {
    deep: true,
  })
  onlatLngChanged(newVal: LatLng[], oldVal: LatLng[]): void {
    this.heatVisible = false;
    // console.log(newVal, oldVal);
    this.$nextTick(() => {
      this.heatVisible = true;
    });
  }

  @Watch("neighborhoods", {
    deep: true,
  })
  onNBHChanged(newVal: any, oldVal: any): void {
    this.neighborhoodsVisible = false;
    // console.log(newVal, oldVal);
    this.$nextTick(() => {
      this.neighborhoodsVisible = true;
    });
  }
  // heatmap stop
  public markers: Marker[] = [];

  zoomUpdate(zoom: number) {
    this.currentZoom = zoom;
  }
  centerUpdate(center: L.LatLng) {
    this.currentCenter = center;
  }
  showLongText() {
    this.showParagraph = !this.showParagraph;
  }

  alert(item: Object) {
    alert("this is " + JSON.stringify(item));
  }

  // map options end

  retrieveHouses() {
    return HouseDataService.getAll()
      .then((response) => {
        this.houses = response.data;
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  addMarkers() {
    let firstCenter = latLng(
      parseFloat(this.houses[0].geo_lat),
      parseFloat(this.houses[0].geo_long)
    );
    // this.centerUpdate(firstCenter);
    this.latlngs = [];

    this.houses.forEach((house) => {
      this.addMarker(house);
    });
  }

  addMarker(house: House) {
    let marker: Marker = {
      id: "" + house.id,
      position: {
        lat: parseFloat(house.geo_lat),
        lng: parseFloat(house.geo_long),
      },
      tooltip: house.street_address + " " + house.price,
      draggable: false,
      visible: true,
      icon: L.divIcon(),
      house: house,
    };
    this.markers.push(marker);
    this.latlngs.push([
      parseFloat(house.geo_lat),
      parseFloat(house.geo_long),
      ((parseInt(house.price_number, 10) - this.minPrice) * 1) /
        (this.maxPrice - this.minPrice),
    ]);
  }

  refreshList() {
    this.retrieveHouses();
    this.currentHouse = null;
    this.currentIndex = -1;
  }

  setActiveHouse(
    house: House,
    index: number,
    setCenter = true,
    setScroll = true
  ) {
    house.galleryLink = house.link + "#overzicht";
    this.currentHouse = house;
    this.currentIndex = index;
    this.getImageArray(house);

    if (setCenter) {
      let center = new L.LatLng(
        parseFloat(house.geo_lat),
        parseFloat(house.geo_long)
      );
      this.centerUpdate(center);
    }

    if (setScroll) {
      let scrollIdx = this.houses.findIndex((item) => item.id == house.id);
      this.$refs.resultScroller.scrollToItem(scrollIdx);
    }
  }

  showModal(currentHouse: House) {
    this.$modal.show("iframeModal");
  }

  getImageArray(house: House, imageCount = 6) {
    // https://cloud.funda.nl/valentina_media/134/966/995_360x240.jpg
    let imgPath = house.image_thumb.split("/");
    if (imgPath.length) {
      let imgFileName = imgPath.pop();
      let imgNumber = imgFileName && parseInt(imgFileName.split("_")[0], 10);
      let imgThmbSuffix = "_360x240.jpg";
      let imgLgSuffix = "_720x480.jpg";
      const range = (start: number, stop?: number, step?: number) =>
        Array.from(
          { length: ((stop || start) - (stop ? start : 1)) / (step || 1) + 1 },
          (_, i) => (start && stop ? start : 0) + i * (step || 1)
        );
      let houseImages: { thmb: string; lg: string }[] = [];
      if (imgNumber && imgFileName && imgPath) {
        for (let i in range(imageCount)) {
          houseImages.push({
            thmb:
              imgPath.join("/") +
              "/" +
              ("000" + imgNumber).slice(-3) +
              imgThmbSuffix,
            lg:
              imgPath.join("/") +
              "/" +
              ("000" + imgNumber).slice(-3) +
              imgLgSuffix,
          });
          imgNumber = imgNumber += 1;
        }
      }
      house.images = houseImages;
      if (this.$refs.hooper) {
        this.$refs.hooper.slideTo(0);
      }
      console.log(houseImages);
    }
  }

  // removeAllHouses() {
  //   HouseDataService.deleteAll()
  //     .then((response) => {
  //       console.log(response.data);
  //       this.refreshList();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }

  searchHouses() {
    let data: SearchData = {
      city: this.city,
      region: this.region,
      tuin: this.tuin,
      garage: this.garage,
      zip: this.zipcode,
      startDate: this.startDate,
      endDate: this.endDate,
      minPrice: this.minPrice,
      maxPrice: this.maxPrice,
      minRooms: this.minRooms,
      maxRooms: this.maxRooms,
      minParcel: this.minParcel,
      maxParcel: this.maxParcel,
      minLiving: this.minLiving,
      maxLiving: this.maxLiving,
      dakterras: this.dakterras,
      klushuis: this.klushuis,
      nieuwbouw: this.nieuwbouw,
      energyLabel: this.energyLabel,
      minBouwjaar: this.minBouwjaar,
      maxBouwjaar: this.maxBouwjaar,
    };

    return HouseDataService.findByData(data)
      .then((response) => {
        console.log(response.data);
        this.houses = response.data;
        this.markers = [];
        if (this.houses.length) {
          this.addMarkers();
        }
      })
      .catch((e) => {
        console.log(e);
      });
  }

  private getCount() {
    return HouseDataService.count()
      .then((response) => {
        this.totalCount = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  private getLastUpdate() {
    return HouseDataService.lastUpdate()
      .then((response) => {
        this.lastUpdate = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  private toggleFav(id: number) {
    let idIdx = this.favoriteIds.indexOf(id);
    if (idIdx > -1) {
      this.favoriteIds.splice(idIdx, 1);
      this.deleteFavorites(id);
    } else {
      this.favoriteIds.push(id);
      this.setFavorites(id);
    }
  }

  private getFavorites() {
    return HouseDataService.getFavorites()
      .then((response) => {
        this.favorites = response.data;
        this.favoriteIds = this.favorites.map((fav) => fav.houseId);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  private setFavorites(id: number) {
    let favData: Favorite = { houseId: id, description: "" };
    return HouseDataService.setFavorite(favData)
      .then((response) => {
        favData = {...favData, house: this.houses.find((h)=> h.id === id)}
        this.favorites.push(favData);
        // this.favoriteIds = this.favorites.map((fav) => fav.houseId);
        // this.favorites = response.data;
        // this.favoriteIds = this.favorites.map((fav) => fav.houseId);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  private deleteFavorites(id: number) {
    // let favData: Favorite = {houseId: id, description: "" };
    return HouseDataService.deleteFavorite(id)
      .then((response) => {
        let fIndex = this.favorites.findIndex((f)=> f.houseId === id);
        this.favorites.splice(fIndex,1);
        // this.favoriteIds = this.favorites.map((fav) => fav.houseId);
        // this.favoriteIds.push(id);
        // this.favorites = response.data;
        // this.favoriteIds = this.favorites.map((fav) => fav.houseId);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.getCount();
    this.getLastUpdate();
    this.getFavorites();

    this.searchHouses()
      .then(() => {
        if (this.houses.length) {
          this.setActiveHouse(this.houses[0], 0, true, true);
        }
        console.log("mounted");
      })
      .then(() => {
        let doChloro = false;
        if (doChloro) {
          // axios
          // .get("/assets/wijkenData.json")
          // .get(
          //   "https://geodata.nationaalgeoregister.nl/cbsgebiedsindelingen/wfs?OUTPUTFORMAT=json&REQUEST=GetFeature&SERVICE=WFS&SRSNAME=EPSG:4326&TypeName=cbs_gemeente_2018_gegeneraliseerd&VERSION=1.1.0",
          //   { responseType: "json" }
          // )
          // .then((wijken: Object) => {
          //   this.neighborhoods = wijken;
          // });
        }
      });
  }
}
</script>

<style>
.list {
  text-align: left;
  margin: auto;
}
.heatMapContainer {
  min-height: 300px;
  height: calc(100vh - 230px);
}
.leaflet-marker-icon.leaflet-div-icon {
  background: transparent !important;
  border: 1px solid #00000024 !important;
}

.scrollerHeader {
  height: 36px;
  padding: 0 10px;
  font-weight: 500;
}

.scroller {
}

.houseItem {
  cursor: pointer;
  height: 50%;
  padding: 0 10px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #e9ecef;
}
.houseItem.active {
  font-weight: 500;
}
.house-price {
  position: absolute;
  top: 2px;
  right: 4px;
  font-style: italic;
  color: #333;
  font-size: 14px;
}

.houseDataRow {
  padding-bottom: 0px;
}

.house-info-row {
  display: flex;
}

.house-info-row > div {
  flex: 1 1 0;
}

.house-info-row > div:first-child {
  max-width: 140px;
}

.house-details-container .fav-icon {
  font-size: 1.3em;
}

.container-restrict-height {
  max-height: calc(100vh - 64px);
  height: calc(100vh - 64px);
  display: flex;
}

.header-search-row {
  flex: 0 0 auto;
}

.body-content-row {
  flex: 1 1 auto;
  overflow: hidden;
  display: flex;
}

.body-content-row > div {
  min-height: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.body-content-row .card {
  max-height: 100%;
  margin-bottom: auto;
}

.body-content-row .tabs {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.body-content-row .tab-content {
  overflow: auto;
}
.house-details-container > .row {
  overflow: auto;
  height: 100%;
}
.search-result-col {
  margin-bottom: auto;
}
</style>