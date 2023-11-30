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
        <section>
            <h2>Movies</h2>
            <div class="row">
                <div class="col" v-for="movie in store.moviesList">
                    <AppCard :moviesObj="movie" />
                </div>
            </div>
        </section>
        <h2>Tv Series</h2>
        <div class="row">
                <div class="col" v-for="serie in store.tvSeriesList">
                    <AppCard :moviesObj="serie" />
                </div>
            </div>
        <section>

        </section>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
h2 {
    color: white;
}
</style>