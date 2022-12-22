<template>
  <div
    class="page d-flex justify-content-center align-items-center h-100 p-3 p-md-5"
  >
    <main class="form-signin w-100 m-auto">
      <form>
        <div class="row mb-5">
          <h1 class="h3 mb-3 fw-normal">Gestión de Catálago</h1>
        </div>
        <div class="container text-center">
          <div class="row">
            <div
              class="col-12 col-md-9 d-flex justify-content-center align-items-center"
            >
              <div class="w-100">
                <div class="row mb-3">
                  <label
                    for="inputEmail3"
                    class="col-sm-3 col-form-label text-start"
                    >Usuario</label
                  >
                  <div class="col-sm-9">
                    <input
                      v-model="user"
                      type="email"
                      class="form-control"
                      id="inputEmail3"
                    />
                  </div>
                </div>
                <div class="row">
                  <label
                    for="inputPassword3"
                    class="col-sm-3 col-form-label text-start"
                    >Password</label
                  >
                  <div class="col-sm-9">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      id="inputPassword3"
                    />
                  </div>
                </div>
                <div
                  v-show="submit && response !== 200"
                  class="text-danger text-center"
                >
                  Credenciales incorrectas.
                </div>
              </div>
            </div>
            <div class="col-12 col-md-3">
              <div class="mt-4">
                <button type="submit" class="btn btn-primary" @click="login">
                  Ingresar
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";

export default {
  name: "LoginComponent",
  props: {
    msg: String,
  },
  data() {
    return {
      authService: null,
      user: "admin@ememsa.com",
      password: "123456",
      response: null,
      submit: null,
    };
  },
  created() {
    this.authService = new AuthService();
  },
  methods: {
    login() {
      let payload = {
        user: this.user,
        password: this.password,
      };
      this.submit = true;
      this.authService.login(payload).then((res) => {
        this.response = res ? 200 : 400;
        if (res) {
          localStorage.setItem("token", "1234");
          this.$router.push({ name: "home" });
          this.submit = false;
        }
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
.page {
  height: 100vh !important;
}

.form-signin {
  max-width: 680px;
  padding: 100px 20px;
  border-radius: 10px;
  background: radial-gradient(
    circle at 18.7% 37.8%,
    rgb(250, 250, 250) 0%,
    rgb(225, 234, 238) 90%
  );
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
