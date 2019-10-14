<template>
  <div>
    <news-feeds />
  </div>
</template>

<script>
  import NewsFeeds from '~/components/NewsFeeds';

  export default {
    components: {
      NewsFeeds
    },
    mounted() {
      if(this.$store.state.page.scroll) {
        window.scrollTo(this.$store.state.page.scroll.x, this.$store.state.page.scroll.y);
      }
    },
  } 
</script>