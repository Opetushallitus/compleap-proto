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
        <div class="liked-eds" v-if="likedEducations.length > 0">
          <img src="../assets/images/thumb-small.svg" />
          &nbsp;{{likedEducations.length}} liked educations
        </div>
      </div>
      <div class="col-7 text-center">
        <h3>Find your educational match</h3>
        <p>Collect educations to your favorite list so we can suggest better, just the right educational options for you. If you can’t find a suitable one, you can try to complement your profile.</p>
      </div>
    </div>
    <div class="search d-flex w-100 mt-6">
      <div class="d-flex w-100">
        <input type="text" class="form-control" placeholder="Search educations…" />
        <button class="btn btn-secondary">SEARCH</button>
      </div>
    </div>
    <div class="d-flex w-100 mt-6" v-if="educationsSuggestions_competences.length > 0">
      <h4><span class="star">★</span>Top 5 based on your key competences</h4>
    </div>
    <div class="d-flex w-100 mt-6 flex-column" v-if="educationsSuggestions_education.length > 0">
      <h4><span class="star">★</span>Top 5 based on your education</h4>
      <div class="suggest-card-container">
        <div class="suggest-card-container-scroll d-flex flex-wrap">
          <div v-for="(suggestion, index) in educationsSuggestions_education" :key="index" class="suggest-card mr-3 mb-3 d-flex flex-column">
            <div class="suggest-header d-flex flex-row border-bottom">
              <span class="w-75 small p-3">{{suggestion.name}}</span>
              <svg class="stat-circle w-25 align-self-start m-3" viewBox="1.6 1.6 16.8 16.8">
                <circle class="bg" cx="10" cy="10" r="8"></circle>
                <circle class="progress" cx="10" cy="10" r="8" :style="'stroke-dashoffset: ' + (-51 - ((51 / 100) * parseInt(suggestion.percentage)))"></circle>
                <text x="62%" y="70%">{{suggestion.percentage}}%</text>
              </svg>
            </div>
            <div class="suggest-content p-3 d-flex flex-row">
              <div class="w-75">
                {{suggestion.location}} <br />
                <small>{{suggestion.timeLeft}}</small>
              </div>
              <div class="like w-25 d-flex">
                <img class="ml-auto" src="../assets/images/thumb.svg" v-on:click="addLike(educationsSuggestions_education[index])" />
              </div>
            </div>
            <div class="suggest-footer d-flex flex-row justify-content-center mt-auto w-100 pb-3 pt-3 border-top">
              <button class="btn btn-warning">CHECK IT OUT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex w-100 mt-6" v-if="educationsSuggestions_work.length > 0">
      <h4><span class="star">★</span>Top 5 based on your work history</h4>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'education',
  components: {
    'Navigation': Navigation
  },
  data () {
    return {
      'likedEducations': []
    }
  },
  computed: mapState([
    'personalData',
    // 'likedEducations',
    'educationsSuggestions_competences',
    'educationsSuggestions_education',
    'educationsSuggestions_work'
  ]),
  methods: {
    ...mapActions([
      'getEducationsSuggestions_competences',
      'getEducationsSuggestions_education',
      'getEducationsSuggestions_work'
    ]),
    addLike (like) {
      this.likedEducations.push(like)
    }
  },
  mounted () {
    this.getEducationsSuggestions_competences(this.personalData.basicInfo.id)
    this.getEducationsSuggestions_education(this.personalData.basicInfo.id)
    this.getEducationsSuggestions_work(this.personalData.basicInfo.id)
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

.suggest-card-container-scroll {
  width: 1600px;
}
.suggest-card-container {
  overflow-x: auto;
  height: 320px;
  width: 100%;
}
.suggest-card {
  width: 292px;
  height: 290px;
  border: 1px solid $gray-100;
}
.like {
  cursor: pointer;
  display: block;
  width: 2em;
  height: 2em;
}

.stat-circle {
  width: 50px;
  circle.bg {
    fill: none;
    stroke: #f1f1f1;
    stroke-width: 0.4;
  }
  circle.progress {
    transition: stroke-dashoffset 2s ease;
    transition-delay: 1s;
    fill: none;
    stroke: $green;
    stroke-width: 0.8;
    stroke-dasharray: 51 51;
    stroke-dashoffset: -51;
    stroke-linecap: round;
  }
  text {
    font-size: 5px;
    text-anchor: middle;
    fill: $green;
  }
}

</style>
