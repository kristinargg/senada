<template>
  <div>
    <Header />
    <div>
      <input type="text" />
    </div>
    <div v-for="(post, index) in paginatedPosts" :key="index">
      {{ post }}
    </div>
    <h1>kjahsdk</h1>
    <div>
      <button @click="prevPage">Previous</button>
      <button @click="nextPage">Next</button>
    </div>
    <!-- <FooterVue /> -->
  </div>
</template>

<script>
export default {
  name: 'PaginationPage',
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
    }
  },
  computed: {
    getPerusahaan() {
      return this.$store.state.perusahaan
    },
    totalPages() {
      return Math.ceil(this.getPerusahaan.length / this.pageSize)
    },
    paginatedPosts() {
      const startIndex = (this.currentPage - 1) * this.pageSize
      const endIndex = startIndex + this.pageSize
      return this.getPerusahaan.slice(startIndex, endIndex)
    },
  },
  mounted() {
    this.fetchPerusahaan()
  },
  methods: {
    fetchPerusahaan() {
      this.$store.dispatch('fetchPerusahaan')
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++
      }
    },
  },
}
</script>
