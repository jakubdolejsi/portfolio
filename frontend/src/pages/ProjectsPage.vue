<template>
  <q-page class="">
    <div class="row">
      <div class="col-6 bg-blue-3 flex flex-center column">
        <project-dashboard v-if="dashboard"></project-dashboard>
        <project-uploader v-else></project-uploader>
      </div>
      <div class="col-6 bg-blue-5 flex flex-center column">
        <h5 class="">
          My projects
        </h5>
        <div class="q-pa-md row items-start q-gutter-md">
          <project-container
            v-for="project in projectsList"
            v-bind:key="project.name"
            :project="project"
            style="max-width: 300px"
          >
          </project-container>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ProjectsPage',
  components: {
    ProjectContainer: () => import('components/ProjectContainer.vue'),
    ProjectUploader: () => import('components/ProjectUploader.vue'),
    ProjectDashboard: () => import('components/ProjectDashboard.vue')
  },
  data () {
    return {
      projectsList: [],
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    pseudoFetchData () {
      const izpTestProj = {
        name: 'izp1',
        content: this.lorem
      }
      const ifjTestProj = {
        name: 'ifj_compiler',
        content: this.lorem
      }
      const iosTestProj = {
        name: 'wedi',
        content: this.lorem
      }
      const ialTestProj = {
        name: 'sorting',
        content: this.lorem
      }
      const imsTestProj = {
        name: 'modeling and simulation',
        content: this.lorem
      }
      this.projectsList.push(izpTestProj)
      this.projectsList.push(ifjTestProj)
      this.projectsList.push(iosTestProj)
      this.projectsList.push(ialTestProj)
      this.projectsList.push(imsTestProj)
    }
  },
  created () {
    this.pseudoFetchData()
  },
  computed: {
    dashboard () {
      return this.$store.state.dashboard.name
    }
  }
}
</script>

<style scoped>

</style>
