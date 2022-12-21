<template>
  <div class="home">
    <div>
      <h3 class="text-start">{{ title }}</h3>
      <div class="my-3">
        <label for="formFile" class="form-label"
          >Carga de informarción en formato [.xls, .xlsx]</label
        >
        <input
          class="form-control"
          type="file"
          id="formFile"
          accept=".xls, .xlsx"
        />
      </div>
      <div class="mb-3 text-muted">
        <a href="" class="fs-6 text-reset">Descargar Plantilla</a>
      </div>
      <button type="submit" class="btn btn-primary">Procesar</button>
      <hr class="bg-black border-2 border-top border-dark" />
      <div class="alert alert-success text-start" role="alert">
        Se procesó el archivo correctamente.
      </div>
      <div class="alert alert-danger text-start" role="alert">
        No se procesaron estos productos
        <a href="" class="fs-6 text-reset">descargar logs.</a>
      </div>
    </div>
    <!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
  </div>
</template>

<script>
export default {
  name: "ManagementComponent",
  props: {
    title: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
