<template>
  <div>
    <div v-if="personalData.basicInfo" class="competence-profile pt-5 pb-5 d-flex flex-column">
      <div class="section-head w-100 px-4 py-2 mb-6 border-top">
        <h3>Compentence profile</h3>
      </div>
      <div class="section-content d-flex border-bottom pb-5">
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[0].id)" :interests="getInterests(competenceGroups[0].id)" :id="competenceGroups[0].id" :name="competenceGroups[0].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[1].id)" :interests="getInterests(competenceGroups[1].id)" :id="competenceGroups[1].id" :name="competenceGroups[1].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[2].id)" :interests="getInterests(competenceGroups[2].id)" :id="competenceGroups[2].id" :name="competenceGroups[2].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[3].id)" :interests="getInterests(competenceGroups[3].id)" :id="competenceGroups[3].id" :name="competenceGroups[3].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
      </div>
      <div class="section-content m-3 d-flex justify-content-center">
        <button type="button" class="btn btn-light align-self-center" :class="{'btn-dark': showMyCompetences}" v-on:click="showMyCompetences = true">My competences</button>
        <img :src="'../profile-images/' + personalData.basicInfo.id + '.png'" class="mx-4 align-self-center" width="48" />
        <button type="button" class="btn btn-light align-self-center" :class="{'btn-dark': !showMyCompetences}" v-on:click="showMyCompetences = false">My interests</button>
      </div>
      <div class="section-content d-flex border-top pt-5">
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[4].id)" :interests="getInterests(competenceGroups[4].id)" :id="competenceGroups[4].id" :name="competenceGroups[4].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[5].id)" :interests="getInterests(competenceGroups[5].id)" :id="competenceGroups[5].id" :name="competenceGroups[5].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[6].id)" :interests="getInterests(competenceGroups[6].id)" :id="competenceGroups[6].id" :name="competenceGroups[6].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
        <CompetenceProfileSection :competences="getCompetences(competenceGroups[7].id)" :interests="getInterests(competenceGroups[7].id)" :id="competenceGroups[7].id" :name="competenceGroups[7].name" :showMyCompetences="showMyCompetences"></CompetenceProfileSection>
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
    getCompetences (id) {
      // Find all degrees that have acquired_competences
      let x = _.filter(this.personalData.degrees, (degree) => { return degree.acquired_competences })
      let competences = []
      _.forEach(x, (degree) => {
        // Find all acquired_competences with the provided group id
        _.forEach((_.find(degree.acquired_competences, { 'group_id': id })), (competence) => {
          if (typeof competence === 'object') {
            competences.push(competence)
          }
        })
      })
      // Return a flat unique array of competences
      return _.uniq(_.flatten(competences))
    },
    getInterests (id) {
      // Find all degrees that have my_interests
      let x = _.filter(this.personalData.degrees, (degree) => { return degree.my_interests })
      let interests = []
      _.forEach(x, (degree) => {
        // Find all acquired_competences with the provided group id
        _.forEach((_.find(degree.my_interests, { 'group_id': id })), (interest) => {
          if (typeof interest === 'object') {
            interests.push(interest)
          }
        })
      })
      // Return a flat unique array of competences
      return _.uniq(_.flatten(interests))
    }
  },
  data () {
    return {
      showMyCompetences: true // toggle between My competences and My interests
    }
  },
  computed: mapState([
    'personalData',
    'competenceGroups'
  ])
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
