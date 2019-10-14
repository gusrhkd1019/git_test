<template>
  <div>
    구장 선택 페이지
    <v-btn @click="setBaseball">button</v-btn>
  </div>
</template>

<script>
  export default {
    methods: {
      setBaseball() {
        this.$store.dispatch('users/selectField', 'test_field');
        this.$router.push({
          path: '/menu'
        })
      }
    }
  }
</script>