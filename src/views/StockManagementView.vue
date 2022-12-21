<template>
  <Management
    title="Gestión Stock"
    service-name="StockManagementService"
  ></Management>
</template>
<script>
// @ is an alias to /src
import Management from "@/components/Management";

export default {
  name: "StockManagementView",
  components: {
    Management,
  },
};
</script>
