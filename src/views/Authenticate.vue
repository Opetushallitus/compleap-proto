<template>
  <div>
    <div class="content mt-7 d-flex flex-column align-items-center">
      <img src="../assets/images/strong-auth.svg" />
      <h1 class="pt-7">
        Strong authentication
      </h1>
      <h5>Provided by a trusted service provider</h5>
      <div class="d-flex flex-row user-select mt-4">
        <div class="user-select-menu p-2">
          <ul class="p-0 m-0">
            <li v-for="(user, index) in userList" :key="index" class="mb-1 mt-1 pl-2">
              <router-link class="userSelectMenuLink p-0 m-0" :to="{ name: 'welcome', params: { userId: user.id }}">
                <img class="p-1" style="width: 3em;" :src="'../profile-images/' + user.id + '.png'" />
                {{user.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'authenticate',
  methods: {
    ...mapActions(['getUsers'])
  },
  computed: mapState([
    'userList'
  ]),
  created () {
    this.getUsers()
  }
}
</script>

<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';
.footer {
  display: none;
}
.nav {
  display: none;
}
.btn {
  border: 2px solid #0041DC;
  border-radius: 3em;
  color: #0041DC;
  padding: 1em 3em;
  margin-top: 3em;
  font-size: 1.6em;
  font-weight: bold;
}

ul {
  list-style-type: none;
}

.userSelectMenuLink {
  color: $black;
}

.user-select {
  position: relative;
  .user-select-menu {
    width: 250px;
    right: 0;
    top: 2.2em;
    background-color: white;
    border-radius: .2em;
    box-shadow: 4px 10px 37px -5px rgba(0,0,0,0.89);
    li a {
      display: block;
      height: 3em;
    }
    li:hover {
      background-color: $gray-200;
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
}
</style>
