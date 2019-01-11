<template>
  <div>
    <div v-if="personalData.basicInfo" class="competence-profile pt-5 pb-5 d-flex">
      <div class="section-head w-100 px-4 py-2 border-top">
        <h3>Compentence profile</h3>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'CompetenceProfile',
  methods: {
    ...mapActions(['getPersonalData'])
  },
  computed: mapState([
    'personalData'
  ]),
  created () {
    // this.getPersonalData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

</style>
