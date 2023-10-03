<template>
  <div>
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
  </div>
</template>
<script>
export default {
  name: 'CarouselComp',
}
</script>