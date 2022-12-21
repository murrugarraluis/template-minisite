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
      <button
        class="btn btn-primary"
        type="button"
        @click="process"
        :disabled="this.submit"
      >
        <span
          v-show="submit"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        {{ !this.submit ? "Procesar" : "Procesando..." }}
      </button>
      <hr class="bg-black border-2 border-top border-dark" />
      <div v-if="alerts.length > 0">
        <div
          v-for="(alert, index) in alerts"
          :key="index"
          class="alert text-start alert-dismissible fade show"
          :class="'alert-' + alert.type"
          role="alert"
        >
          {{
            alert.type === "success"
              ? "Se procesó el archivo correctamente."
              : "No se procesaron estos productos."
          }}
          <a v-show="alert.type === 'danger'" class="fs-6 text-reset"
            >descargar logs.</a
          >

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </div>
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
      statusCodeResponseProcess: null,
      submit: false,
      alerts: [],
    };
  },
  props: {
    title: String,
    serviceName: String,
  },
  methods: {
    process() {
      this.initService(this.serviceName);
      if (this.service) {
        this.submit = true;
        this.service.process().then((res) => {
          this.submit = false;
          this.alerts.unshift({ type: res ? "success" : "danger" });
        });
      }
    },

    downloadTemplateExcel() {
      this.initService(this.serviceName);
      if (this.service) {
        this.service.downloadTemplateExcel().then((res) => {
          console.log(res);
        });
      }
    },
    initService(nameService) {
      if (!this.service) {
        let service;
        switch (nameService) {
          case "ImageManagementService":
            service = new ImageManagementService();
            break;
          case "StockManagementService":
            service = new StockManagementService();
            break;
          case "PriceManagementService":
            service = new PriceManagementService();
            break;
          case "SalesQuantityManagementService":
            service = new SalesQuantityManagementService();
            break;
          default:
            service = false;
            break;
        }
        this.service = service;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
