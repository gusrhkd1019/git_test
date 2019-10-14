<template>
  <div>
    callbackRedirect
  </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    mounted() {
      var firebaseConfig = {
        apiKey: "AIzaSyA4oDOjfgkH0Drrmi9GnkCppAWzCsLl8Sc",
        authDomain: "yagyuwagu.firebaseapp.com",
        databaseURL: "https://yagyuwagu.firebaseio.com",
        projectId: "yagyuwagu",
        storageBucket: "yagyuwagu.appspot.com",
        messagingSenderId: "496882769897",
        appId: "1:496882769897:web:65b4867da277f348817578",
        measurementId: "G-6CVKHRENK5"
      };
      firebase.initializeApp(firebaseConfig);
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          user.getIdToken().then((accessToken) => {
            this.$store.dispatch('users/logIn', {
              displayName: user.displayName,
              email: user.email,
              emailVerified: user.emailVerified,
              photoURL: user.photoURL,
              uid: user.uid,
              phoneNumber: user.phoneNumber,
              providerData: user.providerData
            });
            this.$router.push({ path: '/field' })
          });
        } else {
          console.log('user is signed out');
        }
      }, (error) => {
        console.log(error);
      });
    }
  }
</script>