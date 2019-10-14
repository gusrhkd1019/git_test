<template>
  <div>
    <talk-form />
    <chat-service />
  </div>
</template>

<script>
  import TalkForm from '~/components/TalkForm';
  import ChatService from '~/components/ChatService';

  export default {
    components: {
      TalkForm, ChatService
    },
    mounted() {
      if(this.$store.state.page.scroll) {
        window.scrollTo(this.$store.state.page.scroll.x, this.$store.state.page.scroll.y);
      }
    }
  } 
</script>