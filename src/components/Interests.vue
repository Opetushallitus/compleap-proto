<template>
  <div>
    <ul class="mt-0 mb-2 p-0 pt-2 d-flex flex-wrap">
      <li v-for="(interest, index) in personalData.interests" :key="index" class="d-flex interest mr-2">
        <span>{{interest.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Interests',
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

ul {
  list-style-type: none;
  li {
    padding: .1em 0em;
    span {
      background-color: $yellow;
      padding: .25em 1em;
      font-size: .75em;
      border-radius: 1em;
    }
  }
  li.interest {
    span {
      background-color: $white;
      border: 1px solid gray;
      border-style: dashed;
    }
  }
}
</style>
