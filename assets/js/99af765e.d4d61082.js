"use strict";(self.webpackChunkbitcoin_lexikon=self.webpackChunkbitcoin_lexikon||[]).push([[9342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=i,k=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1726:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var r=n(7462),i=n(7294),o=n(3905);function a(){const[e,t]=(0,i.useState)(0),[n,r]=(0,i.useState)(0);let o;return(0,i.useEffect)((()=>{fetch("https://mempool.space/api/blocks/tip/height").then((e=>e.json())).then((e=>{t(e),clearTimeout(o),o=setTimeout((()=>{r(n+1)}),3e4)}))}),[n]),i.createElement("h4",null,"Aktuelle Blockzeit: ",e||"lade\u2026")}const l={id:"blockzeit",title:"Blockzeit"},c=void 0,p={unversionedId:"b/blockzeit",id:"b/blockzeit",title:"Blockzeit",description:"Die Blockzeit ist die aktuelle Anzahl von Bl\xf6cken in der Bitcoin Blockchain.",source:"@site/docs/b/Blockzeit.mdx",sourceDirName:"b",slug:"/b/blockzeit",permalink:"/b/blockzeit",draft:!1,tags:[],version:"current",frontMatter:{id:"blockzeit",title:"Blockzeit"},sidebar:"tutorialSidebar",previous:{title:"Blockchain",permalink:"/b/blockchain"},next:{title:"Bullenmarkt",permalink:"/b/bullenmarkt"}},u={},s=[],b={toc:s},f="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Die Blockzeit ist die aktuelle Anzahl von ",(0,o.kt)("a",{parentName:"p",href:"block"},"Bl\xf6cken")," in der ",(0,o.kt)("a",{parentName:"p",href:"bitcoin"},"Bitcoin")," ",(0,o.kt)("a",{parentName:"p",href:"blockchain"},"Blockchain"),"."),(0,o.kt)("p",null,"Da ",(0,o.kt)("a",{parentName:"p",href:"bitcoin"},"Bitcoin")," circa alle 10 Minuten einen neuen ",(0,o.kt)("a",{parentName:"p",href:"block"},"Block")," erstellt kann das Netzwerk auch als eine Art von Uhr angesehen werden."),(0,o.kt)(a,{mdxType:"BlockTime"}),(0,o.kt)("p",null,"\xdcbrigens:",(0,o.kt)("br",{parentName:"p"}),"\n","Falls du mehr wissen willst, lies ",(0,o.kt)("a",{parentName:"p",href:"https://www.blocktrainer.de/uebersetzungen/bitcoin-ist-zeit/"},"Bitcoin ist Zeit")," von ",(0,o.kt)("a",{parentName:"p",href:"https://x.com/dergigi"},"Gigi"),"."))}k.isMDXComponent=!0}}]);