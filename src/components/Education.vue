<template>
  <div>
    <ul class="mt-0 mb-2 p-0 pt-2">
      <li v-for="(degree, index) in personalData.degrees" :key="index" class="d-flex align-items-start degree" v-on:click="editDegree(index)">
        <img src="../assets/images/degree.svg" class="pr-3 pt-1" />
        <div class="pb-3">
          <strong>{{degree.name}}</strong>
          <span v-if="degree.verified" class="text-uppercase text-success"><small>&nbsp;&nbsp;✓ Verified</small></span>
          <br />
          <small>{{degree.location}}</small>
        </div>
      </li>
    </ul>
    <modal v-if="modal.activeModal==='edit'" @close="closeModal()" :headerBorder="true" :bgSplit="false">
      <div slot="header">
        <h4 class="pb-5 m-0">Edit education</h4>
      </div>
      <div slot="body" v-if="modal.modalView==='loading'">
        <div class="d-flex flex-column mt-5 align-items-center">
          <div class="circle-loader">
            <div class="checkmark draw"></div>
          </div>
        </div>
      </div>
      <div slot="body" v-if="modal.modalView==='edit'">
        <form>
          <div class="form-group">
            <label for="ed_provider">Education provider</label>
            <input :value="degreeDataCopy.location" type="text" class="form-control" id="ed_provider" placeholder="Name of education provider">
          </div>
          <div class="form-group">
            <label for="degree_title">Degree title</label>
            <input :value="degreeDataCopy.name" type="text" class="form-control" id="degree_title" placeholder="Degree title">
          </div>
          <div class="form-row">
            <div class="form-group col-2">
              <label for="from_month">From</label>
              <select class="form-control" id="from_month">
                <option value="">Select month</option>
                <option v-for="index in 12" :key="index" :value="index" :selected="(new Date(degreeDataCopy.from).getMonth()+1) === index">{{months(index-1)}}</option>
              </select>
            </div>
            <div class="form-group col-2">
              <label for="from_year">&nbsp;</label>
              <select class="form-control" id="from_year">
                <option value="">Select year</option>
                <option v-for="(year, index) in years()" :key="index" :value="year" :selected="(new Date(degreeDataCopy.from).getFullYear()) === year">{{year}}</option>
              </select>
            </div>
            <div class="form-group col-2 ml-5">
              <label for="to_month">To</label>
              <select class="form-control" id="to_month">
                <option value="">Select month</option>
                <option v-for="index in 12" :key="index" :value="index" :selected="(new Date(degreeDataCopy.to).getMonth()+1) === index">{{months(index-1)}}</option>
              </select>
            </div>
            <div class="form-group col-2">
              <label for="to_year">&nbsp;</label>
              <select class="form-control" id="to_year">
                <option value="">Select year</option>
                <option v-for="(year, index) in years()" :key="index" :value="year" :selected="(new Date(degreeDataCopy.to).getFullYear()) === year">{{year}}</option>
              </select>
            </div>
          </div>
          <div class="form-group">
            <label for="ed_provider">Acquired competences</label>
            <div class="competences p-3 d-flex flex-column align-items-center">
              <h5>Verify competences!</h5>
              <ul class="p-0 m-0 pl-2">
                <li v-for="(competence, index) in getCompetences(true)" :key="`${index}-comp`" class="competence" v-on:click="unVerify(index, competence)">
                  <span>{{competence}}</span>
                </li>
                <li v-for="(interest, index) in getCompetences(false)" :key="`${index}-int`" class="interest" v-on:click="verify(index, interest)">
                  <span>{{interest}}</span>
                </li>
              </ul>
            </div>
          </div>
        </form>
      </div>
      <div slot="footer">
        <button class="btn btn-text mr-5" v-on:click="closeModal()">Cancel</button>
        <button class="btn btn-secondary mr-2">Remove</button>
        <button class="btn btn-warning">Save</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import modal from '@/components/modal.vue'
import _ from 'lodash'

export default {
  name: 'Education',
  components: {
    'modal': modal
  },
  methods: {
    ...mapActions(['getPersonalData']),
    openModal (id) {
      this.modal.modalView = 'edit'
      this.modal.activeModal = id
    },
    closeModal () {
      this.modal.activeModal = ''
    },
    editDegree (degree) {
      this.editId = degree
      this.degreeDataCopy = this.personalData.degrees[this.editId]
      this.openModal('edit')
    },
    getCompetences (verified) {
      let competences = []
      _.forEach(_.filter(this.degreeDataCopy.competences, { 'verified': verified }), (competence) => {
        competences.push(competence.competence)
      })
      // Return a flat unique array of competences
      return _.uniq(_.flatten(competences))
    },
    verify (index, competence) {
      console.log(index, competence)
      let copy = this.degreeDataCopy.my_interests[index]
      console.log(copy)
      this.degreeDataCopy.acquired_competences.push(copy)
      this.degreeDataCopy.my_interests.splice(index, 1)
      this.getCompetences()
      this.getInterests()
    },
    unVerify (index, competence) {
      console.log(index, competence)
      /*
      let copy = this.degreeDataCopy.acquired_competences[index]
      this.degreeDataCopy.my_interests.push(copy)
      this.degreeDataCopy.acquired_competences.splice(index, 1)
      this.getCompetences()
      this.getInterests()
      */
    },
    years () {
      let years = []
      for (var i = 1980; i <= (new Date().getFullYear()); i++) {
        years.push(i)
      }
      return years
    },
    months (monthIndex) {
      let month = []
      month[0] = 'January'
      month[1] = 'February'
      month[2] = 'March'
      month[3] = 'April'
      month[4] = 'May'
      month[5] = 'June'
      month[6] = 'July'
      month[7] = 'August'
      month[8] = 'September'
      month[9] = 'October'
      month[10] = 'November'
      month[11] = 'December'
      return month[monthIndex]
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
      },
      editId: '',
      // Copy the degree data to a temp object for editing.
      // To be copied over to personalData.degrees[editId] state when saving.
      degreeDataCopy: {}
    }
  },
  created () {
    // this.editDegree(0)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
.degree:hover {
  cursor: pointer;
  background-image: url('../assets/images/edit.svg');
  background-repeat: no-repeat;
  background-position: right top;
}
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
  li.interest:hover,
  li.competence:hover{
    cursor: pointer;
    span {
      box-shadow: 0px 2px 10px -1px rgba(0,0,0,0.78);
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
