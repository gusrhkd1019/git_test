<template>
  <div>
    <order-menu />
  </div>
</template>

<script>
  import OrderMenu from '~/components/OrderMenu'

  export default {
    components: {
      OrderMenu
    },
    mounted() {
      if(this.$store.state.page.scroll) {
        window.scrollTo(this.$store.state.page.scroll.x, this.$store.state.page.scroll.y);
        console.log('hi');
      }
    },    
    middleware: 'menu',
  }
</script>