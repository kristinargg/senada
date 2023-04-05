<template>
  <div>
    <Header />
    <perusahaanVue />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
import perusahaanVue from '~/components/perusahaan.vue'

export default {
  name: 'PerusahaanPage',
  components: {
    Footer,
    Header,
    perusahaanVue,
  },
  head() {
    return {
      title: 'Perusahaan',
    }
  },
}
</script>
