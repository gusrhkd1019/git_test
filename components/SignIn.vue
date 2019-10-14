<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
            <v-container class="text-center display-1 font-weight-black black--text darken-2">Welcome Back</v-container>
            <span class="black--text">Email Adress</span>
            <v-text-field class="mb-2" v-model="email" :rules="emailRules" label="Email Adress" outlined hide-details></v-text-field>
            <span class="black--text">Password</span>
            <v-text-field class="mb-2" v-model="password" :rules="passwordRules" label="Password" outlined hide-details></v-text-field>
            <v-btn block color="primary" @click="onSubmitForm">Log in</v-btn>
            <v-btn color="success" block @click="signUp">Register Account</v-btn>
          </v-form>
          <v-btn block color="secondary" @click="login">외부 로그인</v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="https://kirei-image.s3.ap-northeast-2.amazonaws.com/1.jpg" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    components: {
    },
    head: {
      script: [
      ]
    },
    data() {
      return {
        valid: false,
        email: '',
        password: '',
        emailRules: [
          v => !!v || '이메일은 필수입니다.',
          v => /.@.+/.test(v) || '이메일이 유효하지 않습니다.'
        ],
        passwordRules: [
          v => !!v || '비밀번호는 필수입니다.'
        ],        
      }
    },
    mounted() {
    },    
    methods: {
      login() {
        window.open(window.location.origin + '/auth/login', "", "width=600, height=600, left=350, top=120")
      },
      onSubmitForm() {
        if(this.$refs.form.validate()) {
          // actions 사용.
          this.$store.dispatch('users/logIn', {
            email: this.email,
            password: this.password,
          })
            // 동기식 방식 then ~ catch 구조
            .then(() => {
              this.$router.push({
                path: '/field',
              });
            })
            .catch(() => {
              alert('회원가입 실패');
            });
        }
      },
      signUp() {
        this.$store.dispatch('page/logOn', true)
      },      
    }
  }
</script>

<style scoped>
</style>