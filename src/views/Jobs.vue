<template>
  <div>
    <transition name="fade" appear>
      <div class="header-bg" style="height: 90px;">&nbsp;</div>
    </transition>
    <div class="header d-flex align-items-center">
      <img src="../assets/images/logo.png" style="width: 200px;" />
      <navigation />
    </div>
    <div class="content d-flex pt-7">
      <div class="col-3">
        <img :src="'../profile-images/' + personalData.basicInfo.id + '.png'" style="width: 100px;" />
        <div class="liked-eds" v-if="likedJobs.length > 0">
          <img src="../assets/images/thumb-small.svg" />
          &nbsp;{{likedJobs.length}} liked jobs
        </div>
      </div>
      <div class="col-7 text-center">
        <h3>Your next dream job?</h3>
        <p>We’ve searched for the job openings that match your unique profile.<br/>
        If you can’t find a fitting opportunity, you can try to update your profile</p>
      </div>
    </div>
    <div class="search d-flex w-100 mt-6">
      <div class="d-flex w-100">
        <input type="text" class="form-control" placeholder="Search jobs" />
        <button class="btn btn-secondary">SEARCH</button>
      </div>
    </div>
    <div class="d-flex w-100 mt-6 flex-column" v-if="jobSuggestions.length > 0">
      <h4><span class="star">★</span>Top 3 job matches</h4>
      <SuggestionCard :suggestions="jobSuggestions" />
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
      'likedJobs': []
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
