<template>
  <div>
    <div class="px-6 mx-auto max-w-7xl">
      <page-header />
    </div>

    <slot />

    <div class="px-6 mx-auto max-w-7xl">
      <page-footer />
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";
export default {
  components: {
    PageHeader,
    PageFooter,
  },
};
</script>
