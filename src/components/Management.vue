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
        <a
          class="fs-6 text-reset"
          @click="downloadTemplateExcel"
          style="cursor: pointer"
          >Descargar Plantilla</a
        >
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
import ImageManagementService from "@/services/ImageManagementService";
import StockManagementService from "@/services/StockManagementService";
import PriceManagementService from "@/services/PriceManagementService";
import SalesQuantityManagementService from "@/services/SalesQuantityManagementService";

export default {
  name: "ManagementComponent",
  data() {
    return {
      service: null,
    };
  },
  props: {
    title: String,
    serviceName: String,
  },
  methods: {
    downloadTemplateExcel() {
      this.service = this.initService(this.serviceName);
      if (this.service) {
        console.log(this.service.downloadTemplateExcel());
      }
    },
    initService(nameService) {
      switch (nameService) {
        case "ImageManagementService":
          return new ImageManagementService();
        case "StockManagementService":
          return new StockManagementService();
        case "PriceManagementService":
          return new PriceManagementService();
        case "SalesQuantityManagementService":
          return new SalesQuantityManagementService();
        default:
          return false;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
