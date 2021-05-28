<template>
  <g-link
    :to="node.path"
    class="
      shadow-2xl
      rounded
      bg-white
      p-4
      md:p-5
      lg:p-6
      xl:p-8
      transform transform-gpu
      transition-transform
      lg:hover:scale-110
    "
  >
    <h2 class="font-semibold text-xl mb-3 leading-5">
      {{ node.title }}
    </h2>
    <p class="my-2 text-gray-500">{{ node.description }}</p>
    <p class="mt-4"><api-status :status="node.status" /></p>
  </g-link>
</template>

<script>
import ApiStatus from "@/components/ApiStatus";
export default {
  components: {
    ApiStatus,
  },
  props: ["node"],
};
</script>
