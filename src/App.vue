<template>
  <main class="root">
    <div class="container">
      <filter-name></filter-name>
      <div class="card-columns">
        <div v-for="post in allFilteredPosts" :key="post.id" class="card">
          <div class="card-body">
            <h2 class="h2">{{post.title}}</h2>
            <p class="p">{{post.body}}</p>
            <p>{{post.userName}}</p>
          </div>
        </div>
        <div v-if="allFilteredPosts.length === 0" class="empty-list">
          <p class="p">Ничего по вашему запросу не найдено</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import FilterName from "@/components/filter";

export default {
  name: 'App',
  components: {FilterName},
  computed: {
    ...mapGetters(["allFilteredPosts", "allUsers"]),
  },
  methods: {
    ...mapActions(["getPosts", "getUsers"])
  },
  async mounted() {
    await this.getUsers();
    await this.getPosts(this.allUsers);
  }
}
</script>

<style lang="scss">
.root {
  background: aliceblue;
  width: 100vw;
  min-height: 100vh;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 50px 100px;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
  background: transparent;
}
.empty-list {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-columns {
  -webkit-column-count: 1;
  -moz-column-count: 1;
  column-count: 1;
  margin: auto;
}

.h2 {
  color: #1967d2;
}

.card {
  width: 100%;
}
@media (min-width: 768px) {
  .card {
    max-width: 350px;
  }
  .card-columns {
    -webkit-column-count: 2;
    -moz-column-count: 2;
    column-count: 2;
  }
}
@media (min-width: 992px) {
  .card-columns {
    -webkit-column-count: 3;
    -moz-column-count: 3;
    column-count: 3;
  }
}
</style>
