<template>
  <Layout>
    <header
      class="bg-gradient-to-b from-white to-gray-100 my-8 md:my-12 lg:my-16"
    >
      <div class="px-6 pb-6 mx-auto max-w-7xl">
        <h2 class="text-4xl font-bold mb-4">{{ $page.page.title }}</h2>
        <p class="my-4 text-gray-500">{{ $page.page.description }}</p>
      </div>
    </header>
    <div class="px-6 mx-auto max-w-7xl">
      <div v-html="$page.page.content" class="prose"></div>
    </div>
  </Layout>
</template>

<page-query>
  query ($id: ID!) {
    page: contentPage (id: $id) {
      id
      title
      description
      content
    }
  }
</page-query>

<script>
import Layout from "@/layouts/Landing";

export default {
  components: {
    Layout,
  },
  metaInfo() {
    return {
      title: this.$page.page.title,
    };
  },
};
</script>

<style lang="postcss">
code[class*="language-"],
pre[class*="language-"] {
  @apply font-mono;
  @apply text-sm;
}
</style>
