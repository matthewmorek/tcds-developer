<template>
  <div class="swagger" id="swagger"></div>
</template>

<script>
import SwaggerUI from "swagger-ui";
import "swagger-ui/dist/swagger-ui.css";

export default {
  name: "Swagger",
  props: ["specPath"],
  mounted() {
    // const spec = require(this.specPath);
    SwaggerUI({
      url: this.specPath,
      dom_id: "#swagger",
    });
  },
};
</script>

<style lang="postcss">
.swagger-ui {
  @apply font-sans;
}
</style>
