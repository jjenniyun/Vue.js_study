<template>
    <div class="black-bg" v-if="modalopen == true">
        <div class="white-bg">
            <h4>{{ oneroom[nowclick].title }}</h4>
            <p>{{ oneroom[nowclick].content }}</p>
            <img :src="oneroom[nowclick].image" style="50%">
            <p>{{ oneroom[nowclick].price }}원</p>
            <!-- <button @click="modalopen = false">닫기</button> -->
        </div>
    </div>
</template>

<script>

export default {
    name: 'Modal',
    props: {
        oneroom: Array,
        nowclick: Number,
        modalopen: Boolean,
    }

}
</script>

<style></style>
