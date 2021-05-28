<template>
  <div class="rounded-lg bg-white bg-opacity-5 p-4 md:p-6 lg:p-8 xl:p-10">
    <div
      class="
        rounded-full
        border border-white border-opacity-50
        inline-flex
        w-12
        h-12
        justify-center
        items-center
        leading-normal
        font-semibold
      "
    >
      <slot name="counter" />
    </div>
    <h3 class="font-semibold text-xl mt-4 mb-2"><slot name="title" /></h3>
    <p class="text-gray-300">
      <slot name="description" />
    </p>
  </div>
</template>
