<script>
export default {
    data() {
        return {
            langFlag: [
                'en',
                'es',
                'it',
                'de'
            ],
            maxRate: 5
        }
    },
    props: {
        moviesObj: Object,
        imgUrl: String
    },
    methods: {
        getImagePath(img) {
            //console.log(img);
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        },
        getRoundedRatingUp() {
            return Math.ceil(this.moviesObj.vote_average) / 2;
        }
    }
}
</script>

<template>
    <div class="card mb-2">
        <img class="poster" :src="`${imgUrl}${moviesObj.poster_path}`" alt="">
        <h4>{{ moviesObj.title ? moviesObj.title : moviesObj.name }}</h4>
        <h5> {{ moviesObj.original_title ? moviesObj.original_title : moviesObj.original_name }}</h5>
        <img class="flag" :src="getImagePath(moviesObj.original_language)" alt=""
            v-if="langFlag.includes(moviesObj.original_language)">
        <p v-else> {{ moviesObj.original_language }}</p>
        <p> <i v-for="star in maxRate" :class="star <= getRoundedRatingUp() ? 'fa-solid' : 'fa-regular'"
                class="fa-star"></i></p>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";

.flag {
    width: 30px;
}
</style>