<template>
  <Layout>
    <api-header :api-meta="$page.apiRoot" :pages="$page.pages.edges" />
    <div class="px-6 mx-auto max-w-7xl">
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
    
    apiRoot: apiRoot (id: $api) {
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
import Layout from "@/layouts/Landing";
import ApiHeader from "@/components/ApiHeader";

export default {
  components: {
    Layout,
    ApiHeader,
  },
  metaInfo() {
    return {
      title: `${this.$page.apiRoot.title} / ${this.$page.page.title}`,
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
