<template>
  <div class="px-4 lg:px-[120px] font-poppins py-10">
    <div class="border p-4 lg:py-10 lg:px-[75px]">
      <h4 class="text-center py-2 font-bold text-sm lg:text-lg">
        Temukan pekerjaan dengan waktu yang tepat
      </h4>
      <form class="w-full">
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            id="default-search"
            v-model="query"
            type="search"
            class="block w-full p-2 pl-10 text-sm border bg-info outline-none rounded-full focus:ring-primary focus:border-primary"
            placeholder="Search..."
            required
            @input="searchJobfair(query)"
          />
        </div>
      </form>
    </div>
    <div
      class="bg-jobfair flex flex-wrap justify-center p-6 md:grid my-5 md:my-16 rounded-lg md:grid-cols-3"
    >
      <div>
        <img src="@/assets/img/1.jpg" alt="content" class="rounded md:w-3/4" />
      </div>
      <div
        class="py-2 md:flex md:items-center md:py-0 font-bold text-sm md:text-base"
      >
        <p>Temukan pekerjaan favoritmu!</p>
      </div>
      <div class="flex items-center w-full md:w-1/2">
        <a
          href="https://jobfair.kemnaker.go.id/"
          class="py-2 px-4 bg-secondary w-full text-center text-white rounded-lg"
          target="_blank"
          >Daftar Sekarang!</a
        >
      </div>
    </div>
    <div
      v-if="paginatedJobfair.length === 0"
      class="flex items-center justify-center bg-primary py-3 mt-10 rounded-xl"
    >
      <p class="text-center text-md md:text-xl text-white">
        Job Fair <span class="text-red-500">{{ query }}</span> untuk saat ini
        belum tersedia
      </p>
    </div>
    <div v-else class="bg-primary p-3 rounded-lg md:grid md:grid-cols-3 gap-5">
      <div v-for="job in paginatedJobfair" :key="job.id" class="py-2">
        <div class="p-4 bg-white rounded-md md:grid md:grid-cols-2">
          <div class="relative">
            <img
              :src="job.cover"
              :alt="job.jobfair_name"
              class="w-3/4 rounded"
            />
            <span
              class="py-1 px-2 bg-info1 absolute top-0 text-sm font-bold rounded-tl"
              >{{ job.jobfair_type }}</span
            >
          </div>
          <div class="py-4 md:py-0 text-sm leading-7">
            <p class="md:truncate font-bold">{{ job.jobfair_name }}</p>
            <ul class="mb-2">
              <li>Start : {{ job.start_date }}</li>
              <li>End : {{ job.finish_date }}</li>
            </ul>
            <a
              :href="job.link"
              target="_blank"
              class="py-2 px-4 bg-secondary text-sm w-full block text-center text-white rounded"
              >Detail</a
            >
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="paginatedJobfair.length !== 0"
      class="flex justify-between px-1 items-center text-sm lg:text-base pt-3"
    >
      <div>
        <button
          class="py-1 px-3 bg-secondary text-white rounded-full"
          :disabled="currentPage === 1"
          @click="startPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>
      <div class="flex justify-between space-x-1">
        <div>
          <div v-if="currentPage !== 1">
            <button
              class="py-1 px-6 bg-secondary rounded-full text-white"
              @click="prevPage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div v-else>
            <button
              class="py-1 px-6 bg-slate-400 rounded-full text-white"
              disabled
              @click="prevPage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <div v-if="currentPage !== totalPages">
            <button
              class="py-1 px-6 bg-secondary rounded-full text-white"
              @click="nextPage"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
          <div v-else>
            <button
              class="py-1 px-6 bg-slate-400 rounded-full text-white"
              disabled
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <button
          class="py-1 px-3 bg-secondary text-white rounded-full"
          :disabled="currentPage === totalPages"
          @click="lastPage"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobfairComp',
  data() {
    return {
      currentPage: 1,
      perPage: 5,
      query: '',
      searchMode: false,
      searchResult: [],
    }
  },
  computed: {
    getJobfair() {
      return this.$store.state.jobfair
    },
    getSearchResult() {
      return this.searchResult
    },
    totalPages() {
      const data = this.searchMode ? this.getSearchResult : this.getJobfair
      return Math.ceil(data.length / this.perPage)
    },
    paginatedJobfair() {
      const data = this.searchMode ? this.getSearchResult : this.getJobfair
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return data.slice(startIndex, endIndex)
    },
  },
  mounted() {
    this.fetchJobfair()
  },
  methods: {
    fetchJobfair() {
      this.$store.dispatch('fetchJobfair')
    },
    startPage() {
      this.currentPage = 1
    },
    lastPage() {
      this.currentPage = this.totalPages
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      const data = this.searchMode ? this.getSearchResult : this.getJobfair
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        return data
      }
    },
    searchJobfair(query) {
      if (!query) {
        this.searchResult = null
        this.searchMode = false
        return
      }
      this.searchMode = true
      const result = this.getJobfair.filter((job) => {
        return job.jobfair_name.toLowerCase().includes(query.toLowerCase())
      })
      this.searchResult = result
      this.currentPage = 1
    },
  },
}
</script>