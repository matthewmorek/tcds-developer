<template>
  <header
    class="flex justify-between items-center my-4 md:my-8 lg:mb-16 xl:mb-24"
  >
    <g-link class="mr-2 flex-shrink-0" to="/"
      ><g-image
        src="~/assets/images/siteLogo.svg"
        :alt="$static.metadata.siteName"
        width="166"
    /></g-link>

    <nav class="flex flex-wrap font-semibold text-gray-500 items-center">
      <g-link class="mx-2 hover:text-gray-900" to="/api">API Services</g-link>
      <g-link
        class="
          rounded-full
          py-2
          px-4
          ml-2
          border
          hover:border-gray-600
          hover:text-gray-900
        "
        to="/support"
        >Support</g-link
      >
    </nav>
  </header>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
