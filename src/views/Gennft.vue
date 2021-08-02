<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised p-5">
      <div class="md-layout">
        <div class="container">
          <div class="title">
            <h2 class="text-5xl font-bold text-left">Create Your Own NFT</h2>
          </div>
        </div>
      </div>
      <div class="md-layout md-gutter market-layout">
        <div class="md-layout-item md-size-30">
          <div class="container rightContent">
            <div
              class="w-300-px h-200-px flex border border-blueGray-500 bg-lightBlue-200 text-center font-bold text-xl items-center justify-center m-2"
              @click="coverImageClick"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="coverDrop"
              >
              <img :src="coverSrcs" v-if="coverImgable" class="max-w-full max-h-full" alt="">
              <span v-else>Cover Image Preview <br> Upload/Drop<br>
                (.png, .jpg, .gif, .svg)</span>
              <input
              type="file"
              ref="coverfile"
              class="hidden"
              name="coverfile"
              @change="onCoverchange()"
              accept=".pdf, jpg, .jpeg, .png"
              >
            </div>
          </div>
          <div class="container rightContent">
            <div
              class="w-300-px h-200-px flex border border-blueGray-500 bg-lightBlue-200 text-center font-bold text-xl items-center justify-center m-2"
              @click="contentImageClick"
              @dragover="dragover"
              @dragleave="dragleave"
              @drop="contentDrop"
              >
              <img :src="contentSrcs" v-if="contentImgable" class="max-w-full max-h-full" alt="">
              <span v-else>Content Image Preview <br> Upload/Drop<br>
                (.png, .jpg, .gif, .svg)</span>
              <input
              type="file"
              ref="contentfile"
              class="hidden"
              name="contentfile"
              @change="onContentchange()"
              accept=".pdf, jpg, .jpeg, .png"
              >  
            
            </div>
          </div>
        </div>
        <div class="md-layout-item md-size-70">
          <div class="container">
            <div class="title">
              <md-field>
                <label>Title</label>
                <md-input v-model="title"></md-input>
              </md-field>
            </div>
          </div>
          <md-field class="border-2 p-1">
            <label>Description</label>
            <md-textarea v-model="detail" md-counter="80"></md-textarea>
          </md-field>
          <div class="container">
            <div class="md-layout md-gutter">
              <div class="md-layout-item">
                <md-field>
                  <label for="type">Type</label>
                  <md-select v-model="type" name="type" id="type">
                    <md-option value="Image">Image</md-option>
                    <md-option value="Video">Video</md-option>
                    <md-option value="Audio">Audio</md-option>
                  </md-select>
                </md-field>
              </div>
              <div class="md-layout-item">
                <md-field>
                  <label for="category">Category</label>
                  <md-select v-model="category" name="category" id="category">
                    <md-option value="Image">Image</md-option>
                    <md-option value="Video">Video</md-option>
                    <md-option value="Audio">Audio</md-option>
                  </md-select>
                </md-field>
              </div>
            </div>
          </div>
          <div class="container">
            <div class="title">
              <md-field>
                <label>Amount</label>
                <md-input v-model="amount"></md-input>
              </md-field>
            </div>
          </div>
          <div class="container">
            <md-button>Submit</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    }
  } ,
  data() {
    return {
      coverImgable: false,
      coverSrcs: '',
      contentImgable: false,
      contentSrcs: '',
      title: '',
      detail: '',
      amount: '',
      type: '',
      category: ''
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`,
        height: '100px'
      };
    }
  },
  methods: {
    coverImageClick() {
      this.$refs.coverfile.click();
    },
    contentImageClick() {
      this.$refs.contentfile.click();
    },
    dragover(event){
      event.preventDefault();
      event.currentTarget.classList.remove('bg-lightBlue-200')
      event.currentTarget.classList.add('bg-teal-200')
    },
    dragleave(event){
      event.preventDefault();
      event.currentTarget.classList.remove('bg-teal-200')
      event.currentTarget.classList.add('bg-lightBlue-200')
    },
    coverDrop(event){
      event.preventDefault();
      this.$refs.coverfile.files = event.dataTransfer.files
      this.onCoverchange()
      console.log(event)
    },
    contentDrop(event){
      event.preventDefault();
      this.$refs.contentfile.files = event.dataTransfer.files
      this.onContentchange()
      console.log(event)
    },
    onContentchange() {
       let self = this
      const contentfiles = this.$refs.contentfile.files
      console.log(contentfiles)
      var reader = new FileReader();
      reader.onload = function(e){
        var uril = e.target.result
        self.contentImgable = true
        self.contentSrcs = uril
      }
      reader.readAsDataURL(contentfiles[0])
    },
    onCoverchange(){
      let self = this
      const coverfiles = this.$refs.coverfile.files
      console.log(coverfiles)
      // this.coverImgable = true
      var reader = new FileReader();
      reader.onload = function(e){
        var uril = e.target.result
        self.coverImgable = true
        console.log(self.$refs.coverimage)
        self.coverSrcs = uril
        
      }
      reader.readAsDataURL(coverfiles[0])
    },
  }
}
</script>

<style scoped>
.market-layout {
  margin: 0 !important;
}
.rightContent {
  justify-content: flex-end;
}
</style>
