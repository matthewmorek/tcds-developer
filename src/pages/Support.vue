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
      How can we help?
    </h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-8 my-8 lg:my-16">
      <callout link-url="https://toyotadatasolutions.com/contact-sales">
        <template v-slot:title>Business enquiries</template>
        <template v-slot:description
          >Need help around sales, pricing, new ideas, or other business topics?
          We are looking forward to hear from you.</template
        >
        <template v-slot:link>Contact us</template>
      </callout>

      <callout
        link-url="https://toyotaconnected.atlassian.net/servicedesk/customer/portal/4"
      >
        <template v-slot:title>Product or account support</template>
        <template v-slot:description
          >Do you need assistance connecting to our APIs? Or do you have a
          problem in production? Contact our support team.</template
        >
        <template v-slot:link>Submit a support ticket</template>
      </callout>
    </div>
    <get-started />
  </Layout>
</template>

<script>
import GetStarted from "@/components/GetStarted";
import Callout from "@/components/Callout";

export default {
  components: {
    GetStarted,
    Callout,
  },
  metaInfo: {
    title: "How can we help?",
    meta: [
      {
        key: "description",
        name: "description",
        content:
          "Get support for business or technical enquiries related to Toyota Data Solutions.",
      },
    ],
  },
};
</script>
