<template>
  <div>
    <transition name="fade" appear>
      <div class="header-bg" style="height: 90px;">&nbsp;</div>
    </transition>
    <div class="header d-flex align-items-center">
      <img src="../assets/images/logo.png" style="width: 200px;" />
      <navigation />
    </div>
    <div class="content">
      <profile-basic-info />
      <competence-profile />
      <educationPath />
      <div class="d-flex flex-wrap flex-row boxes border-top pt-3">
        <div class="col-6 education">
          <box header="Education">
            <education />
          </box>
        </div>
        <div class="col-6">
          <box header="Open badges">
            <OpenBadges />
          </box>
        </div>
        <!--
        <div class="w-50">
          <box header="Key competences">
            <KeyCompetences />
          </box>
        </div>
        -->
        <div class="col-6">
          <box header="Experience">
            <experience />
          </box>
        </div>
        <div class="col-6">
          <box header="" class="europass">
            <EuroPass />
          </box>
        </div>
        <div class="col-6">
          <box header="Fields of interest">
            <Interests />
          </box>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import ProfileBasicInfo from '@/components/ProfileBasicInfo.vue'
import CompetenceProfile from '@/components/CompetenceProfile.vue'
import EducationPath from '@/components/EducationPath.vue'
import box from '@/components/box.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import OpenBadges from '@/components/OpenBadges.vue'
import Interests from '@/components/Interests.vue'
import EuroPass from '@/components/EuroPass.vue'

export default {
  name: 'home',
  components: {
    'Navigation': Navigation,
    'ProfileBasicInfo': ProfileBasicInfo,
    'CompetenceProfile': CompetenceProfile,
    'EducationPath': EducationPath,
    'box': box,
    'Education': Education,
    'Experience': Experience,
    'OpenBadges': OpenBadges,
    'Interests': Interests,
    'EuroPass': EuroPass
  },
  props: {},
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

.header {
  height: 90px;
  overflow: visible;
  position: relative;
}

.header-bg {
    width: 100%;
    position: absolute;
    height: 90px;
    max-height: 90px;
    top: 0;
    left: 0;
    background-color: black;
}
.boxes > div {
  padding-left: 1em;
  padding-right: 1em;
  padding-bottom: 1em;
  padding-top: 0em;
}
.box {
  border: 1px solid lightgray;
  &.europass {
    border-style: dashed;
    border-radius: 3em;
  }
}
</style>
