const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./tqP42oHa.js","./CCmcE4Pf.js","./entry.BIyxxRNv.css","./C-v3KzvZ.js","./DNwEmkJX.js"])))=>i.map(i=>d[i]);
import{E as L,J as m,v as D,K as j,G as q,L as I,M,i as Q,N as O,O as F,u as K,C as N,P as V,Q as H,k as g,R as U,S as z,T as G,D as k}from"./CCmcE4Pf.js";import{u as B,h as $}from"./DNwEmkJX.js";const A=e=>e==="defer"||e===!1;function se(...e){var E;const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);let[r,i,n={}]=e;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const s=L(),a=i,u=()=>m.value,f=()=>s.isHydrating?s.payload.data[r]:s.static.data[r];n.server=n.server??!0,n.default=n.default??u,n.getCachedData=n.getCachedData??f,n.lazy=n.lazy??!1,n.immediate=n.immediate??!0,n.deep=n.deep??m.deep,n.dedupe=n.dedupe??"cancel";const y=n.getCachedData(r,s),w=y!=null;if(!s._asyncData[r]||!n.immediate){(E=s.payload._errors)[r]??(E[r]=m.errorValue);const l=n.deep?D:j;s._asyncData[r]={data:l(w?y:n.default()),pending:D(!w),error:q(s.payload._errors,r),status:D("idle"),_default:n.default}}const o={...s._asyncData[r]};delete o._default,o.refresh=o.execute=(l={})=>{if(s._asyncDataPromises[r]){if(A(l.dedupe??n.dedupe))return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if(l._initial||s.isHydrating&&l._initial!==!1){const d=l._initial?y:n.getCachedData(r,s);if(d!=null)return Promise.resolve(d)}o.pending.value=!0,o.status.value="pending";const p=new Promise((d,c)=>{try{d(a(s))}catch(_){c(_)}}).then(async d=>{if(p.cancelled)return s._asyncDataPromises[r];let c=d;n.transform&&(c=await n.transform(d)),n.pick&&(c=W(c,n.pick)),s.payload.data[r]=c,o.data.value=c,o.error.value=m.errorValue,o.status.value="success"}).catch(d=>{if(p.cancelled)return s._asyncDataPromises[r];o.error.value=F(d),o.data.value=K(n.default()),o.status.value="error"}).finally(()=>{p.cancelled||(o.pending.value=!1,delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=p,s._asyncDataPromises[r]},o.clear=()=>J(s,r);const P=()=>o.refresh({_initial:!0}),C=n.server!==!1&&s.payload.serverRendered;{const l=N();if(l&&C&&n.immediate&&!l.sp&&(l.sp=[]),l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const c=l._nuxtOnBeforeMountCbs;I(()=>{c.forEach(_=>{_()}),c.splice(0,c.length)}),M(()=>c.splice(0,c.length))}C&&s.isHydrating&&(o.error.value||y!=null)?(o.pending.value=!1,o.status.value=o.error.value?"error":"success"):l&&(s.payload.serverRendered&&s.isHydrating||n.lazy)&&n.immediate?l._nuxtOnBeforeMountCbs.push(P):n.immediate&&P();const p=V();if(n.watch){const c=Q(n.watch,()=>o.refresh());p&&O(c)}const d=s.hook("app:data:refresh",async c=>{(!c||c.includes(r))&&await o.refresh()});p&&O(d)}const b=Promise.resolve(s._asyncDataPromises[r]).then(()=>o);return Object.assign(b,o),b}function J(e,t){t in e.payload.data&&(e.payload.data[t]=void 0),t in e.payload._errors&&(e.payload._errors[t]=m.errorValue),e._asyncData[t]&&(e._asyncData[t].data.value=void 0,e._asyncData[t].error.value=m.errorValue,e._asyncData[t].pending.value=!1,e._asyncData[t].status.value="idle"),t in e._asyncDataPromises&&(e._asyncDataPromises[t]&&(e._asyncDataPromises[t].cancelled=!0),e._asyncDataPromises[t]=void 0)}function W(e,t){const r={};for(const i of t)r[i]=e[i];return r}const S=(e,t)=>t.split(".").reduce((r,i)=>r&&r[i],e),v=(e,t)=>Object.keys(e).filter(t).reduce((r,i)=>Object.assign(r,{[i]:e[i]}),{}),ie=e=>t=>e&&e.length?v(t,r=>!e.includes(r)):t,oe=e=>t=>Array.isArray(t)?t.map(r=>e(r)):e(t),T=e=>{const t=[],r=[];for(const i of e)["$","_"].includes(i)?t.push(i):r.push(i);return{prefixes:t,properties:r}},ce=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=T(e);return v(t,n=>!i.includes(n)&&!r.includes(n[0]))},ue=(e=[])=>t=>{if(e.length===0||!t)return t;const{prefixes:r,properties:i}=T(e);return v(t,n=>i.includes(n)||r.includes(n[0]))},le=(e,t)=>{const r=new Intl.Collator(t.$locale,{numeric:t.$numeric,caseFirst:t.$caseFirst,sensitivity:t.$sensitivity}),i=Object.keys(t).filter(n=>!n.startsWith("$"));for(const n of i)e=e.sort((s,a)=>{const u=[S(s,n),S(a,n)].map(f=>{if(f!==null)return f instanceof Date?f.toISOString():f});return t[n]===-1&&u.reverse(),r.compare(u[0],u[1])});return e},fe=(e,t="Expected an array")=>{if(!Array.isArray(e))throw new TypeError(t)},h=e=>Array.isArray(e)?e:[void 0,null].includes(e)?[]:[e],X=["sort","where","only","without"];function Y(e,t={}){const r={};for(const a of Object.keys(t.initialParams||{}))r[a]=X.includes(a)?h(t.initialParams[a]):t.initialParams[a];const i=(a,u=f=>f)=>(...f)=>(r[a]=u(...f),s),n=a=>{var u;return t.legacy?a!=null&&a.surround?a.surround:a&&(a!=null&&a.dirConfig&&(a.result={_path:(u=a.dirConfig)==null?void 0:u._path,...a.result,_dir:a.dirConfig}),a!=null&&a._path||Array.isArray(a)||!Object.prototype.hasOwnProperty.call(a,"result")?a:a==null?void 0:a.result):a},s={params:()=>({...r,...r.where?{where:[...h(r.where)]}:{},...r.sort?{sort:[...h(r.sort)]}:{}}),only:i("only",h),without:i("without",h),where:i("where",a=>[...h(r.where),...h(a)]),sort:i("sort",a=>[...h(r.sort),...h(a)]),limit:i("limit",a=>parseInt(String(a),10)),skip:i("skip",a=>parseInt(String(a),10)),find:()=>e(s).then(n),findOne:()=>e(i("first")(!0)).then(n),count:()=>e(i("count")(!0)).then(n),locale:a=>s.where({_locale:a}),withSurround:i("surround",(a,u)=>({query:a,...u})),withDirConfig:()=>i("dirConfig")(!0)};return t.legacy&&(s.findSurround=(a,u)=>s.withSurround(a,u).find().then(n)),s}function x(e){return JSON.stringify(e,Z)}function Z(e,t){return t instanceof RegExp?`--REGEX ${t.toString()}`:t}const ee=e=>{let t=x(e);return t=typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t),t=t.replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""),(t.match(/.{1,100}/g)||[]).join("/")},R=e=>H(e,g().public.content.api.baseURL),de=()=>{throw console.warn("useContent is only accessible when you are using `documentDriven` mode."),console.warn("Learn more by visiting: https://content.nuxt.com/document-driven"),new Error("useContent is only accessible when you are using `documentDriven` mode.")},te=()=>{const{experimental:e}=g().public.content;return e.clientDB?!0:B().isEnabled()},re=()=>async e=>{const{content:t}=g().public,r=e.params(),i=t.experimental.stripQueryParameters?R(`/query/${`${$(r)}.${t.integrity}`}/${ee(r)}.json`):R(`/query/${$(r)}.${t.integrity}.json`);if(te())return(await k(()=>import("./tqP42oHa.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(a=>a.useContentDatabase())).fetch(e);const n=await $fetch(i,{method:"GET",responseType:"json",params:t.experimental.stripQueryParameters?void 0:{_params:x(r),previewToken:B().getPreviewToken()}});if(typeof n=="string"&&n.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return n};function he(e,...t){const{content:r}=g().public,i=Y(re(),{initialParams:typeof e!="string"?e:{},legacy:!0});let n;typeof e=="string"&&(n=U(z(e,...t)));const s=i.params;return i.params=()=>{var u,f,y;const a=s();return n&&(a.where=a.where||[],a.first&&(a.where||[]).length===0?a.where.push({_path:G(n)}):a.where.push({_path:new RegExp(`^${n.replace(/[-[\]{}()*+.,^$\s/]/g,"\\$&")}`)})),(u=a.sort)!=null&&u.length||(a.sort=[{_stem:1,$numeric:!0}]),r.locales.length&&((y=(f=a.where)==null?void 0:f.find(o=>o._locale))!=null&&y._locale||(a.where=a.where||[],a.where.push({_locale:r.defaultLocale}))),a},i}export{de as a,fe as b,h as c,le as d,ee as e,oe as f,S as g,ce as h,ue as i,x as j,Y as k,ie as o,he as q,te as s,se as u,R as w};
