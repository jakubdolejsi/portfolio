<template>
  <div>
    <div class="linkName text-h5" v-on:click="redirect">
      {{linkName}}
    </div>
    <q-separator />
  </div>
</template>

<script>
export default {
  name: 'DrawerLink',
  props: {
    linkName: String
  },
  data () {
    return {
    }
  },
  methods: {
    redirect () {
      const nextRoute = this.linkName.toLowerCase()
      const actualRoute = this.removeBackslash(this.$router.currentRoute.fullPath)
      if (actualRoute !== nextRoute) {
        this.$router.push(nextRoute)
      }
    },
    removeBackslash (originalString) {
      return originalString.substr(1)
    }
  }
}
</script>

<style scoped >
 .linkName {
   padding-left: 0.2em;
 }

 .linkName:hover {
   background: #a7c9ec;
   cursor: pointer;
 }
</style>
