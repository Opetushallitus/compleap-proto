<template>
  <transition name="fade">
    <div class="suggest-card-container">
      <div class="suggest-card-container-scroll d-flex flex-wrap">
        <div v-for="(suggestion, index) in suggestions" :key="index" class="suggest-card mr-3 mb-3 d-flex flex-column">
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
              <img class="ml-auto" src="../assets/images/thumb.svg" v-on:click="$parent.addLike(suggestions[index])" />
            </div>
          </div>
          <div class="suggest-footer d-flex flex-row justify-content-center mt-auto w-100 pb-3 pt-3 border-top">
            <button class="btn btn-warning">CHECK IT OUT</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'SuggestionCard',
  props: {
    'suggestions': Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
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
