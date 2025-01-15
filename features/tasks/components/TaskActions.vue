<template>
  <v-dialog v-model="dialogStates[task.id]" width="auto">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        v-if="!task.completed"
        icon="mdi-pencil-outline"
        color="tertiary"
        density="comfortable"
        variant="text"
        v-bind="activatorProps"
      />
    </template>
    <TaskEditForm :task="task" :toggleForm="() => toggleEditDialog(task.id)" />
  </v-dialog>
  <v-dialog v-model="deleteDialogStates[task.id]" width="auto">
    <template v-slot:activator="{ props: activatorProps }">
      <v-btn
        icon="mdi-trash-can-outline"
        color="error"
        density="comfortable"
        variant="text"
        :disabled="true"
        v-bind="activatorProps"
      />
    </template>
    <TaskDeleteForm
      :task="task"
      :toggleForm="() => toggleDeleteDialog(task.id)"
    />
  </v-dialog>
</template>

<script lang="ts" setup>
import type { Task } from '../types'
import TaskEditForm from './TaskEditForm.vue'
import TaskDeleteForm from './TaskDeleteForm.vue'

const props = defineProps<{ task: Task }>()

const dialogStates = reactive<{ [key: string]: boolean }>({})

const deleteDialogStates = reactive<{ [key: string]: boolean }>({})

const toggleEditDialog = (id: number) => {
  dialogStates[id] = !dialogStates[id]
}

const toggleDeleteDialog = (id: number) => {
  deleteDialogStates[id] = !deleteDialogStates[id]
}
</script>

<style></style>
