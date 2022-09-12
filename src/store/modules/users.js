export default {
    actions: {
        async getUsers(ctx) {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const users = await res.json();

            ctx.commit('updateUsers', users);
        }
    },
    mutations: {
        updateUsers(state, users) {
            state.users = users;
        },
    },
    state: {
        users: [],
    },
    getters: {
        allUsers(state) {
            return state.users;
        }
    }
}