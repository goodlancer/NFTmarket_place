<template>
  <div class="wrapper login-wrapper">
    <div class="section page-header header-filter" :style="headerStyle">
      <div class="container">
        <div class="md-layout">
          <div
            class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
          >
            <login-card header-color="green">
              <h4 slot="title" class="card-title">Regist</h4>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>First Name ...</label>
                <md-input
                  v-model="firstname"
                  type="text"
                  aria-required="firstname"
                  required
                ></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>face</md-icon>
                <label>Last Name ...</label>
                <md-input
                  v-model="lastname"
                  type="text"
                  aria-required="lastname"
                  required
                ></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>account_circle</md-icon>
                <label>User Name ...</label>
                <md-input
                  v-model="username"
                  type="text"
                  aria-required="username"
                  required
                ></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>email</md-icon>
                <label>Email...</label>
                <md-input
                  v-model="email"
                  type="email"
                  aria-required="email"
                  required
                ></md-input>
              </md-field>
              <md-field class="md-form-group" slot="inputs">
                <md-icon>lock_outline</md-icon>
                <label>Password...</label>
                <md-input type="password" v-model="password"></md-input>
              </md-field>
              <md-button slot="footer" class="md-round md-success md-lg">
                Get Started
              </md-button>
            </login-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";

export default {
  components: {
    LoginCard
  },
  bodyClass: "register-page",
  data() {
    return {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
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
  }
};
</script>

<style lang="css">
.login-wrapper {
  height: 100vh;
}
</style>
