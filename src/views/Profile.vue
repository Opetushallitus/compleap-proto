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
      <div class="d-flex flex-wrap boxes border-top pt-3">
        <div class="w-50 education">
          <box header="Education">
            <education />
          </box>
        </div>
        <div class="w-50">
          <box header="Experience">
            Master of arts
          </box>
        </div>
        <div class="w-50">
          <box header="Open badges">
            Master of arts
          </box>
        </div>
        <div class="w-50">
          <box header="Europass">
            Master of arts
          </box>
        </div>
        <div class="w-50">
          <box header="Key competences">
            Master of arts
          </box>
        </div>
        <div class="w-50">
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

export default {
  name: 'home',
  components: {
    'Navigation': Navigation,
    'ProfileBasicInfo': ProfileBasicInfo,
    'CompetenceProfile': CompetenceProfile,
    'box': box,
    'Education': Education
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
  &>div:nth-child(odd) {
    padding-right: 1em;
    padding-bottom: 1em;
    padding-top: 1em;
  }
  &>div:nth-child(even) {
    padding-left: 1em;
    padding-bottom: 1em;
    padding-top: 1em;
  }
}
</style>
