(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminUsers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/AdminRepository */ "./resources/js/repository/users/AdminRepository.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employees: [],
      users: [],
      title: 'Admin Users',
      model: {
        first_name: "",
        last_name: "",
        role: "",
        email: "",
        password: "",
        user_id: ""
      },
      showModal: false,
      editMode: false,
      submitProgress: false,
      showremoveBtn: false,
      logoSrc: null
    };
  },
  methods: {
    editUser: function editUser(row) {
      this.model.first_name = row.first_name;
      this.model.last_name = row.last_name;
      this.model.email = row.email;
      this.model.user_id = row.user_id;
      this.showModal = true;
      this.editMode = true;
    },
    closeForm: function closeForm() {
      this.showModal = false, this.editMode = this.editMode ? false : true;
    },
    getUsers: function getUsers() {
      var _this = this;

      _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getUsers().then(function (res) {
        _this.users = res.data.data.users;
      });
    },
    triggerUpload: function triggerUpload() {
      this.$refs.filePic.click();
    },
    onSelectedPhoto: function onSelectedPhoto(e) {
      this.logoSrc = URL.createObjectURL(e.target.files[0]);
      this.showremoveBtn = true;
    },
    removePhoto: function removePhoto() {
      this.showremoveBtn = false;
      this.logoSrc = null;
    },
    addUser: function addUser() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var data = new FormData();
          data.append('profile_logo', _this2.$refs.filePic.files[0]);

          for (var field in _this2.model) {
            data.append(field, _this2.model[field]);
          }

          _this2.submitProgress = true;
          _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_1__["default"].addUser(data).then(function (res) {
            _this2.getUsers();

            _this2.showModal = false;
            _this2.submitProgress = false;
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('User added successfully');
          })["catch"](function (err) {
            if (err.status === 422) {
              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.error(err.data.message);
            }

            _this2.submitProgress = false;
          });
        }
      });
    },
    updateUser: function updateUser() {
      var _this3 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var data = new FormData();
          var file = _this3.$refs.filePic.files[0];
          _this3.submitProgress = true;
          _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_1__["default"].updateUser(_this3.model).then(function (res) {
            _this3.getUsers();

            _this3.showModal = false;
            _this3.submitProgress = false;
            _this3.model.first_name = "";
            _this3.model.last_name = "";
            _this3.model.email = "";
            _this3.model.user_id = "";
            _this3.showModal = false;
            _this3.editMode = false;
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('User updated successfully');
          })["catch"](function (err) {
            if (err.status === 422) {
              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.error(err.data.message);
            }

            _this3.submitProgress = false;
          });
        }
      });
    },
    deleteUser: function deleteUser(row) {
      var __this = this;

      this.$alertify.confirm('Delete user?', function () {
        _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_1__["default"].deleteUser(row.user_id).then(function (res) {
          var index = __this.users.indexOf(row);

          __this.users.splice(index, 1);

          vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('User deleted');
        });
      });
    },
    customValidator: function customValidator() {
      return {
        custom: {
          first_name: {
            required: "Please enter admin first name"
          },
          last_name: {
            required: "Please enter admin last name"
          },
          email: {
            required: "Please enter admin email"
          },
          password: {
            required: "Please enter admin password"
          },
          role: {
            required: "Please select admin role"
          }
        }
      };
    }
  },
  mounted: function mounted() {
    this.getUsers();
    this.$validator.localize('en', this.customValidator());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employees: [],
      companies: [],
      title: 'Companies List',
      model: {
        name: "",
        url: "",
        email: "",
        company: "",
        password: "",
        company_id: ""
      },
      showModal: false,
      editMode: false,
      submitProgress: false,
      showremoveBtn: false,
      logoSrc: null
    };
  },
  methods: {
    editCompany: function editCompany(row) {
      this.model.name = row.name;
      this.model.url = row.url;
      this.model.email = row.email;
      this.model.company_id = row.companyid;
      this.showModal = true;
      this.editMode = true;
    },
    getcompanies: function getcompanies() {
      var _this = this;

      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getCompanies().then(function (res) {
        _this.companies = res.data.data.companies;
      });
    },
    triggerUpload: function triggerUpload() {
      this.$refs.filePic.click();
    },
    onSelectedPhoto: function onSelectedPhoto(e) {
      this.logoSrc = URL.createObjectURL(e.target.files[0]);
      this.showremoveBtn = true;
    },
    removePhoto: function removePhoto() {
      this.showremoveBtn = false;
      this.logoSrc = null;
    },
    closeForm: function closeForm() {
      this.showModal = false;
      this.editMode = !this.editMode;
    },
    addCompany: function addCompany() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var data = new FormData();
          data.append('logo', _this2.$refs.filePic.files[0]);

          for (var field in _this2.model) {
            data.append(field, _this2.model[field]);
          }

          _this2.submitProgress = true;
          _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].addCompany(data).then(function (res) {
            _this2.getcompanies();

            _this2.showModal = false;
            _this2.submitProgress = false;
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('Company added successfully');
          })["catch"](function (err) {
            if (err.status === 422) {
              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.error(err.data.message);
            }

            _this2.submitProgress = false;
          });
        }
      });
    },
    updateCompany: function updateCompany() {
      var _this3 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var data = new FormData();
          var file = _this3.$refs.filePic.files[0];

          if (file !== undefined) {
            data.append('profile_image', _this3.$refs.filePic.files[0]);

            for (var field in _this3.model) {
              data.append(field, _this3.model[field]);
            }
          } else {
            data = _this3.model;
          }

          _this3.submitProgress = true;
          _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].updateCompany(data).then(function (res) {
            _this3.getcompanies();

            _this3.showModal = false;
            _this3.submitProgress = false;
            _this3.model.name = "";
            _this3.model.url = "";
            _this3.model.password = "";
            _this3.model.email = "";
            _this3.model.company_id = "";
            _this3.showModal = false;
            _this3.editMode = false;
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('Company updated successfully');
          })["catch"](function (err) {
            if (err.status === 422) {
              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.error(err.data.message);
            }

            _this3.submitProgress = false;
          });
        }
      });
    },
    deleteCompany: function deleteCompany(row) {
      var __this = this;

      this.$alertify.confirm('Delete company?', function () {
        _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].deleteCompany(row.companyid).then(function (res) {
          var index = __this.companies.indexOf(row);

          __this.companies.splice(index, 1);

          vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('Company deleted');
        });
      });
    },
    customValidator: function customValidator() {
      return {
        custom: {
          name: {
            required: "Please enter company name"
          },
          url: {
            required: "Please enter company url"
          },
          email: {
            required: "Please enter company email"
          },
          password: {
            required: "Password is required for company admin login"
          }
        }
      };
    }
  },
  mounted: function mounted() {
    this.getcompanies();
    this.$validator.localize('en', this.customValidator());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repository/users/EmployeeRepository */ "./resources/js/repository/users/EmployeeRepository.js");
