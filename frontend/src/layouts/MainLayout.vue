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
      v-model="DrawerOpen"
    >
      <DrawerLink v-for="link in DrawerLinks" :linkName="link.name" v-bind:key="link.name">
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
      DrawerOpen: true,
      DrawerLinks: [
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
