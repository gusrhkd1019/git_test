<template>
  <div>
    <field-weather />
  </div>
</template>

<script>
  import FieldWeather from '~/components/FieldWeather';

  export default {
    components: {
      FieldWeather
    },
    mounted() {
      if(this.$store.state.page.scroll) {
        window.scrollTo(this.$store.state.page.scroll.x, this.$store.state.page.scroll.y);
      }
    },
  } 
</script>