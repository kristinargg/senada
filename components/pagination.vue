<template>
  <div>
    <div class="isolate inline-flex -space-x-px rounded-md shadow-sm">
      <a
        class="
          relative
          inline-flex
          items-center
          rounded-l-md
          border border-gray-300
          bg-white
          px-2
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
      >
        <span class="sr-only">Previous</span>
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <a
        v-for="(i, index) in loker.meta.pagination.last_page"
        :key="index"
        class="
          relative
          inline-flex
          items-center
          border border-gray-300
          bg-white
          px-4
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
        >{{ i }}</a
      >
      <!-- <nuxt-link :to="fetchPage"> -->
      <a
        class="
          relative
          inline-flex
          items-center
          rounded-r-md
          border border-gray-300
          bg-white
          px-2
          py-2
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          focus:z-20
        "
        @click="fetchLokerPagination()"
      >
        <span class="sr-only">Next</span>
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <!-- </nuxt-link> -->
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'PaginationComp',
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    loker() {
      return this.$store.state.loker
    },
  },
  mounted() {
    this.fetchLoker()
  },
  methods: {
    fetchLoker() {
      this.$store.dispatch('fetchLoker')
    },
    // fetchPage() {
    //   axios.get(
    //     `https://data.kemnaker.go.id/api/v1/services/14d11dbe-11a8-4ba2-8188-38b2bbacb4df?prov_code=${this.$store.state.prov_code}&limit=5&offset=0&page=${this.page +1 }`
    //   )
    // },
  },
}
</script>