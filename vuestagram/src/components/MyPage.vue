<template>
    <div style="padding : 10px">
        <h4>팔로워</h4>
        <input placeholder="⚡" @input="search($event.target.value)" />
        <div class="post-header" v-for="(a, i) in follower" :key="i">
            <div class="profile" :style="`background-image:url(${a.image})`"></div>
            <span class="profile-name">{{ a.name }}</span>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { onMounted, ref, reactive, toRefs, watch, computed } from 'vue'
//import { useStore } from 'vuex'

export default {
    name: 'mypage',
    props: {
        one: Number,
    },

    setup() {
        let follower = ref([]);
        let followerOrigin = ref([]); // 원본

        onMounted(() => {
            axios.get('/follower.json').then((a) => {
                follower.value = a.data
                followerOrigin.value = [...a.data];
            })
        });
        // 검색 기능
        function search(what) {
            let newFollower = follower.value.filter((a) => {
                return a.name.indexOf(what) != -1
            });
            follower.value = [...newFollower]
        }
        return { follower, search }
        // let test = reactive({name:'kim'})

        // let { one } = toRefs(props);

        // let re = computed(() => { return follower.value.length })
        // console.log(re.value)

        // let store = useStore();
        // console.log(store.state.name)
        // console.log(store.commit())
    },
}
</script>

<style></style>