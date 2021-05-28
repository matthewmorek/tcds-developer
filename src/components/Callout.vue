<template>
  <div class="bg-gray-900 text-white rounded-lg p-4 lg:p-8 shadow-xl">
    <h3 class="text-lg font-semibold mb-2">
      <slot name="title" />
    </h3>
    <p class="mb-4 text-gray-300">
      <slot name="description" />
    </p>
    <p class="font-semibold mt-4">
      <g-link :to="linkUrl" class="hover:underline"
        ><slot name="link" /> →</g-link
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ["linkUrl"],
};
</script>
