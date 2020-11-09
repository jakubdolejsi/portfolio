<template>
  <div class="fullscreen bg-grey-5 text-white text-center q-pa-md flex flex-center">
    <login-page v-if="userHasAccount" @userNeedsAccount="toggleBetweenLoginAndRegister"/>
    <register-page v-else @userHasAccount="toggleBetweenLoginAndRegister"/>
  </div>
</template>

<script>

export default {
  name: 'NoLoggedLayout',
  data: () => ({
    userHasAccount: true
  }),
  components: {
    LoginPage: () => import('pages/LoginPage.vue'),
    RegisterPage: () => import('pages/RegisterPage.vue')
  },
  methods: {
    toggleBetweenLoginAndRegister () {
      this.userHasAccount = !this.userHasAccount
    }
  }
}
</script>

<style scoped>

</style>
