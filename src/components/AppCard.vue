<script>
export default {
    data() {
        return {
            langFlag: [
                'en',
                'es',
                'it',
                'de'
            ]
        }
    },
    props: {
        moviesObj: Object,
    },
    methods: {
        getImagePath(img) {
            //console.log(img);
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <div class="card mb-2">
        <h4>{{ moviesObj.title ? moviesObj.title : moviesObj.name }}</h4>
        <h5> {{ moviesObj.original_title ? moviesObj.original_title : moviesObj.original_name }}</h5>
        <img :src="getImagePath(moviesObj.original_language)" alt="" v-if="langFlag.includes(moviesObj.original_language)">
        <p v-else> {{ moviesObj.original_language }}</p>
        <p> {{ moviesObj.vote_average }}</p>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";
img {
    width: 30px;
}
</style>