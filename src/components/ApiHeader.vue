<template>
  <header
    class="bg-gradient-to-b from-white to-gray-100 my-8 md:my-12 lg:my-16"
  >
    <div class="px-6 mx-auto max-w-7xl">
      <h1 class="text-4xl font-bold mb-4">{{ apiMeta.title }}</h1>
      <p class="my-4 text-gray-500">{{ apiMeta.description }}</p>
      <p class="my-4"><api-status :status="apiMeta.status" /></p>

      <nav class="flex mt-8 lg:mt-12">
        <tab-link :to="apiMeta.path" label="Overview" />
        <tab-link
          v-for="edge in pages"
          :key="edge.node.id"
          :to="edge.node.path"
          :label="edge.node.title"
        />
        <tab-link
          v-if="apiMeta.reference"
          :to="`${apiMeta.path}/reference`"
          label="API Reference"
        />
      </nav>
    </div>
  </header>
</template>

<script>
import ApiStatus from "@/components/ApiStatus";
import TabLink from "@/components/TabLink";

export default {
  components: {
    ApiStatus,
    TabLink,
  },
  props: ["apiMeta", "pages"],
};
</script>
