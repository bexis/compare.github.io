import{S as ie,i as re,s as te,C as q,k as D,a as B,l as I,m as L,c as N,h as _,n as h,b as R,D as S,g as E,v as J,d as C,f as W,E as O,F as z,G as U,H as Se,I as G,J as Y,K as _e,L as Q,M as De,N as Ie,O as rl,P as me,Q as He,R as dl,T as K,U as hl,V as Ee,W as oe,q as X,r as j,u as ne,X as _l,e as ae,Y as ml,Z as gl,_ as Z,o as ol,$ as bl,a0 as de,a1 as he,y as x,z as $,A as ee,B as le,a2 as nl}from"../chunks/index.4123de8b.js";import{p as fl}from"../chunks/stores.263c9632.js";import{h as vl}from"../chunks/singletons.f2b35e45.js";import{s as ce,a as Re,u as ge,t as be,b as Ce,c as we,d as cl,e as kl}from"../chunks/store.8a5df822.js";import{b as fe}from"../chunks/paths.7ed0ea0c.js";import{w as Le}from"../chunks/index.08b0d194.js";const pl=vl("after_navigate"),El=i=>({}),Te=i=>({}),Ll=i=>({}),Pe=i=>({}),Sl=i=>({}),ye=i=>({});function Ve(i){let e,l,t;const o=i[22].lead,s=q(o,i,i[21],ye);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-bar-slot-lead "+i[4])},m(a,r){R(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&2097152)&&O(s,o,a,a[21],t?U(o,a[21],r,Sl):z(a[21]),ye),(!t||r&16&&l!==(l="app-bar-slot-lead "+a[4]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){C(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Ae(i){let e,l,t;const o=i[22].trail,s=q(o,i,i[21],Pe);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-bar-slot-trail "+i[2])},m(a,r){R(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&2097152)&&O(s,o,a,a[21],t?U(o,a[21],r,Ll):z(a[21]),Pe),(!t||r&4&&l!==(l="app-bar-slot-trail "+a[2]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){C(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Fe(i){let e,l,t;const o=i[22].headline,s=q(o,i,i[21],Te);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-bar-row-headline "+i[5])},m(a,r){R(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&2097152)&&O(s,o,a,a[21],t?U(o,a[21],r,El):z(a[21]),Te),(!t||r&32&&l!==(l="app-bar-row-headline "+a[5]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){C(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Dl(i){let e,l,t,o,s,a,r,n,m,d,f=i[8].lead&&Ve(i);const v=i[22].default,u=q(v,i,i[21],null);let k=i[8].trail&&Ae(i),c=i[8].headline&&Fe(i);return{c(){e=D("div"),l=D("div"),f&&f.c(),t=B(),o=D("div"),u&&u.c(),a=B(),k&&k.c(),n=B(),c&&c.c(),this.h()},l(b){e=I(b,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=L(e);l=I(g,"DIV",{class:!0});var p=L(l);f&&f.l(p),t=N(p),o=I(p,"DIV",{class:!0});var P=L(o);u&&u.l(P),P.forEach(_),a=N(p),k&&k.l(p),p.forEach(_),n=N(g),c&&c.l(g),g.forEach(_),this.h()},h(){h(o,"class",s="app-bar-slot-default "+i[3]),h(l,"class",r="app-bar-row-main "+i[6]),h(e,"class",m="app-bar "+i[7]),h(e,"data-testid","app-bar"),h(e,"role","toolbar"),h(e,"aria-label",i[0]),h(e,"aria-labelledby",i[1])},m(b,g){R(b,e,g),S(e,l),f&&f.m(l,null),S(l,t),S(l,o),u&&u.m(o,null),S(l,a),k&&k.m(l,null),S(e,n),c&&c.m(e,null),d=!0},p(b,[g]){b[8].lead?f?(f.p(b,g),g&256&&E(f,1)):(f=Ve(b),f.c(),E(f,1),f.m(l,t)):f&&(J(),C(f,1,1,()=>{f=null}),W()),u&&u.p&&(!d||g&2097152)&&O(u,v,b,b[21],d?U(v,b[21],g,null):z(b[21]),null),(!d||g&8&&s!==(s="app-bar-slot-default "+b[3]))&&h(o,"class",s),b[8].trail?k?(k.p(b,g),g&256&&E(k,1)):(k=Ae(b),k.c(),E(k,1),k.m(l,null)):k&&(J(),C(k,1,1,()=>{k=null}),W()),(!d||g&64&&r!==(r="app-bar-row-main "+b[6]))&&h(l,"class",r),b[8].headline?c?(c.p(b,g),g&256&&E(c,1)):(c=Fe(b),c.c(),E(c,1),c.m(e,null)):c&&(J(),C(c,1,1,()=>{c=null}),W()),(!d||g&128&&m!==(m="app-bar "+b[7]))&&h(e,"class",m),(!d||g&1)&&h(e,"aria-label",b[0]),(!d||g&2)&&h(e,"aria-labelledby",b[1])},i(b){d||(E(f),E(u,b),E(k),E(c),d=!0)},o(b){C(f),C(u,b),C(k),C(c),d=!1},d(b){b&&_(e),f&&f.d(),u&&u.d(b),k&&k.d(),c&&c.d()}}}const Il="flex flex-col space-y-4",Hl="grid items-center",Rl="",Cl="flex-none flex justify-between items-center",wl="flex-auto",Tl="flex-none flex items-center space-x-4";function Pl(i,e,l){let t,o,s,a,r,n,{$$slots:m={},$$scope:d}=e;const f=Se(m);let{background:v="bg-surface-100-800-token"}=e,{border:u=""}=e,{padding:k="p-4"}=e,{shadow:c=""}=e,{spacing:b="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:p="gap-4"}=e,{regionRowMain:P=""}=e,{regionRowHeadline:M=""}=e,{slotLead:y=""}=e,{slotDefault:V=""}=e,{slotTrail:H=""}=e,{label:w=""}=e,{labelledby:F=""}=e;return i.$$set=T=>{l(23,e=G(G({},e),Y(T))),"background"in T&&l(9,v=T.background),"border"in T&&l(10,u=T.border),"padding"in T&&l(11,k=T.padding),"shadow"in T&&l(12,c=T.shadow),"spacing"in T&&l(13,b=T.spacing),"gridColumns"in T&&l(14,g=T.gridColumns),"gap"in T&&l(15,p=T.gap),"regionRowMain"in T&&l(16,P=T.regionRowMain),"regionRowHeadline"in T&&l(17,M=T.regionRowHeadline),"slotLead"in T&&l(18,y=T.slotLead),"slotDefault"in T&&l(19,V=T.slotDefault),"slotTrail"in T&&l(20,H=T.slotTrail),"label"in T&&l(0,w=T.label),"labelledby"in T&&l(1,F=T.labelledby),"$$scope"in T&&l(21,d=T.$$scope)},i.$$.update=()=>{l(7,t=`${Il} ${v} ${u} ${b} ${k} ${c} ${e.class??""}`),i.$$.dirty&114688&&l(6,o=`${Hl} ${g} ${p} ${P}`),i.$$.dirty&131072&&l(5,s=`${Rl} ${M}`),i.$$.dirty&262144&&l(4,a=`${Cl} ${y}`),i.$$.dirty&524288&&l(3,r=`${wl} ${V}`),i.$$.dirty&1048576&&l(2,n=`${Tl} ${H}`)},e=Y(e),[w,F,n,r,a,s,o,t,f,v,u,k,c,b,g,p,P,M,y,V,H,d,m]}class yl extends ie{constructor(e){super(),re(this,e,Pl,Dl,te,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Vl=i=>({}),Me=i=>({}),Al=i=>({}),Be=i=>({});function Fl(i){let e,l,t,o,s,a,r,n,m,d,f;const v=i[13].lead,u=q(v,i,i[12],Be),k=i[13].default,c=q(k,i,i[12],null),b=i[13].trail,g=q(b,i,i[12],Me);return{c(){e=D("div"),l=D("div"),u&&u.c(),o=B(),s=D("div"),c&&c.c(),r=B(),n=D("div"),g&&g.c(),this.h()},l(p){e=I(p,"DIV",{class:!0});var P=L(e);l=I(P,"DIV",{class:!0});var M=L(l);u&&u.l(M),M.forEach(_),o=N(P),s=I(P,"DIV",{class:!0});var y=L(s);c&&c.l(y),y.forEach(_),r=N(P),n=I(P,"DIV",{class:!0});var V=L(n);g&&g.l(V),V.forEach(_),P.forEach(_),this.h()},h(){h(l,"class",t="app-bar-lead "+i[0]),h(s,"class",a="app-bar-default "+i[1]),h(n,"class",m="app-bar-trail "+i[2]),h(e,"class",d="app-rail "+i[3])},m(p,P){R(p,e,P),S(e,l),u&&u.m(l,null),S(e,o),S(e,s),c&&c.m(s,null),S(e,r),S(e,n),g&&g.m(n,null),f=!0},p(p,[P]){u&&u.p&&(!f||P&4096)&&O(u,v,p,p[12],f?U(v,p[12],P,Al):z(p[12]),Be),(!f||P&1&&t!==(t="app-bar-lead "+p[0]))&&h(l,"class",t),c&&c.p&&(!f||P&4096)&&O(c,k,p,p[12],f?U(k,p[12],P,null):z(p[12]),null),(!f||P&2&&a!==(a="app-bar-default "+p[1]))&&h(s,"class",a),g&&g.p&&(!f||P&4096)&&O(g,b,p,p[12],f?U(b,p[12],P,Vl):z(p[12]),Me),(!f||P&4&&m!==(m="app-bar-trail "+p[2]))&&h(n,"class",m),(!f||P&8&&d!==(d="app-rail "+p[3]))&&h(e,"class",d)},i(p){f||(E(u,p),E(c,p),E(g,p),f=!0)},o(p){C(u,p),C(c,p),C(g,p),f=!1},d(p){p&&_(e),u&&u.d(p),c&&c.d(p),g&&g.d(p)}}}const Ml="grid grid-rows-[auto_1fr_auto] overflow-y-auto";function Bl(i,e,l){let t,{$$slots:o={},$$scope:s}=e,{selected:a=Le(void 0)}=e,{background:r="bg-surface-100-800-token"}=e,{border:n=""}=e,{active:m="bg-primary-active-token"}=e,{hover:d="bg-primary-hover-token"}=e,{width:f="w-[70px] sm:w-20"}=e,{height:v="h-full"}=e,{gap:u="gap-0"}=e,{regionLead:k=""}=e,{regionDefault:c=""}=e,{regionTrail:b=""}=e;return _e("selected",a),_e("active",m),_e("hover",d),i.$$set=g=>{l(14,e=G(G({},e),Y(g))),"selected"in g&&l(4,a=g.selected),"background"in g&&l(5,r=g.background),"border"in g&&l(6,n=g.border),"active"in g&&l(7,m=g.active),"hover"in g&&l(8,d=g.hover),"width"in g&&l(9,f=g.width),"height"in g&&l(10,v=g.height),"gap"in g&&l(11,u=g.gap),"regionLead"in g&&l(0,k=g.regionLead),"regionDefault"in g&&l(1,c=g.regionDefault),"regionTrail"in g&&l(2,b=g.regionTrail),"$$scope"in g&&l(12,s=g.$$scope)},i.$$.update=()=>{l(3,t=`${Ml} ${r} ${n} ${f} ${v} ${u} ${e.class||""}`)},e=Y(e),[k,c,b,t,a,r,n,m,d,f,v,u,s,o]}class Nl extends ie{constructor(e){super(),re(this,e,Bl,Fl,te,{selected:4,background:5,border:6,active:7,hover:8,width:9,height:10,gap:11,regionLead:0,regionDefault:1,regionTrail:2})}}function Ne(i){let e,l,t;const o=i[16].default,s=q(o,i,i[15],null);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-rail-tile-icon "+i[2])},m(a,r){R(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&32768)&&O(s,o,a,a[15],t?U(o,a[15],r,null):z(a[15]),null),(!t||r&4&&l!==(l="app-rail-tile-icon "+a[2]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){C(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function qe(i){let e,l,t;return{c(){e=D("div"),l=X(i[1]),this.h()},l(o){e=I(o,"DIV",{class:!0});var s=L(e);l=j(s,i[1]),s.forEach(_),this.h()},h(){h(e,"class",t="app-rail-tile-label "+i[4])},m(o,s){R(o,e,s),S(e,l)},p(o,s){s&2&&ne(l,o[1]),s&16&&t!==(t="app-rail-tile-label "+o[4])&&h(e,"class",t)},d(o){o&&_(e)}}}function ve(i){let e,l,t,o,s=i[8].default&&Ne(i),a=i[1]&&qe(i),r=[i[7](),{class:t="app-rail-tile "+i[5]}],n={};for(let m=0;m<r.length;m+=1)n=G(n,r[m]);return{c(){e=D(i[0]),s&&s.c(),l=B(),a&&a.c(),this.h()},l(m){e=I(m,(i[0]||"null").toUpperCase(),{class:!0});var d=L(e);s&&s.l(d),l=N(d),a&&a.l(d),d.forEach(_),this.h()},h(){He(i[0])(e,n)},m(m,d){R(m,e,d),s&&s.m(e,null),S(e,l),a&&a.m(e,null),o=!0},p(m,d){m[8].default?s?(s.p(m,d),d&256&&E(s,1)):(s=Ne(m),s.c(),E(s,1),s.m(e,l)):s&&(J(),C(s,1,1,()=>{s=null}),W()),m[1]?a?a.p(m,d):(a=qe(m),a.c(),a.m(e,null)):a&&(a.d(1),a=null),He(m[0])(e,n=dl(r,[m[7](),(!o||d&32&&t!==(t="app-rail-tile "+m[5]))&&{class:t}]))},i(m){o||(E(s),o=!0)},o(m){C(s),o=!1},d(m){m&&_(e),s&&s.d(),a&&a.d()}}}function ql(i){let e,l=i[0],t,o,s,a=i[0]&&ve(i);return{c(){e=D("div"),a&&a.c()},l(r){e=I(r,"DIV",{});var n=L(e);a&&a.l(n),n.forEach(_)},m(r,n){R(r,e,n),a&&a.m(e,null),t=!0,o||(s=[Q(e,"click",i[6]),Q(e,"keydown",i[17]),Q(e,"keyup",i[18]),Q(e,"keypress",i[19])],o=!0)},p(r,[n]){r[0]?l?te(l,r[0])?(a.d(1),a=ve(r),l=r[0],a.c(),a.m(e,null)):a.p(r,n):(a=ve(r),l=r[0],a.c(),a.m(e,null)):l&&(a.d(1),a=null,l=r[0])},i(r){t||(E(a),t=!0)},o(r){C(a),t=!1},d(r){r&&_(e),a&&a.d(r),o=!1,De(s)}}}const Ol="unstyled grid place-content-center place-items-center w-full aspect-square space-y-1.5 cursor-pointer",zl="font-bold text-xs text-center";function Ul(i,e,l){let t,o,s;const a=["value","tag","label","regionIcon","regionLabel","selected","active","hover"];let r=Ie(e,a),n,m=K,d=()=>(m(),m=hl(M,A=>l(14,n=A)),M);i.$$.on_destroy.push(()=>m());let{$$slots:f={},$$scope:v}=e;const u=Se(f),k=rl();let{value:c=void 0}=e,{tag:b="button"}=e,{label:g=""}=e,{regionIcon:p=""}=e,{regionLabel:P=""}=e,{selected:M=me("selected")}=e;d();let{active:y=me("active")}=e,{hover:V=me("hover")}=e;function H(A){!n||!c||(Ee(M,n=c,n),k("click",A))}function w(){return delete r.class,r}function F(A){oe.call(this,i,A)}function T(A){oe.call(this,i,A)}function se(A){oe.call(this,i,A)}return i.$$set=A=>{l(22,e=G(G({},e),Y(A))),l(21,r=Ie(e,a)),"value"in A&&l(9,c=A.value),"tag"in A&&l(0,b=A.tag),"label"in A&&l(1,g=A.label),"regionIcon"in A&&l(2,p=A.regionIcon),"regionLabel"in A&&l(10,P=A.regionLabel),"selected"in A&&d(l(3,M=A.selected)),"active"in A&&l(11,y=A.active),"hover"in A&&l(12,V=A.hover),"$$scope"in A&&l(15,v=A.$$scope)},i.$$.update=()=>{i.$$.dirty&18944&&l(13,t=n&&c&&n===c?`${y}`:""),l(5,o=`${Ol} ${V} ${t} ${e.class||""}`),i.$$.dirty&1024&&l(4,s=`${zl} ${P}`)},e=Y(e),[b,g,p,M,s,o,H,w,u,c,P,y,V,t,n,v,f,F,T,se]}class ke extends ie{constructor(e){super(),re(this,e,Ul,ql,te,{value:9,tag:0,label:1,regionIcon:2,regionLabel:10,selected:3,active:11,hover:12})}}const Xl=i=>({}),Oe=i=>({}),jl=i=>({}),ze=i=>({}),Kl=i=>({}),Ue=i=>({}),Ql=i=>({}),Xe=i=>({}),Gl=i=>({}),je=i=>({}),Jl=i=>({}),Ke=i=>({});function Qe(i){let e,l,t;const o=i[18].header,s=q(o,i,i[17],Ke);return{c(){e=D("header"),s&&s.c(),this.h()},l(a){e=I(a,"HEADER",{id:!0,class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"id","shell-header"),h(e,"class",l="flex-none "+i[7])},m(a,r){R(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&131072)&&O(s,o,a,a[17],t?U(o,a[17],r,Jl):z(a[17]),Ke),(!t||r&128&&l!==(l="flex-none "+a[7]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){C(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Ge(i){let e,l;const t=i[18].sidebarLeft,o=q(t,i,i[17],je);return{c(){e=D("aside"),o&&o.c(),this.h()},l(s){e=I(s,"ASIDE",{id:!0,class:!0});var a=L(e);o&&o.l(a),a.forEach(_),this.h()},h(){h(e,"id","sidebar-left"),h(e,"class",i[6])},m(s,a){R(s,e,a),o&&o.m(e,null),l=!0},p(s,a){o&&o.p&&(!l||a&131072)&&O(o,t,s,s[17],l?U(t,s[17],a,Gl):z(s[17]),je),(!l||a&64)&&h(e,"class",s[6])},i(s){l||(E(o,s),l=!0)},o(s){C(o,s),l=!1},d(s){s&&_(e),o&&o.d(s)}}}function Je(i){let e,l,t;const o=i[18].pageHeader,s=q(o,i,i[17],Xe),a=s||Wl();return{c(){e=D("header"),a&&a.c(),this.h()},l(r){e=I(r,"HEADER",{id:!0,class:!0});var n=L(e);a&&a.l(n),n.forEach(_),this.h()},h(){h(e,"id","page-header"),h(e,"class",l="flex-none "+i[4])},m(r,n){R(r,e,n),a&&a.m(e,null),t=!0},p(r,n){s&&s.p&&(!t||n&131072)&&O(s,o,r,r[17],t?U(o,r[17],n,Ql):z(r[17]),Xe),(!t||n&16&&l!==(l="flex-none "+r[4]))&&h(e,"class",l)},i(r){t||(E(a,r),t=!0)},o(r){C(a,r),t=!1},d(r){r&&_(e),a&&a.d(r)}}}function Wl(i){let e;return{c(){e=X("(slot:header)")},l(l){e=j(l,"(slot:header)")},m(l,t){R(l,e,t)},d(l){l&&_(e)}}}function We(i){let e,l,t;const o=i[18].pageFooter,s=q(o,i,i[17],Ue),a=s||Yl();return{c(){e=D("footer"),a&&a.c(),this.h()},l(r){e=I(r,"FOOTER",{id:!0,class:!0});var n=L(e);a&&a.l(n),n.forEach(_),this.h()},h(){h(e,"id","page-footer"),h(e,"class",l="flex-none "+i[2])},m(r,n){R(r,e,n),a&&a.m(e,null),t=!0},p(r,n){s&&s.p&&(!t||n&131072)&&O(s,o,r,r[17],t?U(o,r[17],n,Kl):z(r[17]),Ue),(!t||n&4&&l!==(l="flex-none "+r[2]))&&h(e,"class",l)},i(r){t||(E(a,r),t=!0)},o(r){C(a,r),t=!1},d(r){r&&_(e),a&&a.d(r)}}}function Yl(i){let e;return{c(){e=X("(slot:footer)")},l(l){e=j(l,"(slot:footer)")},m(l,t){R(l,e,t)},d(l){l&&_(e)}}}function Ye(i){let e,l;const t=i[18].sidebarRight,o=q(t,i,i[17],ze);return{c(){e=D("aside"),o&&o.c(),this.h()},l(s){e=I(s,"ASIDE",{id:!0,class:!0});var a=L(e);o&&o.l(a),a.forEach(_),this.h()},h(){h(e,"id","sidebar-right"),h(e,"class",i[5])},m(s,a){R(s,e,a),o&&o.m(e,null),l=!0},p(s,a){o&&o.p&&(!l||a&131072)&&O(o,t,s,s[17],l?U(t,s[17],a,jl):z(s[17]),ze),(!l||a&32)&&h(e,"class",s[5])},i(s){l||(E(o,s),l=!0)},o(s){C(o,s),l=!1},d(s){s&&_(e),o&&o.d(s)}}}function Ze(i){let e,l,t;const o=i[18].footer,s=q(o,i,i[17],Oe);return{c(){e=D("footer"),s&&s.c(),this.h()},l(a){e=I(a,"FOOTER",{id:!0,class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"id","shell-footer"),h(e,"class",l="flex-none "+i[1])},m(a,r){R(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&131072)&&O(s,o,a,a[17],t?U(o,a[17],r,Xl):z(a[17]),Oe),(!t||r&2&&l!==(l="flex-none "+a[1]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){C(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Zl(i){let e,l,t,o,s,a,r,n,m,d,f,v,u,k,c,b=i[9].header&&Qe(i),g=i[9].sidebarLeft&&Ge(i),p=i[9].pageHeader&&Je(i);const P=i[18].default,M=q(P,i,i[17],null);let y=i[9].pageFooter&&We(i),V=i[9].sidebarRight&&Ye(i),H=i[9].footer&&Ze(i);return{c(){e=D("div"),b&&b.c(),l=B(),t=D("div"),g&&g.c(),o=B(),s=D("div"),p&&p.c(),a=B(),r=D("main"),M&&M.c(),m=B(),y&&y.c(),f=B(),V&&V.c(),v=B(),H&&H.c(),this.h()},l(w){e=I(w,"DIV",{id:!0,class:!0,"data-testid":!0});var F=L(e);b&&b.l(F),l=N(F),t=I(F,"DIV",{class:!0});var T=L(t);g&&g.l(T),o=N(T),s=I(T,"DIV",{id:!0,class:!0});var se=L(s);p&&p.l(se),a=N(se),r=I(se,"MAIN",{id:!0,class:!0});var A=L(r);M&&M.l(A),A.forEach(_),m=N(se),y&&y.l(se),se.forEach(_),f=N(T),V&&V.l(T),T.forEach(_),v=N(F),H&&H.l(F),F.forEach(_),this.h()},h(){h(r,"id","page-content"),h(r,"class",n="flex-auto "+i[3]),h(s,"id","page"),h(s,"class",d=i[0]+" "+xe),h(t,"class","flex-auto "+$l),h(e,"id","appShell"),h(e,"class",i[8]),h(e,"data-testid","app-shell")},m(w,F){R(w,e,F),b&&b.m(e,null),S(e,l),S(e,t),g&&g.m(t,null),S(t,o),S(t,s),p&&p.m(s,null),S(s,a),S(s,r),M&&M.m(r,null),S(s,m),y&&y.m(s,null),S(t,f),V&&V.m(t,null),S(e,v),H&&H.m(e,null),u=!0,k||(c=Q(s,"scroll",i[19]),k=!0)},p(w,[F]){w[9].header?b?(b.p(w,F),F&512&&E(b,1)):(b=Qe(w),b.c(),E(b,1),b.m(e,l)):b&&(J(),C(b,1,1,()=>{b=null}),W()),w[9].sidebarLeft?g?(g.p(w,F),F&512&&E(g,1)):(g=Ge(w),g.c(),E(g,1),g.m(t,o)):g&&(J(),C(g,1,1,()=>{g=null}),W()),w[9].pageHeader?p?(p.p(w,F),F&512&&E(p,1)):(p=Je(w),p.c(),E(p,1),p.m(s,a)):p&&(J(),C(p,1,1,()=>{p=null}),W()),M&&M.p&&(!u||F&131072)&&O(M,P,w,w[17],u?U(P,w[17],F,null):z(w[17]),null),(!u||F&8&&n!==(n="flex-auto "+w[3]))&&h(r,"class",n),w[9].pageFooter?y?(y.p(w,F),F&512&&E(y,1)):(y=We(w),y.c(),E(y,1),y.m(s,null)):y&&(J(),C(y,1,1,()=>{y=null}),W()),(!u||F&1&&d!==(d=w[0]+" "+xe))&&h(s,"class",d),w[9].sidebarRight?V?(V.p(w,F),F&512&&E(V,1)):(V=Ye(w),V.c(),E(V,1),V.m(t,null)):V&&(J(),C(V,1,1,()=>{V=null}),W()),w[9].footer?H?(H.p(w,F),F&512&&E(H,1)):(H=Ze(w),H.c(),E(H,1),H.m(e,null)):H&&(J(),C(H,1,1,()=>{H=null}),W()),(!u||F&256)&&h(e,"class",w[8])},i(w){u||(E(b),E(g),E(p),E(M,w),E(y),E(V),E(H),u=!0)},o(w){C(b),C(g),C(p),C(M,w),C(y),C(V),C(H),u=!1},d(w){w&&_(e),b&&b.d(),g&&g.d(),p&&p.d(),M&&M.d(w),y&&y.d(),V&&V.d(),H&&H.d(),k=!1,c()}}}const xl="w-full h-full flex flex-col overflow-hidden",$l="w-full h-full flex overflow-hidden",xe="flex-1 overflow-x-hidden overflow-y-auto flex flex-col",et="flex-none overflow-x-hidden overflow-y-auto",lt="flex-none overflow-x-hidden overflow-y-auto";function tt(i,e,l){let t,o,s,a,r,n,m,d,{$$slots:f={},$$scope:v}=e;const u=Se(f);let{regionPage:k=""}=e,{slotHeader:c="z-10"}=e,{slotSidebarLeft:b="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:p=""}=e,{slotPageContent:P=""}=e,{slotPageFooter:M=""}=e,{slotFooter:y=""}=e;function V(H){oe.call(this,i,H)}return i.$$set=H=>{l(20,e=G(G({},e),Y(H))),"regionPage"in H&&l(0,k=H.regionPage),"slotHeader"in H&&l(10,c=H.slotHeader),"slotSidebarLeft"in H&&l(11,b=H.slotSidebarLeft),"slotSidebarRight"in H&&l(12,g=H.slotSidebarRight),"slotPageHeader"in H&&l(13,p=H.slotPageHeader),"slotPageContent"in H&&l(14,P=H.slotPageContent),"slotPageFooter"in H&&l(15,M=H.slotPageFooter),"slotFooter"in H&&l(16,y=H.slotFooter),"$$scope"in H&&l(17,v=H.$$scope)},i.$$.update=()=>{l(8,t=`${xl} ${e.class??""}`),i.$$.dirty&1024&&l(7,o=`${c}`),i.$$.dirty&2048&&l(6,s=`${et} ${b}`),i.$$.dirty&4096&&l(5,a=`${lt} ${g}`),i.$$.dirty&8192&&l(4,r=`${p}`),i.$$.dirty&16384&&l(3,n=`${P}`),i.$$.dirty&32768&&l(2,m=`${M}`),i.$$.dirty&65536&&l(1,d=`${y}`)},e=Y(e),[k,d,m,n,r,a,s,o,t,u,c,b,g,p,P,M,y,v,f,V]}class st extends ie{constructor(e){super(),re(this,e,tt,Zl,te,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}const{document:pe}=bl;function at(i){let e,l;return{c(){e=de("svg"),l=de("path"),this.h()},l(t){e=he(t,"svg",{class:!0,xmlns:!0,viewBox:!0});var o=L(e);l=he(o,"path",{d:!0}),L(l).forEach(_),o.forEach(_),this.h()},h(){h(l,"d","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"),h(e,"class","lightswitch-icon fill-white "+ul),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"viewBox","0 0 384 512")},m(t,o){R(t,e,o),S(e,l)},p:K,d(t){t&&_(e)}}}function it(i){let e,l;return{c(){e=de("svg"),l=de("path"),this.h()},l(t){e=he(t,"svg",{class:!0,xmlns:!0,viewBox:!0});var o=L(e);l=he(o,"path",{d:!0}),L(l).forEach(_),o.forEach(_),this.h()},h(){h(l,"d","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"),h(e,"class","lightswitch-icon fill-black "+ul),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"viewBox","0 0 512 512")},m(t,o){R(t,e,o),S(e,l)},p:K,d(t){t&&_(e)}}}function rt(i){let e,l=`<script>${ft.toString()} setColorScheme();<\/script>`,t,o,s,a,r,n,m,d,f;function v(c,b){return c[0]===!1?it:at}let u=v(i),k=u(i);return{c(){e=new _l(!1),t=ae(),o=B(),s=D("div"),a=D("div"),k.c(),this.h()},l(c){const b=ml("svelte-1b2q2h6",pe.head);e=gl(b,!1),t=ae(),b.forEach(_),o=N(c),s=I(c,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var g=L(s);a=I(g,"DIV",{class:!0});var p=L(a);k.l(p),p.forEach(_),g.forEach(_),this.h()},h(){e.a=t,h(a,"class",r="lightswitch-thumb "+i[1]),h(s,"class",n="lightswitch "+i[2]),h(s,"role","switch"),h(s,"aria-label","Light Switch"),h(s,"aria-checked",i[0]),h(s,"title",m="Toggle "+(i[0]?"Light":"Dark")+" Mode"),h(s,"tabindex","0")},m(c,b){e.m(l,pe.head),S(pe.head,t),R(c,o,b),R(c,s,b),S(s,a),k.m(a,null),d||(f=[Q(s,"click",i[3]),Q(s,"keydown",i[4]),Q(s,"keyup",i[6]),Q(s,"keypress",i[7])],d=!0)},p(c,[b]){u===(u=v(c))&&k?k.p(c,b):(k.d(1),k=u(c),k&&(k.c(),k.m(a,null))),b&2&&r!==(r="lightswitch-thumb "+c[1])&&h(a,"class",r),b&4&&n!==(n="lightswitch "+c[2])&&h(s,"class",n),b&1&&h(s,"aria-checked",c[0]),b&1&&m!==(m="Toggle "+(c[0]?"Light":"Dark")+" Mode")&&h(s,"title",m)},i:K,o:K,d(c){_(t),c&&e.d(),c&&_(o),c&&_(s),k.d(),d=!1,De(f)}}}const ot="inline-block bg-surface-200-700-token ring-[1px] ring-surface-300-600-token ring-inset w-12 h-6 rounded-full cursor-pointer transition-all duration-[100ms]",nt="bg-white dark:bg-black fill-white dark:fill-black w-6 h-6 flex justify-center items-center rounded-full shadow-lg transition-all duration-[100ms] scale-90",ul="block w-4 h-4";function ft(){localStorage.getItem("storeLightSwitch")==="true"||!("storeLightSwitch"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function ct(i,e,l){let t,o,s,a,r;Z(i,ce,c=>l(0,a=c)),Z(i,Re,c=>l(8,r=c));const n=rl();function m(){const c=window.matchMedia("(prefers-color-scheme: dark)").matches;Re.set(c),a===void 0&&Ee(ce,a=r,a)}function d(){const c=document.documentElement.classList;a?c.add("dark"):c.remove("dark")}function f(c){ce.set(Ee(ce,a=!a,a)),d(),n("click",c)}function v(c){["Enter","Space"].includes(c.code)&&(c.preventDefault(),c.currentTarget.click()),n("keydown",c)}ol(()=>{m()});function u(c){oe.call(this,i,c)}function k(c){oe.call(this,i,c)}return i.$$set=c=>{l(12,e=G(G({},e),Y(c)))},i.$$.update=()=>{i.$$.dirty&1&&l(5,t=a?"translate-x-full":"translate-x-0"),l(2,o=`${ot} ${e.class??""}`),i.$$.dirty&32&&l(1,s=`${nt} ${t}`)},e=Y(e),[a,s,o,f,v,t,u,k]}class ut extends ie{constructor(e){super(),re(this,e,ct,rt,te,{})}}function dt(i){let e,l,t,o,s,a,r,n,m;return{c(){e=D("div"),l=D("h3"),t=X("Curation Support Tool"),o=B(),s=D("br"),a=B(),r=D("h5"),n=D("em"),m=X("v0.5beta"),this.h()},l(d){e=I(d,"DIV",{});var f=L(e);l=I(f,"H3",{class:!0});var v=L(l);t=j(v,"Curation Support Tool"),v.forEach(_),o=N(f),s=I(f,"BR",{}),a=N(f),r=I(f,"H5",{class:!0});var u=L(r);n=I(u,"EM",{});var k=L(n);m=j(k,"v0.5beta"),k.forEach(_),u.forEach(_),f.forEach(_),this.h()},h(){h(l,"class","text-secondary-700 dark:text-white font-bold text-2xl dark:font"),h(r,"class","text-secondary-700 dark:text-white font-bold text-2xl dark:font")},m(d,f){R(d,e,f),S(e,l),S(l,t),S(e,o),S(e,s),S(e,a),S(e,r),S(r,n),S(n,m)},p:K,d(d){d&&_(e)}}}function ht(i){let e,l,t,o;return{c(){e=D("h3"),l=X(`BEXIS2 Instance not set!
				`),t=D("a"),o=X("Set"),this.h()},l(s){e=I(s,"H3",{class:!0});var a=L(e);l=j(a,`BEXIS2 Instance not set!
				`),t=I(a,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var r=L(t);o=j(r,"Set"),r.forEach(_),a.forEach(_),this.h()},h(){h(t,"href",fe+"/settings"),h(t,"class","btn bg-primary-500 rounded-md text-white"),h(t,"data-sveltekit-preload-data","hover"),h(e,"class","text-red-500 text-center")},m(s,a){R(s,e,a),S(e,l),S(e,t),S(t,o)},p:K,d(s){s&&_(e)}}}function _t(i){let e,l,t;function o(r,n){return r[3]!="-1"?gt:mt}let s=o(i),a=s(i);return{c(){e=D("h3"),l=X(i[2]),t=X(" v"),a.c(),this.h()},l(r){e=I(r,"H3",{class:!0});var n=L(e);l=j(n,i[2]),t=j(n," v"),a.l(n),n.forEach(_),this.h()},h(){h(e,"class","text-center")},m(r,n){R(r,e,n),S(e,l),S(e,t),a.m(e,null)},p(r,n){n&4&&ne(l,r[2]),s===(s=o(r))&&a?a.p(r,n):(a.d(1),a=s(r),a&&(a.c(),a.m(e,null)))},d(r){r&&_(e),a.d()}}}function mt(i){let e;return{c(){e=X("not supported version")},l(l){e=j(l,"not supported version")},m(l,t){R(l,e,t)},p:K,d(l){l&&_(e)}}}function gt(i){let e;return{c(){e=X(i[3])},l(l){e=j(l,i[3])},m(l,t){R(l,e,t)},p(l,t){t&8&&ne(e,l[3])},d(l){l&&_(e)}}}function bt(i){let e;function l(s,a){return s[2]!=""?_t:ht}let t=l(i),o=t(i);return{c(){o.c(),e=ae()},l(s){o.l(s),e=ae()},m(s,a){o.m(s,a),R(s,e,a)},p(s,a){t===(t=l(s))&&o?o.p(s,a):(o.d(1),o=t(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&_(e)}}}function vt(i){let e,l;return{c(){e=D("a"),l=X("Login"),this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var o=L(e);l=j(o,"Login"),o.forEach(_),this.h()},h(){h(e,"href",fe+"/settings"),h(e,"class","btn bg-primary-500 rounded-md"),h(e,"data-sveltekit-preload-data","hover")},m(t,o){R(t,e,o),S(e,l)},p:K,d(t){t&&_(e)}}}function kt(i){let e,l,t,o,s;return{c(){e=D("label"),l=D("button"),t=X("Logout"),this.h()},l(a){e=I(a,"LABEL",{});var r=L(e);l=I(r,"BUTTON",{class:!0});var n=L(l);t=j(n,"Logout"),n.forEach(_),r.forEach(_),this.h()},h(){h(l,"class","btn bg-primary-500 rounded-md")},m(a,r){R(a,e,r),S(e,l),S(l,t),o||(s=Q(l,"click",i[4]),o=!0)},p:K,d(a){a&&_(e),o=!1,s()}}}function pt(i){let e,l,t,o,s,a;function r(d,f){return d[1]!=""?kt:vt}let n=r(i),m=n(i);return s=new ut({props:{mode:"dark"}}),{c(){e=D("h3"),l=X(i[0]),t=B(),m.c(),o=B(),x(s.$$.fragment)},l(d){e=I(d,"H3",{});var f=L(e);l=j(f,i[0]),f.forEach(_),t=N(d),m.l(d),o=N(d),$(s.$$.fragment,d)},m(d,f){R(d,e,f),S(e,l),R(d,t,f),m.m(d,f),R(d,o,f),ee(s,d,f),a=!0},p(d,f){(!a||f&1)&&ne(l,d[0]),n===(n=r(d))&&m?m.p(d,f):(m.d(1),m=n(d),m&&(m.c(),m.m(o.parentNode,o)))},i(d){a||(E(s.$$.fragment,d),a=!0)},o(d){C(s.$$.fragment,d),a=!1},d(d){d&&_(e),d&&_(t),m.d(d),d&&_(o),le(s,d)}}}function Et(i){let e,l;return e=new yl({props:{$$slots:{trail:[pt],default:[bt],lead:[dt]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,o){ee(e,t,o),l=!0},p(t,[o]){const s={};o&47&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Lt(i,e,l){let t,o,s,a;Z(i,ge,n=>l(0,t=n)),Z(i,be,n=>l(1,o=n)),Z(i,Ce,n=>l(2,s=n)),Z(i,we,n=>l(3,a=n)),ol(async()=>{be.useLocalStorage(),Ce.useLocalStorage(),ge.useLocalStorage(),we.useLocalStorage()});function r(){be.set(""),ge.set("")}return[t,o,s,a,r]}class St extends ie{constructor(e){super(),re(this,e,Lt,Et,te,{})}}const ue=[{id:"settings",title:"Settings",list:[{href:fe+"/settings",label:"Settings",keywords:""}]},{id:"compare",title:"Compare",list:[{href:fe+"/compare_datasets",label:"Datasets",keywords:""}]},{id:"check",title:"Check",list:[{href:fe+"/check_dq",label:"Data Quality",keywords:""}]}];function $e(i,e,l){const t=i.slice();return t[10]=e[l].id,t[11]=e[l].title,t[12]=e[l].list,t[14]=l,t}function el(i,e,l){const t=i.slice();return t[15]=e[l].href,t[16]=e[l].label,t[17]=e[l].badge,t}function Dt(i){let e;return{c(){e=D("i"),this.h()},l(l){e=I(l,"I",{class:!0}),L(e).forEach(_),this.h()},h(){h(e,"class","fa-solid fa-screwdriver-wrench text-2xl")},m(l,t){R(l,e,t)},p:K,d(l){l&&_(e)}}}function It(i){let e;return{c(){e=D("i"),this.h()},l(l){e=I(l,"I",{class:!0}),L(e).forEach(_),this.h()},h(){h(e,"class","fa-solid fa-code-compare text-2xl")},m(l,t){R(l,e,t)},p:K,d(l){l&&_(e)}}}function Ht(i){let e;return{c(){e=D("i"),this.h()},l(l){e=I(l,"I",{class:!0}),L(e).forEach(_),this.h()},h(){h(e,"class","fa-solid fa-list-check text-2xl")},m(l,t){R(l,e,t)},p:K,d(l){l&&_(e)}}}function Rt(i){let e,l,t,o,s,a;return e=new ke({props:{label:"Settings",title:"Tile",value:"settings",$$slots:{default:[Dt]},$$scope:{ctx:i}}}),e.$on("click",i[3]),t=new ke({props:{label:"Compare",title:"Tile",value:"compare",$$slots:{default:[It]},$$scope:{ctx:i}}}),t.$on("click",i[3]),s=new ke({props:{label:"check",title:"Tile",value:"check",$$slots:{default:[Ht]},$$scope:{ctx:i}}}),s.$on("click",i[3]),{c(){x(e.$$.fragment),l=B(),x(t.$$.fragment),o=B(),x(s.$$.fragment)},l(r){$(e.$$.fragment,r),l=N(r),$(t.$$.fragment,r),o=N(r),$(s.$$.fragment,r)},m(r,n){ee(e,r,n),R(r,l,n),ee(t,r,n),R(r,o,n),ee(s,r,n),a=!0},p(r,n){const m={};n&1048576&&(m.$$scope={dirty:n,ctx:r}),e.$set(m);const d={};n&1048576&&(d.$$scope={dirty:n,ctx:r}),t.$set(d);const f={};n&1048576&&(f.$$scope={dirty:n,ctx:r}),s.$set(f)},i(r){a||(E(e.$$.fragment,r),E(t.$$.fragment,r),E(s.$$.fragment,r),a=!0)},o(r){C(e.$$.fragment,r),C(t.$$.fragment,r),C(s.$$.fragment,r),a=!1},d(r){le(e,r),r&&_(l),le(t,r),r&&_(o),le(s,r)}}}function ll(i){let e,l=i[11]+"",t,o,s,a,r,n,m,d=i[12],f=[];for(let u=0;u<d.length;u+=1)f[u]=sl(el(i,d,u));let v=i[14]+1<i[0].length&&al();return{c(){e=D("div"),t=X(l),s=B(),a=D("nav"),r=D("ul");for(let u=0;u<f.length;u+=1)f[u].c();n=B(),v&&v.c(),m=ae(),this.h()},l(u){e=I(u,"DIV",{id:!0,class:!0});var k=L(e);t=j(k,l),k.forEach(_),s=N(u),a=I(u,"NAV",{class:!0});var c=L(a);r=I(c,"UL",{});var b=L(r);for(let g=0;g<f.length;g+=1)f[g].l(b);b.forEach(_),c.forEach(_),n=N(u),v&&v.l(u),m=ae(),this.h()},h(){h(e,"id",o=i[10]),h(e,"class","text-primary-700 dark:text-primary-500 font-bold uppercase px-4"),h(a,"class","list-nav")},m(u,k){R(u,e,k),S(e,t),R(u,s,k),R(u,a,k),S(a,r);for(let c=0;c<f.length;c+=1)f[c]&&f[c].m(r,null);R(u,n,k),v&&v.m(u,k),R(u,m,k)},p(u,k){if(k&1&&l!==(l=u[11]+"")&&ne(t,l),k&1&&o!==(o=u[10])&&h(e,"id",o),k&11){d=u[12];let c;for(c=0;c<d.length;c+=1){const b=el(u,d,c);f[c]?f[c].p(b,k):(f[c]=sl(b),f[c].c(),f[c].m(r,null))}for(;c<f.length;c+=1)f[c].d(1);f.length=d.length}u[14]+1<u[0].length?v||(v=al(),v.c(),v.m(m.parentNode,m)):v&&(v.d(1),v=null)},d(u){u&&_(e),u&&_(s),u&&_(a),nl(f,u),u&&_(n),v&&v.d(u),u&&_(m)}}}function tl(i){let e,l=i[17]+"",t;return{c(){e=D("span"),t=X(l),this.h()},l(o){e=I(o,"SPAN",{class:!0});var s=L(e);t=j(s,l),s.forEach(_),this.h()},h(){h(e,"class","badge variant-filled-secondary")},m(o,s){R(o,e,s),S(e,t)},p(o,s){s&1&&l!==(l=o[17]+"")&&ne(t,l)},d(o){o&&_(e)}}}function sl(i){let e,l,t,o=i[16]+"",s,a,r,n,m,d,f=i[17]&&tl(i);return{c(){e=D("li"),l=D("a"),t=D("span"),s=B(),f&&f.c(),n=B(),this.h()},l(v){e=I(v,"LI",{});var u=L(e);l=I(u,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var k=L(l);t=I(k,"SPAN",{class:!0});var c=L(t);c.forEach(_),s=N(k),f&&f.l(k),k.forEach(_),n=N(u),u.forEach(_),this.h()},h(){h(t,"class","flex-auto"),h(l,"href",a=i[15]),h(l,"class",r=i[1](i[15])),h(l,"data-sveltekit-preload-data","hover")},m(v,u){R(v,e,u),S(e,l),S(l,t),t.innerHTML=o,S(l,s),f&&f.m(l,null),S(e,n),m||(d=[Q(e,"click",i[3]),Q(e,"keypress",i[6])],m=!0)},p(v,u){u&1&&o!==(o=v[16]+"")&&(t.innerHTML=o),v[17]?f?f.p(v,u):(f=tl(v),f.c(),f.m(l,null)):f&&(f.d(1),f=null),u&1&&a!==(a=v[15])&&h(l,"href",a),u&3&&r!==(r=v[1](v[15]))&&h(l,"class",r)},d(v){v&&_(e),f&&f.d(),m=!1,De(d)}}}function al(i){let e;return{c(){e=D("hr"),this.h()},l(l){e=I(l,"HR",{class:!0}),this.h()},h(){h(e,"class","!my-6 opacity-50")},m(l,t){R(l,e,t)},d(l){l&&_(e)}}}function il(i){let e,l=i[12].length>0&&ll(i);return{c(){l&&l.c(),e=ae()},l(t){l&&l.l(t),e=ae()},m(t,o){l&&l.m(t,o),R(t,e,o)},p(t,o){t[12].length>0?l?l.p(t,o):(l=ll(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&_(e)}}}function Ct(i){let e,l,t,o,s;l=new Nl({props:{selected:i[2],background:"bg-transparent",border:"border-r border-surface-500/30",width:"w-[70px]",$$slots:{lead:[Rt]},$$scope:{ctx:i}}});let a=i[0],r=[];for(let n=0;n<a.length;n+=1)r[n]=il($e(i,a,n));return{c(){e=D("div"),x(l.$$.fragment),t=B(),o=D("section");for(let n=0;n<r.length;n+=1)r[n].c();this.h()},l(n){e=I(n,"DIV",{class:!0});var m=L(e);$(l.$$.fragment,m),t=N(m),o=I(m,"SECTION",{class:!0});var d=L(o);for(let f=0;f<r.length;f+=1)r[f].l(d);d.forEach(_),m.forEach(_),this.h()},h(){h(o,"class","p-4 pb-20 space-y-4 overflow-y-auto"),h(e,"class","grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 hidden lg:grid w-[360px] overflow-hidden ")},m(n,m){R(n,e,m),ee(l,e,null),S(e,t),S(e,o);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(o,null);s=!0},p(n,[m]){const d={};if(m&1048576&&(d.$$scope={dirty:m,ctx:n}),l.$set(d),m&11){a=n[0];let f;for(f=0;f<a.length;f+=1){const v=$e(n,a,f);r[f]?r[f].p(v,m):(r[f]=il(v),r[f].c(),r[f].m(o,null))}for(;f<r.length;f+=1)r[f].d(1);r.length=a.length}},i(n){s||(E(l.$$.fragment,n),s=!0)},o(n){C(l.$$.fragment,n),s=!1},d(n){n&&_(e),le(l),nl(r,n)}}}function wt(i,e,l){let t,o,s;Z(i,cl,v=>l(5,o=v)),Le(1);let{embedded:a=!1}=e;const r=Le("compare");Z(i,r,v=>l(7,s=v));let n=ue;function m(){a&&kl.close()}function d(v){switch(r.set(v),s){case"compare":l(0,n=ue.filter(u=>u.id==="compare"));break;case"check":l(0,n=ue.filter(u=>u.id==="check"));break;case"settings":l(0,n=ue.filter(u=>u.id==="settings"));break}}fl.subscribe(v=>{let u=v.url.pathname.split("/")[1];u&&(["components","actions"].includes(u)&&(u="svelte"),d(u))}),r.subscribe(v=>d(v));function f(v){oe.call(this,i,v)}return i.$$set=v=>{"embedded"in v&&l(4,a=v.embedded)},i.$$.update=()=>{i.$$.dirty&32&&l(1,t=v=>o!=null&&o.includes(v)?"bg-primary-active-token":"")},[n,t,r,m,a,o,f]}class Tt extends ie{constructor(e){super(),re(this,e,wt,Ct,te,{embedded:4})}}function Pt(i){let e;const l=i[0].default,t=q(l,i,i[1],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,s){t&&t.m(o,s),e=!0},p(o,s){t&&t.p&&(!e||s&2)&&O(t,l,o,o[1],e?U(l,o[1],s,null):z(o[1]),null)},i(o){e||(E(t,o),e=!0)},o(o){C(t,o),e=!1},d(o){t&&t.d(o)}}}function yt(i){let e,l;return e=new St({}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,o){ee(e,t,o),l=!0},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Vt(i){let e,l;return e=new Tt({}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,o){ee(e,t,o),l=!0},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function At(i){let e,l;return e=new st({props:{slotSidebarLeft:"flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto",$$slots:{sidebarLeft:[Vt],header:[yt],default:[Pt]},$$scope:{ctx:i}}}),{c(){x(e.$$.fragment)},l(t){$(e.$$.fragment,t)},m(t,o){ee(e,t,o),l=!0},p(t,[o]){const s={};o&2&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){C(e.$$.fragment,t),l=!1},d(t){le(e,t)}}}function Ft(){if(!window.location.hash)return;const i=document.querySelector(window.location.hash);i&&i.scrollIntoView({behavior:"smooth"})}function Mt(i,e,l){let t;Z(i,fl,a=>l(2,t=a));let{$$slots:o={},$$scope:s}=e;return pl(a=>{cl.set(t.url.pathname);const r=a.from&&a.to&&a.from.route.id!==a.to.route.id,n=document.querySelector("#page");r&&n!==null&&(n.scrollTop=0),Ft()}),i.$$set=a=>{"$$scope"in a&&l(1,s=a.$$scope)},[o,s]}class Xt extends ie{constructor(e){super(),re(this,e,Mt,At,te,{})}}export{Xt as component};
