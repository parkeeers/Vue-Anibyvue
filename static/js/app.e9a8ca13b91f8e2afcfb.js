webpackJsonp([1],{Bu9v:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("7+uW"),a=n("Dd8w"),s=n.n(a),o={name:"anibyvue",props:{show:{type:Boolean,required:!0},width:{type:Number,default:400},height:{type:Number,default:240},duration:{type:Number,default:300},measure:{type:String,default:"px"},animation:{type:String,default:"zoom"},mask:{type:Boolean,default:!0},closeButton:{type:Boolean,default:!0},closeOnEsc:{type:Boolean,default:!1},closeOnClickMask:{type:Boolean,default:!0},className:{type:String,default:""},customStyles:{type:Object,default:function(){return{}}},customMaskStyles:{type:Object,default:function(){return{}}}},computed:{style:function(){return{animationDuration:this.duration+"ms"}},dialogStyle:function(){return s()({width:this.width+this.measure,height:this.height+this.measure,animationDuration:this.duration+"ms"},this.customStyles)}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.focus()})}},methods:{onEsc:function(){this.show&&this.closeOnEsc&&this.$emit("hide")},onClickMask:function(){this.$emit("clickMask"),this.closeOnClickMask&&this.$emit("hide")}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"anibyvue-fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:["anibyvue",t.className],style:t.style,attrs:{tabindex:"-1"},on:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"esc",27,e.key,"Escape")?t.onEsc(e):null}}},[t.mask?n("div",{staticClass:"anibyvue-mask",style:t.customMaskStyles,on:{click:t.onClickMask}}):t._e(),t._v(" "),n("transition",{attrs:{name:"anibyvue-"+t.animation}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"anibyvue-dialog",style:t.dialogStyle},[t.closeButton?n("span",{staticClass:"anibyvue-close",on:{click:function(e){t.$emit("hide")}}}):t._e(),t._v(" "),t._t("default")],2)])],1)])},staticRenderFns:[]},u=n("VU/8")(o,l,!1,null,null,null).exports,c={name:"app",components:{anibyvue:u},data:function(){return{show:!1,animation:"",paddingTop:"paddingTop: "+(window.innerHeight-440)/2+"px",types:["zoom","fade","flip","door","rotate","slideUp","slideDown","slideLeft","slideRight"]}},methods:{delay:function(t){return"\n        animationDelay: "+100*t+"ms;\n        WebkitAnimationDelay: "+100*t+"ms;\n      "},onShow:function(t){this.animation=t,this.show=!0}}},r={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrap"},[n("div",{staticClass:"container",style:t.paddingTop},[n("h1",{staticClass:"title scale"},[t._v("anibyvue")]),t._v(" "),n("h3",{staticClass:"intro scale"},[t._v("A vue modal with animations.")]),t._v(" "),n("div",{staticClass:"btn-area"},t._l(t.types,function(e,i){return n("button",{key:i,staticClass:"btn scale",style:t.delay(i),domProps:{textContent:t._s(e)},on:{click:function(n){t.onShow(e)}}})})),t._v(" "),n("anibyvue",{attrs:{measure:"em",show:t.show,animation:t.animation,width:28.5,height:17,duration:301,className:"my-dialog"},on:{hide:function(e){t.show=!1}}},[n("div",{staticClass:"header"},[t._v("anibyvue")]),t._v(" "),n("div",{staticClass:"body"},[t._v("A vue modal with animations.")]),t._v(" "),n("button",{staticClass:"anibyvue-confirm-btn",on:{click:function(e){t.show=!1}}},[t._v("ok")]),t._v(" "),n("button",{staticClass:"anibyvue-cancel-btn",on:{click:function(e){t.show=!1}}},[t._v("close")])])],1)])},staticRenderFns:[]};var d=n("VU/8")(c,r,!1,function(t){n("Bu9v")},null,null).exports,h=n("/ocq");i.a.use(h.a);var m=new h.a({routes:[{path:"/",name:"anibyvue",component:u}]});i.a.config.productionTip=!1,new i.a({el:"#app",router:m,components:{App:d},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.e9a8ca13b91f8e2afcfb.js.map