import{w as S}from"./index.4237fa95.js";import{af as h}from"./index.551e22bc.js";const _={};function b(t){return t==="local"?localStorage:sessionStorage}function d(t,i,e){const a=(e==null?void 0:e.serializer)??JSON,c=(e==null?void 0:e.storage)??"local",o=typeof window<"u"&&typeof document<"u";function u(l,g){o&&b(c).setItem(l,a.stringify(g))}if(!_[t]){const l=S(i,s=>{const n=o?b(c).getItem(t):null;if(n&&s(a.parse(n)),o){const w=f=>{f.key===t&&s(f.newValue?a.parse(f.newValue):null)};return window.addEventListener("storage",w),()=>window.removeEventListener("storage",w)}}),{subscribe:g,set:m}=l;_[t]={set(s){u(t,s),m(s)},update(s){const n=s(h(l));u(t,n),m(n)},subscribe:g}}return _[t]}const L=d("storePrefersDarkScheme",!1),I=d("storeLightSwitch",void 0);const r=(t,i)=>{const{subscribe:e,set:a,update:c}=S(i);return{subscribe:e,set:a,update:c,useLocalStorage:()=>{const o=localStorage.getItem(t);o&&a(JSON.parse(o)),e(u=>{localStorage.setItem(t,JSON.stringify(u))})}}},J=r("datasets_result",[]),N=r("structured_datasets",[]),O=r("table_content",[]),P=r("token",""),j=r("username",""),z=r("url",""),D=r("api_version",""),E=S(),V=d("structured_datasets_date",""),x=d("datasets_result_date","");export{L as a,z as b,D as c,E as d,N as e,V as f,J as g,x as h,O as i,I as s,P as t,j as u};