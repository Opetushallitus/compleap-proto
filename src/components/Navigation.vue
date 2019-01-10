<template>
  <div class="nav d-flex justify-content-center align-items-end ml-7">
    <router-link to="/profile">My profile</router-link>
    <router-link to="/education">Education</router-link>
    <router-link to="/jobs">Jobs</router-link>
    <div class="user-select p-2 ml-auto">
      <img src="../assets/images/user.svg" v-on:click="showUserSelectMenu=!showUserSelectMenu" />
      <transition name="slide" appear>
        <div class="user-select-menu p-2" v-show="showUserSelectMenu">
          <ul class="p-0 m-0">
            <li v-for="(user, index) in userList" :key="index" class="mb-1 mt-1 pl-2">
              <router-link class="userSelectMenuLink p-0 m-0" :to="{ name: 'welcome', params: { userId: user.id }}">
                <img class="p-1" style="width: 3em;" :src="'../profile-images/' + user.id + '.png'" />
                {{user.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navigation',
  computed: mapState([
    'userList'
  ]),
  data () {
    return {
      showUserSelectMenu: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../style/bootstrap-custom/custom.scss';

ul {
  list-style-type: none;
}

.nav .userSelectMenuLink {
  color: $black;
  text-transform: none;
  font-weight: normal;
  letter-spacing: normal;
}

.user-select {
  position: relative;
  img {
    cursor: pointer;
  }
  .user-select-menu {
    width: 250px;
    position: absolute;
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
      background-color: $yellow;
    }
  }
}

.nav {
  width: 100%;
  height: 100%;
  position: relative;
  a {
    padding: 0 .2em;
    margin: 0 1em;
    font-weight: bold;
    color: $yellow;
    text-transform: uppercase;
    letter-spacing: .08em;
    height: 2em;
    &.router-link-exact-active {
      border-bottom: 3px solid $yellow;
    }
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
