<template>
  <Layout>
    <div>
      <header class="my-8 lg:my-12 xl:my-14">
        <h2 class="text-4xl font-bold mb-4">{{ $page.page.title }}</h2>
        <p class="my-4 text-gray-500">{{ $page.page.description }}</p>
      </header>
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

<style lang="postcss">
code[class*="language-"],
pre[class*="language-"] {
  @apply font-mono;
  @apply text-sm;
}
</style>
