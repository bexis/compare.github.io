import{S as ie,i as re,s as le,G as O,k as D,a as B,l as I,m as L,c as N,h as _,n as h,b as C,H as S,f as E,g as J,t as R,d as W,I as z,J as U,K as q,L as Ee,M as G,N as Y,O as he,P as Q,E as Le,Q as De,R as rl,T as _e,U as Ie,V as He,W as ul,C as K,D as dl,X as pe,Y as oe,q as X,r as j,u as fe,Z as hl,e as ae,_ as _l,$ as ml,a0 as se,o as ol,a1 as gl,a2 as ue,a3 as de,x as Z,y as x,z as $,A as ee,a4 as fl}from"../../chunks/index-7b46d763.js";import{s as ne,a as Ce}from"../../chunks/ProgressBar.svelte_svelte_type_style_lang-01c00cff.js";import{u as me,t as ge,a as Re,b as Te,s as bl}from"../../chunks/store-057c543e.js";import{e as nl}from"../../chunks/singletons-4e1a2a72.js";import{w as Se}from"../../chunks/index-58b6802c.js";import{p as vl}from"../../chunks/stores-6d96dd53.js";function kl(){const{subscribe:i,set:e,update:l}=Se({});return{subscribe:i,set:e,update:l,open:t=>l(()=>({open:!0,...t})),close:()=>l(t=>(t.open=!1,t))}}const pl=kl(),El=i=>({}),Pe=i=>({}),Ll=i=>({}),we=i=>({}),Sl=i=>({}),ye=i=>({});function Ve(i){let e,l,t;const o=i[22].lead,s=O(o,i,i[21],ye);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-bar-slot-lead "+i[4])},m(a,r){C(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&2097152)&&z(s,o,a,a[21],t?q(o,a[21],r,Sl):U(a[21]),ye),(!t||r&16&&l!==(l="app-bar-slot-lead "+a[4]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){R(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Ae(i){let e,l,t;const o=i[22].trail,s=O(o,i,i[21],we);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-bar-slot-trail "+i[2])},m(a,r){C(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&2097152)&&z(s,o,a,a[21],t?q(o,a[21],r,Ll):U(a[21]),we),(!t||r&4&&l!==(l="app-bar-slot-trail "+a[2]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){R(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Me(i){let e,l,t;const o=i[22].headline,s=O(o,i,i[21],Pe);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-bar-row-headline "+i[5])},m(a,r){C(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&2097152)&&z(s,o,a,a[21],t?q(o,a[21],r,El):U(a[21]),Pe),(!t||r&32&&l!==(l="app-bar-row-headline "+a[5]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){R(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Dl(i){let e,l,t,o,s,a,r,f,m,d,n=i[8].lead&&Ve(i);const v=i[22].default,u=O(v,i,i[21],null);let k=i[8].trail&&Ae(i),c=i[8].headline&&Me(i);return{c(){e=D("div"),l=D("div"),n&&n.c(),t=B(),o=D("div"),u&&u.c(),a=B(),k&&k.c(),f=B(),c&&c.c(),this.h()},l(b){e=I(b,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var g=L(e);l=I(g,"DIV",{class:!0});var p=L(l);n&&n.l(p),t=N(p),o=I(p,"DIV",{class:!0});var w=L(o);u&&u.l(w),w.forEach(_),a=N(p),k&&k.l(p),p.forEach(_),f=N(g),c&&c.l(g),g.forEach(_),this.h()},h(){h(o,"class",s="app-bar-slot-default "+i[3]),h(l,"class",r="app-bar-row-main "+i[6]),h(e,"class",m="app-bar "+i[7]),h(e,"data-testid","app-bar"),h(e,"role","toolbar"),h(e,"aria-label",i[0]),h(e,"aria-labelledby",i[1])},m(b,g){C(b,e,g),S(e,l),n&&n.m(l,null),S(l,t),S(l,o),u&&u.m(o,null),S(l,a),k&&k.m(l,null),S(e,f),c&&c.m(e,null),d=!0},p(b,[g]){b[8].lead?n?(n.p(b,g),g&256&&E(n,1)):(n=Ve(b),n.c(),E(n,1),n.m(l,t)):n&&(J(),R(n,1,1,()=>{n=null}),W()),u&&u.p&&(!d||g&2097152)&&z(u,v,b,b[21],d?q(v,b[21],g,null):U(b[21]),null),(!d||g&8&&s!==(s="app-bar-slot-default "+b[3]))&&h(o,"class",s),b[8].trail?k?(k.p(b,g),g&256&&E(k,1)):(k=Ae(b),k.c(),E(k,1),k.m(l,null)):k&&(J(),R(k,1,1,()=>{k=null}),W()),(!d||g&64&&r!==(r="app-bar-row-main "+b[6]))&&h(l,"class",r),b[8].headline?c?(c.p(b,g),g&256&&E(c,1)):(c=Me(b),c.c(),E(c,1),c.m(e,null)):c&&(J(),R(c,1,1,()=>{c=null}),W()),(!d||g&128&&m!==(m="app-bar "+b[7]))&&h(e,"class",m),(!d||g&1)&&h(e,"aria-label",b[0]),(!d||g&2)&&h(e,"aria-labelledby",b[1])},i(b){d||(E(n),E(u,b),E(k),E(c),d=!0)},o(b){R(n),R(u,b),R(k),R(c),d=!1},d(b){b&&_(e),n&&n.d(),u&&u.d(b),k&&k.d(),c&&c.d()}}}const Il="flex flex-col space-y-4",Hl="grid items-center",Cl="",Rl="flex-none flex justify-between items-center",Tl="flex-auto",Pl="flex-none flex items-center space-x-4";function wl(i,e,l){let t,o,s,a,r,f,{$$slots:m={},$$scope:d}=e;const n=Ee(m);let{background:v="bg-surface-100-800-token"}=e,{border:u=""}=e,{padding:k="p-4"}=e,{shadow:c=""}=e,{spacing:b="space-y-4"}=e,{gridColumns:g="grid-cols-[auto_1fr_auto]"}=e,{gap:p="gap-4"}=e,{regionRowMain:w=""}=e,{regionRowHeadline:F=""}=e,{slotLead:y=""}=e,{slotDefault:V=""}=e,{slotTrail:H=""}=e,{label:T=""}=e,{labelledby:M=""}=e;return i.$$set=P=>{l(23,e=G(G({},e),Y(P))),"background"in P&&l(9,v=P.background),"border"in P&&l(10,u=P.border),"padding"in P&&l(11,k=P.padding),"shadow"in P&&l(12,c=P.shadow),"spacing"in P&&l(13,b=P.spacing),"gridColumns"in P&&l(14,g=P.gridColumns),"gap"in P&&l(15,p=P.gap),"regionRowMain"in P&&l(16,w=P.regionRowMain),"regionRowHeadline"in P&&l(17,F=P.regionRowHeadline),"slotLead"in P&&l(18,y=P.slotLead),"slotDefault"in P&&l(19,V=P.slotDefault),"slotTrail"in P&&l(20,H=P.slotTrail),"label"in P&&l(0,T=P.label),"labelledby"in P&&l(1,M=P.labelledby),"$$scope"in P&&l(21,d=P.$$scope)},i.$$.update=()=>{l(7,t=`${Il} ${v} ${u} ${b} ${k} ${c} ${e.class??""}`),i.$$.dirty&114688&&l(6,o=`${Hl} ${g} ${p} ${w}`),i.$$.dirty&131072&&l(5,s=`${Cl} ${F}`),i.$$.dirty&262144&&l(4,a=`${Rl} ${y}`),i.$$.dirty&524288&&l(3,r=`${Tl} ${V}`),i.$$.dirty&1048576&&l(2,f=`${Pl} ${H}`)},e=Y(e),[T,M,f,r,a,s,o,t,n,v,u,k,c,b,g,p,w,F,y,V,H,d,m]}class yl extends ie{constructor(e){super(),re(this,e,wl,Dl,le,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const Vl=i=>({}),Fe=i=>({}),Al=i=>({}),Be=i=>({});function Ml(i){let e,l,t,o,s,a,r,f,m,d,n;const v=i[13].lead,u=O(v,i,i[12],Be),k=i[13].default,c=O(k,i,i[12],null),b=i[13].trail,g=O(b,i,i[12],Fe);return{c(){e=D("div"),l=D("div"),u&&u.c(),o=B(),s=D("div"),c&&c.c(),r=B(),f=D("div"),g&&g.c(),this.h()},l(p){e=I(p,"DIV",{class:!0});var w=L(e);l=I(w,"DIV",{class:!0});var F=L(l);u&&u.l(F),F.forEach(_),o=N(w),s=I(w,"DIV",{class:!0});var y=L(s);c&&c.l(y),y.forEach(_),r=N(w),f=I(w,"DIV",{class:!0});var V=L(f);g&&g.l(V),V.forEach(_),w.forEach(_),this.h()},h(){h(l,"class",t="app-bar-lead "+i[0]),h(s,"class",a="app-bar-default "+i[1]),h(f,"class",m="app-bar-trail "+i[2]),h(e,"class",d="app-rail "+i[3])},m(p,w){C(p,e,w),S(e,l),u&&u.m(l,null),S(e,o),S(e,s),c&&c.m(s,null),S(e,r),S(e,f),g&&g.m(f,null),n=!0},p(p,[w]){u&&u.p&&(!n||w&4096)&&z(u,v,p,p[12],n?q(v,p[12],w,Al):U(p[12]),Be),(!n||w&1&&t!==(t="app-bar-lead "+p[0]))&&h(l,"class",t),c&&c.p&&(!n||w&4096)&&z(c,k,p,p[12],n?q(k,p[12],w,null):U(p[12]),null),(!n||w&2&&a!==(a="app-bar-default "+p[1]))&&h(s,"class",a),g&&g.p&&(!n||w&4096)&&z(g,b,p,p[12],n?q(b,p[12],w,Vl):U(p[12]),Fe),(!n||w&4&&m!==(m="app-bar-trail "+p[2]))&&h(f,"class",m),(!n||w&8&&d!==(d="app-rail "+p[3]))&&h(e,"class",d)},i(p){n||(E(u,p),E(c,p),E(g,p),n=!0)},o(p){R(u,p),R(c,p),R(g,p),n=!1},d(p){p&&_(e),u&&u.d(p),c&&c.d(p),g&&g.d(p)}}}const Fl="grid grid-rows-[auto_1fr_auto] overflow-y-auto";function Bl(i,e,l){let t,{$$slots:o={},$$scope:s}=e,{selected:a=Se(void 0)}=e,{background:r="bg-surface-100-800-token"}=e,{border:f=""}=e,{active:m="bg-primary-active-token"}=e,{hover:d="bg-primary-hover-token"}=e,{width:n="w-[70px] sm:w-20"}=e,{height:v="h-full"}=e,{gap:u="gap-0"}=e,{regionLead:k=""}=e,{regionDefault:c=""}=e,{regionTrail:b=""}=e;return he("selected",a),he("active",m),he("hover",d),i.$$set=g=>{l(14,e=G(G({},e),Y(g))),"selected"in g&&l(4,a=g.selected),"background"in g&&l(5,r=g.background),"border"in g&&l(6,f=g.border),"active"in g&&l(7,m=g.active),"hover"in g&&l(8,d=g.hover),"width"in g&&l(9,n=g.width),"height"in g&&l(10,v=g.height),"gap"in g&&l(11,u=g.gap),"regionLead"in g&&l(0,k=g.regionLead),"regionDefault"in g&&l(1,c=g.regionDefault),"regionTrail"in g&&l(2,b=g.regionTrail),"$$scope"in g&&l(12,s=g.$$scope)},i.$$.update=()=>{l(3,t=`${Fl} ${r} ${f} ${n} ${v} ${u} ${e.class||""}`)},e=Y(e),[k,c,b,t,a,r,f,m,d,n,v,u,s,o]}class Nl extends ie{constructor(e){super(),re(this,e,Bl,Ml,le,{selected:4,background:5,border:6,active:7,hover:8,width:9,height:10,gap:11,regionLead:0,regionDefault:1,regionTrail:2})}}function Ne(i){let e,l,t;const o=i[16].default,s=O(o,i,i[15],null);return{c(){e=D("div"),s&&s.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"class",l="app-rail-tile-icon "+i[2])},m(a,r){C(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&32768)&&z(s,o,a,a[15],t?q(o,a[15],r,null):U(a[15]),null),(!t||r&4&&l!==(l="app-rail-tile-icon "+a[2]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){R(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Oe(i){let e,l,t;return{c(){e=D("div"),l=X(i[1]),this.h()},l(o){e=I(o,"DIV",{class:!0});var s=L(e);l=j(s,i[1]),s.forEach(_),this.h()},h(){h(e,"class",t="app-rail-tile-label "+i[4])},m(o,s){C(o,e,s),S(e,l)},p(o,s){s&2&&fe(l,o[1]),s&16&&t!==(t="app-rail-tile-label "+o[4])&&h(e,"class",t)},d(o){o&&_(e)}}}function be(i){let e,l,t,o,s=i[8].default&&Ne(i),a=i[1]&&Oe(i),r=[i[7](),{class:t="app-rail-tile "+i[5]}],f={};for(let m=0;m<r.length;m+=1)f=G(f,r[m]);return{c(){e=D(i[0]),s&&s.c(),l=B(),a&&a.c(),this.h()},l(m){e=I(m,(i[0]||"null").toUpperCase(),{class:!0});var d=L(e);s&&s.l(d),l=N(d),a&&a.l(d),d.forEach(_),this.h()},h(){/-/.test(i[0])?Ie(e,f):He(e,f)},m(m,d){C(m,e,d),s&&s.m(e,null),S(e,l),a&&a.m(e,null),o=!0},p(m,d){m[8].default?s?(s.p(m,d),d&256&&E(s,1)):(s=Ne(m),s.c(),E(s,1),s.m(e,l)):s&&(J(),R(s,1,1,()=>{s=null}),W()),m[1]?a?a.p(m,d):(a=Oe(m),a.c(),a.m(e,null)):a&&(a.d(1),a=null),f=ul(r,[m[7](),(!o||d&32&&t!==(t="app-rail-tile "+m[5]))&&{class:t}]),/-/.test(m[0])?Ie(e,f):He(e,f)},i(m){o||(E(s),o=!0)},o(m){R(s),o=!1},d(m){m&&_(e),s&&s.d(),a&&a.d()}}}function Ol(i){let e,l=i[0],t,o,s,a=i[0]&&be(i);return{c(){e=D("div"),a&&a.c()},l(r){e=I(r,"DIV",{});var f=L(e);a&&a.l(f),f.forEach(_)},m(r,f){C(r,e,f),a&&a.m(e,null),t=!0,o||(s=[Q(e,"click",i[6]),Q(e,"keydown",i[17]),Q(e,"keyup",i[18]),Q(e,"keypress",i[19])],o=!0)},p(r,[f]){r[0]?l?le(l,r[0])?(a.d(1),a=be(r),a.c(),a.m(e,null)):a.p(r,f):(a=be(r),a.c(),a.m(e,null)):l&&(a.d(1),a=null),l=r[0]},i(r){t||(E(a),t=!0)},o(r){R(a),t=!1},d(r){r&&_(e),a&&a.d(r),o=!1,Le(s)}}}const zl="unstyled grid place-content-center place-items-center w-full aspect-square space-y-1.5 cursor-pointer",Ul="font-bold text-xs text-center";function ql(i,e,l){let t,o,s;const a=["value","tag","label","regionIcon","regionLabel","selected","active","hover"];let r=De(e,a),f,m=K,d=()=>(m(),m=dl(F,A=>l(14,f=A)),F);i.$$.on_destroy.push(()=>m());let{$$slots:n={},$$scope:v}=e;const u=Ee(n),k=rl();let{value:c=void 0}=e,{tag:b="button"}=e,{label:g=""}=e,{regionIcon:p=""}=e,{regionLabel:w=""}=e,{selected:F=_e("selected")}=e;d();let{active:y=_e("active")}=e,{hover:V=_e("hover")}=e;function H(A){!f||!c||(pe(F,f=c,f),k("click",A))}function T(){return delete r.class,r}function M(A){oe.call(this,i,A)}function P(A){oe.call(this,i,A)}function te(A){oe.call(this,i,A)}return i.$$set=A=>{l(22,e=G(G({},e),Y(A))),l(21,r=De(e,a)),"value"in A&&l(9,c=A.value),"tag"in A&&l(0,b=A.tag),"label"in A&&l(1,g=A.label),"regionIcon"in A&&l(2,p=A.regionIcon),"regionLabel"in A&&l(10,w=A.regionLabel),"selected"in A&&d(l(3,F=A.selected)),"active"in A&&l(11,y=A.active),"hover"in A&&l(12,V=A.hover),"$$scope"in A&&l(15,v=A.$$scope)},i.$$.update=()=>{i.$$.dirty&18944&&l(13,t=f&&c&&f===c?`${y}`:""),l(5,o=`${zl} ${V} ${t} ${e.class||""}`),i.$$.dirty&1024&&l(4,s=`${Ul} ${w}`)},e=Y(e),[b,g,p,F,s,o,H,T,u,c,w,y,V,t,f,v,n,M,P,te]}class ve extends ie{constructor(e){super(),re(this,e,ql,Ol,le,{value:9,tag:0,label:1,regionIcon:2,regionLabel:10,selected:3,active:11,hover:12})}}const Xl=i=>({}),ze=i=>({}),jl=i=>({}),Ue=i=>({}),Kl=i=>({}),qe=i=>({}),Ql=i=>({}),Xe=i=>({}),Gl=i=>({}),je=i=>({}),Jl=i=>({}),Ke=i=>({});function Qe(i){let e,l,t;const o=i[18].header,s=O(o,i,i[17],Ke);return{c(){e=D("header"),s&&s.c(),this.h()},l(a){e=I(a,"HEADER",{id:!0,class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"id","shell-header"),h(e,"class",l="flex-none "+i[7])},m(a,r){C(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&131072)&&z(s,o,a,a[17],t?q(o,a[17],r,Jl):U(a[17]),Ke),(!t||r&128&&l!==(l="flex-none "+a[7]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){R(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Ge(i){let e,l;const t=i[18].sidebarLeft,o=O(t,i,i[17],je);return{c(){e=D("aside"),o&&o.c(),this.h()},l(s){e=I(s,"ASIDE",{id:!0,class:!0});var a=L(e);o&&o.l(a),a.forEach(_),this.h()},h(){h(e,"id","sidebar-left"),h(e,"class",i[6])},m(s,a){C(s,e,a),o&&o.m(e,null),l=!0},p(s,a){o&&o.p&&(!l||a&131072)&&z(o,t,s,s[17],l?q(t,s[17],a,Gl):U(s[17]),je),(!l||a&64)&&h(e,"class",s[6])},i(s){l||(E(o,s),l=!0)},o(s){R(o,s),l=!1},d(s){s&&_(e),o&&o.d(s)}}}function Je(i){let e,l,t;const o=i[18].pageHeader,s=O(o,i,i[17],Xe),a=s||Wl();return{c(){e=D("header"),a&&a.c(),this.h()},l(r){e=I(r,"HEADER",{id:!0,class:!0});var f=L(e);a&&a.l(f),f.forEach(_),this.h()},h(){h(e,"id","page-header"),h(e,"class",l="flex-none "+i[4])},m(r,f){C(r,e,f),a&&a.m(e,null),t=!0},p(r,f){s&&s.p&&(!t||f&131072)&&z(s,o,r,r[17],t?q(o,r[17],f,Ql):U(r[17]),Xe),(!t||f&16&&l!==(l="flex-none "+r[4]))&&h(e,"class",l)},i(r){t||(E(a,r),t=!0)},o(r){R(a,r),t=!1},d(r){r&&_(e),a&&a.d(r)}}}function Wl(i){let e;return{c(){e=X("(slot:header)")},l(l){e=j(l,"(slot:header)")},m(l,t){C(l,e,t)},d(l){l&&_(e)}}}function We(i){let e,l,t;const o=i[18].pageFooter,s=O(o,i,i[17],qe),a=s||Yl();return{c(){e=D("footer"),a&&a.c(),this.h()},l(r){e=I(r,"FOOTER",{id:!0,class:!0});var f=L(e);a&&a.l(f),f.forEach(_),this.h()},h(){h(e,"id","page-footer"),h(e,"class",l="flex-none "+i[2])},m(r,f){C(r,e,f),a&&a.m(e,null),t=!0},p(r,f){s&&s.p&&(!t||f&131072)&&z(s,o,r,r[17],t?q(o,r[17],f,Kl):U(r[17]),qe),(!t||f&4&&l!==(l="flex-none "+r[2]))&&h(e,"class",l)},i(r){t||(E(a,r),t=!0)},o(r){R(a,r),t=!1},d(r){r&&_(e),a&&a.d(r)}}}function Yl(i){let e;return{c(){e=X("(slot:footer)")},l(l){e=j(l,"(slot:footer)")},m(l,t){C(l,e,t)},d(l){l&&_(e)}}}function Ye(i){let e,l;const t=i[18].sidebarRight,o=O(t,i,i[17],Ue);return{c(){e=D("aside"),o&&o.c(),this.h()},l(s){e=I(s,"ASIDE",{id:!0,class:!0});var a=L(e);o&&o.l(a),a.forEach(_),this.h()},h(){h(e,"id","sidebar-right"),h(e,"class",i[5])},m(s,a){C(s,e,a),o&&o.m(e,null),l=!0},p(s,a){o&&o.p&&(!l||a&131072)&&z(o,t,s,s[17],l?q(t,s[17],a,jl):U(s[17]),Ue),(!l||a&32)&&h(e,"class",s[5])},i(s){l||(E(o,s),l=!0)},o(s){R(o,s),l=!1},d(s){s&&_(e),o&&o.d(s)}}}function Ze(i){let e,l,t;const o=i[18].footer,s=O(o,i,i[17],ze);return{c(){e=D("footer"),s&&s.c(),this.h()},l(a){e=I(a,"FOOTER",{id:!0,class:!0});var r=L(e);s&&s.l(r),r.forEach(_),this.h()},h(){h(e,"id","shell-footer"),h(e,"class",l="flex-none "+i[1])},m(a,r){C(a,e,r),s&&s.m(e,null),t=!0},p(a,r){s&&s.p&&(!t||r&131072)&&z(s,o,a,a[17],t?q(o,a[17],r,Xl):U(a[17]),ze),(!t||r&2&&l!==(l="flex-none "+a[1]))&&h(e,"class",l)},i(a){t||(E(s,a),t=!0)},o(a){R(s,a),t=!1},d(a){a&&_(e),s&&s.d(a)}}}function Zl(i){let e,l,t,o,s,a,r,f,m,d,n,v,u,k,c,b=i[9].header&&Qe(i),g=i[9].sidebarLeft&&Ge(i),p=i[9].pageHeader&&Je(i);const w=i[18].default,F=O(w,i,i[17],null);let y=i[9].pageFooter&&We(i),V=i[9].sidebarRight&&Ye(i),H=i[9].footer&&Ze(i);return{c(){e=D("div"),b&&b.c(),l=B(),t=D("div"),g&&g.c(),o=B(),s=D("div"),p&&p.c(),a=B(),r=D("main"),F&&F.c(),m=B(),y&&y.c(),n=B(),V&&V.c(),v=B(),H&&H.c(),this.h()},l(T){e=I(T,"DIV",{id:!0,class:!0,"data-testid":!0});var M=L(e);b&&b.l(M),l=N(M),t=I(M,"DIV",{class:!0});var P=L(t);g&&g.l(P),o=N(P),s=I(P,"DIV",{id:!0,class:!0});var te=L(s);p&&p.l(te),a=N(te),r=I(te,"MAIN",{id:!0,class:!0});var A=L(r);F&&F.l(A),A.forEach(_),m=N(te),y&&y.l(te),te.forEach(_),n=N(P),V&&V.l(P),P.forEach(_),v=N(M),H&&H.l(M),M.forEach(_),this.h()},h(){h(r,"id","page-content"),h(r,"class",f="flex-auto "+i[3]),h(s,"id","page"),h(s,"class",d=i[0]+" "+xe),h(t,"class","flex-auto "+$l),h(e,"id","appShell"),h(e,"class",i[8]),h(e,"data-testid","app-shell")},m(T,M){C(T,e,M),b&&b.m(e,null),S(e,l),S(e,t),g&&g.m(t,null),S(t,o),S(t,s),p&&p.m(s,null),S(s,a),S(s,r),F&&F.m(r,null),S(s,m),y&&y.m(s,null),S(t,n),V&&V.m(t,null),S(e,v),H&&H.m(e,null),u=!0,k||(c=Q(s,"scroll",i[19]),k=!0)},p(T,[M]){T[9].header?b?(b.p(T,M),M&512&&E(b,1)):(b=Qe(T),b.c(),E(b,1),b.m(e,l)):b&&(J(),R(b,1,1,()=>{b=null}),W()),T[9].sidebarLeft?g?(g.p(T,M),M&512&&E(g,1)):(g=Ge(T),g.c(),E(g,1),g.m(t,o)):g&&(J(),R(g,1,1,()=>{g=null}),W()),T[9].pageHeader?p?(p.p(T,M),M&512&&E(p,1)):(p=Je(T),p.c(),E(p,1),p.m(s,a)):p&&(J(),R(p,1,1,()=>{p=null}),W()),F&&F.p&&(!u||M&131072)&&z(F,w,T,T[17],u?q(w,T[17],M,null):U(T[17]),null),(!u||M&8&&f!==(f="flex-auto "+T[3]))&&h(r,"class",f),T[9].pageFooter?y?(y.p(T,M),M&512&&E(y,1)):(y=We(T),y.c(),E(y,1),y.m(s,null)):y&&(J(),R(y,1,1,()=>{y=null}),W()),(!u||M&1&&d!==(d=T[0]+" "+xe))&&h(s,"class",d),T[9].sidebarRight?V?(V.p(T,M),M&512&&E(V,1)):(V=Ye(T),V.c(),E(V,1),V.m(t,null)):V&&(J(),R(V,1,1,()=>{V=null}),W()),T[9].footer?H?(H.p(T,M),M&512&&E(H,1)):(H=Ze(T),H.c(),E(H,1),H.m(e,null)):H&&(J(),R(H,1,1,()=>{H=null}),W()),(!u||M&256)&&h(e,"class",T[8])},i(T){u||(E(b),E(g),E(p),E(F,T),E(y),E(V),E(H),u=!0)},o(T){R(b),R(g),R(p),R(F,T),R(y),R(V),R(H),u=!1},d(T){T&&_(e),b&&b.d(),g&&g.d(),p&&p.d(),F&&F.d(T),y&&y.d(),V&&V.d(),H&&H.d(),k=!1,c()}}}const xl="w-full h-full flex flex-col overflow-hidden",$l="w-full h-full flex overflow-hidden",xe="flex-1 overflow-x-hidden overflow-y-auto flex flex-col",et="flex-none overflow-x-hidden overflow-y-auto",lt="flex-none overflow-x-hidden overflow-y-auto";function tt(i,e,l){let t,o,s,a,r,f,m,d,{$$slots:n={},$$scope:v}=e;const u=Ee(n);let{regionPage:k=""}=e,{slotHeader:c="z-10"}=e,{slotSidebarLeft:b="w-auto"}=e,{slotSidebarRight:g="w-auto"}=e,{slotPageHeader:p=""}=e,{slotPageContent:w=""}=e,{slotPageFooter:F=""}=e,{slotFooter:y=""}=e;function V(H){oe.call(this,i,H)}return i.$$set=H=>{l(20,e=G(G({},e),Y(H))),"regionPage"in H&&l(0,k=H.regionPage),"slotHeader"in H&&l(10,c=H.slotHeader),"slotSidebarLeft"in H&&l(11,b=H.slotSidebarLeft),"slotSidebarRight"in H&&l(12,g=H.slotSidebarRight),"slotPageHeader"in H&&l(13,p=H.slotPageHeader),"slotPageContent"in H&&l(14,w=H.slotPageContent),"slotPageFooter"in H&&l(15,F=H.slotPageFooter),"slotFooter"in H&&l(16,y=H.slotFooter),"$$scope"in H&&l(17,v=H.$$scope)},i.$$.update=()=>{l(8,t=`${xl} ${e.class??""}`),i.$$.dirty&1024&&l(7,o=`${c}`),i.$$.dirty&2048&&l(6,s=`${et} ${b}`),i.$$.dirty&4096&&l(5,a=`${lt} ${g}`),i.$$.dirty&8192&&l(4,r=`${p}`),i.$$.dirty&16384&&l(3,f=`${w}`),i.$$.dirty&32768&&l(2,m=`${F}`),i.$$.dirty&65536&&l(1,d=`${y}`)},e=Y(e),[k,d,m,f,r,a,s,o,t,u,c,b,g,p,w,F,y,v,n,V]}class st extends ie{constructor(e){super(),re(this,e,tt,Zl,le,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}const{document:ke}=gl;function at(i){let e,l;return{c(){e=ue("svg"),l=ue("path"),this.h()},l(t){e=de(t,"svg",{class:!0,xmlns:!0,viewBox:!0});var o=L(e);l=de(o,"path",{d:!0}),L(l).forEach(_),o.forEach(_),this.h()},h(){h(l,"d","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"),h(e,"class","lightswitch-icon fill-white "+cl),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"viewBox","0 0 384 512")},m(t,o){C(t,e,o),S(e,l)},p:K,d(t){t&&_(e)}}}function it(i){let e,l;return{c(){e=ue("svg"),l=ue("path"),this.h()},l(t){e=de(t,"svg",{class:!0,xmlns:!0,viewBox:!0});var o=L(e);l=de(o,"path",{d:!0}),L(l).forEach(_),o.forEach(_),this.h()},h(){h(l,"d","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z"),h(e,"class","lightswitch-icon fill-black "+cl),h(e,"xmlns","http://www.w3.org/2000/svg"),h(e,"viewBox","0 0 512 512")},m(t,o){C(t,e,o),S(e,l)},p:K,d(t){t&&_(e)}}}function rt(i){let e,l=`<script>${nt.toString()} setColorScheme();<\/script>`,t,o,s,a,r,f,m,d,n;function v(c,b){return c[0]===!1?it:at}let u=v(i),k=u(i);return{c(){e=new hl(!1),t=ae(),o=B(),s=D("div"),a=D("div"),k.c(),this.h()},l(c){const b=_l("svelte-1b2q2h6",ke.head);e=ml(b,!1),t=ae(),b.forEach(_),o=N(c),s=I(c,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var g=L(s);a=I(g,"DIV",{class:!0});var p=L(a);k.l(p),p.forEach(_),g.forEach(_),this.h()},h(){e.a=t,h(a,"class",r="lightswitch-thumb "+i[1]),h(s,"class",f="lightswitch "+i[2]),h(s,"role","switch"),h(s,"aria-label","Light Switch"),h(s,"aria-checked",i[0]),h(s,"title",m="Toggle "+(i[0]?"Light":"Dark")+" Mode"),h(s,"tabindex","0")},m(c,b){e.m(l,ke.head),S(ke.head,t),C(c,o,b),C(c,s,b),S(s,a),k.m(a,null),d||(n=[Q(s,"click",i[3]),Q(s,"keydown",i[4]),Q(s,"keyup",i[6]),Q(s,"keypress",i[7])],d=!0)},p(c,[b]){u===(u=v(c))&&k?k.p(c,b):(k.d(1),k=u(c),k&&(k.c(),k.m(a,null))),b&2&&r!==(r="lightswitch-thumb "+c[1])&&h(a,"class",r),b&4&&f!==(f="lightswitch "+c[2])&&h(s,"class",f),b&1&&h(s,"aria-checked",c[0]),b&1&&m!==(m="Toggle "+(c[0]?"Light":"Dark")+" Mode")&&h(s,"title",m)},i:K,o:K,d(c){_(t),c&&e.d(),c&&_(o),c&&_(s),k.d(),d=!1,Le(n)}}}const ot="inline-block bg-surface-200-700-token ring-[1px] ring-surface-300-600-token ring-inset w-12 h-6 rounded-full cursor-pointer transition-all duration-[100ms]",ft="bg-white dark:bg-black fill-white dark:fill-black w-6 h-6 flex justify-center items-center rounded-full shadow-lg transition-all duration-[100ms] scale-90",cl="block w-4 h-4";function nt(){localStorage.getItem("storeLightSwitch")==="true"||!("storeLightSwitch"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}function ct(i,e,l){let t,o,s,a,r;se(i,ne,c=>l(0,a=c)),se(i,Ce,c=>l(8,r=c));const f=rl();function m(){const c=window.matchMedia("(prefers-color-scheme: dark)").matches;Ce.set(c),a===void 0&&pe(ne,a=r,a)}function d(){const c=document.documentElement.classList;a?c.add("dark"):c.remove("dark")}function n(c){ne.set(pe(ne,a=!a,a)),d(),f("click",c)}function v(c){["Enter","Space"].includes(c.code)&&(c.preventDefault(),c.currentTarget.click()),f("keydown",c)}ol(()=>{m()});function u(c){oe.call(this,i,c)}function k(c){oe.call(this,i,c)}return i.$$set=c=>{l(12,e=G(G({},e),Y(c)))},i.$$.update=()=>{i.$$.dirty&1&&l(5,t=a?"translate-x-full":"translate-x-0"),l(2,o=`${ot} ${e.class??""}`),i.$$.dirty&32&&l(1,s=`${ft} ${t}`)},e=Y(e),[a,s,o,n,v,t,u,k]}class ut extends ie{constructor(e){super(),re(this,e,ct,rt,le,{})}}function dt(i){let e,l,t,o,s,a,r,f,m;return{c(){e=D("div"),l=D("h3"),t=X("Curation Support Tool"),o=B(),s=D("br"),a=B(),r=D("h5"),f=D("em"),m=X("v0.1beta"),this.h()},l(d){e=I(d,"DIV",{});var n=L(e);l=I(n,"H3",{class:!0});var v=L(l);t=j(v,"Curation Support Tool"),v.forEach(_),o=N(n),s=I(n,"BR",{}),a=N(n),r=I(n,"H5",{class:!0});var u=L(r);f=I(u,"EM",{});var k=L(f);m=j(k,"v0.1beta"),k.forEach(_),u.forEach(_),n.forEach(_),this.h()},h(){h(l,"class","text-secondary-700 dark:text-white font-bold text-2xl dark:font"),h(r,"class","text-secondary-700 dark:text-white font-bold text-2xl dark:font")},m(d,n){C(d,e,n),S(e,l),S(l,t),S(e,o),S(e,s),S(e,a),S(e,r),S(r,f),S(f,m)},p:K,d(d){d&&_(e)}}}function ht(i){let e,l,t,o;return{c(){e=D("h3"),l=X(`BEXIS2 Instance not set!
				`),t=D("a"),o=X("Set"),this.h()},l(s){e=I(s,"H3",{class:!0});var a=L(e);l=j(a,`BEXIS2 Instance not set!
				`),t=I(a,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var r=L(t);o=j(r,"Set"),r.forEach(_),a.forEach(_),this.h()},h(){h(t,"href",nl+"/settings"),h(t,"class","btn bg-primary-500 rounded-md text-white"),h(t,"data-sveltekit-preload-data","hover"),h(e,"class","text-red-500 text-center")},m(s,a){C(s,e,a),S(e,l),S(e,t),S(t,o)},p:K,d(s){s&&_(e)}}}function _t(i){let e,l,t;function o(r,f){return r[3]!="-1"?gt:mt}let s=o(i),a=s(i);return{c(){e=D("h3"),l=X(i[2]),t=X(" v"),a.c(),this.h()},l(r){e=I(r,"H3",{class:!0});var f=L(e);l=j(f,i[2]),t=j(f," v"),a.l(f),f.forEach(_),this.h()},h(){h(e,"class","text-center")},m(r,f){C(r,e,f),S(e,l),S(e,t),a.m(e,null)},p(r,f){f&4&&fe(l,r[2]),s===(s=o(r))&&a?a.p(r,f):(a.d(1),a=s(r),a&&(a.c(),a.m(e,null)))},d(r){r&&_(e),a.d()}}}function mt(i){let e;return{c(){e=X("not supported version")},l(l){e=j(l,"not supported version")},m(l,t){C(l,e,t)},p:K,d(l){l&&_(e)}}}function gt(i){let e;return{c(){e=X(i[3])},l(l){e=j(l,i[3])},m(l,t){C(l,e,t)},p(l,t){t&8&&fe(e,l[3])},d(l){l&&_(e)}}}function bt(i){let e;function l(s,a){return s[2]!=""?_t:ht}let t=l(i),o=t(i);return{c(){o.c(),e=ae()},l(s){o.l(s),e=ae()},m(s,a){o.m(s,a),C(s,e,a)},p(s,a){t===(t=l(s))&&o?o.p(s,a):(o.d(1),o=t(s),o&&(o.c(),o.m(e.parentNode,e)))},d(s){o.d(s),s&&_(e)}}}function vt(i){let e,l;return{c(){e=D("a"),l=X("Login"),this.h()},l(t){e=I(t,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var o=L(e);l=j(o,"Login"),o.forEach(_),this.h()},h(){h(e,"href",nl+"/settings"),h(e,"class","btn bg-primary-500 rounded-md"),h(e,"data-sveltekit-preload-data","hover")},m(t,o){C(t,e,o),S(e,l)},p:K,d(t){t&&_(e)}}}function kt(i){let e,l,t,o,s;return{c(){e=D("label"),l=D("button"),t=X("Logout"),this.h()},l(a){e=I(a,"LABEL",{});var r=L(e);l=I(r,"BUTTON",{class:!0});var f=L(l);t=j(f,"Logout"),f.forEach(_),r.forEach(_),this.h()},h(){h(l,"class","btn bg-primary-500 rounded-md")},m(a,r){C(a,e,r),S(e,l),S(l,t),o||(s=Q(l,"click",i[4]),o=!0)},p:K,d(a){a&&_(e),o=!1,s()}}}function pt(i){let e,l,t,o,s,a;function r(d,n){return d[1]!=""?kt:vt}let f=r(i),m=f(i);return s=new ut({props:{mode:"dark"}}),{c(){e=D("h3"),l=X(i[0]),t=B(),m.c(),o=B(),Z(s.$$.fragment)},l(d){e=I(d,"H3",{});var n=L(e);l=j(n,i[0]),n.forEach(_),t=N(d),m.l(d),o=N(d),x(s.$$.fragment,d)},m(d,n){C(d,e,n),S(e,l),C(d,t,n),m.m(d,n),C(d,o,n),$(s,d,n),a=!0},p(d,n){(!a||n&1)&&fe(l,d[0]),f===(f=r(d))&&m?m.p(d,n):(m.d(1),m=f(d),m&&(m.c(),m.m(o.parentNode,o)))},i(d){a||(E(s.$$.fragment,d),a=!0)},o(d){R(s.$$.fragment,d),a=!1},d(d){d&&_(e),d&&_(t),m.d(d),d&&_(o),ee(s,d)}}}function Et(i){let e,l;return e=new yl({props:{$$slots:{trail:[pt],default:[bt],lead:[dt]},$$scope:{ctx:i}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){$(e,t,o),l=!0},p(t,[o]){const s={};o&47&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Lt(i,e,l){let t,o,s,a;se(i,me,f=>l(0,t=f)),se(i,ge,f=>l(1,o=f)),se(i,Re,f=>l(2,s=f)),se(i,Te,f=>l(3,a=f)),ol(async()=>{ge.useLocalStorage(),Re.useLocalStorage(),me.useLocalStorage(),Te.useLocalStorage()});function r(){ge.set(""),me.set("")}return[t,o,s,a,r]}class St extends ie{constructor(e){super(),re(this,e,Lt,Et,le,{})}}const ce=[{id:"settings",title:"Settings",list:[{href:"/settings",label:"Settings",keywords:""}]},{id:"compare",title:"Compare",list:[{href:"/compare_datasets",label:"Datasets",keywords:""}]},{id:"check",title:"Check",list:[{href:"/check_dq",label:"Check Data Quality",keywords:""}]}];function $e(i,e,l){const t=i.slice();return t[10]=e[l].id,t[11]=e[l].title,t[12]=e[l].list,t[14]=l,t}function el(i,e,l){const t=i.slice();return t[15]=e[l].href,t[16]=e[l].label,t[17]=e[l].badge,t}function Dt(i){let e;return{c(){e=D("i"),this.h()},l(l){e=I(l,"I",{class:!0}),L(e).forEach(_),this.h()},h(){h(e,"class","fa-solid fa-screwdriver-wrench text-2xl")},m(l,t){C(l,e,t)},p:K,d(l){l&&_(e)}}}function It(i){let e;return{c(){e=D("i"),this.h()},l(l){e=I(l,"I",{class:!0}),L(e).forEach(_),this.h()},h(){h(e,"class","fa-solid fa-code-compare text-2xl")},m(l,t){C(l,e,t)},p:K,d(l){l&&_(e)}}}function Ht(i){let e;return{c(){e=D("i"),this.h()},l(l){e=I(l,"I",{class:!0}),L(e).forEach(_),this.h()},h(){h(e,"class","fa-solid fa-list-check text-2xl")},m(l,t){C(l,e,t)},p:K,d(l){l&&_(e)}}}function Ct(i){let e,l,t,o,s,a;return e=new ve({props:{label:"Settings",title:"Tile",value:"settings",$$slots:{default:[Dt]},$$scope:{ctx:i}}}),e.$on("click",i[3]),t=new ve({props:{label:"Compare",title:"Tile",value:"compare",$$slots:{default:[It]},$$scope:{ctx:i}}}),t.$on("click",i[3]),s=new ve({props:{label:"check",title:"Tile",value:"check",$$slots:{default:[Ht]},$$scope:{ctx:i}}}),s.$on("click",i[3]),{c(){Z(e.$$.fragment),l=B(),Z(t.$$.fragment),o=B(),Z(s.$$.fragment)},l(r){x(e.$$.fragment,r),l=N(r),x(t.$$.fragment,r),o=N(r),x(s.$$.fragment,r)},m(r,f){$(e,r,f),C(r,l,f),$(t,r,f),C(r,o,f),$(s,r,f),a=!0},p(r,f){const m={};f&1048576&&(m.$$scope={dirty:f,ctx:r}),e.$set(m);const d={};f&1048576&&(d.$$scope={dirty:f,ctx:r}),t.$set(d);const n={};f&1048576&&(n.$$scope={dirty:f,ctx:r}),s.$set(n)},i(r){a||(E(e.$$.fragment,r),E(t.$$.fragment,r),E(s.$$.fragment,r),a=!0)},o(r){R(e.$$.fragment,r),R(t.$$.fragment,r),R(s.$$.fragment,r),a=!1},d(r){ee(e,r),r&&_(l),ee(t,r),r&&_(o),ee(s,r)}}}function ll(i){let e,l=i[11]+"",t,o,s,a,r,f,m,d=i[12],n=[];for(let u=0;u<d.length;u+=1)n[u]=sl(el(i,d,u));let v=i[14]+1<i[0].length&&al();return{c(){e=D("div"),t=X(l),s=B(),a=D("nav"),r=D("ul");for(let u=0;u<n.length;u+=1)n[u].c();f=B(),v&&v.c(),m=ae(),this.h()},l(u){e=I(u,"DIV",{id:!0,class:!0});var k=L(e);t=j(k,l),k.forEach(_),s=N(u),a=I(u,"NAV",{class:!0});var c=L(a);r=I(c,"UL",{});var b=L(r);for(let g=0;g<n.length;g+=1)n[g].l(b);b.forEach(_),c.forEach(_),f=N(u),v&&v.l(u),m=ae(),this.h()},h(){h(e,"id",o=i[10]),h(e,"class","text-primary-700 dark:text-primary-500 font-bold uppercase px-4"),h(a,"class","list-nav")},m(u,k){C(u,e,k),S(e,t),C(u,s,k),C(u,a,k),S(a,r);for(let c=0;c<n.length;c+=1)n[c].m(r,null);C(u,f,k),v&&v.m(u,k),C(u,m,k)},p(u,k){if(k&1&&l!==(l=u[11]+"")&&fe(t,l),k&1&&o!==(o=u[10])&&h(e,"id",o),k&11){d=u[12];let c;for(c=0;c<d.length;c+=1){const b=el(u,d,c);n[c]?n[c].p(b,k):(n[c]=sl(b),n[c].c(),n[c].m(r,null))}for(;c<n.length;c+=1)n[c].d(1);n.length=d.length}u[14]+1<u[0].length?v||(v=al(),v.c(),v.m(m.parentNode,m)):v&&(v.d(1),v=null)},d(u){u&&_(e),u&&_(s),u&&_(a),fl(n,u),u&&_(f),v&&v.d(u),u&&_(m)}}}function tl(i){let e,l=i[17]+"",t;return{c(){e=D("span"),t=X(l),this.h()},l(o){e=I(o,"SPAN",{class:!0});var s=L(e);t=j(s,l),s.forEach(_),this.h()},h(){h(e,"class","badge variant-filled-secondary")},m(o,s){C(o,e,s),S(e,t)},p(o,s){s&1&&l!==(l=o[17]+"")&&fe(t,l)},d(o){o&&_(e)}}}function sl(i){let e,l,t,o=i[16]+"",s,a,r,f,m,d,n=i[17]&&tl(i);return{c(){e=D("li"),l=D("a"),t=D("span"),s=B(),n&&n.c(),f=B(),this.h()},l(v){e=I(v,"LI",{});var u=L(e);l=I(u,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var k=L(l);t=I(k,"SPAN",{class:!0});var c=L(t);c.forEach(_),s=N(k),n&&n.l(k),k.forEach(_),f=N(u),u.forEach(_),this.h()},h(){h(t,"class","flex-auto"),h(l,"href",a=i[15]),h(l,"class",r=i[1](i[15])),h(l,"data-sveltekit-preload-data","hover")},m(v,u){C(v,e,u),S(e,l),S(l,t),t.innerHTML=o,S(l,s),n&&n.m(l,null),S(e,f),m||(d=[Q(e,"click",i[3]),Q(e,"keypress",i[6])],m=!0)},p(v,u){u&1&&o!==(o=v[16]+"")&&(t.innerHTML=o),v[17]?n?n.p(v,u):(n=tl(v),n.c(),n.m(l,null)):n&&(n.d(1),n=null),u&1&&a!==(a=v[15])&&h(l,"href",a),u&3&&r!==(r=v[1](v[15]))&&h(l,"class",r)},d(v){v&&_(e),n&&n.d(),m=!1,Le(d)}}}function al(i){let e;return{c(){e=D("hr"),this.h()},l(l){e=I(l,"HR",{class:!0}),this.h()},h(){h(e,"class","!my-6 opacity-50")},m(l,t){C(l,e,t)},d(l){l&&_(e)}}}function il(i){let e,l=i[12].length>0&&ll(i);return{c(){l&&l.c(),e=ae()},l(t){l&&l.l(t),e=ae()},m(t,o){l&&l.m(t,o),C(t,e,o)},p(t,o){t[12].length>0?l?l.p(t,o):(l=ll(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},d(t){l&&l.d(t),t&&_(e)}}}function Rt(i){let e,l,t,o,s;l=new Nl({props:{selected:i[2],background:"bg-transparent",border:"border-r border-surface-500/30",width:"w-[70px]",$$slots:{lead:[Ct]},$$scope:{ctx:i}}});let a=i[0],r=[];for(let f=0;f<a.length;f+=1)r[f]=il($e(i,a,f));return{c(){e=D("div"),Z(l.$$.fragment),t=B(),o=D("section");for(let f=0;f<r.length;f+=1)r[f].c();this.h()},l(f){e=I(f,"DIV",{class:!0});var m=L(e);x(l.$$.fragment,m),t=N(m),o=I(m,"SECTION",{class:!0});var d=L(o);for(let n=0;n<r.length;n+=1)r[n].l(d);d.forEach(_),m.forEach(_),this.h()},h(){h(o,"class","p-4 pb-20 space-y-4 overflow-y-auto"),h(e,"class","grid grid-cols-[auto_1fr] h-full bg-surface-50-900-token border-r border-surface-500/30 hidden lg:grid w-[360px] overflow-hidden ")},m(f,m){C(f,e,m),$(l,e,null),S(e,t),S(e,o);for(let d=0;d<r.length;d+=1)r[d].m(o,null);s=!0},p(f,[m]){const d={};if(m&1048576&&(d.$$scope={dirty:m,ctx:f}),l.$set(d),m&11){a=f[0];let n;for(n=0;n<a.length;n+=1){const v=$e(f,a,n);r[n]?r[n].p(v,m):(r[n]=il(v),r[n].c(),r[n].m(o,null))}for(;n<r.length;n+=1)r[n].d(1);r.length=a.length}},i(f){s||(E(l.$$.fragment,f),s=!0)},o(f){R(l.$$.fragment,f),s=!1},d(f){f&&_(e),ee(l),fl(r,f)}}}function Tt(i,e,l){let t,o,s;se(i,bl,v=>l(5,o=v));let{embedded:a=!1}=e;const r=Se("compare");se(i,r,v=>l(7,s=v));let f=ce;function m(){a&&pl.close()}function d(v){switch(r.set(v),s){case"compare":l(0,f=ce.filter(u=>u.id==="compare"));break;case"check":l(0,f=ce.filter(u=>u.id==="check"));break;case"settings":l(0,f=ce.filter(u=>u.id==="settings"));break}}vl.subscribe(v=>{let u=v.url.pathname.split("/")[1];u&&(["components","actions"].includes(u)&&(u="svelte"),d(u))}),r.subscribe(v=>d(v));function n(v){oe.call(this,i,v)}return i.$$set=v=>{"embedded"in v&&l(4,a=v.embedded)},i.$$.update=()=>{i.$$.dirty&32&&l(1,t=v=>o!=null&&o.includes(v)?"bg-primary-active-token":"")},[f,t,r,m,a,o,n]}class Pt extends ie{constructor(e){super(),re(this,e,Tt,Rt,le,{embedded:4})}}function wt(i){let e;const l=i[0].default,t=O(l,i,i[1],null);return{c(){t&&t.c()},l(o){t&&t.l(o)},m(o,s){t&&t.m(o,s),e=!0},p(o,s){t&&t.p&&(!e||s&2)&&z(t,l,o,o[1],e?q(l,o[1],s,null):U(o[1]),null)},i(o){e||(E(t,o),e=!0)},o(o){R(t,o),e=!1},d(o){t&&t.d(o)}}}function yt(i){let e,l;return e=new St({}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){$(e,t,o),l=!0},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Vt(i){let e,l;return e=new Pt({}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){$(e,t,o),l=!0},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function At(i){let e,l;return e=new st({props:{slotSidebarLeft:"flex-none overflow-x-hidden overflow-y-auto bg-surface-50-900-token lg:w-auto",$$slots:{sidebarLeft:[Vt],header:[yt],default:[wt]},$$scope:{ctx:i}}}),{c(){Z(e.$$.fragment)},l(t){x(e.$$.fragment,t)},m(t,o){$(e,t,o),l=!0},p(t,[o]){const s={};o&2&&(s.$$scope={dirty:o,ctx:t}),e.$set(s)},i(t){l||(E(e.$$.fragment,t),l=!0)},o(t){R(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function Mt(i,e,l){let{$$slots:t={},$$scope:o}=e;return i.$$set=s=>{"$$scope"in s&&l(1,o=s.$$scope)},[t,o]}class qt extends ie{constructor(e){super(),re(this,e,Mt,At,le,{})}}export{qt as default};
