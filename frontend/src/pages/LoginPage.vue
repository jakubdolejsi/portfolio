<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="email"
        type="email"
        label="Your email *"
        hint="email address"
      />

      <q-input
        filled
        type="password"
        v-model="password"
        label="Your password *"
      />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    <div class="q-mt-lg">
      Don't have account yet? Click here to register
      <q-btn label="Register" color="secondary" v-on:click="onRegister"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    onSubmit () {

    },
    onReset () {

    },
    onRegister () {
      this.$emit('userNeedsAccount')
    }
  }
}
</script>

<style scoped>

</style>
