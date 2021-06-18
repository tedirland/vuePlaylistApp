<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <router-link class="navbar-brand" :to="{name:'Home'}">Good Time Noise</router-link>
    <button v-if="user" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div v-if="user" class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'Home'}">All Playlists</router-link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Howdy, {{user.displayName}}
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><router-link class="dropdown-item" :to="{name: 'UserPlaylists'}">My Playlists</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'CreatePlaylist'}">Create Playlist</router-link></li>
            <li><a @click="handleLogout" class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div v-else>
     <h7>Log In to View and Create Playlists...</h7>
    </div>
  </div>
</nav>
</template>

<script>

import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'
export default {
  setup() {
    const {user} = getUser()
    const { logout } = useLogout()
    const router = useRouter()

    const handleLogout = async () => {
      await logout()
      console.log('user logged out')
      router.push({name: 'Login'})
    }
    return {handleLogout, user}
  }
}
</script>

<style scoped>
  .navbar {
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
  }
  nav {

    margin: 0 auto;
  }
  nav img {
    max-height: 60px;
  }
  nav h1 {
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  }
  nav .links {
    margin-left: auto;
  }
  nav .links a, button {
    margin-left: 16px;
    font-size: 14px;
  }
  nav img {
    max-height: 60px;
  }
  span {
    font-size: 14px;
    display: inline-block;
    margin-left: 16px;
    padding-left: 16px;
    border-left: 1px solid #eee;
  }
</style>
