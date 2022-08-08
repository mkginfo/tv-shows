import{s as f,_ as p,o as n,c as a,a as e,t as i,F as N,n as b,l as d,q as m,x as $}from"./index.f83205e0.js";import{I as g}from"./Image.12963222.js";import"./default-image.7538c0a6.js";const y=f({components:{Image:g},props:{seasonNumber:{type:[Number,String]},episodesList:{type:Array}}}),w={class:"pl-4 pr-4 pt-2"},v={class:"text-secondary"},S={class:"row"},E=["href"],L={class:"text-center"};function x(s,r,_,h,o,l){const c=m("Image");return n(),a("div",w,[e("h3",v,"Season "+i(s.seasonNumber)+" episodes",1),e("div",S,[(n(!0),a(N,null,b(s.episodesList,(t,u)=>(n(),a("div",{class:"col-md-2 col-6 mt-4",key:u},[e("a",{href:t.url},[d(c,{"show-image":t.image},null,8,["show-image"])],8,E),e("div",L,i(t.number)+" "+i(t.name),1)]))),128))])])}const B=p(y,[["render",x]]),I={components:{Episodes:B},data(){return{showName:"",seasonNumber:"",episodesList:[]}},methods:{getShowName(){this.showName=this.episodesList[0].name},episodesBySeason(s){this.seasonNumber=parseInt(this.$route.params.seasonNumber),this.episodesList=s.filter(r=>r.season===this.seasonNumber)}},async created(){const s=await $(this.$route.params.id);this.episodesBySeason(s)}},k={class:"tv-shows-episodes-content"},C={class:"container pt-4"},F={class:"text-secondary"};function V(s,r,_,h,o,l){const c=m("Episodes");return n(),a("div",k,[e("div",C,[e("h3",F,"Season "+i(o.seasonNumber)+" episodes",1),d(c,{"season-number":o.seasonNumber,"episodes-list":o.episodesList},null,8,["season-number","episodes-list"])])])}const j=p(I,[["render",V]]);export{j as default};