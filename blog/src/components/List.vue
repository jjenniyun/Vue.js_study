<template>
    <div>
        <h5>{{ blog_list[0].title }}</h5>
        <p>{{ blog_list[0].date }}</p>
    </div>
    <div>
        <h5>{{ blog_list[1].title }}</h5>
        <p>{{ blog_list[1].date }}</p>
    </div>
    <div>
        <h5>{{ blog_list[2].title }}</h5>
        <p>{{ blog_list[2].date }}</p>
    </div>
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