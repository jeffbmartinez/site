(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{128:function(n,t,e){"use strict";e.r(t),e.d(t,"frontMatter",(function(){return a})),e.d(t,"rightToc",(function(){return c})),e.d(t,"default",(function(){return f}));e(149),e(13),e(54),e(158),e(160),e(0);var r=e(144);function o(){return(o=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n}).apply(this,arguments)}var a={title:"Hello World",author:"Amila Welihinda"},c=[],i={rightToc:c},u="wrapper";function f(n){var t=n.components,e=function(n,t){if(null==n)return{};var e,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)e=a[r],t.indexOf(e)>=0||(o[e]=n[e]);return o}(n,["components"]);return Object(r.b)(u,o({},i,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"After a couple years of development, electron-react-boilerplate finally has a website! Subscribe to our blog for updates on the progress of the project"))}f.isMDXComponent=!0},144:function(n,t,e){"use strict";e.d(t,"a",(function(){return i})),e.d(t,"b",(function(){return p}));var r=e(0),o=e.n(r),a=o.a.createContext({}),c=function(n){var t=o.a.useContext(a),e=t;return n&&(e="function"==typeof n?n(t):Object.assign({},t,n)),e},i=function(n){var t=c(n.components);return o.a.createElement(a.Provider,{value:t},n.children)};var u="mdxType",f={inlineCode:"code",wrapper:function(n){var t=n.children;return o.a.createElement(o.a.Fragment,{},t)}},l=Object(r.forwardRef)((function(n,t){var e=n.components,r=n.mdxType,a=n.originalType,i=n.parentName,u=function(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&-1===t.indexOf(r)&&(e[r]=n[r]);return e}(n,["components","mdxType","originalType","parentName"]),l=c(e),p=r,s=l[i+"."+p]||l[p]||f[p]||a;return e?o.a.createElement(s,Object.assign({},{ref:t},u,{components:e})):o.a.createElement(s,Object.assign({},{ref:t},u))}));function p(n,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof n||r){var a=e.length,c=new Array(a);c[0]=l;var i={};for(var f in t)hasOwnProperty.call(t,f)&&(i[f]=t[f]);i.originalType=n,i[u]="string"==typeof n?n:r,c[1]=i;for(var p=2;p<a;p++)c[p]=e[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,e)}l.displayName="MDXCreateElement"},149:function(n,t,e){var r=e(51);r(r.S+r.F,"Object",{assign:e(150)})},150:function(n,t,e){"use strict";var r=e(12),o=e(34),a=e(151),c=e(152),i=e(52),u=e(53),f=Object.assign;n.exports=!f||e(33)((function(){var n={},t={},e=Symbol(),r="abcdefghijklmnopqrst";return n[e]=7,r.split("").forEach((function(n){t[n]=n})),7!=f({},n)[e]||Object.keys(f({},t)).join("")!=r}))?function(n,t){for(var e=i(n),f=arguments.length,l=1,p=a.f,s=c.f;f>l;)for(var b,v=u(arguments[l++]),y=p?o(v).concat(p(v)):o(v),m=y.length,g=0;m>g;)b=y[g++],r&&!s.call(v,b)||(e[b]=v[b]);return e}:f},151:function(n,t){t.f=Object.getOwnPropertySymbols},152:function(n,t){t.f={}.propertyIsEnumerable},158:function(n,t,e){"use strict";var r=e(159),o={};o[e(10)("toStringTag")]="z",o+""!="[object z]"&&e(18)(Object.prototype,"toString",(function(){return"[object "+r(this)+"]"}),!0)},159:function(n,t,e){var r=e(55),o=e(10)("toStringTag"),a="Arguments"==r(function(){return arguments}());n.exports=function(n){var t,e,c;return void 0===n?"Undefined":null===n?"Null":"string"==typeof(e=function(n,t){try{return n[t]}catch(e){}}(t=Object(n),o))?e:a?r(t):"Object"==(c=r(t))&&"function"==typeof t.callee?"Arguments":c}},160:function(n,t,e){var r=e(52),o=e(34);e(161)("keys",(function(){return function(n){return o(r(n))}}))},161:function(n,t,e){var r=e(51),o=e(17),a=e(33);n.exports=function(n,t){var e=(o.Object||{})[n]||Object[n],c={};c[n]=t(e),r(r.S+r.F*a((function(){e(1)})),"Object",c)}}}]);