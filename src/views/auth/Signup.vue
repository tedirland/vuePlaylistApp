<template>
  <form @submit.prevent="handleSubmit">
    <h3>Signup</h3>
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Sign Up</button>
    <button v-if="isPending" disabled>Loading</button>
  </form>
</template>

<script>
// using @ means start at the project src root
import useSignup from '@/composables/useSignup'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
export default {
  setup() {

    const { error, signup , isPending } = useSignup()
    const router = useRouter()
    const email = ref('')
    const password = ref('')
    const displayName = ref('')

    const handleSubmit = async () => {
      const res = await signup(email.value, password.value, displayName.value)
      if (!error.value) {
         router.push({name:'Home'})
      }
    }
    return { email, password, displayName, isPending, error, handleSubmit }
  }
}
</script>
