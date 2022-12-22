<template>
  <div class="not-found page-wrap d-flex flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <span class="display-1 d-block">404</span>
          <div class="mb-4 lead">
            The page you are looking for was not found.
          </div>
          <router-link to="/" class="text-blue-500" style="cursor: pointer">
            Ir a Home</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: "NotFoundView",
};
</script>
<style scoped>
.not-found {
  height: 100vh;
  display: flex;
  justify-content: center;
}
</style>
