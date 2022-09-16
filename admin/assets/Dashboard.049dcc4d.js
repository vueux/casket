import{_ as f,o as s,c as n,F as m,r as _,a,e as c,d,t as h,n as x,p as $,f as w,w as S,g as C,h as k,i as N,j as z,k as g}from"./index.82740976.js";import"https://cdn.jsdelivr.net/npm/@feathersjs/client@5.0.0-pre.28/+esm";import"https://cdn.jsdelivr.net/npm/socket.io-client@4.5.1/+esm";const B={data:()=>({todo:[{label:"Services",path:"/admin/services"},{label:"Domains",path:"/admin/domains"},{label:"Nosql databases",path:"/admin/nosql-databases"},{label:"Sql databases",path:"/admin/sql-databases"}],pages:[{label:"Types",path:"/admin/types"},{label:"Users",path:"/admin/users"},{label:"Settings",path:"/admin/settings"},{label:"Server",path:"/admin/server"}],types:[]}),computed:{current(){return this.$route.path}},inject:["io"],methods:{async list(){let t=await this.io.service("types/any").find({query:{$limit:100,$sort:{title:"asc"}}});this.types=t.data}},created(){this.list()},props:{renderkey:{type:Number,default:42}},watch:{renderkey(){console.log("to the edge"),this.list()}}},b=t=>($("data-v-65324c4f"),t=t(),w(),t),D={style:{height:"100%",width:"160px","font-family":"Arial, Helvetica, sans-serif",background:"linear-gradient(215deg, rgba(58,66,64,1) 0%, rgba(33,33,33,1) 100%)","background-color":"rgb(58,66,64)"}},I=["onClick"],T={key:0,style:{"background-color":"#edebebff",width:"10px",position:"absolute",right:"0px","clip-path":"polygon(100% 0%, 100% 100%, 0% 50%)",top:"9px",height:"20px"}},q=d(),V=b(()=>a("div",null,null,-1)),U=b(()=>a("hr",null,null,-1)),j=["onClick"],A={key:0,style:{"background-color":"#edebebff",width:"10px",position:"absolute",right:"0px","clip-path":"polygon(100% 0%, 100% 100%, 0% 50%)",top:"9px",height:"20px"}},L=d(),F=b(()=>a("div",null,null,-1));function H(t,e,u,v,y,i){return s(),n("div",D,[(s(!0),n(m,null,_(t.pages,o=>(s(),n("div",null,[a("div",{style:{"box-sizing":"border-box","padding-left":"10px","padding-right":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"15px",position:"relative"},class:x(["menu-button",o.path===i.current?"active":""]),onClick:l=>t.$router.push(o.path)},[o.path===i.current?(s(),n("div",T)):c("",!0),d(" "+h(o.label),1)],10,I),q,V]))),256)),U,(s(!0),n(m,null,_(t.types,o=>(s(),n("div",null,[a("div",{style:{"box-sizing":"border-box","padding-left":"10px","padding-right":"10px","padding-top":"10px","padding-bottom":"10px","font-size":"15px",position:"relative"},class:x(["menu-button","/admin/types/"+o.slug===i.current?"active":""]),onClick:l=>t.$router.push("/admin/types/"+o.slug)},["/admin/types/"+o.slug===i.current?(s(),n("div",A)):c("",!0),d(" "+h(o.title.en),1)],10,j),L,F]))),256))])}const E=f(B,[["render",H],["__scopeId","data-v-65324c4f"]]);const M={data:()=>({domains:[],current:""}),inject:["io","user","userUpdate"],methods:{async logout(){await this.io.logout(),this.userUpdate(null),this.$router.push("/")},async getDomains(){var t,e;this.domains=await this.io.service("types/domains").find().catch(u=>{this.domains={data:[{match:location.host}]}}),(e=(t=this.domains)==null?void 0:t.data)!=null&&e.length&&(this.current=this.domains.data[0].match)},open(){window.open("https://"+this.current,"_blank")}},created(){this.getDomains()}},G=t=>($("data-v-51678675"),t=t(),w(),t),J={style:{height:"30px",display:"flex",color:"#e6e6e6ff","font-family":"Arial, Helvetica, sans-serif",background:"linear-gradient(45deg, rgba(58,66,64,1) 0%, rgba(48,52,51,1) 100%)","background-color":"rgb(58,66,64)"}},K={style:{"padding-left":"10px",width:"calc(100% - 350px)","font-weight":"bold","margin-top":"4px"}},O=G(()=>a("div",{style:{display:"inline-block","margin-top":"1px",color:"#ffffffff"}}," Airportal ",-1)),P=d(),Q=["value"],R={style:{flex:"1"}},W=d();function X(t,e,u,v,y,i){var o,l,p;return s(),n("div",J,[a("div",K,[O,P,S(a("select",{name:"",style:{width:"200px","padding-top":"1px","padding-bottom":"1px","margin-left":"7px","border-top-left-radius":"3px","border-top-right-radius":"3px","border-bottom-left-radius":"3px","border-bottom-right-radius":"3px"},onChange:e[0]||(e[0]=r=>i.open()),"onUpdate:modelValue":e[1]||(e[1]=r=>t.current=r)},[(s(!0),n(m,null,_((o=t.domains)==null?void 0:o.data,r=>(s(),n("option",{value:r.match},h(r.match),9,Q))),256))],544),[[C,t.current]])]),a("div",R,[a("div",{style:{"text-align":"right","font-size":"14px","padding-top":"7px","padding-bottom":"7px","padding-right":"7px",display:"inline-block",float:"right"},class:"link",onClick:e[2]||(e[2]=(...r)=>i.logout&&i.logout(...r))}," Log out "),W,a("div",{style:{"text-align":"right","font-size":"14px","padding-top":"7px","padding-bottom":"7px","padding-right":"7px",display:"inline-block",float:"right"},onClick:e[3]||(e[3]=r=>t.$router.push("/admin/profile")),class:"link"},h((p=(l=i.user)==null?void 0:l.value)==null?void 0:p.email)+" - ",1)])])}const Y=f(M,[["render",X],["__scopeId","data-v-51678675"]]);const Z={components:{Navigation:E,TopBar:Y},props:["min"],computed:{minimal(){return this.min||!1},rerender(){return this.renderkey}},data:()=>({renderkey:1}),methods:{refresh(){this.renderkey=this.renderkey+1,this.$emit("list")}},emits:["list"]},tt={style:{height:"100%",width:"100%"}},et=d(),it={style:{width:"100%",height:"100%",overflow:"auto",position:"relative",flex:"1"}};function ot(t,e,u,v,y,i){const o=g("TopBar"),l=g("Navigation"),p=g("router-view");return s(),n("div",tt,[i.minimal?c("",!0):(s(),k(o,{key:0,style:{width:"100%"}})),a("div",{style:z([{display:"flex"},i.minimal?"height:100%":"height:calc(100% - 30px)"])},[i.minimal?c("",!0):(s(),k(l,{key:0,path:"/admin/services",renderkey:i.minimal?"":t.renderkey},null,8,["renderkey"])),et,a("div",it,[N(p,{style:{width:"100%",height:"100%",overflow:"auto","background-color":"#edebebff",position:"absolute"},min:!0,onList:e[0]||(e[0]=r=>i.refresh())})])],4)])}const rt=f(Z,[["render",ot]]);export{rt as default};
