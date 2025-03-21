import{A as F,B as z,C as q,D as Y,E as ue,F as y,I as H,J as I,K as U,L as me,M as fe,N as w,O as k,P as D,Q as R,R as A,S as N,T,U as _e,V as Z,W as $,X as L,Y as xe,a as K,b as ge,c as Q,d as f,e as _,f as P,g as l,h as g,i as h,j as X,k as x,l as d,m as n,n as t,o as c,p as E,q as u,r as m,s as j,t as B,u as o,v as C,w as S,x as v,y as M,z as b}from"./chunk-TV4FDXTB.js";function ve(i,s){if(i&1&&c(0,"img",13),i&2){let e=m(2);d("src",e.previewImage,P)}}function Me(i,s){if(i&1){let e=E();n(0,"form",3),u("ngSubmit",function(){f(e);let a=m();return _(a.onSubmit())}),n(1,"input",4),b("ngModelChange",function(a){f(e);let p=m();return M(p.user.name,a)||(p.user.name=a),_(a)}),t(),n(2,"input",5),b("ngModelChange",function(a){f(e);let p=m();return M(p.user.email,a)||(p.user.email=a),_(a)}),t(),n(3,"input",6),b("ngModelChange",function(a){f(e);let p=m();return M(p.user.password,a)||(p.user.password=a),_(a)}),t(),n(4,"div",7)(5,"label",8),o(6,"Profile Image"),t(),n(7,"input",9),u("change",function(a){f(e);let p=m();return _(p.onImageChange(a))}),t(),x(8,ve,1,1,"img",10),t(),n(9,"button",11),c(10,"i",12),o(11," Add User"),t()()}if(i&2){let e=m();l(),v("ngModel",e.user.name),l(),v("ngModel",e.user.email),l(),v("ngModel",e.user.password),l(5),d("ngIf",e.previewImage)}}function be(i,s){if(i&1&&(n(0,"div",14),o(1),t()),i&2){let e=m();l(),C(e.successMessage)}}var ee=class i{constructor(s,e){this.app=s;this.router=e}user={id:0,name:"",email:"",password:"",registrationDate:"",profileImage:"",status:"Inactive"};previewImage=null;successMessage=null;onImageChange(s){let e=s.target.files?.[0];if(e){let r=new FileReader;r.onload=()=>{this.previewImage=r.result,this.user.profileImage=this.previewImage},r.readAsDataURL(e)}}onSubmit(){if(!this.user.profileImage){alert("Please upload a profile image!");return}this.app.addUser(K({},this.user)),this.successMessage="User added successfully! Login to activate.",setTimeout(()=>this.router.navigate(["/users"]),2e3)}static \u0275fac=function(e){return new(e||i)(g(w),g(I))};static \u0275cmp=h({type:i,selectors:[["app-add-user"]],standalone:!1,decls:5,vars:2,consts:[[1,"fas","fa-user-plus"],["class","add-user-form",3,"ngSubmit",4,"ngIf"],["class","success-message",4,"ngIf"],[1,"add-user-form",3,"ngSubmit"],["name","name","placeholder","Name","required","",3,"ngModelChange","ngModel"],["name","email","placeholder","Email","required","",3,"ngModelChange","ngModel"],["type","password","name","password","placeholder","Password","required","",3,"ngModelChange","ngModel"],[1,"input-group"],["for","profileImage"],["id","profileImage","type","file","accept","image/*","required","",3,"change"],["alt","Preview","class","image-preview",3,"src",4,"ngIf"],["type","submit"],[1,"fas","fa-save"],["alt","Preview",1,"image-preview",3,"src"],[1,"success-message"]],template:function(e,r){e&1&&(n(0,"h2"),c(1,"i",0),o(2," Add User"),t(),x(3,Me,12,4,"form",1)(4,be,2,1,"div",2)),e&2&&(l(3),d("ngIf",!r.successMessage),l(),d("ngIf",r.successMessage))},dependencies:[y,T,k,D,R,L,N,A],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;align-items:center;animation:_ngcontent-%COMP%_fadeIn .5s ease}input[_ngcontent-%COMP%]{padding:10px;border:2px solid #6B7280;border-radius:6px;width:100%;max-width:300px}.input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;width:100%;max-width:300px}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#6b7280;margin-bottom:5px;font-weight:700}.image-preview[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;margin-top:10px;object-fit:cover}button[_ngcontent-%COMP%]{background:#8b5cf6}.success-message[_ngcontent-%COMP%]{color:#10b981;text-align:center;margin-top:20px;animation:_ngcontent-%COMP%_slideIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}"]})};var ne=class i{constructor(s,e,r){this.app=s;this.route=e;this.router=r;this.id=Number(this.route.snapshot.paramMap.get("id"))}id;ngOnInit(){}onDelete(){this.app.deleteUser(this.id),this.router.navigate(["/users"])}static \u0275fac=function(e){return new(e||i)(g(w),g(H),g(I))};static \u0275cmp=h({type:i,selectors:[["app-delete-user"]],standalone:!1,decls:12,vars:0,consts:[[1,"fas","fa-trash"],[1,"warning"],[1,"buttons"],[1,"yes-btn",3,"click"],[1,"fas","fa-check"],[3,"click"],[1,"fas","fa-times"]],template:function(e,r){e&1&&(n(0,"h2"),c(1,"i",0),o(2," Delete User"),t(),n(3,"p",1),o(4,"Are you sure you want to delete this user?"),t(),n(5,"div",2)(6,"button",3),u("click",function(){return r.onDelete()}),c(7,"i",4),o(8," Yes"),t(),n(9,"button",5),u("click",function(){return r.router.navigate(["/users"])}),c(10,"i",6),o(11," No"),t()())},styles:[".warning[_ngcontent-%COMP%]{text-align:center;color:#ef4444;font-size:1.2em;margin-bottom:20px}.buttons[_ngcontent-%COMP%]{text-align:center;margin-top:25px}.yes-btn[_ngcontent-%COMP%]{background:#ef4444;margin-right:15px}.yes-btn[_ngcontent-%COMP%]:hover{background:#dc2626;transform:translateY(-2px);box-shadow:0 4px 12px #0003}"]})};function we(i,s){if(i&1){let e=E();n(0,"form",2),u("ngSubmit",function(){f(e);let a=m();return _(a.onSubmit())}),n(1,"input",3),b("ngModelChange",function(a){f(e);let p=m();return M(p.user.name,a)||(p.user.name=a),_(a)}),t(),n(2,"input",4),b("ngModelChange",function(a){f(e);let p=m();return M(p.user.email,a)||(p.user.email=a),_(a)}),t(),n(3,"input",5),b("ngModelChange",function(a){f(e);let p=m();return M(p.user.password,a)||(p.user.password=a),_(a)}),t(),n(4,"select",6),b("ngModelChange",function(a){f(e);let p=m();return M(p.user.status,a)||(p.user.status=a),_(a)}),n(5,"option",7),o(6,"Active"),t(),n(7,"option",8),o(8,"Inactive"),t()(),n(9,"button",9),c(10,"i",10),o(11," Save"),t()()}if(i&2){let e=m();l(),v("ngModel",e.user.name),l(),v("ngModel",e.user.email),l(),v("ngModel",e.user.password),l(),v("ngModel",e.user.status)}}var ie=class i{constructor(s,e,r){this.app=s;this.route=e;this.router=r}user;ngOnInit(){let s=Number(this.route.snapshot.paramMap.get("id"));this.user=this.app.users.find(e=>e.id===s)}onSubmit(){this.user&&(this.app.editUser(this.user),this.router.navigate(["/users"]))}static \u0275fac=function(e){return new(e||i)(g(w),g(H),g(I))};static \u0275cmp=h({type:i,selectors:[["app-edit-user"]],standalone:!1,decls:4,vars:1,consts:[[1,"fas","fa-edit"],[3,"ngSubmit",4,"ngIf"],[3,"ngSubmit"],["name","name","placeholder","Name","required","",3,"ngModelChange","ngModel"],["name","email","placeholder","Email","required","",3,"ngModelChange","ngModel"],["name","password","type","password","placeholder","Password","required","",3,"ngModelChange","ngModel"],["name","status",3,"ngModelChange","ngModel"],["value","Active"],["value","Inactive"],["type","submit"],[1,"fas","fa-save"]],template:function(e,r){e&1&&(n(0,"h2"),c(1,"i",0),o(2," Edit User"),t(),x(3,we,12,4,"form",1)),e&2&&(l(3),d("ngIf",r.user))},dependencies:[y,T,Z,$,k,_e,D,R,L,N,A],styles:["form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px;align-items:center;animation:_ngcontent-%COMP%_fadeIn .5s ease}select[_ngcontent-%COMP%]{padding:10px;border:2px solid #6B7280;border-radius:6px;width:100%;max-width:300px;background:#fff;color:#111827}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]})};var ce=ge(fe());function ye(i,s){if(i&1&&(n(0,"div",14),o(1),t()),i&2){let e=m();l(),C(e.errorMessage)}}var oe=class i{constructor(s,e){this.app=s;this.router=e}email="";password="";errorMessage=null;onLogin(){this.app.login(this.email,this.password)?ce.default.fire({title:"Logging In...",html:'<div style="width: 0%; background: #8B5CF6; height: 5px; border-radius: 5px;" id="progressBar"></div>',icon:"info",position:"center",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,backdrop:"rgba(0,0,0,0.5)",customClass:{popup:"animated-alert"},didOpen:()=>{let s=document.getElementById("progressBar");s.style.transition="width 2s ease",s.style.width="100%"}}).then(()=>{ce.default.fire({title:"Welcome!",text:`Hello, ${this.app.currentUser?.name}! You have logged in successfully.`,icon:"success",position:"center",showConfirmButton:!1,timer:1500,backdrop:"rgba(0,0,0,0.5)",customClass:{popup:"animated-alert"}}).then(()=>this.router.navigate(["/users"]))}):(this.errorMessage="Invalid email or password!",setTimeout(()=>this.errorMessage=null,3e3))}static \u0275fac=function(e){return new(e||i)(g(w),g(I))};static \u0275cmp=h({type:i,selectors:[["app-login"]],standalone:!1,decls:23,vars:3,consts:[[1,"login-page"],[1,"login-container"],[1,"fas","fa-sign-in-alt"],[1,"login-form",3,"ngSubmit"],[1,"input-group"],["for","email"],["id","email","name","email","placeholder","Enter your email","required","",3,"ngModelChange","ngModel"],["for","password"],["id","password","type","password","name","password","placeholder","Enter your password","required","",3,"ngModelChange","ngModel"],["type","submit",1,"login-btn"],[1,"register-link"],["routerLink","/users/register"],[1,"fas","fa-user-plus"],["class","alert",4,"ngIf"],[1,"alert"]],template:function(e,r){e&1&&(n(0,"div",0)(1,"div",1)(2,"h2"),c(3,"i",2),o(4," Login"),t(),n(5,"form",3),u("ngSubmit",function(){return r.onLogin()}),n(6,"div",4)(7,"label",5),o(8,"Email"),t(),n(9,"input",6),b("ngModelChange",function(p){return M(r.email,p)||(r.email=p),p}),t()(),n(10,"div",4)(11,"label",7),o(12,"Password"),t(),n(13,"input",8),b("ngModelChange",function(p){return M(r.password,p)||(r.password=p),p}),t()(),n(14,"button",9),c(15,"i",2),o(16," Login"),t()(),n(17,"p",10),o(18,"Don't have an account? "),n(19,"a",11),c(20,"i",12),o(21," Register here"),t()(),x(22,ye,2,1,"div",13),t()()),e&2&&(l(9),v("ngModel",r.email),l(4),v("ngModel",r.password),l(9),d("ngIf",r.errorMessage))},dependencies:[U,y,T,k,D,R,L,N,A],styles:[".login-page[_ngcontent-%COMP%]{min-height:100vh;display:flex;justify-content:center;align-items:center;padding:20px}.login-container[_ngcontent-%COMP%]{max-width:420px;width:100%;border-radius:20px;padding:30px;box-shadow:0 10px 30px #0003;animation:_ngcontent-%COMP%_slideUp .5s ease}h2[_ngcontent-%COMP%]{color:#26022b;font-size:2em;margin-bottom:20px;text-align:center;display:flex;align-items:center;justify-content:center;gap:10px}.login-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:20px}.input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#3f4653;font-weight:600;margin-bottom:8px;font-size:.95em}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{padding:12px 15px;border:2px solid #D1D5DB;border-radius:10px;font-size:1em;color:#111827;background:#f9fafb;transition:border-color .3s ease,box-shadow .3s ease}.input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{outline:none;border-color:#8b5cf6;box-shadow:0 0 8px #8b5cf64d}.login-btn[_ngcontent-%COMP%]{background:#8b5cf6;color:#fff;padding:12px;border:none;border-radius:10px;font-size:1.1em;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:background .3s ease,transform .2s ease,box-shadow .3s ease}.login-btn[_ngcontent-%COMP%]:hover{background:#7c3aed;transform:translateY(-2px);box-shadow:0 6px 15px #7c3aed66}.register-link[_ngcontent-%COMP%]{text-align:center;margin-top:20px;color:#3f4653;font-size:.9em}.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#7c3aed;text-decoration:none;font-weight:600;display:inline-flex;align-items:center;gap:5px;transition:color .3s ease}.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#7c3aed;text-decoration:underline}.alert[_ngcontent-%COMP%]{background:#ef4444;color:#fff;padding:12px;border-radius:8px;margin-top:20px;text-align:center;font-size:.9em;animation:_ngcontent-%COMP%_shake .5s ease}@keyframes _ngcontent-%COMP%_slideUp{0%{transform:translateY(50px);opacity:0}to{transform:translateY(0);opacity:1}}@keyframes _ngcontent-%COMP%_shake{0%,to{transform:translate(0)}25%{transform:translate(-5px)}75%{transform:translate(5px)}}"]})};var Ie=(i,s)=>({active:i,inactive:s}),Pe=i=>["/users/edit",i];function Ee(i,s){if(i&1){let e=E();n(0,"div",3)(1,"div",4)(2,"img",5),u("error",function(a){f(e);let p=m();return _(p.onImageError(a))}),t(),n(3,"div",6)(4,"h3"),o(5),t(),n(6,"span",7),o(7),t()()(),n(8,"div",8)(9,"p")(10,"strong"),o(11,"Email:"),t(),o(12),t(),n(13,"p")(14,"strong"),o(15,"Registration Date:"),t(),o(16),t(),n(17,"p")(18,"strong"),o(19,"Status:"),t(),n(20,"span",9),o(21),t()()(),n(22,"div",10)(23,"button",11),u("click",function(){f(e);let a=m();return _(a.goBack())}),c(24,"i",12),o(25," Back"),t(),n(26,"button",13),c(27,"i",14),o(28," Edit"),t()()()}if(i&2){let e=m();l(2),j("alt",e.user.name),d("src",e.user.profileImage,P),l(3),C(e.user.name),l(2),S("ID: ",e.user.id,""),l(5),S(" ",e.user.email,""),l(4),S(" ",e.user.registrationDate,""),l(4),d("ngClass",z(9,Ie,e.user.status==="Active",e.user.status==="Inactive")),l(),C(e.user.status),l(5),d("routerLink",F(12,Pe,e.user.id))}}function Se(i,s){i&1&&(n(0,"p",15),o(1,"User not found."),t())}var re=class i{constructor(s,e,r){this.app=s;this.route=e;this.router=r}user;ngOnInit(){let s=Number(this.route.snapshot.paramMap.get("id"));this.user=this.app.users.find(e=>e.id===s)}goBack(){this.router.navigate(["/users"])}onImageError(s){s.target.src="/assets/default-user.png"}static \u0275fac=function(e){return new(e||i)(g(w),g(H),g(I))};static \u0275cmp=h({type:i,selectors:[["app-user-details"]],standalone:!1,decls:6,vars:2,consts:[["noUser",""],[1,"fas","fa-info-circle"],["class","details-card",4,"ngIf","ngIfElse"],[1,"details-card"],[1,"user-header"],[1,"profile-img",3,"error","src","alt"],[1,"header-info"],[1,"user-id"],[1,"user-info"],[3,"ngClass"],[1,"actions"],[1,"back-btn",3,"click"],[1,"fas","fa-arrow-left"],[1,"edit-btn",3,"routerLink"],[1,"fas","fa-edit"],[1,"no-user"]],template:function(e,r){if(e&1&&(n(0,"h2"),c(1,"i",1),o(2," User Details"),t(),x(3,Ee,29,14,"div",2)(4,Se,2,0,"ng-template",null,0,q)),e&2){let a=B(5);l(3),d("ngIf",r.user)("ngIfElse",a)}},dependencies:[U,Y,y],styles:[".details-card[_ngcontent-%COMP%]{background:#f9fafb;border-radius:12px;padding:20px;box-shadow:0 6px 15px #0000001a;max-width:500px;margin:20px auto;animation:_ngcontent-%COMP%_fadeIn .5s ease}.user-header[_ngcontent-%COMP%]{display:flex;align-items:center;border-bottom:2px solid #D1D5DB;padding-bottom:10px;margin-bottom:15px}.profile-img[_ngcontent-%COMP%]{width:60px;height:60px;border-radius:50%;margin-right:15px;object-fit:cover}.header-info[_ngcontent-%COMP%]{flex-grow:1}.header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{margin:0;color:#6b7280;font-size:1.5em}.user-id[_ngcontent-%COMP%]{background:#8b5cf6;color:#fff;padding:5px 10px;border-radius:20px;font-size:.9em}.user-info[_ngcontent-%COMP%]{margin-bottom:20px}.user-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0;font-size:1.1em}.user-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#6b7280;margin-right:10px}.active[_ngcontent-%COMP%]{color:#10b981;font-weight:700}.inactive[_ngcontent-%COMP%]{color:#ef4444;font-weight:700}.actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:10px}.back-btn[_ngcontent-%COMP%]{background:#6b7280}.back-btn[_ngcontent-%COMP%]:hover{background:#4b5563;transform:translateY(-2px);box-shadow:0 4px 12px #0003}.edit-btn[_ngcontent-%COMP%]{background:#8b5cf6}.edit-btn[_ngcontent-%COMP%]:hover{background:#7c3aed;transform:translateY(-2px);box-shadow:0 4px 12px #0003}.no-user[_ngcontent-%COMP%]{text-align:center;color:#ef4444;font-style:italic;font-size:1.2em}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}"]})};var Oe=(i,s)=>({active:i,inactive:s}),Ue=i=>["/users/details",i],ke=i=>["/users/edit",i],De=i=>["/users/delete",i];function Re(i,s){if(i&1){let e=E();n(0,"tr")(1,"td")(2,"img",12),u("error",function(a){f(e);let p=m(2);return _(p.onImageError(a))}),t()(),n(3,"td"),o(4),t(),n(5,"td"),o(6),t(),n(7,"td"),o(8),t(),n(9,"td"),o(10),t(),n(11,"td",13),o(12),t(),n(13,"td",14)(14,"a",15),c(15,"i",16),o(16," Details"),t(),n(17,"a",15),c(18,"i",17),o(19," Edit"),t(),n(20,"a",15),c(21,"i",18),o(22," Delete"),t()()()}if(i&2){let e=s.$implicit;l(2),j("alt",e.name),d("src",e.profileImage,P),l(2),C(e.id),l(2),C(e.name),l(2),C(e.email),l(2),C(e.registrationDate),l(),d("ngClass",z(11,Oe,e.status==="Active",e.status==="Inactive")),l(),S(" ",e.status," "),l(2),d("routerLink",F(14,Ue,e.id)),l(3),d("routerLink",F(16,ke,e.id)),l(3),d("routerLink",F(18,De,e.id))}}function Ae(i,s){if(i&1&&(n(0,"table",10)(1,"thead")(2,"tr")(3,"th"),o(4,"Image"),t(),n(5,"th"),o(6,"ID"),t(),n(7,"th"),o(8,"Name"),t(),n(9,"th"),o(10,"Email"),t(),n(11,"th"),o(12,"Registration Date"),t(),n(13,"th"),o(14,"Status"),t(),n(15,"th"),o(16,"Actions"),t()()(),n(17,"tbody"),x(18,Re,23,20,"tr",11),t()()),i&2){let e=m();l(18),d("ngForOf",e.filteredUsers)}}function Ne(i,s){i&1&&(n(0,"p",19),o(1,"No users found."),t())}var ae=class i{constructor(s){this.app=s;this.filterUsers({target:{value:"all"}})}filteredUsers=[];onImageError(s){s.target.src="/assets/default-user.png"}filterUsers(s){let e=s.target.value;e==="all"?this.filteredUsers=this.app.users:e==="active"?this.filteredUsers=this.app.users.filter(r=>r.status==="Active"):this.filteredUsers=this.app.users.filter(r=>r.status==="Inactive")}exportToCSV(){let e=`data:text/csv;charset=utf-8,ID,Name,Email,Registration Date,Status
${this.app.users.map(a=>`${a.id},${a.name},${a.email},${a.registrationDate},${a.status}`).join(`
`)}`,r=document.createElement("a");r.setAttribute("href",encodeURI(e)),r.setAttribute("download","users.csv"),document.body.appendChild(r),r.click(),document.body.removeChild(r)}static \u0275fac=function(e){return new(e||i)(g(w))};static \u0275cmp=h({type:i,selectors:[["app-user-list"]],standalone:!1,decls:17,vars:2,consts:[["noUsers",""],[1,"fas","fa-users"],[1,"controls"],[3,"change"],["value","all"],["value","active"],["value","inactive"],[1,"export-btn",3,"click"],[1,"fas","fa-download"],["class","animated-table",4,"ngIf","ngIfElse"],[1,"animated-table"],[4,"ngFor","ngForOf"],[1,"profile-img",3,"error","src","alt"],[3,"ngClass"],[1,"actions"],[3,"routerLink"],[1,"fas","fa-info-circle"],[1,"fas","fa-edit"],[1,"fas","fa-trash"],[1,"no-users"]],template:function(e,r){if(e&1){let a=E();n(0,"h2"),c(1,"i",1),o(2," User List"),t(),n(3,"div",2)(4,"select",3),u("change",function(he){return f(a),_(r.filterUsers(he))}),n(5,"option",4),o(6,"All Users"),t(),n(7,"option",5),o(8,"Active Users"),t(),n(9,"option",6),o(10,"Inactive Users"),t()(),n(11,"button",7),u("click",function(){return f(a),_(r.exportToCSV())}),c(12,"i",8),o(13," Export to CSV"),t()(),x(14,Ae,19,1,"table",9)(15,Ne,2,0,"ng-template",null,0,q)}if(e&2){let a=B(16);l(14),d("ngIf",r.filteredUsers.length>0)("ngIfElse",a)}},dependencies:[U,Y,ue,y,Z,$],styles:[".controls[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:20px}select[_ngcontent-%COMP%]{padding:8px;border:2px solid #6B7280;border-radius:6px;background:#fff;color:#111827}.export-btn[_ngcontent-%COMP%]{background:#10b981}.export-btn[_ngcontent-%COMP%]:hover{background:#059669}.animated-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:20px;animation:_ngcontent-%COMP%_slideUp .5s ease}th[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{padding:12px;text-align:left;border-bottom:1px solid #D1D5DB}th[_ngcontent-%COMP%]{background:#6b7280;color:#fff;font-weight:700}tr[_ngcontent-%COMP%]{transition:background-color .3s ease}tr[_ngcontent-%COMP%]:hover{background-color:#f3f4f6}.profile-img[_ngcontent-%COMP%]{width:40px;height:40px;border-radius:50%;object-fit:cover}.active[_ngcontent-%COMP%]{color:#10b981;font-weight:700}.inactive[_ngcontent-%COMP%]{color:#ef4444;font-weight:700}.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-right:15px;text-decoration:none;font-size:.9em}.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child{color:#6b7280}.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:nth-child(2){color:#8b5cf6}.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child{color:#ef4444}.actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.no-users[_ngcontent-%COMP%]{text-align:center;color:#ef4444;font-style:italic}@keyframes _ngcontent-%COMP%_slideUp{0%{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}"]})};function Te(i,s){if(i&1&&c(0,"img",18),i&2){let e=m();d("src",e.previewImage,P)}}function Le(i,s){if(i&1&&(n(0,"div",19),o(1),t()),i&2){let e=m();l(),C(e.successMessage)}}function Ve(i,s){if(i&1&&(n(0,"div",20),o(1),t()),i&2){let e=m();l(),C(e.errorMessage)}}var se=class i{constructor(s,e){this.app=s;this.router=e}user={id:0,name:"",email:"",password:"",registrationDate:"",profileImage:"",status:"Inactive"};previewImage=null;successMessage=null;errorMessage=null;onImageChange(s){let e=s.target.files?.[0];if(e){let r=new FileReader;r.onload=()=>{this.previewImage=r.result,this.user.profileImage=this.previewImage},r.readAsDataURL(e)}}onRegister(){this.app.users.some(e=>e.email===this.user.email)?(this.errorMessage="Email already registered!",setTimeout(()=>this.errorMessage=null,3e3)):this.user.profileImage?(this.app.addUser(K({},this.user)),this.successMessage="Registration successful! Please login to activate your account.",setTimeout(()=>this.router.navigate(["/users/login"]),2e3)):(this.errorMessage="Please upload a profile image!",setTimeout(()=>this.errorMessage=null,3e3))}static \u0275fac=function(e){return new(e||i)(g(w),g(I))};static \u0275cmp=h({type:i,selectors:[["app-register"]],standalone:!1,decls:31,vars:6,consts:[[1,"fas","fa-user-plus"],[1,"register-container"],[1,"register-form",3,"ngSubmit"],[1,"input-group"],["for","name"],["id","name","name","name","placeholder","Enter your name","required","",3,"ngModelChange","ngModel"],["for","email"],["id","email","name","email","placeholder","Enter your email","required","",3,"ngModelChange","ngModel"],["for","password"],["id","password","type","password","name","password","placeholder","Enter your password","required","",3,"ngModelChange","ngModel"],["for","profileImage"],["id","profileImage","type","file","accept","assets/*","required","",3,"change"],["alt","Preview","class","image-preview",3,"src",4,"ngIf"],["type","submit",1,"register-btn"],[1,"login-link"],["routerLink","/users/login"],["class","success-alert",4,"ngIf"],["class","error-alert",4,"ngIf"],["alt","Preview",1,"image-preview",3,"src"],[1,"success-alert"],[1,"error-alert"]],template:function(e,r){e&1&&(n(0,"h2"),c(1,"i",0),o(2," Register"),t(),n(3,"div",1)(4,"form",2),u("ngSubmit",function(){return r.onRegister()}),n(5,"div",3)(6,"label",4),o(7,"Name"),t(),n(8,"input",5),b("ngModelChange",function(p){return M(r.user.name,p)||(r.user.name=p),p}),t()(),n(9,"div",3)(10,"label",6),o(11,"Email"),t(),n(12,"input",7),b("ngModelChange",function(p){return M(r.user.email,p)||(r.user.email=p),p}),t()(),n(13,"div",3)(14,"label",8),o(15,"Password"),t(),n(16,"input",9),b("ngModelChange",function(p){return M(r.user.password,p)||(r.user.password=p),p}),t()(),n(17,"div",3)(18,"label",10),o(19,"Profile Image"),t(),n(20,"input",11),u("change",function(p){return r.onImageChange(p)}),t(),x(21,Te,1,1,"img",12),t(),n(22,"button",13),c(23,"i",0),o(24," Register"),t()(),n(25,"p",14),o(26,"Already have an account? "),n(27,"a",15),o(28,"Login here"),t()(),x(29,Le,2,1,"div",16)(30,Ve,2,1,"div",17),t()),e&2&&(l(8),v("ngModel",r.user.name),l(4),v("ngModel",r.user.email),l(4),v("ngModel",r.user.password),l(5),d("ngIf",r.previewImage),l(8),d("ngIf",r.successMessage),l(),d("ngIf",r.errorMessage))},dependencies:[U,y,T,k,D,R,L,N,A],styles:[".register-container[_ngcontent-%COMP%]{max-width:400px;margin:20px auto;padding:20px;background:#f9fafb;border-radius:12px;box-shadow:0 6px 15px #0000001a;animation:_ngcontent-%COMP%_fadeIn .5s ease}.register-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:15px}.input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#6b7280;margin-bottom:5px;font-weight:700}.image-preview[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;margin-top:10px;object-fit:cover}.register-btn[_ngcontent-%COMP%]{background:#8b5cf6;margin-top:10px}.register-btn[_ngcontent-%COMP%]:hover{background:#7c3aed;transform:translateY(-2px);box-shadow:0 4px 12px #0003}.login-link[_ngcontent-%COMP%]{text-align:center;margin-top:15px;color:#6b7280}.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#8b5cf6;text-decoration:none;font-weight:700}.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}.success-alert[_ngcontent-%COMP%]{background:#10b981;color:#fff;padding:12px;border-radius:6px;margin-top:15px;text-align:center;animation:_ngcontent-%COMP%_slideIn .3s ease}.error-alert[_ngcontent-%COMP%]{background:#ef4444;color:#fff;padding:12px;border-radius:6px;margin-top:15px;text-align:center;animation:_ngcontent-%COMP%_slideIn .3s ease}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translateY(-20px);opacity:0}to{transform:translateY(0);opacity:1}}"]})};var de=ge(fe());var We=(i,s)=>({active:i,inactive:s});function je(i,s){if(i&1&&c(0,"img",15),i&2){let e=m(2);d("src",e.previewImage,P)}}function Be(i,s){if(i&1){let e=E();n(0,"div",3)(1,"img",4),u("error",function(a){f(e);let p=m();return _(p.onImageError(a))}),t(),n(2,"div",5)(3,"h3"),o(4),t(),n(5,"p")(6,"strong"),o(7,"Email:"),t(),o(8),t(),n(9,"p")(10,"strong"),o(11,"Registration Date:"),t(),o(12),t(),n(13,"p")(14,"strong"),o(15,"Status:"),t(),n(16,"span",6),o(17),t()(),n(18,"div",7)(19,"label",8),o(20,"Change Profile Image"),t(),n(21,"input",9),u("change",function(a){f(e);let p=m();return _(p.onImageChange(a))}),t(),x(22,je,1,1,"img",10),t(),n(23,"button",11),u("click",function(){f(e);let a=m();return _(a.saveImage())}),c(24,"i",12),o(25," Save Image"),t()(),n(26,"button",13),u("click",function(){f(e);let a=m();return _(a.app.logout())}),c(27,"i",14),o(28," Logout"),t()()}if(i&2){let e=m();l(),j("alt",e.app.currentUser.name),d("src",e.app.currentUser.profileImage||e.defaultImage,P),l(3),C(e.app.currentUser.name),l(4),S(" ",e.app.currentUser.email,""),l(4),S(" ",e.app.currentUser.registrationDate,""),l(4),d("ngClass",z(8,We,e.app.currentUser.status==="Active",e.app.currentUser.status==="Inactive")),l(),C(e.app.currentUser.status),l(5),d("ngIf",e.previewImage)}}function Fe(i,s){i&1&&(n(0,"p",16),o(1,"Please log in to view your profile."),t())}var le=class i{constructor(s){this.app=s}defaultImage="/assets/default-user.png";previewImage=null;onImageError(s){s.target.src=this.defaultImage}onImageChange(s){let e=s.target.files?.[0];if(e){let r=new FileReader;r.onload=()=>{this.previewImage=r.result},r.readAsDataURL(e)}}saveImage(){this.previewImage&&this.app.currentUser?(this.app.currentUser.profileImage=this.previewImage,this.app.editUser(this.app.currentUser),de.default.fire({title:"Success!",text:"Profile image updated successfully.",icon:"success",position:"center",showConfirmButton:!1,timer:1500,backdrop:"rgba(0,0,0,0.5)",customClass:{popup:"animated-alert"}}),this.previewImage=null):de.default.fire({title:"Error!",text:"Please select an image first.",icon:"error",position:"center",showConfirmButton:!1,timer:1500,backdrop:"rgba(0,0,0,0.5)",customClass:{popup:"animated-alert"}})}static \u0275fac=function(e){return new(e||i)(g(w))};static \u0275cmp=h({type:i,selectors:[["app-profile"]],standalone:!1,decls:6,vars:2,consts:[["notLoggedIn",""],[1,"fas","fa-user"],["class","profile-card",4,"ngIf","ngIfElse"],[1,"profile-card"],[1,"profile-img",3,"error","src","alt"],[1,"profile-info"],[3,"ngClass"],[1,"input-group"],["for","profileImage"],["id","profileImage","type","file","accept","image/*",3,"change"],["alt","Preview","class","image-preview",3,"src",4,"ngIf"],[1,"save-btn",3,"click"],[1,"fas","fa-save"],[1,"logout-btn",3,"click"],[1,"fas","fa-sign-out-alt"],["alt","Preview",1,"image-preview",3,"src"],[1,"no-user"]],template:function(e,r){if(e&1&&(n(0,"h2"),c(1,"i",1),o(2," My Profile"),t(),x(3,Be,29,11,"div",2)(4,Fe,2,0,"ng-template",null,0,q)),e&2){let a=B(5);l(3),d("ngIf",r.app.currentUser)("ngIfElse",a)}},dependencies:[Y,y],styles:[".profile-card[_ngcontent-%COMP%]{max-width:500px;margin:20px auto;padding:20px;background:#f9fafb;border-radius:12px;box-shadow:0 6px 15px #0000001a;display:flex;flex-direction:column;align-items:center;animation:_ngcontent-%COMP%_fadeIn .5s ease}.profile-img[_ngcontent-%COMP%]{width:100px;height:100px;border-radius:50%;margin-bottom:20px}.profile-info[_ngcontent-%COMP%]{text-align:center}.profile-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#6b7280;margin:0 0 10px}.profile-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:10px 0}.input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-top:15px}.input-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{color:#6b7280;margin-bottom:5px;font-weight:700}.image-preview[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;margin-top:10px;object-fit:cover}.save-btn[_ngcontent-%COMP%]{background:#10b981;margin-top:15px}.save-btn[_ngcontent-%COMP%]:hover{background:#059669}.active[_ngcontent-%COMP%]{color:#10b981;font-weight:700}.inactive[_ngcontent-%COMP%]{color:#ef4444;font-weight:700}.logout-btn[_ngcontent-%COMP%]{background:#ef4444;margin-top:20px}.logout-btn[_ngcontent-%COMP%]:hover{background:#dc2626}.no-user[_ngcontent-%COMP%]{text-align:center;color:#ef4444}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0}to{opacity:1}}"]})};var ze=[{path:"",component:ae},{path:"add",component:ee},{path:"login",component:oe},{path:"edit/:id",component:ie},{path:"details/:id",component:re},{path:"delete/:id",component:ne},{path:"register",component:se},{path:"profile",component:le}],pe=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=X({type:i});static \u0275inj=Q({imports:[me.forChild(ze),me]})};var Ce=class i{static \u0275fac=function(e){return new(e||i)};static \u0275mod=X({type:i});static \u0275inj=Q({imports:[pe,xe]})};export{Ce as UsersModule};
