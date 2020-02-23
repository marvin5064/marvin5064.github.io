(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0160":function(t,e,i){},"13b3":function(t,e,i){},"4d01":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-layout",[i("v-flex",[i("h1",[t._v(t._s(t.myData.work_exp.title))]),i("v-divider"),i("v-timeline",{attrs:{"align-top":"",dense:t.isDense}},t._l(t.myData.work_exp.content,(function(e,n){return i("v-timeline-item",{key:n,attrs:{id:t.getId("work_exp",n)},scopedSlots:t._u([{key:"icon",fn:function(){return[i("v-btn",{attrs:{small:"",fab:"",color:e.color},on:{click:function(e){t.$vuetify.goTo(t.getSelector("work_exp",n))}}},[i("v-icon",[t._v(t._s(e.icon))])],1)]},proxy:!0},{key:"opposite",fn:function(){return[i("span",[t._v(t._s(e.period_from)+" - "+t._s(e.period_to))])]},proxy:!0}],null,!0)},[t.isDense?i("span",[t._v(t._s(e.period_from)+" - "+t._s(e.period_to))]):t._e(),i("WorkExperience",{attrs:{item:e}})],1)})),1),i("h1",[t._v(t._s(t.myData.education.title))]),i("v-divider"),i("v-timeline",{attrs:{dense:""}},t._l(t.myData.education.content,(function(e,n){return i("v-timeline-item",{key:n,attrs:{id:t.getId("education",n)},scopedSlots:t._u([{key:"icon",fn:function(){return[i("v-btn",{attrs:{small:"",fab:"",color:e.color},on:{click:function(e){t.$vuetify.goTo(t.getSelector("education",n))}}},[i("v-icon",[t._v(t._s(e.icon))])],1)]},proxy:!0}],null,!0)},[i("Education",{attrs:{item:e}})],1)})),1)],1)],1)},o=[],r=(i("99af"),i("b0c0"),i("2b0e")),s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",[i("v-card-title",{staticClass:"headline"},[t._v(t._s(t.item.company_name))]),i("v-card-subtitle",[t._v(t._s(t.item.location))]),i("v-card-actions",[i("v-card-text",[t._v(t._s(t.item.position))]),i("v-spacer"),i("v-btn",{attrs:{icon:""},on:{click:function(e){t.show=!t.show}}},[i("v-icon",[t._v(t._s(t.show?"mdi-chevron-up":"mdi-chevron-down"))])],1)],1),i("v-expand-transition",[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[i("v-divider"),i("v-card-text",[i("ul",t._l(t.item.descriptions,(function(e,n){return i("li",{key:n},[t._v(t._s(e))])})),0)])],1)])],1)},a=[],c=r["a"].extend({props:{item:{type:Object,required:!0}},name:"WorkExperience",components:{},data:function(){return{show:!0}}}),l=c,u=i("2877"),d=i("6544"),h=i.n(d),m=i("8336"),f=i("b0af"),v=i("99d9"),p=i("ce7e"),g=i("0789"),w=i("132d"),y=i("2fa4"),b=Object(u["a"])(l,s,a,!1,null,null,null),_=b.exports;h()(b,{VBtn:m["a"],VCard:f["a"],VCardActions:v["a"],VCardSubtitle:v["b"],VCardText:v["c"],VCardTitle:v["d"],VDivider:p["a"],VExpandTransition:g["a"],VIcon:w["a"],VSpacer:y["a"]});var x=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"elevation-2"},[i("v-container",[i("v-row",{attrs:{justify:"space-between"}},[i("v-col",{attrs:{cols:"12",md:"9"}},[i("v-card-title",{staticClass:"headline"},[t._v(t._s(t.item.institution))]),i("v-card-text",[t._v(t._s(t.item.major)+" - "+t._s(t.item.outcome))])],1),i("v-col",{attrs:{cols:"6",md:"2",offset:"1"}},[t._v(t._s(t.item.period_from)+" - "+t._s(t.item.period_to))])],1)],1)],1)},C=[],T=r["a"].extend({props:{item:{type:Object,required:!0}},name:"Education"}),I=T,S=i("62ad"),D=i("a523"),B=i("0fd9"),$=Object(u["a"])(I,x,C,!1,null,null,null),k=$.exports;h()($,{VCard:f["a"],VCardText:v["c"],VCardTitle:v["d"],VCol:S["a"],VContainer:D["a"],VRow:B["a"]});var E=i("7bc7"),j=r["a"].extend({methods:{getId:function(t,e){return"".concat(t,"_").concat(e)},getSelector:function(t,e){return"#".concat(this.getId(t,e))}},computed:{isDense:function(){switch(this.$vuetify.breakpoint.name){case"xs":return!0;case"sm":return!0;default:return!1}}},components:{WorkExperience:_,Education:k},data:function(){return{myData:E}}}),O=j,V=(i("20f6"),i("e8f2")),A=Object(V["a"])("flex"),H=Object(V["a"])("layout"),G=i("5530"),M=(i("0160"),i("58df")),N=i("7560"),R=Object(M["a"])(N["a"]).extend({name:"v-timeline",provide:function(){return{timeline:this}},props:{alignTop:Boolean,dense:Boolean,reverse:Boolean},computed:{classes:function(){return Object(G["a"])({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense,"v-timeline--reverse":this.reverse},this.themeClasses)}},render:function(t){return t("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),P=(i("c96a"),i("9d26")),L=i("a9ad"),W=Object(M["a"])(L["a"],N["a"]),K=W.extend().extend({name:"v-timeline-item",inject:["timeline"],props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(P["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var t=this.setBackgroundColor(this.color);return this.$createElement("div",Object(G["a"])({staticClass:"v-timeline-item__inner-dot"},t),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genDivider:function(){var t=[];return this.hideDot||t.push(this.genDot()),this.$createElement("div",{staticClass:"v-timeline-item__divider"},t)},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(t){var e=[this.genBody(),this.genDivider()];return this.$slots.opposite&&e.push(this.genOpposite()),t("div",{staticClass:"v-timeline-item",class:Object(G["a"])({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--before":this.timeline.reverse?this.right:this.left,"v-timeline-item--after":this.timeline.reverse?this.left:this.right},this.themeClasses)},e)}}),J=Object(u["a"])(O,n,o,!1,null,null,null);e["default"]=J.exports;h()(J,{VBtn:m["a"],VDivider:p["a"],VFlex:A,VIcon:w["a"],VLayout:H,VTimeline:R,VTimelineItem:K})},"62ad":function(t,e,i){"use strict";i("4160"),i("caad"),i("13d5"),i("45fc"),i("4ec9"),i("a9e3"),i("b64b"),i("d3b7"),i("ac1f"),i("3ca3"),i("5319"),i("2ca0"),i("159b"),i("ddb0");var n=i("ade3"),o=i("5530"),r=(i("4b85"),i("2b0e")),s=i("d9f7"),a=i("80d2"),c=["sm","md","lg","xl"],l=function(){return c.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),u=function(){return c.reduce((function(t,e){return t["offset"+Object(a["r"])(e)]={type:[String,Number],default:null},t}),{})}(),d=function(){return c.reduce((function(t,e){return t["order"+Object(a["r"])(e)]={type:[String,Number],default:null},t}),{})}(),h={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function m(t,e,i){var n=t;if(null!=i&&!1!==i){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==i&&!0!==i?(n+="-".concat(i),n.toLowerCase()):n.toLowerCase()}}var f=new Map;e["a"]=r["a"].extend({name:"v-col",functional:!0,props:Object(o["a"])({cols:{type:[Boolean,String,Number],default:!1}},l,{offset:{type:[String,Number],default:null}},u,{order:{type:[String,Number],default:null}},d,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var i=e.props,o=e.data,r=e.children,a=(e.parent,"");for(var c in i)a+=String(i[c]);var l=f.get(a);return l||function(){var t,e;for(e in l=[],h)h[e].forEach((function(t){var n=i[t],o=m(e,t,n);o&&l.push(o)}));var o=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!o||!i.cols},Object(n["a"])(t,"col-".concat(i.cols),i.cols),Object(n["a"])(t,"offset-".concat(i.offset),i.offset),Object(n["a"])(t,"order-".concat(i.order),i.order),Object(n["a"])(t,"align-self-".concat(i.alignSelf),i.alignSelf),t)),f.set(a,l)}(),t(i.tag,Object(s["a"])(o,{class:l}),r)}})},"63b7":function(t,e,i){},"7bc7":function(t){t.exports=JSON.parse('{"work_exp":{"title":"Work Experience","content":[{"position":"Senior Software Engineer","company_name":"BGL HK LIMITED","location":"Hong Kong, Central","period_from":"Mar 2019","icon":"mdi-bitcoin","color":"orange","period_to":"Present","descriptions":["Improve customer order acceptance rate from 60% to 80%","Maintain no downtime and zero internal system error for production at my domain","System design for large scale & performable application","High performance public/developer API design and documentation","TBD"]},{"position":"Software Engineer","company_name":"Credit Suisse","location":"Hong Kong, West Kowloon","period_from":"Nov 2018","icon":"mdi-bank","color":"blue","period_to":"Mar 2019","descriptions":["Frontend development with ReactJS","Data process application development with Kotlin","More exposure to open-source solution - K8s & Helm"]},{"position":"Software Engineer","company_name":"BGL HK LIMITED","location":"Hong Kong, Central","period_from":"Jul 2016","icon":"mdi-bitcoin","color":"orange","period_to":"Oct 2018","descriptions":["Maintain logically comprehensive applications to handle fraud prevention and risk management for company product","Develop and maintain data process pipeline on a real time basis","Data Aggregation, Data Manipulation and Data Cleansing before display to costumers","Third party tool/system integration with performance assurance and fraud detection","Built fast internal & public APIs with involvement in design & management","Monitoring applications, for quick action","Involve in Micro-service architecture & system design","Working ad-hoc on production issues and help maintain company image and profit","Familiar with DevOps methodology with CI-CD development process","Delivery tasks which always fulfill requirements & on time"]},{"position":"Junior Software Engineer (Part Time)","company_name":"BGL HK LIMITED","location":"Hong Kong, Central","period_from":"Mar 2016","icon":"mdi-bitcoin","color":"orange","period_to":"Jun 2016","descriptions":["Front-end Web development with ReactJS & SASS","Write unit testing for Nodejs using Mocha, Chai and Sinon","Automation test for UAT using GhostInspector, Runscope and AWS - Serverless"]},{"position":"IT Assistant","company_name":"Mattel Asia Pacific","location":"Hong Kong, TST","period_from":"Jan 2015","icon":"mdi-robot","color":"red","period_to":"Sep 2015","descriptions":["Hands-on experience to collaborate BAs around APAC on projects remotely","Materials consolidation & provides IT-training for local customers","Gain exposure to international business working environment"]}]},"education":{"title":"Education","content":[{"institution":"The Hong Kong University of Science and Technology","major":"Bachelor in Mathematics","outcome":"Second Class Honors Division I","icon":"mdi-school","color":"blue","period_from":"2012","period_to":"2016"},{"institution":"The Mission Covenant Church Holm Glad College","major":"High School","outcome":"HKDSE","icon":"mdi-human-handsup","color":"red","period_from":"2008","period_to":"2012"}]}}')},afdd:function(t,e,i){"use strict";var n=i("8336");e["a"]=n["a"]},eec5:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("v-carousel",{attrs:{"show-arrows":!1,"hide-delimiters":"",cycle:"",height:"78vh"},model:{value:t.model,callback:function(e){t.model=e},expression:"model"}},t._l(t.contents,(function(e){return i("v-carousel-item",{key:e.id},[i("v-sheet",{attrs:{color:e.color,height:"100%",tile:""}},[i("v-row",{staticClass:"fill-height",attrs:{align:"center",justify:"center"}},[i("v-col",{attrs:{"align-self":"center",cols:"11",md:"4"}},[i("div",{class:"display-3 "+e.font},[i("p",[t._v(t._s(e.wording))])])])],1)],1)],1)})),1),i("v-divider"),i("ContactMe")],1)},o=[],r=i("2b0e"),s=i("5ae5"),a=r["a"].extend({components:{ContactMe:s["a"]},methods:{getHeight:function(){return window.innerHeight}},data:function(){return{contents:[{color:"primary",wording:"I'm Software Engineer",font:"font-weight-black"},{color:"secondary",wording:"I trade stocks at my spare time",font:"font-italic font-weight-medium"},{color:"orang",wording:"I love Gym & Workout",font:"font-weight-bold"},{color:"red",wording:"I want to be Entrepreneur",font:"font-italic font-weight-bold"}],model:0}}}),c=a,l=i("2877"),u=i("6544"),d=i.n(u),h=(i("a9e3"),i("5530")),m=(i("63b7"),i("99af"),i("7db0"),i("c740"),i("13b3"),i("c3f0")),f=i("afdd"),v=i("9d26"),p=i("604c"),g=p["a"].extend({name:"v-window",provide:function(){return{windowGroup:this}},directives:{Touch:m["a"]},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:{type:Boolean,default:void 0},showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return Object(h["a"])({},p["a"].options.computed.classes.call(this),{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.$vuetify.rtl&&"x"===t?!this.internalReverse:this.internalReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.reverse?!this.isReverse:this.isReverse}},watch:{internalIndex:"updateReverse"},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n=this;return this.$createElement("div",{staticClass:"v-window__".concat(t)},[this.$createElement(f["a"],{props:{icon:!0},attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},on:{click:function(){n.changedByDelimiters=!0,i()}}},[this.$createElement(v["a"],{props:{large:!0}},e)])])},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var o=this.genIcon("next",n,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.isReverse=this.$vuetify.rtl,this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.isReverse=!this.$vuetify.rtl,this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){this.changedByDelimiters?this.changedByDelimiters=!1:this.isReverse=t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),w=i("37c6"),y=p["a"].extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return p["a"].options.computed.classes.call(this)}},methods:{genData:p["a"].options.methods.genData}}),b=i("80d2"),_=i("d9bd"),x=g.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return Object(h["a"])({},g.options.computed.classes.call(this),{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(_["a"])("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:g.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var o=this.$createElement(f["a"],{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(v["a"],{props:{size:18}},this.delimiterIcon)]);i.push(o)}return this.$createElement(y,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(w["a"],{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=g.options.render.call(this,t);return e.data.style="height: ".concat(Object(b["f"])(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),C=i("9d65"),T=i("4e82"),I=i("58df"),S=Object(I["a"])(C["a"],Object(T["a"])("windowGroup","v-window-item","v-window")),D=S.extend().extend().extend({name:"v-window-item",directives:{Touch:m["a"]},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(b["f"])(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(b["f"])(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),B=i("adda"),$=i("1c87"),k=Object(I["a"])(D,$["a"]),E=k.extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(B["a"],{staticClass:"v-carousel__item",props:Object(h["a"])({},this.$attrs,{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(b["j"])(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),j=i("62ad"),O=i("a523"),V=i("ce7e"),A=i("0fd9"),H=i("8dd9"),G=Object(l["a"])(c,n,o,!1,null,null,null);e["default"]=G.exports;d()(G,{VCarousel:x,VCarouselItem:E,VCol:j["a"],VContainer:O["a"],VDivider:V["a"],VRow:A["a"],VSheet:H["a"]})}}]);
//# sourceMappingURL=about.760b097e.js.map