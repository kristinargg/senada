<template>
  <div>
    <Header :is-open="isOpen" @toggle-is-open="toggleIsOpen" />
    <Home />
    <FooterVue />
  </div>
</template>

<script>
import FooterVue from '~/components/footer.vue'
import Home from '~/components/home.vue'
import Header from '~/components/header.vue'

export default {
  name: 'IndexPage',
  components: {
    Header,
    FooterVue,
    Home,
  },
  data() {
    return {
      isOpen: false,
    }
  },
  head() {
    return {
      title: 'Beranda',
    }
  },

  methods: {
    toggleIsOpen() {
      this.isOpen = !this.isOpen // Mengubah nilai isOpen di komponen IndexPage
    },
  },
}
</script>
