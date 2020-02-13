(function(e){function t(t){for(var a,r,i=t[0],l=t[1],c=t[2],d=0,v=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(v.length)v.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==s[l]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},s={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-navigation"),n("v-content",{attrs:{transition:"slide-x-transition"}},[n("router-view")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[n("v-app-bar",{attrs:{app:"",color:"brown darken4",dark:""}},[n("v-toolbar-title",[e._v(e._s(e.appTitle))]),n("v-btn",{attrs:{text:"",to:"/About"}},[e._v("About")]),n("v-spacer"),e.isAuthenticated?e._e():n("v-btn",{attrs:{text:"",to:"/Login"}},[e._v("Login/Register")]),e.isAuthenticated?n("v-btn",{attrs:{text:"",to:"/profile"}},[e._v("Account")]):e._e()],1),n("v-navigation-drawer",{staticClass:"brown lighten-2",attrs:{app:"",dark:"","disable-resize-watcher":""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[n("v-list",[e._l(e.items,(function(t,a){return[n("v-list-item",[e._v(" "+e._s(t.title)+" ")]),n("v-divider",{key:"divider-"+a})]}))],2)],1)],1)},i=[],l={name:"AppNavigation",data:function(){return{appTitle:"OpenSeizureDetector WebAPI",drawer:!1,items:[{title:"drawer-btn1"},{title:"drawer-Log In"}]}},computed:{isAuthenticated:function(){return this.$store.getters["isAuthenticated"]}}},c=l,u=n("2877"),d=Object(u["a"])(c,r,i,!1,null,"4fb5f558",null),v=d.exports,m={name:"App",components:{AppNavigation:v}},f=m,p=Object(u["a"])(f,s,o,!1,null,null,null),h=p.exports,g=n("8c4f"),b=n("2f62"),y=n("bc3a"),w=n.n(y);a["default"].use(b["a"]);var x=new b["a"].Store({state:{baseUrl:"https://osd.dynu.net",isAuthenticated:!1,token:null},getters:{baseUrl:function(e){return e.baseUrl},token:function(e){return e.token},isAuthenticated:function(e){return console.log("getters.isAuthenticated: "+e.isAuthenticated),e.isAuthenticated}},mutations:{setToken:function(e,t){e.token=t,console.log("store.mutations.setToken - token = "+e.token)},setIsAuthenticated:function(e,t){e.isAuthenticated=t,console.log("setIsAuthenticated: "+e.isAuthenticated)}},actions:{login:function(e,t){var n=t.uname,a=t.password;console.log("login("+n+","+a+")");var s=e.state.baseUrl;console.log("....url="+s),w()({method:"post",url:s+"/accounts/login/",data:{login:n,password:a},validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",t.data["token"]),e.commit("setIsAuthenticated",!0),console.log("redirecting to home page"),de.push({path:"/home"})):(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1))})).catch((function(t){console.log("catch(): err="+JSON.stringify(t)),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)}))},logout:function(e){console.log("logout"),e.commit("setToken",null),e.commit("setIsAuthenticated",!1)},getUserDetails:function(e){console.log("getUserDetails")}},modules:{}}),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",[n("h1",[e._v("Home Page")]),n("events")],1)],1)],1)},k=[],E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-card",[n("v-card-title",[n("h1",[e._v("Events")])]),n("v-card-text",[n("p",[e._v("Select Events by Date:")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-row",[n("v-col",[n("v-datetime-picker",{attrs:{label:"Start","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.startDateTime,callback:function(t){e.startDateTime=t},expression:"startDateTime"}})],1),n("v-col",[n("v-datetime-picker",{attrs:{label:"End","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.endDateTime,callback:function(t){e.endDateTime=t},expression:"endDateTime"}},[e._v(" > ")])],1)],1)],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:e.getEvents}},[e._v("Get Events")])],1)],1),n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.tableHeaders,items:e.events,"items-per-page":20},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on;return[n("v-btn",e._g({staticClass:"mb-2",attrs:{color:"primary",dark:""}},a),[e._v("New Event")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v("Create / Edit Event")])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-datetime-picker",{attrs:{label:"Event Date/Time","date-format":"yyyy-MM-dd","time-format":"HH:mm:ss"},model:{value:e.editedEvent.dataTime,callback:function(t){e.$set(e.editedEvent,"dataTime",t)},expression:"editedEvent.dataTime"}},[e._v(" > ")])],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-select",{attrs:{items:e.eventTypes,"menu-props":"auto","hide-details":"",label:"Event Type","single-line":""},model:{value:e.editedEvent.eventType,callback:function(t){e.$set(e.editedEvent,"eventType",t)},expression:"editedEvent.eventType"}})],1),n("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[n("v-text-field",{attrs:{label:"Description"},model:{value:e.editedEvent.desc,callback:function(t){e.$set(e.editedEvent,"desc",t)},expression:"editedEvent.desc"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.close}},[e._v("Cancel")]),n("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.save}},[e._v("Save")])],1)],1)],1)]},proxy:!0},{key:"item.dataTime",fn:function(t){var n=t.item;return[e._v(" "+e._s(n.dataTime)+" ")]}},{key:"item.eventType",fn:function(t){var n=t.item;return[e._v(" "+e._s(e.eventTypes[n.eventType].text)+" ")]}},{key:"item.action",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editEvent(a)}}},[e._v(" edit ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteEvent(a)}}},[e._v(" delete ")])]}}])})],1)},T=[],O=(n("c975"),n("a434"),n("b9b9")),A={name:"Events",data:function(){return{dialog:!1,valid:!1,startDateTime:"2019-01-01 00:00:00",endDateTime:"2021-01-01 00:00:00",events:[],eventTypes:[{value:0,text:"Alarm (unvalidated)"},{value:1,text:"Warning (unvalidated)"},{value:2,text:"False Alarm"},{value:3,text:"False Warning"},{value:4,text:"Tonic-Clonic Seizure"},{value:5,text:"Other Seizure"},{value:6,text:"Other Medical Issue"},{value:7,text:"Other Event"}],tableHeaders:[{text:"Date/Time",value:"dataTime"},{text:"Event Type",value:"eventType"},{text:"Notes",value:"desc"},{text:"Actions",value:"action"}],editedIndex:-1,editedEvent:{dataTime:new Date,eventType:7,desc:""},defaultEvent:{dataTime:new Date,eventType:7,desc:"Please enter description"}}},computed:{token:function(){return this.$store.state.token},url:function(){return this.$store.state.baseUrl},eventTypeText:function(e){return this.eventTypes[e]},dateStr:function(e){var t;return e instanceof Date?(console.log("dateSTr - dataTime is Date"),t=e):(console.log("dateStr - converting dataTime to Date"),t=Date(e)),O(t,"yyyy-mm-dd hh:MM:ss")}},watch:{dialog:function(e){e||this.close()}},created:function(){console.log("Events.vue.created()")},methods:{getEvents:function(){var e=this;if(this.$refs.form.validate()){var t={headers:{Authorization:"Token "+this.token}};console.log("getEvents()....config="+JSON.stringify(t)),w()({method:"get",url:this.url+"/events/?start="+O(this.startDateTime,"yyyy-mm-dd hh:MM:ss")+"&end="+O(this.endDateTime,"yyyy-mm-dd hh:MM:ss"),headers:{Authorization:"Token "+this.token},data:{},validateStatus:function(e){return e<500}}).then((function(t){200==t.status?(console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data)),e.events=t.data["results"],console.log("set events to "+JSON.stringify(e.events))):console.log(t.status+" - "+t.statusText+" : "+JSON.stringify(t.data))}))}},updateEvent:function(){console.log("updateEvent()")},editEvent:function(e){this.editedIndex=this.events.indexOf(e),this.editedEvent=Object.assign({},e),this.dialog=!0},deleteEvent:function(e){this.events.indexOf(e);confirm("Are you sure you want to delete this event?")&&this.events.splice(e,1)},close:function(){var e=this;this.dialog=!1,setTimeout((function(){e.editedEvent=Object.assign({},e.defaultEvent),e.editedIndex=-1}),300)},save:function(){this.editedIndex>-1?Object.assign(this.events[this.editedIndex],this.editedEvent):this.events.push(this.editedEvent),this.close()}}},S=A,P=Object(u["a"])(S,E,T,!1,null,"899679c6",null),D=P.exports;console.log("Home.vue");var $={name:"home",components:{Events:D}},j=$,M=Object(u["a"])(j,_,k,!1,null,null,null),I=M.exports,N=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("This is an about page")])])}],C={},U=Object(u["a"])(C,N,R,!1,null,null,null),q=U.exports,z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("h1",[e._v("Login")])]),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{"prepend-icon":"mdi-account-circle",name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),n("v-text-field",{attrs:{"prepend-icon":"mdi-lock",name:"password",label:"Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"success"},on:{click:e.onRegister}},[e._v("Register ")]),n("v-btn",{attrs:{color:"info"},on:{click:e.onLogin}},[e._v("Login")])],1)],1)},H=[],J={name:"Login",data:function(){return{valid:!1,uname:"",password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=3||"Password must be greater than 3 characters"}]}},methods:{onLogin:function(){this.$refs.form.validate()&&this.$store.dispatch("login",{uname:this.uname,password:this.password})},onRegister:function(){de.push({path:"/register"})}}},L=J,F=Object(u["a"])(L,z,H,!1,null,"7c28acef",null),W=F.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("h1",[e._v("Create Account to Use OpenSeizureDetector WebAPI")])]),n("v-card-text",[n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{attrs:{name:"password",label:"Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-text-field",{attrs:{name:"confirmpassword",label:"Confrm Password",type:"password",required:"",rules:e.passwordRules},model:{value:e.confirmpassword,callback:function(t){e.confirmpassword=t},expression:"confirmpassword"}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Create Account")])],1)],1)},G=[],B={name:"Register",data:function(){return{valid:!1,uname:"",email:"",password:"",confirmpassword:"",emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&(alert("FIXME - register button does not work!"),console.log("FIXME - register button does not work!"))}}},K=B,Q=Object(u["a"])(K,X,G,!1,null,"5b699c70",null),V=Q.exports,Y=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageNotFound"},[n("h1",[e._v("Page Not Found")])])}],ee={},te=Object(u["a"])(ee,Y,Z,!1,null,null,null),ne=te.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-flex",{attrs:{xs12:"",sm8:"",md4:""}},[n("h1",[e._v("User Profile")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{name:"uname",label:"User Name:",required:""},model:{value:e.uname,callback:function(t){e.uname=t},expression:"uname"}}),n("v-text-field",{attrs:{name:"password",label:"Password",id:"password",type:"password",required:"",rules:e.passwordRules},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-btn",{attrs:{color:"primary"},on:{click:e.submit}},[e._v("Update")])],1),n("p",[e._v(" Not Registered? "),n("v-btn",{attrs:{text:""}},[e._v("Create account")])],1)],1)],1)],1)},se=[],oe={name:"Profile",data:function(){return{valid:!1,uname:"",password:"",passwordRules:[function(e){return!!e||"Password is required"},function(e){return e.length>=6||"Password must be greater than 6 characters"}]}},methods:{submit:function(){this.$refs.form.validate()&&console.log("submit() - FIXME - this doesn't do anything")}}},re=oe,ie=Object(u["a"])(re,ae,se,!1,null,"59d872fe",null),le=ie.exports;a["default"].use(g["a"]);var ce=[{path:"/",alias:"/home",name:"home",component:I,meta:{auth:!0}},{path:"/login",name:"login",component:W,meta:{auth:!1}},{path:"/register",name:"register",component:V,meta:{auth:!1}},{path:"/profile",name:"profile",component:le,meta:{auth:!0}},{path:"/about",name:"about",component:q,meta:{auth:!1}},{path:"*",name:"pagenotfound",component:ne,meta:{auth:!1}}],ue=new g["a"]({mode:"history",base:"",routes:ce});ue.beforeEach((function(e,t,n){e.meta.auth?(console.log("router.beforeach - to.meta.auth is true..."),x.getters["isAuthenticated"]?(console.log("router.beforeEach - we are authenticated so continuing to page"),n()):(console.log("router.beforeEach - redirecting to login screen"),n({name:"login"}))):(console.log("router.beforeEach - meta.auth is false - continuing to page"),n())}));var de=ue,ve=n("ce5b"),me=n.n(ve);n("bf40");a["default"].use(me.a);var fe=new me.a({}),pe=n("ad24");n("87df");a["default"].use(pe["a"]),a["default"].config.productionTip=!1,new a["default"]({router:de,store:x,vuetify:fe,render:function(e){return e(h)}}).$mount("#app")}});
//# sourceMappingURL=app.a5723763.js.map