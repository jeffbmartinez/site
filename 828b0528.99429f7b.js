(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{112:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"rightToc",(function(){return c})),r.d(n,"default",(function(){return u}));r(0);var t=r(144);function a(){return(a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}const o={id:"demos",title:"Demos",sidebar_label:"Demos"},c=[],i={rightToc:c},p="wrapper";function u({components:e,...n}){return Object(t.b)(p,a({},i,n,{components:e,mdxType:"MDXLayout"}))}u.isMDXComponent=!0},144:function(e,n,r){"use strict";r.d(n,"a",(function(){return i})),r.d(n,"b",(function(){return l}));var t=r(0),a=r.n(t),o=a.a.createContext({}),c=function(e){var n=a.a.useContext(o),r=n;return e&&(r="function"==typeof e?e(n):Object.assign({},n,e)),r},i=function(e){var n=c(e.components);return a.a.createElement(o.Provider,{value:n},e.children)};var p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},s=Object(t.forwardRef)((function(e,n){var r=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,p=function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&-1===n.indexOf(t)&&(r[t]=e[t]);return r}(e,["components","mdxType","originalType","parentName"]),s=c(r),l=t,f=s[i+"."+l]||s[l]||u[l]||o;return r?a.a.createElement(f,Object.assign({},{ref:n},p,{components:r})):a.a.createElement(f,Object.assign({},{ref:n},p))}));function l(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=r.length,c=new Array(o);c[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i[p]="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}s.displayName="MDXCreateElement"}}]);