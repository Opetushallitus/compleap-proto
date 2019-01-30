<template>
  <div class="path-editor w-100 d-flex flex-column">
    <button class="btn btn-warning align-self-center text-uppercase" v-on:click="openModal('goal')">+ Add career goal</button>
    <div id="cy"></div>
    <modal v-if="modal.activeModal==='goal'" @close="closeModal()" :headerBorder="true" :bgSplit="false">
      <div slot="header">
        <h4 class="pb-5 m-0 text-uppercase">Select career goal</h4>
      </div>
      <div slot="body" class="d-flex flex-row flex-wrap justify-content-center">
        <button v-for="(goal, index) in pathGoalSuggestions" :key="index" class="btn btn-warning mr-2" v-on:click="selectGoal(goal.id)">
          {{goal.name}}
        </button>
      </div>
      <div slot="footer" class="d-flex flex-column align-items-center w-100">
        <small>Suggestions are based on your liked jobs, liked educations and overall profile.</small>
      </div>
    </modal>
  </div>
</template>

<script>
import pathCytoscape from '../utils/pathCytoscape'
import modal from '@/components/modal.vue'
import { mapState, mapActions } from 'vuex'

// eslint-disable-next-line
let cy = {}

export default {
  name: 'PathEditor',
  components: {
    'modal': modal
  },
  data () {
    return {
      modal: {
        activeModal: '' // goal
      }
    }
  },
  watch: {
    pathElements: function (value) {
      console.log('Redrawing graph')
      this.initPathGraph()
    }
  },
  computed: mapState([
    'pathGoalSuggestions', 'personalData', 'pathElements'
  ]),
  methods: {
    ...mapActions(['getPathGoalSuggestions', 'savePathGoal']),
    openModal (id) {
      this.modal.activeModal = id
    },
    closeModal () {
      this.modal.activeModal = ''
    },
    selectGoal (id) {
      this.savePathGoal(id)
      this.closeModal()
    },
    initPathGraph () {
      cy = pathCytoscape.initCytoscape(document.getElementById('cy'), this.pathElements)
    }
  },
  mounted () {
    this.getPathGoalSuggestions(this.personalData.basicInfo.id)
    this.initPathGraph()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
#cy {
  width: 100%;
  height: 20em;
}
</style>
