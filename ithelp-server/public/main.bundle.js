webpackJsonp([0,3],{

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PhoneService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneService = (function () {
    function PhoneService(http) {
        this.http = http;
        this.BASE_URL = 'http://localhost:3000/api';
    }
    PhoneService.prototype.getList = function () {
        return this.http.get(this.BASE_URL + "/phones")
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.get = function (id) {
        return this.http.get(this.BASE_URL + "/phones/" + id)
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.edit = function (phone) {
        return this.http.put(this.BASE_URL + "/phones/" + phone.id, phone)
            .map(function (res) { return res.json(); });
    };
    PhoneService.prototype.remove = function (id) {
        return this.http.delete(this.BASE_URL + "/phones/" + id)
            .map(function (res) { return res.json(); });
    };
    PhoneService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], PhoneService);
    return PhoneService;
    var _a;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/phone.service.js.map

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AddPhoneComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddPhoneComponent = (function () {
    function AddPhoneComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({
            url: "http://localhost:3000/api/phones/"
        });
        this.newPhone = {
            name: '',
            brand: '',
            specs: []
        };
    }
    AddPhoneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.uploader.onSuccessItem = function (item, response) {
            _this.feedback = JSON.parse(response).message;
        };
        this.uploader.onErrorItem = function (item, response, status, headers) {
            _this.feedback = JSON.parse(response).message;
        };
    };
    AddPhoneComponent.prototype.addSpec = function (spec) {
        this.newPhone.specs.push(spec);
    };
    AddPhoneComponent.prototype.submit = function () {
        var _this = this;
        this.uploader.onBuildItemForm = function (item, form) {
            form.append('name', _this.newPhone.name);
            form.append('brand', _this.newPhone.brand);
            form.append('specs', JSON.stringify(_this.newPhone.specs));
        };
        this.uploader.uploadAll();
    };
    AddPhoneComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-phone',
            template: __webpack_require__(674),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [])
    ], AddPhoneComponent);
    return AddPhoneComponent;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/add-phone.component.js.map

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phone_service__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PhoneDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneDetailsComponent = (function () {
    function PhoneDetailsComponent(router, route, phoneService) {
        this.router = router;
        this.route = route;
        this.phoneService = phoneService;
    }
    PhoneDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getPhoneDetails(params['id']);
        });
    };
    PhoneDetailsComponent.prototype.getPhoneDetails = function (id) {
        var _this = this;
        this.phoneService.get(id)
            .subscribe(function (phone) {
            _this.phone = phone;
        });
    };
    PhoneDetailsComponent.prototype.deletePhone = function () {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.phoneService.remove(this.phone._id)
                .subscribe(function () {
                _this.router.navigate(['']);
            });
        }
    };
    PhoneDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-phone-details',
            template: __webpack_require__(676),
            styles: [__webpack_require__(672)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__phone_service__["a" /* PhoneService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__phone_service__["a" /* PhoneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__phone_service__["a" /* PhoneService */]) === 'function' && _c) || Object])
    ], PhoneDetailsComponent);
    return PhoneDetailsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/phone-details.component.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_service__ = __webpack_require__(215);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PhoneListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhoneListComponent = (function () {
    function PhoneListComponent(phone) {
        this.phone = phone;
    }
    PhoneListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.phone.getList()
            .subscribe(function (phones) {
            _this.phones = phones;
        });
    };
    PhoneListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-phone-list',
            template: __webpack_require__(677),
            styles: [__webpack_require__(673)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__phone_service__["a" /* PhoneService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__phone_service__["a" /* PhoneService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__phone_service__["a" /* PhoneService */]) === 'function' && _a) || Object])
    ], PhoneListComponent);
    return PhoneListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/phone-list.component.js.map

/***/ },

/***/ 393:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 393;


/***/ },

/***/ 394:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(511);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/main.js.map

/***/ },

/***/ 510:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(675),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/app.component.js.map

/***/ },

