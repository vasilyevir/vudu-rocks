export default {
    actions: {
        async getPosts(ctx, users) {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const posts = await res.json();

            const allPosts = await posts.map((post) => {
                return {...post, userName: users.filter(user => user.id === post.userId)[0].name}
            })

            ctx.commit('updatePosts', allPosts);
            ctx.dispatch('filterPosts', '');
        },
        filterPosts(ctx, user) {
            ctx.commit('updateFilteredPosts', ctx.state.posts.filter(post => post.userName.toLowerCase().includes(user.toLowerCase())));
        }
    },
    mutations: {
        updatePosts(state, posts) {
            state.posts = posts;
        },
        updateFilteredPosts(state, posts) {
            state.filteredPosts = posts;
        },
    },
    state: {
        posts: [],
        filteredPosts: []
    },
    getters: {
        allFilteredPosts(state) {
            return state.filteredPosts;
        }
    }
}