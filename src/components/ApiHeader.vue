<template>
  <header class="my-8 md:my-12 lg:my-16 flex flex-shrink-0">
    <nav class="flex flex-col w-64">
      <div class="">
        <h3
          class="
            px-3
            text-xs
            font-semibold
            text-gray-500
            uppercase
            tracking-wider
          "
          id="projects-headline"
        >
          {{ apiMeta.title }}
        </h3>
        <div class="mt-1 space-y-1" aria-labelledby="projects-headline">
          <g-link
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900
              hover:bg-gray-50
            "
            :to="apiMeta.path"
            active-class="text-gray-900 bg-gray-50"
            exact
          >
            <span class="truncate"> Overview </span>
          </g-link>
          <g-link
            v-for="edge in pages"
            :key="edge.node.id"
            :to="edge.node.path"
            active-class="text-gray-900 bg-gray-50"
            exact-path
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900
              hover:bg-gray-50
            "
          >
            <span class="truncate">
              {{ edge.node.title }}
            </span>
          </g-link>
          <g-link
            class="
              group
              flex
              items-center
              px-3
              py-2
              text-sm
              font-medium
              text-gray-600
              rounded-md
              hover:text-gray-900
              hover:bg-gray-50
            "
            v-if="apiMeta.reference"
            :to="`${apiMeta.path}/reference`"
            active-class="text-gray-900 bg-gray-50"
            exact-path
          >
            <span class="truncate"> API Reference </span>
          </g-link>
        </div>
      </div>
    </nav>
    <div class="md:ml-4">
      <h1 class="text-4xl font-bold mb-4">{{ apiMeta.title }}</h1>
      <p class="my-4 text-gray-500">{{ apiMeta.description }}</p>
      <p class="my-4"><api-status :status="apiMeta.status" /></p>
    </div>
  </header>
</template>

<script>
import ApiStatus from "@/components/ApiStatus";
export default {
  components: {
    ApiStatus,
  },
  props: ["apiMeta", "pages"],
};
</script>
