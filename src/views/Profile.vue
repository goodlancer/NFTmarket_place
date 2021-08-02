<template>
  <div class="wrapper">
    <parallax
      class="section page-header header-filter"
      :style="headerStyle"
    ></parallax>
    <div class="main main-raised">
      <div class="section profile-content">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-50 mx-auto">
              <div class="profile">
                <div class="avatar">
                  <img
                    ref="profileImg"
                    :src="getprofileImg"
                    alt="Circle Image"
                    class="img-raised rounded-circle img-fluid"
                  />
                  <div class="circleBar">
                    <div class="uploadAction" @click="uploadAvata">
                      <md-icon class="Grey-50">draw</md-icon>
                      <input
                        type="file"
                        ref="avatafile"
                        class="hidden"
                        name="avatafile"
                        @change="onAvatapicker()"
                        accept=".pdf, jpg, .jpeg, .png"
                        >
                    </div>
                  </div>
                </div>
                <div class="name">
                  <md-field class="md-layout-item md-size-50 mx-auto title" v-if="usernameEditable">
                    <md-input
                      class="usernameInput"
                      v-model="username"
                      type="text"
                      aria-required="username"
                      required
                    ></md-input>
                    <div class="mdIcon-bar" @click="saveUsername">
                      <md-icon>
                        check
                      </md-icon>
                    </div>
                    <div class="mdIcon-bar" @click="cancelUsername">
                      <md-icon>
                        close
                      </md-icon>
                    </div>
                  </md-field>
                
                  <h3 class="title" v-if="!usernameEditable">{{username}} <span @click="editUsername"><md-icon>edit</md-icon></span></h3>
                </div>
              </div>
            </div>
          </div>
          <div class="profile-tabs">
            <tabs
              :tab-name="['Profile', 'Collection', 'MyContent']"
              :tab-icon="['manage_accounts', 'palette', 'shopping_bag']"
              plain
              nav-pills-icons
              color-button="success"
            >
              <!-- here you can add your content for tab-content -->
              <template slot="tab-pane-1">
                <div class="md-layout">
                  <div class="md-layout-item md-layout md-layout-nowrap md-gutter md-size-25 ml-auto">
                    <md-icon class="myMR-5">face</md-icon>
                    <md-field>
                      <label>First Name...</label>
                      <md-input
                        v-model="userProfile.firstname"
                        type="text"
                        aria-required="username"
                        required
                        :readonly="!editable"
                      ></md-input>
                    </md-field>
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <md-field>
                      <label class="title">Last Name...</label>
                      <md-input
                        v-model="userProfile.lastname"
                        type="text"
                        aria-required="username"
                        required
                        :readonly="!editable"
                      ></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-layout md-layout-nowrap md-gutter md-size-50 ml-auto mr-auto">
                    <md-icon class="myMR-5">email</md-icon>
                    <md-field>
                      <label>Email</label>
                      <md-input v-model="userProfile.email" type="email" :readonly="!editable" required></md-input>
                    </md-field>
                  </div>
                </div>
                <div class="md-layout">
                  <div class="md-layout-item md-layout md-layout-nowrap md-gutter md-alignment-center-right md-size-50 ml-auto mr-auto">
                    <md-button class="myMR-5 md-warning" @click="onEditable" v-if="!editable">Edit</md-button>
                    <md-button class="myMR-5" @click="onCancelEdit" v-if="editable">cancel</md-button>
                    <md-button class="myMR-5 md-primary" @click="updateProfileDetails" v-if="editable">submit</md-button>
                  </div>
                </div>
              </template>
              <template slot="tab-pane-2">
                <div class="md-layout  md-gutter md-alignment-center">
                  <div
                    class="md-layout-item md-size-25 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                    v-for='index in 9' :key='index'
                  >
                    <md-card>
                      <md-card-media-cover>
                        <md-card-media md-ratio="1:1">
                          <img
                            src="https://lh3.googleusercontent.com/RZ9t1F2tmKCcuyJxcUj111ORWrvz1fwEkglzGSgBaTCF0iac0HGa1EMq5Ts8wxJg9NVAyUGW3ZT9Mgg2btmeLOXNNA29eFsoOcvl=s288"
                            alt="nftToken"
                          />
                        </md-card-media>
                        <md-card-area>
                          <md-card-header>
                            <span class="md-title">Without text background {{index}}</span>
                            <span class="md-subhead">I bet you can't read this</span>
                          </md-card-header>

                        </md-card-area>
                      </md-card-media-cover>
                    </md-card>
                  </div>
                
                </div>
              </template>
              <template slot="tab-pane-3">
                <div class="md-layout">
                  <div class="md-layout-item md-size-25 ml-auto">
                    <img :src="tabPane3[0].image" class="rounded" />
                    <img :src="tabPane3[1].image" class="rounded" />
                  </div>
                  <div class="md-layout-item md-size-25 mr-auto">
                    <img :src="tabPane3[2].image" class="rounded" />
                    <img :src="tabPane3[3].image" class="rounded" />
                    <img :src="tabPane3[4].image" class="rounded" />
                  </div>
                </div>
              </template>
            </tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { Tabs } from "@/components";
