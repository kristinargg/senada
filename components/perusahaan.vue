<template>
  <div id="perusahaan" class="px-4 lg:px-[120px] font-poppins py-10">
    <div class="px-4 py-10 border">
      <h1 class="text-md md:text-lg font-bold text-center">
        Perusahaan yang membuka lowongan kerja
      </h1>
      <form class="w-full py-5">
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
            class="block w-full p-2 pl-10 text-sm border bg-info outline-none rounded-full focus:ring-primary focus:border-primary"
            placeholder="Search..."
            required
            @input="searchPerusahaan(query)"
          />
        </div>
      </form>
    </div>

    <div class="bg-primary px-4 md:px-10 py-6 rounded-lg gap-4 my-10">
      <div
        v-if="paginatedPerusahaan.length === 0"
        class="flex items-center justify-center"
      >
        <p class="text-center text-sm md:text-xl text-white">
          Data <span class="text-red-600"> {{ query }} </span> perusahaan
          pemberi kerja belum tersedia
        </p>
      </div>
      <div
        v-for="company in paginatedPerusahaan"
        :key="company.id"
        class="py-2"
      >
        <div class="bg-white rounded-md p-4">
          <div class="flex justify-center">
            <img
              v-if="company.logo !== null"
              :src="company.logo"
              class="rounded-full w-24 md:w-32 md:h-32 object-fill bg-slate-200"
            />
            <img
              v-else
              src="@/assets/img/no-image.png"
              class="rounded-full w-24 md:w-32 md:h-32 object-cover bg-slate-200"
            />
          </div>
          <div>
            <p class="text-md md:text-lg font-bold text-center py-2">
              {{ company.company_name }}
            </p>
          </div>
          <div class="text-[12px] md:text-sm font-medium">
            <div class="flex justify-end">
              <div
                class="flex items-center w-full justify-center py-1 px-4 rounded-full my-2 border"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                  :class="company.phone === null ? 'hidden' : 'block'"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p v-if="company.phone === null" class="pl-2">
                  Nomor telepon saat ini belum tersedia
                </p>
                <p class="pl-2">{{ company.phone }}</p>
              </div>
            </div>
            <div
              class="flex items-center p-2 bg-secondary text-white hover:bg-primary hover:opacity-80 hover:cursor-pointer border justify-around my-2 md:my-4 text-justify rounded"
            >
              <p v-if="company.address === null">
                Alamat belum tersedia untuk saat ini
              </p>
              <p v-else>
                {{ company.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="paginatedPerusahaan.length !== 0"
        class="flex items-center overflow-auto my-3"
      >
        <div v-for="i in totalPages" :key="i" class="flex items-center px-1">
          <button
            v-if="currentPage === i"
            class="outline outline-1 outline-slate-200 text-white rounded-full py-1 px-3 hover:opacity-75 active:border-secondary focus:border-secondary my-3"
            :class="{ active: currentPage === i }"
            @click="changePage(i)"
          >
            {{ i }}
          </button>
          <button
            v-else
            class="bg-primary text-white py-1 px-3 hover:opacity-75"
            :class="{ active: currentPage === i }"
            @click="changePage(i)"
          >
            {{ i }}
          </button>
        </div>
      </div>
      <div
        v-if="paginatedPerusahaan.length !== 0"
        class="flex justify-between px-1 items-center text-sm lg:text-base"
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
  </div>
</template>

<script>
export default {
  name: 'PerusahaanComp',
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
    getPerusahaan() {
      return this.$store.state.perusahaan
    },
    getSearchResult() {
      return this.searchResult
    },
    totalPages() {
      const data = this.searchMode ? this.getSearchResult : this.getPerusahaan
      return Math.ceil(data.length / this.perPage)
    },
    paginatedPerusahaan() {
      const data = this.searchMode ? this.getSearchResult : this.getPerusahaan
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return data.slice(startIndex, endIndex)
    },
  },
  mounted() {
    this.fetchPerusahaan()
  },
  methods: {
    fetchPerusahaan() {
      this.$store.dispatch('fetchPerusahaan')
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
      const data = this.searchMode ? this.getSearchResult : this.getPerusahaan
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        return data
      }
    },
    changePage(page) {
      this.currentPage = page
    },
    searchPerusahaan(query) {
      if (!query) {
        this.searchResult = null
        this.searchMode = false
        return
      }
      this.searchMode = true
      const result = this.getPerusahaan.filter((company) => {
        return company.company_name.toLowerCase().includes(query.toLowerCase())
      })
      this.searchResult = result
      this.currentPage = 1
    },
  },
}
</script>