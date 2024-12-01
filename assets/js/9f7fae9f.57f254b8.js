"use strict";(self.webpackChunkzerox_docs=self.webpackChunkzerox_docs||[]).push([[970],{8385:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>t});var r=o(4848),s=o(8453);const a={sidebar_position:3},l="Deploy Package",d={id:"for-developers/deploy-package",title:"Deploy Package",description:"Let's translate docs/intro.md to French.",source:"@site/docs/for-developers/deploy-package.md",sourceDirName:"for-developers",slug:"/for-developers/deploy-package",permalink:"/zerox-website/for-developers/deploy-package",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/for-developers/deploy-package.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Develop Package",permalink:"/zerox-website/for-developers/develop-package"},next:{title:"API Reference",permalink:"/zerox-website/for-developers/api-reference"}},c={},t=[{value:"Configure i18n",id:"configure-i18n",level:2},{value:"Translate a doc",id:"translate-a-doc",level:2},{value:"Start your localized site",id:"start-your-localized-site",level:2},{value:"Add a Locale Dropdown",id:"add-a-locale-dropdown",level:2},{value:"Build your localized site",id:"build-your-localized-site",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deploy-package",children:"Deploy Package"})}),"\n",(0,r.jsxs)(n.p,{children:["Let's translate ",(0,r.jsx)(n.code,{children:"docs/intro.md"})," to French."]}),"\n",(0,r.jsx)(n.h2,{id:"configure-i18n",children:"Configure i18n"}),"\n",(0,r.jsxs)(n.p,{children:["Modify ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," to add support for the ",(0,r.jsx)(n.code,{children:"fr"})," locale:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en', 'fr'],\n  },\n};\n"})}),"\n",(0,r.jsx)(n.h2,{id:"translate-a-doc",children:"Translate a doc"}),"\n",(0,r.jsxs)(n.p,{children:["Copy the ",(0,r.jsx)(n.code,{children:"docs/intro.md"})," file to the ",(0,r.jsx)(n.code,{children:"i18n/fr"})," folder:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"mkdir -p i18n/fr/docusaurus-plugin-content-docs/current/\n\ncp docs/intro.md i18n/fr/docusaurus-plugin-content-docs/current/intro.md\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Translate ",(0,r.jsx)(n.code,{children:"i18n/fr/docusaurus-plugin-content-docs/current/intro.md"})," in French."]}),"\n",(0,r.jsx)(n.h2,{id:"start-your-localized-site",children:"Start your localized site"}),"\n",(0,r.jsx)(n.p,{children:"Start your site on the French locale:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start -- --locale fr\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Your localized site is accessible at ",(0,r.jsx)(n.a,{href:"http://localhost:3000/fr/",children:"http://localhost:3000/fr/"})," and the ",(0,r.jsx)(n.code,{children:"Getting Started"})," page is translated."]}),"\n",(0,r.jsx)(n.admonition,{type:"caution",children:(0,r.jsx)(n.p,{children:"In development, you can only use one locale at a time."})}),"\n",(0,r.jsx)(n.h2,{id:"add-a-locale-dropdown",children:"Add a Locale Dropdown"}),"\n",(0,r.jsx)(n.p,{children:"To navigate seamlessly across languages, add a locale dropdown."}),"\n",(0,r.jsxs)(n.p,{children:["Modify the ",(0,r.jsx)(n.code,{children:"docusaurus.config.js"})," file:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"export default {\n  themeConfig: {\n    navbar: {\n      items: [\n        // highlight-start\n        {\n          type: 'localeDropdown',\n        },\n        // highlight-end\n      ],\n    },\n  },\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"The locale dropdown now appears in your navbar:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Locale Dropdown",src:o(7305).A+"",width:"370",height:"302"})}),"\n",(0,r.jsx)(n.h2,{id:"build-your-localized-site",children:"Build your localized site"}),"\n",(0,r.jsx)(n.p,{children:"Build your site for a specific locale:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build -- --locale fr\n"})}),"\n",(0,r.jsx)(n.p,{children:"Or build your site to include all the locales at once:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},7305:(e,n,o)=>{o.d(n,{A:()=>r});const r=o.p+"assets/images/localeDropdown-f0d995e751e7656a1b0dbbc1134e49c2.png"},8453:(e,n,o)=>{o.d(n,{R:()=>l,x:()=>d});var r=o(6540);const s={},a=r.createContext(s);function l(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);