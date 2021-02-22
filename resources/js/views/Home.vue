<template>
<div>
          <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-light fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#"><img src="img/crm_logo.png" class="navbar-brand-img" alt="CRM Logo"></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/login">Login
              <span class="sr-only">(current)</span>
            </router-link>
          </li>

        </ul>
      </div>
    </div>
  </nav>

  <!-- Page Content -->
  <div class="container">

    <!-- Jumbotron Header -->
    <header class="jumbotron " style="margin-top:7em;">
      <h1 class="display-3" style="color:#ffffff;">Welcome to ROAM CRM </h1>

    </header>

      <h3 class="text-center">Top five Companies on the ROAM CRM</h3>
    <!-- Page Features -->
    <div class="row text-center">
      <div class="col-lg-3 col-md-6 mb-4" v-for="(company,index) in paginatedData()" :key="index">
        <div class="card h-100">
            <img class="card-img-top" style="width:80%; margin:auto;" :src="company.company_logo === null ? 'https://dummyimage.com/300.png/09f/fff': company.company_logo">
          <div class="card-body">
            <h4 class="card-title">{{company.name}} Company</h4>
            <h5 class="card-title">{{company.url}}</h5>
          </div>

        </div>
      </div>
    </div>
    <div class="text-center">
        <a href="#" class="btn btn-lg btn-dark" @click.prevent="prevPage"><</a> <a href="#"  @click.prevent="nextPage" class="btn btn-lg btn-dark"> > </a>
    </div>

    <!-- /.row -->

  </div>
  <!-- /.container -->

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
import companyRepo from '../repository/users/CompanyRepository';
export default {
    data() {
      return {
        companies:[],
        title:'Company List',
        listData:[],
        size:5,
        pageNumber:0
      }
    },
    methods: {
        async getcompanies(){
            let res = await companyRepo.getPublicCompanies()
             this.companies = res.data.data.companies;
        },
        nextPage(){
         this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
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
        }
    },
    async mounted(){
      await this.getcompanies();
    }
}
</script>

<style scoped>
.bg-light {
    background-color: #e9ecef !important;
}
.display-3{
    color: white;
}
.jumbotron {
    color: white;
	background-color: #d76928;
	border-radius: 0.4375rem;
}
.navbar-brand-img {
    max-height: 80px;
}
.btn-primary:hover {
	color: #fff;
	background-color: #a5d80c;
	border-color: #a5d80c;
}
.btn-primary {
	color: #fff;
	background-color: #a5d80c;
	border-color: #a5d80c;
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
}
.navbar-dark .navbar-nav .nav-link {
	color: rgb(14, 13, 13);
}
</style>