/* harmony import */ var _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/AdminRepository */ "./resources/js/repository/users/AdminRepository.js");
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employee: 0,
      companies: 0,
      users: 0,
      admin_users: 0
    };
  },
  methods: {},
  mounted: function mounted() {
    var _this = this;

    _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_0__["default"].getEmployee().then(function (res) {
      _this.employee = res.data.data.employees.length;
    });
    _repository_users_AdminRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getUsers().then(function (res) {
      _this.admin_users = res.data.data.users.length;
    });
    _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getCompanies().then(function (res) {
      _this.companies = res.data.data.companies.length;
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Employee.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/EmployeeRepository */ "./resources/js/repository/users/EmployeeRepository.js");
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      employees: [],
      companies: [],
      title: 'Employee List',
      model: {
        first_name: "",
        last_name: "",
        company_id: "",
        email: "",
        password: "",
        company: "",
        user_id: ""
      },
      showModal: false,
      editMode: false,
      submitProgress: false
    };
  },
  methods: {
    getEmployee: function getEmployee() {
      var _this = this;

      _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getEmployee().then(function (res) {
        _this.employees = res.data.data.employees;
      });
    },
    closeForm: function closeForm() {
      this.showModal = false;
      this.editMode = !this.editMode;
    },
    editEmployee: function editEmployee(row) {
      this.model.first_name = row.first_name;
      this.model.last_name = row.last_name;
      this.model.email = row.email;
      this.model.user_id = row.user_id;
      this.model.company_id = row.company_id;
      this.showModal = true;
      this.editMode = true;
    },
    getcompanies: function getcompanies() {
      var _this2 = this;

      _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_2__["default"].getCompanies().then(function (res) {
        _this2.companies = res.data.data.companies;
      });
    },
    addEmployee: function addEmployee() {
      var _this3 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          var data = new FormData();
          data.append('profile_image', _this3.$refs.filePic.files[0]);

          for (var field in _this3.model) {
            data.append(field, _this3.model[field]);
          }

          _this3.submitProgress = true;
          _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_1__["default"].addEmployee(data).then(function (res) {
            _this3.showModal = false;
            _this3.submitProgress = false;

            if (res.data.status) {
              _this3.getEmployee();

              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('Employee added successfully');
            } else {
              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.error('Unable to add employee, please try again');
            }
          })["catch"](function (err) {
            if (err.status === 422) {
              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.error(err.data.message);
            }

            _this3.submitProgress = false;
          });
        }
      });
    },
    updateEmployee: function updateEmployee() {
      var _this4 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this4.submitProgress = true;
          _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_1__["default"].updateEmployee(_this4.model).then(function (res) {
            _this4.getEmployee();

            _this4.showModal = false;
            _this4.submitProgress = false;
            _this4.model.first_name = "";
            _this4.model.last_name = "";
            _this4.model.email = "";
            _this4.model.password = "";
            _this4.model.company_id = "";
            _this4.showModal = false;
            _this4.editMode = false;
            vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('Employee updated successfully');
          })["catch"](function (err) {
            if (err.status === 422) {
              vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.error(err.data.message);
            }

            _this4.submitProgress = false;
          });
        }
      });
    },
    deleteEmployee: function deleteEmployee(row) {
      var __this = this;

      this.$alertify.confirm('Delete employee?', function () {
        _repository_users_EmployeeRepository__WEBPACK_IMPORTED_MODULE_1__["default"].deleteEmployee(row.user_id).then(function (res) {
          var index = __this.employees.indexOf(row);

          __this.employees.splice(index, 1);

          vue__WEBPACK_IMPORTED_MODULE_0___default.a.$toast.success('Employee deleted');
        });
      });
    },
    customValidator: function customValidator() {
      return {
        custom: {
          first_name: {
            required: "Please enter employee first name"
          },
          last_name: {
            required: "Please enter employee last name"
          },
          email: {
            required: "Please enter employee email"
          },
          password: {
            required: "Please enter employee password"
          },
          company: {
            required: "Please select employee company"
          }
        }
      };
    }
  },
  mounted: function mounted() {
    this.getEmployee();
    this.getcompanies();
    this.$validator.localize('en', this.customValidator());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repository/users/CompanyRepository */ "./resources/js/repository/users/CompanyRepository.js");
