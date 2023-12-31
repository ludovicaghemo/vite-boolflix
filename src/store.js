import { reactive, } from "vue";

export const store = reactive({
    moviesList: [],
    tvSeriesList: [],
    apiUrl: 'https://api.themoviedb.org/3',
    apiKey: '6d528e53b247ff47c3c0b248b11a367e',
    baseImgUrl: 'https://image.tmdb.org/t/p/w342',
    movieSearch: '/search/movie',
    tvSeriesSearch: '/search/tv',
    searchText: ''
});