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
        <div class="row">
            <div class="col" v-for="movie in store.moviesList">
                <AppCard :movie="movie" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
</style>