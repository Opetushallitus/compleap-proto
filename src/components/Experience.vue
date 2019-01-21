<template>
  <div>
    <ul class="mt-0 mb-2 p-0 pt-2">
      <li v-for="(job, index) in personalData.jobs" :key="index" class="d-flex align-items-start degree">
        <img src="../assets/images/job.svg" class="pr-3 pt-1" />
        <div class="pb-3">
          <strong>{{job.name}}</strong>
          <br />
          <small>{{job.location}}</small>
          <br />
          <small>{{job.from}} - {{job.to}}</small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
// import modal from '@/components/modal.vue'
// import _ from 'lodash'

export default {
  name: 'Experience',
  components: {
    // 'modal': modal
  },
  methods: {
    ...mapActions(['getPersonalData', 'setPersonalData']),
    openModal (id) {
      this.modal.modalView = 'edit'
      this.modal.activeModal = id
    },
    closeModal () {
      this.modal.activeModal = ''
    }
  },
  computed: mapState([
    'personalData'
  ]),
  data () {
    return {
      modal: {
        modalView: 'edit',
        activeModal: '' // edit
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
/*
.degree:hover {
  cursor: pointer;
  background-image: url('../assets/images/edit.svg');
  background-repeat: no-repeat;
  background-position: right top;
}
*/
h4 {
  font-size: 1.125em;
  text-transform: uppercase;
}
.competences {
  background-color: $gray-100;
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
