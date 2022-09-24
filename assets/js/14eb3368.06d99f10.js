"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9817],{5031:function(e,t,n){n.d(t,{Z:function(){return Z}});n(7294);var i=n(6010),r=n(5019),a=n(9003),s=n(3702),c=n(3699),o=n(9524),l=n(7325),d=n(5944);function u(e){return(0,d.tZ)("svg",Object.assign({viewBox:"0 0 24 24"},e,{children:(0,d.tZ)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})}))}var h={breadcrumbsContainer:"breadcrumbsContainer_Z_bl",breadcrumbHomeIcon:"breadcrumbHomeIcon_OVgt"};function m(e){var t=e.children,n=e.href,i="breadcrumbs__link";return e.isLast?(0,d.tZ)("span",{className:i,itemProp:"name",children:t}):n?(0,d.tZ)(c.Z,{className:i,href:n,itemProp:"item",children:(0,d.tZ)("span",{itemProp:"name",children:t})}):(0,d.tZ)("span",{className:i,children:t})}function b(e){var t=e.children,n=e.active,r=e.index,a=e.addMicrodata;return(0,d.BX)("li",Object.assign({},a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},{className:(0,i.Z)("breadcrumbs__item",{"breadcrumbs__item--active":n}),children:[t,(0,d.tZ)("meta",{itemProp:"position",content:String(r+1)})]}))}function v(){var e=(0,o.Z)("/");return(0,d.tZ)("li",{className:"breadcrumbs__item",children:(0,d.tZ)(c.Z,{"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:(0,i.Z)("breadcrumbs__link",h.breadcrumbsItemLink),href:e,children:(0,d.tZ)(u,{className:h.breadcrumbHomeIcon})})})}function Z(){var e=(0,r.s1)(),t=(0,a.Ns)();return e?(0,d.tZ)("nav",{className:(0,i.Z)(s.k.docs.docBreadcrumbs,h.breadcrumbsContainer),"aria-label":(0,l.I)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.BX)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.tZ)(v,{}),e.map((function(t,n){var i=n===e.length-1;return(0,d.tZ)(b,{active:i,index:n,addMicrodata:!!t.href,children:(0,d.tZ)(m,{href:t.href,isLast:i,children:t.label})},n)}))]})}):null}},853:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});n(7294);var i=n(9488),r=n(5019),a=n(9524),s=n(6010),c=n(3699),o=n(2735),l=n(7325),d="cardContainer_fWXF",u="cardTitle_rnsV",h="cardDescription_PWke",m=n(5944);function b(e){var t=e.href,n=e.children;return(0,m.tZ)(c.Z,{href:t,className:(0,s.Z)("card padding--lg",d),children:n})}function v(e){var t=e.href,n=e.icon,i=e.title,r=e.description;return(0,m.BX)(b,{href:t,children:[(0,m.BX)("h2",{className:(0,s.Z)("text--truncate",u),title:i,children:[n," ",i]}),r&&(0,m.tZ)("p",{className:(0,s.Z)("text--truncate",h),title:r,children:r})]})}function Z(e){var t=e.item,n=(0,r.Wl)(t);return n?(0,m.tZ)(v,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){var t,n=e.item,i=(0,o.Z)(n.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,r.xz)(null!=(t=n.docId)?t:void 0);return(0,m.tZ)(v,{href:n.href,icon:i,title:n.label,description:null==a?void 0:a.description})}function f(e){var t=e.item;switch(t.type){case"link":return(0,m.tZ)(g,{item:t});case"category":return(0,m.tZ)(Z,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function p(e){return e.filter((function(e){return"category"!==e.type||!!(0,r.Wl)(e)}))}function N(e){var t=e.items,n=e.className;return(0,m.tZ)("section",{className:(0,s.Z)("row",n),children:p(t).map((function(e,t){return(0,m.tZ)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.tZ)(f,{item:e},t)},t)}))})}var k=n(1792),L=n(5350),_=n(4617),T=n(5031),y=n(3899),x="generatedIndexPage_vN6x",I="list_eTzJ",B="title_kItE";function w(e){var t=e.categoryGeneratedIndex;return(0,m.tZ)(i.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.Z)(t.image)})}function O(e){var t=e.categoryGeneratedIndex,n=(0,r.jA)();return(0,m.BX)(m.HY,{children:[(0,m.tZ)(i.d,{title:t.title,description:t.description,keywords:t.keywords,image:(0,a.Z)(t.image)}),(0,m.BX)("div",{className:x,children:[(0,m.tZ)(L.Z,{}),(0,m.tZ)(T.Z,{}),(0,m.tZ)(_.Z,{}),(0,m.BX)("header",{children:[(0,m.tZ)(y.Z,{as:"h1",className:B,children:t.title}),t.description&&(0,m.tZ)("p",{children:t.description})]}),(0,m.tZ)("article",{className:"margin-top--lg",children:(0,m.tZ)(N,{items:n.items,className:I})}),(0,m.tZ)("footer",{className:"margin-top--lg",children:(0,m.tZ)(k.Z,{previous:t.navigation.previous,next:t.navigation.next})})]})]})}function V(e){return(0,m.BX)(m.HY,{children:[(0,m.tZ)(w,Object.assign({},e)),(0,m.tZ)(O,Object.assign({},e))]})}},1792:function(e,t,n){n.d(t,{Z:function(){return s}});n(7294);var i=n(7325),r=n(3672),a=n(5944);function s(e){var t=e.previous,n=e.next;return(0,a.BX)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"}),children:[t&&(0,a.tZ)(r.Z,Object.assign({},t,{subLabel:(0,a.tZ)(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})})),n&&(0,a.tZ)(r.Z,Object.assign({},n,{subLabel:(0,a.tZ)(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0}))]})}},4617:function(e,t,n){n.d(t,{Z:function(){return o}});n(7294);var i=n(6010),r=n(7325),a=n(8801),s=n(3702),c=n(5944);function o(e){var t=e.className,n=(0,a.E)();return n.badge?(0,c.tZ)("span",{className:(0,i.Z)(t,s.k.docs.docVersionBadge,"badge badge--secondary"),children:(0,c.tZ)(r.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:n.label},children:"Version: {versionLabel}"})}):null}},5350:function(e,t,n){n.d(t,{Z:function(){return Z}});n(7294);var i=n(6010),r=n(9962),a=n(3699),s=n(7325),c=n(868),o=n(6409),l=n(3702),d=n(8801),u=n(5944);var h={unreleased:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.tZ)(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.tZ)("b",{children:n.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){var t=e.siteTitle,n=e.versionMetadata;return(0,u.tZ)(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.tZ)("b",{children:n.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function m(e){var t=h[e.versionMetadata.banner];return(0,u.tZ)(t,Object.assign({},e))}function b(e){var t=e.versionLabel,n=e.to,i=e.onClick;return(0,u.tZ)(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.tZ)("b",{children:(0,u.tZ)(a.Z,{to:n,onClick:i,children:(0,u.tZ)(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function v(e){var t,n=e.className,a=e.versionMetadata,s=(0,r.Z)().siteConfig.title,d=(0,c.gA)({failfast:!0}).pluginId,h=(0,o.J)(d).savePreferredVersionName,v=(0,c.Jo)(d),Z=v.latestDocSuggestion,g=v.latestVersionSuggestion,f=null!=Z?Z:(t=g).docs.find((function(e){return e.id===t.mainDocId}));return(0,u.BX)("div",{className:(0,i.Z)(n,l.k.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.tZ)("div",{children:(0,u.tZ)(m,{siteTitle:s,versionMetadata:a})}),(0,u.tZ)("div",{className:"margin-top--md",children:(0,u.tZ)(b,{versionLabel:g.label,to:f.path,onClick:function(){return h(g.name)}})})]})}function Z(e){var t=e.className,n=(0,d.E)();return n.banner?(0,u.tZ)(v,{className:t,versionMetadata:n}):null}},3899:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(3366),r=(n(7294),n(6010)),a=n(7325),s=n(107),c="anchorWithStickyNavbar_LWe7",o="anchorWithHideOnScrollNavbar_WYt5",l=n(5944),d=["as","id"];function u(e){var t=e.as,n=e.id,u=(0,i.Z)(e,d),h=(0,s.L)().navbar.hideOnScroll;return"h1"!==t&&n?(0,l.BX)(t,Object.assign({},u,{className:(0,r.Z)("anchor",h?o:c),id:n,children:[u.children,(0,l.tZ)("a",{className:"hash-link",href:"#"+n,title:(0,a.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"}),children:"\u200b"})]})):(0,l.tZ)(t,Object.assign({},u,{id:void 0}))}},3672:function(e,t,n){n.d(t,{Z:function(){return s}});n(7294);var i=n(6010),r=n(3699),a=n(5944);function s(e){var t=e.permalink,n=e.title,s=e.subLabel,c=e.isNext;return(0,a.BX)(r.Z,{className:(0,i.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[s&&(0,a.tZ)("div",{className:"pagination-nav__sublabel",children:s}),(0,a.tZ)("div",{className:"pagination-nav__label",children:n})]})}}}]);