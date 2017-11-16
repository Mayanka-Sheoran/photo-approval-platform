<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul id="example-1">
      <li v-for="item in imagesLevelTwo">
        <img class='images' v-bind:src='item.image' v-on:click="selectImage" v-bind:class="{ active: isActive[item.name] }" />
      </li>
    </ul>
    <button v-on:click="approve">Approve</button>
  </div>
</template>
<script>
export default {
  name: 'Two',
  data() {
    return {
      msg: 'Page Two',
      selectImages: [],
      isActive: {
        legos: false,
        vader: false,
        cricket: false,
        elephant: false,
        dog: false
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
        }
      ],
      imagesLevelTwo: []
    };
  },
  created: function() {
    this.getImages()
  },
  methods: {
    selectImage: function(event) {
      this.items.map((a) => {
        if ((event.target.src).indexOf(a.name) != -1) {
          this.isActive[a.name] = !this.isActive[a.name]
        }
      })

    },
    getImages: function() {
      JSON.parse(window.localStorage.selectImages).map((item) => {
        this.imagesLevelTwo.push(_.find(this.items, { name: item }))
      })
    },
    approve: function() {
      this.selectImages = []
      Object.keys(this.isActive).map((item) => {
        if (this.isActive[item] == true) {
          this.selectImages.push(item)
        }
      })
      window.localStorage.setItem('selectImagesLevelTwo', JSON.stringify(this.selectImages));
      this.$router.push('/three')
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
  cursor: pointer;
}

.active {
  border: solid 5px green;
}

</style>
