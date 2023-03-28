<template>
    <div class="black-bg" v-if="modalopen == true">
        <div class="white-bg">
            <img :src="oneroom[nowclick].image" style="50%">
            <h4>{{ oneroom[nowclick].title }}</h4>
            <p>{{ oneroom[nowclick].content }}</p>
            <p>{{ month }}개월 선택함 : {{ oneroom[nowclick].price * month }}원</p>
            <input v-model="month">
            <button @click="$emit('closeModal')">닫기</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data() {
        return {
            month: 1,
        }
    },
    watch: {
        month(a, b) {
            if (isNaN(a) == true) {
                alert('숫자를 입력해주십시오');
                this.month = 1; //초기값 설정
            }
            if (a > 12) {
                alert('13개월 이하로 입력해주십시오')
            }
        },
    },
    beforeUpdate() {
        if (this.month == 2) {
            alert('3개월이상부터 가능합니다.')
            this.month = 3;
        }
    },
    props: {
        oneroom: Array,
        nowclick: Number,
        modalopen: Boolean,
    }

}
</script>

<style></style>
