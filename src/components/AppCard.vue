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
        // Languages flag imgs function
        getImagePath(img) {
            //console.log(img);
            return new URL(`../assets/img/${img}.png`, import.meta.url).href;
        },
        // Grade from 1 to 10 decimal transformed into an integer from 1 to 5 - rounded up
        getRoundedRatingUp() {
            return Math.ceil(this.moviesObj.vote_average) / 2;
        }
    }
}
</script>

<template>
    <div class="custom-card">
        <!-- Poster imgs -->
        <img v-if="moviesObj.poster_path" class="poster" :src="`${imgUrl}${moviesObj.poster_path}`" alt="">
        <img v-else src="https://www.tea-tron.com/antorodriguez/blog/wp-content/uploads/2016/04/Image-Not-Found1.png" alt=""
            class="poster">
        <!-- Card text content -->
        <div class="card-text">
            <!-- Title -->
            <h4 class="pb-2">{{ moviesObj.title ? moviesObj.title : moviesObj.name }}</h4>
            <h5 class="pb-2"> {{ moviesObj.original_title ? moviesObj.original_title : moviesObj.original_name }}</h5>
            <!-- Language flag -->
            <img class="flag pb-2" :src="getImagePath(moviesObj.original_language)" alt=""
                v-if="langFlag.includes(moviesObj.original_language)">
            <p v-else class="pb-2"> {{ moviesObj.original_language }}</p>
            <!-- Overview -->
            <p class="overview"><strong>Overview:</strong> {{ moviesObj.overview }}</p>
            <!-- Ratings - stars -->
            <p class="pb-2"> <i v-for="star in maxRate" :class="star <= getRoundedRatingUp() ? 'fa-solid' : 'fa-regular'"
                    class="fa-star"></i></p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use "../style/general.scss";

.custom-card {
    border: 1px solid white;
    border-radius: 10px;
    width: 352px;
    height: 352px;
    position: relative;
    background-color: black;

    .poster {
        height: 350px;
        width: 350px;
        display: block;
        border-radius: 10px;
    }

    .card-text {
        display: none;
        height: 350px;
        width: 350px;
        color: white;
        text-align: center;
        position: absolute;
        top: 40px;
        left: 0;
        font-size: .7rem;

        .overview {
            font-size: .5rem;
        }
    }

    .flag {
        width: 20px;
    }

    &:hover {
        .poster {
            display: none;
        }

        .card-text {
            display: block;
        }
    }
}
</style>