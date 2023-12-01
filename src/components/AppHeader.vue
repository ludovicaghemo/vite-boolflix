<script>
import { store } from '../store';
export default {
    emits: ["get-search"],
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <header class="d-flex justify-content-around align-items-center">
        <h1>BOOLFLIX</h1>
        <!-- Search section -->
        <div class="search-section">
            <input type="text" name="" id="" class="me-2" placeholder="inizia la ricerca" v-model.trim="store.searchText">
            <button @click="$emit('get-search')">CERCA</button>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../style/general.scss";

header {
    height: 10vh;
    background-color: black;
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;

    h1 {
        color: red;
    }
}
</style>