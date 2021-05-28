<template>
  <span
    class="
      inline-flex
      rounded
      text-white text-xs
      font-medium
      uppercase
      tracking-wide
      leading-4
      px-2
      py-1
    "
    :class="statusClass"
  >
    {{ status }}
  </span>
</template>

<script>
export default {
  props: ["status"],
  computed: {
    statusClass: function () {
      switch (this.status) {
        case "live":
          return "bg-green-600";
        case "beta":
          return "bg-yellow-600";
        case "proposed":
          return "bg-gray-500";
      }
    },
  },
};
</script>
