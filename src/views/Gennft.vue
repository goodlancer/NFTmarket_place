<template>
  <div>
    <v-parallax
      dark
      height="250"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row align="center" justify="center">
        <v-col>
          <h1 class="text-h2 font-weight-bold mt-10">Generate Your NFT</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row >
        <v-col cols="12">
          <v-container class="mt-n16">
            <v-card class="pa-12" elevation="24">
              <v-row>
                <v-col cols="3">
                  <v-img 
                    ref="nftdataImg"
                    max-width="500"
                    aspect-ratio="1"
                    elevation="24"
                    class="border rounded-lg"
                    hide-input='true'
                    @click="uploadImg()"
                    @dragover="dragover"
                    @dragleave="dragleave"
                    @drop="nftImagedrop"
                  >
                    <template v-slot:placeholder>
                      <v-row class="fill-height blue lighten-1 ma-0" justify="center" align="center">
                        <v-col>
                          <span class="text-h5 font-weight-bold">{{nftStateStr}}</span>
                        </v-col>
                      </v-row>
                    </template>
                  </v-img>
                  <input type="file" ref="nftfile" @change="onnftfilechange" style="display: none"/>
                </v-col>
                
                <v-col class="px-12" cols="8">
                  <v-form v-model="nftformvalid" ref="nftform">
                  <v-row class="text-start" justify="start" align="center">
                    <v-col cols="5">
                      <v-text-field
                        solo
                        :rules="[rules.required]"
                        v-model="nftDataform.title"
                        label="Title"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="text-start" justify="start" align="center">
                    <v-col cols="12">
                      <v-textarea
                        label="Description"
                        auto-grow
                        filled
                        v-model="nftDataform.detail"
                        solo
                        rows="5"
                        row-height="15"
                      ></v-textarea>
                    </v-col>
                  </v-row>
                  <v-row class="text-start" justify="start" align="center">
                    <v-col cols="6">
                      <v-select
                        solo
                        :items="typeItems"
                        :rules="[rules.required]"
                        v-model="nftDataform.type"
                        label="Type"
                      ></v-select>
                    </v-col>
                    <v-col cols="6">
                      <v-text-field
                        solo
                        :rules="[rules.required]"
                        v-model="nftDataform.category"
                        label="Category"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="text-start" justify="start" align="center">
                    <v-col cols="6">
                      <v-text-field
                        solo
                        :rules="[rules.required]"
                        v-model="nftDataform.price"
                        type="number"
                        label="Price"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="text-start" justify="start" align="center">
                    <v-col cols="6">
                      <v-btn
                        :disabled="!nftformvalid"
                        class="mr-4"
                        elevation="24"
                        color="primary"
                        @click="submitNftData"
                      >
                        update
                      </v-btn>
                      <v-btn
                        :disabled="!nftformvalid"
                        elevation="24"
                        color="primary"
                        @click="submitNftData"
                      >
                        cancel
                      </v-btn>
                    </v-col>
                  </v-row>
                  </v-form>
                </v-col>
              </v-row>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>

export default {
  components: {
  },
  data: () => ({
    nftdata: '',
    nftformvalid: true,
    nftStateStr: 'Please upload your image',
    image: null,
    typeItems: ['Image', 'audio', 'video'],
    nftDataform: {
      title: '',
      detail: '',
      type: '',
      category: '',
      price: ''
    },
    rules: {
      required: value => !!value || 'Required.'
    }
  }),
  methods: {
    dragover(event){
      event.preventDefault();
      // event.currentTarget.classList.remove('bg-lightBlue-200')
      // event.currentTarget.classList.add('bg-teal-200')
    },
    dragleave(event){
      event.preventDefault();
      // event.currentTarget.classList.remove('bg-teal-200')
      // event.currentTarget.classList.add('bg-lightBlue-200')
    },
    nftImagedrop(event){
      event.preventDefault();
      this.$refs.nftfile.files = event.dataTransfer.files
      this.onnftfilechange()
      console.log(event)
    },
    submitNFTdata(){
      alert("myNFTgen");
    },
    onFileInfo(){
      console.log('sss')
    },
    onnftfilechange(){
      // alert('update worker');
      let self = this
      const nftfiles = this.$refs.nftfile.files
      console.log(this.coverfiles)
      // this.coverfileable = true
      var reader = new FileReader();
      reader.onload = function(e){
        var uril = e.target.result
        self.nftStateStr = '';
        // self.coverfileable = true
        self.$refs.nftdataImg.src = uril
      }
      reader.readAsDataURL(nftfiles[0])
    },
    uploadImg(){
      // alert('upload your image');
      this.$refs.nftfile.click();
    },
    submitNftData() {
      if(this.$refs.nftform.validate()){
        console.log()
      }
    }
  }
}
</script>
<style scoped>
.border{
  border: 1px solid #000;
}
</style>
