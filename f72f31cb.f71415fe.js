(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{136:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));n(0);var o=n(144);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}const r={id:"component-tests",title:"Component Tests",sidebar_label:"Component Tests"},s=[{value:"Writing Component Tests",id:"writing-component-tests",children:[{value:"Running Tests",id:"running-tests",children:[]},{value:"Snapshot Tests",id:"snapshot-tests",children:[]},{value:"Watching Tests",id:"watching-tests",children:[]}]}],i={rightToc:s},c="wrapper";function p({components:e,...t}){return Object(o.b)(c,a({},i,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Component tests in ERB use ",Object(o.b)("a",a({parentName:"p"},{href:"https://jestjs.io"}),"Jest")," and ",Object(o.b)("a",a({parentName:"p"},{href:"https://github.com/airbnb/enzyme"}),"Enzyme"),". While Jest is popular for React testing, it is also capable of testing Node applications as well. Enzyme provides some utilities that make it easier to test React applications."),Object(o.b)("h2",{id:"writing-component-tests"},"Writing Component Tests"),Object(o.b)("p",null,"By convention, all component test modules have the following filename suffix: ",Object(o.b)("inlineCode",{parentName:"p"},".spec.js"),". An example of test module filename would be ",Object(o.b)("inlineCode",{parentName:"p"},"Counter.spec.js"),"."),Object(o.b)("p",null,"We start by writing a function that will setup the actions of our component and importing the necessary modules:"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"import { spy } from 'sinon';\nimport React from 'react';\nimport Enzyme, { shallow } from 'enzyme';\nimport Adapter from 'enzyme-adapter-react-16';\nimport renderer from 'react-test-renderer';\nimport Counter from '../../app/components/Counter';\n\nEnzyme.configure({ adapter: new Adapter() });\nfunction setup() {\n  const actions = {\n    increment: spy(),\n    incrementIfOdd: spy(),\n    incrementAsync: spy(),\n    decrement: spy()\n  };\n  const component = shallow(<Counter counter={1} {...actions} />);\n  return {\n    component,\n    actions,\n    buttons: component.find('button'),\n    p: component.find('.counter')\n  };\n}\n")),Object(o.b)("p",null,"Now we describe a set of tests with ",Object(o.b)("inlineCode",{parentName:"p"},"describe()")," and describe the test itself with ",Object(o.b)("inlineCode",{parentName:"p"},"it()"),":"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-js"}),"describe('Counter Component', () => {\n  it('should match exact snapshot', () => {\n    const { actions } = setup();\n    const counter = (\n      <div>\n        <Router>\n          <Counter counter={1} {...actions} />\n        </Router>\n      </div>\n    );\n    const tree = renderer.create(counter).toJSON();\n\n    expect(tree).toMatchSnapshot();\n  });\n});\n")),Object(o.b)("h3",{id:"running-tests"},"Running Tests"),Object(o.b)("p",null,"Tests can be run by running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test"),":"),Object(o.b)("pre",null,Object(o.b)("code",a({parentName:"pre"},{className:"language-bash"}),"$ yarn test\n")),Object(o.b)("h3",{id:"snapshot-tests"},"Snapshot Tests"),Object(o.b)("p",null,"Snapshot tests are probably one of the most powerful features of Jest. With them, you can easily capture the current state of an object and test against that state in future executions of the test. For more details on this, see Jest's ",Object(o.b)("a",a({parentName:"p"},{href:"https://jestjs.io/docs/en/snapshot-testing"}),"Snapshot Testing docs"),"."),Object(o.b)("p",null,"After adding a new test to ERB, run ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test -u"),". This create a new snapshot if one does not exist already or it will update an existing one."),Object(o.b)("h3",{id:"watching-tests"},"Watching Tests"),Object(o.b)("p",null,"Suppose you are making change to React components and you want to see if components have broken while you are making changes. Running ",Object(o.b)("inlineCode",{parentName:"p"},"yarn test -w")," will run tests all the tests that are affected by the changes made to the React components."))}p.isMDXComponent=!0},144:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o),r=a.a.createContext({}),s=function(e){var t=a.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},i=function(e){var t=s(e.components);return a.a.createElement(r.Provider,{value:t},e.children)};var c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},l=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}(e,["components","mdxType","originalType","parentName"]),l=s(n),u=o,m=l[i+"."+u]||l[u]||p[u]||r;return n?a.a.createElement(m,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(m,Object.assign({},{ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=l;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:o,s[1]=i;for(var u=2;u<r;u++)s[u]=n[u];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);