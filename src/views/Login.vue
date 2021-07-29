<template>
  <div class="wrapper login-wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Login</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>username...</label>
                <md-input
                  v-model="username"
                  type="text"
                  aria-required="username"
                  required
                ></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input type="password" v-model="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-round md-success md-lg" @click="signin">
                Login
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "login-page",
  data() {
    return {
      firstname: null,
      username: '',
      password: ''
    };
  },
  props: {
    header: {
      type: String,
      default: require("@/assets/img/profile_city.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.header})`
      };
    }
  },
  methods: {
    ...mapActions([
      'login',
    ]),
    signin(){
      alert('this is signing');
      const signData = {
        username: this.username,
        password: this.password,
      }
      this.login(signData).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      })
    }
  }
};
</script>

<style lang="css">
.login-wrapper {
  height: 100vh;
}
</style>
