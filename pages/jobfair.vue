<template>
  <div>
    <Header />
    <Jobfair />
    <FooterVue />
  </div>
</template>

<script>
import Jobfair from '~/components/jobfair.vue'
import FooterVue from '~/components/footer.vue'
import Header from '~/components/header.vue'
export default {
  name: 'JobfairPage',
  components: { Jobfair, FooterVue, Header },
  head() {
    return {
      title: 'Job Fair',
    }
  },
}
</script>

<style>
</style>