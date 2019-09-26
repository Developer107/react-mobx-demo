(window["webpackJsonpmobx-demo"]=window["webpackJsonpmobx-demo"]||[]).push([[0],{27:function(e,t,a){e.exports=a(39)},33:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),o=a.n(s),l=a(9),i=(a(33),a(7)),c=a(8),u=a(14),m=a(12),d=a(13),g=a(18),p=a(10),h=a(11),v=a(3),b=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).updateDetails=e.updateDetails.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"updateDetails",value:function(e){var t=this.props.profileStore.updateDetails;t(e.target.name,e.target.value)}},{key:"logout",value:function(){v.reactLocalStorage.set("userId","")}},{key:"render",value:function(){var e=this.props.profileStore;return r.a.createElement("div",null,r.a.createElement("div",{className:"profile-edit-mode"},r.a.createElement("div",null,"Name: ",e.name),r.a.createElement("div",null,"SurName: ",e.surname),r.a.createElement("div",null,"Age: ",e.age),r.a.createElement("div",null,"Gender: ",e.gender)),r.a.createElement("div",{className:"profile-read-mode"},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:e.name,name:"name",onChange:this.updateDetails})),r.a.createElement("div",null,"Surname: ",r.a.createElement("input",{value:e.surname,name:"surname",onChange:this.updateDetails})),r.a.createElement("div",null,"Age: ",r.a.createElement("input",{value:e.age,name:"age",onChange:this.updateDetails})),r.a.createElement("div",null,"Gender:",r.a.createElement("div",null,r.a.createElement("input",{type:"radio",value:"female",name:"gender",checked:"female"===e.gender,onChange:this.updateDetails}),"Female"),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",value:"male",name:"gender",checked:"male"===e.gender,onChange:this.updateDetails}),"Male"))),r.a.createElement(g.b,{to:"/",onClick:this.logout},"Logout"))}}]),t}(n.Component),f=Object(l.b)("profileStore")(Object(l.c)(b)),E=[{id:0,userName:"Jack",surName:"Hill",age:27,gender:"male",password:"developer7",photos:[]},{id:1,userName:"Jameson",surName:"Mount",age:27,gender:"male",password:"developer10",photos:[]},{id:2,userName:"Jim",surName:"Resort",age:27,gender:"male",password:"developer107",photos:[]}],O=Object(l.b)("loginStore")(Object(l.c)(function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(m.a)(t).call(this))).onEnterKey=e.onEnterKey.bind(Object(h.a)(e)),e.updateDetails=e.updateDetails.bind(Object(h.a)(e)),e}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){Object.entries(v.reactLocalStorage.getObject("allUserData")).length||v.reactLocalStorage.setObject("allUserData",E),v.reactLocalStorage.get("userId")&&(window.location.href="/profile")}},{key:"onEnterKey",value:function(e){"Enter"===e.key&&(0,this.props.loginStore.attemptToLogin)()}},{key:"updateDetails",value:function(e){var t=this.props.loginStore.updateDetails;t(e.target.name,e.target.value)}},{key:"render",value:function(){var e=this.props.loginStore,t=e.userName,a=e.password,n=e.errorMessage,s=e.attemptToLogin;return r.a.createElement("div",null,r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-input-label",key:"username"},"User Name:",r.a.createElement("input",{value:t,onKeyPress:this.onEnterKey,name:"userName",onChange:this.updateDetails})),r.a.createElement("div",{className:"login-input-label",key:"password"},"Password:",r.a.createElement("input",{type:"password",onKeyPress:this.onEnterKey,value:a,name:"password",onChange:this.updateDetails})),r.a.createElement("div",{className:"btn",key:"login",onClick:s},"Login"),!!n&&r.a.createElement("div",{className:"error-message"},n)),r.a.createElement("span",null,"NOTE:"),r.a.createElement("br",null),r.a.createElement("small",null,"* Details of newly registered user will be removed on clearing local storage."),r.a.createElement("br",null),r.a.createElement("small",null,"* Uploaded photos for all users will be removed on clearing local storage."))}}]),t}(r.a.PureComponent))),j=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g.a,null,r.a.createElement(p.a,{path:"/",exact:!0,component:O}),r.a.createElement(p.a,{path:"/profile",component:f})))}}]),t}(r.a.PureComponent),w=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))},D=a(1);Object(D.g)({enforceActions:"observed"});var N=function e(){var t=this;Object(i.a)(this,e),this.initDetails=function(e){e&&Object.keys(e).length&&(t.name=e.userName,t.surname=e.surName,t.age=e.age,t.gender=e.gender)},this.updateDetails=function(e,a){t[e]=a};var a=v.reactLocalStorage.get("userId"),n=v.reactLocalStorage.getObject("allUserData");this.initDetails(n[a]),Object(D.e)((function(){var e=v.reactLocalStorage.get("userId"),a=v.reactLocalStorage.getObject("allUserData"),n=a[e];n&&Object.keys(n).length&&(n.userName=t.name,n.surName=t.surname,n.age=t.age,n.gender=t.gender,v.reactLocalStorage.setObject("allUserData",a))}))};Object(D.i)(N,{name:D.n,surname:D.n,age:D.n,gender:D.n,updateDetails:D.d,initDetails:D.d});var y=function(){function e(){var t=this;Object(i.a)(this,e),this.userName="",this.password="",this.errorMessage="",this.updateDetails=function(e,a){t[e]=a},this.resetLoginDets=function(e){for(var a=0;a<e.length;a++)t[e[a]]=""},this.setErrorMessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"All fields are required!!";t.errorMessage=e;var a=t;setTimeout((function(){a.resetLoginDets(["errorMessage"])}),5e3)},this.attemptToLogin=function(){if(t.isValidLogin){var e=t.authenticateUser;e.isAuthenticatedUser?(v.reactLocalStorage.setObject("userId",e.loggedInUser.id),window.location.href="/profile"):t.setErrorMessage("Username or password incorrect!!")}else t.setErrorMessage();t.resetLoginDets(["userName","password"])}}return Object(c.a)(e,[{key:"isValidLogin",get:function(){return!!this.userName&&!!this.password}},{key:"authenticateUser",get:function(){var e=this,t=v.reactLocalStorage.getObject("allUserData").find((function(t){return t.userName.toLowerCase()===e.userName.trim().toLowerCase()}));return{isAuthenticatedUser:!!t&&!!Object.entries(t).length&&t.password===this.password,loggedInUser:t}}}]),e}();Object(D.i)(y,{userName:D.n,password:D.n,errorMessage:D.n,updateDetails:D.d,resetLoginDets:D.d,setErrorMessage:D.d,attemptToLogin:D.d,isValidLogin:D.f,authenticateUser:D.f});var L=function e(){Object(i.a)(this,e),this.loginStore=new y(this),this.profileStore=new N(this)};a(38),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(l.a,new L,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.b68738e9.chunk.js.map