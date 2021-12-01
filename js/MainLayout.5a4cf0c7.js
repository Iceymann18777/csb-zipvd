(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MainLayout"],{"000a":function(t,e,a){"use strict";a("922f")},"21b2":function(t,e,a){"use strict";a("e4c4")},4593:function(t,e,a){"use strict";a("9652")},"530e":function(t,e,a){},"64e2":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("swap-button",t._g(t._b({staticClass:"button-cancel",attrs:{icon:"",large:""}},"swap-button",t.$attrs,!1),t.$listeners),[a("svg-icon",{staticClass:"button-cancel__i-cross",attrs:{"aria-label":"Cancel creation",name:"cross"}})],1)},s=[],n=(a("7f28"),a("2877")),r={},o=Object(n["a"])(r,i,s,!1,null,null,null);e["a"]=o.exports},"69b9":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-expansion-panels",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closePanels,expression:"closePanels"}],staticClass:"profile-list",attrs:{disabled:t.disabled},model:{value:t.panels,callback:function(e){t.panels=e},expression:"panels"}},[a("v-expansion-panel",{staticClass:"profile-list__inner"},[a("v-expansion-panel-header",{staticClass:"profile-list__header",attrs:{"hide-actions":t.isDesktop}},[a("div",{staticClass:"profile-list__header-wrapper"},[a("v-avatar",{staticClass:"profile-list__avatar-wrapper",style:t.backgroundAvatar,attrs:{height:"25","min-width":"25",width:"21"}},[t.disabled?t._e():a("svg-icon",{staticClass:"profile-list__avatar-icon",attrs:{name:"user"}})],1),a("span",{staticClass:"profile-list__name"},[t._v(t._s(t.currentProfile.username))])],1),a("svg-icon",{class:["profile-list__arrow-icon",t.isOpenPanel&&"profiles-list__arrow-icon--active"],attrs:{name:"arrow"}})],1),a("v-expansion-panel-content",[a("v-list",{staticClass:"profile-list__list-account py-0"},[t._l(t.restProfiles,(function(e){return a("v-list-item",{key:e.accountId,staticClass:"profile-list__list-item",on:{click:function(a){return t.setProfile(e.id)}}},[a("v-avatar",{staticClass:"profile-list__avatar-wrapper",style:"background-image: "+t.getAvatar(e),attrs:{height:"25","min-width":"25",width:"25"}},[a("svg-icon",{staticClass:"profile-list__avatar-icon",attrs:{name:"user"}})],1),a("span",[t._v(t._s(e.username))])],1)})),a("button",{staticClass:"profile-list__add-new-profile",on:{click:t.toSecurityInfo}},[t._v("+ Add profile")])],2)],1)],1)],1)},s=[],n=(a("4de4"),a("d3b7"),a("159b"),a("7db0"),a("e762")),r=a("0f85"),o="#919191",l={name:"ProfileList",inject:["mediaQueries"],props:{disabled:{type:Boolean,default:!1}},data:function(){return{panels:[],currentProfile:r["b"].getCurrentProfile(),profiles:r["b"].getProfiles(),subscriptions:[]}},computed:{isDesktop:function(){return this.mediaQueries.desktop},isOpenPanel:function(){return 0===this.panels},restProfiles:function(){var t=this;return this.profiles.filter((function(e){return e.id!==t.currentProfile.id}))},backgroundAvatar:function(){return this.disabled?"background-color: ".concat(o):"background-image: ".concat(this.getAvatar(this.currentProfile))}},mounted:function(){this.subscribeToUpdates()},beforeDestroy:function(){this.subscriptions.forEach((function(t){return t.unsubscribe()}))},methods:{closePanels:function(){this.panels=[]},setProfile:function(t){r["b"].setCurrentProfile(t),this.closePanels()},getAvatar:function(t){var e=t.id,a=this.profiles.find((function(t){return t.id===e})),i=a.colorScheme,s='url("data:image/svg+xml;base64,'.concat(n["a"].encode(i.background),'")');return s},subscribeToUpdates:function(){var t=this;this.subscriptions.push(r["b"].subscribe(r["a"].UPDATE_PROFILES,(function(e){t.profiles=e}))),this.subscriptions.push(r["b"].subscribe(r["a"].UPDATE_CURRENT_PROFILE,(function(e){t.currentProfile=e})))},toSecurityInfo:function(){return this.$router.push({name:"SecurityInfo"})}}},c=l,u=(a("4593"),a("2877")),d=Object(u["a"])(c,i,s,!1,null,null,null);e["a"]=d.exports},"7f28":function(t,e,a){"use strict";a("530e")},"922f":function(t,e,a){},9652:function(t,e,a){},a5d5:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"swap-logo"},[a("svg-icon",{staticClass:"swap-logo__logo-icon",attrs:{name:"logo"}}),a("h2",{staticClass:"swap-logo__logo-text"},[t._v("Swap.io")])],1)},s=[],n={name:"SwapLogo"},r=n,o=(a("eba7"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports},bf45:function(t,e,a){},df35:function(t,e,a){},e0f5:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-layout"},[a("main-header",{staticClass:"main-layout__main-header"}),a("router-view"),a("match-media",{scopedSlots:t._u([{key:"default",fn:function(e){var i=e.desktop;return[i?t._e():a("main-layout-tabs",{staticClass:"main-layout__tabs"})]}}])})],1)},s=[],n=a("fd99"),r=a("f0bc"),o=a("f5ac"),l={name:"MainLayout",components:{MainHeader:r["a"],MainLayoutTabs:o["a"],MatchMedia:n["a"]}},c=l,u=(a("000a"),a("2877")),d=Object(u["a"])(c,i,s,!1,null,null,null);e["default"]=d.exports},e2ea:function(t,e,a){"use strict";a("bf45")},e4c4:function(t,e,a){},eba7:function(t,e,a){"use strict";a("df35")},f0bc:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("match-media",{staticClass:"main-header",attrs:{"wrapper-tag":"header"},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.desktop,s=e.phone;return[t.disabled?a("div",{staticClass:"main-header__logo"},[a("swap-logo")],1):a("router-link",{staticClass:"main-header__logo",attrs:{to:{name:"Wallets"}}},[a("swap-logo")],1),t.disabled&&s?a("v-button-cancel",{staticClass:"main-header__button-cancel",on:{click:t.cancel}}):t._e(),i?a("div",{staticClass:"main-header__content"},[a("main-header-tabs",{staticClass:"main-header__tabs",attrs:{disabled:t.disabled}}),t.hasProfile?a("div",{staticClass:"main-header__notifications"},[a("v-menu",{attrs:{disabled:t.disabled,"content-class":"main-header__notifications-menu",left:"","offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,s=e.attrs;return[a("div",t._g(t._b({staticClass:"main-header__notifications-wrapper"},"div",s,!1),i),[a("v-badge",{attrs:{content:t.notifications.length,value:t.notificationCount,color:"red",overlap:""}},[a("svg-icon",{class:["main-header__notifications-icon",t.disabled&&"main-header__notifications-icon--disabled"],attrs:{name:"bell"}})],1)],1)]}}],null,!0)},[a("v-list",t._l(t.notifications,(function(e,i){return a("v-list-item",{key:i},[a("v-list-item-title",{staticClass:"main-header__notification"},[a("div",{staticClass:"main-header__notification-icon"},[a("v-icon",{attrs:{size:"18"}},[t._v("mdi-arrow-bottom-left")])],1),a("div",{staticClass:"main-header__notification-text"},[a("span",{staticClass:"main-header__notification-title"},[t._v(" "+t._s(e.type===t.$options.INCOMING_TRANSACTION?"Incoming transaction":"Incoming invoice")+" ")]),a("span",{staticClass:"main-header__notification-value main-header__notification-value--green"},[t._v(" "+t._s(e.currency)+t._s(e.type===t.$options.INCOMING_TRANSACTION?" + ":"")+t._s(e.value)+" ")])])])],1)})),1)],1)],1):t._e(),t.hasProfile?a("div",{staticClass:"main-header__profile"},[a("profile-list",t._b({},"profile-list",{disabled:t.disabled},!1))],1):t._e()],1):t._e(),!i&&t.showBurgerButton?a("swap-button",{staticClass:"main-header__burger-button",attrs:{icon:"",large:""},on:{click:t.openWalletList}},[a("svg-icon",{staticClass:"main-header__burger-icon",attrs:{name:"icon-burger"}})],1):t._e()]}}])})},s=[],n=(a("d3b7"),a("159b"),a("fd99")),r=a("69b9"),o=a("64e2"),l=a("a5d5"),c=a("0f85"),u=a("f5ac"),d="incoming-transaction",f="incoming-invoice",_={name:"MainHeader",INCOMING_TRANSACTION:d,INCOMING_INVOICE:f,components:{ProfileList:r["a"],MainHeaderTabs:u["a"],MatchMedia:n["a"],VButtonCancel:o["a"],SwapLogo:l["a"]},data:function(){return{hasProfile:c["b"].hasProfile(),disabled:c["b"].getIsCreatingOrRecovering(),subscriptions:[]}},computed:{notifications:function(){var t=[{type:d,currency:"BTC",value:"0.123"},{type:f,currency:"BTC",value:"0.123"},{type:d,currency:"BTC",value:"0.123"},{type:d,currency:"BTC",value:"0.123"},{type:f,currency:"BTC",value:"0.123"},{type:d,currency:"BTC",value:"0.123"}];return t},notificationCount:function(){return this.disabled?null:this.notifications.length},showBurgerButton:function(){return!!this.$route.params.address}},created:function(){var t=this;this.subscriptions.push(c["b"].subscribe(c["a"].UPDATE_IS_CREATING_OR_RECOVERING,(function(e){t.disabled=e})))},beforeDestroy:function(){this.subscriptions.forEach((function(t){return t.unsubscribe()}))},methods:{cancel:function(){return c["b"].setCreatingOrRecovering(!1),this.$router.push({name:"Wallets"})},openWalletList:function(){return this.$router.push({name:"Wallets"})}}},p=_,b=(a("21b2"),a("2877")),v=Object(b["a"])(p,i,s,!1,null,null,null);e["a"]=v.exports},f5ac:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-tabs",{staticClass:"tabs",attrs:{centered:"",height:"auto","slider-color":t.sliderColor,"slider-size":"4"}},t._l(t.tabs,(function(e){return a("v-tab",{key:e.id,staticClass:"tabs__item",attrs:{disabled:t.disabled,to:e.to}},[t._v(" "+t._s(e.label)+" ")])})),1)},s=[],n={name:"Tabs",props:{disabled:{type:Boolean,default:!1}},data:function(){return{tabs:[{id:1,label:"Wallets",to:{name:"Wallets"}},{id:2,label:"Swap",to:{name:"Swap"}},{id:4,label:"Settings",to:{name:"Settings"}}]}},computed:{sliderColor:function(){return this.disabled?"transparent":"var(--main-color)"}}},r=n,o=(a("e2ea"),a("2877")),l=Object(o["a"])(r,i,s,!1,null,null,null);e["a"]=l.exports}}]);
//# sourceMappingURL=MainLayout.5a4cf0c7.js.map