"use strict";(self.webpackChunkbitcoin_lexikon=self.webpackChunkbitcoin_lexikon||[]).push([[2858],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,y=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return n?r.createElement(y,a(a({ref:t},s),{},{components:n})):r.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7737:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(7462),i=n(7294),o=n(3905);function a(){const[e,t]=(0,i.useState)(0),[n,r]=(0,i.useState)(0);let o;return(0,i.useEffect)((()=>{fetch("https://blockchain.info/tobtc?currency=USD&value=1").then((e=>e.json())).then((e=>{t(1e8*e),clearTimeout(o),o=setTimeout((()=>{r(n+1)}),3e4)}))}),[n]),i.createElement("h4",null,"Aktuelle Moskau Zeit: ",e||"lade\u2026")}const c={id:"moskau-zeit",title:"Moskau Zeit"},u=void 0,l={unversionedId:"m/moskau-zeit",id:"m/moskau-zeit",title:"Moskau Zeit",description:"Die Moskau Zeit ist ein Meme in der Bitcoin Community.",source:"@site/docs/m/Moskau_Zeit.mdx",sourceDirName:"m",slug:"/m/moskau-zeit",permalink:"/m/moskau-zeit",draft:!1,tags:[],version:"current",frontMatter:{id:"moskau-zeit",title:"Moskau Zeit"},sidebar:"tutorialSidebar",previous:{title:"Mining",permalink:"/m/mining"},next:{title:"MultiSig",permalink:"/m/multisig"}},s={},p=[],m={toc:p},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Die Moskau Zeit ist ein Meme in der ",(0,o.kt)("a",{parentName:"p",href:"../b/bitcoin"},"Bitcoin")," Community.",(0,o.kt)("br",{parentName:"p"}),"\n","Sie gibt an, wie viele ",(0,o.kt)("a",{parentName:"p",href:"../s/satoshi"},"Satoshis")," man f\xfcr einen US-Dollar erh\xe4lt."),(0,o.kt)(a,{mdxType:"MoscowTime"}))}y.isMDXComponent=!0}}]);