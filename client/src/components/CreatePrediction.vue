<template>
  <v-card>
    <v-container>
      <v-form @submit.prevent="create">
        <v-layout>
          <v-flex>
            <v-card-title>
            <h3>Create A Prediction</h3>
            </v-card-title>
            <v-card-text>
            <v-text-field
            name="title"
            id="title"
            label="Prediction title"
            v-model="title"
            required>
            </v-text-field>
            <p>Please select a category from the dropdown below</p>
            <v-select
            id="category"
            v-bind:items="categories"
            v-model="category"
            item-value="text"
            single-line
            bottom
            required>
            </v-select>
            <v-text-field
            name="description"
            id="description"
            label="Enter an optional description"
            v-model="description"
            multi-line>
            </v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit">Create</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-form>
    </v-container>
  </v-card>
</template>

<script>
import PredictionService from '@/services/PredictionService'
export default {
  data () {
    return {
      title: '',
      category: 'NFL',
      description: '',
      categories: [
        { text: 'NFL' },
        { text: 'NCAAF' },
        { text: 'NBA' }
      ]
    }
  },
  methods: {
    async create () {
      let prediction = {
        title: this.title,
        category: this.category,
        description: this.description
      }
      try {
        await PredictionService.post(prediction)
        this.$router.push('/list/all')
      } catch (error) {
        console.log('create works')
      }
    }
  }
}
</script>
