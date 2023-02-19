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
              @keyup="fetchLoker()"
            />
          </div>
        </form>

        <!-- <div>
          <button
            data-modal-target="authentication-modal"
            data-modal-toggle="authentication-modal"
            class="py-2 px-2 md:py-2 md:px-4 bg-info rounded-lg"
          >
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
          </button>

          Main modal
          <div
            id="authentication-modal"
            tabindex="-1"
            aria-hidden="true"
            class="
              fixed
              top-0
              left-0
              right-0
              z-50
              hidden
              w-full
              p-4
              overflow-x-hidden overflow-y-auto
              md:inset-0
              h-modal
              md:h-full
              justify-center
              items-center
            "
          >
            <div class="relative w-full h-full max-w-md md:h-auto">
              Modal content
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="
                    absolute
                    top-3
                    right-2.5
                    text-gray-400
                    bg-transparent
                    hover:bg-gray-200 hover:text-gray-900
                    rounded-lg
                    text-sm
                    p-1.5
                    ml-auto
                    inline-flex
                    items-center
                    dark:hover:bg-gray-800 dark:hover:text-white
                  "
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
                <div class="px-6 py-6 lg:px-8">
                  <h3
                    class="
                      mb-4
                      text-xl
                      font-medium
                      text-gray-900
                      dark:text-white
                    "
                  >
                    Filter lowongan kerja
                  </h3>
                  <form class="space-y-6" action="#">
                    <div>
                      <label
                        for="countries"
                        class="block mb-2 text-sm font-medium text-gray-900"
                        >Pilih opsi Tipe</label
                      >
                      <select
                        id="type"
                        v-model="selectedType"
                        class="
                          bg-gray-50
                          border border-gray-300
                          text-gray-900 text-sm
                          rounded-lg
                          focus:ring-blue-500 focus:border-blue-500
                          block
                          w-full
                          p-2.5
                          dark:bg-gray-700
                          dark:border-gray-600
                          dark:placeholder-gray-400
                          dark:text-white
                          dark:focus:ring-blue-500
                          dark:focus:border-blue-500
                        "
                        @keyup="filterCategory"
                      >
                        <option selected disabled>
                          Pilih tipe lowongan kerja
                        </option>
                        <option
                          v-for="type in types"
                          :key="type.id"
                          :value="type.value"
                        >
                          {{ type.type }}
                        </option>
                      </select>
                    </div>
                    <div>
                      <label
                        for="countries"
                        class="
                          block
                          mb-2
                          text-sm
                          font-medium
                          text-gray-900
                          dark:text-white
                        "
                        >Pilih opsi Category</label
                      >
                      <select
                        id="category"
                        v-model="selectedCategory"
                        class="
                          bg-gray-50
                          border border-gray-300
                          text-gray-900 text-sm
                          rounded-lg
                          focus:ring-blue-500 focus:border-blue-500
                          block
                          w-full
                          p-2.5
                          dark:bg-gray-700
                          dark:border-gray-600
                          dark:placeholder-gray-400
                          dark:text-white
                          dark:focus:ring-blue-500
                          dark:focus:border-blue-500
                        "
                        @keyup="filterCategory"
                      >
                        <option selected disabled>
                          Pilih Category lowongan kerja
                        </option>
                        <option
                          v-for="ctg in categories"
                          :key="ctg.id"
                          :value="ctg.value"
                        >
                          {{ ctg.category }}
                        </option>
                      </select>
                    </div>
                    <button
                      class="py-2 block w-full bg-secondary rounded text-white"
                      @keyup="filterSearch(selectedType, selectedCategory)"
                    >
                      filter
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <div class="pt-10">
      <div class="bg-primary rounded-2xl py-6 px-4 md:px-[70px]">
        <!-- <div>
          {{ loker.length }}
        </div> -->

        <div v-if="loker.length !== 0">
          <div v-for="(kerja, index) in loker" :key="index" class="py-2">
            <div class="bg-white rounded-md py-2 px-2 md:p-4">
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
        </div>

        <div
          v-else
          class="
            flex
            items-center
            justify-center
            text-sm
            md:text-xl
            py-3
            px-10
            bg-white
            rounded
          "
        >
          <p class="text-center">
            Informasi lowongan kerja
            <span class="text-red-600 font-bold text-sm md:text-base">
              {{ search }}
            </span>
            sedang tidak ada
          </p>
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
      search: '',
      error: '404',
      isClick: false,
      selectedType: '',
      selectedCategory: '',
      types: [
        { id: 1, type: 'Full Time', value: 'ft' },
        { id: 2, type: 'Contract', value: 'ct' },
      ],
      categories: [
        { id: 1, title: 'IT & Software', value: 'IT & Software' },
        {
          id: 2,
          title: 'Sales & Marketing',
          value: 'Sales & Marketing',
        },
        {
          id: 3,
          title: 'Administrasi & Koordinasi',
          value: 'Administrasi & Koordinasi',
        },
        {
          id: 4,
          title: 'Akutansi & Keuangan',
          value: 'Akutansi & Keuangan',
        },
        {
          id: 5,
          title: 'Manajemen & Konsultasi',
          value: 'Manajemen & Konsultasi',
        },
      ],
    }
  },

  computed: {
    loker() {
      if (!this.search) {
        return this.$store.state.loker
      } else {
        return this.$store.state.loker.filter((job) => {
          return job.job_name.toLowerCase().includes(this.search)
        })
      }
    },
    filterCategory() {
      if (this.selectedCategory) {
        return this.$store.state.loker.filter((ctg) => {
          return ctg.category_name === this.selectedCategory
        })
      }
      return this.$store.state.loker
    },
    items() {
      return this.$store.state.items
    },
  },
  mounted() {
    this.fetchLoker()
  },
  methods: {
    fetchLoker() {
      if (!this.selectedType && !this.selectedCategory) {
        this.$store.dispatch('fetchLoker')
      } else {
        console.log(
          'type',
          this.selectedType,
          'category',
          this.selectedCategory
        )
        return this.$store.state.loker.filter((job) => {
          return job.category_name === this.selectedCategory
        })
      }
    },
    filterSearch(selectedCategory, selectedType) {
      if (!selectedType && !selectedCategory) {
        return this.$store.state.loker
      } else {
        console.log('type', selectedType, 'category', selectedCategory)
        return this.$store.state.loker.filter((job) => {
          return (
            job.type_name
              .toLowerCase()
              .includes(selectedType && selectedCategory) &&
            job.category_name
              .toLowerCase()
              .includes(selectedType && selectedCategory)
          )
        })
      }
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