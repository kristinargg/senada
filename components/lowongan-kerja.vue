<template>
  <div class="px-4 lg:px-[150px] py-10 font-poppins">
    <div class="border rounded p-4 md:p-10 shadow-md">
      <h1 class="text-md md:text-lg font-bold text-center py-3">
        Temukan Lowongan Kerja yang kamu impikan!
      </h1>
      <div class="flex space-x-2 items-center w-full">
        <form class="w-full">
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
              type="text"
              class="block w-full p-2 pl-10 text-sm border bg-info outline-none rounded-lg focus:ring-primary focus:border-primary"
              placeholder="Search..."
              required
              @input="searchLoker(query)"
            />
          </div>
        </form>
      </div>
    </div>
    <div class="pt-10">
      <div class="bg-primary rounded-2xl py-6 px-4 md:px-[70px]">
        <div v-if="paginatedLokers.length !== 0">
          <div
            v-for="(kerja, index) in paginatedLokers"
            :key="index"
            class="py-2"
          >
            <div class="bg-white rounded-md py-2 px-2 md:p-4">
              <div
                class="flex justify-between text-center bg-slate-200 px-2 py-1 rounded"
              >
                <div class="flex space-x-1 text-[10px] md:text-sm">
                  <p>{{ kerja.type_name }} |</p>
                  <p>{{ kerja.category_name }}</p>
                </div>
                <div class="cursor-pointer" @click="addToWishlist(kerja)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                    />
                  </svg>
                </div>
              </div>
              <div class="md:flex md:justify-between">
                <div class="font-sen py-2 flex space-x-4 items-center">
                  <div>
                    <img :src="kerja.logo" :alt="kerja.job_name" class="w-10" />
                  </div>
                  <div>
                    <p class="font-bold text-[12px] md:text-base">
                      {{ kerja.job_name }}
                    </p>
                    <div class="flex space-x-1 items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                        />
                      </svg>

                      <p class="font-medium text-[10px] md:text-sm">
                        {{ kerja.company_name }}
                      </p>
                    </div>
                  </div>
                </div>
                <a :href="kerja.link" target="_blank" class="flex items-center">
                  <div
                    class="flex text-[10px] md:text-[12px] md:my-2 py-2 px-4 bg-secondary rounded-md justify-center font-bold items-center w-full duration-500 hover:transition hover:ease-in-out hover:shadow-md"
                  >
                    <button>Details</button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          v-else
          class="flex items-center justify-center text-sm md:text-xl py-3 px-10 bg-white rounded"
        >
          <p class="text-center">
            Informasi lowongan kerja
            <span class="text-red-600 font-bold text-sm md:text-base">
              {{ query }}
            </span>
            sedang tidak ada
          </p>
        </div>
        <div
          v-if="paginatedLokers.length !== 0"
          class="flex justify-center items-center overflow-auto my-3"
        >
          <div
            v-for="i in totalPages"
            :key="i"
            class="lg:hidden items-center px-1"
          >
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
          v-if="paginatedLokers.length !== 0"
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
            <div
              class="flex justify-center items-center overflow-x-auto overflow-hidden w-0 lg:w-96 mx-1"
            >
              <div
                v-for="i in totalPages"
                :key="i"
                class="hidden lg:flex items-center mx-1"
              >
                <button
                  v-if="currentPage === i"
                  class="outline outline-1 outline-slate-200 text-white rounded-full py-1 px-3 hover:opacity-75 active:border-secondary focus:border-secondary"
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
  </div>
</template>

<script>
export default {
  name: 'LokerComp',
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
    loker() {
      return this.$store.state.loker
    },
    getSearchResult() {
      return this.searchResult
    },
    totalPages() {
      const data = this.searchMode ? this.getSearchResult : this.loker
      return Math.ceil(data.length / this.perPage)
    },
    paginatedLokers() {
      const data = this.searchMode ? this.getSearchResult : this.loker
      const startIndex = (this.currentPage - 1) * this.perPage
      const endIndex = startIndex + this.perPage
      return data.slice(startIndex, endIndex)
    },
  },
  mounted() {
    this.fetchLokers()
  },
  methods: {
    fetchLokers() {
      this.$store.dispatch('fetchLokers')
    },
    startPage() {
      this.currentPage = 1
    },
    lastPage() {
      this.currentPage = this.totalPages
    },
    searchLoker(query) {
      if (!query) {
        this.searchResult = null
        this.searchMode = false
        return
      }
      this.searchMode = true
      const result = this.loker.filter((job) => {
        return (
          job.job_name.toLowerCase().includes(query.toLowerCase()) ||
          job.type_name.toLowerCase().includes(query.toLowerCase())
        )
      })
      this.searchResult = result
      this.currentPage = 1
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      const data = this.searchMode ? this.getSearchResult : this.getPosts
      if (this.currentPage < this.totalPages) {
        this.currentPage++
        return data
      }
    },
    changePage(page) {
      this.currentPage = page
    },
    addToWishlist(data) {
      const found = this.$store.state.items.find((item) => item === data)
      if (found) {
        found.items = !found.items
        this.$swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Lowongan kerja telah ditambahkan ke wish list',
        })
      } else {
        this.$swal
          .fire({
            title: 'Apakah kamu ingin menyimpan lowongan kerja ini?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonColor: '#062647',
            denyButtonColor: '#ff7f32',
            confirmButtonText: 'Simpan',
            denyButtonText: `Batal`,
          })
          .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              this.$swal.fire('Telah berhasil disimpan!', '', 'success')
              this.$store.dispatch('addToWishlist', data)
            } else if (result.isDenied) {
              this.$swal.fire('Perubahan tidak disimpan', '', 'info')
            }
          })
      }
    },
  },
}
</script>