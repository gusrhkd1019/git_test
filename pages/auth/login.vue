<template>
  <div id="firebaseui-auth-container">
  </div>
</template>

<script>
  import firebase from 'firebase';
  import * as firebaseui from 'firebaseui';

  export default {
    layout: 'blank',
    head: {
      link: [
        { type:"text/css", rel:"stylesheet", href:"https://cdn.firebase.com/libs/firebaseui/4.2.0/firebaseui.css" }
      ]
    },
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
      var uiConfig = {
        signInSuccessUrl: window.location.origin + '/auth/callbackRedirect',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID,
          firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
        ],
        tosUrl: window.location.origin + '/auth/term',
        privacyPolicyUrl: window.location.origin + '/auth/policy'
      };

      var ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start('#firebaseui-auth-container', uiConfig);
    },
  }
</script>