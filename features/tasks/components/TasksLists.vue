<template>
  <v-container fluid>
    <div v-if="error">Something went wrong</div>
    <div v-if="isLoading">
      <v-skeleton-loader v-for="n in 4" height="70" type="list-item-avatar" />
      <v-skeleton-loader type="chip" />
    </div>
    <div
      v-for="task in data"
      :key="task.id"
      class="flex w-full flex-col items-center justify-between"
    >
      <div class="flex w-full items-center">
        <div class="relative flex w-full items-center">
          <v-checkbox
            density="comfortable"
            :hide-details="true"
            :model-value="type === 'completed'"
          />
          <div class="absolute left-10 top-2">
            <span class="line-clamp-1">{{ task.title }}</span>
            <span class="text-primary line-clamp-1 text-xs">{{
              task.description
            }}</span>
          </div>
        </div>
        <TaskActions :task="task" />
      </div>
      <v-divider
        :thickness="0.5"
        :opacity="0.6"
        class="my-4 flex w-full"
        color="error"
      />
    </div>
    <v-dialog v-model="dialogState" width="auto">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn
          v-if="data"
          prepend-icon="mdi-plus"
          variant="outlined"
          v-bind="activatorProps"
          :disabled="true"
        >
          new task
        </v-btn>
      </template>
      <TaskNewForm :toggleForm="() => toggleNewDialog()" />
    </v-dialog>
    <v-snackbar v-model="snackBar" vertical>
      <div class="text-subtitle-1 pb-2">This is a snackbar message</div>

      <p>This is a longer paragraph explaining something</p>

      <template v-slot:actions>
        <v-btn color="indigo" variant="text" @click="snackBar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
</template>

<script lang="ts" setup>
import TaskActions from './TaskActions.vue'
import TaskNewForm from './TaskNewForm.vue'
import { useFetch } from '../composables'
import { getApi } from '../service'

const props = defineProps<{ type: string }>()
const apiUrl = getApi()
const dialogState = ref(false)
const snackBar = ref(false)

const toggleNewDialog = () => {
  dialogState.value = !dialogState.value
}

const { data, error, isLoading } = useFetch(`${apiUrl}/${props.type}`)
</script>

<style></style>
