(this.webpackJsonpfrontend_react=this.webpackJsonpfrontend_react||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(28),o=n.n(r),a=n(18),i=n(3),l=(n(35),n(36),n(10)),j=n.n(l),d=n(1);var h=function(){return console.log("Main App LoggedIn Cookie"+j.a.get("LoggedIn")),Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("header",{className:"App-header",children:[Object(d.jsx)("a",{href:"/login",children:"Login"}),Object(d.jsx)("a",{href:"/reset-pw",children:"ResetPw"}),Object(d.jsx)("a",{href:"/profile",children:"Edit User Profile"}),Object(d.jsx)("a",{href:"/register",children:"Register"}),Object(d.jsx)("a",{href:"/logout",children:"Logout"})]})})},g=n(7),b=n(12),u=n(30),O=n(29),x=n.n(O);function f(){var e=Object(s.useState)(""),t=Object(g.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(""),o=Object(g.a)(r,2),a=o[0],l=o[1],h=Object(i.f)();return j.a.set("LoggedIn",1),console.log("LoggedIn Cookie="+j.a.get("LoggedIn")),Object(d.jsxs)("div",{className:"Login",children:[Object(d.jsxs)(b.a,{onSubmit:function(e){window.alert("handleSubmit"),console.log("Login.handlesubmit - uname="+n+" pwd="+a),e.preventDefault(),x()({method:"post",url:"https://osdapi.ddns.net/api/accounts/login/",data:{login:n,password:a},validateStatus:function(e){return e<500}}).then((function(e){200===e.status?(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),j.a.set("token",e.data.token),j.a.set("LoggedIn",1),console.log("redirecting to home page"),h("/")):(console.log(e.status+" - "+e.statusText+" : "+JSON.stringify(e.data)),alert(JSON.stringify(e.data)),j.a.set("token",null),j.a.set("LoggedIn",0))})).catch((function(e){console.log("catch(): err="+JSON.stringify(e)),alert(JSON.stringify(e)),j.a.set("token",null),j.a.set("LoggedIn",0)}))},children:[Object(d.jsxs)(b.a.Group,{size:"lg",controlId:"uname",children:[Object(d.jsx)(b.a.Label,{children:"User Name"}),Object(d.jsx)(b.a.Control,{type:"text",value:n,onChange:function(e){return c(e.target.value)}})]}),Object(d.jsxs)(b.a.Group,{size:"lg",controlId:"password",children:[Object(d.jsx)(b.a.Label,{children:"Password"}),Object(d.jsx)(b.a.Control,{type:"password",value:a,onChange:function(e){return l(e.target.value)}})]}),Object(d.jsx)(u.a,{block:!0,size:"lg",type:"submit",disabled:!(n.length>0&&a.length>0),children:"Login"})]}),Object(d.jsx)("a",{href:"/",children:"Home"})]})}function p(){return j.a.set("LoggedIn",0),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Logout"}),Object(d.jsx)("a",{href:"/",children:"Home"})]})}function m(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Edit User Profile"}),Object(d.jsx)("a",{href:"/",children:"Home"})]})}function L(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Reset Password"}),Object(d.jsx)("a",{href:"/",children:"Home"})]})}function v(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:"Register"}),Object(d.jsx)("a",{href:"/",children:"Home"})]})}var w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),s(e),c(e),r(e),o(e)}))};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(a.a,{children:Object(d.jsxs)(i.c,{children:[Object(d.jsx)(i.a,{path:"/",element:Object(d.jsx)(h,{})}),Object(d.jsx)(i.a,{path:"/login",element:Object(d.jsx)(f,{})}),Object(d.jsx)(i.a,{path:"/profile",element:Object(d.jsx)(m,{})}),Object(d.jsx)(i.a,{path:"/reset-pw",element:Object(d.jsx)(L,{})}),Object(d.jsx)(i.a,{path:"/logout",element:Object(d.jsx)(p,{})}),Object(d.jsx)(i.a,{path:"/register",element:Object(d.jsx)(v,{})})]})})}),document.getElementById("root")),w()}},[[58,1,2]]]);
//# sourceMappingURL=main.8bca760b.chunk.js.map