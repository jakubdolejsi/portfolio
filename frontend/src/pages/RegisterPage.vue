<template>
  <div class="q-pa-md" style="max-width: 400px">
    <register-form/>
    <div class="q-mt-lg">
      <div class="text-black">
        Already have and account? Click here to login
      </div>
      <q-btn label="Login" color="secondary" v-on:click="onLogin"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  components: {
    RegisterForm: () => import('components/RegisterForm.vue')
  },
  data: () => ({
    email: null,
    password: null,
    firstName: null,
    lastName: null
  }),
  methods: {
    onLogin () {
      this.$emit('userHasAccount')
    }
  }
}
</script>

<style scoped>

</style>
