<template>
  <div class="home">
    <!--    <img alt="Vue logo" src="../assets/logo.png" />-->
    <Login msg="Login" />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/Login.vue";

export default {
  name: "LoginView",
  components: {
    Login,
  },
};
</script>
