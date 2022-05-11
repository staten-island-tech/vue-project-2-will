<template>
  <div class="home">
    <div v-for="blog in blogs" :key="blog.id">
      <div class="blog">
        <h3>{{ blog.title }}</h3>
        <p>Charlie Brown is pretty cool </p>
        <div class="icons">
          <span>upvote or downvote this article: </span>
          <span class="material-icons">thumb_up</span>
          <span class="material-icons">thumb_down</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {useStore } from 'vuex'

export default {
  setup() {
    const blogs = ref([
      { title: 'Charlie Brown', id: 1 },
      { title: 'Woodstock', id: 2 },
      { title: 'Snoopy', id: 3 },
    ])
    const store= useStore()
    console.log(store.state.user)
    

    return { 
      blogs
    }
  }
}
</script>
