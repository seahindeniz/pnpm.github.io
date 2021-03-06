(window.webpackJsonp=window.webpackJsonp||[]).push([[2281],{2353:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var l=n(3),a=n(7),r=(n(0),n(3064)),i={id:"npmrc",title:".npmrc",original_id:"npmrc"},b={unversionedId:"npmrc",id:"version-5.4/npmrc",isDocsHomePage:!1,title:".npmrc",description:"pnpm gets its config settings from the command line, environment variables, and .npmrc files.",source:"@site/versioned_docs/version-5.4/npmrc.md",slug:"/npmrc",permalink:"/5.4/npmrc",editUrl:"https://github.com/pnpm/pnpm.github.io/edit/source/docs/versioned_docs/version-5.4/npmrc.md",version:"5.4",lastUpdatedBy:"Zoltan Kochan",lastUpdatedAt:1615048406,sidebar:"version-5.4/docs",previous:{title:"package.json",permalink:"/5.4/package_json"},next:{title:"pnpm-workspace.yaml",permalink:"/5.4/pnpm-workspace_yaml"}},c=[{value:"Settings",id:"settings",children:[{value:"always-auth",id:"always-auth",children:[]},{value:"ca",id:"ca",children:[]},{value:"cafile",id:"cafile",children:[]},{value:"cert",id:"cert",children:[]},{value:"color",id:"color",children:[]},{value:"store-dir",id:"store-dir",children:[]},{value:"modules-dir",id:"modules-dir",children:[]},{value:"network-concurrency",id:"network-concurrency",children:[]},{value:"child-concurrency",id:"child-concurrency",children:[]},{value:"loglevel",id:"loglevel",children:[]},{value:"verify-store-integrity",id:"verify-store-integrity",children:[]},{value:"virtual-store-dir",id:"virtual-store-dir",children:[]},{value:"package-import-method",id:"package-import-method",children:[]},{value:"publish-branch",id:"publish-branch",children:[]},{value:"lockfile",id:"lockfile",children:[]},{value:"prefer-frozen-lockfile",id:"prefer-frozen-lockfile",children:[]},{value:"use-running-store-server",id:"use-running-store-server",children:[]},{value:"side-effects-cache",id:"side-effects-cache",children:[]},{value:"side-effects-cache-readonly",id:"side-effects-cache-readonly",children:[]},{value:"hoist",id:"hoist",children:[]},{value:"hoist-pattern",id:"hoist-pattern",children:[]},{value:"public-hoist-pattern",id:"public-hoist-pattern",children:[]},{value:"shamefully-hoist",id:"shamefully-hoist",children:[]},{value:"strict-peer-dependencies",id:"strict-peer-dependencies",children:[]},{value:"use-beta-cli",id:"use-beta-cli",children:[]},{value:"engine-strict",id:"engine-strict",children:[]},{value:"fetch-retries",id:"fetch-retries",children:[]},{value:"fetch-retry-factor",id:"fetch-retry-factor",children:[]},{value:"fetch-retry-mintimeout",id:"fetch-retry-mintimeout",children:[]},{value:"fetch-retry-maxtimeout",id:"fetch-retry-maxtimeout",children:[]},{value:"https-proxy",id:"https-proxy",children:[]},{value:"key",id:"key",children:[]},{value:"local-address",id:"local-address",children:[]},{value:"proxy",id:"proxy",children:[]},{value:"recursive-install",id:"recursive-install",children:[]},{value:"registry",id:"registry",children:[]},{value:"save-prefix",id:"save-prefix",children:[]},{value:"strict-ssl",id:"strict-ssl",children:[]},{value:"tag",id:"tag",children:[]},{value:"unsafe-perm",id:"unsafe-perm",children:[]},{value:"git-checks",id:"git-checks",children:[]},{value:"global-dir",id:"global-dir",children:[]},{value:"npm-path",id:"npm-path",children:[]}]}],o={toc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"pnpm gets its config settings from the command line, environment variables, and ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc")," files."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm config")," command can be used to update and edit the contents of the user and global ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc")," files."),Object(r.b)("p",null,"The four relevant files are:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"per-project config file (/path/to/my/project/.npmrc)"),Object(r.b)("li",{parentName:"ul"},"per-workspace config file (the directory that contains the ",Object(r.b)("inlineCode",{parentName:"li"},"pnpm-workspace.yaml")," file)"),Object(r.b)("li",{parentName:"ul"},"per-user config file (",Object(r.b)("inlineCode",{parentName:"li"},"~/.npmrc"),")"),Object(r.b)("li",{parentName:"ul"},"global config file (",Object(r.b)("inlineCode",{parentName:"li"},"$PREFIX/etc/npmrc"),")")),Object(r.b)("p",null,"All ",Object(r.b)("inlineCode",{parentName:"p"},".npmrc")," files are an ini-formatted list of ",Object(r.b)("inlineCode",{parentName:"p"},"key = value")," parameters."),Object(r.b)("h2",{id:"settings"},"Settings"),Object(r.b)("h3",{id:"always-auth"},"always-auth"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Force pnpm to always require authentication when accessing the registry, even for GET requests."),Object(r.b)("h3",{id:"ca"},"ca"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"The npm CA certificate")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String, Array or null"))),Object(r.b)("p",null,'The Certificate Authority signing certificate that is trusted for SSL connections to the registry.\nValues should be in PEM format (Windows calls it "Base-64 encoded X.509 (.CER)")\nwith newlines replaced by the string "\\n". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},'ca="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),Object(r.b)("p",null,'Set to null to only allow "known" registrars, or to a specific CA cert to trust only that specific signing authority.'),Object(r.b)("p",null,"Multiple CAs can be trusted by specifying an array of certificates:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-test"},'ca[]="..."\nca[]="..."\n')),Object(r.b)("p",null,"See also the ",Object(r.b)("inlineCode",{parentName:"p"},"strict-ssl")," config."),Object(r.b)("h3",{id:"cafile"},"cafile"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"A path to a file containing one or multiple Certificate Authority signing certificates.\nSimilar to the ca setting, but allows for multiple CA\u2019s, as well as for the\nCA information to be stored in a file on disk."),Object(r.b)("h3",{id:"cert"},"cert"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,'A client certificate to pass when accessing the registry. Values should be in PEM format\n(Windows calls it "Base-64 encoded X.509 (.CER)") with newlines replaced by the string "\\n". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-test"},'cert="-----BEGIN CERTIFICATE-----\\nXXXX\\nXXXX\\n-----END CERTIFICATE-----"\n')),Object(r.b)("p",null,'It is not the path to a certificate file (and there is no "certfile" option).'),Object(r.b)("h3",{id:"color"},"color"),Object(r.b)("p",null,"Added in: v4.1.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"auto")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"auto"),", ",Object(r.b)("strong",{parentName:"li"},"always"),", ",Object(r.b)("strong",{parentName:"li"},"never"))),Object(r.b)("p",null,"Controls colors in the output."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"auto")," - output uses colors when the stdout is a TTY (i.e. when the output goes straight to a terminal)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"always")," - ignore the difference between terminals and pipes. You\u2019ll rarely want this; in most scenarios,\nif you want color codes in your redirected output, you can instead pass a ",Object(r.b)("inlineCode",{parentName:"li"},"--color")," flag to the pnpm command\nto force it to use color codes. The default setting is almost always what you\u2019ll want."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"never")," - turns off colors. You can also turn off colors via the ",Object(r.b)("inlineCode",{parentName:"li"},"--no-color")," flag.")),Object(r.b)("h3",{id:"store-dir"},"store-dir"),Object(r.b)("p",null,"Added in: v4.2.0 (renamed from ",Object(r.b)("inlineCode",{parentName:"p"},"store"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"~/.pnpm-store")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"The location where all the packages are saved on the disk."),Object(r.b)("p",null,"The store should be always on the same disk on which installation is happening. So there will be one store per disk.\nIf there is a home directory on the current disk, then the store is created in ",Object(r.b)("inlineCode",{parentName:"p"},"<home dir>/.pnpm-store"),". If there is no\nhomedir on the disk, then the store is created in the root. For example, if installation is happening on disk ",Object(r.b)("inlineCode",{parentName:"p"},"D"),"\nthen the store will be created in ",Object(r.b)("inlineCode",{parentName:"p"},"D:\\.pnpm-store"),"."),Object(r.b)("p",null,"It is possible to set a store from a different disk but in that case pnpm will copy, not link, packages from the store.\nHard links are possible only inside a filesystem."),Object(r.b)("h3",{id:"modules-dir"},"modules-dir"),Object(r.b)("p",null,"Added in: v4.14.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"node_modules")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"The directory in which dependencies will be installed (instead of ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),")."),Object(r.b)("h3",{id:"network-concurrency"},"network-concurrency"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"16")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,"Controls the maximum number of HTTP requests that can be done simultaneously."),Object(r.b)("h3",{id:"child-concurrency"},"child-concurrency"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"5")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,"Controls the number of child processes run parallelly to build node modules."),Object(r.b)("h3",{id:"loglevel"},"loglevel"),Object(r.b)("p",null,"Added in: v4.13.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"info")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"debug"),", ",Object(r.b)("strong",{parentName:"li"},"info"),", ",Object(r.b)("strong",{parentName:"li"},"warn"),", ",Object(r.b)("strong",{parentName:"li"},"error"))),Object(r.b)("p",null,"What level of logs to report. Any logs at or higher than the given level will be shown.\nOr use ",Object(r.b)("inlineCode",{parentName:"p"},"--silent")," to turn off all logging."),Object(r.b)("h3",{id:"verify-store-integrity"},"verify-store-integrity"),Object(r.b)("p",null,"Added in: v1.8.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If false, doesn't check whether packages in the store were mutated."),Object(r.b)("h3",{id:"virtual-store-dir"},"virtual-store-dir"),Object(r.b)("p",null,"Added in: v4.1.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"node_modules/.pnpm")),Object(r.b)("li",{parentName:"ul"},"Types: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"The directory with links to the store. All direct and indirect dependencies of the project are linked into this directory."),Object(r.b)("p",null,"This is a useful setting that can solve issues with long paths on Windows. If you have some dependencies with very long paths,\nyou can select a virtual store in the root of your drive (for instance ",Object(r.b)("inlineCode",{parentName:"p"},"C:\\my-project-store"),")."),Object(r.b)("p",null,"Or you can set the virtual store to ",Object(r.b)("inlineCode",{parentName:"p"},".pnpm")," and add it to ",Object(r.b)("inlineCode",{parentName:"p"},".gitignore"),". This will make the stacktraces nicer as paths to\ndependencies will have one directory less."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"NOTE:")," the virtual store cannot be shared between several projects. Every project should have its own virtual store."),Object(r.b)("h3",{id:"package-import-method"},"package-import-method"),Object(r.b)("p",null,"Added in: v1.25.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"auto")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"auto"),", ",Object(r.b)("strong",{parentName:"li"},"hardlink"),", ",Object(r.b)("strong",{parentName:"li"},"copy"),", ",Object(r.b)("strong",{parentName:"li"},"clone"))),Object(r.b)("p",null,"Controls the way packages are imported from the store."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"auto")," - try to clone packages from the store. If cloning is not supported then hardlink packages from the store. If neither cloning nor linking is possible, falls back to copying"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"hardlink")," - hardlink packages from the store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"copy")," - copy packages from the store"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"clone")," - clone (aka copy-on-write or reflink) packages from the store")),Object(r.b)("h3",{id:"publish-branch"},"publish-branch"),Object(r.b)("p",null,"Added in: v4.11.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"master")),Object(r.b)("li",{parentName:"ul"},"Types: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,"The main branch of the repository which is used for publishing the latest changes."),Object(r.b)("h3",{id:"lockfile"},"lockfile"),Object(r.b)("p",null,"Added in: v1.32.0 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"shrinkwrap"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When set to ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", pnpm won't read or generate a ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," file."),Object(r.b)("h3",{id:"prefer-frozen-lockfile"},"prefer-frozen-lockfile"),Object(r.b)("p",null,"Added in: v1.37.1 (initially named ",Object(r.b)("inlineCode",{parentName:"p"},"prefer-frozen-shrinkwrap"),")"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")," (from v1.38.0)"),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true")," and the available ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm-lock.yaml")," satisfies the ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),"\nthen a headless installation is performed. A headless installation is faster than a regular one\nbecause it skips dependencies resolution and peers resolution."),Object(r.b)("h3",{id:"use-running-store-server"},"use-running-store-server"),Object(r.b)("p",null,"Added in: v2.5.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Only allows installation with a store server. If no store server is running, installation will fail."),Object(r.b)("h3",{id:"side-effects-cache"},"side-effects-cache"),Object(r.b)("p",null,"Added in: v1.31.0"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Stability: Experimental")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Use and cache the results of (pre/post)install hooks."),Object(r.b)("h3",{id:"side-effects-cache-readonly"},"side-effects-cache-readonly"),Object(r.b)("p",null,"Added in: v1.31.0"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"Stability: Experimental")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Only use the side effects cache if present, do not create it for new packages."),Object(r.b)("h3",{id:"hoist"},"hoist"),Object(r.b)("p",null,"Added in: v4.0.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"boolean"))),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", all dependencies are hoisted to ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". This makes unlisted dependencies accessible to\nall packages inside ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),"."),Object(r.b)("h3",{id:"hoist-pattern"},"hoist-pattern"),Object(r.b)("p",null,"Added in: v4.0.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"['","*","']")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"string[]"))),Object(r.b)("p",null,"Tells pnpm, which packages should be hoisted to ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules/.pnpm"),". By default, all packages are hoisted.\nHowever, if you know that only some buggy packages are requiring unlisted dependencies, you may hoist just them."),Object(r.b)("p",null,"For instance:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"hoist-pattern[]=*eslint*\nhoist-pattern[]=*babel*\n")),Object(r.b)("h3",{id:"public-hoist-pattern"},"public-hoist-pattern"),Object(r.b)("p",null,"Added in: v5.2.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"['@types/","*","']")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"string[]"))),Object(r.b)("p",null,"Unlike ",Object(r.b)("inlineCode",{parentName:"p"},"hoist-pattern"),", which hoists dependencies to a hidden modules directory inside\nthe virtual store, ",Object(r.b)("inlineCode",{parentName:"p"},"public-hoist-pattern")," hoists dependencies matching the pattern to the root modules directory.\nHoisting to the root modules directory means that application code will have access to\nphantom dependencies (dependencies that are not direct dependencies of the project)."),Object(r.b)("p",null,"This setting is useful when dealing with some buggy pluggable tools that don't resolve dependencies properly."),Object(r.b)("p",null,"For instance:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},"public-hoist-pattern[]=*plugin*\n")),Object(r.b)("p",null,"Note: Setting ",Object(r.b)("inlineCode",{parentName:"p"},"shamefully-hoist")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," is the same as setting ",Object(r.b)("inlineCode",{parentName:"p"},"public-hoist-pattern")," to ",Object(r.b)("inlineCode",{parentName:"p"},"*"),"."),Object(r.b)("h3",{id:"shamefully-hoist"},"shamefully-hoist"),Object(r.b)("p",null,"Added in: v1.34.0 (Renamed from ",Object(r.b)("inlineCode",{parentName:"p"},"shamefully-flatten")," in v4.0.0)"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"By default, pnpm creates a semistrict ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),". It means that your dependencies have access to undeclared dependencies\nbut your code does not. With this layout, most of the packages in the ecosystem work with no issues.\nHowever, if some tooling only works when the hoisted dependencies are in the root of ",Object(r.b)("inlineCode",{parentName:"p"},"node_modules"),", you can set this config to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),". "),Object(r.b)("h3",{id:"strict-peer-dependencies"},"strict-peer-dependencies"),Object(r.b)("p",null,"Added in: v2.15.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If true, commands fail on missing or invalid peer dependencies."),Object(r.b)("h3",{id:"use-beta-cli"},"use-beta-cli"),Object(r.b)("p",null,"Added in: v3.6.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"true"),", beta features of the CLI are used. This means that you may get some changes to the CLI functionality\nthat are breaking changes."),Object(r.b)("h3",{id:"engine-strict"},"engine-strict"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"If set to true, then pnpm will stubbornly refuse to install (or even consider installing) any package that claims\nto not be compatible with the current Node.js version."),Object(r.b)("p",null,"Regardless of this config, installation will always fail when a project (not a dependency) will specify an\nincompatible pnpm version in its ",Object(r.b)("inlineCode",{parentName:"p"},"engines")," field."),Object(r.b)("h3",{id:"fetch-retries"},"fetch-retries"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"2")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "retries" config for the retry module to use when fetching packages from the registry.'),Object(r.b)("h3",{id:"fetch-retry-factor"},"fetch-retry-factor"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"10")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "factor" config for the retry module to use when fetching packages.'),Object(r.b)("h3",{id:"fetch-retry-mintimeout"},"fetch-retry-mintimeout"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"10000 (10 seconds)")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "minTimeout" config for the retry module to use when fetching packages.'),Object(r.b)("h3",{id:"fetch-retry-maxtimeout"},"fetch-retry-maxtimeout"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"60000 (1 minute)")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Number"))),Object(r.b)("p",null,'The "maxTimeout" config for the retry module to use when fetching packages.'),Object(r.b)("h3",{id:"https-proxy"},"https-proxy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"url"))),Object(r.b)("p",null,"A proxy to use for outgoing https requests. If the ",Object(r.b)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," or ",Object(r.b)("inlineCode",{parentName:"p"},"https_proxy")," or\n",Object(r.b)("inlineCode",{parentName:"p"},"HTTP_PROXY")," or ",Object(r.b)("inlineCode",{parentName:"p"},"http_proxy")," environment variables are set, proxy settings will be honored by the underlying request library."),Object(r.b)("h3",{id:"key"},"key"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,'A client key to pass when accessing the registry. Values should be in PEM format with newlines replaced by the string "\\n". For example:'),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-text"},'key="-----BEGIN PRIVATE KEY-----\\nXXXX\\nXXXX\\n-----END PRIVATE KEY-----"\n')),Object(r.b)("p",null,'It is not the path to a key file (and there is no "keyfile" option).'),Object(r.b)("h3",{id:"local-address"},"local-address"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"undefined")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"IP Address"))),Object(r.b)("p",null,"The IP address of the local interface to use when making connections to the npm registry. Must be IPv4 in versions of Node prior to 0.12."),Object(r.b)("h3",{id:"proxy"},"proxy"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"null")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"url"))),Object(r.b)("p",null,"A proxy to use for outgoing http requests. If the HTTP_PROXY or http_proxy environment variables are set, proxy settings will be honored by the underlying request library."),Object(r.b)("h3",{id:"recursive-install"},"recursive-install"),Object(r.b)("p",null,"Added in: v5.4.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When ",Object(r.b)("inlineCode",{parentName:"p"},"false"),", ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm install")," will only install dependencies for the current project.\n",Object(r.b)("inlineCode",{parentName:"p"},"pnpm install -r")," will have to be used in order to install all dependencies of all projects in a monorepo."),Object(r.b)("h3",{id:"registry"},"registry"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",{parentName:"strong",href:"https://registry.npmjs.org/"},"https://registry.npmjs.org/"))),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"url"))),Object(r.b)("p",null,"The base URL of the npm package registry."),Object(r.b)("h3",{id:"save-prefix"},"save-prefix"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"'^'")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,"Configure how versions of packages installed to a ",Object(r.b)("inlineCode",{parentName:"p"},"package.json")," file get prefixed."),Object(r.b)("p",null,"For example, if a package has version ",Object(r.b)("inlineCode",{parentName:"p"},"1.2.3"),", by default its version is set to ",Object(r.b)("inlineCode",{parentName:"p"},"^1.2.3"),"\nwhich allows minor upgrades for that package, but after ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm config set save-prefix='~'"),"\nit would be set to ",Object(r.b)("inlineCode",{parentName:"p"},"~1.2.3")," which only allows patch upgrades."),Object(r.b)("p",null,"This config is ignored when the added package has a range specified. For instance,\n",Object(r.b)("inlineCode",{parentName:"p"},"pnpm add foo@2")," will add ",Object(r.b)("inlineCode",{parentName:"p"},"2")," to ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", regardless of the value of ",Object(r.b)("inlineCode",{parentName:"p"},"save-prefix"),"."),Object(r.b)("h3",{id:"strict-ssl"},"strict-ssl"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"true")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Whether or not to do SSL key validation when making requests to the registry via https."),Object(r.b)("p",null,"See also the ",Object(r.b)("inlineCode",{parentName:"p"},"ca")," config."),Object(r.b)("h3",{id:"tag"},"tag"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"latest")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"String"))),Object(r.b)("p",null,"If you ask pnpm to install a package and don\u2019t tell it a specific version, then it will install the specified tag."),Object(r.b)("p",null,"Also the tag that is added to the ",Object(r.b)("inlineCode",{parentName:"p"},"package@version")," specified by the ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm tag")," command, if no explicit tag is given."),Object(r.b)("h3",{id:"unsafe-perm"},"unsafe-perm"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"false if running as root, true otherwise")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"Set to true to suppress the UID/GID switching when running package scripts.\nIf set explicitly to false, then installing as a non-root user will fail."),Object(r.b)("h3",{id:"git-checks"},"git-checks"),Object(r.b)("p",null,"Added in: v4.11.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default : ",Object(r.b)("strong",{parentName:"li"},"true")," (since v5)"),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"Boolean"))),Object(r.b)("p",null,"When true, ",Object(r.b)("inlineCode",{parentName:"p"},"pnpm publish")," checks if current branch is your publish branch\n(master by default), clean, and up-to-date."),Object(r.b)("h3",{id:"global-dir"},"global-dir"),Object(r.b)("p",null,"Added in: v4.2.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Default: ",Object(r.b)("strong",{parentName:"li"},"<","Node path>/pnpm-global")),Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"Specify a custom directory to store global packages."),Object(r.b)("h3",{id:"npm-path"},"npm-path"),Object(r.b)("p",null,"Added in: v4.8.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Type: ",Object(r.b)("strong",{parentName:"li"},"path"))),Object(r.b)("p",null,"The location of the npm binary that pnpm uses for some actions (like publishing)."))}p.isMDXComponent=!0},3064:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),p=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=l,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||r;return n?a.a.createElement(m,b(b({ref:t},o),{},{components:n})):a.a.createElement(m,b({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:l,i[1]=b;for(var o=2;o<r;o++)i[o]=n[o];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);