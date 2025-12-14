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
        <p style="color: red; text-align: center;">

          {{ errorMessage }}

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
      errors: [],
      errorMessage: ''
    };
  },
  methods: {
    async handleSignup() {
      this.errorMessage = '';
      try {
        const res = await axios.post('http://localhost:3000/api/users/signup', {
          email: this.email,
          password: this.password
        })


        const token = res.data.token
        localStorage.setItem('token', token)

        this.$router.push('/')
      } catch (err) {
          console.log(err.response?.data);
          this.errorMessage = err.response?.data?.message || 'Server error';
  }
    }
  }
}
</script>

<style scoped src="../assets/styles/signup.css">
</style>