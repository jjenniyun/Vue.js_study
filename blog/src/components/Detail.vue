<template>
    <div class="container mt-4">
        <h4>-상세페이지-</h4>
        <br>
        <h5>{{ blog_list[$route.params.id].title }}</h5>
        <p>{{ blog_list[$route.params.id].content }}</p>
        <p class="card-text">
            <small class="text-muted">{{ blog_list[$route.params.id].date }}</small>
        </p>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    props: {
        blog_list: Array,
    }
}
</script>

<style></style>