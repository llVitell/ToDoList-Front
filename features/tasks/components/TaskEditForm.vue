<template>
  <v-card class="min-w-[320px] px-6 py-6 md:w-[400px]">
    <v-form @submit.prevent="editTask" v-model="form">
      <div class="text-h5 text-tertiary flex items-center gap-2">
        <v-icon icon="mdi-pencil-outline" />
        <h5>Edit Task</h5>
      </div>
      <div class="mt-4 flex flex-col gap-1">
        <div class="flex flex-col gap-2 md:flex-row">
          <v-text-field
            placeholder="Title"
            variant="underlined"
            :rules="[required]"
            v-model="title"
            clearable
          />
        </div>
        <v-text-field
          placeholder="Description"
          variant="underlined"
          v-model="description"
          clearable
        />
      </div>
      <div class="mt-2 flex w-full justify-end gap-4">
        <v-btn
          text="Cancel"
          variant="tonal"
          color="tertiary"
          @click="toggleForm"
          width="90"
        ></v-btn>
        <v-btn
          variant="elevated"
          type="submit"
          color="tertiary"
          width="90"
          :disabled="!form"
        >
          <span v-if="!isLoading">Save</span>
          <v-progress-circular indeterminate v-else />
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script lang="ts" setup>
import { useTask } from '../composables'
import type { Task } from '../types'

const props = defineProps<{
  task: Task
  toggleForm: () => void
}>()

const form = ref(false)
const title = ref('')
const description = ref('')
const isLoading = ref(false)
const error = ref()

const required = (value: string) => !!value || 'Title is required'

const editTask = async () => {
  isLoading.value = true
  const taskToEdit = {
    id: props.task.id,
    title: title.value == '' ? props.task.title : title.value,
    description:
      description.value == '' ? props.task.description : description.value
  }
  try {
    await useTask('PUT', taskToEdit)
  } catch (e) {
    error.value = e
  } finally {
    isLoading.value = false
    if (title.value || description.value) {
      props.task.title = title.value == '' ? props.task.title : title.value
      props.task.description =
        description.value == '' ? props.task.description : description.value
    }
    props.toggleForm()
  }
}
</script>
