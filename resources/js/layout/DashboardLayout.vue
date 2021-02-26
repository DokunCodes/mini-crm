<template>
  <div class="wrapper" :class="{ 'nav-open': $sidebar.showSidebar }">
    <side-bar
      :background-color="sidebarBackground"
      short-title="Argon"
      title="Argon"
      :user_details = "{name: username, user_type: userType}"
    >
      <template slot="links">
        <sidebar-item
        v-show="userType === 'admin'"
          :link="{
            name: 'Dashboard',
            icon: 'fa fa-signal',
            path: '/dashboard'
          }"
        />

        <sidebar-item v-show="userType === 'admin' || userType === 'company'" :link="{name: 'Employees', icon: 'fa fa-users', path: '/employees'}"/>
        <sidebar-item v-show="userType === 'admin'" :link="{name: 'Companies', icon: 'fa fa-map-pin', path: '/companies'}"/>
        <sidebar-item v-show="userType === 'admin'" :link="{name: 'Admin Users', icon: 'fa fa-user-circle', path: '/admin-users'}"/>
        <sidebar-item v-show="userType === 'admin' || userType === 'company' || userType === 'employee'" :link="{name: 'Profile', icon: 'fa fa-user', path: '/profile'}"/>
        <sidebar-item :link="{name: 'Logout', icon: 'fa fa-lock', path: '/logout'}"/>

      </template>
    </side-bar>
    <div class="main-content" :data="sidebarBackground">
      <dashboard-navbar></dashboard-navbar>

      <div @click="toggleSidebar">
        <fade-transition :duration="200" origin="center top" mode="out-in">
          <!-- your content here -->
          <router-view></router-view>
        </fade-transition>
      </div>
    </div>
  </div>

</template>
<script>
  import DashboardNavbar from './DashboardNavbar.vue';
  import TokenService from '../services/TokenService';
  import ContentFooter from './ContentFooter.vue';
  import { FadeTransition } from 'vue2-transitions';

  export default {
    components: {
      DashboardNavbar,
      ContentFooter,
      FadeTransition
    },
    data() {

      return {
        sidebarBackground: 'vue',
        userType: TokenService.getUserData().type,
        username : TokenService.getUserData().name
      };

    },
    methods: {
      toggleSidebar() {
        if (this.$sidebar.showSidebar) {
          this.$sidebar.displaySidebar(false);
        }
      }
    }
  };
</script>
<style scoped>



</style>
