<template>
  <div>
    <div class="competence-profile pt-5 pb-5 d-flex flex-column">
      <div class="section-head w-100 px-4 py-2 mb-6 border-top">
        <h3>Education path</h3>
      </div>
      <div v-if="!educationPath.created" class="d-flex flex-row no-path align-self-center justify-content-center p-4">
        <div class="px-4">
          <img src="../assets/images/path-icon.svg" />
        </div>
        <div class="d-flex flex-column">
          <small class="pb-2">You don't have an education path yet</small>
          <router-link class="btn btn-warning" :to="{ name: 'yourPath'}">Create education path</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'EducationPath',
  methods: {
    ...mapActions(['getPersonalData'])
  },
  computed: {
    ...mapState([
      'personalData',
      'competenceGroups',
      'educationPath'
    ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
h4 {
  text-transform: uppercase;
  font-size: .875em;
  font-weight: bold;
  padding-left: .5em;
  letter-spacing: .08em;
  img {
    margin-right: .5em;
  }
}

.no-path {
  border: 1px dashed $gray-200;
  border-radius: 5em;
  width: 30em;
  button {
    text-transform: uppercase;
  }
}
</style>
