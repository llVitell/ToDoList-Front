<template>
  <main class="mx-auto flex h-full w-full max-w-2xl items-center md:py-20">
    <section class="h-full w-full">
      <div class="hidden md:flex">
        <v-tabs v-model="tab" fixed-tabs>
          <v-tab v-for="type in taskTypes" :value="type">{{ type }}</v-tab>
        </v-tabs>
      </div>
      <div class="flex md:hidden">
        <v-tabs v-model="tab" grow>
          <v-tab v-for="type in taskTypes" :value="type">{{ type }}</v-tab>
        </v-tabs>
      </div>
      <v-tabs-window v-model="tab" class="mt-4">
        <v-tabs-window-item v-for="type in taskTypes" :value="type">
          <TasksLists :type="type" />
        </v-tabs-window-item>
      </v-tabs-window>
    </section>
  </main>
</template>
<script lang="ts" setup>
import TasksLists from '~/features/tasks/components/TasksLists.vue'
const tab = ref()
const taskTypes = ['today', 'upcoming', 'completed']
</script>

<style scoped></style>
