(this["webpackJsonpmern-stack-client"]=this["webpackJsonpmern-stack-client"]||[]).push([[0],{128:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(18),i=a(45),s=a(89),u=a(90),m=a(12),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{authData:null},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH":return localStorage.setItem("profile",JSON.stringify(Object(m.a)({},null===t||void 0===t?void 0:t.data))),Object(m.a)(Object(m.a)({},e),{},{authData:null===t||void 0===t?void 0:t.data});case"LOGOUT":return localStorage.clear(),Object(m.a)(Object(m.a)({},e),{},{authData:null});default:return e}},p=Object(i.b)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_ALL":return t.payload;case"LIKE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"CREATE":return[].concat(Object(u.a)(e),[t.payload]);case"UPDATE":return e.map((function(e){return e._id===t.payload._id?t.payload:e}));case"DELETE":return e.filter((function(e){return e._id!==t.payload}));default:return e}},auth:d}),f=a(174),g=a(41),v=a(6),b=a(15),h=a(164),E=a(131),y=a(166),x=a(179),j=a(167),O=a(160),C=a(163),k=Object(O.a)((function(e){return{appBar:{borderRadius:15,margin:"30px 0",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:"10px 50px"},heading:{color:"rgba(0,183,255, 1)",textDecoration:"none"},image:{marginLeft:"15px"},toolbar:{display:"flex",justifyContent:"flex-end",width:"400px"},profile:{display:"flex",justifyContent:"space-between",width:"400px"},userName:{display:"flex",alignItems:"center"},brandContainer:{display:"flex",alignItems:"center"},purple:{color:e.palette.getContrastText(C.a[500]),backgroundColor:C.a[500]}}})),w=a(77),S=a.n(w),N=a(78),I=function(){var e=k(),t=Object(n.useState)(JSON.parse(localStorage.getItem("profile"))),a=Object(b.a)(t,2),l=a[0],c=a[1],i=Object(o.b)(),s=Object(v.f)(),u=Object(v.e)(),m=Object(n.useCallback)((function(){i({type:"LOGOUT"}),s("/"),c(null)}),[i,s]);return Object(n.useEffect)((function(){var e=null===l||void 0===l?void 0:l.token;e&&(1e3*Object(N.a)(e).exp<(new Date).getTime()&&m());c(JSON.parse(localStorage.getItem("profile")))}),[u,l.token,m]),console.log(l),r.a.createElement("div",null,r.a.createElement(h.a,{className:e.appBar,position:"static",color:"inherit"},r.a.createElement("div",{className:e.brandContainer},r.a.createElement(E.a,{component:g.b,to:"/",className:e.heading,variant:"h2",align:"center"},"Memories"),r.a.createElement("img",{className:e.image,src:S.a,alt:"icon",height:"60"})),r.a.createElement(y.a,{className:e.toolbar},l?r.a.createElement("div",{className:e.profile},r.a.createElement(x.a,{className:e.purple,alt:l.result.name,src:l.result.imageUrl},l.result.name.charAt(0)),r.a.createElement(E.a,{className:e.userName,variant:"h6"},l.result.name),r.a.createElement(j.a,{variant:"contained",className:e.logout,color:"secondary",onClick:m},"Logout")):r.a.createElement(j.a,{component:g.b,to:"/auth",variant:"contained",color:"primary"},"Sign In"))))},T=a(178),A=a(173),L=a(172),D=a(168),F=a(169),_=a(170),U=a(171),P=a(81),z=a.n(P),B=a(59),W=a.n(B),H=a(83),J=a.n(H),M=a(82),R=a.n(M),G=a(79),V=a.n(G),q=a(11),K=a.n(q),Y=a(21),Z=a(80),Q=a.n(Z).a.create({baseURL:"https://memoriesposts.herokuapp.com"});Q.interceptors.request.use((function(e){return localStorage.getItem("profile")&&(e.headers.Authorization="Bearer ".concat(JSON.parse(localStorage.getItem("profile")).token)),e}));var X=function(e){return Q.patch("/posts/".concat(e,"/likePost"))},$=function(e,t){return Q.patch("/posts/".concat(e),t)},ee=function(e){return Q.delete("/posts/".concat(e))},te=function(e){return Q.post("/user/signin",e)},ae=function(e){return Q.post("/user/signup",e)},ne=function(e){return function(){var t=Object(Y.a)(K.a.mark((function t(a){var n,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l=e,Q.post("/posts",l);case 3:n=t.sent,r=n.data,a({type:"CREATE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}var l}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},re=function(e,t){return function(){var a=Object(Y.a)(K.a.mark((function a(n){var r,l;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,$(e,t);case 3:r=a.sent,l=r.data,n({type:"UPDATE",payload:l}),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),console.log(a.t0.message);case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()},le=Object(O.a)({media:{height:0,paddingTop:"56.25%",backgroundColor:"rgba(0, 0, 0, 0.5)",backgroundBlendMode:"darken"},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderRadius:"15px",height:"100%",position:"relative"},overlay:{position:"absolute",top:"20px",left:"20px",color:"white"},overlay2:{position:"absolute",top:"20px",right:"20px",color:"white"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),ce=function(e){var t,a,n,l,c=e.post,i=e.setCurrentId,s=Object(o.b)(),u=le(),m=JSON.parse(localStorage.getItem("profile"));console.log(c);var d=function(){var e;return(null===c||void 0===c||null===(e=c.likes)||void 0===e?void 0:e.length)>0?c.likes.find((function(e){var t,a;return e===((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.googleId)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id))}))?r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{fontSize:"small"}),"\xa0",c.likes.length>2?"You and ".concat(c.likes.length-1," others"):"".concat(c.likes.length," like").concat(c.likes.length>1?"s":"")):r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{fontSize:"small"}),"\xa0",c.likes.length," ",1===c.likes.length?"Like":"Likes"):r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{fontSize:"small"}),"\xa0Like")};return r.a.createElement(D.a,{className:u.card},r.a.createElement(F.a,{className:u.media,image:c.selectedFile||"https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png",title:c.title}),r.a.createElement("div",{className:u.overlay},r.a.createElement(E.a,{variant:"h6"},c.name),r.a.createElement(E.a,{variant:"body2"},V()(c.createdAt).fromNow())),((null===m||void 0===m||null===(t=m.result)||void 0===t?void 0:t.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===m||void 0===m||null===(a=m.result)||void 0===a?void 0:a._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement("div",{className:u.overlay2},r.a.createElement(j.a,{style:{color:"white"},size:"small",onClick:function(){return i(c._id)}},r.a.createElement(R.a,{fontSize:"medium"}))),r.a.createElement("div",{className:u.details},r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"h2"},c.tags.map((function(e){return"#".concat(e," ")})))),r.a.createElement(E.a,{className:u.title,gutterBottom:!0,variant:"h5",component:"h2"},c.title),r.a.createElement(_.a,null,r.a.createElement(E.a,{variant:"body2",color:"textSecondary",component:"p"},c.message)),r.a.createElement(U.a,{className:u.cardActions},r.a.createElement(j.a,{size:"small",color:"primary",disabled:!(null===m||void 0===m?void 0:m.result),onClick:function(){return s((e=c._id,function(){var t=Object(Y.a)(K.a.mark((function t(a){var n,r;return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,X(e);case 3:n=t.sent,r=n.data,a({type:"LIKE",payload:r}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.message);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(d,null)),((null===m||void 0===m||null===(n=m.result)||void 0===n?void 0:n.googleId)===(null===c||void 0===c?void 0:c.creator)||(null===m||void 0===m||null===(l=m.result)||void 0===l?void 0:l._id)===(null===c||void 0===c?void 0:c.creator))&&r.a.createElement(j.a,{size:"small",color:"primary",onClick:function(){return s((e=c._id,function(){var t=Object(Y.a)(K.a.mark((function t(a){return K.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee(e);case 3:a({type:"DELETE",payload:e}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()));var e}},r.a.createElement(J.a,{fontSize:"small"})," Delete")))},oe=Object(O.a)((function(e){return{mainContainer:{display:"flex",alignItems:"center"},smMargin:{margin:e.spacing(1)},actionDiv:{textAlign:"center"}}})),ie=function(e){var t=e.setCurrentId,a=Object(o.c)((function(e){return e.posts})),n=oe();return a.length?r.a.createElement(A.a,{className:n.container,container:!0,alignItems:"stretch",spacing:3},a.map((function(e){return r.a.createElement(A.a,{key:e._id,item:!0,xs:12,sm:6,md:6},r.a.createElement(ce,{post:e,setCurrentId:t}))}))):r.a.createElement(L.a,null)},se=a(92),ue=a(177),me=a(84),de=a.n(me),pe=Object(O.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1)}},paper:{padding:e.spacing(2)},form:{display:"flex",flexWrap:"wrap",justifyContent:"center"},fileInput:{width:"97%",margin:"10px 0"},buttonSubmit:{marginBottom:10}}})),fe=function(e){var t,a=e.currentId,l=e.setCurrentId,c=Object(n.useState)({title:"",message:"",tags:"",selectedFile:""}),i=Object(b.a)(c,2),s=i[0],u=i[1],d=Object(o.c)((function(e){return a?e.posts.find((function(e){return e._id===a})):null})),p=Object(o.b)(),f=pe(),g=JSON.parse(localStorage.getItem("profile"));Object(n.useEffect)((function(){d&&u(d)}),[d]);var v=function(){l(0),u({title:"",message:"",tags:"",selectedFile:""})},h=function(){var e=Object(Y.a)(K.a.mark((function e(t){var n,r;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),0===a?(p(ne(Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(n=g.result)||void 0===n?void 0:n.name}))),v()):(p(re(Object(m.a)(Object(m.a)({},s),{},{name:null===g||void 0===g||null===(r=g.result)||void 0===r?void 0:r.name}))),v());case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(null===g||void 0===g||null===(t=g.result)||void 0===t?void 0:t.name)?r.a.createElement(se.a,{className:f.paper},r.a.createElement("form",{autoComplete:"off",noValidate:!0,className:"".concat(f.root," ").concat(f.form),onSubmit:h},r.a.createElement(E.a,{variant:"h6"},a?'Editing "'.concat(d.title,'"'):"Creating a Memory"),r.a.createElement(ue.a,{name:"title",variant:"outlined",label:"Title",fullWidth:!0,value:s.title,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{title:e.target.value}))}}),r.a.createElement(ue.a,{name:"message",variant:"outlined",label:"Message",fullWidth:!0,multiline:!0,rows:4,value:s.message,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{message:e.target.value}))}}),r.a.createElement(ue.a,{name:"tags",variant:"outlined",label:"Tags (coma separated)",fullWidth:!0,value:s.tags,onChange:function(e){return u(Object(m.a)(Object(m.a)({},s),{},{tags:e.target.value.split(",")}))}}),r.a.createElement("div",{className:f.fileInput},r.a.createElement(de.a,{type:"file",multiple:!1,onDone:function(e){var t=e.base64;return u(Object(m.a)(Object(m.a)({},s),{},{selectedFile:t}))}})),r.a.createElement(j.a,{className:f.buttonSubmit,variant:"contained",color:"primary",size:"large",type:"submit",fullWidth:!0},"Submit"),r.a.createElement(j.a,{variant:"contained",color:"secondary",size:"small",onClick:v,fullWidth:!0},"Clear"))):r.a.createElement(se.a,{className:f.paper},r.a.createElement(E.a,{variant:"h6",align:"center"},"Please Sign In to create memories and like other's memories"))},ge=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],l=t[1],c=Object(o.b)();return Object(n.useEffect)((function(){c(function(){var e=Object(Y.a)(K.a.mark((function e(t){var a,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Q.get("/posts");case 3:a=e.sent,n=a.data,t({type:"FETCH_ALL",payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[a,c]),r.a.createElement("div",null,r.a.createElement(T.a,{in:!0},r.a.createElement(f.a,null,r.a.createElement(A.a,{container:!0,justifyContent:"space-between",alignItems:"stretch",spacing:3},r.a.createElement(A.a,{item:!0,xs:12,sm:7},r.a.createElement(ie,{setCurrentId:l})),r.a.createElement(A.a,{item:!0,xs:12,sm:4},r.a.createElement(fe,{currentId:a,setCurrentId:l}))))))},ve=a(54),be=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center",padding:e.spacing(2)},root:{"& .MuiTextField-root":{margin:e.spacing(1)}},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},googleButton:{marginBottom:e.spacing(2)}}})),he=a(88),Ee=a.n(he),ye=a(85),xe=a(175),je=a(176),Oe=a(86),Ce=a.n(Oe),ke=a(87),we=a.n(ke),Se=function(e){var t=e.name,a=e.handleChange,n=e.label,l=e.half,c=e.autoFocus,o=e.type,i=e.handleShowPassword;return r.a.createElement(A.a,{item:!0,xs:12,sm:l?6:12},r.a.createElement(ue.a,{name:t,onChange:a,variant:"outlined",required:!0,fullWidth:!0,label:n,autoFocus:c,type:o,InputProps:"password"===t?{endAdornment:r.a.createElement(xe.a,{position:"end"},r.a.createElement(je.a,{onClick:i},"password"===o?r.a.createElement(Ce.a,null):r.a.createElement(we.a,null)))}:null}))},Ne=function(){return r.a.createElement("svg",{style:{width:"20px",height:"20px"},viewBox:"0 0 24 24"},r.a.createElement("path",{fill:"currentColor",d:"M21.35,11.1H12.18V13.83H18.69C18.36,17.64 15.19,19.27 12.19,19.27C8.36,19.27 5,16.25 5,12C5,7.9 8.2,4.73 12.2,4.73C15.29,4.73 17.1,6.7 17.1,6.7L19,4.72C19,4.72 16.56,2 12.1,2C6.42,2 2.03,6.8 2.03,12C2.03,17.05 6.16,22 12.25,22C17.6,22 21.5,18.33 21.5,12.91C21.5,11.76 21.35,11.1 21.35,11.1V11.1Z"}))},Ie={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},Te=function(){var e=be(),t=Object(n.useState)(!1),a=Object(b.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(!1),s=Object(b.a)(i,2),u=s[0],d=s[1],p=Object(n.useState)(Ie),g=Object(b.a)(p,2),h=g[0],y=g[1],O=Object(o.b)(),C=Object(v.f)(),k=function(e){y(Object(m.a)(Object(m.a)({},h),{},Object(ve.a)({},e.target.name,e.target.value)))},w=function(){var e=Object(Y.a)(K.a.mark((function e(t){var a,n;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,null===t||void 0===t?void 0:t.profileObj;case 2:return a=e.sent,e.next=5,null===t||void 0===t?void 0:t.tokenId;case 5:n=e.sent;try{O({type:"AUTH",data:{result:a,token:n}}),C("/")}catch(r){console.log(r)}case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(f.a,{component:"main",maxWidth:"xs"},r.a.createElement(se.a,{className:e.paper,elevation:3},r.a.createElement(x.a,{className:e.avatar},r.a.createElement(Ee.a,null)),r.a.createElement(E.a,{variant:"h5"},u?"Sign Up":"Sign In"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),O(u?function(e,t){return function(){var a=Object(Y.a)(K.a.mark((function a(n){var r,l;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,ae(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(h,C):function(e,t){return function(){var a=Object(Y.a)(K.a.mark((function a(n){var r,l;return K.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,te(e);case 3:r=a.sent,l=r.data,n({type:"AUTH",data:l}),t("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.log(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})));return function(e){return a.apply(this,arguments)}}()}(h,C))}},r.a.createElement(A.a,{container:!0,spacing:2},u&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Se,{name:"firstName",label:"First Name",handleChange:k,autoFocus:!0,half:!0}),r.a.createElement(Se,{name:"lastName",label:"Last Name",handleChange:k,autoFocus:!0,half:!0})),r.a.createElement(Se,{name:"email",label:"Email Address",handleChange:k,type:"email"}),r.a.createElement(Se,{name:"password",label:"Password",handleChange:k,type:l?"text":"password",handleShowPassword:function(){return c((function(e){return!e}))}}),u&&r.a.createElement(Se,{name:"confirmPassword",label:"Repeat Password",handleChange:k,type:"password"}),r.a.createElement(j.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},u?"Sign Up":"Sign In"),r.a.createElement(ye.GoogleLogin,{clientId:"1071445933862-5v7dcnp40pl5obr98algsrj39dtn1ltm.apps.googleusercontent.com",render:function(t){return r.a.createElement(j.a,{className:e.googleButton,color:"primary",fullWidth:!0,onClick:t.onClick,disabled:t.disabled,startIcon:r.a.createElement(Ne,null),variant:"contained"},"Google Sign In")},onSuccess:w,onFailure:function(){console.log("Google Sign in was unsuccessful. Try again later")},cookiePolicy:"single_host_origin"}),r.a.createElement(A.a,{container:!0,justifyContent:"flex-end"},r.a.createElement(A.a,{item:!0},r.a.createElement(j.a,{onClick:function(){d((function(e){return!e})),c(!1)}},u?"Already have an account? Sign In":"Don't have an account? Sign Up")))))))},Ae=function(){return r.a.createElement(g.a,null,r.a.createElement(f.a,{maxWidth:"lg"},r.a.createElement(I,null),r.a.createElement(v.c,null,r.a.createElement(v.a,{path:"/",exact:!0,element:r.a.createElement(ge,null)}),r.a.createElement(v.a,{path:"/auth",exact:!0,element:r.a.createElement(Te,null)}))))},Le=(a(128),Object(i.d)(p,Object(i.c)(Object(i.a)(s.a))));c.a.render(r.a.createElement(o.a,{store:Le},r.a.createElement(Ae,null)),document.getElementById("root"))},77:function(e,t,a){e.exports=a.p+"static/media/memories.5c0c63fb.png"},99:function(e,t,a){e.exports=a(129)}},[[99,1,2]]]);
//# sourceMappingURL=main.85d7bdbd.chunk.js.map