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
                v-for="n in 12"
                :key="n"
                class="d-flex child-flex"
                cols="3"
              >
               
                <v-card
                  valid
                  width="100%"
                  @click="nftItemView(n)"
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
                    :src="`https://ipfs.io/ipfs/QmeGNQZYcoNX7TpFsCM8p3kzm9MpfyLwo3NHioLzGdBn2W?filename=Image%201.jpg`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  />
                  <v-card-text>
                    <v-row>
                      <v-col cols="6">
                        <div class="text-start font-weight-bold mb-2">
                          <h4 class="text-h6 font-weight-bold">Nasame</h4>
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
                          <Binancelogo class="mr-2" /> 555
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
import Binancelogo from '@/components/Binancelogo.vue'
export default {
  components: {
    Binancelogo
  },
  methods: {
    nftItemView(id) {
      // alert(id);
      this.$router.push(`/market/${id}`)
    }
  }
}
</script>