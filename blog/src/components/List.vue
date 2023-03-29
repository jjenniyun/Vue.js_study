<template>
    <div v-for="(item, i) in blog_list" :key="i">
        <!-- $router.go(1), go(-1) 뒤로가기 등 가능 -->
        <h5 @click="$router.push(`/detail/${i}`)">{{ item.title }}</h5>
        <p class="card-text">{{ item.content }}</p><br>
    </div>
    <button type="button" class="btn btn-outline-dark" @click="$router.go(1)">Go</button><br><br>
</template>

<script>
export default {
    name: 'list',
    props: {
        blog_list: Array,
    }
}
</script>

<style></style>