<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center" cols="12">
          <h1 class="text-h1 font-weight-bold">MarketPlace</h1>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container>
      <v-row >
        <v-col cols="12">
          <v-card class="mt-n16 pa-8">
            <v-row class="ma-0">
              <v-col
                v-for="(item, index) in datas"
                :key="index"
                class="d-flex child-flex"
                cols="3"
              >
               
                <v-card
                  valid
                  width="100%"
                  @click="nftItemView(item.id)"
                  :elevation="24">
                  <v-app-bar flat color="#fff">
                    <v-btn
                      color="red"
                      icon
                    >
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-app-bar>
                  <v-img
                    :src="item.dataUrl"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  />
                  <v-card-text>
                    <v-row>
                      <v-col cols="6">
                        <div class="text-start font-weight-bold mb-2">
                          <h4 class="text-h6 font-weight-bold">{{item.title}}</h4>
                        </div>
                        <div class="text-start font-weight-bold">
                          <v-icon>mdi-link-variant</v-icon>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="text-end font-weight-bold mb-2">
                          Price
                        </div>
                        <div class="text-end font-weight-bold align-center justify-end d-flex subtitle-1">
                          <Binancelogo class="mr-2" /> {{item.price}}
                        </div>
                      </v-col>
                    </v-row>
                    
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-card>
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
    Binancelogo
  },
  data: () => ({
    datas: [],
  }),
  mounted() {
    this.getAllDatas();
  },
  methods: {
    ...mapActions([
      'getNFTs',
    ]),
    nftItemView(id) {
      // alert(id);
      this.$router.push(`/market/${id}`)
    },
    getAllDatas(){
      this.getNFTs().then((res) => {
        console.log(res);
        res.data.nftdata.map((item) => {
          this.datas.push({
            id: item._id,
            dataUrl: item.datalink,
            title: item.title,
            price: item.price,
          })
        })
      })
    }
  }
}
</script>