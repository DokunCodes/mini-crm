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
                                        <img alt="Image placeholder" :src="row.company_logo === null ? 'https://dummyimage.com/300.png/09f/fff': row.company_logo" >

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
                  <label for="company">Company Name</label>
                  <base-input class="input-group mb-3" id="company"
                                    placeholder="Company name"
                                    v-model="model.name">
                        </base-input>


                  <label for="web">Website URL</label>
                  <base-input class="input-group mb-3" id="web"
                                    placeholder="Website URL"
                                    v-model="model.url">
                        </base-input>

                  <label for="email">Email</label>
                  <base-input class="input-group mb-3" id="email"
                                    placeholder="Email"
                                    v-model="model.email">
                        </base-input>


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
  import employeeRepo from '../repository/users/EmployeeRepository';
  import companyRepo from '../repository/users/CompanyRepository';
  export default {
    data() {
      return {
        employees:[],
        companies:[],
        title:'Companies List',
        model:{name:"",url:"", email:"", company:"",company_id:""},
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
          this.showModal = false,
          this.editMode = this.editMode ? false : true;
        },
        addCompany(){
          let data = new FormData();
          data.append('logo', this.$refs.filePic.files[0]);
            for(let field in this.model){
                data.append(field, this.model[field]);
            }
            this.submitProgress = true;
            companyRepo.addCompany(data)
            .then(res=>{
                this.getcompanies();
                this.showModal = false;
                this.submitProgress = false;
                this.$notify({
                  type: 'success',
                  title: 'Company added successfully'
                })
            })
            .catch(err=>{
                if(err.status === 422){
                    this.$notify({
                        type: 'danger',
                        title: err.data.message
                    })
                }
                this.submitProgress = false;
            })
        },
        updateCompany(){
          let data = new FormData();
          let file = this.$refs.filePic.files[0];
          if(file !== undefined){
              data.append('profile_image', this.$refs.filePic.files[0]);
              for(let field in this.model){
                data.append(field, this.model[field]);
              }
          }else{
            data = this.model;
          }
            this.submitProgress = true;
            companyRepo.updateCompany(data)
            .then(res=>{
                this.getcompanies();
                this.showModal = false;
                this.submitProgress = false;
                this.model.name = ""
                this.model.url = ""
                this.model.email = ""
                this.model.company_id = ""
                this.showModal = false;
                this.editMode = false;
                this.$notify({
                  type: 'success',
                  title: 'Company updated successfully'
                })
          })
        },
        deleteCompany(row){
          let __this = this;
          this.$alertify.confirm('Delete company?',function(){
              companyRepo.deleteCompany(row.companyid)
              .then(res=>{
                let index = __this.companies.indexOf(row);
                __this.companies.splice(index,1);
                __this.$notify({
                      type: 'success',
                      title: 'Company deleted'
                    })
              })
          })

        }
    },
    mounted(){
      this.getcompanies();
    }
  };
</script>
<style></style>
