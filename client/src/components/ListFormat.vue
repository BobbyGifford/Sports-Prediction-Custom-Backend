<template>
  <v-container class="mt-5">
    <v-layout>
      <v-flex>
        <v-card v-for="(prediction, index) in predictions" :key="prediction.id" class="mb-2 text-xs-center">
          <v-card-text>
            <h3>{{prediction.title}}</h3>
            <div>{{prediction.category}}</div>
            <br>
            <div v-if="!!prediction.category">{{prediction.description}}</div>
          </v-card-text>
          <v-card-actions>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import PredictionService from '@/services/PredictionService'
export default {
  prop: ['category'],
  data () {
    return {
      predictions: null
    }
  },
  async mounted () {
    this.predictions = (await PredictionService.index()).data
  }
}
</script>

<style scoped>
</style>
