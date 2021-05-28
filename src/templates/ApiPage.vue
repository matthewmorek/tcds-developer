<template>
  <Layout>
    <div>
      <api-header :api-meta="$page.root" :pages="$page.pages.edges" />
      <div v-html="$page.page.content" class="prose"></div>
    </div>
  </Layout>
</template>

<page-query>
  query ApiPage ($id: ID!, $api: ID!) {
    page: apiPage (id: $id) {
      id
      title
      description
      content
    }
    
    root: apiRoot (id: $api) {
      id
      path
      title
      description
      status
      reference  
    }
    
    pages: allApiPage(filter: { api: { eq: $api }}, sortBy: "title", order: ASC) {
      totalCount
      edges {
        node {
          title
          path
        }
      }
    }
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
