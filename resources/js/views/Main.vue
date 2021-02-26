<template>
<div>
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6 login-section-wrapper">
                    <div class="brand-wrapper">
                        <img src="img/logo.png" alt="logo" class="logo">
                    </div>
                    <div class="login-wrapper my-auto">
                        <h1 class="login-title">Log in</h1>
                        <p class="text-left">Supply your registered login credentials</p>
                        <form role="form">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <base-input class="form-control"
                                            placeholder="Enter Email Address"
                                            id="email"
                                            :class="{'is-invalid':errors.has('email')}"
                                            v-validate="'required|email'"
                                            name="email"
                                            v-model="model.email">
                                </base-input>
                                <span class="is_invalid" v-show="errors.has('email')">{{errors.first('email')}}</span>
                            </div>
                            <div class="form-group mb-4">
                                <label for="password">Password</label>
                                <base-input class="form-control"
                                            placeholder="Enter Password"
                                            type="password"
                                            id="password"
                                            :class="{'is-invalid':errors.has('password')}"
                                            v-validate="'required'"
                                            name="password"
                                            v-model="model.password">
                                </base-input>
                                <span class="is_invalid" v-show="errors.has('password')">{{errors.first('password')}}</span>
                            </div>
                            <input name="login" id="login" @click="loginUser" class="btn btn-block login-btn" type="button" value="Login">
                        </form>

                    </div>
                </div>
                <div class="col-sm-6 px-0 d-none d-sm-block">
                    <img src="img/login.jpg" alt="login image" class="login-img">

                    <div class="carousel" data-ride="carousel" id="quote-carousel">
                        <a data-slide="prev" href="#" @click.prevent="prevPage" class="left carousel-control"><i class="fa fa-chevron-left"></i></a>
                        <!-- Bottom Carousel Indicators -->
                        <ol class="carousel-indicators">
                            <li  v-for="(company,index) in paginatedData()" :key="index" class="active">
                                <img class="img-responsive company" :src="company.company_logo === null ? 'https://dummyimage.com/300.png/09f/fff':
                                company.company_logo" alt="">
                            </li>

                        </ol>
                        <a data-slide="next" href="#" @click.prevent="nextPage" class="right carousel-control"><i class="fa fa-chevron-right"></i></a>
                        <p class="text-center info">Our Clients</p>
                    </div>



                </div>
            </div>
        </div>
    </main>

    </div>
</template>

<script>
import companyRepo from '../repository/users/CompanyRepository';
import userRepo from '../repository/users/UserRepository'
import tokenService from '../services/TokenService'
import ToastF from '../plugins/ToastF'

export default {
    data() {
      return {
        companies:[],
        title:'Company List',
        listData:[],
        size:5,
        pageNumber:0,
          model: {
              email: '',
              password: ''
          },
      }
    },
    methods: {
        async getcompanies(){
            let res = await companyRepo.getPublicCompanies()
             this.companies = res.data.data.companies;
        },
        nextPage(){
            this.pageNumber === Math.round(this.companies.length / this.size) - 1 ? '': this.pageNumber++;

      },
      prevPage(){

          this.pageNumber===0 ? '':this.pageNumber-- ;
      },
      pageCount(){
            let l = this.companies.length,
                s = this.size;
            return Math.ceil(l/s);
        },
        paginatedData(){
          const start = this.pageNumber * this.size,
          end = start + this.size;
          return this.companies.slice(start, end);
        },
        loginUser(){
            this.$validator.validate().then(valid => {
                if(valid){
                    this.buttonText = "Please wait...";
                    userRepo.login(this.model)
                        .then(res=>{
                            this.buttonText = "Sign In";
                            let userData = res.data.data.user;
                            tokenService.setUserData({
                                name : userData.name,
                                acct_type: userData.acct_type
                            });
                            tokenService.setAccessToken(res.data.data.token)

                            ToastF({
                                message:"Login successful",
                                type:'success',
                                animation:'slide'
                            });
                            if(userData.acct_type === "admin"){
                                window.location.href = "dashboard"
                            }else{
                                window.location.href = "./profile"
                            }
                        })
                        .catch(err=>{
                            if(err.status === 404){
                                ToastF({
                                    message:"Account not found",
                                    type:'danger',
                                    animation:'slide'
                                })
                            }
                            if(err.status === 401){
                                ToastF({
                                    message:"Invalid login",
                                    type:'danger',
                                    animation:'slide'
                                })
                            }
                            this.buttonText = "Sign in";
                        })
                }
            })
        },
        customValidator(){
            return {
                custom:{
                    email:{
                        required:"Please enter email",
                    },
                    password:{
                        required:"Please enter password",
                    }
                }
            }
        }

    },
    async mounted(){
      await this.getcompanies();
        //initilaize the validator
        this.$validator.localize('en',this.customValidator());
    }
}
</script>

