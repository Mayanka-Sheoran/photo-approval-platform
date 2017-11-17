<template>
  <div class="hello">
    <div class='header'><img class='logout' v-on:click="logout" src='../../assets/logout.png' />
      <img class='logout' v-on:click="showMenu" v-if="userLevel == 'three'" src='../../assets/menu.png' />
      <div class='headerText'>{{headerText}}</div>
    </div>
    <div class='navbarMobile' v-if="showSideBar">
      <ul class='list'>
        <li class='list-item'><a href="/#/one">View Level 1</a></li>
        <li class='list-item'><a href="/#/two">View Level 2</a></li>
        <li class='list-item'><a href="/#/three">View Level 3</a></li>
        <li class='list-item'><a href="/#/gallery">View Gallery</a></li>
      </ul>
    </div>
    <div class='navbar' v-if="userLevel == 'three'">
      <ul class='list'>
        <li class='list-item'><a href="/#/one">View Level 1</a></li>
        <li class='list-item'><a href="/#/two">View Level 2</a></li>
        <li class='list-item'><a href="/#/three">View Level 3</a></li>
        <li class='list-item'><a href="/#/gallery">View Gallery</a></li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      userLevel: '',
      headerText: '',
      levels: {
        'one': 'Approval Level 1',
        'two': 'Approval Level 2',
        'three': 'Approval Level 3',
        'gallery': 'Gallery',
        'junk': ''
      },
      showSideBar: false
    };
  },
  created() {
    this.$on('loggedIn', section => {
      this.userLevel = section
      this.headerText = this.levels[section]
    });
  },
  methods: {
    logout: function() {
      window.localStorage.setItem('userLevel', JSON.stringify('junk'));
      this.userLevel = ''
      this.headerText = ''
      this.$router.push('/login')
    },
    showMenu: function() {
      this.showSideBar = !this.showSideBar
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
  margin-left: -102px;
}
.navbarMobile {
  float: left;
  width: 230px;
  height: 100vh;
  background: rgb(42, 53, 59);
  color: white;
  display: flex;
  align-items: baseline;
  justify-content: center;
  margin-left: 7px;
  position: fixed;
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

.logout {
  width: 35px;
  margin: 8px;
  float: left;
}

.headerText {
  color: white;
  font-size: 36px;
  float: right;
  margin-right: 20px;
}

@media screen and (max-width: 748px) {
  .headerText {
    color: white;
    font-size: 20px;
    float: right;
    margin-right: 20px;
    margin-top: 12px;
  }
  .navbar {
    display: none
  }
}

</style>
