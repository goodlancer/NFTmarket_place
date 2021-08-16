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
                  <v-row>
                    <span class="text-h6">By User: </span><span class="text-h6">{{nftDataById.userId}}</span>
                  </v-row>
                  <v-row>
                    <span class="text-h6">Content Type: </span><span class="text-h6">Art</span>
                  </v-row>
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
                  <v-btn color="primary" @click="buyItem()"><v-icon class="mr-3">mdi-wallet</v-icon>Buy Bow</v-btn>
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
import { getWeb3 } from '@/web3Server';
import { mapActions } from 'vuex';
import Binancelogo from '@/components/Binancelogo.vue'
export default {
  components: {
    Binancelogo,
  },
  data: () => ({
    web3: null,
    jsonArtNFT: {},
    artNFTData: null,
    accounts: [],
    artNFTmarketplace: null,
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
  async mounted() {
    // this.getNFTById({id: this.itemId}).then((res) => {
    //   console.log(res);
    //   this.nftDataById.id = res.data.data._id;
    //   this.nftDataById.imgUrl = res.data.data.datalink;
    //   this.nftDataById.detail = res.data.data.detail;
    //   this.nftDataById.title = res.data.data.title;
    //   this.nftDataById.price = res.data.data.price;
    //   this.nftDataById.userId = res.data.data.byuser[0];
    // })

    this.web3 = await getWeb3();
    console.log('first mounted', this.web3);
    const networkId = await this.web3.eth.net.getId();
    this.accounts = await this.web3.eth.getAccounts();
    const jsonArtNFTData = require("../../build/contracts/ArtNFTData.json");
    this.jsonArtNFT = require("../../build/contracts/ArtNFT.json");
    const jsonArtNFTmarket = require("../../build/contracts/ArtNFTmarketplace.json");
    const marketNet = jsonArtNFTmarket.networks[networkId.toString()];
    this.artNFTmarketplace = new this.web3.eth.Contract(
      jsonArtNFTmarket.abi,
      marketNet && marketNet.address,
    );
    console.log("== market contract ==", this.artNFTmarketplace);
    const deployNet = jsonArtNFTData.networks[networkId.toString()];
    this.artNFTData = new this.web3.eth.Contract(
      jsonArtNFTData.abi,
      deployNet && deployNet.address,
    );
    console.log("== instance NFTData ==", this.artNFTData);
    const getArt = await this.artNFTData.methods.getArtByNFTAddress(this.itemId).call();
    console.log("=== all arts contracts ===", getArt);
    this.nftDataById.id = getArt.artNFT;
    this.nftDataById.imgUrl = "https://ipfs.io/ipfs/"+getArt.ipfsHashofArt;
    this.nftDataById.detail = getArt.artNFTSymbol;
    this.nftDataById.title = getArt.artNFTname;
    this.nftDataById.price = this.web3.utils.fromWei(getArt.artPrice, 'ether');
    this.nftDataById.userId = getArt.ownerAddress;
  },
  methods: {
    ...mapActions([
      'getNFTById',
    ]),
    async buyItem(){
      console.log('this gen art');
      
      // const artId = 1;
      // const artNFT = new this.web3.eth.Contract(this.jsonArtNFT.abi, this.itemId);
      // console.log("== bue artNFT ==", artNFT);
      // const owner = await artNFT.methods.ownerOf(photoId).call();

      const art = await this.artNFTData.methods.getArtByNFTAddress(this.itemId).call();
      const buyAmount = await art.artPrice;
      // const txReceipt = await 
      this.artNFTmarketplace.methods.buyPhotoNFT(this.itemId).send({ from: this.accounts[0], value: buyAmount }).once('receipt', (receipt) => {
        console.log("==response of buyArtNFT===", receipt);  
      });
      
    }                                                
  }
}
</script>
