<template>
  <Management
    title="Gestión Cantidad Vendida"
    service-name="SalesQuantityManagementService"
  ></Management>
</template>
<script>
// @ is an alias to /src
import Management from "@/components/Management";

export default {
  name: "SalesQuantityManagementView",
  components: {
    Management,
  },
};
</script>
