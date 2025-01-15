<template>
  <v-card class="min-w-[320px] px-6 py-6 md:w-[400px]">
    <v-form @submit.prevent="createTask">
      <div class="text-h5 text-tertiary flex items-center gap-2">
        <v-icon icon="mdi-plus-outline" />
        <h5>New Task</h5>
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
        <v-btn variant="elevated" type="submit" color="tertiary" width="90">
          <span v-if="!isLoading">Save</span>
          <v-progress-circular indeterminate v-else />
        </v-btn>
      </div>
    </v-form>
  </v-card>
</template>

<script lang="ts" setup>
import { useTask } from '../composables'

const props = defineProps<{
  toggleForm: () => void
}>()

const title = ref('')
const description = ref('')
const isLoading = ref(false)
const error = ref()

const required = (value: string) => !!value || 'Title is required'

const createTask = async () => {
  isLoading.value = true
  const newTask = {
    title: title.value,
    description: description.value
  }
  try {
    await useTask('POST', newTask)
  } catch (e) {
    error.value = e
  } finally {
    isLoading.value = false
    props.toggleForm()
  }
}
</script>