/* harmony import */ var _repository_users_UserRepository__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository/users/UserRepository */ "./resources/js/repository/users/UserRepository.js");
/* harmony import */ var _services_TokenService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/TokenService */ "./resources/js/services/TokenService.js");
/* harmony import */ var _services_TokenService__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_services_TokenService__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_ToastF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/ToastF */ "./resources/js/plugins/ToastF.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      companies: [],
      title: 'Company List',
      listData: [],
      size: 5,
      pageNumber: 0,
      model: {
        email: '',
        password: ''
      }
    };
  },
  methods: {
    getcompanies: function getcompanies() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _repository_users_CompanyRepository__WEBPACK_IMPORTED_MODULE_1__["default"].getPublicCompanies();

              case 2:
                res = _context.sent;
                _this.companies = res.data.data.companies;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    nextPage: function nextPage() {
      this.pageNumber === Math.round(this.companies.length / this.size) - 1 ? '' : this.pageNumber++;
    },
    prevPage: function prevPage() {
      this.pageNumber === 0 ? '' : this.pageNumber--;
    },
    pageCount: function pageCount() {
      var l = this.companies.length,
          s = this.size;
      return Math.ceil(l / s);
    },
    paginatedData: function paginatedData() {
      var start = this.pageNumber * this.size,
          end = start + this.size;
      return this.companies.slice(start, end);
    },
    loginUser: function loginUser() {
      var _this2 = this;

      this.$validator.validate().then(function (valid) {
        if (valid) {
          _this2.buttonText = "Please wait...";
          _repository_users_UserRepository__WEBPACK_IMPORTED_MODULE_2__["default"].login(_this2.model).then(function (res) {
            _this2.buttonText = "Sign In";
            var userData = res.data.data.user;
            _services_TokenService__WEBPACK_IMPORTED_MODULE_3___default.a.setUserData({
              name: userData.name,
              acct_type: userData.acct_type
            });
            _services_TokenService__WEBPACK_IMPORTED_MODULE_3___default.a.setAccessToken(res.data.data.token);
            Object(_plugins_ToastF__WEBPACK_IMPORTED_MODULE_4__["default"])({
              message: "Login successful",
              type: 'success',
              animation: 'slide'
            });

            if (userData.acct_type === "admin") {
              window.location.href = "dashboard";
            } else {
              window.location.href = "./profile";
            }
          })["catch"](function (err) {
            if (err.status === 404) {
              Object(_plugins_ToastF__WEBPACK_IMPORTED_MODULE_4__["default"])({
                message: "Account not found",
                type: 'danger',
                animation: 'slide'
              });
            }

            if (err.status === 401) {
              Object(_plugins_ToastF__WEBPACK_IMPORTED_MODULE_4__["default"])({
                message: "Invalid login",
                type: 'danger',
                animation: 'slide'
              });
            }

            _this2.buttonText = "Sign in";
          });
        }
      });
    },
    customValidator: function customValidator() {
      return {
        custom: {
          email: {
            required: "Please enter email"
          },
          password: {
            required: "Please enter password"
          }
        }
      };
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.getcompanies();

            case 2:
              //initilaize the validator
              _this3.$validator.localize('en', _this3.customValidator());

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.is_invalid{\n    font-size: 13px;\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.is_invalid{\n    font-size: 13px;\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.is_invalid{\n    font-size: 13px;\n    color: red;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\nbody[data-v-2ad93e50] {\n    font-family: \"Karla\", sans-serif;\n    background-color: #fff;\n    min-height: 100vh;\n}\n.info[data-v-2ad93e50]{\n    margin-top: -150px;\n    color: #ffffff;\n}\n.brand-wrapper[data-v-2ad93e50] {\n    padding-top: 7px;\n    padding-bottom: 8px;\n}\n.brand-wrapper .logo[data-v-2ad93e50] {\n    height: 45px;\n}\n.login-section-wrapper[data-v-2ad93e50] {\n    display: flex;\n    flex-direction: column;\n    padding: 68px 100px;\n    background-color: #fff;\n}\n@media (max-width: 991px) {\n.login-section-wrapper[data-v-2ad93e50] {\n        padding-left: 50px;\n        padding-right: 50px;\n}\n#quote-carousel .active[data-v-2ad93e50] {\n        width: 60px !important;\n        height: 60px !important;\n}\n.company[data-v-2ad93e50]{\n        max-width: 60px !important;\n}\n}\n@media (max-width: 1024px) {\n#quote-carousel .active[data-v-2ad93e50] {\n        width: 60px !important;\n        height: 60px !important;\n}\n.company[data-v-2ad93e50]{\n        max-width: 60px !important;\n}\n}\n@media (max-width: 575px) {\n.login-section-wrapper[data-v-2ad93e50] {\n        padding-top: 20px;\n        padding-bottom: 20px;\n        min-height: 100vh;\n}\n}\n.login-wrapper[data-v-2ad93e50] {\n    width: 300px;\n    max-width: 100%;\n    padding-top: 24px;\n    padding-bottom: 24px;\n}\n@media (max-width: 575px) {\n.login-wrapper[data-v-2ad93e50] {\n        width: 100%;\n}\n}\n.login-wrapper label[data-v-2ad93e50] {\n    font-size: 14px;\n    font-weight: bold;\n    color: #b0adad;\n}\n.login-wrapper .form-control[data-v-2ad93e50] {\n    border: none;\n    border-bottom: 1px solid #e7e7e7;\n    border-radius: 0;\n    padding: 9px 5px;\n    min-height: 40px;\n    font-size: 18px;\n    font-weight: normal;\n}\n.login-wrapper .form-control[data-v-2ad93e50]::-webkit-input-placeholder {\n    color: #b0adad;\n}\n.login-wrapper .form-control[data-v-2ad93e50]::-moz-placeholder {\n    color: #b0adad;\n}\n.login-wrapper .form-control[data-v-2ad93e50]:-ms-input-placeholder {\n    color: #b0adad;\n}\n.login-wrapper .form-control[data-v-2ad93e50]::-ms-input-placeholder {\n    color: #b0adad;\n}\n.login-wrapper .form-control[data-v-2ad93e50]::placeholder {\n    color: #b0adad;\n}\n.login-wrapper .login-btn[data-v-2ad93e50] {\n    padding: 13px 20px;\n    background-color: #f33;\n    border-radius: 0;\n    font-size: 20px;\n    font-weight: bold;\n    color: #fff;\n    margin-bottom: 14px;\n}\n.login-wrapper .login-btn[data-v-2ad93e50]:hover {\n    border: 1px solid #f33;\n    background-color: #fff;\n    color: #f33;\n}\n.login-wrapper a.forgot-password-link[data-v-2ad93e50] {\n    color: #080808;\n    font-size: 14px;\n    text-decoration: underline;\n    display: inline-block;\n    margin-bottom: 54px;\n}\n@media (max-width: 575px) {\n.login-wrapper a.forgot-password-link[data-v-2ad93e50] {\n        margin-bottom: 16px;\n}\n}\n.login-wrapper-footer-text[data-v-2ad93e50] {\n    font-size: 16px;\n    color: #000;\n    margin-bottom: 0;\n}\n.company[data-v-2ad93e50]{\n    position: relative;\n    z-index: 9999;\n    display: flex;\n    flex: 1;\n    max-width: 100px;\n}\n.login-title[data-v-2ad93e50] {\n    font-size: 30px;\n    color: #000;\n    font-weight: bold;\n    margin-bottom: 25px;\n}\n.login-img[data-v-2ad93e50] {\n    width: 100%;\n    height: 100vh;\n    -o-object-fit: cover;\n    object-fit: cover;\n    -o-object-position: left;\n    object-position: left;\n}\n.carousel[data-v-2ad93e50]{\n    width: 100% !important;\n    position: absolute;\n    bottom: 5%;\n}\n#quote-carousel[data-v-2ad93e50] {\n    padding: 0 10px 20px 10px;\n}\n#quote-carousel .carousel-control[data-v-2ad93e50] {\n    background: none;\n    color: #f33;\n    font-size: 2.3em;\n    text-shadow: none;\n    margin-top: -60px;\n    z-index: 999;\n}\n#quote-carousel .carousel-control.left[data-v-2ad93e50] {\n    position: absolute;\n    left: 5px;\n}\n#quote-carousel .carousel-control.right[data-v-2ad93e50] {\n    position: absolute;\n    right: 5px;\n}\n#quote-carousel[data-v-2ad93e50] {\n    top: auto;\n    bottom: 0;\n    margin-right: -19px;\n}\n#quote-carousel li[data-v-2ad93e50] {\n    width: 50px;\n    height: 50px;\n    margin: 5px;\n    cursor: pointer;\n    border: 4px solid #CCC;\n    border-radius: 50px;\n    opacity: 0.4;\n    overflow: hidden;\n    transition: all 0.4s;\n}\n#quote-carousel .active[data-v-2ad93e50] {\n    background: #333333;\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border-color: #f33;\n    opacity: .9;\n    overflow: hidden;\n}\n.is_invalid[data-v-2ad93e50]{\n    font-size: 13px;\n    color: red;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450& ***!
  \********************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "white" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _c("div", { staticClass: "col" }, [
                    _c("h3", { staticClass: "mb-0" }, [
                      _vm._v(
                        "\n                          " +
                          _vm._s(_vm.title) +
                          "\n                        "
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col text-right" },
                    [
                      _c(
                        "base-button",
                        {
                          attrs: { type: "dark", size: "sm" },
                          on: {
                            click: function($event) {
                              _vm.showModal = true
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { title: "Add New" }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [
                  _c(
                    "base-table",
                    {
                      staticClass: "table align-items-center table-flush",
                      attrs: {
                        "thead-classes": "thead-light",
                        "tbody-classes": "list",
                        data: _vm.users
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var row = ref.row
                            return [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "avatar rounded-circle mr-3",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            alt: "Image placeholder",
                                            src:
                                              row.profile_photo === null ||
                                              row.profile_photo === ""
                                                ? "https://dummyimage.com/300.png/09f/fff"
                                                : row.profile_photo
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "media-body" }, [
                                      _c(
                                        "span",
                                        { staticClass: "name mb-0 text-sm" },
                                        [_vm._v(_vm._s(row.first_name))]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(row.last_name) +
                                    "\n                              "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.role))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.email))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "base-button",
                                    {
                                      staticClass: "btn btn-dark",
                                      attrs: { type: "primary", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editUser(row)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-eraser",
                                        attrs: { title: "Edit" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  row.role !== "super-admin"
                                    ? _c(
                                        "base-button",
                                        {
                                          staticClass: "btn btn-danger",
                                          attrs: { type: "danger", size: "sm" },
                                          on: {
                                            click: function($event) {
                                              return _vm.deleteUser(row)
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fa fa-trash",
                                            attrs: { title: "Delete" }
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _c("template", { slot: "columns" }, [
                        _c("th", [_vm._v("First name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Last name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Role")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.showModal } }, [
        _c("p", { staticClass: "text-right" }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.closeForm($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-times-circle",
                staticStyle: { color: "red", "font-size": "25px" }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "text-center" }, [
          _vm._v(_vm._s(_vm.editMode ? "Edit User" : "Add User"))
        ]),
        _vm._v(" "),
        _c("form", { attrs: { role: "form" } }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "firstname" } }, [
                _vm._v("First Name")
              ]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: {
                  id: "firstname",
                  placeholder: "First name",
                  name: "first_name"
                },
                model: {
                  value: _vm.model.first_name,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "first_name", $$v)
                  },
                  expression: "model.first_name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("first_name"),
                      expression: "errors.has('first_name')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("first_name")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "lastname" } }, [
                _vm._v("Last Name")
              ]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: {
                  id: "lastname",
                  placeholder: "Last name",
                  name: "last_name"
                },
                model: {
                  value: _vm.model.last_name,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "last_name", $$v)
                  },
                  expression: "model.last_name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("last_name"),
                      expression: "errors.has('last_name')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("last_name")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "role" } }, [_vm._v("Role")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  },
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.role,
                    expression: "model.role"
                  }
                ],
                staticClass: "form-control mt-2",
                attrs: { name: "role", id: "role" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.model,
                      "role",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [_vm._v("Select role")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "admin" } }, [_vm._v("Admin")]),
                _vm._v(" "),
                _c("option", { attrs: { value: "sub-admin" } }, [
                  _vm._v("Sub Admin")
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("role"),
                    expression: "errors.has('role')"
                  }
                ],
                staticClass: "is_invalid"
              },
              [_vm._v(_vm._s(_vm.errors.first("role")))]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: { id: "email", placeholder: "Email", name: "email" },
                model: {
                  value: _vm.model.email,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "email", $$v)
                  },
                  expression: "model.email"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("email")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group",
                attrs: {
                  id: "password",
                  placeholder: "Password",
                  name: "password",
                  type: "password"
                },
                model: {
                  value: _vm.model.password,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "password", $$v)
                  },
                  expression: "model.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("password")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.editMode,
                  expression: "!editMode"
                }
              ],
              staticClass: "text-muted mt-2"
            },
            [
              _c("div", { staticClass: "media align-items-center" }, [
                _c(
                  "a",
                  {
                    staticClass: "avatar rounded-circle mr-3",
                    attrs: { href: "#" }
                  },
                  [
                    _vm.logoSrc
                      ? _c("img", { attrs: { alt: "logo", src: _vm.logoSrc } })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "media-body" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false"
                        }
                      ],
                      ref: "filePic",
                      attrs: { type: "file", name: "profile_photo" },
                      on: { change: _vm.onSelectedPhoto }
                    }),
                    _vm._v(" "),
                    _c(
                      "base-button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.showremoveBtn,
                            expression: "!showremoveBtn"
                          }
                        ],
                        staticClass: "my-4 btn-sm",
                        attrs: { type: "dark" },
                        on: { click: _vm.triggerUpload }
                      },
                      [_vm._v("Click to select avatar")]
                    ),
                    _vm._v(" "),
                    _c(
                      "base-button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showremoveBtn,
                            expression: "showremoveBtn"
                          }
                        ],
                        staticClass: "my-4 btn-sm",
                        attrs: { type: "danger" },
                        on: { click: _vm.removePhoto }
                      },
                      [_vm._v("Remove avatar")]
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c(
                "base-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editMode,
                      expression: "editMode"
                    }
                  ],
                  staticClass: "my-4 btn btn-dark",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.updateUser($event)
                    }
                  }
                },
                [
                  _vm._v(
                    _vm._s(_vm.submitProgress ? "Please wait..." : "Update")
                  )
                ]
              ),
              _c("br"),
              _vm._v(" "),
              _c(
                "base-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.editMode,
                      expression: "!editMode"
                    }
                  ],
                  staticClass: "my-4 btn btn-dark",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.addUser($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.submitProgress ? "Please wait..." : "Save"))]
              ),
              _c("br")
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=template&id=06576ba4&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Company.vue?vue&type=template&id=06576ba4& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "white" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col text-right" },
                    [
                      _c(
                        "base-button",
                        {
                          staticClass: "btn btn-dark",
                          attrs: { type: "primary", size: "sm" },
                          on: {
                            click: function($event) {
                              _vm.showModal = true
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { title: "Add New" }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [
                  _c(
                    "base-table",
                    {
                      staticClass: "table align-items-center table-flush",
                      attrs: {
                        "thead-classes": "thead-light",
                        "tbody-classes": "list",
                        data: _vm.companies
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var row = ref.row
                            return [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "avatar rounded-circle mr-3",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            alt: "Image placeholder",
                                            src:
                                              row.company_logo === null ||
                                              row.company_logo === ""
                                                ? "https://dummyimage.com/250x250/003852/fff.png&text=" +
                                                  row.name
                                                : row.company_logo
                                          }
                                        })
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "media-body" }, [
                                      _c(
                                        "span",
                                        { staticClass: "name mb-0 text-sm" },
                                        [_vm._v(_vm._s(row.name))]
                                      )
                                    ])
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.url))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.employee_count))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    { staticClass: "badge-dot mr-4" },
                                    [
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.email))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "base-button",
                                    {
                                      staticClass: "btn btn-dark",
                                      attrs: { type: "primary", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editCompany(row)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-eraser",
                                        attrs: { title: "Edit" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "base-button",
                                    {
                                      staticClass: "btn btn-danger",
                                      attrs: { type: "danger", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteCompany(row)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-trash",
                                        attrs: { title: "Delete" }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _c("template", { slot: "columns" }, [
                        _c("th", [_vm._v("Company name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Url")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Employees")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.showModal } }, [
        _c("p", { staticClass: "text-right" }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.closeForm($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-times-circle",
                staticStyle: { color: "red", "font-size": "25px" }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "text-center" }, [
          _vm._v(_vm._s(_vm.editMode ? "Edit Company" : "Add Company"))
        ]),
        _vm._v(" "),
        _c("form", { attrs: { role: "form" } }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "company" } }, [
                _vm._v("Company Name")
              ]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: {
                  id: "company",
                  placeholder: "Company name",
                  name: "name"
                },
                model: {
                  value: _vm.model.name,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "name", $$v)
                  },
                  expression: "model.name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("name"),
                      expression: "errors.has('name')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("name")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "web" } }, [_vm._v("Website URL")]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: { id: "web", placeholder: "Website URL", name: "url" },
                model: {
                  value: _vm.model.url,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "url", $$v)
                  },
                  expression: "model.url"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("url"),
                      expression: "errors.has('url')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("url")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: { id: "email", placeholder: "Email", name: "email" },
                model: {
                  value: _vm.model.email,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "email", $$v)
                  },
                  expression: "model.email"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("email")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group",
                attrs: {
                  id: "password",
                  placeholder: "Password",
                  required: "",
                  name: "password",
                  type: "password"
                },
                model: {
                  value: _vm.model.password,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "password", $$v)
                  },
                  expression: "model.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("password")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.editMode,
                  expression: "!editMode"
                }
              ],
              staticClass: "text-muted mt-2"
            },
            [
              _c("div", { staticClass: "media align-items-center" }, [
                _c(
                  "a",
                  {
                    staticClass: "avatar rounded-circle mr-3",
                    attrs: { href: "#" }
                  },
                  [
                    _vm.logoSrc
                      ? _c("img", { attrs: { alt: "logo", src: _vm.logoSrc } })
                      : _vm._e()
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "media-body" },
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: false,
                          expression: "false"
                        }
                      ],
                      ref: "filePic",
                      attrs: { type: "file", name: "company_photo" },
                      on: { change: _vm.onSelectedPhoto }
                    }),
                    _vm._v(" "),
                    _c(
                      "base-button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: !_vm.showremoveBtn,
                            expression: "!showremoveBtn"
                          }
                        ],
                        staticClass: "my-4 btn-sm",
                        attrs: { type: "dark" },
                        on: { click: _vm.triggerUpload }
                      },
                      [_vm._v("Click to select")]
                    ),
                    _vm._v(" "),
                    _c(
                      "base-button",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.showremoveBtn,
                            expression: "showremoveBtn"
                          }
                        ],
                        staticClass: "my-4 btn-sm",
                        attrs: { type: "danger" },
                        on: { click: _vm.removePhoto }
                      },
                      [_vm._v("Remove Logo")]
                    )
                  ],
                  1
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center mt-3" },
            [
              _c(
                "base-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editMode,
                      expression: "editMode"
                    }
                  ],
                  staticClass: "btn btn-dark",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.updateCompany($event)
                    }
                  }
                },
                [
                  _vm._v(
                    _vm._s(_vm.submitProgress ? "Please wait..." : "Update")
                  )
                ]
              ),
              _c("br"),
              _vm._v(" "),
              _c(
                "base-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.editMode,
                      expression: "!editMode"
                    }
                  ],
                  staticClass: "btn btn-dark",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.addCompany($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.submitProgress ? "Please wait..." : "Save"))]
              ),
              _c("br")
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [
        _vm._v(
          "\n                         All Companies\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8 pt-10",
          attrs: { type: "white" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4" },
              [
                _c("stats-card", {
                  staticClass: "mb-4 mb-xl-0",
                  attrs: {
                    title: "Admin Users",
                    type: "gradient-info",
                    "sub-title": "" + _vm.admin_users,
                    icon: "fa fa-user-circle",
                    color: "success"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4" },
              [
                _c("stats-card", {
                  staticClass: "mb-4 mb-xl-0",
                  attrs: {
                    title: "Employees",
                    type: "gradient-green",
                    "sub-title": "" + _vm.employee,
                    icon: "fa fa-users",
                    color: "danger"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-4 col-lg-4" },
              [
                _c("stats-card", {
                  staticClass: "mb-4 mb-xl-0",
                  attrs: {
                    title: "Companies",
                    type: "gradient-red",
                    "sub-title": "" + _vm.companies,
                    icon: "fa fa-map-pin",
                    color: "primary"
                  }
                })
              ],
              1
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=template&id=37d83866&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Employee.vue?vue&type=template&id=37d83866& ***!
  \******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("base-header", {
        staticClass: "pb-6 pb-8 pt-5 pt-md-8",
        attrs: { type: "white" }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _c("div", { staticClass: "card-header border-0" }, [
                _c("div", { staticClass: "row align-items-center" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col text-right" },
                    [
                      _c(
                        "base-button",
                        {
                          staticClass: "btn btn-dark",
                          attrs: { type: "primary", size: "sm" },
                          on: {
                            click: function($event) {
                              _vm.showModal = true
                            }
                          }
                        },
                        [
                          _c("i", {
                            staticClass: "fa fa-plus",
                            attrs: { title: "Add New" }
                          })
                        ]
                      )
                    ],
                    1
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "table-responsive" },
                [
                  _c(
                    "base-table",
                    {
                      staticClass: "table align-items-center table-flush",
                      attrs: {
                        "thead-classes": "thead-light",
                        "tbody-classes": "list",
                        data: _vm.employees
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "default",
                          fn: function(ref) {
                            var row = ref.row
                            return [
                              _c("th", { attrs: { scope: "row" } }, [
                                _c(
                                  "div",
                                  { staticClass: "media align-items-center" },
                                  [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "avatar rounded-circle mr-3",
                                        attrs: { href: "#" }
                                      },
                                      [
                                        _c("img", {
                                          attrs: {
                                            alt: "Image placeholder",
                                            src:
                                              row.profile_photo === null ||
                                              row.profile_photo === ""
                                                ? "https://dummyimage.com/250x250/780078/fff.png&text=" +
                                                  row.first_name
                                                : row.profile_photo
                                          }
                                        })
                                      ]
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(row.first_name) +
                                    "\n                              "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(row.last_name) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", { staticClass: "budget" }, [
                                _vm._v(
                                  "\n                                    " +
                                    _vm._s(row.email) +
                                    "\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c(
                                    "badge",
                                    {
                                      staticClass: "badge-dot mr-4",
                                      attrs: { type: row.statusType }
                                    },
                                    [
                                      _c("i", {
                                        class: "bg-" + row.statusType
                                      }),
                                      _vm._v(" "),
                                      _c("span", { staticClass: "status" }, [
                                        _vm._v(_vm._s(row.company_name))
                                      ])
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                { staticClass: "text-right" },
                                [
                                  _c(
                                    "base-button",
                                    {
                                      staticClass: "btn btn-dark",
                                      attrs: { type: "primary", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.editEmployee(row)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-eraser",
                                        attrs: { title: "Edit" }
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "base-button",
                                    {
                                      staticClass: "btn btn-danger",
                                      attrs: { type: "danger", size: "sm" },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteEmployee(row)
                                        }
                                      }
                                    },
                                    [
                                      _c("i", {
                                        staticClass: "fa fa-trash",
                                        attrs: { title: "Delete" }
                                      })
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          }
                        }
                      ])
                    },
                    [
                      _c("template", { slot: "columns" }, [
                        _c("th"),
                        _vm._v(" "),
                        _c("th", [_vm._v("First name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Last name")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Email")]),
                        _vm._v(" "),
                        _c("th", [_vm._v("Company")]),
                        _vm._v(" "),
                        _c("th")
                      ])
                    ],
                    2
                  )
                ],
                1
              )
            ])
          ])
        ])
      ]),
      _vm._v(" "),
      _c("modal", { attrs: { show: _vm.showModal } }, [
        _c("p", { staticClass: "text-right" }, [
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.closeForm($event)
                }
              }
            },
            [
              _c("i", {
                staticClass: "fa fa-times-circle",
                staticStyle: { color: "red", "font-size": "25px" }
              })
            ]
          )
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "text-center" }, [
          _vm._v(_vm._s(_vm.editMode ? "Edit Employee" : "Add Employee"))
        ]),
        _vm._v(" "),
        _c("form", { attrs: { role: "form" } }, [
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "firstname" } }, [
                _vm._v("First Name")
              ]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: {
                  id: "firstname",
                  placeholder: "First name",
                  required: "",
                  type: "text",
                  name: "first_name"
                },
                model: {
                  value: _vm.model.first_name,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "first_name", $$v)
                  },
                  expression: "model.first_name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("first_name"),
                      expression: "errors.has('first_name')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("first_name")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "lastname" } }, [
                _vm._v("Last Name")
              ]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: {
                  id: "lastname",
                  placeholder: "Last name",
                  required: "",
                  type: "text",
                  name: "last_name"
                },
                model: {
                  value: _vm.model.last_name,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "last_name", $$v)
                  },
                  expression: "model.last_name"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("last_name"),
                      expression: "errors.has('last_name')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("last_name")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required|email",
                    expression: "'required|email'"
                  }
                ],
                staticClass: "input-group mb-3",
                attrs: {
                  id: "email",
                  name: "email",
                  placeholder: "Email",
                  type: "email",
                  required: ""
                },
                model: {
                  value: _vm.model.email,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "email", $$v)
                  },
                  expression: "model.email"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("email"),
                      expression: "errors.has('email')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("email")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "form-group" },
            [
              _c("label", { attrs: { for: "password" } }, [_vm._v("Password")]),
              _vm._v(" "),
              _c("base-input", {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  }
                ],
                staticClass: "input-group",
                attrs: {
                  id: "password",
                  placeholder: "Password",
                  required: "",
                  name: "password",
                  type: "password"
                },
                model: {
                  value: _vm.model.password,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "password", $$v)
                  },
                  expression: "model.password"
                }
              }),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.errors.has("password"),
                      expression: "errors.has('password')"
                    }
                  ],
                  staticClass: "is_invalid"
                },
                [_vm._v(_vm._s(_vm.errors.first("password")))]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "company" } }, [_vm._v("Company")]),
            _vm._v(" "),
            _c(
              "select",
              {
                directives: [
                  {
                    name: "validate",
                    rawName: "v-validate",
                    value: "required",
                    expression: "'required'"
                  },
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.model.company_id,
                    expression: "model.company_id"
                  }
                ],
                staticClass: "form-control",
                attrs: { name: "company", id: "company", required: "" },
                on: {
                  change: function($event) {
                    var $$selectedVal = Array.prototype.filter
                      .call($event.target.options, function(o) {
                        return o.selected
                      })
                      .map(function(o) {
                        var val = "_value" in o ? o._value : o.value
                        return val
                      })
                    _vm.$set(
                      _vm.model,
                      "company_id",
                      $event.target.multiple ? $$selectedVal : $$selectedVal[0]
                    )
                  }
                }
              },
              [
                _c("option", { attrs: { value: "" } }, [
                  _vm._v("Select company")
                ]),
                _vm._v(" "),
                _vm._l(_vm.companies, function(company, index) {
                  return _c(
                    "option",
                    { key: index, domProps: { value: company.companyid } },
                    [_vm._v(_vm._s(company.name))]
                  )
                })
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "span",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.errors.has("company"),
                    expression: "errors.has('company')"
                  }
                ],
                staticClass: "is_invalid"
              },
              [_vm._v(_vm._s(_vm.errors.first("company")))]
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !_vm.editMode,
                  expression: "!editMode"
                }
              ],
              staticClass: "text-muted mt-2"
            },
            [
              _c("p", [_vm._v("Photo")]),
              _vm._v(" "),
              _c("input", {
                ref: "filePic",
                attrs: { type: "file", name: "employee_photo" }
              })
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center mt-3" },
            [
              _c(
                "base-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.editMode,
                      expression: "editMode"
                    }
                  ],
                  staticClass: "btn btn-dark",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.updateEmployee($event)
                    }
                  }
                },
                [
                  _vm._v(
                    _vm._s(_vm.submitProgress ? "Please wait..." : "Update")
                  )
                ]
              ),
              _c("br"),
              _vm._v(" "),
              _c(
                "base-button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.editMode,
                      expression: "!editMode"
                    }
                  ],
                  staticClass: "btn btn-dark",
                  attrs: { type: "primary" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.addEmployee($event)
                    }
                  }
                },
                [_vm._v(_vm._s(_vm.submitProgress ? "Please wait..." : "Save"))]
              ),
              _c("br")
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [
        _vm._v(
          "\n                       All Employees\n                        "
        )
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("main", [
      _c("div", { staticClass: "container-fluid" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-sm-6 login-section-wrapper" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "login-wrapper my-auto" }, [
              _c("h1", { staticClass: "login-title" }, [_vm._v("Log in")]),
              _vm._v(" "),
              _c("p", { staticClass: "text-left" }, [
                _vm._v("Supply your registered login credentials")
              ]),
              _vm._v(" "),
              _c("form", { attrs: { role: "form" } }, [
                _c(
                  "div",
                  { staticClass: "form-group" },
                  [
                    _c("label", { attrs: { for: "email" } }, [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("base-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required|email",
                          expression: "'required|email'"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.has("email") },
                      attrs: {
                        placeholder: "Enter Email Address",
                        id: "email",
                        name: "email"
                      },
                      model: {
                        value: _vm.model.email,
                        callback: function($$v) {
                          _vm.$set(_vm.model, "email", $$v)
                        },
                        expression: "model.email"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("email"),
                            expression: "errors.has('email')"
                          }
                        ],
                        staticClass: "is_invalid"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("email")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "form-group mb-4" },
                  [
                    _c("label", { attrs: { for: "password" } }, [
                      _vm._v("Password")
                    ]),
                    _vm._v(" "),
                    _c("base-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      staticClass: "form-control",
                      class: { "is-invalid": _vm.errors.has("password") },
                      attrs: {
                        placeholder: "Enter Password",
                        type: "password",
                        id: "password",
                        name: "password"
                      },
                      model: {
                        value: _vm.model.password,
                        callback: function($$v) {
                          _vm.$set(_vm.model, "password", $$v)
                        },
                        expression: "model.password"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("password"),
                            expression: "errors.has('password')"
                          }
                        ],
                        staticClass: "is_invalid"
                      },
                      [_vm._v(_vm._s(_vm.errors.first("password")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("input", {
                  staticClass: "btn btn-block login-btn",
                  attrs: {
                    name: "login",
                    id: "login",
                    type: "button",
                    value: "Login"
                  },
                  on: { click: _vm.loginUser }
                })
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-sm-6 px-0 d-none d-sm-block" }, [
            _c("img", {
              staticClass: "login-img",
              attrs: { src: "img/login.jpg", alt: "login image" }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "carousel",
                attrs: { "data-ride": "carousel", id: "quote-carousel" }
              },
              [
                _c(
                  "a",
                  {
                    staticClass: "left carousel-control",
                    attrs: { "data-slide": "prev", href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.prevPage($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-chevron-left" })]
                ),
                _vm._v(" "),
                _c(
                  "ol",
                  { staticClass: "carousel-indicators" },
                  _vm._l(_vm.paginatedData(), function(company, index) {
                    return _c("li", { key: index, staticClass: "active" }, [
                      _c("img", {
                        staticClass: "img-responsive company",
                        attrs: {
                          src:
                            company.company_logo === null
                              ? "https://dummyimage.com/300.png/09f/fff"
                              : company.company_logo,
                          alt: ""
                        }
                      })
                    ])
                  }),
                  0
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "right carousel-control",
                    attrs: { "data-slide": "next", href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.nextPage($event)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fa fa-chevron-right" })]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "text-center info" }, [
                  _vm._v("Our Clients")
                ])
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "brand-wrapper" }, [
      _c("img", {
        staticClass: "logo",
        attrs: { src: "img/logo.png", alt: "logo" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/misc/constants.js":
/*!****************************************!*\
  !*** ./resources/js/misc/constants.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var getUrl = window.location;
var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
/* harmony default export */ __webpack_exports__["default"] = ({
  MAIN_SITE_URL: baseUrl
});

/***/ }),

/***/ "./resources/js/plugins/ToastF.js":
/*!****************************************!*\
  !*** ./resources/js/plugins/ToastF.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);


var ToastF = function ToastF(arg) {
  if (!arg) {
    return;
  }

  var options = {};

  if (arg.constructor === Object) {
    //console.log(arg);
    options = arg; //console.log(options);
  }

  if (arg.constructor === String) {
    options.message = arg;
  }

  if (!options.message || options.message === '') {
    throw new Error("ToastF requires a message");
    return;
  }

  var init = function init() {
    initOptions();
    createAlertElement();
    setClass();
    setPosition();
    setAnimation();
    removeAlert();
  };

  var createAlertElement = function createAlertElement() {
    var toastContainer = document.querySelector('.alert-toastf'); //remove alert element if already exist

    if (toastContainer !== null) {
      document.querySelector('body').removeChild(toastContainer);
    }

    document.querySelector('body').appendChild(container());
  };

  var toastBody = function toastBody() {
    var t_body = document.createElement('div');
    t_body.classList.add('alert-body');
    var t_title = document.createElement('div');

    if (options.title) {
      t_title.classList.add('alert-title');
      t_title.innerHTML = options.title;
      t_body.appendChild(document.createTextNode(options.title));
    }

    t_body.appendChild(document.createTextNode(options.message)); //console.log(t_body);

    return t_body;
  };

  var icon = function icon() {
    var t_icon_container = document.createElement('div');
    t_icon_container.classList.add('alert-icon');
    var t_icon = document.createElement('i');
    t_icon.classList.add(options.icon);
    t_icon_container.appendChild(t_icon);
    return t_icon_container;
  };

  var container = function container() {
    var toastContainer = document.createElement('div');
    toastContainer.classList.add('alert-toastf', 'alert-position');
    toastContainer.setAttribute("id", "toastF");

    if (options.icon) {
      toastContainer.appendChild(icon());
    }

    toastContainer.appendChild(toastBody());
    return toastContainer;
  };

  var setClass = function setClass() {
    var alert = getAlertContainer();
    var alertClasses = ['alert-info', 'alert-warning', 'top-left', 'alert-danger', 'alert-success']; //clear classes

    removeClasses(alertClasses, alert);
    var typesList = {
      info: 'alert-info',
      warning: 'alert-warning',
      danger: 'alert-danger',
      success: 'alert-success',
      "default": 'alert-light'
    };

    for (var types in typesList) {
      if (types === options.type) {
        alert.classList.add(typesList[types]);
        return;
      }
    }
  };

  var setPosition = function setPosition() {
    var alert = getAlertContainer();
    var pos = ['top-center', 'top-right', 'top-left', 'bottom-center', 'bottom-right', 'bottom-left'];
    removeClasses(pos, alert);

    for (var i = 0; i < pos.length; i++) {
      if (pos[i] === options.position) {
        alert.classList.add(pos[i]);
        return;
      }
    }
  };

  var setAnimation = function setAnimation() {
    var alert = getAlertContainer();
    var animation = ['fadein', 'slid-in-right', 'slid-in-left'];
    removeClasses(animation, alert);

    switch (options.animation) {
      case 'slide':
        if (options.position === 'top-right' || options.position === 'bottom-right') alert.classList.add('slide-in-right');
        if (options.position === 'top-left' || options.position === 'bottom-left') alert.classList.add('slide-in-left');
        break;

      case 'fade':
        alert.classList.add('fadein');
        break;
    }
  };

  var getAlertContainer = function getAlertContainer() {
    return document.querySelector('.alert-toastf');
  };

  var removeClasses = function removeClasses(classes, element) {
    //remove classes
    for (var i = 0; i < classes.length; i++) {
      element.classList.remove(classes[i]);
    }
  };

  var initOptions = function initOptions() {
    options.type = options.type || 'default';
    options.position = options.position || 'top-right';
    options.animation = options.animation || 'fade';
    options.message = options.message || '';
  };

  var removeAlert = function removeAlert() {
    var animation = ['fadein', 'slid-in-right', 'slid-in-left', 'slide-out-right', 'slide-out-left'];
    removeClasses(animation, getAlertContainer());
    setTimeout(function () {
      var className = "";

      switch (options.position) {
        case 'top-right':
        case 'bottom-right':
          className = "slide-out-right";
          break;

        case 'top-left':
        case 'bottom-left':
          className = "slide-out-left";
          break;
      }

      getAlertContainer().classList.add(className);
    }, 3000);
  };

  init();
};

/* harmony default export */ __webpack_exports__["default"] = (ToastF);

/***/ }),

/***/ "./resources/js/repository/users/AdminRepository.js":
/*!**********************************************************!*\
  !*** ./resources/js/repository/users/AdminRepository.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/admin/';
/* harmony default export */ __webpack_exports__["default"] = ({
  getUsers: function getUsers() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-all-users');
  },
  getProfile: function getProfile(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-profile');
  },
  addUser: function addUser(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'create-user', data);
  },
  updateUser: function updateUser(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].put(resources + 'update', data);
  },
  deleteUser: function deleteUser(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](resources + 'delete/' + id);
  },
  uploadPhoto: function uploadPhoto(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'upload-photo', data);
  }
});

/***/ }),

/***/ "./resources/js/repository/users/CompanyRepository.js":
/*!************************************************************!*\
  !*** ./resources/js/repository/users/CompanyRepository.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/company/';
/* harmony default export */ __webpack_exports__["default"] = ({
  getCompanies: function getCompanies() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-all');
  },
  addCompany: function addCompany(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'create', data);
  },
  updateCompany: function updateCompany(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].put(resources + 'update', data);
  },
  deleteCompany: function deleteCompany(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](resources + 'delete/' + id);
  },
  getProfile: function getProfile(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-profile');
  },
  uploadPhoto: function uploadPhoto(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'upload-logo', data);
  },
  getPublicCompanies: function getPublicCompanies() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get('public/get-companies');
  }
});

/***/ }),

/***/ "./resources/js/repository/users/EmployeeRepository.js":
/*!*************************************************************!*\
  !*** ./resources/js/repository/users/EmployeeRepository.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/employee/';
/* harmony default export */ __webpack_exports__["default"] = ({
  getEmployee: function getEmployee() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-all');
  },
  addEmployee: function addEmployee(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'create', data);
  },
  updateEmployee: function updateEmployee(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].put(resources + 'update', data);
  },
  deleteEmployee: function deleteEmployee(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](resources + 'delete/' + id);
  },
  getProfile: function getProfile(id) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-profile');
  },
  uploadPhoto: function uploadPhoto(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'upload-photo', data);
  },
  updateEmployeeProfile: function updateEmployeeProfile(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].put(resources + 'update-profile', data);
  }
});

