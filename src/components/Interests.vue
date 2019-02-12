<template>
  <div>
    <button class="btn btn-light btn-sm add" title="Add an interest" v-on:click="showAddInterest=true">+</button>
    <transition name="slide" appear>
      <div class="add-interest form-group p-3" v-if="showAddInterest">
        <label for="interestName">Name</label>
        <input id="interestName" type="text" class="form-control mb-2" v-model="interestName" />
        <label for="interestGroup">Group</label>
        <select class="form-control mb-2" v-model="interestGroup" id="interestGroup">
          <option v-for="(group, index) in competenceGroups" :key="index" :value="group.id">{{group.name}}</option>
        </select>
        <button class="btn btn-warning" v-on:click="addInterest()">Add interest</button>
        <button class="btn btn-link" v-on:click="showAddInterest=false">Cancel</button>
      </div>
    </transition>
    <ul class="mt-0 mb-2 p-0 pt-2 d-flex flex-wrap">
      <li v-for="(interest, index) in personalData.interests" :key="index" class="d-flex interest mr-1 mb-1" title="Click to remove interest" v-on:click="removeInterest(index)">
        <span>{{interest.name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Interests',
  data () {
    return {
      showAddInterest: false,
      interestName: '',
      interestGroup: ''
    }
  },
  computed: mapState([
    'personalData',
    'competenceGroups'
  ]),
  methods: {
    ...mapActions(['setPersonalData']),
    removeInterest (index) {
      this.personalData.interests.splice(index, 1)
      // Store to state
      this.setPersonalData(this.personalData)
    },
    addInterest () {
      this.personalData.interests.push({ 'name': this.interestName, 'gid': this.interestGroup })
      this.interestName = ''
      this.interestGroup = ''
      this.showAddInterest = false
      // Store to state
      this.setPersonalData(this.personalData)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

h4 {
  font-size: 1.125em;
  text-transform: uppercase;
}

button.add {
  position: absolute;
  top: .5em;
  right: 1em;
  background-color: white;
  font-size: 2em;
  color: $gray-200;
  border: 0;
  height: 1em;
  width: 1em;
  line-height: .8em;
}

div.add-interest {
  background-color: $gray-100;
  font-size: .8em;
  * {
    font-size: inherit;
  }
}

ul {
  list-style-type: none;
  li {
    padding: .25em 1em;
    font-size: .75em;
    border-radius: 1em;
    background-color: $white;
    border: 1px dashed gray;
    &:hover {
      cursor: pointer;
      border: 1px solid red;
    }
  }
}
</style>
