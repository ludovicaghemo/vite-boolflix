<script>
import AppHeader from "./components/AppHeader.vue";
import AppBody from "./components/AppBody.vue";
import { store } from "./store.js";
import axios from "axios";

export default {
  data() {
    return {
      store: store
    };
  },
  created() {
  },
  components: {
    AppHeader,
    AppBody
  },
  methods: {
    handleBtn() {
      //Movies Call
      axios
        .get(this.store.apiUrl + this.store.movieSearch, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey
          }
        })
        .then((resp) => {
          //console.log(resp);
          this.store.moviesList = resp.data.results;
        });
      // Tv Series Call
      axios
        .get(this.store.apiUrl + this.store.tvSeriesSearch, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey
          }
        })
        .then((resp) => {
          // console.log(resp);
          this.store.tvSeriesList = resp.data.results;
        })
    },
  },
};
</script>

<template>
  <AppHeader @get-search="handleBtn" />
  <AppBody />
</template>

<style lang="scss">
@use "./style/general.scss";
@import "@fortawesome/fontawesome-free/css/all.css";
</style>
