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
            @keyup="fetchPelatihan()"
          />
        </div>
      </form>
    </div>
    <div
      v-if="pelatihans.length === 0"
      class="flex items-center bg-primary rounded-xl py-3 justify-center mt-10"
    >
      <p class="text-center text-md md:text-xl text-white">
        Pelatihan <span class="text-red-500">{{ search }}</span> saat ini belum
        tersedia
      </p>
    </div>
    <div v-for="lth in pelatihans" :key="lth.id" class="py-10 px-4">
      <div class="border rounded">
        <div class="border relative">
          <img :src="lth.cover" alt="cover" class="w-full h-72 object-cover" />
          <span
            class="
              absolute
              py-1
              w-full
              px-4
              bg-secondary
              text-white
              opacity-75
              text-sm
              md:text-base
              bottom-0
            "
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
              class="
                text-[12px]
                md:text-sm
                capitalize
                text-secondary
                py-1
                px-4
                border
                rounded-full
                mt-2
                md:mt-0
              "
              >Rp. {{ lth.price }}</span
            >
          </div>
        </div>

        <div class="text-[12px] md:text-sm py-2 px-1">
          <a
            :href="lth.link"
            class="
              hover:bg-primary hover:opacity-80 hover:ease-out hover:transition
              duration-500
              py-1
              px-3
              rounded
              hover:text-white
            "
            target="_blank"
            >Detail Pelatihan |➡️</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PelatihanComp',
  data() {
    return {
      search: '',
    }
  },
  computed: {
    pelatihans() {
      if (!this.search) {
        return this.$store.state.pelatihans
      } else {
        return this.$store.state.pelatihans.filter((latih) => {
          return latih.title.toLowerCase().includes(this.search)
        })
      }
    },
  },
  mounted() {
    this.fetchPelatihan()
  },
  methods: {
    fetchPelatihan() {
      this.$store.dispatch('fetchPelatihan')
    },
  },
}
</script>
