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
                <v-card>
                  <v-img 
                    :src="`https://ipfs.io/ipfs/QmeGNQZYcoNX7TpFsCM8p3kzm9MpfyLwo3NHioLzGdBn2W?filename=Image%201.jpg`"
                    aspect-ratio="0.85"
                  />
                </v-card>
                <v-divider class="mt-5 mb-5"></v-divider>
                <v-container>
                  <div class="text-start">
                    <span class="text-h6">By User: </span><span class="text-h6">0x234s2dfdwe2</span>
                  </div>
                  <div class="text-start">
                    <span class="text-h6">Content Type: </span><span class="text-h6">Art</span>
                  </div>
                </v-container>
              </v-col>

              <v-col class="text-start" cols="12"  sm="8" justify="" align-self="start">
                <div class="pa-5">
                  <h2 class="mb-4 text-h3 font-weight-bold">Myworker</h2>
                </div>
                <div class="pa-5">
                  <p class="text-h6">Details sdfsegsesegsefsefsd s fwaefasdf awefad1111111111111</p>
                </div>
                <div class="pa-5">
                  <h2 class="mb-4">price</h2> 
                  <div class="text-end font-weight-bold align-center justify-start d-flex subtitle-1">
                    <Binancelogo class="mr-2" /> 555
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
import Binancelogo from '@/components/Binancelogo.vue'
export default {
  components: {
    Binancelogo
  }  
}
</script>
