(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{k8K1:function(c,o,t){"use strict";t.r(o),t.d(o,"ComarcaPageModule",(function(){return d}));var n=t("fXoL"),a=t("ofXK"),e=t("3Pt+"),r=t("TEn/"),i=t("tyNb"),s=t("l0mX");function b(c,o){if(1&c&&(n.cc(0,"ion-select-option",6),n.xc(1),n.bc()),2&c){const c=o.$implicit;n.qc("value",c.comarca),n.Pb(1),n.yc(c.comarca)}}function m(c,o){if(1&c&&(n.cc(0,"ion-list"),n.cc(1,"ion-item"),n.cc(2,"ion-label"),n.cc(3,"ion-text",7),n.cc(4,"h3"),n.xc(5),n.bc(),n.bc(),n.xc(6),n.ac(7,"br"),n.bc(),n.bc(),n.bc()),2&c){const c=o.$implicit;n.Pb(5),n.yc(c.fabricant),n.Pb(1),n.zc(" Total: ",c.total," ")}}const u=[{path:"",component:(()=>{class c{constructor(c){this.dades=c}ngOnInit(){this.getComarques()}getComarques(){this.dades.obtenirComarques().subscribe(c=>{this.comarques=c.sort((c,o)=>c.comarca>o.comarca)})}compareWithFn(c,o){return c===o}reloadData(c){this.dadesComarca=[],this.dades.obtenirDadesComarca(c).subscribe(c=>{this.dadesComarca=c})}}return c.\u0275fac=function(o){return new(o||c)(n.Zb(s.a))},c.\u0275cmp=n.Tb({type:c,selectors:[["app-comarca"]],decls:12,vars:3,consts:[["slot","start"],["menu","start"],["placeholder","escollir comarca",3,"compareWith","ionChange"],["comarcaSelect",""],[3,"value",4,"ngFor","ngForOf"],[4,"ngFor","ngForOf"],[3,"value"],["color","primary"]],template:function(c,o){if(1&c){const c=n.dc();n.cc(0,"ion-header"),n.cc(1,"ion-toolbar"),n.cc(2,"ion-buttons",0),n.ac(3,"ion-menu-button",1),n.bc(),n.cc(4,"ion-title"),n.xc(5,"Comarca"),n.bc(),n.bc(),n.bc(),n.cc(6,"ion-content"),n.cc(7,"ion-item"),n.cc(8,"ion-select",2,3),n.kc("ionChange",(function(){n.tc(c);const t=n.sc(9);return o.reloadData(t.value)})),n.wc(10,b,2,2,"ion-select-option",4),n.bc(),n.bc(),n.wc(11,m,8,2,"ion-list",5),n.bc()}2&c&&(n.Pb(8),n.qc("compareWith",o.compareWithFn),n.Pb(2),n.qc("ngForOf",o.comarques),n.Pb(1),n.qc("ngForOf",o.dadesComarca))},directives:[r.f,r.v,r.b,r.m,r.u,r.d,r.h,r.q,r.z,a.i,r.r,r.j,r.i,r.t],styles:[""]}),c})()}];let l=(()=>{class c{}return c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=n.Xb({type:c}),c.\u0275inj=n.Wb({imports:[[i.j.forChild(u)],i.j]}),c})(),d=(()=>{class c{}return c.\u0275fac=function(o){return new(o||c)},c.\u0275mod=n.Xb({type:c}),c.\u0275inj=n.Wb({imports:[[a.b,e.a,r.w,l]]}),c})()}}]);