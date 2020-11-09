<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
    </q-header>
    <q-drawer
      side="left"
      bordered
      :width="150"
      :breakpoint="200"
      content-class="bg-grey-5 q-pt-xl"
      show-if-above
      v-model="drawerOpen"
    >
      <DrawerLink v-for="link in drawerLinks" :linkName="link.name" v-bind:key="link.name">
      </DrawerLink>
    </q-drawer>
    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  components: {
    DrawerLink: () => import('components/DrawerLink.vue')
  },
  data () {
    return {
      drawerOpen: true,
      drawerLinks: [
        { name: 'Home' },
        { name: 'About' },
        { name: 'Projects' },
        { name: 'Fun' }
      ]
    }
  },
  methods: {
    test () {
      return 'adas'
    }
  }
}
</script>
