<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <v-img src="https://kirei-image.s3.ap-northeast-2.amazonaws.com/register.jpg" />
        </v-col>
        <v-col cols="12" md="6">
          <v-card>
            <v-subheader>Sign Up</v-subheader>
            <v-container>
              <v-form ref="form" v-model="valid" @submit.prevent="onSubmitForm">
                <v-text-field v-model="email" label="Email" type="email" :rules="emailRules" required />
                <v-text-field v-model="password" label="Password" type="password" :rules="passwordRules" required />
                <v-text-field v-model="passwordCheck" label="Confirm Password" type="password" :rules="passwordCheckRules" required />
                <v-text-field v-model="name" label="Name" type="name" :rules="nameRules" required />
                <v-checkbox v-model="terms" label="종호 말을 잘 들을 것을 약속합니다." :rules="[v => !!v || '약관에 동의해야 합니다.']" required />
                <v-btn color="green" type="submit">Register</v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        valid: false,
        email: '',
        password: '',
        passwordCheck: '',
        name: '',
        nickname: '',
        terms: false,
        emailRules: [
          v => !!v || '이메일은 필수입니다.',
          v => /.+@+/.test(v) || '이메일이 유효하지 않습니다.'
        ],
        nameRules: [
          v => !!v || '이름은 필수입니다.',
        ],        
        passwordRules: [
          v => !!v || '비밀번호 확인은 필수입니다.',
        ],
        passwordCheckRules: [
          v => !!v || '비밀번호 확인은 필수입니다.',
          v => v === this.password || '비밀번호가 일치하지 않습니다.',
        ],
      }
    },
    methods: {
      onSubmitForm() {
        if(this.$refs.form.validate()) {
          this.$store.dispatch('users/signUp', {
            email: this.email,
            password: this.password,
            name: this.name,
          })
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
    },
  }
</script>