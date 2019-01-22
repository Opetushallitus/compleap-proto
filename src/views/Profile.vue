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
      <div class="d-flex flex-wrap flex-column boxes border-top pt-3">
        <div class="w-50 education pr-3 pb-5 pt-3">
          <box header="Education">
            <education />
          </box>
        </div>
        <div class="w-50 pr-3 pb-5">
          <box header="Open badges">
            <OpenBadges />
          </box>
        </div>
        <div class="w-50 pr-3 pb-5">
          <box header="Key competences">
            Master of arts
          </box>
        </div>
        <div class="w-50 pl-3 pt-3">
          <box header="Experience">
            <experience />
          </box>
        </div>
        <div class="w-50 pl-3 pt-5">
          <box header="Europass">
            Master of arts
          </box>
        </div>
        <div class="w-50 pl-3 pt-5">
          <box header="Fields of interest">
            Master of arts
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
import box from '@/components/box.vue'
import Education from '@/components/Education.vue'
import Experience from '@/components/Experience.vue'
import OpenBadges from '@/components/OpenBadges.vue'

export default {
  name: 'home',
  components: {
    'Navigation': Navigation,
    'ProfileBasicInfo': ProfileBasicInfo,
    'CompetenceProfile': CompetenceProfile,
    'box': box,
    'Education': Education,
    'Experience': Experience,
    'OpenBadges': OpenBadges
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
.box {
  border: 1px solid lightgray;
}
.boxes {
  height: 50em;
}
</style>
