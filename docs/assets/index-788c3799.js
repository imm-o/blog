import{r as p,u as i,a as n,j as b,S as y}from"./index-0fb68538.js";import{u as v}from"./useUpdate-777f10f3.js";import{u as x,a as S}from"./apis-61594436.js";import{C}from"./index-8fc361a3.js";import{S as P}from"./index-6020b226.js";import{P as w}from"./index-5cceb3d9.js";import"./media-42ea89b6.js";const U=p.memo(j=>{var m;const[d]=x(),[t,o,{navigate:F}]=v({type:"new",page:0,loading:!0});p.useEffect(()=>{r(t.type,t.page)},[]);function r(e,s){return new Promise(a=>{var l;if(Number(s)<0)return a(!1);const g=e+"_"+s,f=(l=S.themes.replace("$type",e))==null?void 0:l.replace("$var",g);d.get(f,{signal:"theme"}).then(N=>{o({themes:N.data,loading:!1}),a(!0)})})}const c=i(e=>{const s=[];let a=0;for(;a<4;)s.push("#"+e.substring(a*6,a*6+6)),a++;return s}),h=i(e=>{o({loading:!0,page:Number(e)-1}),r(t.type,Number(e)-1)}),u=i(e=>{o({loading:!0,type:e,page:0}),r(e,0)});return n("div",{className:"main",children:b(C,{bodyClassName:"themes-box",headerStyle:{paddingBottom:6},bodyStyle:{paddingBottom:0,paddingTop:0},title:"主题色搭配",children:[n(P,{fontSize:"0.5rem",onChange:u,options:[{label:"New",value:"new"},{label:"Popular",value:"popular"}],className:"themes-segment"}),n(y,{loading:t==null?void 0:t.loading,style:{flex:1},children:n("div",{className:"themes",children:(m=t==null?void 0:t.themes)==null?void 0:m.map(e=>{const s=c(e.code);return n("div",{className:"theme",children:s.map(a=>n("div",{className:"item",style:{background:a,"--color":a},children:n("span",{children:a})},a))},e.code)})})}),n("div",{className:"themes-footer",children:n(w,{total:13,page:Number(t.page)+1,onChange:h})})]})})});export{U as default};