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
    <div class="d-flex w-100 mt-6 flex-column" v-if="educationsSuggestions_competences.length > 0">
      <h4><span class="star">★</span>Top 5 based on your key competences</h4>
      <SuggestionCard :suggestions="educationsSuggestions_competences" />
    </div>
    <div class="d-flex w-100 mt-6 flex-column" v-if="educationsSuggestions_education.length > 0">
      <h4><span class="star">★</span>Top 5 based on your education</h4>
      <SuggestionCard :suggestions="educationsSuggestions_education" />
    </div>
    <div class="d-flex w-100 mt-6" v-if="educationsSuggestions_work.length > 0">
      <h4><span class="star">★</span>Top 5 based on your work history</h4>
      <SuggestionCard :suggestions="educationsSuggestions_work" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navigation from '@/components/Navigation.vue'
import SuggestionCard from '@/components/SuggestionCard.vue'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'education',
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
.like {
  cursor: pointer;
  display: block;
  width: 2em;
  height: 2em;
}

</style>
