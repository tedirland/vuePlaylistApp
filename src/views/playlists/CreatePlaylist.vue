<template>
  <form @submit.prevent="handleSubmit">
    <h4>Create New Playlist</h4>
    <input type="text" required placeholder="playlist title" v-model="title">
    <textarea required placeholder="playlist description..." v-model="description"></textarea>
    <!-- upload playlist image -->
    <label>Upload Playlist Cover Image</label>
    <input type="file">

    <div v-if="error" class="error">{{error}}</div>

    <button>Create</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
setup() {
  const title = ref('')
  const description = ref('')
  const error = ref(null)

  const handleSubmit = () => {
console.log(title.value, description.value)
  }
  return {title, description, handleSubmit, error}
}
}
</script>

<style>
 form {
    background: white;
  }
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>
