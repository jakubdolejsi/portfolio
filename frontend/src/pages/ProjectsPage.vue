<template>
  <q-page class="flex flex-center">
    <h1>
      Projects Page
    </h1>
  </q-page>
</template>

<script>
export default {
  name: 'ProjectsPage',
  data () {
    return {
      ProjectsLists: []
    }
  },
  methods: {
    pseudoFetchData () {
      const izpTestProj = {
        name: 'izp1',
        content: 'cont'
      }
      const ifjTestProj = {
        name: 'ifj_compiler',
        content: 'content'
      }

      this.ProjectsLists.push(izpTestProj)
      this.ProjectsLists.push(ifjTestProj)
    }
  },
  created () {
    this.pseudoFetchData()
  }
}
</script>

<style scoped>

</style>
