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
      <div class="d-flex flex-wrap boxes border-top pt-5 mt-5">
        <div class="w-50 education">education</div>
        <div class="w-50 experience">experience</div>
        <div class="w-50 open-badges">open-badges</div>
        <div class="w-50 euro-pass">euro-pass</div>
        <div class="w-50 key-competences">key-competences</div>
        <div class="w-50 fields-of-interest">fields-of-interest</div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import ProfileBasicInfo from '@/components/ProfileBasicInfo.vue'
import CompetenceProfile from '@/components/CompetenceProfile.vue'

export default {
  name: 'home',
  components: {
    'Navigation': Navigation,
    'ProfileBasicInfo': ProfileBasicInfo,
    'CompetenceProfile': CompetenceProfile
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
.boxes div {
  border: 1px solid gray;
}
</style>
