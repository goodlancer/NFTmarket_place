<template>
  <div class="wrraps">
    <parallax class="page-header header-filter" :style="headerStyle">
      <div class="md-layout">
        <md-layout-item>
          <div class="image-wrapper">
            <div class="brand"></div>
          </div>
        </md-layout-item>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item">
              <md-card>
                <md-card-media-cover>
                  <md-card-media>
                    <img
                      src="https://lh3.googleusercontent.com/RZ9t1F2tmKCcuyJxcUj111ORWrvz1fwEkglzGSgBaTCF0iac0HGa1EMq5Ts8wxJg9NVAyUGW3ZT9Mgg2btmeLOXNNA29eFsoOcvl=s288"
                      alt="nftToken"
                    />
                  </md-card-media>
                </md-card-media-cover>
              </md-card>
              <hr>
              <div class="md-subheading">
                <span>Created by</span> <span class="title">Acitve user</span>
              </div>
              <div class="md-subheading">
                <span>Category: </span>
                <span class="title">Video</span>
              </div>
              <div class="md-subheading">
                <span>Category: </span>
                <span class="title">Video</span>
              </div>
              <div class="md-subheading">
                <span>Contract: </span>
                <span class="title">as2384sfdw0932</span>
              </div>
            </div>
            <div class="md-layout-item">
              <div class="title">
                <h2>work mail</h2>
              </div>
              <div class="content">
                <span>
                  This is NFT description works, I`d like to discuss further details
                </span>
              </div>
              <div class="content">
                <h4 class="title">35 ETH</h4>
              </div>
              <div class="content">
                <md-button>Buy Now</md-button>
              </div>
              <hr>
              <div class="content">
                <h3>Comments</h3>
              </div>
            </div>
          </div>        
        </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      default: require("@/assets/img/vue-mk-header.jpg")
    },
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`,
        height: '200px'
      }
    }
  }
};
</script>
