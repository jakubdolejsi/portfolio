<template>
  <div>
    <h4>
      Upload new project
    </h4>
    <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-md">
      <q-file
        outlined
        multiple
        v-model="files"
        label="Upload project files"
        style="width: 300px"/>

      <q-select
        outlined
        :options="languages"
        v-model="selectedLanguage"
        label="Choose project language"
        style="width: 300px"
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
  name: 'ProjectUploader',
  data () {
    return {
      languages: null,
      files: null,
      selectedLanguage: null
    }
  },
  methods: {
    onSubmit () {
      return ''
    },
    onReset () {
      this.files = null
      this.selectedLanguage = null
    },
    fetchLanguages () {
      this.languages = [
        'c++', 'python'
      ]
    }
  },
  mounted () {
    this.fetchLanguages()
  }
}
</script>

<style scoped>

</style>
