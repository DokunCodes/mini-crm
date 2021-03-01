<template>
    <div>
        <base-header type="white" class="pb-6 pb-8 pt-5 pt-md-8">

        </base-header>
        <div class="container-fluid mt--7">
            <div class="row">
                <div class="col">

                    <div class="card shadow">
                      <div class="card-header border-0">
                        <div class="row align-items-center">
                          <div class="col">
                            <h3 class="mb-0">
                             All Companies
                            </h3>
                          </div>
                          <div class="col text-right">
                            <base-button type="primary" class="btn btn-dark" size="sm" @click="showModal = true"><i class="fa fa-plus" title="Add New"></i></base-button>
                          </div>
                        </div>
                      </div>
                      <div class="table-responsive">
                              <base-table class="table align-items-center table-flush"
                                :thead-classes="'thead-light'"
                                tbody-classes="list"
                                :data="companies">
                                <template slot="columns">
                                  <th>Company name</th>
                                  <th>Url</th>
                                  <th>Employees</th>
                                    <th>Email</th>
                                  <th></th>
                                </template>

                                <template slot-scope="{row}">
                                  <th scope="row">
                                    <div class="media align-items-center">
                                      <a href="#" class="avatar rounded-circle mr-3">
                                        <img alt="Image placeholder" :src="row.company_logo === null || row.company_logo === '' ?
                                        'https://dummyimage.com/250x250/003852/fff.png&text='+row.name : row.company_logo" >

                                      </a>
                                      <div class="media-body">
                                        <span class="name mb-0 text-sm">{{row.name}}</span>
                                      </div>
                                    </div>
                                  </th>

                                  <td>
                                    <badge class="badge-dot mr-4">

                                      <span class="status">{{row.url}}</span>
                                    </badge>
                                  </td>
                                  <td>
                                    <badge class="badge-dot mr-4">

                                      <span class="status">{{row.employee_count}}</span>
                                    </badge>
                                  </td>
                                  <td>
                                    <badge class="badge-dot mr-4">

                                      <span class="status">{{row.email}}</span>
                                    </badge>
                                  </td>
                                <td class="text-right">
                                    <base-button type="primary" class="btn btn-dark" size="sm" @click="editCompany(row)" ><i class="fa fa-eraser" title="Edit"></i></base-button>
                                    <base-button type="danger" class="btn btn-danger" size="sm" @click="deleteCompany(row)" ><i class="fa fa-trash" title="Delete"></i></base-button>
                                  </td>

                                </template>

                              </base-table>
                            </div>


                            </div>
                          </div>
                      </div>
                </div>

          <modal :show="showModal">
              <p class="text-right">
                  <a href="#" @click.prevent="closeForm"><i class="fa fa-times-circle" style="color: red; font-size: 25px"></i></a>
              </p>
            <h2 class="text-center">{{editMode ? 'Edit Company' : 'Add Company'}}</h2>
              <form role="form">
                  <div class="form-group">
                  <label for="company">Company Name</label>
                  <base-input class="input-group mb-3" id="company"
                                    placeholder="Company name"
                                    v-validate="'required'"
                                    name="name"
                                    v-model="model.name">
                        </base-input>
                      <span class="is_invalid" v-show="errors.has('name')">{{errors.first('name')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="web">Website URL</label>
                  <base-input class="input-group mb-3" id="web"
                                    placeholder="Website URL"
                                    v-validate="'required'"
                                    name="url"
                                    v-model="model.url">
                        </base-input>
                      <span class="is_invalid" v-show="errors.has('url')">{{errors.first('url')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="email">Email</label>
                  <base-input class="input-group mb-3" id="email"
                                    placeholder="Email"
                                    v-validate="'required|email'"
                                    name="email"
                                    v-model="model.email">
                        </base-input>
                      <span class="is_invalid" v-show="errors.has('email')">{{errors.first('email')}}</span>
                  </div>
                  <div class="form-group">
                      <label for="password">Password</label>
                      <base-input class="input-group" id="password"
                                  placeholder="Password"
                                  required
                                  name="password"
                                  type="password"
                                  v-validate="'required'"
                                  v-model="model.password">
                      </base-input>
                      <span class="is_invalid" v-show="errors.has('password')">{{errors.first('password')}}</span>
                  </div>


                        <div class="text-muted mt-2" v-show="!editMode">
                            <div class="media align-items-center">
                                      <a href="#" class="avatar rounded-circle mr-3">
                                        <img alt="logo" v-if="logoSrc" :src="logoSrc" />
                                      </a>
                                      <div class="media-body">
                                        <input type="file" ref="filePic" name="company_photo" @change="onSelectedPhoto" v-show="false" />
                                        <base-button type="dark" @click="triggerUpload" v-show="!showremoveBtn" class="my-4 btn-sm">Click to select</base-button>
                                        <base-button type="danger" @click="removePhoto" v-show="showremoveBtn" class="my-4 btn-sm">Remove Logo</base-button>
                                      </div>
                                    </div>

                        </div>
                        <div class="text-center mt-3">
                            <base-button type="primary" @click.prevent="updateCompany" v-show="editMode" class="btn btn-dark">{{submitProgress ? 'Please wait...' : 'Update'}}</base-button><br />
                            <base-button type="primary" @click.prevent="addCompany" v-show="!editMode" class="btn btn-dark">{{submitProgress ? 'Please wait...' : 'Save'}}</base-button><br />

                        </div>
              </form>
          </modal>

    </div>
</template>
<script>
    import Vue from 'vue';
  import companyRepo from '../repository/users/CompanyRepository';

  export default {
    data() {
      return {
        employees:[],
        companies:[],
        title:'Companies List',
        model:{name:"",url:"", email:"", company:"",password:"",company_id:""},
        showModal : false,
        editMode : false,
        submitProgress:false,
        showremoveBtn: false,
        logoSrc: null
      }
    },
    methods: {

        editCompany(row){

            this.model.name = row.name
            this.model.url = row.url
            this.model.email = row.email
            this.model.company_id = row.companyid
            this.showModal = true;
            this.editMode = true;
        },
        getcompanies(){
            companyRepo.getCompanies()
            .then(res=>{
                this.companies = res.data.data.companies;
            })
        },
        triggerUpload(){
            this.$refs.filePic.click();
        },
        onSelectedPhoto(e){
            this.logoSrc =  URL.createObjectURL(e.target.files[0]);
            this.showremoveBtn = true
        },
        removePhoto(){
            this.showremoveBtn = false;
            this.logoSrc = null;
        },
        closeForm(){
          this.showModal = false;
          this.editMode = !this.editMode;
        },
        addCompany(){
            this.$validator.validate().then(valid => {
                    if(valid) {
                        let data = new FormData();
                        data.append('logo', this.$refs.filePic.files[0]);
                        for (let field in this.model) {
                            data.append(field, this.model[field]);
                        }
                        this.submitProgress = true;
                        companyRepo.addCompany(data)
                            .then(res => {
                                this.getcompanies();
                                this.showModal = false;
                                this.submitProgress = false;
                                Vue.$toast.success('Company added successfully');
                            })
                            .catch(err => {
                                if (err.status === 422) {
                                    Vue.$toast.error(err.data.message);
                                }
                                this.submitProgress = false;
                            })
                    }
            })
        },
        updateCompany(){
            this.$validator.validate().then(valid => {
                    if(valid) {
                        let data = new FormData();
                        let file = this.$refs.filePic.files[0];
                        if (file !== undefined) {
                            data.append('profile_image', this.$refs.filePic.files[0]);
                            for (let field in this.model) {
                                data.append(field, this.model[field]);
                            }
                        } else {
                            data = this.model;
                        }
                        this.submitProgress = true;

                        companyRepo.updateCompany(data)
                            .then(res => {
                                this.getcompanies();
                                this.showModal = false;
                                this.submitProgress = false;
                                this.model.name = ""
                                this.model.url = ""
                                this.model.password = ""
                                this.model.email = ""
                                this.model.company_id = ""
                                this.showModal = false;
                                this.editMode = false;
                                Vue.$toast.success('Company updated successfully');

                            })
                            .catch(err => {
                                if (err.status === 422) {
                                    Vue.$toast.error(err.data.message);
                                }
                                this.submitProgress = false;
                            })
                    }
            })
        },
        deleteCompany(row){
          let __this = this;
          this.$alertify.confirm('Delete company?',function(){
              companyRepo.deleteCompany(row.companyid)
              .then(res=>{
                let index = __this.companies.indexOf(row);
                __this.companies.splice(index,1);
                  Vue.$toast.success('Company deleted');
              })
          })

        },
        customValidator(){
            return {
                custom:{
                    name:{
                        required:"Please enter company name",
                    },
                    url:{
                        required:"Please enter company url",
                    },
                    email:{
                        required:"Please enter company email",
                    },
                    password:{
                        required: "Password is required for company admin login"
                    }
                }
            }
        }
    },
    mounted(){
      this.getcompanies();
      this.$validator.localize('en',this.customValidator());
    }
  };
</script>
<style>
    .is_invalid{
        font-size: 13px;
        color: red;
    }
</style>
