(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"7LTw":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),e=function(){},o=u("pMnS"),a=u("iInd"),i=u("SVse"),c=u("fNgX"),r=u("Nv++"),s=u("cUpR"),b=function(){function l(){this.navigationItems=[{text:"Calendar",icon:"calendar-week",routerLink:"calendar"},{text:"Digital Clock",icon:"clock",routerLink:"digital-clock"},{text:"Analog Clock",icon:"clock",routerLink:"analog-clock"},{text:"Stopwatch",icon:"stopwatch",routerLink:"stopwatch"},{text:"Calculator",icon:"calculator",routerLink:"calculator"},{text:"Table",icon:"table",routerLink:"table"}],this.filteredItems=this.navigationItems}return l.prototype.onSearchChange=function(l){this.filteredItems=l?this.navigationItems.filter((function(n){return n.text.toLowerCase().includes(l.toLowerCase())})):this.navigationItems},l}(),p=t.ob({encapsulation:0,styles:[[""]],data:{}});function h(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,9,"a",[["aria-controls","v-pills-home"],["aria-selected","true"],["class","nav-link"],["data-toggle","pill"],["id","v-pills-home-tab"],["role","tab"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var e=!0;return"click"===n&&(e=!1!==t.Bb(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e),e}),null,null)),t.pb(1,671744,[[2,4]],0,a.n,[a.k,a.a,i.g],{routerLink:[0,"routerLink"]},null),t.pb(2,1720320,null,2,a.m,[a.k,t.k,t.B,[2,a.l],[2,a.n]],{routerLinkActive:[0,"routerLinkActive"]},null),t.Hb(603979776,1,{links:1}),t.Hb(603979776,2,{linksWithHrefs:1}),(l()(),t.qb(5,0,null,null,3,"span",[["class","mr-2"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,2,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),t.pb(7,573440,null,0,r.a,[s.b,r.b],{iconProp:[0,"iconProp"]},null),t.Cb(8,2),(l()(),t.Jb(9,null,[" ",""]))],(function(l,n){l(n,1,0,n.context.$implicit.routerLink),l(n,2,0,"active");var u=l(n,8,0,"fa",n.context.$implicit.icon);l(n,7,0,u)}),(function(l,n){l(n,0,0,t.Bb(n,1).target,t.Bb(n,1).href),l(n,6,0,t.Bb(n,7).renderedIconHTML),l(n,9,0,n.context.$implicit.text)}))}function d(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"div",[["class","col px-0 pt-2 pb-2 border-bottom"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,0,"input",[["class","form-control"],["placeholder","Search..."],["type","text"]],null,[[null,"keyup"]],(function(l,n,u){var t=!0;return"keyup"===n&&(t=!1!==l.component.onSearchChange(u.target.value)&&t),t}),null,null)),(l()(),t.qb(2,0,null,null,2,"div",[["aria-orientation","vertical"],["class","nav flex-column nav-pills mb-4"],["id","v-pills-tab"],["role","tablist"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,h)),t.pb(4,278528,null,0,i.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,4,0,n.component.filteredItems)}),null)}var f=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),g=t.ob({encapsulation:0,styles:[[""]],data:{}});function m(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,9,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,8,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,2,"div",[["class","col-12 col-sm-4 col-lg-2 border-right"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,1,"app-side-navigation",[],null,null,null,d,p)),t.pb(4,49152,null,0,b,[],null,null),(l()(),t.qb(5,0,null,null,3,"div",[["class","col-12 col-sm-8"]],null,null,null,null,null)),(l()(),t.qb(6,0,null,null,2,"div",[["class","container my-3"]],null,null,null,null,null)),(l()(),t.qb(7,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t.pb(8,212992,null,0,a.p,[a.b,t.M,t.j,[8,null],t.h],null,null),(l()(),t.qb(9,0,null,null,0,"div",[["class","col-12 col-lg-2"]],null,null,null,null,null))],(function(l,n){l(n,8,0)}),null)}var y=t.mb("app-design",f,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-design",[],null,null,null,m,g)),t.pb(1,114688,null,0,f,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),k=["January","February","March","April","May","June","July","August","September","October","November","December"],q=function(l){return l[l.Sunday=0]="Sunday",l[l.Monday=1]="Monday",l[l.Tuesday=2]="Tuesday",l[l.Wednesday=3]="Wednesday",l[l.Thursday=4]="Thursday",l[l.Friday=5]="Friday",l[l.Saturday=6]="Saturday",l}({}),v=function(){function l(){this.current=new Date,this.bg="bg-primary",this.today=new Date,this.weeks=[]}return Object.defineProperty(l.prototype,"fullYear",{get:function(){return this.current.getFullYear()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"fullMonthName",{get:function(){return k[this.current.getMonth()]},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"daysInMonth",{get:function(){return new Date(this.current.getFullYear(),this.current.getMonth()+1,0).getDate()},enumerable:!0,configurable:!0}),l.prototype.ngOnInit=function(){this.populate()},l.prototype.onPreviousYear=function(){this.current.setFullYear(this.current.getFullYear()-1),this.weeks=[],this.populate()},l.prototype.onPreviousMonth=function(){this.current.setMonth(this.current.getMonth()-1),this.weeks=[],this.populate()},l.prototype.onNextMonth=function(){this.current.setMonth(this.current.getMonth()+1),this.weeks=[],this.populate()},l.prototype.onNextYear=function(){this.current.setFullYear(this.current.getFullYear()+1),this.weeks=[],this.populate()},l.prototype.isToday=function(l){return this.today.getDate()==l.getDate()&&this.today.getMonth()==l.getMonth()&&this.today.getFullYear()==l.getFullYear()},l.prototype.getCellClass=function(l){return l?this.isToday(l)?"text-white "+this.bg:l.getDay()===q.Sunday||l.getDay()===q.Saturday?"font-weight-bold":void 0:""},l.prototype.populate=function(){var l=new Date(this.current.getFullYear(),this.current.getMonth(),1),n=[];if(l.getDay()===q.Sunday)n.push(null,null,null,null,null,null);else for(var u=1;u<l.getDay();u++)n.push(null);for(u=1;u<=this.daysInMonth;u++)n.push(new Date(this.current.getFullYear(),this.current.getMonth(),u)),7==n.length&&(this.weeks.push(n),n=[]);if(n.length>0){for(;7!=n.length;)n.push(null);this.weeks.push(n)}},l}(),w=t.ob({encapsulation:0,styles:[[""]],data:{}});function M(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"td",[],[[8,"className",0]],null,null,null,null)),(l()(),t.Jb(1,null,["",""]))],null,(function(l,n){l(n,0,0,n.component.getCellClass(n.context.$implicit));var u=n.context.$implicit&&n.context.$implicit.getDate();l(n,1,0,u)}))}function L(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,M)),t.pb(2,278528,null,0,i.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function x(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,49,"div",[],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,28,"div",[],null,null,null,null,null)),t.Gb(512,null,i.q,i.r,[t.q,t.r,t.k,t.B]),t.pb(3,278528,null,0,i.h,[i.q],{ngClass:[0,"ngClass"]},null),(l()(),t.qb(4,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,6,"button",[["class","btn btn-link text-white"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onPreviousYear()&&t),t}),null,null)),(l()(),t.qb(6,0,null,null,2,"fa-icon",[["class","text-white ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),t.pb(7,573440,null,0,r.a,[s.b,r.b],{iconProp:[0,"iconProp"]},null),t.Cb(8,2),(l()(),t.qb(9,0,null,null,2,"fa-icon",[["class","text-white ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),t.pb(10,573440,null,0,r.a,[s.b,r.b],{iconProp:[0,"iconProp"]},null),t.Cb(11,2),(l()(),t.qb(12,0,null,null,3,"button",[["class","btn btn-link text-white"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onPreviousMonth()&&t),t}),null,null)),(l()(),t.qb(13,0,null,null,2,"fa-icon",[["class","text-white ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),t.pb(14,573440,null,0,r.a,[s.b,r.b],{iconProp:[0,"iconProp"]},null),t.Cb(15,2),(l()(),t.qb(16,0,null,null,1,"h2",[["class","text-uppercase text-white"]],null,null,null,null,null)),(l()(),t.Jb(17,null,[" "," "," "])),(l()(),t.qb(18,0,null,null,11,"div",[],null,null,null,null,null)),(l()(),t.qb(19,0,null,null,3,"button",[["class","btn btn-link text-white"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onNextMonth()&&t),t}),null,null)),(l()(),t.qb(20,0,null,null,2,"fa-icon",[["class","text-white ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),t.pb(21,573440,null,0,r.a,[s.b,r.b],{iconProp:[0,"iconProp"]},null),t.Cb(22,2),(l()(),t.qb(23,0,null,null,6,"button",[["class","btn btn-link text-white"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onNextYear()&&t),t}),null,null)),(l()(),t.qb(24,0,null,null,2,"fa-icon",[["class","text-white ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),t.pb(25,573440,null,0,r.a,[s.b,r.b],{iconProp:[0,"iconProp"]},null),t.Cb(26,2),(l()(),t.qb(27,0,null,null,2,"fa-icon",[["class","text-white ng-fa-icon"]],[[8,"innerHTML",1]],null,null,c.b,c.a)),t.pb(28,573440,null,0,r.a,[s.b,r.b],{iconProp:[0,"iconProp"]},null),t.Cb(29,2),(l()(),t.qb(30,0,null,null,19,"table",[["class","table table-bordered text-center"]],null,null,null,null,null)),(l()(),t.qb(31,0,null,null,15,"thead",[],null,null,null,null,null)),(l()(),t.qb(32,0,null,null,14,"tr",[],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,1,"th",[["class","border-bottom-0"],["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["M"])),(l()(),t.qb(35,0,null,null,1,"th",[["class","border-bottom-0"],["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["T"])),(l()(),t.qb(37,0,null,null,1,"th",[["class","border-bottom-0"],["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["W"])),(l()(),t.qb(39,0,null,null,1,"th",[["class","border-bottom-0"],["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["T"])),(l()(),t.qb(41,0,null,null,1,"th",[["class","border-bottom-0"],["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["F"])),(l()(),t.qb(43,0,null,null,1,"th",[["class","border-bottom-0"],["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["S"])),(l()(),t.qb(45,0,null,null,1,"th",[["class","border-bottom-0"],["scope","col"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["S"])),(l()(),t.qb(47,0,null,null,2,"tbody",[],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,L)),t.pb(49,278528,null,0,i.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,3,0,"d-flex justify-content-center py-4 mb-0 "+u.bg);var t=l(n,8,0,"fas","less-than");l(n,7,0,t);var e=l(n,11,0,"fas","less-than");l(n,10,0,e);var o=l(n,15,0,"fas","less-than");l(n,14,0,o);var a=l(n,22,0,"fas","greater-than");l(n,21,0,a);var i=l(n,26,0,"fas","greater-than");l(n,25,0,i);var c=l(n,29,0,"fas","greater-than");l(n,28,0,c),l(n,49,0,u.weeks)}),(function(l,n){var u=n.component;l(n,6,0,t.Bb(n,7).renderedIconHTML),l(n,9,0,t.Bb(n,10).renderedIconHTML),l(n,13,0,t.Bb(n,14).renderedIconHTML),l(n,17,0,u.fullMonthName,u.fullYear),l(n,20,0,t.Bb(n,21).renderedIconHTML),l(n,24,0,t.Bb(n,25).renderedIconHTML),l(n,27,0,t.Bb(n,28).renderedIconHTML)}))}var J=function(){this.backgroundColors=["bg-primary","bg-success","bg-danger","bg-warning","bg-info"]},C=t.ob({encapsulation:0,styles:[[""]],data:{}});function I(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","col-12 col-lg-6"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-calendar",[],null,null,null,x,w)),t.pb(2,114688,null,0,v,[],{bg:[0,"bg"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function T(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"h2",[["class","font-weight-bold mb-3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Calendar"])),(l()(),t.qb(2,0,null,null,1,"p",[["class","h5 mb-4"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["A calendar is a system of organizing days for social, religious, commercial or administrative purposes. This is done by giving names to periods of time, typically days, weeks, months and years.\n"])),(l()(),t.qb(4,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.fb(16777216,null,null,1,null,I)),t.pb(6,278528,null,0,i.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,6,0,n.component.backgroundColors)}),null)}var z=t.mb("app-calendar-container",J,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-calendar-container",[],null,null,null,T,C)),t.pb(1,49152,null,0,J,[],null,null)],null,null)}),{},{},[]),F=function(){function l(){this.format=12,this.bg="dark",this.colck={},this.resetClock()}return l.prototype.ngOnInit=function(){var l=this;this.clockInterval=setInterval((function(){return l.resetClock()}),1e3)},l.prototype.ngOnDestroy=function(){clearInterval(this.clockInterval)},l.prototype.resetClock=function(){var l=new Date,n=l.getHours();12===this.format&&(this.colck.isAM=n<12,n=(n%=12)||12),this.colck.day=O[l.getDay()],this.colck.hours=n<10?"0"+n:""+n,this.colck.minutes=l.getMinutes()<10?"0"+l.getMinutes():""+l.getMinutes(),this.colck.seconds=l.getSeconds()<10?"0"+l.getSeconds():""+l.getSeconds()},l}(),O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],S=t.ob({encapsulation:0,styles:[[""]],data:{}});function P(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"p",[["class","h3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[":"])),(l()(),t.qb(3,0,null,null,1,"p",[["class","h2 mx-2"]],null,null,null,null,null)),(l()(),t.Jb(4,null,["",""]))],null,(function(l,n){l(n,4,0,n.component.colck.isAM?"AM":"PM")}))}function D(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,19,"div",[],null,null,null,null,null)),t.Gb(512,null,i.q,i.r,[t.q,t.r,t.k,t.B]),t.pb(2,278528,null,0,i.h,[i.q],{ngClass:[0,"ngClass"]},null),(l()(),t.qb(3,0,null,null,16,"div",[["class","d-flex justify-content-center align-items-center text-uppercase"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"p",[["class","h2 mx-2"]],null,null,null,null,null)),(l()(),t.Jb(5,null,["",""])),(l()(),t.qb(6,0,null,null,1,"p",[["class","h3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[":"])),(l()(),t.qb(8,0,null,null,1,"p",[["class","h2 mx-2"]],null,null,null,null,null)),(l()(),t.Jb(9,null,["",""])),(l()(),t.qb(10,0,null,null,1,"p",[["class","h3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[":"])),(l()(),t.qb(12,0,null,null,1,"p",[["class","h2 mx-2"]],null,null,null,null,null)),(l()(),t.Jb(13,null,["",""])),(l()(),t.qb(14,0,null,null,1,"p",[["class","h3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[":"])),(l()(),t.qb(16,0,null,null,1,"p",[["class","h2 mx-2"]],null,null,null,null,null)),(l()(),t.Jb(17,null,["",""])),(l()(),t.fb(16777216,null,null,1,null,P)),t.pb(19,16384,null,0,i.j,[t.M,t.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var u=n.component;l(n,2,0,"shadow-sm p-3 text-white rounded bg-"+u.bg),l(n,19,0,12===u.format)}),(function(l,n){var u=n.component;l(n,5,0,u.colck.day),l(n,9,0,u.colck.hours),l(n,13,0,u.colck.minutes),l(n,17,0,u.colck.seconds)}))}var A=function(){this.colors=["primary","secondary","success","danger","warning","info","dark"]},H=t.ob({encapsulation:0,styles:[[""]],data:{}});function Y(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,2,"div",[["class","mb-4"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,1,"app-digital-clock",[],null,null,null,D,S)),t.pb(2,245760,null,0,F,[],{bg:[0,"bg"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function B(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"h2",[["class","font-weight-bold mb-3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Digital Clock"])),(l()(),t.qb(2,0,null,null,1,"p",[["class","h5 mb-4"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" A digital clock is a type of clock that displays the time digitally (i.e. in numerals or other symbols), as opposed to an analog clock, where the time is indicated by the positions of rotating hands.\n"])),(l()(),t.fb(16777216,null,null,1,null,Y)),t.pb(5,278528,null,0,i.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,5,0,n.component.colors)}),null)}var N=t.mb("app-digital-clock-container",A,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-digital-clock-container",[],null,null,null,B,H)),t.pb(1,49152,null,0,A,[],null,null)],null,null)}),{},{},[]),j=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),$=t.ob({encapsulation:0,styles:[[""]],data:{}});function W(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"h2",[["class","font-weight-bold mb-3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Analog Clock"])),(l()(),t.qb(2,0,null,null,1,"p",[["class","h5 mb-4"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[' An analog watch (American) or analogue watch (UK and Commonwealth) is a watch whose display is not digital but rather analog with a traditional clock face. The name is an example of a retronym; it was coined to distinguish analog watches, which had simply been called "watches", from newer digital watches.\n']))],null,null)}var K=t.mb("app-analog-clock-container",j,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-analog-clock-container",[],null,null,null,W,$)),t.pb(1,114688,null,0,j,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),X=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),G=t.ob({encapsulation:0,styles:[[""]],data:{}});function R(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"h2",[["class","font-weight-bold mb-3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Stopwatch"])),(l()(),t.qb(2,0,null,null,1,"p",[["class","h5 mb-4"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" A stopwatch is a handheld timepiece designed to measure the amount of time that elapses between its activation and deactivation. A large digital version of a stopwatch designed for viewing at a distance, as in a sports stadium, is called a stopclock. In manual timing, the clock is started and stopped by a person pressing a button. In fully automatic time, both starting and stopping are triggered automatically, by sensors.\n"]))],null,null)}var E=t.mb("app-stopwatch-container",X,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-stopwatch-container",[],null,null,null,R,G)),t.pb(1,114688,null,0,X,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),U=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),V=t.ob({encapsulation:0,styles:[[""]],data:{}});function Z(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"h2",[["class","font-weight-bold mb-3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Calculator"])),(l()(),t.qb(2,0,null,null,1,"p",[["class","h5 mb-4"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" An electronic calculator is typically a portable electronic device used to perform calculations, ranging from basic arithmetic to complex mathematics.\n"]))],null,null)}var Q=t.mb("app-calculator-container",U,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-calculator-container",[],null,null,null,Z,V)),t.pb(1,114688,null,0,U,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),_=function(){function l(){}return l.prototype.ngOnInit=function(){},l}(),ll=t.ob({encapsulation:0,styles:[[""]],data:{}});function nl(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"h2",[["class","font-weight-bold mb-3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Table"])),(l()(),t.qb(2,0,null,null,1,"p",[["class","h5 mb-4"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,[" A table is an arrangement of columns and rows that organizes and positions data. Tables can be created on Wikipedia pages using special wikitext syntax, and many different styles and tricks can be used to customise them.\n"]))],null,null)}var ul=t.mb("app-table-container",_,(function(l){return t.Lb(0,[(l()(),t.qb(0,0,null,null,1,"app-table-container",[],null,null,null,nl,ll)),t.pb(1,114688,null,0,_,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),tl=u("s7LF"),el=u("IheW"),ol=u("unZP"),al=u("r15G"),il=function(){};u.d(n,"DesignModuleNgFactory",(function(){return cl}));var cl=t.nb(e,[],(function(l){return t.yb([t.zb(512,t.j,t.Y,[[8,[o.a,y,z,N,K,E,Q,ul]],[3,t.j],t.v]),t.zb(4608,i.l,i.k,[t.s,[2,i.t]]),t.zb(4608,tl.n,tl.n,[]),t.zb(4608,el.i,el.o,[i.c,t.z,el.m]),t.zb(4608,el.p,el.p,[el.i,el.n]),t.zb(5120,el.a,(function(l){return[l]}),[el.p]),t.zb(4608,el.l,el.l,[]),t.zb(6144,el.j,null,[el.l]),t.zb(4608,el.h,el.h,[el.j]),t.zb(6144,el.b,null,[el.h]),t.zb(4608,el.f,el.k,[el.b,t.p]),t.zb(4608,el.c,el.c,[el.f]),t.zb(1073742336,i.b,i.b,[]),t.zb(1073742336,tl.m,tl.m,[]),t.zb(1073742336,tl.d,tl.d,[]),t.zb(1073742336,el.e,el.e,[]),t.zb(1073742336,el.d,el.d,[]),t.zb(1073742336,r.f,r.f,[]),t.zb(1073742336,ol.a,ol.a,[]),t.zb(1073742336,al.a,al.a,[]),t.zb(1073742336,a.o,a.o,[[2,a.t],[2,a.k]]),t.zb(1073742336,il,il,[]),t.zb(1073742336,e,e,[]),t.zb(256,el.m,"XSRF-TOKEN",[]),t.zb(256,el.n,"X-XSRF-TOKEN",[]),t.zb(1024,a.i,(function(){return[[{path:"",component:f,children:[{path:"",redirectTo:"calendar",pathMatch:"full"},{path:"calendar",component:J},{path:"digital-clock",component:A},{path:"analog-clock",component:j},{path:"stopwatch",component:X},{path:"calculator",component:U},{path:"table",component:_}]}]]}),[])])}))}}]);