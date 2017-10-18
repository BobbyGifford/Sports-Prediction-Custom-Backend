<template>
 <v-container class="mt-5">
  <app-add-dialog v-if="this.category !== 'all'" :category="this.category"></app-add-dialog>
  <app-pred-list :predictions="this.predictions"></app-pred-list>
</v-container>
</template>

<script>
import PredictionService from '@/services/PredictionService'
export default {
  data () {
    return {
      predictions: null,
      category: null
    }
  },
  created () {
    this.changeCategory()
  },
  watch: {
    // Watches the route and changes the category based on
    // what category is specified within the route
    '$route.params.category' () {
      this.changeCategory()
    }
  },
  methods: {
    // Filters the prediction list depending on the route params

    async changeCategory () {
      this.category = this.$store.state.route.params.category
      if (this.$store.state.route.params.category === 'all') {
        this.predictions = (await PredictionService.index()).data
      }

      if (this.$store.state.route.params.category === 'NFL') {
        this.predictions = (await PredictionService.indexNFL()).data
      }

      if (this.$store.state.route.params.category === 'NCAAF') {
        this.predictions = (await PredictionService.indexNCAAF()).data
      }

      if (this.$store.state.route.params.category === 'NBA') {
        this.predictions = (await PredictionService.indexNBA()).data
      }
      console.log(this.category)
    }
  }
}
</script>

<style scoped>
</style>
