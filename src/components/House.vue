<template>
  <div v-if="currentHouse" class="edit-form">
    <h4>House</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentHouse.title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          v-model="currentHouse.description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
        {{ currentHouse.published ? "Published" : "Pending" }}
      </div>
    </form>

    <button
      class="badge badge-primary mr-2"
      v-if="currentHouse.published"
      @click="updatePublished(false)"
    >
      UnPublish
    </button>
    <button
      v-else
      class="badge badge-primary mr-2"
      @click="updatePublished(true)"
    >
      Publish
    </button>

    <button class="badge badge-danger mr-2" @click="deleteHouse">
      Delete
    </button>

    <button type="submit" class="badge badge-success" @click="updateHouse">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a House...</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HouseDataService from "../services/HouseDataService";

@Component
export default class House extends Vue {
  private currentHouse: any = null;
  private message: string = "";

  getHouse(id: string) {
    HouseDataService.get(id)
      .then((response) => {
        this.currentHouse = response.data;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updatePublished(status: boolean) {
    var data = {
      id: this.currentHouse.id,
      title: this.currentHouse.title,
      description: this.currentHouse.description,
      published: status,
    };

    HouseDataService.update(this.currentHouse.id, data)
      .then((response) => {
        this.currentHouse.published = status;
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  updateHouse() {
    HouseDataService.update(this.currentHouse.id, this.currentHouse)
      .then((response) => {
        console.log(response.data);
        this.message = "The house was updated successfully!";
      })
      .catch((e) => {
        console.log(e);
      });
  }

  deleteHouse() {
    HouseDataService.delete(this.currentHouse.id)
      .then((response) => {
        console.log(response.data);
        this.$router.push({ name: "houses" });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  mounted() {
    this.message = "";
    this.getHouse(this.$route.params.id);
  }
}
</script>

<style scoped>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
