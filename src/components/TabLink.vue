<template>
  <g-link
    class="
      group
      flex
      items-center
      px-5
      py-3
      text-base
      font-semibold
      text-gray-600
      rounded-t-sm
      hover:text-black
      hover:bg-white
    "
    :to="to"
    active-class="text-black bg-white"
    exact-path
  >
    <span class="truncate">{{ label }}</span>
  </g-link>
</template>

<script>
export default {
  props: ["to", "label"],
};
</script>
