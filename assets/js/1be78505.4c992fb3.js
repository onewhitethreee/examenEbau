"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9514,4248],{25228:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(67294),i=n(86010),r=n(97325),o=n(72957),l=n(43266);var c=n(23702),d="backToTopButton_sjWU",s="backToTopButtonShow_xfvO",u=n(35944);function m(){var e=function(e){var t=e.threshold,n=(0,a.useState)(!1),i=n[0],r=n[1],c=(0,a.useRef)(!1),d=(0,o.Ct)(),s=d.startScroll,u=d.cancelScroll;return(0,o.RF)((function(e,n){var a=e.scrollY,i=null==n?void 0:n.scrollY;i&&(c.current?c.current=!1:a>=i?(u(),r(!1)):a<t?r(!1):a+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,l.S)((function(e){e.location.hash&&(c.current=!0,r(!1))})),{shown:i,scrollToTop:function(){return s(0)}}}({threshold:300}),t=e.shown,n=e.scrollToTop;return(0,u.tZ)("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.Z)("clean-btn",c.k.common.backToTopButton,d,t&&s),type:"button",onClick:n})}},88635:function(e,t,n){n.r(t),n.d(t,{default:function(){return Ne}});var a=n(67294),i=n(86010),r=n(54715),o=n(60246),l=n(79488),c=n(23702),d=n(58801),s=n(84432),u=n(34513),m=n(25228),h=n(76775),b=n(13488),p=n(20107),v=n(96811),f=n(97325),Z=n(35944);function g(e){return(0,Z.tZ)("svg",Object.assign({width:"20",height:"20","aria-hidden":"true"},e,{children:(0,Z.BX)("g",{fill:"#7a7a7a",children:[(0,Z.tZ)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,Z.tZ)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})}))}var _="collapseSidebarButton_PEFL",k="collapseSidebarButtonIcon_kv0_";function C(e){var t=e.onClick;return(0,Z.tZ)("button",{type:"button",title:(0,f.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.Z)("button button--secondary button--outline",_),onClick:t,children:(0,Z.tZ)(g,{className:k})})}var I=n(65830),N=n(72957),S=n(63366),T=n(58755),x=Symbol("EmptyContext"),B=a.createContext(x);function y(e){var t=e.children,n=(0,a.useState)(null),i=n[0],r=n[1],o=(0,a.useMemo)((function(){return{expandedItem:i,setExpandedItem:r}}),[i]);return(0,Z.tZ)(B.Provider,{value:o,children:t})}var L=n(69003),w=n(54639),E=n(83699),M=n(51048),A=["item","onItemClick","activePath","level","index"];function H(e){var t=e.categoryLabel,n=e.onClick;return(0,Z.tZ)("button",{"aria-label":(0,f.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function P(e){var t=e.item,n=e.onItemClick,o=e.activePath,l=e.level,d=e.index,s=(0,S.Z)(e,A),u=t.items,m=t.label,h=t.collapsible,b=t.className,v=t.href,f=(0,p.L)().docs.sidebar.autoCollapseCategories,g=function(e){var t=(0,M.Z)();return(0,a.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,r.Wl)(e):void 0}),[e,t])}(t),_=(0,r._F)(t,o),k=(0,L.Mg)(v,o),C=(0,w.u)({initialState:function(){return!!h&&(!_&&t.collapsed)}}),I=C.collapsed,N=C.setCollapsed,y=function(){var e=(0,a.useContext)(B);if(e===x)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),P=y.expandedItem,F=y.setExpandedItem,X=function(e){void 0===e&&(e=!I),F(e?null:d),N(e)};return function(e){var t=e.isActive,n=e.collapsed,i=e.updateCollapsed,r=(0,T.D9)(t);(0,a.useEffect)((function(){t&&!r&&n&&i(!1)}),[t,r,n,i])}({isActive:_,collapsed:I,updateCollapsed:X}),(0,a.useEffect)((function(){h&&P&&P!==d&&f&&N(!0)}),[h,P,d,N,f]),(0,Z.BX)("li",{className:(0,i.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(l),"menu__list-item",{"menu__list-item--collapsed":I},b),children:[(0,Z.BX)("div",{className:(0,i.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,Z.tZ)(E.Z,Object.assign({className:(0,i.Z)("menu__link",{"menu__link--sublist":h,"menu__link--sublist-caret":!v&&h,"menu__link--active":_}),onClick:h?function(e){null==n||n(t),v?X(!1):(e.preventDefault(),X())}:function(){null==n||n(t)},"aria-current":k?"page":void 0,"aria-expanded":h?!I:void 0,href:h?null!=g?g:"#":g},s,{children:m})),v&&h&&(0,Z.tZ)(H,{categoryLabel:m,onClick:function(e){e.preventDefault(),X()}})]}),(0,Z.tZ)(w.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:I,children:(0,Z.tZ)(V,{items:u,tabIndex:I?-1:0,onItemClick:n,activePath:o,level:l+1})})]})}var F=n(2735),X=n(73115),j="menuExternalLink_NmtK",O=["item","onItemClick","activePath","level","index"];function W(e){var t=e.item,n=e.onItemClick,a=e.activePath,o=e.level,l=(e.index,(0,S.Z)(e,O)),d=t.href,s=t.label,u=t.className,m=(0,r._F)(t,a),h=(0,F.Z)(d);return(0,Z.tZ)("li",{className:(0,i.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",u),children:(0,Z.BX)(E.Z,Object.assign({className:(0,i.Z)("menu__link",!h&&j,{"menu__link--active":m}),"aria-current":m?"page":void 0,to:d},h&&{onClick:n?function(){return n(t)}:void 0},l,{children:[s,!h&&(0,Z.tZ)(X.Z,{})]}))},s)}var D="menuHtmlItem_M9Kj";function R(e){var t=e.item,n=e.level,a=e.index,r=t.value,o=t.defaultStyle,l=t.className;return(0,Z.tZ)("li",{className:(0,i.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(n),o&&[D,"menu__list-item"],l),dangerouslySetInnerHTML:{__html:r}},a)}var z=["item"];function Y(e){var t=e.item,n=(0,S.Z)(e,z);switch(t.type){case"category":return(0,Z.tZ)(P,Object.assign({item:t},n));case"html":return(0,Z.tZ)(R,Object.assign({item:t},n));default:return(0,Z.tZ)(W,Object.assign({item:t},n))}}var K=["items"];function U(e){var t=e.items,n=(0,S.Z)(e,K);return(0,Z.tZ)(y,{children:t.map((function(e,t){return(0,Z.tZ)(Y,Object.assign({item:e,index:t},n),t)}))})}var V=(0,a.memo)(U),G="menu_SIkG",q="menuWithAnnouncementBar_GW3s";function J(e){var t=e.path,n=e.sidebar,r=e.className,o=function(){var e=(0,I.nT)().isActive,t=(0,a.useState)(e),n=t[0],i=t[1];return(0,N.RF)((function(t){var n=t.scrollY;e&&i(0===n)}),[e]),e&&n}();return(0,Z.tZ)("nav",{className:(0,i.Z)("menu thin-scrollbar",G,o&&q,r),children:(0,Z.tZ)("ul",{className:(0,i.Z)(c.k.docs.docSidebarMenu,"menu__list"),children:(0,Z.tZ)(V,{items:n,activePath:t,level:1})})})}var Q="sidebar_njMd",$="sidebarWithHideableNavbar_wUlq",ee="sidebarHidden_VK0M",te="sidebarLogo_isFc";function ne(e){var t=e.path,n=e.sidebar,a=e.onCollapse,r=e.isHidden,o=(0,p.L)(),l=o.navbar.hideOnScroll,c=o.docs.sidebar.hideable;return(0,Z.BX)("div",{className:(0,i.Z)(Q,l&&$,r&&ee),children:[l&&(0,Z.tZ)(v.Z,{tabIndex:-1,className:te}),(0,Z.tZ)(J,{path:t,sidebar:n}),c&&(0,Z.tZ)(C,{onClick:a})]})}var ae=a.memo(ne),ie=n(52600),re=n(53086),oe=function(e){var t=e.sidebar,n=e.path,a=(0,ie.e)();return(0,Z.tZ)("ul",{className:(0,i.Z)(c.k.docs.docSidebarMenu,"menu__list"),children:(0,Z.tZ)(V,{items:t,activePath:n,onItemClick:function(e){"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function le(e){return(0,Z.tZ)(re.Zo,{component:oe,props:e})}var ce=a.memo(le);function de(e){var t=(0,b.i)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,Z.BX)(Z.HY,{children:[n&&(0,Z.tZ)(ae,Object.assign({},e)),a&&(0,Z.tZ)(ce,Object.assign({},e))]})}var se="expandButton_m80_",ue="expandButtonIcon_BlDH";function me(e){var t=e.toggleSidebar;return(0,Z.tZ)("div",{className:se,title:(0,f.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,f.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,Z.tZ)(g,{className:ue})})}var he="docSidebarContainer_b6E3",be="docSidebarContainerHidden_b3ry";function pe(e){var t,n=e.children,i=(0,s.V)();return(0,Z.tZ)(a.Fragment,{children:n},null!=(t=null==i?void 0:i.name)?t:"noSidebar")}function ve(e){var t=e.sidebar,n=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,o=(0,h.TH)().pathname,l=(0,a.useState)(!1),d=l[0],s=l[1],u=(0,a.useCallback)((function(){d&&s(!1),r((function(e){return!e}))}),[r,d]);return(0,Z.BX)("aside",{className:(0,i.Z)(c.k.docs.docSidebarContainer,he,n&&be),onTransitionEnd:function(e){e.currentTarget.classList.contains(he)&&n&&s(!0)},children:[(0,Z.tZ)(pe,{children:(0,Z.tZ)(de,{sidebar:t,path:o,onCollapse:u,isHidden:d})}),d&&(0,Z.tZ)(me,{toggleSidebar:u})]})}var fe={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function Ze(e){var t=e.hiddenSidebarContainer,n=e.children,a=(0,s.V)();return(0,Z.tZ)("main",{className:(0,i.Z)(fe.docMainContainer,(t||!a)&&fe.docMainContainerEnhanced),children:(0,Z.tZ)("div",{className:(0,i.Z)("container padding-top--md padding-bottom--lg",fe.docItemWrapper,t&&fe.docItemWrapperEnhanced),children:n})})}var ge="docPage__5DB",_e="docsWrapper_BCFX";function ke(e){var t=e.children,n=(0,s.V)(),i=(0,a.useState)(!1),r=i[0],o=i[1];return(0,Z.BX)(u.Z,{wrapperClassName:_e,children:[(0,Z.tZ)(m.Z,{}),(0,Z.BX)("div",{className:ge,children:[n&&(0,Z.tZ)(ve,{sidebar:n.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:o}),(0,Z.tZ)(Ze,{hiddenSidebarContainer:r,children:t})]})]})}var Ce=n(74248),Ie=n(33647);function Ne(e){var t=e.versionMetadata,n=(0,r.hI)(e);if(!n)return(0,Z.tZ)(Ce.default,{});var a=n.docElement,u=n.sidebarName,m=n.sidebarItems;return(0,Z.BX)(Z.HY,{children:[(0,Z.tZ)(Ie.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),(0,Z.tZ)(l.FG,{className:(0,i.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className),children:(0,Z.tZ)(d.q,{version:t,children:(0,Z.tZ)(s.b,{name:u,items:m,children:(0,Z.tZ)(ke,{children:a})})})})]})}},74248:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});n(67294);var a=n(97325),i=n(79488),r=n(34513),o=n(35944);function l(){return(0,o.BX)(o.HY,{children:[(0,o.tZ)(i.d,{title:(0,a.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),(0,o.tZ)(r.Z,{children:(0,o.tZ)("main",{className:"container margin-vert--xl",children:(0,o.tZ)("div",{className:"row",children:(0,o.BX)("div",{className:"col col--6 col--offset-3",children:[(0,o.tZ)("h1",{className:"hero__title",children:(0,o.tZ)(a.Z,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,o.tZ)("p",{children:(0,o.tZ)(a.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,o.tZ)("p",{children:(0,o.tZ)(a.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})})]})}}}]);