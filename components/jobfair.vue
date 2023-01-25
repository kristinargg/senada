<template>
  <div class="px-4 lg:px-[120px] font-poppins py-10">
    <form class="w-full">
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
    <div
      class="
        bg-jobfair
        flex flex-wrap
        justify-center
        p-6
        md:grid
        my-5
        md:my-16
        rounded-lg
        md:grid-cols-3
      "
    >
      <div>
        <img src="@/assets/img/1.jpg" alt="content" class="rounded md:w-3/4" />
      </div>
      <div
        class="
          py-2
          md:flex md:items-center md:py-0
          font-bold
          text-sm
          md:text-base
        "
      >
        <p>Temukan pekerjaan favoritmu!</p>
      </div>
      <div class="flex items-center w-full md:w-1/2">
        <a
          href="#"
          class="
            py-2
            px-4
            bg-secondary
            w-full
            text-center text-white
            rounded-lg
          "
          >Daftar Sekarang!</a
        >
      </div>
    </div>
    <div class="bg-primary p-3 rounded-lg md:grid md:grid-cols-3 gap-5">
      <div v-for="job in jobfair" :key="job.id" class="py-2">
        <div class="p-4 bg-white rounded-md md:grid md:grid-cols-2">
          <div class="relative">
            <img
              :src="job.cover"
              :alt="job.jobfair_name"
              class="w-3/4 rounded"
            />
            <span
              class="
                py-2
                px-2
                bg-gray-300
                opacity-80
                absolute
                top-0
                text-sm
                font-bold
                rounded-l
              "
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
              class="
                py-2
                px-4
                bg-secondary
                text-sm
                w-full
                block
                text-center text-white
                rounded
              "
              >Detail</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JobfairComp',
  computed: {
    jobfair() {
      return this.$store.state.jobfair
    },
  },
  mounted() {
    this.fetchJobfair()
  },
  methods: {
    fetchJobfair() {
      this.$store.dispatch('fetchJobfair')
    },
  },
}
</script>