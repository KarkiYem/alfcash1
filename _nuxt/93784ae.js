(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{644:function(t,e,l){"use strict";var r=l(9),c=(l(10),{name:"progress-track-list",data:function(){return{list:[{name:"Argon Design System",image:"img/theme/bootstrap.jpg",color:"orange",progress:60},{name:"Angular Now UI Kit PRO",image:"img/theme/angular.jpg",color:"green",progress:100},{name:"Black Dashboard",image:"img/theme/sketch.jpg",color:"red",progress:72},{name:"React Material Dashboard",image:"img/theme/react.jpg",color:"teal",progress:90},{name:"Vue Paper UI Kit PRO",image:"img/theme/vue.jpg",color:"green",progress:100}]}}}),o=l(7),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("div",{staticClass:"card-body"},[e("ul",{staticClass:"list-group list-group-flush list my--3"},t._l(t.list,(function(l,c){return e("li",{key:c,staticClass:"list-group-item px-0"},[e("div",{staticClass:"row align-items-center"},[e("div",{staticClass:"col-auto"},[e("a",{staticClass:"avatar rounded-circle",attrs:{href:"#"}},[e("img",{attrs:Object(r.a)({alt:"Image placeholder",src:l.image},"alt",l.name)})])]),t._v(" "),e("div",{staticClass:"col"},[e("h5",[t._v(t._s(l.name))]),t._v(" "),e("base-progress",{staticClass:"progress-xs mb-0",attrs:{type:l.color,value:l.progress}})],1)])])})),0)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"card-header"},[t("h5",{staticClass:"h3 mb-0"},[this._v("Progress track")])])}],!1,null,null,null);e.a=component.exports},684:function(t,e,l){},758:function(t,e,l){"use strict";l(684)},799:function(t,e,l){"use strict";l.r(e);var r={data:function(){return{user:{company:"Creative Code Inc.",username:"michael23",email:"",firstName:"Mike",lastName:"Andrew",address:"Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09",city:"New York",country:"USA",postalCode:"",aboutMe:"Lamborghini Mercy, Your chick she so thirsty, I'm in that two seat Lambo."}}},methods:{updateProfile:function(){alert("Your data: "+JSON.stringify(this.user))}}},c=l(7),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("card",[e("div",{staticClass:"row align-items-center",attrs:{slot:"header"},slot:"header"},[e("div",{staticClass:"col-8"},[e("h3",{staticClass:"mb-0"},[t._v("Edit profile ")])]),t._v(" "),e("div",{staticClass:"col-4 text-right"},[e("a",{staticClass:"btn btn-sm btn-primary",attrs:{href:"#!"}},[t._v("Settings")])])]),t._v(" "),e("form",{on:{submit:function(e){return e.preventDefault(),t.updateProfile.apply(null,arguments)}}},[e("h6",{staticClass:"heading-small text-muted mb-4"},[t._v("User information")]),t._v(" "),e("div",{staticClass:"pl-lg-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("base-input",{attrs:{type:"text",label:"Username",placeholder:"Username"},model:{value:t.user.username,callback:function(e){t.$set(t.user,"username",e)},expression:"user.username"}})],1),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("base-input",{attrs:{type:"email",label:"Email address",placeholder:"mike@email.com"},model:{value:t.user.email,callback:function(e){t.$set(t.user,"email",e)},expression:"user.email"}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("base-input",{attrs:{type:"text",label:"First Name",placeholder:"First Name"},model:{value:t.user.firstName,callback:function(e){t.$set(t.user,"firstName",e)},expression:"user.firstName"}})],1),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("base-input",{attrs:{type:"text",label:"Last Name",placeholder:"Last Name"},model:{value:t.user.lastName,callback:function(e){t.$set(t.user,"lastName",e)},expression:"user.lastName"}})],1)])]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("h6",{staticClass:"heading-small text-muted mb-4"},[t._v("Contact information")]),t._v(" "),e("div",{staticClass:"pl-lg-4"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("base-input",{attrs:{type:"text",label:"Address",placeholder:"Home Address"},model:{value:t.user.address,callback:function(e){t.$set(t.user,"address",e)},expression:"user.address"}})],1)]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-4"},[e("base-input",{attrs:{type:"text",label:"City",placeholder:"City"},model:{value:t.user.city,callback:function(e){t.$set(t.user,"city",e)},expression:"user.city"}})],1),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("base-input",{attrs:{type:"text",label:"Country",placeholder:"Country"},model:{value:t.user.country,callback:function(e){t.$set(t.user,"country",e)},expression:"user.country"}})],1),t._v(" "),e("div",{staticClass:"col-lg-4"},[e("base-input",{attrs:{label:"Postal Code",placeholder:"ZIP Code"},model:{value:t.user.postalCode,callback:function(e){t.$set(t.user,"postalCode",e)},expression:"user.postalCode"}})],1)])]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("h6",{staticClass:"heading-small text-muted mb-4"},[t._v("About me")]),t._v(" "),e("div",{staticClass:"pl-lg-4"},[e("div",{staticClass:"form-group"},[e("label",{staticClass:"form-control-label"},[t._v("About Me")]),t._v(" "),e("textarea",{staticClass:"form-control",attrs:{rows:"4",placeholder:"A few words about you ..."}},[t._v("A beautiful premium dashboard for Bootstrap 4.")])])])])])}),[],!1,null,null,null),o={},n={layout:"DashboardLayout",components:{EditProfileForm:component.exports,UserCard:Object(c.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card card-profile"},[e("img",{staticClass:"card-img-top",attrs:{src:"img/theme/img-1-1000x600.jpg",alt:"Image placeholder"}}),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-lg-3 order-lg-2"},[e("div",{staticClass:"card-profile-image"},[e("a",{attrs:{href:"#"}},[e("img",{staticClass:"rounded-circle",attrs:{src:"img/theme/team-4.jpg"}})])])])]),t._v(" "),e("div",{staticClass:"card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"},[e("div",{staticClass:"d-flex justify-content-between"},[e("a",{staticClass:"btn btn-sm btn-info mr-4",attrs:{href:"#"}},[t._v("Connect")]),t._v(" "),e("a",{staticClass:"btn btn-sm btn-default float-right",attrs:{href:"#"}},[t._v("Message")])])]),t._v(" "),e("div",{staticClass:"card-body pt-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("div",{staticClass:"card-profile-stats d-flex justify-content-center"},[e("div",[e("span",{staticClass:"heading"},[t._v("22")]),t._v(" "),e("span",{staticClass:"description"},[t._v("Friends")])]),t._v(" "),e("div",[e("span",{staticClass:"heading"},[t._v("10")]),t._v(" "),e("span",{staticClass:"description"},[t._v("Photos")])]),t._v(" "),e("div",[e("span",{staticClass:"heading"},[t._v("89")]),t._v(" "),e("span",{staticClass:"description"},[t._v("Comments")])])])])]),t._v(" "),e("div",{staticClass:"text-center"},[e("h5",{staticClass:"h3"},[t._v("\n        Jessica Jones"),e("span",{staticClass:"font-weight-light"},[t._v(", 27")])]),t._v(" "),e("div",{staticClass:"h5 font-weight-300"},[e("i",{staticClass:"ni location_pin mr-2"}),t._v("Bucharest, Romania\n      ")]),t._v(" "),e("div",{staticClass:"h5 mt-4"},[e("i",{staticClass:"ni business_briefcase-24 mr-2"}),t._v("Solution Manager - Creative Tim Officer\n      ")]),t._v(" "),e("div",[e("i",{staticClass:"ni education_hat mr-2"}),t._v("University of Computer Science\n      ")])])])])}],!1,null,null,null).exports,ProgressTrackList:l(644).a}},d=(l(758),Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",[t._m(0),t._v(" "),e("div",{staticClass:"container-fluid mt--6"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-xl-4 order-xl-2"},[e("user-card"),t._v(" "),e("progress-track-list")],1),t._v(" "),e("div",{staticClass:"col-xl-8 order-xl-1"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6"},[e("card",{staticClass:"border-0",attrs:{gradient:"info"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Total traffic")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("350,897")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"icon icon-shape bg-white text-dark rounded-circle shadow"},[e("i",{staticClass:"ni ni-active-40"})])])]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("span",{staticClass:"text-white mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap text-light"},[t._v("Since last month")])])])],1),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("card",{staticClass:"border-0",attrs:{gradient:"danger"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col"},[e("h5",{staticClass:"card-title text-uppercase text-muted mb-0 text-white"},[t._v("Performance")]),t._v(" "),e("span",{staticClass:"h2 font-weight-bold mb-0 text-white"},[t._v("49,65%")])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"icon icon-shape bg-white text-dark rounded-circle shadow"},[e("i",{staticClass:"ni ni-spaceship"})])])]),t._v(" "),e("p",{staticClass:"mt-3 mb-0 text-sm"},[e("span",{staticClass:"text-white mr-2"},[e("i",{staticClass:"fa fa-arrow-up"}),t._v(" 3.48%")]),t._v(" "),e("span",{staticClass:"text-nowrap text-light"},[t._v("Since last month")])])])],1)]),t._v(" "),e("edit-profile-form")],1)])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header pb-6 d-flex align-items-center profile-header"},[e("span",{staticClass:"mask bg-gradient-default opacity-8"}),t._v(" "),e("div",{staticClass:"container-fluid d-flex align-items-center"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7 col-md-10"},[e("h1",{staticClass:"display-2 text-white"},[t._v("Hello Jesse")]),t._v(" "),e("p",{staticClass:"text-white mt-0 mb-5"},[t._v("This is your profile page. You can see the progress you've made with your\n            work and manage your projects or assigned tasks")]),t._v(" "),e("a",{staticClass:"btn btn-neutral",attrs:{href:"#!"}},[t._v("Edit profile")])])])])])}],!1,null,null,null));e.default=d.exports}}]);