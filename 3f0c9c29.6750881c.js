(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return f}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(t),d=r,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return t?a.a.createElement(f,c(c({ref:n},l),{},{components:t})):a.a.createElement(f,c({ref:n},l))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},102:function(e,n,t){"use strict";function r(e){var n,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(a&&(a+=" "),a+=t);else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}n.a=function(){for(var e,n,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(a&&(a+=" "),a+=n);return a}},107:function(e,n,t){"use strict";var r=t(0),a=Object(r.createContext)(void 0);n.a=a},108:function(e,n,t){"use strict";var r=t(0),a=t(107);n.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},115:function(e,n,t){"use strict";var r=t(0),a=t.n(r),o=t(108),i=t(102),c=t(50),s=t.n(c),l=37,u=39;n.a=function(e){var n=e.block,t=e.children,c=e.defaultValue,p=e.values,b=e.groupId,d=Object(o.a)(),f=d.tabGroupChoices,m=d.setTabGroupChoices,y=Object(r.useState)(c),v=y[0],g=y[1],O=Object(r.useState)(!1),h=O[0],x=O[1];if(null!=b){var j=f[b];null!=j&&j!==v&&p.some((function(e){return e.value===j}))&&g(j)}var w=function(e){g(e),null!=b&&m(b,e)},E=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||x(!0)},_=function(){x(!1)};return Object(r.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",_)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n})},p.map((function(e){var n=e.value,t=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===n,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===n}),style:h?{}:{outline:"none"},key:n,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,n,t){switch(t.keyCode){case u:!function(e,n){var t=e.indexOf(n)+1;e[t]?e[t].focus():e[0].focus()}(e,n);break;case l:!function(e,n){var t=e.indexOf(n)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,n)}}(E,e.target,e),C(e)},onFocus:function(){return w(n)},onClick:function(){w(n),x(!1)},onPointerDown:function(){return x(!1)}},t)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(t).filter((function(e){return e.props.value===v}))[0]))}},116:function(e,n,t){"use strict";var r=t(0),a=t.n(r);n.a=function(e){return a.a.createElement("div",null,e.children)}},70:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return u})),t.d(n,"default",(function(){return b}));var r=t(2),a=t(7),o=(t(0),t(100)),i=t(115),c=t(116),s={id:"ci",title:"Continuous Integration (CI)",sidebar_label:"Continuous Integration (CI)"},l={unversionedId:"ci",id:"ci",isDocsHomePage:!1,title:"Continuous Integration (CI)",description:"All the following configurations work with electron-react-boilerplate.",source:"@site/docs/ci.md",slug:"/ci",permalink:"/docs/ci",version:"current",sidebar_label:"Continuous Integration (CI)",sidebar:"docs",previous:{title:"End to End Tests",permalink:"/docs/e2e-tests"},next:{title:"Internals",permalink:"/docs/internals"}},u=[],p={rightToc:u};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All the following configurations work with electron-react-boilerplate."),Object(o.b)(i.a,{defaultValue:"travis",values:[{label:"Travis CI",value:"travis"},{label:"Azure Pipelines",value:"azure"},{label:"GitHub Actions",value:"gh-actions"},{label:"AppVeyor",value:"appveyor"}],mdxType:"Tabs"},Object(o.b)(c.a,{value:"travis",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),'matrix:\n  include:\n    - os: osx\n      language: node_js\n      node_js:\n        - node\n      env:\n        - ELECTRON_CACHE=$HOME/.cache/electron\n        - ELECTRON_BUILDER_CACHE=$HOME/.cache/electron-builder\n    - os: linux\n      language: node_js\n      node_js:\n        - node\n      services:\n        - xvfb\n      addons:\n        apt:\n          sources:\n            - sourceline: \'ppa:ubuntu-toolchain-r/test\'\n          packages:\n            - gcc-multilib\n            - g++-8\n            - g++-multilib\n            - icnsutils\n            - graphicsmagick\n            - xz-utils\n            - xorriso\n            - rpm\n\nbefore_cache:\n  - rm -rf $HOME/.cache/electron-builder/wine\n\ncache:\n  yarn: true\n  directories:\n    - node_modules\n    - $(npm config get prefix)/lib/node_modules\n    - $HOME/.cache/electron\n    - $HOME/.cache/electron-builder\n\nbefore_install:\n  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then export CXX="g++-8"; fi\n\ninstall:\n  - yarn --ignore-engines\n  # On Linux, initialize "virtual display". See before_script\n  - |\n    if [ "$TRAVIS_OS_NAME" == "linux" ]; then\n      /sbin/start-stop-daemon \\\n      --start \\\n      --quiet \\\n      --pidfile /tmp/custom_xvfb_99.pid \\\n      --make-pidfile \\\n      --background \\\n      --exec /usr/bin/Xvfb \\\n      -- :99 -ac -screen 0 1280x1024x16\n    else\n      :\n    fi\n\nbefore_script:\n  # On Linux, create a "virtual display". This allows browsers to work properly\n  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then export DISPLAY=:99.0; fi\n  - if [[ "$TRAVIS_OS_NAME" == "linux" ]]; then sleep 3; fi\n\nscript:\n  - yarn package-ci\n  - yarn lint\n  - yarn ts\n  - yarn test\n  - yarn build-e2e\n  - yarn test-e2e\n\n'))),Object(o.b)(c.a,{value:"azure",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"variables:\n  YARN_CACHE_FOLDER: $(Pipeline.Workspace)/.yarn\n\nstrategy:\n  matrix:\n    linux:\n      imageName: 'ubuntu-16.04'\n      nodeVersion: '13.x'\n    mac:\n      imageName: 'macos-10.14'\n      nodeVersion: '13.x'\n    windows:\n      imageName: 'windows-2019'\n      nodeVersion: '13.x'\n\npool:\n  vmImage: $(imageName)\n\nsteps:\n  # Set node version\n  - task: NodeTool@0\n    inputs:\n      versionSpec: $(nodeVersion)\n  # Cache yarn deps\n  - task: Cache@2\n    inputs:\n      key: 'yarn | \"$(Agent.OS)\" | yarn.lock'\n      restoreKeys: |\n        yarn | \"$(Agent.OS)\"\n        yarn\n      path: $(YARN_CACHE_FOLDER)\n    displayName: Cache Yarn packages\n  # Start virtual framebuffer server\n  - bash: |\n      /usr/bin/Xvfb :99 -screen 0 1024x768x24 > /dev/null 2>&1 &\n      echo \">>> Started xvfb\"\n    displayName: Start xvfb\n    condition: and(succeeded(), eq(variables['Agent.OS'], 'Linux'))\n  # Install deps with yarn and run tests\n  - script: yarn --frozen-lockfile && yarn test-all\n    env:\n      DISPLAY: ':99.0'\n  # Generate coverage report\n  - script: yarn test --coverage --coverageReporters=cobertura\n  # Publish coverage report\n  - task: PublishCodeCoverageResults@1\n    inputs:\n      codeCoverageTool: Cobertura\n      summaryFileLocation: $(System.DefaultWorkingDirectory)/coverage/cobertura-coverage.xml\n\n"))),Object(o.b)(c.a,{value:"gh-actions",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yml"}),"name: Test\n\non: push\n\njobs:\n  release:\n    runs-on: ${{ matrix.os }}\n\n    strategy:\n      matrix:\n        os: [macos-10.14, windows-2019, ubuntu-18.04]\n\n    steps:\n      - name: Check out Git repository\n        uses: actions/checkout@v1\n\n      - name: Install Node.js, NPM and Yarn\n        uses: actions/setup-node@v1\n        with:\n          node-version: 13\n\n      - name: yarn install\n        run: |\n          yarn install\n\n      - name: yarn test\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n        run: |\n          yarn package-ci\n          yarn lint\n          yarn ts\n\n# Failing beacuse virtual framebuffer not installed\n#          yarn build-e2e\n#          yarn test-e2e\n\n"))),Object(o.b)(c.a,{value:"appveyor",mdxType:"TabItem"},Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"image: Visual Studio 2017\n\nplatform:\n  - x64\n\nenvironment:\n  matrix:\n    - nodejs_version: 13\n\ncache:\n  - '%LOCALAPPDATA%/Yarn'\n  - node_modules\n  - app/node_modules\n  - '%USERPROFILE%\\.electron'\n\nmatrix:\n  fast_finish: true\n\nbuild: off\n\nversion: '{build}'\n\nshallow_clone: true\n\nclone_depth: 1\n\ninstall:\n  - ps: Install-Product node $env:nodejs_version x64\n  - set CI=true\n  - yarn\n\ntest_script:\n  - yarn package-ci\n  - yarn lint\n  - yarn ts\n  - yarn test\n  - yarn build-e2e\n  - yarn test-e2e\n\n")))))}b.isMDXComponent=!0}}]);