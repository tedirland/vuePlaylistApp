<template>
  <div class="add-song">
    <button v-if="!showForm" @click="showForm = true">Add To Playlist</button>
    <form v-if="showForm" @submit.prevent="handleSubmit">
      <h4>Add a new Song</h4>
      <input type="number" min="1" max="10" placeholder="Ranking" required v-model="ranking">
      <input type="text" placeholder="Song Title" required v-model="title">
      <input type="text" placeholder="Artist" required v-model="artist">
      <input type="text" placeholder="Youtube Url" required v-model="youtubeUrl">
      <input type="text" placeholder="Description" required v-model="description">
      <button>Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import useDocument from '@/composables/useDocument'
export default {
  props: ['playlist'],
setup(props) {
  const title = ref('')
  const artist = ref('')
  const ranking = ref('')
  const youtubeUrl = ref('')
  const description = ref('')
  const showForm = ref(false)
  const {updateDoc} = useDocument('playlists', props.playlist.id)

const handleSubmit = async () => {
  const newSong = {
    title: title.value,
    artist: artist.value,
    ranking: ranking.value,
    id: Math.random(Math.random() *1000000),
    youtubeUrl: youtubeUrl.value,
    description: description.value,
  }
  await updateDoc({
    songs: [...props.playlist.songs, newSong]
  })
      title.value = ''
      artist.value = ''
      ranking.value = ''
      youtubeUrl.value = ''
      description.value = ''

}

return {title, artist, ranking, youtubeUrl, description, showForm, handleSubmit}
}
}
</script>

<style scoped>
 .add-song {
    text-align: center;
    margin-top: 40px;
  }
  form {
    max-width: 100%;
    text-align: left;
  }
</style>
