<template>
  <div>
    <sign-in v-if="!logOn" />
    <sign-up v-else />
  </div>
</template>

<script>
  import SignIn from '~/components/SignIn';
  import SignUp from '~/components/SignUp';

  export default {
    components: {
      SignIn, SignUp
    },
    created() {
      console.log('created')
    },
    mounted() {
      if(this.$store.state.page.scroll) {
        window.scrollTo(this.$store.state.page.scroll.x, this.$store.state.page.scroll.y);
      }
      console.log('mounted')
    },
    destroyed() {
      this.$store.dispatch('page/logOn', false)
      console.log('destoryed')
    },    
    computed: {
      logOn() {
        return this.$store.state.page.logOn;
      }
    },
    methods:  {

    },
  } 
</script>