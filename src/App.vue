<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">Finda</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/tutorials" class="nav-link">Tutorials</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">Add</a>
        </li>
        <li class="nav-item">
          <a href="/houses" class="nav-link">Houses</a>
        </li>
        <li class="nav-item">
          <a href="/addHouse" class="nav-link">addHouse</a>
        </li>
        <li class="nav-item">
          <a href="/heatMap" class="nav-link">heatMap</a>
        </li>
      </div>
    </nav>
    <div class="container-fluid mt-2">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>
