<template>
  <Layout>
    <div class="px-6 mx-auto max-w-7xl">
      <div class="my-12 md:my-16 lg:my-24 xl:mb-36">
        <g-image
          src="~/assets/images/homepage-splash.jpg"
          width="1460"
          class="
            hidden
            lg:block
            pl-32
            absolute
            left-0
            right-0
            top-auto
            z-0
            max-w-screen
            mx-auto
          "
        />
        <div class="relative z-1">
          <h1
            class="
              leading-tight
              text-4xl
              lg:text-6xl
              xl:text-7xl
              font-bold
              mb-4
              lg:my-8
              xl:my-12
              max-w-xl
              xl:max-w-2xl
            "
          >
            Develop data solutions to drive your fleet forward
          </h1>
          <p
            class="
              mb-4
              text-gray-500 text-lg
              md:text-xl
              leading-tight
              xl:text-2xl
              xl:leading-normal
              max-w-xl
              xl:max-w-2xl
            "
          >
            Tap into a wide range of first-party performance data that will
            enable you to run a more efficient fleet operation and ensure your
            drivers and vehicles stay safe.
          </p>
          <p class="my-4 lg:mt-8">
            <g-link
              class="
                shadow-lg
                inline-flex
                rounded-full
                bg-red-500
                hover:bg-red-600
                text-white
                font-semibold
                py-3
                px-4
              "
              to="/api"
              >Explore our APIs →</g-link
            >
          </p>
        </div>
      </div>
    </div>

    <div class="px-6 mx-auto max-w-7xl">
      <div class="my-12 md:my-16 lg:my-24">
        <div class="flex justify-between items-center">
          <h1
            class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4"
          >
            Featured APIs
          </h1>
          <div>
            <g-link
              class="
                shadow-lg
                inline-flex
                rounded-full
                bg-gray-900
                hover:bg-red-600
                text-white
                font-semibold
                py-3
                px-4
              "
              to="/api"
              >Browse all APIs →</g-link
            >
          </div>
        </div>
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            xl:gap-8
            my-8
          "
        >
          <api-card
            v-for="edge in $page.apis.edges"
            :key="edge.node.id"
            :node="edge.node"
          />
        </div>
      </div>
    </div>

    <div class="my-12 md:my-16 lg:my-24 bg-black text-white">
      <div class="p-6 lg:py-8 mx-auto max-w-7xl">
        <div class="flex justify-between items-center">
          <h1
            class="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl my-4"
          >
            How it works
          </h1>
          <div>
            <g-link
              class="
                inline-flex
                rounded-full
                border border-gray-500
                hover:border-gray-50
                text-white
                font-semibold
                py-3
                px-4
              "
              to="https://toyotadatasolutions.com/contact-sales"
              >Questions? Let's connect →</g-link
            >
          </div>
        </div>
        <div
          class="
            grid grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-6
            xl:gap-8
            my-8
          "
        >
          <counter-card>
            <template v-slot:counter>1</template>
            <template v-slot:title>Connect with us</template>
            <template v-slot:description
              >We’ll discuss your objectives, product preferences and answer any
              questions you have. An NDA may be required.</template
            >
          </counter-card>

          <counter-card>
            <template v-slot:counter>2</template>
            <template v-slot:title>Sign up and enroll</template>
            <template v-slot:description
              >Select your preferred subscription plan and start enrolling your
              vehicles into our services. Unenroll vehicles or cancel at any
              time.</template
            >
          </counter-card>

          <counter-card>
            <template v-slot:counter>3</template>
            <template v-slot:title>Start building</template>
            <template v-slot:description
              >Get access to the developer portal, connect to selected APIs and
              start integrating our vehicle data with your own
              solutions.</template
            >
          </counter-card>
        </div>
        <div class="max-w-2xl mx-auto lg:text-center my-6">
          <h4 class="font-semibold text-lg mb-2">Pilot program</h4>
          <p class="text-gray-300">
            As part of a steady roll out, some customers start with a 30-day
            pilot to test integrations with a small subset of vehicles before
            onboarding their fleet in production.
          </p>
        </div>
      </div>
    </div>

    <div class="px-6 mx-auto max-w-7xl">
      <get-started />
    </div>

    <div class="px-6 mx-auto max-w-7xl">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 my-8 lg:my-16">
        <callout link-url="/api">
          <template v-slot:title>Explore documentation</template>
          <template v-slot:description
            >This is where you’ll find code samples and guidelines on how to
            built powerful integrations with our APIs.</template
          >
          <template v-slot:link>APIs</template>
        </callout>

        <callout link-url="/support">
          <template v-slot:title>Need help?</template>
          <template v-slot:description
            >We’re here to help with any problems, questions, comments, or
            feedback you have about our platform, APIs or services.</template
          >
          <template v-slot:link>Get support</template>
        </callout>
      </div>
    </div>
  </Layout>
</template>

<page-query>
  query {
    apis: allApiRoot(filter: { status: { eq: "live" }}, sortBy: "title", order: ASC, limit: 3) {
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
import Layout from "@/layouts/Landing";
import GetStarted from "@/components/GetStarted";
import Callout from "@/components/Callout";
import ApiCard from "@/components/ApiCard";
import CounterCard from "@/components/CounterCard";

export default {
  components: {
    Layout,
    GetStarted,
    Callout,
    ApiCard,
    CounterCard,
  },
  metaInfo: {
    title: "Data Solutions",
  },
};
</script>
