<script>
import { store } from '../store';
import AppCard from './AppCard.vue'
export default {
    data() {
        return {
            store
        }
    },
    components: {
        AppCard
    }
}
</script>

<template>
    <div class="container pt-4">
        <!-- Movies Section -->
        <section>
            <h2>Movies</h2>
            <div class="row">
                <div class="col" v-for="movie in store.moviesList">
                    <AppCard :moviesObj="movie" :imgUrl="store.baseImgUrl" />
                </div>
            </div>
        </section>
        <!-- Tv Series Section -->
        <section class="pt-3">
            <h2>Tv Series</h2>
            <div class="row">
                <div class="col-5" v-for="serie in store.tvSeriesList">
                    <AppCard :moviesObj="serie" :imgUrl="store.baseImgUrl" />
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";

h2 {
    color: white;
}
</style>