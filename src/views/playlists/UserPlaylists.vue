<template>
  <div class="user-playlists">
    <h2>{{user.displayName}}'s Playlists</h2>
    <div v-if="playlists">
      <ListView :playlists ='playlists' />
    </div>
    <router-link class="btn" :to="{name: 'CreatePlaylist'}">Create A New Playlist</router-link>
  </div>
</template>

<script>
import getUser from '../../composables/getUser'
import getCollection from '../../composables/getCollection'
import ListView from '@/components/ListView.vue'


export default {
  components: {ListView},
  setup() {
    const {user} = getUser()
    const {documents: playlists} = getCollection(
      'playlists',
      ['userId', '==', user.value.uid]
      )
      console.log(playlists)
    return { playlists, user }
  }

}
</script>

<style>

</style>
