<template>
  <div>
    <Header />
    <LowonganKerja />
    <Footer />
  </div>
</template>

<script>
import LowonganKerja from '~/components/lowongan-kerja.vue'
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
export default {
  name: 'LokerPage',
  components: { LowonganKerja, Footer, Header },
  head() {
    return {
      title: 'Lowongan Kerja',
    }
  },
}
</script>

<style>
</style>