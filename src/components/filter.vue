<template>
  <form class="input-group mb-3" @submit="searchAuthor($event, nameAuthor)">
    <div class="input-group-prepend">
      <button class="btn btn-outline-secondary" type="button" id="button-addon1">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
      </button>
    </div>
    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1" v-model="nameAuthor">
  </form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "filter-name",
  data() {
    return {
      nameAuthor: ''
    }
  },
  methods: {
    ...mapActions(["filterPosts"]),
    searchAuthor(event, user) {
      event.preventDefault();
      this.filterPosts(user);
    }
  }
}
</script>

<style scoped>

</style>