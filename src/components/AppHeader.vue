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
    <header>
        <div class="container d-flex h-100 justify-content-between align-items-center">
            <h1>BOOLFLIX</h1>
            <div class="search-section">
                <input type="text" name="" id="" class="me-2" placeholder="inizia la ricerca"
                    v-model.trim="store.searchText">
                <button @click="$emit('get-search')">CERCA</button>
            </div>
        </div>
    </header>
</template>

<style scoped lang="scss">
@use "../style/general.scss";

header {
    height: 100px;
    .container {
        h1 {
            color: red;
        }
    }
}
</style>