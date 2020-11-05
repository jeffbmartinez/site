(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{101:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,m=p["".concat(r,".").concat(u)]||p[u]||b[u]||o;return n?i.a.createElement(m,c(c({ref:t},l),{},{components:n})):i.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(7),o=(n(0),n(101)),r={id:"adding-dependencies",title:"Adding Dependencies",sidebar_label:"Adding Dependencies"},c={unversionedId:"adding-dependencies",id:"adding-dependencies",isDocsHomePage:!1,title:"Adding Dependencies",description:"How to add modules to the project",source:"@site/docs/adding-dependencies.md",slug:"/adding-dependencies",permalink:"/docs/adding-dependencies",version:"current",sidebar_label:"Adding Dependencies",sidebar:"docs",previous:{title:"Adding Assets",permalink:"/docs/adding-assets"},next:{title:"Styling",permalink:"/docs/styling"}},d=[{value:"How to add modules to the project",id:"how-to-add-modules-to-the-project",children:[{value:"Module Structure",id:"module-structure",children:[]},{value:"Which <code>package.json</code> file to use",id:"which-packagejson-file-to-use",children:[]},{value:"Further Readings",id:"further-readings",children:[]}]}],l={rightToc:d};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-add-modules-to-the-project"},"How to add modules to the project"),Object(o.b)("p",null,"You will need to add other modules to this boilerplate, depending on the requirements of your project. For example, you may want to add ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/brianc/node-postgres"}),"node-postgres")," to communicate with PostgreSQL database, or\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://www.material-ui.com/"}),"material-ui")," to reuse React UI components."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Please read the following section before installing any dependencies"))),Object(o.b)("h3",{id:"module-structure"},"Module Structure"),Object(o.b)("p",null,"This boilerplate uses a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.electron.build/tutorials/two-package-structure.html"}),"two package.json structure"),". This means you will have two ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," files."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"./package.json")," in the root of your project"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"./app/package.json")," inside ",Object(o.b)("inlineCode",{parentName:"li"},"app")," folder")),Object(o.b)("h3",{id:"which-packagejson-file-to-use"},"Which ",Object(o.b)("inlineCode",{parentName:"h3"},"package.json")," file to use"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Rule of thumb")," is: all modules go into ",Object(o.b)("inlineCode",{parentName:"p"},"./package.json")," except for native modules, or modules with native dependencies or peer dependencies. Native modules, or packages with native dependencies should go into ",Object(o.b)("inlineCode",{parentName:"p"},"./app/package.json"),"."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"If the module is native to a platform (like node-postgres), it should be listed under ",Object(o.b)("inlineCode",{parentName:"li"},"dependencies")," in ",Object(o.b)("inlineCode",{parentName:"li"},"./app/package.json")),Object(o.b)("li",{parentName:"ol"},"If a module is ",Object(o.b)("inlineCode",{parentName:"li"},"import"),"ed by another module, include it in ",Object(o.b)("inlineCode",{parentName:"li"},"dependencies")," in ",Object(o.b)("inlineCode",{parentName:"li"},"./package.json"),". See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md"}),"this ESLint rule"),". Examples of such modules are ",Object(o.b)("inlineCode",{parentName:"li"},"material-ui"),", ",Object(o.b)("inlineCode",{parentName:"li"},"redux-form"),", and ",Object(o.b)("inlineCode",{parentName:"li"},"moment"),"."),Object(o.b)("li",{parentName:"ol"},"Otherwise, modules used for building, testing, and debugging should be included in ",Object(o.b)("inlineCode",{parentName:"li"},"devDependencies")," in ",Object(o.b)("inlineCode",{parentName:"li"},"./package.json"),".")),Object(o.b)("h3",{id:"further-readings"},"Further Readings"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.electronjs.org/docs/tutorial/using-native-node-modules"}),"Electron Documentation - Using Native Node Modules")," to see how Electron uses native Node modules."),Object(o.b)("li",{parentName:"ul"},"See ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://nodejs.org/api/addons.html"}),"Node.js Documentation - Addons")," to see what are native Node modules.")),Object(o.b)("p",null,"For an example app that uses this boilerplate and packages native dependencies, see ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/amilajack/erb-sqlite-example"}),"erb-sqlite-example"),"."))}s.isMDXComponent=!0}}]);