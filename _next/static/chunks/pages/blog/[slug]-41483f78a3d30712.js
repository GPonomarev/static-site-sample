(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{5370:function(e,r,t){"use strict";t.r(r),t.d(r,{__N_SSG:function(){return ne},default:function(){return oe}});var n={};t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return l}});var o=t(9499),a=t(7294),i=t(2746);const c=a.createContext({});function l(e){return function(r){const t=s(r.components);return a.createElement(e,{...r,allComponents:t})}}function s(e){const r=a.useContext(c);return a.useMemo((()=>"function"===typeof e?e(r):{...r,...e}),[r,e])}const u={};function f({components:e,children:r,disableParentContext:t}){let n=s(e);return t&&(n=e||u),a.createElement(c.Provider,{value:n},r)}function d({compiledSource:e,frontmatter:r,scope:t,components:o={},lazy:c}){const[l,s]=(0,a.useState)(!c||"undefined"===typeof window);(0,a.useEffect)((()=>{if(c){const e=window.requestIdleCallback((()=>{s(!0)}));return()=>window.cancelIdleCallback(e)}}),[]);const u=(0,a.useMemo)((()=>{const o=Object.assign({opts:{...n,...i.c}},{frontmatter:r},t),a=Object.keys(o),c=Object.values(o),l=Reflect.construct(Function,a.concat(`${e}`));return l.apply(l,c).default}),[t,e]);if(!l)return a.createElement("div",{dangerouslySetInnerHTML:{__html:""},suppressHydrationWarning:!0});const d=a.createElement(f,{components:o},a.createElement(u,null));return c?a.createElement("div",null,d):d}"undefined"!==typeof window&&(window.requestIdleCallback=window.requestIdleCallback||function(e){var r=Date.now();return setTimeout((function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-r))}})}),1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)});var m=t(9008),g=t.n(m),h=t(5313),p=t(8420),b=t(949),v=t(8527),x=t(6052),y=t(9703),j=t(4697);function w(){return w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},w.apply(this,arguments)}function E(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}function O(e){var r=e.loading,t=e.src,n=e.srcSet,o=e.onLoad,i=e.onError,c=e.crossOrigin,l=e.sizes,s=e.ignoreFallback,u=(0,a.useState)("pending"),f=u[0],d=u[1];(0,a.useEffect)((function(){d(t?"loading":"pending")}),[t]);var m=(0,a.useRef)(),g=(0,a.useCallback)((function(){if(t){h();var e=new Image;e.src=t,c&&(e.crossOrigin=c),n&&(e.srcset=n),l&&(e.sizes=l),r&&(e.loading=r),e.onload=function(e){h(),d("loaded"),null==o||o(e)},e.onerror=function(e){h(),d("failed"),null==i||i(e)},m.current=e}}),[t,c,n,l,o,i,r]),h=function(){m.current&&(m.current.onload=null,m.current.onerror=null,m.current=null)};return(0,j.a)((function(){if(!s)return"loading"===f&&g(),function(){h()}}),[f,g,s]),s?"loaded":f}var C=["htmlWidth","htmlHeight","alt"],k=["fallbackSrc","fallback","src","srcSet","align","fit","loading","ignoreFallback","crossOrigin","fallbackStrategy","referrerPolicy"],_=a.forwardRef((function(e,r){var t=e.htmlWidth,n=e.htmlHeight,o=e.alt,i=E(e,C);return a.createElement("img",w({width:t,height:n,ref:r,alt:o},i))})),S=(0,x.Gp)((function(e,r){var t=e.fallbackSrc,n=e.fallback,o=e.src,i=e.srcSet,c=e.align,l=e.fit,s=e.loading,u=e.ignoreFallback,f=e.crossOrigin,d=e.fallbackStrategy,m=void 0===d?"beforeLoadOrError":d,g=e.referrerPolicy,h=E(e,k),p=null!=s||u||!(void 0!==t||void 0!==n),b=function(e,r){return"loaded"!==e&&"beforeLoadOrError"===r||"failed"===e&&"onError"===r}(O(w({},e,{ignoreFallback:p})),m),v=w({ref:r,objectFit:l,objectPosition:c},p?h:(0,y.CE)(h,["onError","onLoad"]));return b?n||a.createElement(x.m$.img,w({as:_,className:"chakra-image__placeholder",src:t},v)):a.createElement(x.m$.img,w({as:_,src:o,srcSet:i,crossOrigin:f,loading:s,referrerPolicy:g,className:"chakra-image"},v))}));y.Ts&&(S.displayName="Image");var P=t(6450);function I(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}function M(){return M=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},M.apply(this,arguments)}var N=["name","getInitials"],z=["src","srcSet","name","showBorder","borderRadius","onError","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback"],W=(0,x.Gp)((function(e,r){var t=M({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",insetEnd:"0",bottom:"0"},(0,x.yK)().badge);return a.createElement(x.m$.div,M({ref:r},e,{className:(0,y.cx)("chakra-avatar__badge",e.className),__css:t}))}));function D(e){var r=e.split(" "),t=r[0],n=r[1];return t&&n?""+t.charAt(0)+n.charAt(0):t.charAt(0)}y.Ts&&(W.displayName="AvatarBadge");var L=function(e){var r=e.name,t=e.getInitials,n=I(e,N),o=(0,x.yK)();return a.createElement(x.m$.div,M({role:"img","aria-label":r},n,{__css:o.label}),r?null==t?void 0:t(r):null)},T=function(e){return a.createElement(x.m$.svg,M({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),a.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),a.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},R={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},F=(0,x.Gp)((function(e,r){var t=(0,x.jC)("Avatar",e),n=(0,x.Lr)(e),o=n.src,i=n.srcSet,c=n.name,l=n.showBorder,s=n.borderRadius,u=void 0===s?"full":s,f=n.onError,d=n.getInitials,m=void 0===d?D:d,g=n.icon,h=void 0===g?a.createElement(T,null):g,p=n.iconLabel,b=void 0===p?" avatar":p,v=n.loading,j=n.children,w=n.borderColor,E=n.ignoreFallback,O=I(n,z),C=M({borderRadius:u,borderWidth:l?"2px":void 0},R,t.container);return w&&(C.borderColor=w),a.createElement(x.m$.span,M({ref:r},O,{className:(0,y.cx)("chakra-avatar",e.className),__css:C}),a.createElement(x.Fo,{value:t},a.createElement(A,{src:o,srcSet:i,loading:v,onError:f,getInitials:m,name:c,borderRadius:u,icon:h,iconLabel:b,ignoreFallback:E}),j))}));y.Ts&&(F.displayName="Avatar");var A=function(e){var r=e.src,t=e.srcSet,n=e.onError,o=e.getInitials,i=e.name,c=e.borderRadius,l=e.loading,s=e.iconLabel,u=e.icon,f=void 0===u?a.createElement(T,null):u,d=e.ignoreFallback,m=e.referrerPolicy,g=O({src:r,onError:n,ignoreFallback:d});return!r||!("loaded"===g)?i?a.createElement(L,{className:"chakra-avatar__initials",getInitials:o,name:i}):a.cloneElement(f,{role:"img","aria-label":s}):a.createElement(x.m$.img,{src:r,srcSet:t,alt:i,referrerPolicy:m,className:"chakra-avatar__img",loading:l,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:c}})};y.Ts&&(A.displayName="AvatarImage");var $=["children","borderColor","max","spacing","borderRadius"],X=(0,x.Gp)((function(e,r){var t=(0,x.jC)("Avatar",e),n=(0,x.Lr)(e),o=n.children,i=n.borderColor,c=n.max,l=n.spacing,s=void 0===l?"-0.75rem":l,u=n.borderRadius,f=void 0===u?"full":u,d=I(n,$),m=(0,P.WR)(o),g=c?m.slice(0,c):m,h=null!=c&&m.length-c,p=g.reverse().map((function(r,t){var n,o={marginEnd:0===t?0:s,size:e.size,borderColor:null!=(n=r.props.borderColor)?n:i,showBorder:!0};return a.cloneElement(r,(0,y.YU)(o))})),b=M({borderRadius:f,marginStart:s},R,t.excessLabel);return a.createElement(x.m$.div,M({ref:r,role:"group",__css:{display:"flex",alignItems:"center",justifyContent:"flex-end",flexDirection:"row-reverse"}},d,{className:(0,y.cx)("chakra-avatar__group",e.className)}),h>0&&a.createElement(x.m$.span,{className:"chakra-avatar__excess",__css:b},"+"+h),p)}));y.Ts&&(X.displayName="AvatarGroup");var Z=t(1163),B=t(947),G=t(5893);function H(e){var r=e.children,t=e.frontMatter,n=(0,b.If)().colorMode,o=(0,Z.useRouter)().asPath.replace("/blog","");return(0,G.jsxs)(B.default,{children:[(0,G.jsx)(g(),{children:(0,G.jsxs)(v.X6,{children:["$",o," - Blog - ECC"]})}),(0,G.jsxs)(v.Kq,{as:"article",spacing:8,justifyContent:"center",alignItems:"flex-start",m:"0 auto 4rem auto",maxWidth:"900px",w:"100%",px:2,children:[(0,G.jsxs)(v.kC,{flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",maxWidth:"900px",w:"100%",children:[(0,G.jsx)(v.X6,{letterSpacing:"tight",mb:2,as:"h1",size:"2xl",children:t.title}),(0,G.jsxs)(v.kC,{justify:"space-between",align:["initial","center"],direction:["column","row"],mt:2,w:"100%",mb:4,children:[(0,G.jsxs)(v.kC,{align:"center",children:[(0,G.jsx)(F,{size:"xs",name:"ECC",src:"../images/portrait.jpeg",mr:2}),(0,G.jsxs)(v.xu,{fontSize:"sm",color:{light:"gray.700",dark:"gray.400"}[n],children:["ECC / ",(0,h.Z)((0,p.Z)(t.publishedAt),"MMMM dd, yyyy")]})]}),(0,G.jsx)(v.xv,{fontSize:"sm",color:"gray.500",minWidth:"100px",mt:[2,0],children:t.readingTime.text})]})]}),r]})]})}var q=t(6886),K=t(1664),U=t.n(K),Y=t(1058);function J(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Q(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?J(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):J(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var V=function(e){return(0,G.jsx)(v.X6,Q(Q({css:{scrollMarginTop:"100px",scrollSnapMargin:"100px","&[id]":{pointerEvents:"none"},"&[id]:before":{display:"block",height:" 6rem",marginTop:"-6rem",visibility:"hidden",content:'""'},"&[id]:hover a":{opacity:1}}},e),{},{mb:"1em",mt:"2em",children:(0,G.jsxs)(v.xu,{pointerEvents:"auto",children:[e.children,e.id&&(0,G.jsx)(v.xu,{"aria-label":"anchor",as:"a",color:"blue.500",fontWeight:"normal",outline:"none",_focus:{opacity:1,boxShadow:"outline"},opacity:"0",ml:"0.375rem",href:"#".concat(e.id),children:"#"})]})}))},ee={h1:function(e){return(0,G.jsx)(v.X6,Q({as:"h1",size:"xl",my:4},e))},h2:function(e){return(0,G.jsx)(V,Q({as:"h2",size:"lg",fontWeight:"bold"},e))},h3:function(e){return(0,G.jsx)(V,Q({as:"h3",size:"md",fontWeight:"bold"},e))},h4:function(e){return(0,G.jsx)(V,Q({as:"h4",size:"sm",fontWeight:"bold"},e))},h5:function(e){return(0,G.jsx)(V,Q({as:"h5",size:"sm",fontWeight:"bold"},e))},h6:function(e){return(0,G.jsx)(V,Q({as:"h6",size:"xs",fontWeight:"bold"},e))},inlineCode:function(e){return(0,G.jsx)(v.EK,Q({colorScheme:"yellow",fontSize:"0.84em"},e))},br:function(e){return(0,G.jsx)(v.xu,Q({height:"24px"},e))},p:function(e){return(0,G.jsx)(v.xv,Q({as:"p",mt:0,lineHeight:"tall"},e))},ul:function(e){return(0,G.jsx)(v.xu,Q({as:"ul",pt:2,pl:4,ml:2},e))},ol:function(e){return(0,G.jsx)(v.xu,Q({as:"ol",pt:2,pl:4,ml:2},e))},li:function(e){return(0,G.jsx)(v.xu,Q({as:"li",pb:1},e))},blockquote:function(e){var r=(0,b.If)().colorMode;return(0,G.jsx)(q.bZ,Q({mt:4,w:"98%",bg:{light:"blue.50",dark:"blue.900"}[r],variant:"left-accent",status:"info",css:{"> *:first-of-type":{marginTop:0,marginLeft:8}}},e))},image:function(e){return(0,G.jsx)(Y.Z,{width:e.width,height:e.height,src:e.src,alt:e.alt})},hr:function(){var e=(0,b.If)().colorMode;return(0,G.jsx)(v.iz,{borderColor:{light:"gray.200",dark:"gray.600"}[e],my:4,w:"100%"})},a:function(e){var r=(0,b.If)().colorMode,t={light:"blue.500",dark:"blue.500"},n=e.href;return n&&(n.startsWith("/")||n.startsWith("#"))?(0,G.jsx)(U(),{href:n,passHref:!0,children:(0,G.jsx)(v.rU,Q({color:t[r]},e))}):(0,G.jsx)(v.rU,Q({color:t[r],isExternal:!0},e))}};function re(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function te(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?re(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):re(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var ne=!0;function oe(e){var r=e.mdxSource,t=e.frontMatter,n=(0,G.jsx)(d,te(te({},r),{},{components:ee}));return(0,G.jsx)(H,{frontMatter:t,children:n})}},1127:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return t(5370)}])},1163:function(e,r,t){e.exports=t(1587)},2746:function(e,r,t){const n=t(5893);e.exports.c=n}},function(e){e.O(0,[848,108,947,774,888,179],(function(){return r=1127,e(e.s=r);var r}));var r=e.O();_N_E=r}]);