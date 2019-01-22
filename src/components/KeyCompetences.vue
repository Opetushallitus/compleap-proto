<template>
  <div>
    <ul class="mt-0 mb-2 p-0 pt-2">
      <li v-for="(compentence, index) in personalData.keyCompetences" :key="index" class="d-flex align-items-start degree">
        <div class="p-0 pb-3 col-7">
          <strong>{{compentence.name}}</strong>
        </div>
        <div class="p-0 pb-3 col-5 text-right">
          <small v-for="levels in 5" :key="levels" class="star" :class="{'star-active': compentence.level >= levels}">
            &nbsp;
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KeyCompetences',
  computed: mapState([
    'personalData'
  ])
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

h4 {
  font-size: 1.125em;
  text-transform: uppercase;
}
.competences {
  background-color: $gray-100;
}

small.star {
  background-color: $gray-200;
  display: inline-block;
  position: relative;
  padding: .1em;
  width: 12px;
  height: 12px;
  margin-right: 8px;
  border-radius: 50%;
  &.star-active {
    background-color: $black;
    &::after {
      content: ' ';
      display: block;
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background-color: $yellow;
      top: 4px;
      left: 4px;
    }
  }
}

ul {
  list-style-type: none;
  div {
    line-height: 1em;
  }
  li.interest,
  li.competence {
    padding: .1em 0em;
    display: inline-block;
    margin-right: .5em;
    span {
      background-color: $yellow;
      padding: .25em 1em;
      font-size: .75em;
      border-radius: 1em;
    }
  }
  /*
  li.interest:hover,
  li.competence:hover{
    cursor: pointer;
    span {
      box-shadow: 0px 2px 10px -1px rgba(0,0,0,0.78);
    }
  }
  */
  li.interest {
    span {
      background-color: $white;
      border: 1px solid gray;
      border-style: dashed;
    }
  }
}
</style>
