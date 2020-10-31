<template>
  <div>
    <div class="linkName" v-on:click="redirect">
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
      const actualRoute = this.$router.currentRoute.fullPath.substr(1)
      if (actualRoute !== nextRoute) {
        this.$router.push(nextRoute)
      }
    }
  }
}
</script>

<style scoped >
 .linkName {
   font-size: 2em;
   padding-left: 0.2em;
 }

 .linkName:hover {
   background: #a7c9ec;
   cursor: pointer;
 }
</style>
