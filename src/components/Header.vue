<template>
    <nav id="navbar">
        <div id="header-links-container">
            <router-link to="/" class="nav-link">Home</router-link>
            <router-link to="/login" class="nav-link">Login</router-link>
            <router-link to="/signup" class="nav-link">Signup</router-link>
            <router-link to="/add-post" class="nav-link">Add Post</router-link>
        </div>

        <div id="account">
            <div id="account-image-container">
                <a  class="nav-link"><img src="../assets/img/account_circle.svg" alt="" id="account-img"></a>
            </div>
        </div>
    </nav>
</template>

<script> export default { name: 'HeaderComponent' } </script>

<style scoped>
#navbar {
    width: 100%;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 30px;
    background-color: #341A0B;
}

#navbar #header-links-container a {
    font-size: 20px;
    color: #F5E8D9;
    text-decoration: none;
}

.nav-link {
    padding: 8px 16px;
    border-radius: 5px;
    transition: 0.3s;
}

#navbar #header-links-container a:hover {
    color: #B2997C;
    background-color: #1F0E03;
}

#account {
    position: relative;
}

#account-image-container {
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    transition: 0.3s;
    overflow: hidden;
}

#account-image-container img {
    width: 45px;
    height: 45px;
    margin-top: 6px;
}

#account-image-container:hover {
    cursor: pointer;
    background-color: #1F0E03;
}

.dropdown-content {
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #1F0E03;
    padding: 10px;
    border-radius: 5px;
    color: #F5E8D9;
    display: flex;
    flex-direction: column;
    gap: 5px;
}
</style>
