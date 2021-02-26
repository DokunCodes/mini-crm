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
                                        <img alt="Image placeholder" :src="row.profile_photo === null ? 'https://dummyimage.com/300.png/09f/fff': row.profile_photo" >

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
                  <label for="firstname">First Name</label>
                        <base-input class="input-group mb-3" id="firstname"
                                    placeholder="First name"
                                    v-model="model.first_name">
                        </base-input>
                  <label for="lastname">Last Name</label>
                        <base-input class="input-group mb-3" id="lastname"
                                    placeholder="Last name"
                                    v-model="model.last_name">
                        </base-input>
                  <label for="email">Email</label>
                        <base-input class="input-group mb-3" id="email"
                                    placeholder="Email"
                                    v-model="model.email">
                        </base-input>
                  <label for="password">Password</label>
                        <base-input class="input-group" id="password"
                                    placeholder="Password"
                                    type="password"
                                    v-model="model.password">
                        </base-input>
                  <label for="company">Company</label>
                        <select class="form-control" v-model="model.company_id" id="company">
                            <option value="">Select company</option>
                            <option v-for="(company,index) in companies" :key="index" :value="company.companyid">{{company.name}}</option>
                        </select>

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
          this.showModal = false,
          this.editMode = this.editMode ? false : true;
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
          console.log(this.model)
          let data = new FormData();
          data.append('profile_image', this.$refs.filePic.files[0]);
            for(let field in this.model){
                data.append(field, this.model[field]);
            }
            this.submitProgress = true;
            employeeRepo.addEmployee(data)
            .then(res=>{
                this.getEmployee();
                this.showModal = false;
                this.submitProgress = false;
                this.$notify({
                  type: 'success',
                  title: 'Employee added successfully'
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
        updateEmployee(){
          let data = new FormData();
          let file = this.$refs.filePic.files[0];
            this.submitProgress = true;
            employeeRepo.updateEmployee(this.model)
            .then(res=>{
                this.getEmployee();
                this.showModal = false;
                this.submitProgress = false;
                this.model.first_name = ""
                this.model.last_name = ""
                this.model.email = ""
                this.model.user_id = ""
                this.model.company_id = ""
                this.showModal = false;
                this.editMode = false;
                this.$notify({
                  type: 'success',
                  title: 'Employee updated successfully'
                })
          })
        },
        deleteEmployee(row){
          let __this = this;
          this.$alertify.confirm('Delete employee?',function(){
              employeeRepo.deleteEmployee(row.user_id)
              .then(res=>{
                let index = __this.employees.indexOf(row);
                __this.employees.splice(index,1);
                __this.$notify({
                      type: 'success',
                      title: 'Employee deleted'
                    })
              })
          })

        }
    },
    mounted(){
      this.getEmployee();
      this.getcompanies();
    }
  };
</script>
<style></style>
