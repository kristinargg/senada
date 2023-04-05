<template>
  <div>
    <Header />
    <pelatihanVue />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
import pelatihanVue from '~/components/pelatihan.vue'

export default {
  name: 'PelatihanPage',
  components: {
    Footer,
    Header,
    pelatihanVue,
  },
  head() {
    return {
      title: 'Pelatihan',
    }
  },
}
</script>
