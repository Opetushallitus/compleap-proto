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
      <h2>Jobs</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import SuggestionCard from '@/components/SuggestionCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'jobs',
  components: {
    'Navigation': Navigation,
    'SuggestionCard': SuggestionCard
  },
  data () {
    return {
      'likedEducations': []
    }
  },
  computed: mapState([
    'personalData',
    'jobSuggestions'
  ]),
  methods: {
    ...mapActions([
      'getJobSuggestions'
    ]),
    addLike (like) {
      this.likedJobs.push(like)
    }
  },
  mounted () {
    this.getJobSuggestions(this.personalData.basicInfo.id)
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
.liked-eds {
  position: absolute;
  bottom: 1em;
  left: 0;
  background-color: white;
  border: 1px solid $gray-200;
  padding: .1em .75em;
  border-radius: .25em;
  font-size: 14px;
}
.search input {
  background-color: $gray-100;
  border: 1px solid $gray-100;
}
.star {
  background-color: $warning;
  border-radius: 1em;
  line-height: 1.6em;
  display: inline-block;
  height: 1.8em;
  width: 1.8em;
  text-align: center;
  margin-right: .5em;
}
.like {
  cursor: pointer;
  display: block;
  width: 2em;
  height: 2em;
}

</style>
