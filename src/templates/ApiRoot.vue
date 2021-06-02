<template>
  <Layout>
    <div>
      <api-header :api-meta="$page.api" :pages="$page.pages.edges" />
      <div v-html="$page.api.content" class="my-8 prose max-w-3xl"></div>
    </div>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  api: apiRoot(id: $id) {
    id
    path
    title
    description
    status
    content
    reference
  }
  
  pages: allApiPage(filter: { api: { eq: $id }}, sortBy: "title", order: ASC) {
    totalCount
    edges {
      node {
        title
        path
      }
    }
  },
}
</page-query>

<script>
import ApiHeader from "@/components/ApiHeader";
export default {
  components: {
    ApiHeader,
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
