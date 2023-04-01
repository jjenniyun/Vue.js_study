import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state() {
        return {
            name: 'kim',
            age: 20,
            likes: 30,
            likescli: false,
            more: {},
        }
    },
    mutations: {
        setMore(state, data) {
            state.more = data
        },
        likes(state) {
            if (state.likescli == false) {
                state.likes++;
                state.likescli = true;
            } else {
                state.likes--;
                state.likescli = false;
            }
        },
        changeage(state, data) {
            state.age += data
        },
        changename(state) {
            state.name = 'park'
        },
    },
    actions: {
        getData(context) {
            axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a) => {
                console.log(a.data);
                context.commit('setMore', a.data)
            })
        },
    },
})

export default store;