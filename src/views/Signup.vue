<template>
  <div class="fill-height" :style="backgroundStyle">
    <v-container class="fill-height">
      <v-row justify="center" align="center">
        <v-col class="ma-auto" cols="4">
          <v-form v-model="signupvalid" ref="signupform">
            <v-card class="pa-10 deep-purple darken-4  white--text" outlined elevation="24">
              <v-row>
                <v-col class="mb-4" cols="12">
                  <h1>Create New</h1>
                  <h2>Welcome to Website</h2>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-row class="mx-0 mb-1">
                    <v-text-field
                      label="First Name"
                      solo
                      :rules="[rules.required]"
                      type="text"
                      v-model="signupformData.firstname"
                      name="firstname"
                      class="mr-3"
                    />
                    <v-text-field
                      label="Full Name"
                      solo
                      :rules="[rules.required]"
                      type="text"
                      v-model="signupformData.lastname"
                      name="lastname"
                    />
                  </v-row>
                  <v-text-field
                      label="Username"
                      solo
                      :rules="[rules.required]"
                      type="text"
                      v-model="signupformData.username"
                      name="username"
                    />
                  <v-text-field
                    label="Email"
                    solo
                    :rules="emailRules"
                    type="email"
                    name="email"
                    v-model="signupformData.email"
                  />
                   <v-text-field
                    label="Password"
                    solo
                    v-model="signupformData.password"
                    :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[passwordrules.required, passwordrules.min]"
                    :type="passwordShow ? 'text' : 'password'"
                    name="password"
                    hint="At least 8 characters"
                    counter
                    @click:append="passwordShow = !passwordShow"
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn
                    :disabled="!signupvalid"
                    block
                    elevation="25"
                    color="pink"
                    @click="signupSubmit"
                  >
                    Sign Up
                  </v-btn>
                </v-col>
              </v-row>
            </v-card>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: {
    background: {
      type: String,
      default: require("@/assets/img/bgheroM.jpg")
    }
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundSize: '100% 100%',
        backgroundImage: `url(${this.background})`
      };
    }
  },
  data: () => ({
    signupvalid: true,
    signupformData: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      password: '',
    },
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    rules: {
        required: value => !!value || 'Required.',
      },
    passwordShow: false,
    passwordrules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
        },
  }),
  methods: {
    ...mapActions([
      'signup',
    ]),
    signupSubmit() {
      let self = this;
      if(this.$refs.signupform.validate()){
        console.log(this.signupformData);
        this.signup(this.signupformData).then((res) => {
          console.log(res);
          self.$router.push('/login');
        })
      }
    }
  }
}
</script>
