<template>
  <div id="home" class="font-poppins py-20">
    <div
      class="
        px-4
        py-10
        md:py-0 md:flex md:flex-shrink-0 md:px-[70px]
        lg:px-[150px]
      "
    >
      <!-- <div
        class="
          md:flex md:justify-center
          lg:mx-[150px]
          bg-blue-200
          px-6
          py-16
          lg:px-10
          rounded-2xl
        "
      >
        <div>
          <img
            src="@/assets/img/withoutbg.png"
            alt="header-img"
            class="md:w-3/4 lg:w-full"
          />
        </div>
        <div class="md:flex md:items-center">
          <div class="">
            <p
              class="
                text-base
                md:text-md
                lg:text-xl
                first-letter:text-3xl first-letter:font-bold
              "
            >
              If you can't handle stress, you can't handle success.
            </p>
            <span class="float-right text-lg mt-2">~Unknown</span>
          </div>
        </div>
      </div> -->
    </div>
    <div class="px-4 py-10 md:py-0 md:px-[70px] lg:px-[150px]">
      <div id="indicators-carousel" class="relative" data-carousel="static">
        <!-- Carousel wrapper -->
        <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
          <!-- Item 1 -->
          <div
            class="
              hidden
              duration-700
              ease-in-out
              md:flex md:justify-center
              lg:mx-[150px]
              bg-blue-200
              px-6
              py-16
              lg:px-10
              rounded-2xl
            "
            data-carousel-item
          >
            <div>
              <img
                src="@/assets/img/withoutbg.png"
                alt="header-img"
                class="md:w-3/4 lg:w-full"
              />
            </div>
            <div class="md:flex md:items-center">
              <div class="">
                <p
                  class="
                    text-base
                    md:text-md
                    lg:text-xl
                    first-letter:text-3xl first-letter:font-bold
                  "
                >
                  If you can't handle stress, you can't handle success.
                </p>
                <span class="float-right text-lg mt-2">~Unknown</span>
              </div>
            </div>
          </div>
          <!-- Item 2 -->
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="@/assets/img/1.jpg"
              class="
                absolute
                block
                w-full
                -translate-x-1/2 -translate-y-1/2
                top-1/2
                left-1/2
              "
              alt="..."
            />
          </div>
        </div>
        <!-- Slider indicators -->
        <!-- <div
          class="
            absolute
            z-30
            flex
            space-x-3
            -translate-x-1/2
            bottom-5
            left-1/2
          "
        >
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div> -->
        <!-- Slider controls -->
        <button
          type="button"
          class="
            absolute
            top-0
            left-0
            z-30
            flex
            items-center
            justify-center
            h-full
            px-4
            cursor-pointer
            group
            focus:outline-none
          "
          data-carousel-prev
        >
          <span
            class="
              inline-flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              sm:w-10 sm:h-10
              bg-white/30
              dark:bg-gray-800/30
              group-hover:bg-white/50
              dark:group-hover:bg-gray-800/60
              group-focus:ring-4 group-focus:ring-white
              dark:group-focus:ring-gray-800/70
              group-focus:outline-none
            "
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
          class="
            absolute
            top-0
            right-0
            z-30
            flex
            items-center
            justify-center
            h-full
            px-4
            cursor-pointer
            group
            focus:outline-none
          "
          data-carousel-next
        >
          <span
            class="
              inline-flex
              items-center
              justify-center
              w-8
              h-8
              rounded-full
              sm:w-10 sm:h-10
              bg-white/30
              dark:bg-gray-800/30
              group-hover:bg-white/50
              dark:group-hover:bg-gray-800/60
              group-focus:ring-4 group-focus:ring-white
              dark:group-focus:ring-gray-800/70
              group-focus:outline-none
            "
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
            <nuxt-link to="/lowongan-kerja">
              <button
                class="
                  py-2
                  px-4
                  border border-black
                  rounded-full
                  hover:bg-secondary
                  hover:text-white
                  hover:transition-all
                  hover:ease-in-out
                  duration-500
                  hover:shadow-md hover:border-none
                "
              >
                See all
              </button>
            </nuxt-link>
          </div>
        </div>
        <div class="bg-primary rounded-2xl py-6 px-4 md:px-[70px]">
          <div v-for="kerja in loker" :key="kerja.id" class="py-2">
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
                <div>
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
      </div>
    </div>
    <div class="px-4 md:px-[70px] lg:px-[150px] mt-20">
      <div
        class="
          bg-gradient-to-r
          from-info1
          p-3
          rounded
          md:flex md:justify-between md:items-center
        "
      >
        <div>
          <img src="@/assets/img/1.png" alt="content" />
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
          class="
            px-4
            md:px-0
            py-6
            flex flex-wrap
            items-center
            justify-center
            space-x-14
          "
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
  // head(){
  //   title: 'Home'
  // },
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
  },
}
</script>