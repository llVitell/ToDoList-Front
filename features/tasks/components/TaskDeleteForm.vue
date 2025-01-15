<template>
  <v-card class="px-6 py-6">
    <div class="text-h6 mb-4">Are you sure you want to delete this task?</div>
    <div class="flex justify-end gap-4">
      <v-btn
        text="Cancel"
        variant="tonal"
        color="tertiary"
        @click="toggleForm"
      />
      <v-btn color="error" @click="deleteTask">
        <span v-if="!isLoading">Delete</span>
        <v-progress-circular indeterminate v-else />
      </v-btn>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { useTask } from '../composables'
import type { Task } from '../types'

const props = defineProps<{
  task: Task
  toggleForm: () => void
}>()

const isLoading = ref(false)
const error = ref()

const deleteTask = async () => {
  isLoading.value = true
  try {
    await useTask('DELETE', props.task)
  } catch (e) {
    error.value = e
  } finally {
    isLoading.value = false
    props.toggleForm()
  }
}
</script>

<style></style>
