<template>
  <Layout>
    <div>
      <api-header :api-meta="$page.root" :pages="$page.pages.edges" />
      <swagger :spec-path="`/references/${$page.root.reference}`" />
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
import ApiHeader from "@/components/ApiHeader";
import Swagger from "@/components/Swagger";
export default {
  components: {
    ApiHeader,
    Swagger,
  },
};
</script>
