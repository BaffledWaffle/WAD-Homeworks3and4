<template>
    <div id="content">
        <form id="login-form" action="">
            <div id="inputs-container">
                <h2>WELCOME TO PARAPAPA</h2>
                <p><router-link to="/signup">Create an account</router-link></p>
                <p>or</p>
                <p><b>Please log in</b></p>
                <input type="text" name="email" id="login-email" placeholder="Email">
                <input type="password" name="password" id="login-password" placeholder="Password">
                <button type="submit">LOG IN</button>
                <p><a href="#">Forget password?</a></p>
            </div>
        </form>
    </div>
    <FooterComponent />
</template>

<script>
import FooterComponent from '@/components/Footer.vue'

export default {
  name: "LoginView",

components: {
    FooterComponent,
  }
}

</script>

<style scoped src="../assets/styles/login.css">
</style>