/***/ }),

/***/ "./resources/js/repository/users/UserRepository.js":
/*!*********************************************************!*\
  !*** ./resources/js/repository/users/UserRepository.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_ApiService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/ApiService */ "./resources/js/services/ApiService.js");

var resources = '/user/';
/* harmony default export */ __webpack_exports__["default"] = ({
  login: function login(data) {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].post(resources + 'login', data);
  },
  getTotalUsers: function getTotalUsers() {
    return _services_ApiService__WEBPACK_IMPORTED_MODULE_0__["default"].get(resources + 'get-total');
  }
});

/***/ }),

/***/ "./resources/js/services/ApiService.js":
/*!*********************************************!*\
  !*** ./resources/js/services/ApiService.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TokenService */ "./resources/js/services/TokenService.js");
/* harmony import */ var _TokenService__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_TokenService__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _misc_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../misc/constants */ "./resources/js/misc/constants.js");



var api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _misc_constants__WEBPACK_IMPORTED_MODULE_2__["default"].MAIN_SITE_URL + "api/v1/",
  headers: {
    'Authorization': 'Bearer ' + _TokenService__WEBPACK_IMPORTED_MODULE_1___default.a.getAccessToken(),
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'X-CSRF-TOKEN': _TokenService__WEBPACK_IMPORTED_MODULE_1___default.a.getCsrfToken()
  }
});
api.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if (error.response.status === 401) {
    window.location.href = './';
  }

  return Promise.reject(error.response);
});
/* harmony default export */ __webpack_exports__["default"] = (api);

