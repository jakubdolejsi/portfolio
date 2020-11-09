<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="firstName"
        type="string"
        label="Type your first name *"
        hint="first name"
      />
      <q-input
        filled
        v-model="lastName"
        type="string"
        label="Type your last name"
        hint="last name"
      />

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
      Already have and account? Click here to login
      <q-btn label="Login" color="secondary" v-on:click="onLogin"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterPage',
  data: () => ({
    email: null,
    password: null,
    firstName: null,
    lastName: null
  }),
  methods: {
    onSubmit () {

    },
    onReset () {

    },
    onLogin () {
      this.$emit('userHasAccount')
    }
  }
}
</script>

<style scoped>

</style>
