<template>
    <nav class="navbar navbar-vertical fixed-left navbar-expand-md navbar-light " id="sidenav-main">

            <div class="sidebar-container">
                <router-link class="navbar-brand" to="#">
                    <div class="vertical-nav" id="sidebar">
                        <div class="py-4 px-3 mb-4">
                            <div class="media d-flex align-items-center">
                                <img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width="65"
                                                                              class="mr-3 rounded-circle img-thumbnail shadow-sm">
                                <div class="media-body">
                                    <h4 class="m-0 text-light">{{user_details.name}}</h4>
                                    <p class="font-weight-light text-light mb-0" style="text-transform: capitalize;">{{user_details.user_type}}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </router-link>

                <ul class="sidebar-navigation">
                    <slot name="links">
                    </slot>
                </ul>
            </div>

    </nav>


</template>
<script>
  //import NavbarToggleButton from '@/components/NavbarToggleButton'

  export default {
    name: 'sidebar',
    components: {
      //NavbarToggleButton
    },
    props: {
      logo: {
        type: String,
        default: 'img/crm_logo.png',
        description: 'Sidebar app logo'
      },
        user_details:{
          type: Object,
            default: () => {
                return {
                    name: '',
                    user_type: ''
                }
        }
        },
      autoClose: {
        type: Boolean,
        default: true,
        description: 'Whether sidebar should autoclose on mobile when clicking an item'
      }
    },
    provide() {
      return {
        autoClose: this.autoClose
      };
    },
    methods: {
      closeSidebar() {
        this.$sidebar.displaySidebar(false)
      },
      showSidebar() {
        this.$sidebar.displaySidebar(true)
      }
    },
    beforeDestroy() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.showSidebar = false;
      }
    }
  };
</script>
<style>
    .sidebar-container {
        position: fixed;
        width: 250px;
        height: 100%;
        left: 0;
        overflow-x: hidden;
        overflow-y: auto;
        background: #1a1a1a;
        color: #fff;
    }

    .navbar {
        padding: 0 !important;
    }


    .sidebar-logo {
        padding: 10px 15px 10px 30px;
        font-size: 20px;
    }

    .sidebar-navigation {
        padding: 0;
        margin: 0;
        list-style-type: none;
        position: relative;
    }

    .sidebar-navigation li {
        background-color: transparent;
        position: relative;
        display: inline-block;
        width: 100%;
        line-height: 20px;
    }

    .sidebar-navigation li span {
        padding: 10px 15px 10px 30px;
        display: inline-block;
        color: #fff;
    }

    .sidebar-navigation li .fa {

        color: #ffffff;
    }

    .sidebar-navigation li a:active,
    .sidebar-navigation li a:hover,
    .sidebar-navigation li a:focus {
        text-decoration: none;
        outline: none;
    }

    .sidebar-navigation li::before {
        background-color: #f33;
        position: absolute;
        content: '';
        height: 100%;
        left: 0;
        top: 0;
        -webkit-transition: width 0.2s ease-in;
        transition: width 0.2s ease-in;
        width: 3px;
        z-index: -1;

    }

    .sidebar-navigation li:hover::before {
        width: 100%;
    }




    .logo {
        height: 40px; }
</style>
