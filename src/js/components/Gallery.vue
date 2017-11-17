<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
        <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="image, imageIndex in images"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '300px', margin: '20px' }"
    ></div>
  </div>
</template>
<script>
import VueGallery from 'vue-gallery';
export default {
  name: 'Gallery',
  data() {
    return {
      msg: 'Gallery',
      selectImages: [],
      isActive: {
        legos: false,
        vader: false,
        cricket: false,
        elephant: false,
        dog: false
      },
       images: [

      ],
      index: null,
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
      JSON.parse(window.localStorage.selectImagesLevelThree).map((item) => {
        this.images.push((_.find(this.items, { name: item })).image)
      })
    }
  },
   components: {
    'gallery': VueGallery
  }
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
.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
  }
.active {
  border: solid 5px green;
}

</style>
