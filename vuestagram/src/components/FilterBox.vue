<template>
    <div :class="filter + ' filter-item'" :style="{ backgroundImage: `url(${image})` }">
        <!-- {{ filter }} -->
        <slot></slot>
        <button @click="fire">적용</button>
    </div>
</template>

<script>
export default {
    name: 'filterbox',
    methods: {
        fire() {
            this.emitter.emit('emit', 'send')
        }
    },
    props: {
        image: String,
        filter: String,
    }

}
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>