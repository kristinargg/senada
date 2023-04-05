<template>
  <div>
    <Header />
    <wishlistVue />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'
import Header from '~/components/header.vue'
import wishlistVue from '~/components/wishlist.vue'
export default {
  name: 'WishlistPage',
  components: {
    wishlistVue,
    Footer,
    Header,
  },
  head() {
    return {
      title: 'Wish List',
    }
  },
}
</script>