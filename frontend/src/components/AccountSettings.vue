<template>
  <div class="q-pa-md">
    <q-btn color="primary" label="Account Settings">
      <q-menu>
        <div class="row no-wrap q-pa-md">
          <div class="column">
            <div class="text-h6 q-mb-md">Settings</div>
            <q-toggle v-model="mobileData" label="Use Mobile Data" />
            <q-toggle v-model="bluetooth" label="Bluetooth" />
          </div>

          <q-separator vertical inset class="q-mx-lg" />

          <div class="column items-center">
            <q-avatar size="72px">
              <img src="https://cdn.quasar.dev/img/avatar4.jpg">
            </q-avatar>

            <div v-if="authenticated" class="text-subtitle1 q-mt-md q-mb-xs">Login: {{user.login}}</div>
            <q-btn
              color="primary"
              label="Logout"
              push
              size="sm"
              v-close-popup
              v-on:click="logOut"
            />
          </div>
        </div>
      </q-menu>
    </q-btn>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'UserOptions',
  data () {
    return {
      mobileData: true,
      bluetooth: false
    }
  },
  computed: {
    ...mapGetters({
      user: 'user/user',
      authenticated: 'user/authenticated'
    })
  },
  methods: {
    ...mapActions({
      signOut: 'user/signOut'
    }),
    logOut () {
      this.signOut()
      this.$router.push('/auth')
    }
  }
}
</script>

<style scoped>

</style>