/***/ 511:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__phone_list_phone_list_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__phone_details_phone_details_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__phone_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__add_phone_add_phone_component__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__phone_list_phone_list_component__["a" /* PhoneListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__phone_details_phone_details_component__["a" /* PhoneDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_file_upload__["FileSelectDirective"],
                __WEBPACK_IMPORTED_MODULE_11__add_phone_add_phone_component__["a" /* AddPhoneComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routes */])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__phone_service__["a" /* PhoneService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/app.module.js.map

/***/ },

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__phone_details_phone_details_component__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phone_list_phone_list_component__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_phone_add_phone_component__ = __webpack_require__(331);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routes; });



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__phone_list_phone_list_component__["a" /* PhoneListComponent */] },
    { path: 'add', component: __WEBPACK_IMPORTED_MODULE_2__add_phone_add_phone_component__["a" /* AddPhoneComponent */] },
    { path: 'phone/:id', component: __WEBPACK_IMPORTED_MODULE_0__phone_details_phone_details_component__["a" /* PhoneDetailsComponent */] },
    { path: '**', redirectTo: '' }
];
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/app.routing.js.map

/***/ },

/***/ 513:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/environment.js.map

/***/ },

/***/ 514:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(694);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/tja/Google Drive/Ironhack/AngularApp-Api/phone-app/src/polyfills.js.map

/***/ },

/***/ 670:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 671:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 672:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 673:
/***/ function(module, exports) {

module.exports = "img {\n\twidth: 150px;\n}\n\n.item {\n\tdisplay: inline-block;\n\twidth: 200px;\n\n}"

/***/ },

/***/ 674:
/***/ function(module, exports) {

module.exports = "<h1> Add a new phone </h1>\n<a [routerLink]=\"['']\"> Back to list </a>\n\n<form>\n  <fieldset>\n    <legend> Phone info </legend>\n    <label> Brand* </label>\n    <input type=\"text\" [(ngModel)]=\"newPhone.brand\" name=\"brand\" required />\n\n    <label> Name* </label>\n    <input type=\"text\" [(ngModel)]=\"newPhone.name\" name=\"name\" required />\n\n    <label> Specs </label>\n    <input type=\"text\" #spec />\n    <button (click)=\"addSpec(spec.value); spec.value = ''\"> add </button>\n\n    <ul>\n      <li *ngFor=\"let spec of newPhone.specs\"> {{ spec }} </li>\n    </ul>\n    <small *ngIf=\"!newPhone.specs.length\"> This phone has no specs :( </small>\n\n    <input type=\"file\" name=\"file\" ng2FileSelect [uploader]=\"uploader\" />\n\n  </fieldset>\n  <button (click)=\"submit()\"> submit </button>\n</form>\n\n<p> {{ feedback }} </p>"

/***/ },

/***/ 675:
/***/ function(module, exports) {

module.exports = "<h1>\n  {{title}}\n</h1>\n<router-outlet></router-outlet>"

/***/ },

/***/ 676:
/***/ function(module, exports) {

module.exports = "<h1> Phone details </h1>\n<a [routerLink]=\"['']\"> Back to list </a>\n\n<div *ngIf=\"phone\">\n  <div class=\"phone-thumbnail\">\n    <img height=\"300\" [src]=\"phone.image\" />\n  </div>\n\t<button class=\"btn btn-danger\" (click)=\"deletePhone()\"> Delete </button>\n  <div class=\"phone-info\">\n    <h2> {{ phone.name }}&nbsp;</h2>\n    <h3> {{ phone.brand }} </h3>\n\n    <div *ngIf=\"phone.specs.length\">\n      <h4> Features </h4>\n      <ul>\n        <li *ngFor=\"let spec of phone.specs\"> {{ spec&nbsp;}} </li>\n      </ul>\n    </div>\n  </div>\n</div>\n<a [routerLink]=\"['']\"> Back to list </a>"

/***/ },

/***/ 677:
/***/ function(module, exports) {

module.exports = "<h1> Phone list </h1>\n<div>\n  <div *ngFor=\"let phone of phones\" class=\"item\">\n    <img [src]=\"phone.image\" />\n    <h3> {{ phone.name }} </h3>\n    <p> {{ phone.brand }} </p>\n    <a [routerLink]=\"['phone', phone._id]\"> View Details </a>\n  </div>\n</div>"

/***/ },

/***/ 695:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(394);


/***/ }

},[695]);
//# sourceMappingURL=main.bundle.map