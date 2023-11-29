<script>
export default {
    props: {
        movie: Object
    }
}
</script>

<template>
    <div class="card mb-2">
        <h4>{{ movie.title }}</h4>
        <p> {{ movie.original_title }}</p>
        <p> {{ movie.original_language }}</p>
        <p> {{ movie.vote_average }}</p>
    </div>
</template>

<style scoped lang="scss">
</style>