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
        movie: Object,
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
        <h4>{{ movie.title }}</h4>
        <p> {{ movie.original_title }}</p>
        <img :src="getImagePath(movie.original_language)" alt="" v-if="langFlag.includes(movie.original_language)">
        <p v-else> {{ movie.original_language }}</p>
        <p> {{ movie.vote_average }}</p>
    </div>
</template>

<style scoped lang="scss">
img {
    width: 30px;
}
</style>