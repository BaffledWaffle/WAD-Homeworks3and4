<template>
    <div id="content">
        <form id="login-form" @submit.prevent="handleLogin">
            <div id="inputs-container">
                <h2>WELCOME TO PARAPAPA</h2>
                <p><router-link to="/signup">Create an account</router-link></p>
                <p>or</p>
                <p><b>Please log in</b></p>
                <input type="text" v-model="email" name="email" id="login-email" placeholder="Email">
                <input type="password" v-model="password" name="password" id="login-password" placeholder="Password">
                <button type="submit">LOG IN</button>
                <p><a href="#">Forget password?</a></p>
            </div>
        </form>
    </div>
    <FooterComponent />
</template>

<script>
import axios from 'axios'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: "LoginView",

components: {
    FooterComponent,
},
  data() {
    return {
      email: "",
      password: "",
      errors: [],
      errorMessage: ''
    };
  },
methods: {
    async handleLogin() {
      try {
        const res = await axios.post('http://localhost:3000/api/users/login', {
          email: this.email,
          password: this.password
        })

        const token = res.data.token
        localStorage.setItem('token', token)
        this.$root.$emit('user-logged-in')
        alert("Welcome!")
        this.$router.push('/')
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message)
        } else {
          console.error(err)
        }
      }
    }
  }
}

</script>

<style scoped src="../assets/styles/login.css">
</style>
