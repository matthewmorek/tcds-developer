<template>
  <ClientOnly>
    <div class="swagger" id="swagger"></div>
  </ClientOnly>
</template>

<script>
import "swagger-ui/dist/swagger-ui.css";
// import SwaggerUI from "!swagger-ui";

export default {
  name: "Swagger",
  props: ["specPath"],
  mounted() {
    // const spec = require(this.specPath);
    window.SwaggerUI = require("swagger-ui");

    SwaggerUI({
      url: this.specPath,
      dom_id: "swagger",
    });
  },
};
</script>

<style lang="postcss">
.swagger-ui {
  @apply font-sans;
}
</style>
