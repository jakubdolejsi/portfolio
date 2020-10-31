<template>
  <div class="concrete-project">
    <q-card class="bg-grey-9 ">
      <q-card-section class="text-grey-4 row">
        <q-icon name="add_task" size="25px"/>
        <div class="text-h6 q-pl-md">{{ project.name }}</div>
      </q-card-section>
      <q-separator dark inset />
      <q-card-section class="text-grey-1">
        {{ project.content }}
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'ProjectContainer',
  props: {
    project: Object
  }
}
</script>

<style scoped>
.concrete-project {
  background: #b18c60;
}

</style>
