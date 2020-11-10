<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
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

    }
  }
}
</script>

<style scoped>

</style>
