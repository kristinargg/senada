<template>
  <div id="perusahaan" class="px-4 lg:px-[120px] font-poppins py-10">
    <div class="px-4 py-10 border">
      <h1 class="text-md md:text-lg font-bold text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </h1>
      <form class="w-full py-5">
        <div class="relative w-full">
          <div
            class="
              absolute
              inset-y-0
              right-0
              flex
              items-center
              pr-3
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
              rounded-full
              focus:ring-primary focus:border-primary
            "
            placeholder="Search..."
            required
          />
        </div>
      </form>
    </div>

    <div
      class="
        bg-primary
        px-4
        md:px-10
        py-6
        rounded-lg
        flex flex-shrink-0 flex-col
        gap-4
        my-10
      "
    >
      <div v-for="company in perusahaan" :key="company.id">
        <div class="bg-white rounded-md p-4">
          <div class="flex justify-center">
            <img
              :src="company.logo"
              class="rounded-full w-24 md:w-32 md:h-32 object-fill bg-slate-200"
            />
          </div>
          <!-- <div class="bg-slate-200 p-10 rounded-full"></div> -->
          <div>
            <p class="text-md md:text-lg font-bold text-center py-2">
              {{ company.company_name }}
            </p>
          </div>
          <div class="text-[12px] md:text-sm font-medium">
            <div class="flex justify-end">
              <div
                class="
                  flex
                  items-center
                  w-full
                  justify-center
                  py-1
                  px-4
                  rounded-full
                  my-2
                  border
                "
              >
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
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
                <p class="pl-2">{{ company.phone }}</p>
              </div>
            </div>
            <div
              class="
                flex
                items-center
                p-2
                bg-secondary
                text-white
                hover:bg-primary hover:opacity-80 hover:cursor-pointer
                border
                justify-around
                my-2
                md:my-4
                text-justify
                rounded
              "
            >
              <!-- <svg
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
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg> -->
              <p>
                {{ company.address }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PerusahaanComp',
  computed: {
    perusahaan() {
      return this.$store.state.perusahaan
    },
  },
  mounted() {
    this.fetchPerusahaan()
  },
  methods: {
    fetchPerusahaan() {
      this.$store.dispatch('fetchPerusahaan')
    },
  },
}
</script>