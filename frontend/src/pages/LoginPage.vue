<template>
  <div class="q-pa-md" style="max-width: 400px">
    <login-form/>
    <div class="q-mt-lg">
      <div class="text-black">
        Don't have account yet? Click here to register
      </div>
      <q-btn label="Register" color="secondary" v-on:click="onRegister"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  components: {
    LoginForm: () => import('components/LoginForm.vue')
  },
  methods: {
    onRegister () {
      this.$emit('userNeedsAccount')
    }
  }
}
</script>

<style scoped>

</style>
