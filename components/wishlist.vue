<template>
  <div class="px-4 lg:px-[150px] md:px-[100px] py-24 font-poppins">
    <div>
      <h1
        :class="items.length === 0 ? 'hidden' : 'block'"
        class="text-center text-2xl mt-10"
      >
        Berikut wish list Lowongan Kerja
      </h1>

      <div
        v-if="items.length === 0"
        class="text-sm md:text-2xl font-bold text-center"
      >
        Wish list untuk saat ini belum tersedia
      </div>
      <div
        v-for="(item, index) in items"
        v-else
        :key="index"
        class="text-center shadow-xl bg-info1 px-4 py-6 rounded mt-6 md:mx-[15rem]"
      >
        <div class="float-right cursor-pointer" @click="removeItem(index)">
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
              d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
            />
          </svg>
        </div>
        <div
          class="grid grid-cols-1 lg:flex lg:justify-between lg:items-center text-center"
        >
          <img :src="item.logo" :alt="item.job_name" class="rounded w-16" />
          <div class="text-left">
            <h4
              class="text-md lg:text-lg text-left font-bold font-sen hover:underline"
            >
              <a :href="item.link" target="_blank" rel="noopener noreferrer">
                {{ item.job_name }}</a
              >
              ~ {{ item.type_name }}
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WishListComp',
  computed: {
    items() {
      return this.$store.state.items
    },
  },
  methods: {
    removeItem(data) {
      this.$swal
        .fire({
          title: 'Apakah kamu yakin?',
          text: 'Kamu ingin menghapus lowongan kerja dari daftar wish list',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#062647',
          cancelButtonColor: '#ff7f32',
          confirmButtonText: 'Ya, Hapus!',
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$swal.fire(
              'Berhasil!',
              'Lowongan kerja telah berhasil di hapus',
              'success'
            )
            this.$store.dispatch('remove', data)
          }
        })
    },
  },
}
</script>

<style>
</style>