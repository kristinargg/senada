<template>
  <div>
    <Header />
    <Jobfair />
    <Footer />
  </div>
</template>

<script>
import Jobfair from '~/components/jobfair.vue'
export default {
  name: 'JobfairPage',
  components: { Jobfair },
  head() {
    return {
      title: 'Job Fair',
    }
  },
}
</script>

<style>
</style>