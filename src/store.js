import { reactive, } from "vue";

export const store = reactive({
    moviesList: [],
    seriesList: [],
    apiUrl: 'https://api.themoviedb.org/3/search',
    apiKey: '6d528e53b247ff47c3c0b248b11a367e',
    movieSearch: '/movie',
    tvSeriesSearch: '/tv',
    searchText: ''
});