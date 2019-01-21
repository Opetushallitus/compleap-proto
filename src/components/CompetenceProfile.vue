<template>
  <div>
    <div v-if="personalData.basicInfo" class="competence-profile pt-5 pb-5 d-flex flex-column">
      <div class="section-head w-100 px-4 py-2 mb-6 border-top">
        <h3>Compentence profile</h3>
      </div>
      <div class="section-content d-flex border-bottom pb-5">
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[0].id, true)" :interests="getCompetences(competenceGroups[0].id, false)" :id="competenceGroups[0].id" :name="competenceGroups[0].name" :showVerified="showVerified"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[1].id, true)" :interests="getCompetences(competenceGroups[1].id, false)" :id="competenceGroups[1].id" :name="competenceGroups[1].name" :showVerified="showVerified"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[2].id, true)" :interests="getCompetences(competenceGroups[2].id, false)" :id="competenceGroups[2].id" :name="competenceGroups[2].name" :showVerified="showVerified"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[3].id, true)" :interests="getCompetences(competenceGroups[3].id, false)" :id="competenceGroups[3].id" :name="competenceGroups[3].name" :showVerified="showVerified"></CompetenceProfileSection>
      </div>
      <div class="section-content m-3 d-flex justify-content-center">
        <button type="button" class="btn btn-light align-self-center" :class="{'btn-dark': showVerified}" v-on:click="showVerified = true">My competences</button>
        <img :src="'../profile-images/' + personalData.basicInfo.id + '.png'" class="mx-4 align-self-center" width="48" />
        <button type="button" class="btn btn-light align-self-center" :class="{'btn-dark': !showVerified}" v-on:click="showVerified = false">My interests</button>
      </div>
      <div class="section-content d-flex border-top pt-5">
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[4].id, true)" :interests="getCompetences(competenceGroups[4].id, false)" :id="competenceGroups[4].id" :name="competenceGroups[4].name" :showVerified="showVerified"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[5].id, true)" :interests="getCompetences(competenceGroups[5].id, false)" :id="competenceGroups[5].id" :name="competenceGroups[5].name" :showVerified="showVerified"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[6].id, true)" :interests="getCompetences(competenceGroups[6].id, false)" :id="competenceGroups[6].id" :name="competenceGroups[6].name" :showVerified="showVerified"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[7].id, true)" :interests="getCompetences(competenceGroups[7].id, false)" :id="competenceGroups[7].id" :name="competenceGroups[7].name" :showVerified="showVerified"></CompetenceProfileSection>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CompetenceProfileSection from '@/components/CompetenceProfileSection.vue'
import _ from 'lodash'

export default {
  name: 'CompetenceProfile',
  components: {
    'CompetenceProfileSection': CompetenceProfileSection
  },
  methods: {
    ...mapActions(['getPersonalData']),
    getCompetences (id, verified) {
      // Find all degrees that have competences
      let x = _.filter(this.personalData.degrees, (degree) => { return degree.competences })
      let competences = []
      _.forEach(x, (degree) => {
        // Find all competences with the provided group id
        _.forEach((_.filter(degree.competences, { 'gid': id, 'verified': verified })), (competence) => {
          competences.push(competence.competence)
        })
      })
      // Return a flat unique array of competences
      return _.uniq(_.flatten(competences))
    }
  },
  data () {
    return {
      showVerified: true // toggle between My competences and My interests. Verified / Not verified
    }
  },
  computed: {
    ...mapState([
      'personalData',
      'competenceGroups'
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
button.btn {
  border-radius: 2em;
  padding: .375em 2em;
}
</style>
