(function(e){function t(t){for(var n,o,c=t[0],i=t[1],l=t[2],d=0,f=[];d<c.length;d++)o=c[d],s[o]&&f.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},s={"app~d0ae3f07":0},r=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var u=i;r.push([0,"chunk-vendors~253ae210","chunk-vendors~82b88a00","chunk-vendors~b5906859","chunk-vendors~6ed3fd28","chunk-vendors~9ad0f35b","chunk-vendors~fe785c75","chunk-vendors~2930ad93","chunk-vendors~b58f7129","chunk-vendors~fdc6512a","chunk-vendors~e1ee825c"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var n=a("71ec"),s=a.n(n);s.a},"0cc2":function(e,t,a){"use strict";var n=a("17af"),s=a.n(n);s.a},"118d":function(e,t,a){"use strict";var n=a("a0d4"),s=a.n(n);s.a},"17af":function(e,t,a){},"20c0":function(e,t,a){"use strict";var n=a("b123"),s=a.n(n);s.a},"2a74":function(e,t,a){"use strict";a.r(t);var n=a("cebc"),s=(a("a481"),a("28a5"),a("ac6a"),a("bba4")),r=a.n(s),o=a("c653"),c={};o.keys().forEach(function(e){if("./index.js"!==e){var t=e.replace(/(\.\/|\.js)/g,"").split("/");t.reduce(function(a,s,c){var i=r()(s);if(c===t.length-1){var l=Object(n["a"])({namespaced:!0},o(e));return a.modules?(a.modules[i]=l,a.modules[i]):(a[i]=l,a[i])}return a[i]||(a[i]={namespaced:!0,modules:{}}),a[i]},c)}}),t["default"]=c},"2d3f":function(e,t,a){},"350e":function(e,t,a){e.exports=a.p+"img/GP0STQ7ON.02314232.jpg"},"3afc":function(e,t,a){},"3c79":function(e,t,a){"use strict";var n=a("bae2"),s=a.n(n);s.a},"4cd6":function(e,t,a){},5029:function(e,t,a){e.exports=a.p+"img/GP0STSIIB.8658498b.jpg"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("MainPage")],1)},r=[],o={name:"app",metaInfo:{title:"Ocean Waste"}},c=o,i=(a("034f"),a("2877")),l=a("6544"),u=a.n(l),d=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",[a("el-header",{attrs:{height:"5em"}},[a("el-button",{attrs:{icon:"el-icon-more"},on:{click:function(t){e.isShow=!e.isShow}}}),e.isShow?a("MainHeader"):e._e()],1),a("el-main",[a("SessionOceanWaste",{staticClass:"section"}),a("SessionBigData",{staticClass:"section"}),a("SessionFisheryWaste",{staticClass:"section"}),a("SessionConclusion",{staticClass:"section"}),a("SessionInvestigation",{staticClass:"section"}),a("SessionTeam",{staticClass:"section"}),a("SessionEastEgg",{staticClass:"section"})],1),a("el-aside",{attrs:{width:"10em"}},[a("MainNavBar")],1)],1)},f=[],v={data:function(){return{isShow:!0}}},p=v,h=(a("7e5f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"head-bar"},[a("el-row",{attrs:{gutter:10,type:"flex",justify:"center"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".ocean-waste, 80",expression:"'.ocean-waste, 80'"}],attrs:{circle:"",icon:"el-icon-search"}})],1),a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".big-data, 80",expression:"'.big-data, 80'"}],attrs:{circle:"",icon:"el-icon-search"}})],1),a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".fishery-waste, 80",expression:"'.fishery-waste, 80'"}],attrs:{circle:"",icon:"el-icon-search"}})],1),a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".conclusion, 80",expression:"'.conclusion, 80'"}],attrs:{circle:"",icon:"el-icon-search"}})],1),a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".investigation-method, 80",expression:"'.investigation-method, 80'"}],attrs:{circle:"",icon:"el-icon-search"}})],1),a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".screen-team, 80",expression:"'.screen-team, 80'"}],attrs:{circle:"",icon:"el-icon-search"}})],1),a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".east-egg, 80",expression:"'.east-egg, 80'"}],attrs:{circle:"",icon:"el-icon-search"}})],1)],1)],1)}),m=[],b={methods:{}},g=b,w=(a("9742"),Object(i["a"])(g,h,m,!1,null,"53dd932e",null)),_=w.exports,x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-bar"},[a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[e._v("NavMenu")])],1),a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".ocean-waste",expression:"'.ocean-waste'"}],attrs:{circle:""}},[a("font-awesome-icon",{attrs:{icon:"water"}})],1)],1)],1),a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".big-data",expression:"'.big-data'"}],attrs:{circle:""}},[a("font-awesome-icon",{attrs:{icon:"chart-pie"}})],1)],1)],1),a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".fishery-waste",expression:"'.fishery-waste'"}],attrs:{circle:""}},[a("font-awesome-icon",{attrs:{icon:"fish"}})],1)],1)],1),a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".conclusion",expression:"'.conclusion'"}],attrs:{circle:""}},[a("font-awesome-icon",{attrs:{icon:"lightbulb"}})],1)],1)],1),a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".investigation-method",expression:"'.investigation-method'"}],attrs:{circle:""}},[a("font-awesome-icon",{attrs:{icon:"search"}})],1)],1)],1),a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".screen-team",expression:"'.screen-team'"}],attrs:{circle:""}},[a("font-awesome-icon",{attrs:{icon:"users"}})],1)],1)],1),a("el-row",{attrs:{gutter:10,type:"flex",justify:"space-around"}},[a("el-col",{attrs:{span:24}},[a("el-button",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:".east-egg",expression:"'.east-egg'"}],attrs:{circle:""}},[a("font-awesome-icon",{attrs:{icon:"info"}})],1)],1)],1)],1)},C=[],y={data:function(e){return{}}},S=y,j=(a("5939"),Object(i["a"])(S,x,C,!1,null,"b1a00236",null)),O=j.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"big-data"},[a("el-header",{staticClass:"el-header-section1",attrs:{height:""}},[a("div",{staticClass:"header-bg"}),a("div",{staticClass:"header-content"},[a("h2",[e._v("大數據分析")])])]),a("el-main",[a("h3",[e._v("乾淨的海灘 VS 垃圾海灘")]),a("div",{staticClass:"image-compare-div"},[a("image-compare",{attrs:{before:e.right,after:e.left,padding:{left:50,right:50}},scopedSlots:e._u([{key:"icon-left",fn:function(){return[a("i",{staticClass:"el-icon-caret-left"})]},proxy:!0},{key:"icon-right",fn:function(){return[a("i",{staticClass:"el-icon-caret-right"})]},proxy:!0}])})],1)])],1)},P=[],T=[{name:"GP0STSIIB",content:"綠色和平船艦極地曙光號造訪太平洋大垃圾帶時，在漁網垃圾裡紀錄到螃蟹身上帶著微塑膠。",url:a("5029")},{name:"GP0WB0",content:"雀鯛把寶特瓶當成自己的家，護衛著地盤。這次在環臺海岸快篩中發現，不論東南西北，寶特瓶是臺灣海岸上最常發現的垃圾。",url:a("99a4")},{name:"GP0CUJ",content:"一隻海馬在塑膠袋裡偽裝自己。這次快篩調查也發現，離景點越近的海岸上越容易發現塑膠袋。",url:a("664a")},{name:"GP0STT3FM",content:"螃蟹困在手搖杯裡。研究人員發現，小型塑膠製品多半是來自都市的海廢垃圾。",url:a("6060")},{name:"GP0STQ7ON",content:"桌型軸孔珊瑚上纏掛著塑膠袋。科學家認為，珊瑚被塑膠纏上，就像被一把很髒的刀子割過，使珊瑚容易染病死亡。",url:a("350e")},{name:"GP0STSJ0S",content:"在太平洋大垃圾帶發現的黃色浮球，已經成為鵝頸藤壼和螃蟹的家，甚至還吸引了一小群慈鯛。",url:a("e073")},{name:"GP0STQV74",content:"蘇格蘭的希恩特群島是眾多海鳥的家，但就連這裡，也發現海鸚咬食漁網的碎片。科學家估計，到2050年，99%的海鳥都會吃進塑膠垃圾。",url:a("9502")},{name:"GP0STRVGA",content:"在馬來西亞著名印度教景點雪蘭莪，發現猴子從遊客留下的塑膠垃圾裡找東西吃。只有我們減少使用，才不會危害這些動物。",url:a("a07d")}],k={data:function(){return{left:a("a80b"),right:a("eae1")}},computed:{biological:function(){return T}}},E=k,G=(a("3c79"),Object(i["a"])(E,N,P,!1,null,"47ca2e8e",null)),M=G.exports,$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"conclusion"},[a("el-header",{staticClass:"el-header-section1",attrs:{height:""}},[a("div",{staticClass:"header-bg"}),a("div",{staticClass:"header-content"},[a("h2",[e._v("conclusion")])])]),a("el-main")],1)},I=[],B={},W=B,F=(a("20c0"),Object(i["a"])(W,$,I,!1,null,"466bb7b3",null)),J=F.exports,A=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"east-egg"},[a("el-header",{staticClass:"el-header-section1",attrs:{height:""}},[a("div",{staticClass:"header-bg"}),a("div",{staticClass:"header-content"},[a("h2",[e._v("CTA")])])]),a("el-main")],1)},D=[],V={},Q=V,U=(a("6728"),Object(i["a"])(Q,A,D,!1,null,"35784402",null)),H=U.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fishery-waste"},[a("el-header",{staticClass:"el-header-section1",attrs:{height:""}},[a("div",{staticClass:"header-bg"}),a("div",{staticClass:"header-content"},[a("h2",[e._v("fishery waste")])])]),a("el-main")],1)},K=[],L={},q=L,z=(a("118d"),Object(i["a"])(q,R,K,!1,null,"84b4f4aa",null)),X=z.exports,Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"investigation-method"},[a("el-header",{staticClass:"el-header-section1",attrs:{height:""}},[a("div",{staticClass:"header-bg"}),a("div",{staticClass:"header-content"},[a("h2",[e._v("investigation")])])]),a("el-main")],1)},Z=[],ee={},te=ee,ae=(a("916d"),Object(i["a"])(te,Y,Z,!1,null,"0f52bb2b",null)),ne=ae.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-container",{staticClass:"ocean-waste"},[a("el-header",{staticClass:"el-header-section1",attrs:{height:""}},[a("div",{staticClass:"header-bg"}),a("div",{staticClass:"header-content"},[e._v("\n      主故事——字襯海邊圖: "),a("br"),a("br"),e._v("\n      小時候，每到夏天我要去海邊"),a("br"),e._v("\n      堆沙堡、找貝殻，看看寄居蟹 躲在哪裡"),a("br"),a("br"),e._v("\n      現在到了海灘，小孩還是很高興 只是...他們用寶特瓶堆城堡，在海廢堆裡找螃蟹，"),a("br"),e._v("\n      還有小鳥在塑膠垃圾上 產卵"),a("br"),e._v("\n      孩子想脫鞋奔跑，我們卻擔心針頭、金屬碎片扎傷"),a("br"),a("br"),e._v("\n      臺灣還找得到祕境海灘嗎?"),a("br"),a("br"),e._v("\n      為了讓孩子享受我以前童年記憶裡的乾淨海灘"),a("br"),e._v("\n      我決定繞臺灣一圈，找出最乾淨的海灘"),a("br"),e._v("\n      跟我一起出發吧!\n      "),a("h2",[e._v("海廢垃圾")])])]),a("el-main",[a("el-row",{attrs:{gutter:10}},[a("el-col",{attrs:{span:6}},[a("el-card",[e._v("\n          陸地-河川/大排\n        ")])],1),a("el-col",{attrs:{span:6}},[a("el-card",[e._v("\n          遊客亂丟\n        ")])],1),a("el-col",{attrs:{span:6}},[a("el-card",[e._v("\n          海洋\n        ")])],1),a("el-col",{attrs:{span:6}},[a("el-card",[e._v("\n          掩埋場\n        ")])],1)],1),a("el-row",{staticClass:"biological-carousel"},[a("el-col",{attrs:{span:22,offset:1}},[a("el-carousel",{attrs:{autoplay:!1,arrow:"hover","indicator-position":"none",height:"500px"}},e._l(e.biological,function(t){return a("el-carousel-item",{key:t.name},[a("div",{staticClass:"biological"},[a("div",{staticClass:"biological__image"},[a("el-image",{staticStyle:{height:"inherit"},attrs:{src:t.url,fit:"cover"}})],1),a("div",{staticClass:"biological__content"},[a("span",[e._v(e._s(t.content))])])])])}),1)],1)],1)],1)],1)},re=[],oe={data:function(){return{left:a("a80b"),right:a("eae1")}},computed:{biological:function(){return T}}},ce=oe,ie=(a("0cc2"),Object(i["a"])(ce,se,re,!1,null,"3b92fdc6",null)),le=ie.exports,ue=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"screen-team"},[a("el-header",{staticClass:"el-header-section1",attrs:{height:""}},[a("div",{staticClass:"header-bg"}),a("div",{staticClass:"header-content"},[a("h2",[e._v("team")])])]),a("el-main")],1)},de=[],fe={},ve=fe,pe=(a("ae8d"),Object(i["a"])(ve,ue,de,!1,null,"ae0ca6e2",null)),he=pe.exports,me=Object(i["a"])(p,d,f,!1,null,"1c79002c",null),be=me.exports;u()(me,{MainHeader:_,MainNavBar:O,SessionBigData:M,SessionConclusion:J,SessionEastEgg:H,SessionFisheryWaste:X,SessionInvestigation:ne,SessionOceanWaste:le,SessionTeam:he});var ge=Object(i["a"])(c,s,r,!1,null,null,null),we=ge.exports;u()(ge,{MainPage:be});a("2d3f"),a("e05f");var _e=a("5c96");n["default"].use(_e["Button"]),n["default"].use(_e["Container"]),n["default"].use(_e["Row"]),n["default"].use(_e["Col"]),n["default"].use(_e["Main"]),n["default"].use(_e["Header"]),n["default"].use(_e["Footer"]),n["default"].use(_e["Aside"]),n["default"].use(_e["Card"]),n["default"].use(_e["Carousel"]),n["default"].use(_e["CarouselItem"]),n["default"].use(_e["Image"]);var xe=a("58ca");n["default"].use(xe["a"],{keyName:"metaInfo",attribute:"data-vue-meta",ssrAttribute:"data-vue-meta-server-rendered",tagIDKeyName:"vmid",refreshOnceOnNavigation:!0});var Ce=a("d322"),ye=a.n(Ce);n["default"].use(ye.a);var Se=a("fe56");n["default"].use(Se["a"],{speed:300});var je=a("2f62"),Oe=a("2a74");n["default"].use(je["a"]);var Ne=new je["a"].Store({modules:Oe["default"]});var Pe=Ne,Te=a("ecee"),ke=a("c074"),Ee=a("ad3d");Te["c"].add(ke["a"],ke["g"],ke["b"],ke["d"],ke["e"],ke["f"],ke["c"]),n["default"].component("font-awesome-icon",Ee["a"]),n["default"].config.productionTip=!1,new n["default"]({store:Pe,render:function(e){return e(we)}}).$mount("#app")},5939:function(e,t,a){"use strict";var n=a("dadd"),s=a.n(n);s.a},6060:function(e,t,a){e.exports=a.p+"img/GP0STT3FM.bef54114.jpg"},"664a":function(e,t,a){e.exports=a.p+"img/GP0CUJ.87a7958c.jpg"},6728:function(e,t,a){"use strict";var n=a("3afc"),s=a.n(n);s.a},"71ec":function(e,t,a){},"7e5f":function(e,t,a){"use strict";var n=a("a218"),s=a.n(n);s.a},"916d":function(e,t,a){"use strict";var n=a("db80"),s=a.n(n);s.a},9502:function(e,t,a){e.exports=a.p+"img/GP0STQV74.b289b717.jpg"},9742:function(e,t,a){"use strict";var n=a("4cd6"),s=a.n(n);s.a},"99a4":function(e,t,a){e.exports=a.p+"img/GP0WB0.da81df41.jpg"},a07d:function(e,t,a){e.exports=a.p+"img/GP0STRVGA.57924433.jpg"},a0d4:function(e,t,a){},a218:function(e,t,a){},a80b:function(e,t,a){e.exports=a.p+"img/left.08d6fc3a.jpg"},ae8d:function(e,t,a){"use strict";var n=a("ef81"),s=a.n(n);s.a},b123:function(e,t,a){},bae2:function(e,t,a){},c653:function(e,t,a){var n={"./index.js":"2a74"};function s(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(n)},s.resolve=r,e.exports=s,s.id="c653"},dadd:function(e,t,a){},db80:function(e,t,a){},e073:function(e,t,a){e.exports=a.p+"img/GP0STSJ0S.bc044ad6.jpg"},eae1:function(e,t,a){e.exports=a.p+"img/right.ac9ed924.jpg"},ef81:function(e,t,a){}});
//# sourceMappingURL=app~d0ae3f07.1ffbb12b.js.map