<template>
<div>
  <v-parallax
  height="150"
    dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
  </v-parallax>
  <v-container>
    <!-- <v-img src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    @click="uploadImg()"
    ref="profileImg"  max-width="150" height="150" class="rounded-circle ma-auto mt-n16"/> -->
    <v-avatar
      class="mt-n16"
      size="128"
    >
      <v-img :src="getProfileImage"
        ref="profileImg"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height blue" justify="center" align="end">
            <v-col class="blue">
            
            </v-col>
          </v-row>
        </template>
        <template>
          <v-row justify="center" align="end">
            <v-col class="mb-3 blue lighten-2" @click="uploadImg()">
              <v-icon>mdi-upload</v-icon>
            </v-col>
          </v-row>
        </template>
      </v-img>
    </v-avatar>
    <input type="file" ref="imgfile" @change="onLoadImgChange" style="display: none"/>
    <v-row class="mt-10">
      <v-col cols="12">
        <v-container>
          <v-row class="pa-5" justify="center" align="start">
            <v-col cols="12">
              <v-card class="pa-6" elevation="24">
                <v-tabs vertical>
                  <v-tab>
                    <v-row class="pa-3" justify="start" align="center">
                      <v-icon>mdi-account</v-icon>
                      Account
                    </v-row>
                  </v-tab>
                  <v-tab>
                    <v-row class="pa-3" justify="start" align="center">
                      <v-icon>
                        mdi-wallet
                      </v-icon>
                      Wallet
                    </v-row>
                  </v-tab>
                  <v-tab>
                    <v-row class="pa-3" justify="start" align="center">
                      <v-icon>
                        mdi-access-point
                      </v-icon>
                      Collections
                    </v-row>
                  </v-tab>
                  <v-tab-item>
                    <v-card flat>
                      <v-row>
                        <v-col cols="12">
                          <v-container>
                            <Account />
                          </v-container>  
                        </v-col>
                      </v-row>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>This is second tab</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card flat>
                      <v-card-text>
                        <p>This is third tab</p>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-col>                                                              
      
    </v-row>
  </v-container>
  
  </div>
</template>

<script>
import Account from '@/components/Account.vue'
import { mapGetters, mapActions } from 'vuex'
export default {
  components: {
    Account
  },
  data: () => ({
  }),
  computed: {
    ...mapGetters([
      'profile',
    ]),
    getProfileImage () {
      return this.profile.avata;
    }
  },
  mounted() {
    console.log('MYTEST', this.profile)
  },
  created() {
    // this.$refs.profileImg.src = this.profile.avata;
    // console.log(this.profile)
  },
  methods: {
    ...mapActions([
      'updateProfileImage',
    ]),
    uploadImg(){
      // alert('upload your image');
      this.$refs.imgfile.click();
    },
    onLoadImgChange() {
      let self = this;
      const uploadImage = this.$refs.imgfile.files;
      var reader = new FileReader();
      reader.onload = function(e){
        var uril = e.target.result;
        self.updateProfileImage(uril).then((res) => {
          console.log(res)
          self.$refs.profileImg.src = uril
        })
      }
      reader.readAsDataURL(uploadImage[0])

    }
  }
}
</script>