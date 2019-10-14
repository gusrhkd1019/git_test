<template>
  <v-app>
    <v-card>
      <v-app-bar fixed color="#ff6d65" dark shrink-on-scroll fade-img-on-scroll prominent src="https://kirei-image.s3.ap-northeast-2.amazonaws.com/1.jpg">
        <v-icon class="mt-2 mr-1" size="30" @click="onRoute('map')">mdi-map-marker-outline</v-icon>
        <v-toolbar-title class="mb-3" style="width: 100%; text-align: center;">야규와구</v-toolbar-title>
        <div class="flex-grow-1"></div>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <template v-slot:extension>
          <v-tabs background-color="transparent" v-model="model" centered icons-and-text fixed-tabs  height=45>
            <v-tab @click="onRoute('today')"><div class="font-weight-bold" style="color: black">오늘의 야규</div><v-icon color="#000000">mdi-fire</v-icon></v-tab>
            <v-tab @click="onRoute('realtime')"><div class="font-weight-bold" style="color: black">시즌정보</div><v-icon color="#000000">mdi-weather-cloudy</v-icon></v-tab>
            <v-tab @click="onRoute('menu')" v-if="user && baseball_field"><div class="font-weight-bold" style="color: black">주문하기</div><v-icon color="#000000">mdi-food</v-icon></v-tab>
            <v-tab @click="onRoute('field')" v-else><div class="font-weight-bold" style="color: black">구장 선택</div><v-icon color="#000000">mdi-baseball</v-icon></v-tab>            
            <v-tab @click="onRoute('talk')"><div class="font-weight-bold" style="color: black">Hot 실시간 대화</div><v-icon color="#000000">mdi-chat-processing</v-icon></v-tab>
            <v-tab @click="onRoute('member')"><div class="font-weight-bold" style="color: black">야구 같이 볼래?</div><v-icon color="#000000">mdi-apple-finder</v-icon></v-tab>
          </v-tabs>
        </template>
      </v-app-bar>
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <nuxt />
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <footer-view />
      <!-- <v-container style="height: 1200px;"></v-container> -->
    </v-card>
  </v-app>
</template>

<script>
  import FooterView from '~/components/FooterView';

  export default {
    components: {
      FooterView
    },
    head: {
      title: '와규와구',
    },
    created() {
      switch(this.$route.name) {
        case "today" :
          this.model = 0;
          break;
        case "realtime" :
          this.model = 1;
          break;
        case "sign" :
          this.model = 2;
          break;
        case "field" :
          this.model = 2;
          break;
        case "menu" :
          this.model = 2;
          break;
        case "talk" :
          this.model = 3;
          break;
        case "member" :
          this.model = 4;
          break;          
      }
    },
    data() {
      return {
        model: 2
      }
    },
    computed: {
      user() {
        return this.$store.state.users.user;
      },
      baseball_field() {
        return this.$store.state.users.baseball_field;
      }
    },
    methods: {
      onRoute(path) {
        this.$router.push({ path: '/' + path })
        this.$store.dispatch('page/loadScroll', {x: window.scrollX, y: window.scrollY});
      }
    },
  }
</script>