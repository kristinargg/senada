<template>
  <div>
    <Header />
    <LowonganKerja />
    <Footer />
  </div>
</template>

<script>
import LowonganKerja from '~/components/lowongan-kerja.vue'
export default {
  name: 'LokerPage',
  components: { LowonganKerja },
  head() {
    return {
      title: 'Lowongan Kerja',
    }
  },
}
</script>

<style>
</style>