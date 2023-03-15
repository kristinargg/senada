<template>
  <div class="px-4 lg:px-[120px] font-poppins py-10">
    <div class="text-center leading-10 border py-6 px-10">
      <h1 class="text-md md:text-lg font-bold">
        TINGKATKAN KEMAMPUAN MU DISINI
      </h1>
      <p class="text-sm md:text-md text-info1 py-6">
        Layanan Pelatihan berbasis Offline di dukung dengan mitra mitra yang
        berpengalaman
      </p>
      <form class="py-5">
        <div class="relative w-full">
          <div
            class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"
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
            class="block w-full p-2 pl-10 text-sm border bg-info outline-none rounded-lg focus:ring-primary focus:border-primary"
            placeholder="Search..."
            required
            @input="searchPelatihan(query)"
          />
        </div>
      </form>
    </div>
    <div
      v-if="paginatedPelatihans.length === 0"
      class="flex items-center bg-primary rounded-xl py-3 justify-center mt-10"
    >
      <p class="text-center text-md md:text-xl text-white">
        Pelatihan <span class="text-red-500">{{ query }}</span> saat ini belum
        tersedia
      </p>
    </div>
    <div
      v-for="lth in paginatedPelatihans"
      v-else
      :key="lth.id"
      class="py-10 px-4"
    >
      <div class="border rounded">
        <div class="border relative">
          <img :src="lth.cover" alt="cover" class="w-full h-72 object-cover" />
          <span
            class="absolute py-1 w-full px-4 bg-secondary text-white opacity-75 text-sm md:text-base bottom-0"
            >{{ lth.title }}</span
          >
        </div>
        <div
          class="md:flex md:justify-between py-4 px-2 border-b-2 border-black"
        >
          <h1 class="text-sm md:text-md font-bold">
            {{ lth.sub_vocational }} / {{ lth.vocational }}
          </h1>
          <div class="flex justify-end">
            <span
              class="text-[12px] md:text-sm capitalize text-secondary py-1 px-4 border rounded-full mt-2 md:mt-0"
              >Rp. {{ lth.price }}</span
            >
          </div>
        </div>

        <div class="text-[12px] md:text-sm py-2 px-1">
          <a
            :href="lth.link"
            class="hover:bg-primary hover:opacity-80 hover:ease-out hover:transition duration-500 py-1 px-3 rounded hover:text-white"
            target="_blank"
            >Detail Pelatihan |➡️</a
          >
        </div>
      </div>
    </div>
    <div class="flex justify-center mb-1 lg:hidden">
      <div
        v-for="i in totalPages"
        :key="i"
        class="flex lg:hidden items-center px-1"
      >
        <button
          v-if="currentPage === i"
          class="bg-secondary outline outline-1 outline-slate-200 text-white rounded-full py-1 px-3 hover:opacity-75 active:border-secondary focus:border-secondary my-3"
          :class="{ active: currentPage === i }"
          @click="changePage(i)"
        >
          {{ i }}
        </button>
        <button
          v-else
          class="bg-primary rounded-full text-white py-1 px-3 hover:opacity-75"
          :class="{ active: currentPage === i }"
          @click="changePage(i)"
        >
          {{ i }}
        </button>
      </div>
    </div>
    <div
      v-if="paginatedPelatihans.length !== 0"
      class="flex justify-between px-1 items-center text-sm lg:text-base"
    >
      <div>
        <button
          class="py-1 px-3 bg-primary text-white rounded-full"
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
              class="py-1 px-6 bg-primary rounded-full text-white"
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
        <div class="flex justify-center items-center overflow-auto mx-1">
          <div
            v-for="i in totalPages"
            :key="i"
            class="hidden lg:flex items-center mx-1"
          >
            <button
              v-if="currentPage === i"
              class="bg-secondary outline outline-1 outline-slate-200 text-white rounded-full py-1 px-3 hover:opacity-75 active:border-secondary focus:border-secondary"
              :class="{ active: currentPage === i }"
              @click="changePage(i)"
            >
              {{ i }}
            </button>
            <button
              v-else
              class="bg-primary text-white py-1 px-3 rounded-full hover:opacity-75"
              :class="{ active: currentPage === i }"
              @click="changePage(i)"
            >
              {{ i }}
            </button>
          </div>
        </div>
        <div>
          <div v-if="currentPage !== totalPages">
            <button
              class="py-1 px-6 bg-primary rounded-full text-white"
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
          class="py-1 px-3 bg-primary text-white rounded-full"
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
  name: 'PelatihanComp',
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
    getPelatihans() {
      return this.$store.state.pelatihans
    },
    getSearchResult() {
      return this.searchResult
    },
    totalPages() {
      const data = this.searchMode ? this.getSearchResult : this.getPelatihans
      return Math.ceil(data.length / this.perPage)
    },
    paginatedPelatihans() {
      const data = this.searchMode ? this.getSearchResult : this.getPelatihans
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return data.slice(startIndex, endIndex)
    },
  },
  mounted() {
    this.fetchPelatihan()
  },
  methods: {
    fetchPelatihan() {
      this.$store.dispatch('fetchPelatihan')
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
      const data = this.searchMode ? this.getSearchResult : this.getPelatihans
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        return data
      }
    },
    changePage(page) {
      this.currentPage = page
    },
    searchPelatihan(query) {
      if (!query) {
        this.searchResult = null
        this.searchMode = false
        return
      }
      this.searchMode = true
      const result = this.getPelatihans.filter((traine) => {
        return traine.title.toLowerCase().includes(query.toLowerCase())
      })
      this.searchResult = result
      this.currentPage = 1
    },
  },
}
</script>
