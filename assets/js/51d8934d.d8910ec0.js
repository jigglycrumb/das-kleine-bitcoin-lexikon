"use strict";(self.webpackChunkbitcoin_lexikon=self.webpackChunkbitcoin_lexikon||[]).push([[3420],{3905:(A,e,n)=>{n.d(e,{Zo:()=>E,kt:()=>Q});var t=n(7294);function r(A,e,n){return e in A?Object.defineProperty(A,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):A[e]=n,A}function g(A,e){var n=Object.keys(A);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),n.push.apply(n,t)}return n}function a(A){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?g(Object(n),!0).forEach((function(e){r(A,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(n,e))}))}return A}function C(A,e){if(null==A)return{};var n,t,r=function(A,e){if(null==A)return{};var n,t,r={},g=Object.keys(A);for(t=0;t<g.length;t++)n=g[t],e.indexOf(n)>=0||(r[n]=A[n]);return r}(A,e);if(Object.getOwnPropertySymbols){var g=Object.getOwnPropertySymbols(A);for(t=0;t<g.length;t++)n=g[t],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(A,n)&&(r[n]=A[n])}return r}var i=t.createContext({}),l=function(A){var e=t.useContext(i),n=e;return A&&(n="function"==typeof A?A(e):a(a({},e),A)),n},E=function(A){var e=l(A.components);return t.createElement(i.Provider,{value:e},A.children)},B="mdxType",I={inlineCode:"code",wrapper:function(A){var e=A.children;return t.createElement(t.Fragment,{},e)}},s=t.forwardRef((function(A,e){var n=A.components,r=A.mdxType,g=A.originalType,i=A.parentName,E=C(A,["components","mdxType","originalType","parentName"]),B=l(n),s=r,Q=B["".concat(i,".").concat(s)]||B[s]||I[s]||g;return n?t.createElement(Q,a(a({ref:e},E),{},{components:n})):t.createElement(Q,a({ref:e},E))}));function Q(A,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof A||r){var g=n.length,a=new Array(g);a[0]=s;var C={};for(var i in e)hasOwnProperty.call(e,i)&&(C[i]=e[i]);C.originalType=A,C[B]="string"==typeof A?A:r,a[1]=C;for(var l=2;l<g;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},8611:(A,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>I,frontMatter:()=>g,metadata:()=>C,toc:()=>l});var t=n(7462),r=(n(7294),n(3905));const g={id:"adresse",title:"Adresse"},a=void 0,C={unversionedId:"a/adresse",id:"a/adresse",title:"Adresse",description:"Eine Adresse ist eine Zeichenfolge aus Buchstaben und Zahlen, die du benutzen kannst um Bitcoin zu empfangen. Du kannst sie in etwa mit der IBAN im Bankensystem vergleichen.",source:"@site/docs/a/Adresse.md",sourceDirName:"a",slug:"/a/adresse",permalink:"/a/adresse",draft:!1,tags:[],version:"current",frontMatter:{id:"adresse",title:"Adresse"},sidebar:"tutorialSidebar",previous:{title:"ASIC",permalink:"/a/asic"},next:{title:"Altcoins",permalink:"/a/altcoins"}},i={},l=[],E={toc:l},B="wrapper";function I(A){let{components:e,...g}=A;return(0,r.kt)(B,(0,t.Z)({},E,g,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Eine Adresse ist eine Zeichenfolge aus Buchstaben und Zahlen, die du benutzen kannst um ",(0,r.kt)("a",{parentName:"p",href:"../b/bitcoin"},"Bitcoin")," zu empfangen. Du kannst sie in etwa mit der IBAN im Bankensystem vergleichen."),(0,r.kt)("p",null,"Im Gegensatz zum Bankkonto kann ein ",(0,r.kt)("a",{parentName:"p",href:"../w/wallet"},"Wallet")," jedoch beliebig viele verschiedene Adressen enthalten und du kannst jederzeit neue Adressen generieren."),(0,r.kt)("p",null,"Eine Adresse sieht beispielsweise so aus:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"bc1qwl7yeccraxvrk37m2umzlsywx5dvpung8cx487")),(0,r.kt)("p",null,"H\xe4ufig werden Adressen in Form eines QR Codes ausgetauscht, die z.B. mit Smartphone ",(0,r.kt)("a",{parentName:"p",href:"../w/wallet"},"Wallets")," einfach gescannt werden k\xf6nnen."),(0,r.kt)("p",null,"Dies ist der QR Code zur Beispieladresse:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"QR Code der Beispieladresse",src:n(9073).Z,width:"333",height:"333"})),(0,r.kt)("p",null,"Es gibt verschiedene Adressformate:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Legacy & SegWit"),(0,r.kt)("p",{parentName:"li"},"Legacy Adressen beginnen mit der Zahl ",(0,r.kt)("strong",{parentName:"p"},"1"),", Segwit mit der Zahl ",(0,r.kt)("strong",{parentName:"p"},"3"),". Es wird davon abgeraten diese veralteteten Formate zu benutzen, da die ",(0,r.kt)("a",{parentName:"p",href:"../t/transaktionsgebuehr"},"Transaktionsgeb\xfchren")," h\xf6her sind.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Native SegWit"),(0,r.kt)("p",{parentName:"li"},"Native SegWit Adressen beginnen mit ",(0,r.kt)("strong",{parentName:"p"},"bc1q"),". Sie sind der aktuelle Standard.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Taproot"),(0,r.kt)("p",{parentName:"li"},"Taproot Adressen beginnen mit ",(0,r.kt)("strong",{parentName:"p"},"bc1p"),". Sie sind das neueste Format, werden aber erst von wenigen ",(0,r.kt)("a",{parentName:"p",href:"../e/exchange"},"Exchanges")," unterst\xfctzt."))))}I.isMDXComponent=!0},9073:(A,e,n)=>{n.d(e,{Z:()=>t});const t="data:image/png;base64,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"}}]);