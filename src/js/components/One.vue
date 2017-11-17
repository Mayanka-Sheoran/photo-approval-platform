<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul id="example-1">
      <li v-for="item in items">
        <img v-on:click="showChat(item.name)" src='../../assets/chat.png' class='chat' />
        <img class='images' v-bind:src='item.image' v-on:click="selectImage" v-bind:class="{ active: isActive[item.name] }" />
        <div v-if="showChatIcon[item.name]"><div class="tip"></div>
        <input type="text" v-model="comments[item.name]" id='speech-input'></div>
      </li>
    </ul>
    <button class='button' v-on:click="confirm">Approve</button>
  </div>
</template>
<script>
import VueFullscreen from 'vue-fullscreen';
import Vue from 'vue';
import VueSweetAlert from 'vue-sweetalert';
Vue.use(VueSweetAlert)
export default {
  name: 'One',
  data() {
    return {
      msg: 'Click on a picture to approve',
      selectImages: [],
      isActive: {
        legos: false,
        vader: false,
        cricket: false,
        elephant: false,
        dog: false,
        woman: false,
        hay: false
      },
      comments: {
        legos: '',
        vader: '',
        cricket: '',
        elephant: '',
        dog: '',
        woman: '',
        hay: ''
      },
      showChatIcon: {
        legos: false,
        vader: false,
        cricket: false,
        elephant: false,
        dog: false,
        woman: false,
        hay: false,
      },
      items: [{
          image: './src/assets/legos.png',
          name: 'legos'
        },
        {
          image: './src/assets/vader.jpg',
          name: 'vader'
        },
        {
          image: './src/assets/cricket.jpg',
          name: 'cricket'
        },
        {
          image: './src/assets/elephant.png',
          name: 'elephant'
        },
        {
          image: './src/assets/dog.png',
          name: 'dog'
        },
        {
          image: './src/assets/woman.png',
          name: 'woman'
        },
        {
          image: './src/assets/hay.png',
          name: 'hay'
        }
      ]
    };
  },
  methods: {
    selectImage: function(event) {
      this.items.map((a) => {
        if ((event.target.src).indexOf(a.name) != -1) {
          this.isActive[a.name] = !this.isActive[a.name]
        }
      })
    },
    approve: function() {
      this.selectImages = []
      Object.keys(this.isActive).map((item) => {
        if (this.isActive[item] == true) {
          let obj = {}
          obj.name = item
          obj.comment = this.comments[item]
          this.selectImages.push(obj)
        }
      })
      window.localStorage.setItem('selectImages', JSON.stringify(this.selectImages));
    },
    confirm: function() {
      this.$swal({
        title: "Confirmation",
        text: 'Are you sure you want to approve the selected Pictures ?',
      })
      this.approve()
    },
    showChat: function(name) {
      this.showChatIcon[name] = !this.showChatIcon[name]
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

.images {
  width: 270px;
  height: 270px;
  margin: 20px;
  cursor: pointer;
}

.active {
  border: solid 6px green;
  padding: 6px;
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

#speech-input {
  border: none;
  font-size: 2rem;
  width: 150px;
  margin-top: -100px;
  text-align: center;
  border-radius: 30px;
  background-color: rgb(213, 87, 96);
  color: white;
  height: 99px;
  position: absolute;
}

.tip {
  transform: rotate(-45deg);
  background-color: rgb(213, 87, 96);
  width: 24px;
  height: 24px;
  position: relative;
  bottom: -2px;
  left: 245px;
  top: -88px;

}

.tooltip-bg {
  background-color: rgb(213, 87, 96);
  width: 400px;
  height: 80px;
  border-radius: 15px;
}

.chat {
  width: 30px;
  position: absolute;
}

input:focus {
  outline: none;
}

</style>
