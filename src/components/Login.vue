<template>
  <div class="page d-flex justify-content-center align-items-center h-100">
    <main class="form-signin w-100 m-auto">
      <form>
        <div class="row mb-5">
          <h1 class="h3 mb-3 fw-normal">Gestión de Catálago</h1>
        </div>
        <div class="container text-center">
          <div class="row">
            <div class="col-9 d-flex justify-content-center align-items-center">
              <div class="w-100">
                <div class="row mb-3">
                  <label
                    for="inputEmail3"
                    class="col-sm-3 col-form-label text-start"
                    >Usuario</label
                  >
                  <div class="col-sm-9">
                    <input type="email" class="form-control" id="inputEmail3" />
                  </div>
                </div>
                <div class="row mb-3">
                  <label
                    for="inputPassword3"
                    class="col-sm-3 col-form-label text-start"
                    >Password</label
                  >
                  <div class="col-sm-9">
                    <input
                      type="password"
                      class="form-control"
                      id="inputPassword3"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-3">
              <div class="mt-4">
                <button type="submit" class="btn btn-primary">Ingresar</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
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
  background-color: #f5f5f5;
}
.page {
  height: 100vh !important;
}

.form-signin {
  max-width: 600px;
  padding: 15px;
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
