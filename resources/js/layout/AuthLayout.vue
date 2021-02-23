<template>

    <div class="main-content bg-default">



        <!-- Header -->
        <div class="header py-7 py-lg-8">
            <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
                <div class="container">
                    <router-link slot="brand" class="navbar-brand" to="/">
                    <a class="navbar-brand" href="#"><img src="img/crm_logo.png" class="navbar-brand-img" alt="CRM Logo"></a>
                    </router-link>
<!--                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">-->
<!--                        <span class="navbar-toggler-icon"></span>-->
<!--                    </button>-->

                </div>
            </nav>
            <div class="container">
                <div class="header-body text-center pt-7 mb-3">
                    <div class="row justify-content-center">
                        <div class="col-lg-5 col-md-6">
                            <h1 class="text-white">Welcome!</h1>
                            <p class="text-lead text-white">Please enter your login credentials below</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="separator separator-bottom separator-skew zindex-100">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1"
                     xmlns="http://www.w3.org/2000/svg">
                    <polygon class="fill-default" points="2560 0 2560 100 0 100"></polygon>
                </svg>
            </div>
        </div>
        <!-- Page content -->
        <div class="container mt--8 pb-5">
            <slide-y-up-transition mode="out-in" origin="center top">
                <router-view></router-view>
            </slide-y-up-transition>
        </div>
        <!-- Footer -->
        <footer class="py-5 bg-light">
            <div class="container">
                <p class="m-0 text-center">Copyright &copy; ROAM CRM, 2021</p>
            </div>
            <!-- /.container -->
        </footer>
    </div>

</template>
<script>
  import { SlideYUpTransition } from 'vue2-transitions'

  export default {
    name: 'auth-layout',
    components: {
      SlideYUpTransition
    },
    data() {
      return {
        year: new Date().getFullYear(),
        showMenu: false
      }
    }
  }
</script>
<style>
    .navbar-brand-img {
        max-height: 80px;
    }
</style>
