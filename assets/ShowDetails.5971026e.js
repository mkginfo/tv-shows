import{_ as b,o,c as t,a as s,F as u,n as w,l as h,w as g,t as c,q as d,s as I,k as r,O as y,v as z,j as f}from"./index.c9b0b34e.js";import{m as D}from"./maze-image.7670f92f.js";import{_ as k}from"./default-image.7538c0a6.js";const S={components:{mazeImage:D},props:{seasons:{type:Array},showId:{type:[Number,String]}}},x={class:"pt-4"},C=s("h3",null,"Seasons",-1),j={class:"row"},L={class:"text-center"};function M(e,p,l,a,n,v){const _=d("maze-image"),m=d("router-link");return o(),t("div",null,[s("div",x,[C,s("div",j,[(o(!0),t(u,null,w(l.seasons,(i,$)=>(o(),t("div",{class:"col-md-2 col-6 mt-4",key:$},[h(m,{to:{name:"episodes",params:{id:l.showId,seasonNumber:i.number}}},{default:g(()=>[h(_,{"show-image":i.image},null,8,["show-image"]),s("div",L,"Season "+c(i.number),1)]),_:2},1032,["to"])]))),128))])])])}const N=b(S,[["render",M]]),A=I({props:{showInfo:{type:Object}},components:{mazeImage:D},filters:{joinArray:e=>e?e.join(" | "):""}}),B={class:"row"},H={class:"col-md-3"},O={class:"col-md-9"},T={key:0,class:"mb-4 mt-md-0 mt-lg-4"},R={class:"pl-3"},V={key:1,class:"mb-4 mt-md-0 mt-lg-4"},F=s("span",{class:"fw-bold"},"Rating: ",-1),q={class:"pl-3"},E={class:"mb-4"},G=s("span",{class:"fw-bold"},"Runtime: ",-1),J={class:"pl-3"},K={class:"mb-4"},P=s("span",{class:"fw-bold"},"Language: ",-1),Q={class:"pl-3"},U={class:"mb-4"},W=s("span",{class:"fw-bold"},"Release date: ",-1),X={class:"pl-3"},Y={class:"mb-4"},Z=s("span",{class:"fw-bold"},"Genres: ",-1),ss=["index"],es={class:"d-md-none d-xl-block"},os=["innerHTML"],ts={class:"row px-3 d-none d-md-block d-xl-none"},ns=["innerHTML"];function as(e,p,l,a,n,v){const _=d("maze-image");return o(),t("div",null,[s("div",B,[s("div",H,[h(_,{"show-image":e.showInfo.image},null,8,["show-image"])]),s("div",O,[e.showInfo.name?(o(),t("div",T,[s("h1",R,c(e.showInfo.name),1)])):r("",!0),e.showInfo.rating?(o(),t("div",V,[F,s("span",q,c(e.showInfo.rating.average)+" / 10",1)])):r("",!0),s("div",E,[G,s("span",J,c(e.showInfo.runtime)+" Mins",1)]),s("div",K,[P,s("span",Q,c(e.showInfo.language),1)]),s("div",U,[W,s("span",X,c(e.showInfo.premiered),1)]),s("div",Y,[Z,(o(!0),t(u,null,w(e.showInfo.genres,(m,i)=>(o(),t("span",{class:"pl-3 badge text-bg-success p-2 m-1",key:i,index:i},c(m),9,ss))),128))]),s("div",es,[s("p",{class:"text-justify",innerHTML:e.showInfo.summary},null,8,os)])])]),s("div",ts,[s("p",{class:"text-justify",innerHTML:e.showInfo.summary},null,8,ns)])])}const cs=b(A,[["render",as]]),is={key:0,class:"pt-4"},rs={class:"row pt-4 pb-4"},ds=["src"],ls={key:1,src:k,class:"figure-img rounded border-success w-100 mx-auto d-block"},_s={class:"text-center"},ms={key:1,class:"pt-4"},hs={class:"row pt-4 pb-4"},us=["src"],ws={key:1,src:k,class:"figure-img rounded border-success w-100 mx-auto d-block"},ps={class:"text-center"},fs={props:{castData:{type:Array},crewData:{type:Array}}},gs=Object.assign(fs,{__name:"maze-cast-crew",setup(e){return(p,l)=>(o(),t("div",null,[e.castData.length>0?(o(),t("div",is,[s("div",rs,[h(y,{shows:e.castData,name:"Cast"},{default:g(()=>[(o(!0),t(u,null,w(e.castData,(a,n)=>(o(),t("div",{class:"col-md-2 col-4",key:n},[a.person.image?(o(),t("img",{key:0,src:a.person.image.medium,class:"figure-img rounded border-success w-100 mx-auto d-block"},null,8,ds)):(o(),t("img",ls)),s("div",_s,c(a.person.name),1)]))),128))]),_:1},8,["shows"])])])):r("",!0),e.crewData.length>0?(o(),t("div",ms,[s("div",hs,[h(y,{shows:e.crewData,name:"Crew"},{default:g(()=>[(o(!0),t(u,null,w(e.crewData,(a,n)=>(o(),t("div",{class:"col-md-2 col-4",key:n},[a.person.image?(o(),t("img",{key:0,src:a.person.image.medium,class:"figure-img rounded border-success w-100 mx-auto d-block"},null,8,us)):(o(),t("img",ws)),s("div",ps,c(a.type),1)]))),128))]),_:1},8,["shows"])])])):r("",!0)]))}}),bs={components:{mazeSeasons:N,mazeShowInfo:cs,mazeCastCrew:gs},data(){return{showId:"",castData:[],crewData:[],showSeasons:[],showDetails:null}},methods:{async fetchShowDetails(){this.showId=this.$route.params.id,this.showDetails=await z(this.showId),this.showDetails._embedded&&(this.showSeasons=this.showDetails._embedded.seasons,this.castData=this.showDetails._embedded.cast,this.crewData=this.showDetails._embedded.crew)}},created(){this.fetchShowDetails()}},vs={class:"tv-shows-details-content"},ys={class:"container pt-5"},Ds={class:"pl-4 pr-4 pt-5 text-secondary"};function ks(e,p,l,a,n,v){const _=d("maze-showInfo"),m=d("maze-seasons"),i=d("maze-cast-crew");return o(),t("div",vs,[s("div",ys,[s("div",Ds,[n.showDetails?(o(),f(_,{key:0,"show-info":n.showDetails},null,8,["show-info"])):r("",!0),n.showSeasons.length>0?(o(),f(m,{key:1,"show-id":n.showId,seasons:n.showSeasons},null,8,["show-id","seasons"])):r("",!0),n.castData.length>0||n.crewData.length>0?(o(),f(i,{key:2,"cast-data":n.castData,"crew-data":n.crewData},null,8,["cast-data","crew-data"])):r("",!0)])])])}const Ss=b(bs,[["render",ks]]);export{Ss as default};