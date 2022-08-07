import{_ as u,o as t,c as a,a as o,t as l,u as S,b as s,d as b,e as x,f as B,g as C,h as d,i,F as D,j as L,k as V,w as $,H as I,l as G,r as H,L as N}from"./index.12bbdbfc.js";const M={class:"cast-card"},T=["src"],F={class:"cast-card__name"},R={__name:"CastCard",props:{name:{type:String,required:!0},image:{type:String,default:"@/assets/images/default_person.png"}},setup(r){return(c,e)=>(t(),a("div",M,[o("img",{src:r.image,alt:"",class:"cast-card__image"},null,8,T),o("span",F,l(r.name),1)]))}},j=u(R,[["__scopeId","data-v-bcf91ab4"]]);const q={__name:"GoBackButton",setup(r){const c=S();return(e,n)=>(t(),a("button",{class:"go-back-button",onClick:n[0]||(n[0]=k=>s(c).go(-1))}," \u{1F448} Go back to home "))}},z=u(q,[["__scopeId","data-v-aed2b066"]]);const E={class:"details-page"},U={class:"info"},A=["src"],J={key:1,src:G,class:"info__image",alt:"Show Image"},K={class:"info__description"},O={class:"title"},P={key:0},Q={class:"seasons"},W=["innerHTML"],X={__name:"ShowDetailsView",setup(r){const c=b(),e=x();return B(()=>{var n;(n=c.params)!=null&&n.id&&e.fetchShowDetails(c.params.id)}),C(()=>{e.removeShowDetails()}),(n,k)=>{var h,m,p,f,g,w;return t(),a("div",E,[s(e).areDetailsLoading?(t(),d(N,{key:0})):i("",!0),s(e).showDetails&&!s(e).areDetailsLoading?(t(),a(D,{key:1},[L(z,{class:"back-cta"}),o("div",U,[(h=s(e).showDetails.info)!=null&&h.image?(t(),a("img",{key:0,class:"info__image",src:(m=s(e).showDetails.info)==null?void 0:m.image,alt:"Show Image"},null,8,A)):(p=s(e).showDetails.info)!=null&&p.image?i("",!0):(t(),a("img",J)),o("div",K,[o("h1",O,[V(l((f=s(e).showDetails.info)==null?void 0:f.name)+" ",1),s(e).showDetails.info.average?(t(),a("span",P,"(\u2B50 "+l(s(e).showDetails.info.average)+")",1)):i("",!0)]),o("h4",Q,l((g=s(e).showDetails.seasons)==null?void 0:g.length)+" Seasons ",1),o("p",{innerHTML:(w=s(e).showDetails.info)==null?void 0:w.summary},null,8,W)])]),s(e).showDetails.cast.length?(t(),d(I,{key:0,name:"Cast",class:"cast"},{default:$(()=>[(t(!0),a(D,null,H(s(e).showDetails.cast,({person:{id:v,name:y,image:_}})=>(t(),d(j,{key:v,name:y,image:(_==null?void 0:_.original)||(_==null?void 0:_.medium)},null,8,["name","image"]))),128))]),_:1})):i("",!0)],64)):i("",!0)])}}},Z=u(X,[["__scopeId","data-v-e78ce9fe"]]);export{Z as default};