<style scoped>
    body {
        font-family: "Karla", sans-serif;
        background-color: #fff;
        min-height: 100vh; }

    .info{
        margin-top: -150px;
        color: #ffffff;
    }

    .brand-wrapper {
        padding-top: 7px;
        padding-bottom: 8px; }
    .brand-wrapper .logo {
        height: 45px; }

    .login-section-wrapper {
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        padding: 68px 100px;
        background-color: #fff; }
    @media (max-width: 991px) {
        .login-section-wrapper {
            padding-left: 50px;
            padding-right: 50px; }
        #quote-carousel .active {
            width: 60px !important;
            height: 60px !important;
        }
        .company{
            max-width: 60px !important;
        }
    }

    @media (max-width: 1024px) {

        #quote-carousel .active {
            width: 60px !important;
            height: 60px !important;
        }
        .company{
            max-width: 60px !important;
        }
    }
    @media (max-width: 575px) {
        .login-section-wrapper {
            padding-top: 20px;
            padding-bottom: 20px;
            min-height: 100vh; } }

    .login-wrapper {
        width: 300px;
        max-width: 100%;
        padding-top: 24px;
        padding-bottom: 24px; }
    @media (max-width: 575px) {
        .login-wrapper {
            width: 100%; } }
    .login-wrapper label {
        font-size: 14px;
        font-weight: bold;
        color: #b0adad; }
    .login-wrapper .form-control {
        border: none;
        border-bottom: 1px solid #e7e7e7;
        border-radius: 0;
        padding: 9px 5px;
        min-height: 40px;
        font-size: 18px;
        font-weight: normal; }
    .login-wrapper .form-control::-webkit-input-placeholder {
        color: #b0adad; }
    .login-wrapper .form-control::-moz-placeholder {
        color: #b0adad; }
    .login-wrapper .form-control:-ms-input-placeholder {
        color: #b0adad; }
    .login-wrapper .form-control::-ms-input-placeholder {
        color: #b0adad; }
    .login-wrapper .form-control::placeholder {
        color: #b0adad; }
    .login-wrapper .login-btn {
        padding: 13px 20px;
        background-color: #f33;
        border-radius: 0;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
        margin-bottom: 14px; }
    .login-wrapper .login-btn:hover {
        border: 1px solid #f33;
        background-color: #fff;
        color: #f33; }
    .login-wrapper a.forgot-password-link {
        color: #080808;
        font-size: 14px;
        text-decoration: underline;
        display: inline-block;
        margin-bottom: 54px; }
    @media (max-width: 575px) {
        .login-wrapper a.forgot-password-link {
            margin-bottom: 16px; } }
    .login-wrapper-footer-text {
        font-size: 16px;
        color: #000;
        margin-bottom: 0; }

    .company{
        position: relative;
        z-index: 9999;
        display: flex;
        flex: 1;
        max-width: 100px;
    }

    .login-title {
        font-size: 30px;
        color: #000;
        font-weight: bold;
        margin-bottom: 25px; }

    .login-img {
        width: 100%;
        height: 100vh;
        -o-object-fit: cover;
        object-fit: cover;
        -o-object-position: left;
        object-position: left; }

    .carousel{
        width: 100% !important;
        position: absolute;
        bottom: 5%;
    }

    #quote-carousel {
        padding: 0 10px 20px 10px;

    }
    #quote-carousel .carousel-control {
        background: none;
        color: #f33;
        font-size: 2.3em;
        text-shadow: none;
        margin-top: -60px;
        z-index: 999;
    }
    #quote-carousel .carousel-control.left {
        position: absolute;
        left: 5px;
    }
    #quote-carousel .carousel-control.right {
        position: absolute;
        right: 5px;
    }
    #quote-carousel {
        top: auto;
        bottom: 0;
        margin-right: -19px;
    }
    #quote-carousel li {
        width: 50px;
        height: 50px;
        margin: 5px;
        cursor: pointer;
        border: 4px solid #CCC;
        border-radius: 50px;
        opacity: 0.4;
        overflow: hidden;
        transition: all 0.4s;
    }
    #quote-carousel .active {
        background: #333333;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border-color: #f33;
        opacity: .9;
        overflow: hidden;
    }
    .is_invalid{
        font-size: 13px;
        color: red;
    }

</style>
