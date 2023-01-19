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
}
</script>

<style>
</style>