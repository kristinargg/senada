<template>
  <div id="home" class="font-poppins py-20">
    <div
      class="px-4 pb-10 md:py-0 md:flex md:flex-shrink-0 md:px-[70px] lg:px-[150px]"
    ></div>
    <div class="px-4">
      <div id="indicators-carousel" class="relative" data-carousel="slide">
        <!-- Carousel wrapper -->
        <div class="relative overflow-hidden rounded-lg h-96">
          <!-- Item 1 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <div
              class="sm:grid sm:grid-cols-2 items-center gap-0 lg:mx-[150px] bg-gradient-to-b from-blue-200 px-6 py-16 lg:py-10 rounded-2xl"
            >
              <div>
                <img
                  src="@/assets/img/slides/1.png"
                  alt="header-img"
                  class="md:w-full"
                />
              </div>
              <div class="md:flex md:items-center">
                <div>
                  <p
                    class="text-base md:text-md lg:text-xl first-letter:text-3xl first-letter:font-bold"
                  >
                    Terwujudnya Tenaga Kerja yang Produktif, Kompetitif, dan
                    Sejahtera
                  </p>
                  <span class="float-right text-lg mt-2">~Unknown</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <div
              class="sm:grid sm:grid-cols-2 items-center gap-10 lg:mx-[150px] bg-gradient-to-b from-orange-300 px-6 py-3 lg:py-10 rounded-2xl"
            >
              <div>
                <img
                  src="@/assets/img/slides/5.png"
                  alt="header-img"
                  class="sm:w-3/4"
                />
              </div>
              <div class="md:flex md:items-center">
                <div>
                  <p
                    class="text-base md:text-md lg:text-xl first-letter:text-3xl first-letter:font-bold"
                  >
                    Everyone has the same potential for success
                  </p>
                  <span class="float-right text-lg mt-2">~Unknown</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Item 3 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <div
              class="sm:grid sm:grid-cols-2 items-center gap-10 lg:mx-[150px] bg-gradient-to-b from-orange-300 px-6 py-3 lg:py-10 rounded-2xl"
            >
              <div>
                <img
                  src="@/assets/img/slides/8.png"
                  alt="header-img"
                  class="sm:w-3/4"
                />
              </div>
              <div class="md:flex md:items-center">
                <div>
                  <p
                    class="text-base md:text-md lg:text-xl first-letter:text-3xl first-letter:font-bold"
                  >
                    The only way to achieve the impossible is to believe it is
                    possible
                  </p>
                  <span class="float-right text-lg mt-2">~Unknown</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Item 4 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <div
              class="sm:grid sm:grid-cols-2 items-center gap-10 lg:mx-[150px] bg-gradient-to-b from-blue-200 px-6 py-16 lg:py-10 rounded-2xl"
            >
              <div>
                <img
                  src="@/assets/img/slides/3.png"
                  alt="header-img"
                  class="md:w-full"
                />
              </div>
              <div class="md:flex md:items-center">
                <div>
                  <p
                    class="text-base md:text-md lg:text-xl first-letter:text-3xl first-letter:font-bold"
                  >
                    Leaders can let you fail and yet not let you be a failure
                  </p>
                  <span class="float-right text-lg mt-2">~Unknown</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Item 5 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <div
              class="sm:grid sm:grid-cols-2 items-center gap-10 lg:mx-[150px] bg-gradient-to-b from-orange-300 px-6 py-3 lg:py-10 rounded-2xl"
            >
              <div>
                <img
                  src="@/assets/img/slides/7.png"
                  alt="header-img"
                  class="sm:w-3/4"
                />
              </div>
              <div class="md:flex md:items-center">
                <div>
                  <p
                    class="text-base md:text-md lg:text-xl first-letter:text-3xl first-letter:font-bold"
                  >
                    It always seems impossible until it's done
                  </p>
                  <span class="float-right text-lg mt-2">~Unknown</span>
                </div>
              </div>
            </div>
          </div>
          <!-- Item 6 -->
          <div class="hidden duration-1000 ease-in-out" data-carousel-item>
            <div
              class="sm:grid sm:grid-cols-2 items-center gap-10 lg:mx-[150px] bg-gradient-to-b from-blue-300 px-6 py-3 lg:py-10 rounded-2xl"
            >
              <div>
                <img
                  src="@/assets/img/slides/4.png"
                  alt="header-img"
                  class="sm:w-3/4"
                />
              </div>
              <div class="md:flex md:items-center">
                <div>
                  <p
                    class="text-base md:text-md lg:text-xl first-letter:text-3xl first-letter:font-bold"
                  >
                    If you can't handle stress, you can't handle success.
                  </p>
                  <span class="float-right text-lg mt-2">~Unknown</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span
            class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>
    </div>
    <div class="px-4 md:px-[70px] lg:px-[150px] mt-20">
      <div class="block">
        <div>
          <h1 class="text-2xl font-bold">Lowongan Kerja</h1>
          <div class="flex justify-end py-10">
            <span
              class="py-2 px-4 border border-black rounded-full hover:bg-secondary hover:text-white hover:transition-all hover:ease-in-out duration-500 hover:shadow-md hover:border-none"
            >
              <nuxt-link to="/lowongan-kerja"> See all </nuxt-link>
            </span>
          </div>
        </div>
        <div class="bg-primary rounded-2xl py-6 px-4 md:px-[70px]">
          <div
            v-if="loker.length === 0"
            class="flex items-center justify-center text-sm md:text-xl py-3 px-10 bg-white rounded text-center"
          >
            Informasi lowongan kerja sedang tidak ada
          </div>

          <div v-for="kerja in loker" v-else :key="kerja.link" class="py-2">
            <div class="bg-white rounded-md py-2 px-2 md:p-4">
              <div
                class="flex justify-between text-center bg-slate-200 px-2 py-1 rounded"
              >
                <div class="flex space-x-1 text-[10px] md:text-sm">
                  <p>{{ kerja.type_name }} |</p>
                  <p>{{ kerja.category_name }}</p>
                </div>
                <div class="hidden">
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
      </div>
    </div>
    <div class="px-4 md:px-[70px] lg:px-[150px] mt-20">
      <div
        class="bg-gradient-to-r from-info1 p-3 rounded md:flex md:justify-between md:items-center"
      >
        <div>
          <img
            src="@/assets/img/1.png"
            alt="content"
            class="animate__animated animate__bounce"
          />
        </div>
        <div>
          <p class="text-sm md:text-base font-bold pt-3 md:pt-0 md:pl-3">
            Yuk, Upgrade Skillmu melalui pelatihan yang telah disediakan!
          </p>
        </div>
      </div>
    </div>
    <div>
      <div class="mt-20">
        <p class="text-center text-lg font-bold">Tools yang digunakan</p>
        <div
          class="px-4 md:px-0 py-6 flex flex-wrap items-center justify-center space-x-14"
        >
          <img
            src="@/assets/img/logos_visual-studio-code.png"
            alt="csc"
            class="w-[15%] md:w-16"
          />
          <img
            src="@/assets/img/logos_nuxt-icon.png"
            alt="nuxt"
            class="w-[15%] md:w-16"
          />
          <img
            src="@/assets/img/logos_figma.png"
            alt="figma"
            class="w-[15%] md:w-12"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComp',
  data() {
    return {
      wishlist: [],
      job_name: null,
      // wish: {
      //   job_name: null,
      // },
    }
  },
  computed: {
    loker() {
      return this.$store.state.loker
    },
  },
  mounted() {
    this.fetchHomeLoker()
  },
  methods: {
    fetchHomeLoker() {
      this.$store.dispatch('fetchHomeLoker')
    },
  },
}
</script>