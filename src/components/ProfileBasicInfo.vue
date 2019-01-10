<template>
  <div>
    <div v-if="personalData.basicInfo" class="pt-5 pb-5 profile-basic-info d-flex justify-content-center align-items-center">
      <div class="pr-3">
        <img :src="'../profile-images/' + personalData.basicInfo.id + '.png'" style="width: 200px;" />
      </div>
      <div class="pl-2 pr-7 border-right w-50">
        <p>{{personalData.basicInfo.blurp}}</p>
        <h3>{{personalData.basicInfo.name}}</h3>
        <small>{{personalData.basicInfo.city}}</small>
      </div>
      <div class="pl-7 w-50">
        <ul class="mt-2 mb-2">
          <li class="d-flex align-items-start">
            <img src="../assets/images/degree.svg" class="pr-3 pt-1" />
            <div class="pb-3">
              <strong>{{personalData.degrees[0].name}}</strong><br />
              <small>{{personalData.degrees[0].location}}</small>
            </div>
          </li>
        </ul>
        <ul class="mt-2 mb-2">
          <li class="d-flex align-items-start">
            <img src="../assets/images/job.svg" class="pr-3 pt-1" />
            <div class="pb-3">
              <strong>{{personalData.jobs[0].name}}</strong><br />
              <small>{{personalData.jobs[0].location}}</small>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'ProfileBasicInfo',
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

ul {
  list-style-type: none;
  padding: 0;
  div {
    line-height: 1em;
  }
}

</style>
