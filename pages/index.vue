<template>
  <div>
    <Header />
    <Home />
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from '~/components/footer.vue'
import Header from '~/components/header.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    FooterVue,
  },
  head() {
    return {
      title: 'Beranda',
    }
  },
}
</script>
