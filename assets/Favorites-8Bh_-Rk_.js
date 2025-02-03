import{_ as p,c as _,o as n,a as i,b as t,e as l,w as d,F as u,r as f,g as m,d as g,f as h,u as y,h as F,t as o}from"./index-L-CucUNZ.js";const x={name:"Favorites",setup(){const c=y(),e=a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"});return{favorites:_(()=>c.state.favorites),toggleFavorite:a=>c.dispatch("toggleFavorite",a),formatDate:e}}},k={class:"favorites-page"},b={class:"favorites-container"},C={class:"fact-header"},D=["title"],N=["onClick"],S={class:"fact-title"},V={class:"fact-content"},w={class:"fact-footer"},B={class:"source"},E={class:"date"},L={key:0,class:"empty-state"};function T(c,e,a,r,G,I){const v=F("router-link");return n(),i("div",k,[e[4]||(e[4]=t("header",{class:"page-header"},[t("h1",{class:"gradient-text"},"Favorite Facts"),t("p",{class:"subtitle"},"Your personal collection of fascinating scientific discoveries")],-1)),t("div",b,[l(m,{name:"fact-list",tag:"div",class:"favorites-grid"},{default:d(()=>[(n(!0),i(u,null,f(r.favorites,s=>(n(),i("div",{key:s.id,class:"fact-card"},[t("div",C,[t("span",{class:"category-tag",title:s.category},o(s.icon),9,D),t("button",{class:"remove-button",onClick:R=>r.toggleFavorite(s),title:"Remove from favorites"}," ★ ",8,N)]),t("h3",S,o(s.title),1),t("p",V,o(s.content),1),t("div",w,[t("span",B,o(s.source),1),t("span",E,o(r.formatDate(s.timestamp)),1)])]))),128))]),_:1}),r.favorites.length?h("",!0):(n(),i("div",L,[e[1]||(e[1]=t("span",{class:"empty-icon"},"🔍",-1)),e[2]||(e[2]=t("h3",null,"No favorites yet",-1)),e[3]||(e[3]=t("p",null,"Start exploring facts and save your favorites!",-1)),l(v,{to:"/",class:"explore-button"},{default:d(()=>e[0]||(e[0]=[g(" Explore Facts ")])),_:1})]))])])}const Y=p(x,[["render",T],["__scopeId","data-v-7ded4c96"]]);export{Y as default};
