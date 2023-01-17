"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[331],{4401:function(e,t,r){r.d(t,{V:function(){return o}});var a=r(9307),n=r(5791),s=r(4316),l=r(950),o=e=>{let{title:t,subtitle:r,error:o}=e;return(0,a.createElement)(n.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},o),(0,a.createElement)(l.Z,null))}},4316:function(e,t,r){var a=r(9307),n=r(5736);t.Z=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,n.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,n.__)(r,"wp-module-onboarding")))}},5791:function(e,t,r){r.d(t,{Z:function(){return g}});var a=r(9307),n=(r(5609),r(4184)),s=r.n(n),l=r(5158),o=r(6974),i=r(2200),d=r(6989),u=r.n(d),c=r(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:r}=e;const n=(0,o.TH)(),d=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==d||d.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,l.speak)(t,"assertive")}(n,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){u()({url:(0,c.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:n.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=n.pathname}),[n.pathname]),(0,a.createElement)("div",{className:s()("nfd-onboarding-layout",t)},r)};const h=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var g=e=>{let{className:t="",children:r,isBgPrimary:n=!1,isCentered:l=!1,isVerticallyCentered:o=!1,isContained:i=!1,isPadded:d=!1,isFadeIn:u=!0}=e;const c=i?h:a.Fragment;return(0,a.createElement)(m,{className:s()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":u},{"is-bg-primary":n},{"is-centered":l},{"is-vertically-centered":o},{"is-padded":d})},(0,a.createElement)(c,null,r))}},7004:function(e,t,r){r.d(t,{L:function(){return i},Y:function(){return o}});var a=r(9307),n=r(5791),s=r(4316),l=r(950),o=e=>{let{title:t,subtitle:r}=e;return(0,a.createElement)(n.Z,{className:"step-loader",isVerticallyCentered:!0},(0,a.createElement)(s.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-loader__logo-container"},(0,a.createElement)("div",{className:"step-loader__logo"})),(0,a.createElement)(l.Z,null))},i=()=>(0,a.createElement)("div",{className:"image-upload-loader--loading-box"},(0,a.createElement)("div",{className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,r){var a=r(9307),n=r(9685),s=r(9818),l=r(5736);t.Z=e=>{let{question:t=(0,l.__)("Need Help?","wp-module-onboarding"),urlLabel:r=(0,l.__)("Hire our Experts","wp-module-onboarding")}=e;const o=(0,s.select)(n.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:o,target:"_blank"},r))}},1340:function(e,t,r){r.d(t,{U:function(){return c},g:function(){return g}});var a=r(9307),n=r(9818),s=r(7004),l=r(9685),o=r(7625),i=r(2200),d=r(4401),u=r(5736),c=e=>{let{children:t}=e;const{storedThemeStatus:r,brandName:c}=(0,n.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),m=(e=>({loader:{title:(0,u.sprintf)(
/* translators: %s: Brand */
(0,u.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,u.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,u.sprintf)(
/* translators: %s: Brand */
(0,u.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,u.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,u.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(c),{updateThemeStatus:h}=(0,n.useDispatch)(l.h),g=async()=>{const e=await(0,o.YL)(i.DY);return null!=e&&e.error?i.vv:e.body.status};return(0,a.useEffect)((async()=>{if(r===i.a0){const e=await g();switch(e){case i.Zh:setTimeout((async()=>{if(await g()!==i.GV)return h(i.vv);window.location.reload()}),i.YU);break;case i.GV:window.location.reload();break;default:h(e)}}}),[r]),(0,a.createElement)(a.Fragment,null,(()=>{switch(r){case i.vv:return(0,a.createElement)(d.V,{title:m.errorState.title,subtitle:m.errorState.subtitle,error:m.errorState.error});case i.GV:return t;default:return(0,a.createElement)(s.Y,{title:m.loader.title,subtitle:m.loader.subtitle})}})())},m=r(3421),h=r(1392),g=e=>{let{children:t}=e;const[r,o]=(0,a.useState)(i.Sr),{storedPluginsStatus:c,brandName:g}=(0,n.useSelect)((e=>({storedPluginsStatus:e(l.h).getPluginsStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),p=(e=>({loader:{title:(0,u.sprintf)(
/* translators: 1: Brand 2: Site */
(0,u.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,h.I)("Site")),subtitle:(0,u.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,u.sprintf)(
/* translators: 1: Brand 2: Site */
(0,u.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,h.I)("Site")),subtitle:(0,u.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,u.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(g),{updatePluginsStatus:w}=(0,n.useDispatch)(l.h),_=async()=>{const e=await(0,m.qC)(i.Gv);return null!=e&&e.error?i.sG:e.body.status};return(0,a.useEffect)((async()=>{if(o(c[i.Gv]),c[i.Gv]===i.Ck){const e=await _();switch(e){case i.Sr:setTimeout((async()=>{if(await _()!==i.ye)return o(i.sG);window.location.reload()}),i.sr);break;case i.ye:window.location.reload();break;default:c[i.Gv]=e,o(e),w(c)}}}),[c]),(0,a.createElement)(a.Fragment,null,(()=>{switch(r){case i.sG:return(0,a.createElement)(d.V,{title:p.errorState.title,subtitle:p.errorState.subtitle,error:p.errorState.error});case i.ye:return t;default:return(0,a.createElement)(s.Y,{title:p.loader.title,subtitle:p.loader.subtitle})}})())}},5331:function(e,t,r){r.r(t);var a=r(9307),n=r(9818),s=r(4333),l=r(5791),o=r(1340),i=r(6332),d=r(2200),u=r(9685);t.default=()=>{const{headerMenu:e}=(0,n.useSelect)((e=>({headerMenu:e(u.h).getHeaderMenuData()})),[]),[t,r]=(0,a.useState)(),c=(0,s.useViewportMatch)("medium"),{setDrawerActiveView:m,setIsDrawerOpened:h,setIsDrawerSuppressed:g,setSidebarActiveView:p,setIsHeaderNavigationEnabled:w}=(0,n.useDispatch)(u.h);return(0,a.useEffect)((()=>{r(e)}),[e]),(0,a.useEffect)((()=>{c&&h(!0),p(d.Jq),g(!1),m(d.qO),w(!0)}),[]),(0,a.createElement)(o.U,null,(0,a.createElement)(i.V3,null,(0,a.createElement)(l.Z,{className:"theme-header-menu-preview"},(0,a.createElement)("div",{className:"theme-header-menu-preview__title-bar"},(0,a.createElement)("div",{className:"theme-header-menu-preview__title-bar__browser"},(0,a.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-header-menu-preview__title-bar__browser__dot"}))),(0,a.createElement)("div",{className:"theme-header-menu-preview__live-preview-container"},t&&(0,a.createElement)(i.i5,{blockGrammer:t,styling:"custom",viewportWidth:1300})))))}}}]);