export default {
  components: {
    Tabs
  },
  bodyClass: "profile-page",
  data() {
    return {
      tabPane1: [
        { image: require("@/assets/img/examples/studio-1.jpg") },
        { image: require("@/assets/img/examples/studio-2.jpg") },
        { image: require("@/assets/img/examples/studio-4.jpg") },
        { image: require("@/assets/img/examples/studio-5.jpg") }
      ],
      tabPane2: [
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/cynthia-del-rio.jpg") },
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/clem-onojegaw.jpg") }
      ],
      tabPane3: [
        { image: require("@/assets/img/examples/mariya-georgieva.jpg") },
        { image: require("@/assets/img/examples/studio-3.jpg") },
        { image: require("@/assets/img/examples/clem-onojeghuo.jpg") },
        { image: require("@/assets/img/examples/olu-eletu.jpg") },
        { image: require("@/assets/img/examples/studio-1.jpg") }
      ],
      editable: false,
      username: '',
      usernameEditable: false,
      userProfile: {
        firstname: '',
        lastname: '',
        email: '',
      }
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/city-profile.jpg")
    },
    img: {
      type: String,
      default: require("@/assets/img/default/profile.jpg")
    }
  },
  computed: {
    ...mapGetters([
      'profile',
    ]),
    getprofileImg() {
      if (this.profile.avata) {
        return this.profile.avata;
      } else {
        return this.img;
      }
    },
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  mounted() {
    if (this.profile) {
      this.username = this.profile.username;
      this.userProfile.firstname = this.profile.firstname;
      this.userProfile.lastname = this.profile.lastname;
      this.userProfile.email = this.profile.email;
    }
  },
  methods: {
    ...mapActions([
      'updateProfileImage',
      'updateProfileData',
      'logout'
    ]),
    uploadAvata() {
      this.$refs.avatafile.click()
    },
    onAvatapicker() {
      console.log('www');
      let self = this
      const tmp_files = this.$refs.avatafile.files
      console.log(tmp_files)
      var reader = new FileReader();
      reader.onload = function(e){
        var uril = e.target.result
        console.log(uril);
        self.updateProfileImage(uril).then((res) => {
          console.log(res);
          self.$root.$emit('emitProfileImage');
        }).catch((err) => {
          self.logout().then((res) => {
            location.reload();
          })
        })
        self.$refs.profileImg.src = uril
      }
      reader.readAsDataURL(tmp_files[0])
    },
    editUsername(){
      this.usernameEditable = true;
    },
    cancelUsername() {
      this.username = this.profile.username;
      this.usernameEditable = false;
    },
    saveUsername() {
      this.updateProfileDetails();
    },
    onEditable() {
      this.editable = true;
    },
    onCancelEdit() {
      this.editable = false;
      if (this.profile) {
        this.userProfile.firstname = this.profile.firstname;
        this.userProfile.lastname = this.profile.lastname;
        this.userProfile.email = this.profile.email;
      }
    },
    updateProfileDetails() {
      const profileDetails = {
        email: this.userProfile.email,
        firstname: this.userProfile.firstname,
        lastname: this.userProfile.lastname,
        username: this.username,
      }
      let self = this;
      this.updateProfileData(profileDetails).then((res) => {
        console.log(res);
        self.editable = false;
        self.usernameEditable = false;
        self.$root.$emit('emitUsername');
        console.log(this.profile);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  padding: 0;
}
.Grey-50{
  color: #f7f7ff !important;
}
.avatar{
  height: 160px;
}
.usernameInput{
  width: 100% !important;
  text-align: center;
  min-height: 32px !important;
  line-height: 1.4em !important;
  font-weight: 700 !important;
  font-family: "Roboto Slab", "Times New Roman", serif !important;
}
.mdIcon-bar{
  display: flex;
}
.circleBar{
  position: absolute;
  top: -80px;
  margin: auto;
  width: 160px;
  max-width: 160px;
  height: 160px;
  border-radius: 50%;
  background: rgba(240, 240, 240, 0);
  overflow: hidden;
  left: calc(50% - 80px);
}
.uploadAction {
  background: rgba(61, 61, 61, 0.575);
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 25%;
  align-content: center;
  justify-content: center;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;;
}
.myMR-5 {
  margin-right: 5px !important;
}
.hidden{
  display: none;
}
.profile-tabs::v-deep {
  .md-card-tabs .md-list {
    justify-content: center;
  }

  [class*="tab-pane-"] {
    margin-top: 3.213rem;
    padding-bottom: 50px;

    img {
      margin-bottom: 2.142rem;
    }
  }
}
</style>
