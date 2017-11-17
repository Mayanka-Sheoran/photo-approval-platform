<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span>Enter your username</span>
    <br>
    <input type="text" v-model="username" placeholder="Username">
    <br>
    <button class='button' v-on:click="login">Login</button>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      msg: 'Welcome to the Photo Approval Dashboard',
      username: ''
    };
  },
  methods: {
    login: function() {
      window.localStorage.setItem('userLevel', JSON.stringify(this.username));
      this.$router.push(`/${this.username}`)
      this.$parent.$emit('loggedIn', this.username)
    }
  },
};

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.navbar {
  float: left;
  width: 230px;
  height: 100vh;
  background: rgb(42, 53, 59);
  color: white;
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.list {
  list-style-type: none;
  margin: 15px;
  padding: 0;
  width: 200px;
  background-color: rgb(231, 126, 137);
  color: white;
  font-weight: 800;
  border-radius: 10px;
}

.list-item a {
  display: block;
  color: white;
  text-decoration: none;
  width: 200px;
  padding: 20px 0px;
}

.list-item {
  margin: 0 !important;
  width: 200px;

  border-bottom: solid white 1px;
}




/* Change the link color on hover */

.list-item a:hover {
  background-color: rgb(240, 240, 240);
  color: black;
  width: 200px;
  font-weight: 800;
}

.header {
  width: 100vw;
  height: 50px;
  background-color: rgb(213, 87, 96);
}

.button {
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: none;
  background-color: rgb(213, 87, 96);
  color: white;
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

input {
  width: 200px;
  height: 30px;
  border-radius: 5px;
  border: none;
  padding: 6px;
  margin: 13px;
}

</style>