/***/ }),

/***/ "./resources/js/views/AdminUsers.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/AdminUsers.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=template&id=7a092450& */ "./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&");
/* harmony import */ var _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=script&lang=js& */ "./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AdminUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminUsers.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/AdminUsers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/AdminUsers.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./AdminUsers.vue?vue&type=template&id=7a092450& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/AdminUsers.vue?vue&type=template&id=7a092450&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminUsers_vue_vue_type_template_id_7a092450___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Company.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Company.vue ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Company.vue?vue&type=template&id=06576ba4& */ "./resources/js/views/Company.vue?vue&type=template&id=06576ba4&");
/* harmony import */ var _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Company.vue?vue&type=script&lang=js& */ "./resources/js/views/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Company.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Company.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Company.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Company.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Company.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Company.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Company.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Company.vue?vue&type=template&id=06576ba4&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Company.vue?vue&type=template&id=06576ba4& ***!
  \***********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Company.vue?vue&type=template&id=06576ba4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Company.vue?vue&type=template&id=06576ba4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Company_vue_vue_type_template_id_06576ba4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Employee.vue":
/*!*****************************************!*\
  !*** ./resources/js/views/Employee.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=37d83866& */ "./resources/js/views/Employee.vue?vue&type=template&id=37d83866&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./resources/js/views/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Employee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Employee.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Employee.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Employee.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/views/Employee.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Employee.vue?vue&type=template&id=37d83866&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Employee.vue?vue&type=template&id=37d83866& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Employee.vue?vue&type=template&id=37d83866& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Employee.vue?vue&type=template&id=37d83866&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_37d83866___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Main.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Main.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_2ad93e50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=2ad93e50&scoped=true& */ "./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&scoped=true&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/views/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_id_2ad93e50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css& */ "./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_2ad93e50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_2ad93e50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2ad93e50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Main.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Main.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_2ad93e50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--6-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--6-2!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=style&index=0&id=2ad93e50&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_2ad93e50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_2ad93e50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_2ad93e50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_2ad93e50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_id_2ad93e50_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2ad93e50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=2ad93e50&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Main.vue?vue&type=template&id=2ad93e50&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2ad93e50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_2ad93e50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);