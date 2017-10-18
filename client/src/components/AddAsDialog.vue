<template>
  <v-dialog height="500px" max-width="500px" persistent v-model="toggleDialog">
    <v-btn flat slot="activator">
      <v-icon left>add</v-icon>Add to {{this.category}}
    </v-btn>

  <v-card>
    <v-container>
      <v-form @submit.prevent="add">
      <v-layout row>
        <v-flex 12>
          <v-card-title>
            Make A Prediction
          </v-card-title>
          <v-layout>
            <v-flex>
              <v-card-text>
                <v-text-field
                name="title"
                id="title"
                label="Prediction"
                v-model="title"
                required>
                </v-text-field>
                <v-text-field
                name="description"
                id="description"
                label="Description (optional)"
                v-model="description">
                </v-text-field>
              </v-card-text>
            </v-flex>
          </v-layout>
          <v-layout>
            <v-flex>
              <v-card-actions>
                <v-btn class="info" @click="add">Add</v-btn>
                <v-spacer></v-spacer>
                <v-btn @click="toggleDialog = false">Cancel</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
      </v-form>
    </v-container>
  </v-card>
  </v-dialog>
</template>

<script>
import PredictionService from '@/services/PredictionService'
export default {
  // The category is dependent on the current page
  props: ['category'],
  data () {
    return {
      toggleDialog: false,
      title: '',
      description: ''
    }
  },
  methods: {
    async add () {
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
