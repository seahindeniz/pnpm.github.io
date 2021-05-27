(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),i=n(8),o=(n(0),n(318)),a={id:"list",title:"pnpm list"},l={unversionedId:"cli/list",id:"version-6.x/cli/list",isDocsHomePage:!1,title:"pnpm list",description:"Alias: ls",source:"@site/i18n/it/docusaurus-plugin-content-docs/version-6.x/cli/list.md",slug:"/cli/list",permalink:"/it/cli/list",editUrl:"https://crowdin.com/project/pnpm/it",version:"6.x",sidebar:"version-6.x/docs",previous:{title:"pnpm audit",permalink:"/it/cli/audit"},next:{title:"pnpm outdated",permalink:"/it/cli/outdated"}},c=[{value:"Options",id:"options",children:[{value:"--recursive, -r",id:"--recursive--r",children:[]},{value:"--json",id:"--json",children:[]},{value:"--long",id:"--long",children:[]},{value:"--parseable",id:"--parseable",children:[]},{value:"--global",id:"--global",children:[]},{value:"--depth &lt;number&gt;",id:"--depth-number",children:[]},{value:"--prod, -P",id:"--prod--p",children:[]},{value:"--dev, -D",id:"--dev--d",children:[]},{value:"--no-optional",id:"--no-optional",children:[]},{value:"--filter &lt;package_selector&gt;",id:"--filter-package_selector",children:[]}]}],p={toc:c};function d(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Alias: ",Object(o.b)("inlineCode",{parentName:"p"},"ls")),Object(o.b)("p",null,"Questo comando produrr\xe0 tutte le versioni dei pacchetti che sono installati e le loro dipendenze, in una struttura ad albero."),Object(o.b)("p",null,"Positional arguments are ",Object(o.b)("inlineCode",{parentName:"p"},"name-pattern@version-range")," identifiers, which will limit the results to only the packages named. For example, ",Object(o.b)("inlineCode",{parentName:"p"},'pnpm list "babel-*" "eslint-*" semver@5'),"."),Object(o.b)("h2",{id:"options"},"Options"),Object(o.b)("h3",{id:"--recursive--r"},"--recursive, -r"),Object(o.b)("p",null,"Perform command on every package in subdirectories or on every workspace package, when executed inside a workspace."),Object(o.b)("h3",{id:"--json"},"--json"),Object(o.b)("p",null,"Added in: 3.7.0"),Object(o.b)("p",null,"Log output in JSON format."),Object(o.b)("h3",{id:"--long"},"--long"),Object(o.b)("p",null,"Mostra informazioni aggiuntive."),Object(o.b)("h3",{id:"--parseable"},"--parseable"),Object(o.b)("p",null,"Outputs package directories in a parseable format instead of their tree view."),Object(o.b)("h3",{id:"--global"},"--global"),Object(o.b)("p",null,"List packages in the global install directory instead of in the current project."),Object(o.b)("h3",{id:"--depth-number"},"--depth ","<","number",">"),Object(o.b)("p",null,"Max display depth of the dependency tree."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pnpm ls --depth 0")," will list direct dependencies only. ",Object(o.b)("inlineCode",{parentName:"p"},"pnpm ls --depth -1")," will list projects only. Useful inside a workspace when used with the ",Object(o.b)("inlineCode",{parentName:"p"},"-r")," option."),Object(o.b)("h3",{id:"--prod--p"},"--prod, -P"),Object(o.b)("p",null,"Display only the dependency graph for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"dependencies")," and ",Object(o.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(o.b)("h3",{id:"--dev--d"},"--dev, -D"),Object(o.b)("p",null,"Display only the dependency graph for packages in ",Object(o.b)("inlineCode",{parentName:"p"},"devDependencies"),"."),Object(o.b)("h3",{id:"--no-optional"},"--no-optional"),Object(o.b)("p",null,"Don't display packages from ",Object(o.b)("inlineCode",{parentName:"p"},"optionalDependencies"),"."),Object(o.b)("h3",{id:"--filter-package_selector"},"--filter ","<","package_selector",">"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"/it/filtering"},"Read more about filtering.")))}d.isMDXComponent=!0},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),d=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(n),b=r,m=s["".concat(a,".").concat(b)]||s[b]||u[b]||o;return n?i.a.createElement(m,l(l({ref:t},p),{},{components:n})):i.a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);