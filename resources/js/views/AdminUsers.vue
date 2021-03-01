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
                              {{title}}
                            </h3>
                          </div>
                          <div class="col text-right">
                            <base-button type="dark" size="sm" @click="showModal = true"><i class="fa fa-plus" title="Add New"></i></base-button>
                          </div>
                        </div>
                      </div>
                      <div class="table-responsive">
                              <base-table class="table align-items-center table-flush"
                                :thead-classes="'thead-light'"
                                tbody-classes="list"
                                :data="users">
                                <template slot="columns">
                                  <th>First name</th>
                                  <th>Last name</th>
                                  <th>Role</th>
                                  <th>Email</th>
                                  <th></th>
                                </template>

                                <template slot-scope="{row}">
                                  <th scope="row">
                                    <div class="media align-items-center">
                                      <a href="#" class="avatar rounded-circle mr-3">
                                        <img alt="Image placeholder" :src="row.profile_photo === null || row.profile_photo==='' ?
                                        'https://dummyimage.com/300.png/09f/fff': row.profile_photo" >

                                      </a>
                                      <div class="media-body">
                                        <span class="name mb-0 text-sm">{{row.first_name}}</span>
                                      </div>
                                    </div>
                                  </th>
                                  <td class="budget">
                                    {{row.last_name}}
                                  </td>
                                  <td>
                                    <badge class="badge-dot mr-4">

                                      <span class="status">{{row.role}}</span>
                                    </badge>
                                  </td>
                                  <td>
                                    <badge class="badge-dot mr-4">

                                      <span class="status">{{row.email}}</span>
                                    </badge>
                                  </td>
                                <td class="text-right">
                                    <base-button type="primary" class="btn btn-dark" size="sm" @click="editUser(row)" ><i class="fa fa-eraser" title="Edit"></i></base-button>
                                    <base-button v-if="row.role !=='super-admin'" type="danger" class="btn btn-danger" size="sm" @click="deleteUser(row)" ><i class="fa fa-trash" title="Delete"></i></base-button>
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
            <h2 class="text-center">{{editMode ? 'Edit User' : 'Add User'}}</h2>
              <form role="form">
                  <div class="form-group">
                  <label for="firstname">First Name</label>
                  <base-input class="input-group mb-3" id="firstname"
                                    placeholder="First name"
                                    name="first_name"
                                    v-validate="'required'"
                                    v-model="model.first_name">
                        </base-input>
                      <span class="is_invalid" v-show="errors.has('first_name')">{{errors.first('first_name')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="lastname">Last Name</label>
                  <base-input class="input-group mb-3" id="lastname"
                                    placeholder="Last name"
                                      name="last_name"
                                      v-validate="'required'"
                                    v-model="model.last_name">
                        </base-input>
                      <span class="is_invalid" v-show="errors.has('last_name')">{{errors.first('last_name')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="role">Role</label>

                        <select class="form-control mt-2" v-validate="'required'" name="role" v-model="model.role" id="role">
                            <option value="">Select role</option>
                            <option value="admin">Admin</option>
                            <option value="sub-admin">Sub Admin</option>

                        </select>
                      <span class="is_invalid" v-show="errors.has('role')">{{errors.first('role')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="email">Email</label>
                  <base-input class="input-group mb-3" id="email"
                                    placeholder="Email"
                                    name="email"
                                    v-validate="'required|email'"
                                    v-model="model.email">
                        </base-input>
                      <span class="is_invalid" v-show="errors.has('email')">{{errors.first('email')}}</span>
                  </div>
                  <div class="form-group">
                  <label for="password">Password</label>
                  <base-input class="input-group" id="password"
                                    placeholder="Password"
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
                                        <input type="file" ref="filePic" name="profile_photo" @change="onSelectedPhoto" v-show="false" />
                                        <base-button type="dark" @click="triggerUpload" v-show="!showremoveBtn" class="my-4 btn-sm">Click to select avatar</base-button>
                                        <base-button type="danger" @click="removePhoto" v-show="showremoveBtn" class="my-4 btn-sm">Remove avatar</base-button>
                                      </div>
                                    </div>

                        </div>
                        <div class="text-center">
                            <base-button type="primary"  @click.prevent="updateUser" v-show="editMode" class="my-4 btn btn-dark">{{submitProgress ? 'Please wait...' : 'Update'}}</base-button><br />
                            <base-button type="primary" @click.prevent="addUser" v-show="!editMode" class="my-4 btn btn-dark">{{submitProgress ? 'Please wait...' : 'Save'}}</base-button><br />

                        </div>
              </form>
          </modal>

    </div>
</template>
<script>
    import Vue from 'vue';
  import adminRepo from '../repository/users/AdminRepository';
  export default {
    data() {
      return {
        employees:[],
        users:[],
        title:'Admin Users',
        model:{first_name:"",last_name:"",role:"", email:"", password:"",user_id:""},
        showModal : false,
        editMode : false,
        submitProgress:false,
        showremoveBtn: false,
        logoSrc: null
      }
    },
    methods: {
        editUser(row){
            this.model.first_name = row.first_name
            this.model.last_name = row.last_name
            this.model.email = row.email
            this.model.user_id = row.user_id
            this.showModal = true;
            this.editMode = true;
        },
        closeForm(){
          this.showModal = false,
          this.editMode = this.editMode ? false : true;
        },
        getUsers(){
            adminRepo.getUsers()
            .then(res=>{
                this.users = res.data.data.users;
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
        addUser(){
            this.$validator.validate().then(valid => {
                if (valid) {
                    let data = new FormData();
                    data.append('profile_logo', this.$refs.filePic.files[0]);
                    for (let field in this.model) {
                        data.append(field, this.model[field]);
                    }
                    this.submitProgress = true;
                    adminRepo.addUser(data)
                        .then(res => {
                            this.getUsers();
                            this.showModal = false;
                            this.submitProgress = false;
                            Vue.$toast.success('User added successfully');

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
        updateUser(){
            this.$validator.validate().then(valid => {
                if (valid) {
                    let data = new FormData();
                    let file = this.$refs.filePic.files[0];
                    this.submitProgress = true;
                    adminRepo.updateUser(this.model)
                        .then(res => {
                            this.getUsers();
                            this.showModal = false;
                            this.submitProgress = false;

                            this.model.first_name = ""
                            this.model.last_name = ""
                            this.model.email = ""
                            this.model.user_id = ""
                            this.showModal = false;
                            this.editMode = false;
                            Vue.$toast.success('User updated successfully');

                        }) .catch(err => {
                        if (err.status === 422) {

                            Vue.$toast.error(err.data.message);
                        }
                        this.submitProgress = false;
                    })
                }
            })
        },
        deleteUser(row){
          let __this = this;
          this.$alertify.confirm('Delete user?',function(){
              adminRepo.deleteUser(row.user_id)
              .then(res=>{
                let index = __this.users.indexOf(row);
                __this.users.splice(index,1);
                  Vue.$toast.success('User deleted');
              })
          })
        },
        customValidator(){
            return {
                custom:{
                    first_name:{
                        required:"Please enter admin first name",
                    },
                    last_name:{
                        required:"Please enter admin last name",
                    },
                    email:{
                        required:"Please enter admin email",
                    },
                    password:{
                        required:"Please enter admin password",
                    },
                    role:{
                        required:"Please select admin role",
                    }
                }
            }
        }
    },
    mounted(){
      this.getUsers();
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
