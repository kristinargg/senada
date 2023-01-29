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
              class="
                absolute
                inset-y-0
                left-0
                flex
                items-center
                pl-3
                pointer-events-none
              "
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
              v-model="search"
              type="search"
              class="
                block
                w-full
                p-2
                pl-10
                text-sm
                border
                bg-info
                outline-none
                rounded-lg
                focus:ring-primary focus:border-primary
              "
              placeholder="Search..."
              required
            />
          </div>
        </form>

        <div class="py-2 px-2 md:py-2 md:px-4 bg-info rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 md:w-6 md:h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <!-- <div>
            <form action="" method="get">

            </form>
          </div> -->
        </div>
      </div>
    </div>
    <div class="pt-10">
      <div class="bg-primary rounded-2xl py-6 px-4 md:px-[70px]">
        <div v-for="kerja in loker" :key="kerja.id" class="py-2">
          <div v-if="kerja.length === 0" class="flex items-center">
            <p class="text-center">Data belum tersedia</p>
          </div>
          <div v-else class="bg-white rounded-md py-2 px-2 md:p-4">
            <div
              class="
                flex
                justify-between
                text-center
                bg-slate-200
                px-2
                py-1
                rounded
              "
            >
              <div class="flex space-x-1 text-[10px] md:text-sm">
                <p>{{ kerja.type_name }} |</p>
                <p>{{ kerja.category_name }}</p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4"
                  :class="mark == true ? 'bg-red-500' : 'bg-none'"
                  @click="handleClick()"
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
                  <!-- <div class="py-5 px-5 bg-slate-500 rounded-full">

                    </div> -->
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
                  class="
                    flex
                    text-[10px]
                    md:text-[12px] md:my-2
                    py-2
                    px-4
                    bg-secondary
                    rounded-md
                    justify-center
                    font-bold
                    items-center
                    w-full
                    duration-500
                    hover:transition hover:ease-in-out hover:shadow-md
                  "
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
        <div class="flex justify-center">
          <!-- <Pagination /> -->
          <!-- <div class="isolate inline-flex -space-x-px rounded-md shadow-sm">
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
              @click="next()"
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
          </div> -->
          <button
            :disabled="loker.length === 22"
            class="
              py-2
              px-6
              bg-secondary
              rounded-full
              text-white
              font-bold
              disabled:bg-slate-400
            "
            @click="fetchMoreLoker()"
          >
            More
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LokerComp',
  // components: {
  //   Pagination,
  // },
  data() {
    return {
      page: 1,
      mark: false,
      search: '',
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
    fetchMoreLoker() {
      this.$store.dispatch('fetchMoreLoker')
    },
    handleClick() {
      this.mark = true
      this.index = 1
    },
    filterData() {
      if (this.search) {
        return this.loker.filter((job) =>
          job.job_name.toLowerCase().toUpperCase().includes(this.search)
        )
      } else {
        return this.wisata
      }
    },
  },
}
</script>