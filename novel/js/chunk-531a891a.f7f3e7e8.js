(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-531a891a"],{"159b":function(t,e,r){var n=r("da84"),c=r("fdbc"),o=r("17c2"),a=r("9112");for(var i in c){var s=n[i],u=s&&s.prototype;if(u&&u.forEach!==o)try{a(u,"forEach",o)}catch(f){u.forEach=o}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,c=r("a640"),o=r("ae40"),a=c("forEach"),i=o("forEach");t.exports=a&&i?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"28be":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bookDetailHeader"},[n("van-nav-bar",{attrs:{title:t.title},scopedSlots:t._u([{key:"left",fn:function(){return[n("van-icon",[n("img",{attrs:{src:r("a586"),width:"20px",height:"20px"},on:{click:function(e){return t.$router.back()}}})])]},proxy:!0},{key:"right",fn:function(){return[n("van-icon",[n("img",{attrs:{src:r("66f0"),width:"20px",height:"20px"},on:{click:function(e){return t.$router.push({path:"/search"})}}})]),n("van-icon",[n("img",{attrs:{src:r("9d54"),width:"20px",height:"20px"},on:{click:function(e){return t.$router.push({path:"/"})}}})])]},proxy:!0}])})],1)},c=[],o={props:["title"]},a=o,i=(r("f8c6"),r("2877")),s=Object(i["a"])(a,n,c,!1,null,null,null);e["a"]=s.exports},4160:function(t,e,r){"use strict";var n=r("23e7"),c=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=c},{forEach:c})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"57aa":function(t,e,r){},"66f0":function(t,e,r){t.exports=r.p+"img/find2.4e4cb62e.svg"},"6c64":function(t,e,r){},"9d54":function(t,e,r){t.exports=r.p+"img/home.7345d5bf.svg"},a586:function(t,e,r){t.exports=r.p+"img/leftArrowhead.67f90333.svg"},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b125:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"chapter"},[r("BookDetailHeader",{attrs:{title:t.$route.query.bookname}}),t._m(0),r("div",{staticClass:"chapter-contain"},[r("h3",[r("span",[t._v("共"+t._s(t.chapters.length)+"章")])]),r("ul",t._l(t.chapters,(function(e,n){return r("li",{key:n},[r("p",[r("span",{on:{click:function(e){return t.toRead(n)}}},[t._v(" "+t._s(e.title)+" ")])])])})),0)])],1)},c=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h3",{staticClass:"btn-group-cell"},[r("span",[t._v("目录")])])}],o=(r("b0c0"),r("5530")),a=r("d399"),i=r("2f62"),s=r("28be"),u={components:{BookDetailHeader:s["a"]},data:function(){return{chapters:JSON.parse(window.localStorage.getItem("allChapters")).chapters,timer:null,id:this.$route.params.id,clickIndex:0}},methods:Object(o["a"])(Object(o["a"])({},Object(i["b"])(["getAllChapter"])),{},{toRead:function(t){var e=this;this.clickIndex=t,console.log(this.clickIndex),this.timer&&clearTimeout(this.timer),Object(a["a"])("正在获取，请稍后 Thanks♪(･ω･)ﾉ"),this.timer=setTimeout((function(){e.$router.push({path:"/bookDetail/"+e.id+"/read",query:{bookName:e.$route.query.bookname}})}),1e3)}}),beforeRouteLeave:function(t,e,r){"Read"==t.name?(localStorage.setItem("allChapters",JSON.stringify({chapters:this.chapters,index:this.clickIndex})),this.getAllChapter({chapters:this.chapters,index:this.clickIndex}),r()):r()}},f=u,l=(r("c2f7"),r("2877")),h=Object(l["a"])(f,n,c,!1,null,null,null);e["default"]=h.exports},b64b:function(t,e,r){var n=r("23e7"),c=r("7b0b"),o=r("df75"),a=r("d039"),i=a((function(){o(1)}));n({target:"Object",stat:!0,forced:i},{keys:function(t){return o(c(t))}})},c2f7:function(t,e,r){"use strict";r("6c64")},dbb4:function(t,e,r){var n=r("23e7"),c=r("83ab"),o=r("56ef"),a=r("fc6a"),i=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!c},{getOwnPropertyDescriptors:function(t){var e,r,n=a(t),c=i.f,u=o(n),f={},l=0;while(u.length>l)r=c(n,e=u[l++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),c=r("d039"),o=r("fc6a"),a=r("06cf").f,i=r("83ab"),s=c((function(){a(1)})),u=!i||s;n({target:"Object",stat:!0,forced:u,sham:!i},{getOwnPropertyDescriptor:function(t,e){return a(o(t),e)}})},f8c6:function(t,e,r){"use strict";r("57aa")}}]);
//# sourceMappingURL=chunk-531a891a.f7f3e7e8.js.map