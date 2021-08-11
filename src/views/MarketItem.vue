<template>
  <div>
    <v-parallax
      dark
      height="80"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
    </v-parallax>
    <v-container>
      <v-row class="pt-16">
        <v-col cols="10"  class="mx-auto">
          <v-container>
            <v-row>
              <v-col cols="12" sm="4">
                <v-card
                  elevation="20"
                >
                  <v-img
                    :src="nftDataById.imgUrl"
                    aspect-ratio="0.85"
                  />
                </v-card>
                <v-divider class="mt-5 mb-5"></v-divider>
                <v-container>
                  <div class="text-start">
                    <span class="text-h6">By User: </span><span class="text-h6">{{nftDataById.userId}}</span>
                  </div>
                  <div class="text-start">
                    <span class="text-h6">Content Type: </span><span class="text-h6">Art</span>
                  </div>
                </v-container>
              </v-col>

              <v-col class="text-start" cols="12"  sm="8" justify="" align-self="start">
                <div class="pa-5">
                  <h2 class="mb-4 text-h3 font-weight-bold">{{nftDataById.title}}</h2>
                </div>
                <div class="pa-5">
                  <v-textarea
                    solo
                    label="Description"
                    readonly
                    class="text-h6"
                    :value="nftDataById.detail"
                  >
                  </v-textarea>
                </div>
                <div class="pa-5">
                  <h2 class="mb-4">price</h2> 
                  <div class="text-end font-weight-bold align-center justify-start d-flex subtitle-1">
                    <Binancelogo class="mr-2" /> {{nftDataById.price}}
                  </div>
                </div>
                <div class="pa-5">
                  <v-btn color="primary"><v-icon class="mr-3">mdi-wallet</v-icon>Buy Bow</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import Binancelogo from '@/components/Binancelogo.vue'
export default {
  components: {
    Binancelogo,
  },
  data: () => ({
    nftDataById: {
      id: '',
      imgUrl: '',
      title: '',
      detail: '',
      price: '',
      userId: '',
    }
  }),
  props: ['itemId'],
  mounted() {
    this.getNFTById({id: this.itemId}).then((res) => {
      console.log(res);
      this.nftDataById.id = res.data.data._id;
      this.nftDataById.imgUrl = res.data.data.datalink;
      this.nftDataById.detail = res.data.data.detail;
      this.nftDataById.title = res.data.data.title;
      this.nftDataById.price = res.data.data.price;
      this.nftDataById.userId = res.data.data.byuser[0];
    })
  },
  methods: {
    ...mapActions([
      'getNFTById',
    ]),
  }
}
</script>
