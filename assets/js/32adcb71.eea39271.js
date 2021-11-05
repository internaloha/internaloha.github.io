"use strict";(self.webpackChunkInternAloha=self.webpackChunkInternAloha||[]).push([[2693],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return h}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,d=c["".concat(l,".").concat(h)]||c[h]||p[h]||o;return r?a.createElement(d,i(i({ref:t},m),{},{components:r})):a.createElement(d,i({ref:t},m))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7500:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return m},toc:function(){return p},default:function(){return h}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],s={title:"Morea Version 3.0 release"},l=void 0,u={permalink:"/blog/2021/08/01/morea-version-3",source:"@site/blog/2021-08-01-morea-version-3.md",title:"Morea Version 3.0 release",description:"The Morea team is delighted to announce a new major release of the system.  This release should be mostly backward compatible with existing Morea instructor content, though there are extensive changes (and simplifications!) to the way sites are developed and managed.",date:"2021-08-01T00:00:00.000Z",formattedDate:"August 1, 2021",tags:[],readingTime:2.64,truncated:!1,authors:[],nextItem:{title:"Fix font loading over https",permalink:"/blog/2016/08/09/font-fix"}},m={authorsImageUrls:[]},p=[{value:"Summary of changes",id:"summary-of-changes",children:[],level:2},{value:"Migrating your V2 content to V3",id:"migrating-your-v2-content-to-v3",children:[],level:2},{value:"Getting started",id:"getting-started",children:[],level:2}],c={toc:p};function h(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Morea team is delighted to announce a new major release of the system.  This release should be mostly backward compatible with existing Morea instructor content, though there are extensive changes (and simplifications!) to the way sites are developed and managed."),(0,o.kt)("h2",{id:"summary-of-changes"},"Summary of changes"),(0,o.kt)("p",null,"Here is a summary of the changes from Version 2:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Morea 3 uses the latest releases of Jekyll (Version 4.2.0), Bootstrap (5), Bootswatch (5), FullCalendar (5.8), and ChartJS (3.5).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Create a new Morea 3 site using the GitHub "template" mechanism.  Templates have advantages over the previous approach of cloning: you can create a private repository even though the template is a public repository, and you can create multiple repositories in a single organization from the same template.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Morea 3 sites are automatically built and deployed via GitHub Actions whenever there is a commit to the main branch. Unlike Morea 2, Morea 3 does not use custom scripts (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"morea-run-local.sh"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"morea-publish.sh"),", etc.).")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Morea 3 does not require local management of multiple branches.  Unlike Morea 2, there are no "src" and "gh-pages" subdirectories.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To build and run a Morea 3 site locally, you no longer use a custom script (",(0,o.kt)("inlineCode",{parentName:"p"},"morea-run-local.sh"),"). Instead, you use the standard Jekyll command ",(0,o.kt)("inlineCode",{parentName:"p"},"bundle exec jekyll serve"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To publish a Morea 3 site, you no longer use a special script (",(0,o.kt)("inlineCode",{parentName:"p"},"morea-publish.sh"),"). Instead, you just commit your changes and push your repository to GitHub. Morea 3 uses GitHub Actions to automatically build and publish the site whenever there is a commit to the main branch in GitHub.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Morea 3 is (finally!) cross-platform: there should be no significant differences between development on MacOS, Linux, and Windows platforms."))),(0,o.kt)("p",null,"Astute Morea users will also observe that ",(0,o.kt)("a",{parentName:"p",href:"https://morea-framework.github.io"},"https://morea-framework.github.io")," has been reimplemented using Docusaurus.  This will make documentation easier to maintain."),(0,o.kt)("h2",{id:"migrating-your-v2-content-to-v3"},"Migrating your V2 content to V3"),(0,o.kt)("p",null,"Instructors who have existing Morea V2 sites for a course taught in a prior semester and who wish to build a new Morea site for a future semester will need to migrate their content.  Here are the issues that have been discovered with this migration:"),(0,o.kt)("p",null,'In Morea 3, Assessments are no longer "page fragments" (like Outcomes), but rather their own page. This leads to several breaking changes:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The morea_summary field is now required for Assessment pages."),(0,o.kt)("li",{parentName:"ul"},"The URL for interior linking to an Assessment page has changed. Please see ",(0,o.kt)("a",{parentName:"li",href:"/docs/instructors/linking-in-morea"},"this page"),".")),(0,o.kt)("p",null,"Morea 3 updates JSChart from Version 1 to Version 3. As a result:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pages that embed JSChart graphs must be updated to the JSChart 3 API. For example, see the ",(0,o.kt)("a",{parentName:"li",href:"https://morea-framework.github.io/morea/morea/example-javascript/assessment-javascript-1.html"},"example Morea assessment page"),".")),(0,o.kt)("p",null,"Morea 3 updates Bootstrap from Version 3 to Version 5. As a result:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pages that embed Bootstrap CSS and HTML must be updated to Bootstrap Version 5.")),(0,o.kt)("h2",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"If you are a current user of Morea, please read the Getting Started section of the Instructor Guide and try building a new site using your old Morea files.  If you run into problems, please create an issue or send an email so we can address it."),(0,o.kt)("p",null,"A list of known issues and desired enhancements for Morea 3 is available at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/morea-framework/morea/issues"},"https://github.com/morea-framework/morea/issues"),"."))}h.isMDXComponent=!0}}]);