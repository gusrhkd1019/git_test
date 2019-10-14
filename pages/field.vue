<template>
  <div>
    <field-select />
  </div>
</template>

<script>
  import FieldSelect from '~/components/FieldSelect';

  export default {
    components: {
      FieldSelect
    },
    computed: {
      me() {
        return this.$store.state.users.me;
      },
    },
    methods: {
      ang() {

      }
    },
    mounted() {
      if(this.$store.state.page.scroll) {
        window.scrollTo(this.$store.state.page.scroll.x, this.$store.state.page.scroll.y);
      }
    },    
    middleware: 'field',
  }
</script>