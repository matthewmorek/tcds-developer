<template>
  <Layout>
    <h1
      class="
        text-2xl
        sm:text-3xl
        md:text-4xl
        lg:text-5xl
        font-bold
        my-8
        lg:my-16
        text-center
      "
    >
      API Services
    </h1>
    <div
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        xl:gap-8
        my-8
        lg:my-16
      "
    >
      <api-card
        v-for="edge in $page.apis.edges"
        :key="edge.node.id"
        :node="edge.node"
      />
    </div>
    <get-started />
  </Layout>
</template>

<page-query>
query {
  apis: allApiRoot {
    edges {
      node {
        id
        path
        title
        status
        description
      }
    }
  }
}
</page-query>

<script>
import ApiStatus from "@/components/ApiStatus";
import GetStarted from "@/components/GetStarted";
import ApiCard from "@/components/ApiCard";

export default {
  components: {
    ApiStatus,
    GetStarted,
    ApiCard,
  },
  metaInfo: {
    title: "API Services",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Discover APIs that enable access to data and services of Toyota Connected vehicles.",
      },
    ],
  },
};
</script>
