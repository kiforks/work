"use strict";(self.webpackChunkwork=self.webpackChunkwork||[]).push([[361],{9361:(re,c,u)=>{u.r(c),u.d(c,{TemplateFormsPageComponent:()=>ne});var f=u(6895),s=u(433),e=u(1571);let q=(()=>{class n{constructor(){this.onChange=()=>{},this.bannedWords=[]}set banWords(r){this.bannedWords=Array.isArray(r)?r:[r],this.onChange()}validate({value:r}){const t=this.bannedWords.find(a=>a.toLowerCase()===r?.toLowerCase());return t?{banWords:{bannedWord:t}}:null}registerOnValidatorChange(r){this.onChange=r}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","banWords",""]],inputs:{banWords:"banWords"},standalone:!0,features:[e._Bn([{provide:s.Cf,useExisting:n,multi:!0}])]}),n})(),C=(()=>{class n{validate(r){const t=r.get("password"),d=r.get("confirm-password"),a={passwordShouldMatch:{mismatch:!0}};return t?.value===d?.value?null:(d?.setErrors(a),a)}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275dir=e.lG2({type:n,selectors:[["","passwordShouldMatch",""]],standalone:!0,features:[e._Bn([{provide:s.Cf,useExisting:n,multi:!0}])]}),n})();var M=u(4004),A=u(262),y=u(9646),F=u(8746),P=u(529);let w=(()=>{class n{constructor(r,t){this.http=r,this.cdr=t}validate({value:r}){const t={uniqueNickname:{isTaken:!0}},d={uniqueNickname:{unknownError:!0}};return this.http.get(`https://jsonplaceholder.typicode.com/users?username=${r}`).pipe((0,M.U)(({length:a})=>0===a?null:t),(0,A.K)(()=>(0,y.of)(d)),(0,F.x)(()=>this.cdr.markForCheck()))}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(P.eN),e.Y36(e.sBO))},n.\u0275dir=e.lG2({type:n,selectors:[["","uniqueNickname",""]],standalone:!0,features:[e._Bn([{provide:s.SD,multi:!0,useExisting:n}])]}),n})();function x(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1,"This field is required"),e.qZA())}function N(n,o){if(1&n&&(e.TgZ(0,"div",46),e._uU(1," The length should be at least "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," characters "),e.qZA()),2&n){e.oxw();const r=e.MAs(6);e.xp6(3),e.Oqu(r.getError("minlength").requiredLength)}}function U(n,o){if(1&n&&(e.TgZ(0,"div",46),e._uU(1," The value "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," is not allowed "),e.qZA()),2&n){e.oxw();const r=e.MAs(6);e.xp6(3),e.Oqu(r.getError("banWords").bannedWord)}}function I(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1,"This field is required"),e.qZA())}function J(n,o){if(1&n&&(e.TgZ(0,"div",46),e._uU(1," The length should be at least "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," characters "),e.qZA()),2&n){e.oxw();const r=e.MAs(14);e.xp6(3),e.Oqu(r.getError("minlength").requiredLength)}}function b(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1,"This field is required"),e.qZA())}function E(n,o){if(1&n&&(e.TgZ(0,"div",46),e._uU(1," The length should be at least "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," characters "),e.qZA()),2&n){e.oxw();const r=e.MAs(21);e.xp6(3),e.Oqu(r.getError("minlength").requiredLength)}}function Q(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," Only letters, numbers, _ and . is allowed "),e.qZA())}function k(n,o){if(1&n&&(e.TgZ(0,"div",46),e._uU(1," The value "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," is not allowed "),e.qZA()),2&n){e.oxw();const r=e.MAs(21);e.xp6(3),e.Oqu(r.getError("banWords").bannedWord)}}function Y(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," This nickname is taken "),e.qZA())}function O(n,o){1&n&&(e.TgZ(0,"div",47),e._uU(1,"Checking..."),e.qZA())}function D(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1,"This field is required"),e.qZA())}function W(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1,"This field should be a valid email"),e.qZA())}function S(n,o){if(1&n&&(e.TgZ(0,"option",48),e._uU(1),e.qZA()),2&n){const r=o.$implicit;e.Q6J("value",r),e.xp6(1),e.Oqu(r)}}function B(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," This field is required "),e.qZA())}function G(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," Invalid passport number "),e.qZA())}function L(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1,"Required for adults"),e.qZA())}function R(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," This field is required "),e.qZA())}function j(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1,"This field is required"),e.qZA())}function K(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," This field is required "),e.qZA())}function V(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," This field is required "),e.qZA())}function $(n,o){if(1&n&&(e.TgZ(0,"div",46),e._uU(1," Password length should be at least "),e.TgZ(2,"strong"),e._uU(3),e.qZA(),e._uU(4," characters "),e.qZA()),2&n){e.oxw();const r=e.MAs(78);e.xp6(3),e.Oqu(r.getError("minlength").requiredLength)}}function z(n,o){1&n&&(e.TgZ(0,"div",46),e._uU(1," Password doesn't match "),e.qZA())}const H=function(){return{updateOn:"blur"}},X=function(){return["test","test_test","dummy"]},ee=function(){return[]};let ne=(()=>{class n{constructor(){this.userInfo={firstName:"Kostya",lastName:"Kifor",nickname:"kifor.kostya",email:"k.kifor@tenantcloud.com",yearOfBirth:1996,passport:"AB123456",fullAddress:"Some street",city:"Ivano-Frankivsk",postCode:123456,password:"123456",confirmPassword:"123456"}}get isAdult(){return(new Date).getFullYear()-this.userInfo.yearOfBirth>=18}get years(){const r=(new Date).getUTCFullYear();return Array(r-(r-40)).fill("").map((t,d)=>r-d)}ngAfterViewInit(){queueMicrotask(()=>{this.initialFormValues=this.formDir.value})}onSubmitForm(r,t){console.log(t),console.log(r.form.controls),this.formDir.resetForm()}onReset(r){r.preventDefault(),this.formDir.resetForm()}onResetInitialClick(r){r.preventDefault(),this.formDir.resetForm(this.initialFormValues)}}return n.\u0275fac=function(r){return new(r||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-template-forms-page"]],viewQuery:function(r,t){if(1&r&&e.Gf(s.F,5),2&r){let d;e.iGM(d=e.CRH())&&(t.formDir=d.first)}},standalone:!0,features:[e.jDz],decls:93,vars:41,consts:[[1,"form",3,"reset","ngSubmit"],["form","ngForm"],[1,"form-field"],["for","name"],["banWords","test","required","","minlength","2","name","first-name","type","text","id","name","placeholder","Enter your name",3,"ngModel","ngModelChange"],["firstName","ngModel"],["class","input-error",4,"ngIf"],["for","last-name"],["required","","minlength","2","name","last-name","type","text","id","last-name","placeholder","Enter your last name",3,"ngModel","ngModelChange"],["lastName","ngModel"],["for","nickname"],["uniqueNickname","","required","","minlength","3","pattern","^[\\w.]+$","name","nickname","type","text","id","nickname","placeholder","Come up with a nickname",3,"ngModelOptions","banWords","ngModel","ngModelChange"],["nickname","ngModel"],["class","input-info",4,"ngIf"],["for","email"],["email","","required","","name","email","type","email","id","email","placeholder","Provide your email",3,"ngModel","ngModelChange"],["email","ngModel"],[1,"form-field-inline-group"],[1,"form-field","form-field-small"],["for","year-of-birth"],["required","","id","year-of-birth","name","year-of-birth",3,"ngModel","ngModelChange"],["yearOfBirth","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","passport"],["pattern","^[A-Z]{2}[0-9]{6}$","name","passport","type","text","id","passport","placeholder","Provide Passport Data",3,"required","ngModel","ngModelChange"],["passport","ngModel"],["ngModelGroup","address"],["for","full-address"],["required","","name","full-address","type","text","id","full-address","placeholder","Street name and house number",3,"ngModel","ngModelChange"],["fullAdress","ngModel"],["for","city"],["required","","name","city","type","text","id","city","placeholder","City",3,"ngModel","ngModelChange"],["city","ngModel"],["for","post-code"],["required","","name","post-code","type","number","id","post-code","placeholder","Post code",3,"ngModel","ngModelChange"],["postCode","ngModel"],["ngModelGroup","password","passwordShouldMatch",""],["for","password"],["required","","minlength","6","name","password","type","password","id","password","placeholder","Enter user's password",3,"ngModel","ngModelChange"],["password","ngModel"],["for","confirm-password"],["name","confirm-password","type","password","id","confirm-password","placeholder","Confirm the password",3,"ngModel","ngModelChange"],["confirmPassword","ngModel"],[3,"disabled"],["type","reset",1,"reset-button"],["type","button",1,"reset-button",3,"click"],[1,"input-error"],[1,"input-info"],[3,"value"]],template:function(r,t){if(1&r){const d=e.EpF();e.TgZ(0,"form",0,1),e.NdJ("reset",function(i){return t.onReset(i)})("ngSubmit",function(i){e.CHM(d);const l=e.MAs(1);return e.KtG(t.onSubmitForm(l,i))}),e.TgZ(2,"div",2)(3,"label",3),e._uU(4,"First Name"),e.qZA(),e.TgZ(5,"input",4,5),e.NdJ("ngModelChange",function(i){return t.userInfo.firstName=i}),e.qZA(),e.YNc(7,x,2,0,"div",6),e.YNc(8,N,5,1,"div",6),e.YNc(9,U,5,1,"div",6),e.qZA(),e.TgZ(10,"div",2)(11,"label",7),e._uU(12,"Last Name"),e.qZA(),e.TgZ(13,"input",8,9),e.NdJ("ngModelChange",function(i){return t.userInfo.lastName=i}),e.qZA(),e.YNc(15,I,2,0,"div",6),e.YNc(16,J,5,1,"div",6),e.qZA(),e.TgZ(17,"div",2)(18,"label",10),e._uU(19,"Nickname"),e.qZA(),e.TgZ(20,"input",11,12),e.NdJ("ngModelChange",function(i){return t.userInfo.nickname=i}),e.qZA(),e.YNc(22,b,2,0,"div",6),e.YNc(23,E,5,1,"div",6),e.YNc(24,Q,2,0,"div",6),e.YNc(25,k,5,1,"div",6),e.YNc(26,Y,2,0,"div",6),e.YNc(27,O,2,0,"div",13),e.qZA(),e.TgZ(28,"div",2)(29,"label",14),e._uU(30,"Email"),e.qZA(),e.TgZ(31,"input",15,16),e.NdJ("ngModelChange",function(i){return t.userInfo.email=i}),e.qZA(),e.YNc(33,D,2,0,"div",6),e.YNc(34,W,2,0,"div",6),e.qZA(),e.TgZ(35,"div",17)(36,"div",18)(37,"label",19),e._uU(38,"Year of birth"),e.qZA(),e.TgZ(39,"select",20,21),e.NdJ("ngModelChange",function(i){return t.userInfo.yearOfBirth=i}),e.YNc(41,S,2,2,"option",22),e.qZA(),e.YNc(42,B,2,0,"div",6),e.qZA(),e.TgZ(43,"div",18)(44,"label",23),e._uU(45,"Passport Number"),e.qZA(),e.TgZ(46,"input",24,25),e.NdJ("ngModelChange",function(i){return t.userInfo.passport=i}),e.qZA(),e.YNc(48,G,2,0,"div",6),e.YNc(49,L,2,0,"div",6),e.qZA()(),e.TgZ(50,"fieldset",26)(51,"legend"),e._uU(52,"Address"),e.qZA(),e.TgZ(53,"div",2)(54,"label",27),e._uU(55,"Full Adress"),e.qZA(),e.TgZ(56,"input",28,29),e.NdJ("ngModelChange",function(i){return t.userInfo.fullAddress=i}),e.qZA(),e.YNc(58,R,2,0,"div",6),e.qZA(),e.TgZ(59,"div",2)(60,"label",30),e._uU(61,"City"),e.qZA(),e.TgZ(62,"input",31,32),e.NdJ("ngModelChange",function(i){return t.userInfo.city=i}),e.qZA(),e.YNc(64,j,2,0,"div",6),e.qZA(),e.TgZ(65,"div",2)(66,"label",33),e._uU(67,"Post Code"),e.qZA(),e.TgZ(68,"input",34,35),e.NdJ("ngModelChange",function(i){return t.userInfo.postCode=i}),e.qZA(),e.YNc(70,K,2,0,"div",6),e.qZA()(),e.TgZ(71,"fieldset",36)(72,"legend"),e._uU(73,"User Password"),e.qZA(),e.TgZ(74,"div",2)(75,"label",37),e._uU(76,"Password"),e.qZA(),e.TgZ(77,"input",38,39),e.NdJ("ngModelChange",function(i){return t.userInfo.password=i}),e.qZA(),e.YNc(79,V,2,0,"div",6),e.YNc(80,$,5,1,"div",6),e.qZA(),e.TgZ(81,"div",2)(82,"label",40),e._uU(83,"Confirm password"),e.qZA(),e.TgZ(84,"input",41,42),e.NdJ("ngModelChange",function(i){return t.userInfo.confirmPassword=i}),e.qZA(),e.YNc(86,z,2,0,"div",6),e.qZA()(),e.TgZ(87,"button",43),e._uU(88,"Save"),e.qZA(),e.TgZ(89,"button",44),e._uU(90,"Reset"),e.qZA(),e.TgZ(91,"button",45),e.NdJ("click",function(i){return t.onResetInitialClick(i)}),e._uU(92,"Initial data"),e.qZA()()}if(2&r){const d=e.MAs(1),a=e.MAs(6),i=e.MAs(14),l=e.MAs(21),m=e.MAs(32),_=e.MAs(40),p=e.MAs(47),h=e.MAs(57),T=e.MAs(63),Z=e.MAs(69),g=e.MAs(78),v=e.MAs(85);e.xp6(5),e.Q6J("ngModel",t.userInfo.firstName),e.xp6(2),e.Q6J("ngIf",a.dirty&&a.hasError("required")),e.xp6(1),e.Q6J("ngIf",a.dirty&&a.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",a.dirty&&a.hasError("banWords")),e.xp6(4),e.Q6J("ngModel",t.userInfo.lastName),e.xp6(2),e.Q6J("ngIf",i.dirty&&i.hasError("required")),e.xp6(1),e.Q6J("ngIf",i.dirty&&i.hasError("minlength")),e.xp6(4),e.Q6J("ngModelOptions",e.DdM(38,H))("banWords",t.isAdult?e.DdM(39,X):e.DdM(40,ee))("ngModel",t.userInfo.nickname),e.xp6(2),e.Q6J("ngIf",l.dirty&&l.hasError("required")),e.xp6(1),e.Q6J("ngIf",l.dirty&&l.hasError("minlength")),e.xp6(1),e.Q6J("ngIf",l.dirty&&l.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",l.dirty&&l.hasError("banWords")),e.xp6(1),e.Q6J("ngIf",l.dirty&&l.hasError("uniqueNickname")),e.xp6(1),e.Q6J("ngIf",l.pending),e.xp6(4),e.Q6J("ngModel",t.userInfo.email),e.xp6(2),e.Q6J("ngIf",m.dirty&&m.hasError("required")),e.xp6(1),e.Q6J("ngIf",m.dirty&&m.hasError("email")),e.xp6(5),e.Q6J("ngModel",t.userInfo.yearOfBirth),e.xp6(2),e.Q6J("ngForOf",t.years),e.xp6(1),e.Q6J("ngIf",_.dirty&&_.hasError("required")),e.xp6(4),e.Q6J("required",t.isAdult)("ngModel",t.userInfo.passport),e.xp6(2),e.Q6J("ngIf",p.dirty&&p.hasError("pattern")),e.xp6(1),e.Q6J("ngIf",p.dirty&&p.hasError("required")),e.xp6(7),e.Q6J("ngModel",t.userInfo.fullAddress),e.xp6(2),e.Q6J("ngIf",h.dirty&&h.hasError("required")),e.xp6(4),e.Q6J("ngModel",t.userInfo.city),e.xp6(2),e.Q6J("ngIf",T.dirty&&T.hasError("required")),e.xp6(4),e.Q6J("ngModel",t.userInfo.postCode),e.xp6(2),e.Q6J("ngIf",Z.dirty&&Z.hasError("required")),e.xp6(7),e.Q6J("ngModel",t.userInfo.password),e.xp6(2),e.Q6J("ngIf",g.dirty&&g.hasError("required")),e.xp6(1),e.Q6J("ngIf",g.dirty&&g.hasError("minlength")),e.xp6(4),e.Q6J("ngModel",t.userInfo.confirmPassword),e.xp6(2),e.Q6J("ngIf",v.dirty&&v.hasError("passwordShouldMatch")),e.xp6(1),e.Q6J("disabled",d.invalid||d.pending)}},dependencies:[f.ez,f.sg,f.O5,s.u5,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.Q7,s.wO,s.c5,s.on,s.On,s.Mq,s.F,q,C,w],styles:["[_nghost-%COMP%]{display:flex;flex-grow:1;justify-content:center;align-items:center;width:100%}",".form[_ngcontent-%COMP%]{min-width:395px}.form-field[_ngcontent-%COMP%]{width:100%;height:93px}.form-field-small[_ngcontent-%COMP%]{max-width:48%}.form-field-inline-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"],changeDetection:0}),n})()}}]);