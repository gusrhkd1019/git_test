<template>
  <div>
    <find-member />
  </div>
</template>

<script>
  import FindMember from '~/components/FindMember';

  export default {
    components: {
      FindMember
    },
    mounted() {
      if(this.$store.state.page.scroll) {
        window.scrollTo(this.$store.state.page.scroll.x, this.$store.state.page.scroll.y);
      }
    },
  } 
</script>