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
                           All Employees
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
                                :data="employees">
                                <template slot="columns">
                                    <th></th>
                                  <th>First name</th>
                                  <th>Last name</th>
                                  <th>Email</th>
                                  <th>Company</th>
                                  <th></th>
                                </template>

                                <template slot-scope="{row}">
                                  <th scope="row">
                                    <div class="media align-items-center">
                                      <a href="#" class="avatar rounded-circle mr-3">
                                        <img alt="Image placeholder" :src="row.profile_photo === null || row.profile_photo === ''  ?
                                        'https://dummyimage.com/250x250/780078/fff.png&text='+row.first_name : row.profile_photo" >

                                      </a>
                                    </div>
                                  </th>
                                  <td class="budget">
                                    {{row.first_name}}
                                  </td>
                                    <td class="budget">
                                        {{row.last_name}}
                                    </td>
                                    <td class="budget">
                                        {{row.email}}
                                    </td>
                                  <td>
                                    <badge class="badge-dot mr-4" :type="row.statusType">
                                      <i :class="`bg-${row.statusType}`"></i>
                                      <span class="status">{{row.company_name}}</span>
                                    </badge>
                                  </td>
                                <td class="text-right">
                                    <base-button type="primary" class="btn btn-dark" size="sm" @click="editEmployee(row)" ><i class="fa fa-eraser" title="Edit"></i></base-button>
                                    <base-button type="danger" size="sm" class="btn btn-danger" @click="deleteEmployee(row)" ><i class="fa fa-trash" title="Delete"></i></base-button>
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
            <h2 class="text-center">{{editMode ? 'Edit Employee' : 'Add Employee'}}</h2>

              <form role="form">
                  <div class="form-group">
                  <label for="firstname">First Name</label>
                        <base-input class="input-group mb-3" id="firstname"
                                    placeholder="First name" required
                                    type="text"
                                    name="first_name"
                                    v-validate="'required'"
                                    v-model="model.first_name">
                        </base-input>
                  <span class="is_invalid" v-show="errors.has('first_name')">{{errors.first('first_name')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="lastname">Last Name</label>
                        <base-input class="input-group mb-3" id="lastname"
                                    placeholder="Last name" required
                                    type="text"
                                    name="last_name"
                                    v-validate="'required'"
                                    v-model="model.last_name">
                        </base-input>
                      <span class="is_invalid" v-show="errors.has('last_name')">{{errors.first('last_name')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="email">Email</label>
                        <base-input class="input-group mb-3" id="email"
                                    name="email"
                                    placeholder="Email" type="email" required
                                    v-validate="'required|email'"
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
                  <div class="form-group">
                  <label for="company">Company</label>
                        <select class="form-control" v-validate="'required'" name="company" v-model="model.company_id" id="company" required>
                            <option value="">Select company</option>
                            <option v-for="(company,index) in companies" :key="index" :value="company.companyid">{{company.name}}</option>
                        </select>
                      <span class="is_invalid" v-show="errors.has('company')">{{errors.first('company')}}</span>
                  </div>

                        <div class="text-muted mt-2" v-show="!editMode">
                            <p>Photo</p>
                            <input type="file" ref="filePic" name="employee_photo" />
                        </div>
                        <div class="text-center mt-3">
                            <base-button type="primary" @click.prevent="updateEmployee" v-show="editMode" class="btn btn-dark">{{submitProgress ? 'Please wait...' : 'Update'}}</base-button><br />
                            <base-button type="primary" @click.prevent="addEmployee" v-show="!editMode" class="btn btn-dark">{{submitProgress ? 'Please wait...' : 'Save'}}</base-button><br />

                        </div>
              </form>
          </modal>

    </div>
</template>
<script>
    import Vue from 'vue';
  import employeeRepo from '../repository/users/EmployeeRepository';
  import companyRepo from '../repository/users/CompanyRepository';

  export default {
    data() {
      return {
        employees:[],
        companies:[],
        title:'Employee List',
        model:{first_name:"",last_name:"",company_id:"", email:"", password:"", company:"",user_id:""},
        showModal : false,
        editMode : false,
        submitProgress:false
      }
    },
    methods: {
        getEmployee(){
            employeeRepo.getEmployee()
            .then(res=>{
                this.employees = res.data.data.employees;
            })
        },
        closeForm(){
          this.showModal = false;
          this.editMode = !this.editMode;
        },
        editEmployee(row){

            this.model.first_name = row.first_name
            this.model.last_name = row.last_name
            this.model.email = row.email
            this.model.user_id = row.user_id
            this.model.company_id = row.company_id
            this.showModal = true;
            this.editMode = true;
        },
        getcompanies(){
            companyRepo.getCompanies()
            .then(res=>{
                this.companies = res.data.data.companies;
            })
        },
        addEmployee(){
            this.$validator.validate().then(valid => {
                    if(valid) {

                        let data = new FormData();
                        data.append('profile_image', this.$refs.filePic.files[0]);
                        for (let field in this.model) {
                            data.append(field, this.model[field]);
                        }
                        this.submitProgress = true;
                        employeeRepo.addEmployee(data)
                            .then(res => {
                                this.showModal = false;
                                this.submitProgress = false;

                                if(res.data.status){
                                    this.getEmployee();
                                    Vue.$toast.success('Employee added successfully');
                                }
                                else {
                                    Vue.$toast.error('Unable to add employee, please try again');
                                }

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
        updateEmployee(){
            this.$validator.validate().then(valid => {
                if (valid) {
                    this.submitProgress = true;
                    employeeRepo.updateEmployee(this.model)
                        .then(res => {

                            this.getEmployee();
                            this.showModal = false;
                            this.submitProgress = false;
                            this.model.first_name = ""
                            this.model.last_name = ""
                            this.model.email = ""
                            this.model.password = ""
                            this.model.company_id = ""
                            this.showModal = false;
                            this.editMode = false;
                            Vue.$toast.success('Employee updated successfully');
                        }).catch(err => {

                        if (err.status === 422) {
                            Vue.$toast.error(err.data.message);
                        }
                        this.submitProgress = false;
                    })
                }
            })
        },
        deleteEmployee(row){
          let __this = this;
          this.$alertify.confirm('Delete employee?',function(){
              employeeRepo.deleteEmployee(row.user_id)
              .then(res=>{
                let index = __this.employees.indexOf(row);
                __this.employees.splice(index,1);
                  Vue.$toast.success('Employee deleted');
              })
          })

        },
        customValidator(){
            return {
                custom:{
                    first_name:{
                        required:"Please enter employee first name",
                    },
                    last_name:{
                        required:"Please enter employee last name",
                    },
                    email:{
                        required:"Please enter employee email",
                    },
                    password:{
                        required:"Please enter employee password",
                    },
                    company:{
                        required:"Please select employee company",
                    }
                }
            }
        }
    },
    mounted(){
      this.getEmployee();
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
