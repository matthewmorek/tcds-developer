<template>
  <Layout>
    <api-header :api-meta="$page.root" :pages="$page.pages.edges" />
    <div class="px-6 mx-auto max-w-7xl">
      <swagger :spec-path="`/references/${$page.root.reference}`"></swagger>
    </div>
  </Layout>
</template>

<page-query>
  query ApiRoot ($id: ID!) {
    root: apiRoot (id: $id) {
      id
      path
      title
      description
      status
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
    }
  }
</page-query>

<script>
import Layout from "@/layouts/Landing";
import ApiHeader from "@/components/ApiHeader";
import Swagger from "@/components/Swagger";

export default {
  components: {
    Layout,
    ApiHeader,
    Swagger,
  },
  metaInfo() {
    return {
      title: `${this.$page.root.title} / Reference`,
    };
  },
};
</script>
