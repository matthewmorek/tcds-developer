<template>
  <footer class="my-8 md:my-16 lg:mt-24">
    <nav
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-4
        mb-8
        lg:mb-16
        gap-4
        lg:gap-6
        xl:gap-8
      "
    >
      <div class="lg:border-r">
        <g-link class="block mb-2" to="/"
          ><g-image
            src="~/assets/images/siteLogo.svg"
            :alt="$static.metadata.siteName"
            class="w-64"
        /></g-link>
      </div>
      <div class="">
        <h4 class="font-semibold text-xl mb-4">Basics</h4>
        <ul>
          <li class="my-1">
            <g-link class="hover:underline" to="/general/enrollment-process"
              >Enrollment process</g-link
            >
          </li>
          <li class="my-1">
            <g-link class="hover:underline" to="/general/how-to-contribute"
              >How to contribute</g-link
            >
          </li>
        </ul>
      </div>
      <div class="">
        <h4 class="font-semibold text-xl mb-4">
          <g-link class="hover:underline" to="/api">APIs →</g-link>
        </h4>
        <ul>
          <li class="my-1">
            <g-link class="hover:underline" to="/api/telemetry"
              >Telemetry</g-link
            >
          </li>
          <li class="my-1">
            <g-link class="hover:underline" to="/api/event-notifications"
              >Event Notifications</g-link
            >
          </li>
          <li class="my-1">
            <g-link class="hover:underline" to="/api/vehicle-enrollment"
              >Vehicle Enrollment</g-link
            >
          </li>
        </ul>
      </div>
      <div class="">
        <h4 class="font-semibold text-xl mb-4">
          <g-link class="hover:underline" to="/support">Support →</g-link>
        </h4>
        <ul>
          <li class="my-1">
            <g-link
              class="hover:underline"
              to="https://toyotadatasolutions.com/contact-sales"
              >Contact us</g-link
            >
          </li>
          <li class="my-1">
            <g-link
              class="hover:underline"
              to="https://toyotaconnected.atlassian.net/servicedesk/customer/portal/4"
              >Submit a ticket</g-link
            >
          </li>
          <li class="my-1">
            <g-link
              class="hover:underline"
              to="https://toyotadatasolutions.com/connected-vehicles"
              >Connected vehicles</g-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="mt-4 lg:mt-16 text-sm lg:flex justify-between">
      <div class="text-gray-500 my-1">
        &copy; 2021 Toyota Motor Sales, U.S.A, Inc. All information applies to
        U.S. vehicles only.
      </div>
      <nav class="lg:flex my-1">
        <a
          class="mr-2 hover:underline"
          href="https://toyotadatasolutions.com/privacy"
          >Privacy</a
        >
        <a
          class="mr-2 hover:underline"
          href="https://www.toyota.com/privacyvts/"
          >Connected vehicle privacy</a
        >
        <a
          class="mr-2 hover:underline"
          href="https://www.toyota.com/support/legal-terms"
          >Legal terms</a
        >
        <a
          class="hover:underline"
          href="https://toyotadatasolutions.com/accessibility"
          >Accessibility</a
        >
      </nav>
    </div>
  </footer>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>
