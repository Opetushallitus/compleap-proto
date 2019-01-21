<template>
  <div class="w-25 competence-profile-section">
    <h4>
      <img :src="'../competence-profile-icons/' + $props.id + '.svg'" />
      {{$props.name}}
    </h4>
    <ul class="p-0 m-0 pl-2">
      <li v-show="showVerified" v-for="(competence, index) in $props.competences" :key="`${index}-comp`" class="competence">
        <span>{{competence}}</span>
      </li>
      <li v-show="!showVerified" v-for="(interest, index) in $props.interests" :key="`${index}-int`" class="interest">
        <span>{{interest}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CompetenceProfileSection',
  props: {
    id: String,
    name: String,
    competences: Array,
    interests: Array,
    showVerified: Boolean
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
h4 {
  text-transform: uppercase;
  font-size: .875em;
  font-weight: bold;
  padding-left: .5em;
  letter-spacing: .08em;
  img {
    margin-right: .5em;
  }
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
