<template>
    <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>

        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" required>
    
        <label for="password">Password:</label>
        <input type="password" name="password" v-model="password" required>
    
        <button>Sign up</button>
        <div v-if="error">{{ error }}</div>
    </form>
</template>

<script>
import { ref } from 'vue'
import { useStore } from '@/stores/firebase.js'
import { useRouter } from 'vue-router'

export default {
    setup() {
        const email = ref('')  
        const password = ref('')
        const error = ref(null)
        const store= useStore()
        const router = useRouter()

        const handleSubmit = async() => {
           try{
                await store.signup(email, password)
                router.push('/')
           } catch(err){
               error.value = err.message
           }
        }
        return { handleSubmit,email,password, error }
    },
}
</script>
