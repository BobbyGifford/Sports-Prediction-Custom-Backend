<template>
  <v-container >
    <v-layout>
      <v-flex>
        <v-card v-for="(prediction, index) in this.predictions" :key="prediction.id" class="mb-2 text-xs-center">
          <v-card-text>
            <div>{{prediction.category}}</div>
            <h3>{{prediction.title}}</h3>
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
export default {
  props: ['predictions']
}
</script>

<style scoped>
</style>
