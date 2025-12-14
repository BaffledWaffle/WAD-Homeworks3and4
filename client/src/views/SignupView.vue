<template>
  <div id="content">
    <form id="signup-form" @submit.prevent="handleSignup">
      <div id="inputs-container">
        <h2>Create an Account</h2>

        <input 
          type="text" 
          v-model="email" 
          placeholder="Email"
        >

        <input 
          type="password" 
          v-model="password" 
          placeholder="Password"
        >

        <!-- Show errors -->
        <p v-if="errors.length > 0" style="color: red; text-align: center;">
          The password must:
          <ul style="text-align: left; margin-top: 10px;">
            <li v-for="(msg, index) in errors" :key="index">
              {{ msg }}
            </li>
          </ul>
        </p>

        <button type="submit">SUBMIT</button>

        <p>
          Already have an account?
          <router-link to="/login">Log in</router-link>
        </p>
      </div>
    </form>
  </div>
  <FooterComponent />
</template>

<script>
import axios from 'axios'
import FooterComponent from '@/components/Footer.vue'

export default {
  name: "SignupView",

  components: {
    FooterComponent
  },

  data() {
    return {
      email: "",
      password: "",
      errors: []
    };
  },
  methods: {
    async handleSignup() {
      try {
        const res = await axios.post('http://localhost:3000/api/users/signup', {
          email: this.email,
          password: this.password
        })


        const token = res.data.token
        localStorage.setItem('token', token)

        this.$router.push('/')
      } catch (err) {
        if (err.response) {
          this.errorMessage = err.response.data.message
        } else {
          console.error(err)
          this.errorMessage = 'Server error'
        }
      }
    }
  }
}
</script>

<style scoped src="../assets/styles/signup.css">
</style>