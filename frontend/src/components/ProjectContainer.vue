<template>
  <div class="concrete-project">
    <q-card class="bg-grey-9 ">
      <q-card-section class="text-grey-4 row name" v-on:click="toggleDashboard">
        <q-icon name="add_task" size="25px" class="col-1"/>
        <div class="text-h6 q-pl-md col-10">{{ project.name }}</div>
        <q-icon v-if="dashboardOpen" name="radio_button_checked" size="25px"
                class="col-1" color="green"/>
        <q-icon v-else name="radio_button_unchecked" size="25px" class="col-1"/>
      </q-card-section>
      <q-separator dark inset/>
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
  },
  data () {
    return {
      openedDashboard: false
    }
  },
  methods: {
    toggleDashboard () {
      this.openedDashboard = !this.openedDashboard
      if (!this.openedDashboard) { // if openedDashboard property is false, we just close the dashboard
        this.closeDashboard()
        return
      }
      this.openDashboard()
    },
    openDashboard () {
      this.$store.commit('ActiveDashboard', {
        name: this.project.name
      })
    },
    closeDashboard () {
      this.$store.commit('DeactivateDashboard')
    }
  },
  computed: {
    dashboardOpen () {
      return this.$store.state.dashboard.name === this.project.name
    }
  }
}
</script>

<style scoped>
.concrete-project {
  background: #b18c60;
}

.name:hover {
  cursor: pointer;
}

</style>
