(function(t){function e(e){for(var s,n,o=e[0],u=e[1],c=e[2],l=0,d=[];l<o.length;l++)n=o[l],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&d.push(a[n][0]),a[n]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(t[s]=u[s]);h&&h(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,n=1;n<i.length;n++){var o=i[n];0!==a[o]&&(s=!1)}s&&(r.splice(e--,1),t=u(u.s=i[0]))}return t}var s={},n={app:0},a={app:0},r=[];function o(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"44173db1"}[t]+".js"}function u(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,u),i.l=!0,i.exports}u.e=function(t){var e=[],i={about:1};n[t]?e.push(n[t]):0!==n[t]&&i[t]&&e.push(n[t]=new Promise((function(e,i){for(var s="css/"+({about:"about"}[t]||t)+"."+{about:"29d62517"}[t]+".css",a=u.p+s,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===s||l===a))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],l=c.getAttribute("data-href");if(l===s||l===a)return e()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=e,h.onerror=function(e){var s=e&&e.target&&e.target.src||a,r=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=s,delete n[t],h.parentNode.removeChild(h),i(r)},h.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(h)})).then((function(){n[t]=0})));var s=a[t];if(0!==s)if(s)e.push(s[2]);else{var r=new Promise((function(e,i){s=a[t]=[e,i]}));e.push(s[2]=r);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=o(t);var d=new Error;c=function(e){l.onerror=l.onload=null,clearTimeout(h);var i=a[t];if(0!==i){if(i){var s=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",d.name="ChunkLoadError",d.type=s,d.request=n,i[1](d)}a[t]=void 0}};var h=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=s,u.d=function(t,e,i){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(u.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)u.d(i,s,function(e){return t[e]}.bind(null,s));return i},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var h=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0858":function(t,e,i){},"0fcf":function(t,e,i){},1897:function(t,e,i){"use strict";i("9438")},"19d4":function(t,e,i){"use strict";i("4e51")},2098:function(t,e,i){"use strict";i("371d")},2100:function(t,e,i){},3206:function(t,e,i){"use strict";i("e36d")},"371d":function(t,e,i){},"3ac0":function(t,e,i){t.exports=i.p+"img/loading.a7b38227.svg"},"3e57":function(t,e,i){},"48d2":function(t,e,i){"use strict";i("a09b")},"4e16":function(t,e,i){"use strict";i("ec61")},"4e51":function(t,e,i){},"4ee5":function(t,e,i){"use strict";i("b81e")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=(i("d3b7"),i("bc3a")),a=i.n(n),r={baseURL:"http://music.kele8.cn"},o=a.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},s["a"].use(Plugin);Plugin;var u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"},on:{touchstart:t.movingStart,touchmove:t.movingMove,touchend:t.movingEnd}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.$parent.isShowLoading,expression:"$parent.isShowLoading"}],staticClass:"loading"},[s("img",{attrs:{src:i("b76d")}})]),t.$route.meta.isShowNav?s("HomeNav"):t._e(),s("keep-alive",[s("router-view",{attrs:{currentMusic:t.currentMusic,paused:t.paused},on:{"update:music":function(e){t.currentMusic=e},"update:playlist":function(e){t.playlist=e.songListItem,t.currentIndex=e.index}}})],1),t.currentMusic?s("Play",{attrs:{currentMusic:t.currentMusic,playlist:t.playlist,currentIndex:t.currentIndex,currentWords:t.currentWords},on:{"update:paused":function(e){t.paused=e},"update:music":function(e){t.currentMusic=e.item,t.currentIndex=e.index}}}):t._e()],1)},c=[],l=(i("b0c0"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{attrs:{id:"home-nav"}},[i("li",[i("router-link",{attrs:{to:"/"}},[t._v("推荐音乐")])],1),i("li",[i("router-link",{attrs:{to:"/hot"}},[t._v("热歌榜")])],1),i("li",[i("router-link",{attrs:{to:"/search"}},[t._v("搜索")])],1)])}),d=[],h={},p=h,m=(i("a9bd"),i("2877")),f=Object(m["a"])(p,l,d,!1,null,null,null),g=f.exports,v=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"play",on:{mousewheel:function(t){t.preventDefault()}}},[i("audio",{ref:"audio",attrs:{src:"https://music.163.com/song/media/outer/url?id="+t.currentMusic.id+".mp3",autoplay:""}}),i("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__slideInUp","leave-active-class":"animate__animated animate__slideOutDown"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowBar,expression:"isShowBar"}],staticClass:"play-bar"},[i("img",{class:{playingStop:t.paused},attrs:{src:t.currentMusic.picUrl+"?imageView=1&type=webp&thumbnail=360x0"},on:{click:function(e){t.isShowBar=!1}}}),i("div",{staticClass:"font-box"},[i("div",[i("span",{domProps:{textContent:t._s(t.currentMusic.name)}}),t._l(t.currentMusic.song.artists,(function(e,s){return i("span",{key:s,staticClass:"font-box-fontStyle"},[s?t._e():[t._v(" - ")],s?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)}))],2)]),i("div",{staticClass:"switch-box",on:{click:function(e){return e.stopPropagation(),t.toggleMusicState(e)}}},[i("canvas",{ref:"canvas",attrs:{width:"50",height:"50"}}),i("span",{class:{controlIcon:t.paused}})])])]),i("transition",{attrs:{name:"custom-classes-transition","enter-active-class":"animate__animated animate__fadeIn","leave-active-class":"animate__animated animate__fadeOut"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isShowBar,expression:"!isShowBar"}],staticClass:"play-full",on:{touchmove:function(t){t.preventDefault()}}},[i("img",{attrs:{src:t.currentMusic.picUrl+"?imageView&thumbnail=50y50&quality=15&tostatic=0"}}),i("div",{staticClass:"mask"},[i("PlayFullHeader",{attrs:{currentMusic:t.currentMusic},on:{"update-isshowbar":function(e){t.isShowBar=!0},"close-list":function(e){t.closeList++}}}),[t.isShowLyric?i("PlayFullLyric",{attrs:{currentWords:t.currentWords,currentTime:t.currentTime,audio:t.$refs.audio,isShowLyric:t.isShowLyric},on:{"update:isShowLyric":function(e){t.isShowLyric=!t.isShowLyric},"close-list":function(e){t.closeList++}}}):i("PlayFullCover",{attrs:{currentMusic:t.currentMusic,paused:t.paused},on:{"update:isShowLyric":function(e){t.isShowLyric=!t.isShowLyric},"close-list":function(e){t.closeList++}}})],i("PlayFullFooter",{attrs:{duration:t.duration,currentTime:t.currentTime,playModule:t.playModule,paused:t.paused,playlist:t.playlist,closeList:t.closeList},on:{"update:currentTime":function(e){t.$refs.audio.currentTime=e},"next-song":t.nextPlay,"prev-song":t.prevPlay,"update:module":function(e){t.playModule=e},"update:paused":t.toggleMusicState,"change-song":t.changeSong}})],2)])])],1)},y=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header",on:{click:function(e){return t.$emit("close-list")}}},[i("i",{staticClass:"back",on:{click:function(e){return t.$emit("update-isshowbar")}}}),i("div",{staticClass:"title"},[i("p",[i("span",{ref:"title",class:{scroll:t.fontscorll}},[t._v(t._s(t.currentMusic.name))])])])])},S=[],b={props:["currentMusic"],data:function(){return{fontscorll:!1}},updated:function(){this.$nextTick((function(){this.fontscorll=this.$refs.title.offsetWidth>this.$refs.title.parentNode.offsetWidth}))}},x=b,w=(i("c4ec"),Object(m["a"])(x,_,S,!1,null,"35005e2e",null)),$=w.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"cover",on:{click:function(e){t.$emit("update:isShowLyric"),t.$emit("close-list")}}},[i("div",{staticClass:"img-box"},[i("section",{class:{needleAb:t.paused}}),i("img",{class:{stopTurn:t.paused},attrs:{src:t.currentMusic.picUrl+"?imageView&thumbnail=360y360&quality=75&tostatic=0"}})])])},M=[],I={props:["currentMusic","paused"]},L=I,k=(i("ffa6"),Object(m["a"])(L,C,M,!1,null,"6bec409a",null)),P=k.exports,T=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"lyric",on:{click:function(e){t.$emit("update:isShowLyric"),t.$emit("close-list")}}},[i("ul",{ref:"list",attrs:{id:"list"}},t._l(t.lyric,(function(e,s){return i("li",{key:s},[t._v(t._s(e.text))])})),0)])},W=[],E=(i("4de4"),i("c740"),i("d81d"),i("a9e3"),i("ac1f"),i("466d"),i("5319"),i("1276"),{props:["currentWords","currentTime","audio","isShowLyric"],data:function(){return{evenTop:208}},computed:{lyric:function(){if(!this.currentWords)return[];var t=/\[\d{2}:\d{2}\.\d{2,3}\]/gi,e=this.currentWords.split("\n").filter((function(t){return t})).map((function(e){var i=e.match(t)[0].replace(/(\[|\])/gi,""),s=i.split(":");i=60*Number(s[0])+Number(s[1]);var n=e.replace(t,"");return{time:i,text:n}}));return e}},created:function(){console.log("created");var t=this;this.audio.ontimeupdate=function(){t.updateWords()}},mounted:function(){this.updateWords()},updated:function(){console.log("update");var t=this;this.audio.ontimeupdate=function(){t.updateWords()}},methods:{updateWords:function(){var t=this;if(0!=this.lyric[0].time&&this.lyric.unshift({time:0,text:""}),this.$refs.list){var e=this.lyric.findIndex((function(e){return e.time>t.currentTime}));if(-1===e)return;var i=this.$refs.list.querySelectorAll("li"),s=i[e-1].offsetHeight;this.$refs.list.style.marginTop=-s*(e-1)+208+"px",this.evenTop=-s*(e-1)+208;for(var n=0;n<i.length;n++)i[n].style.color="rgb(255,255,255)";i[e-1].style.color="rgb(30,204,148)"}}}}),O=E,j=(i("c756"),Object(m["a"])(O,T,W,!1,null,"7a7eccc6",null)),N=j.exports,V=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"process"},[i("span",[t._v(t._s(t.minCur))]),i("input",{ref:"dur",attrs:{type:"range",min:"0",max:t.duration,step:1},domProps:{value:t.currentTime},on:{input:t.changeCurTime}}),i("span",[t._v(t._s(t.minDur))])]),i("div",{staticClass:"handler"},[i("ul",[i("li",{class:{roundModule:0==t.playModule,randomModule:1==t.playModule,singleModule:2==t.playModule},on:{click:function(e){return t.toggleModule(t.playModule)}}}),i("li",{on:{click:function(e){return t.$emit("prev-song")}}}),i("li",{class:{stop:!t.paused},on:{click:function(e){return t.$emit("update:paused")}}}),i("li",{on:{click:function(e){return t.$emit("next-song")}}}),i("li",{on:{click:function(e){t.isShowMylist=!t.isShowMylist}}})])]),t.isShowMylist?[i("div",{ref:"listBox",staticClass:"playFullSongList"},[i("ol",{ref:"list",on:{touchstart:t.touchstart,touchmove:t.touchmove,touchend:t.touchend}},t._l(t.playlist,(function(e,s){return i("PlayFullSongList",{key:s,attrs:{index:s,item:e},on:{"change-song":function(e){t.$emit("change-song",s),t.isShowMylist=!t.isShowMylist}}})})),1),i("span",{on:{click:function(e){t.isShowMylist=!1}}},[t._v("关闭")])])]:t._e()],2)},U=[],X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"playFullSongListItem",on:{click:function(e){return t.$emit("change-song")}}},[i("span",[t._v(t._s(t.item.name))]),t.item.song.exclusive||"01"==t.item.cd?i("i",{staticClass:"sq-icon"}):t._e()])},q=[],B={props:["item","index"]},D=B,F=(i("75c2"),Object(m["a"])(D,X,q,!1,null,"248b5dc6",null)),H=F.exports,R={components:{PlayFullSongList:H},data:function(){return{isShowMylist:!1,startY:0,curY:0,resY:0,isTouchStart:!1}},props:["currentTime","duration","playModule","paused","playlist","closeList"],computed:{minCur:function(){var t=this.currentTime,e=parseInt(t/60);e=e<10?"0"+e:e;var i=parseInt(t%60);i=i<10?"0"+i:i;var s=e+":"+i;return s},minDur:function(){var t=this.duration,e=parseInt(t/60);e=e<10?"0"+e:e;var i=parseInt(t%60);i=i<10?"0"+i:i;var s=e+":"+i;return s},listHeight:function(){return 40*this.playlist.length},maxSlide:function(){var t=this.$refs.listBox.offsetHeight-this.listHeight-50;return t>0&&(t=0),t}},watch:{currentTime:function(t){var e=parseInt(t/this.duration*100);this.$refs.dur.style.backgroundSize=e+"% 100%"},closeList:function(){this.isShowMylist=!1}},methods:{changeCurTime:function(t){this.$emit("update:currentTime",t.target.value)},toggleModule:function(t){t++,t=t>2?0:t,this.$emit("update:module",t)},touchstart:function(t){this.isTouchStart=!0,this.startY=t.touches[0].pageY},touchmove:function(t){if(this.isTouchStart){var e=t.touches[0].pageY;this.resY=e-this.startY+this.curY,this.resY>0&&(this.resY=0),this.resY<this.maxSlide&&(this.resY=this.maxSlide),this.$refs.list.style.top=this.resY+"px"}},touchend:function(){this.curY=this.resY,this.isTouchStart=!1}}},Y=R,A=(i("4ee5"),Object(m["a"])(Y,V,U,!1,null,"1dfec02f",null)),z=A.exports,J={components:{PlayFullHeader:$,PlayFullCover:P,PlayFullLyric:N,PlayFullFooter:z},props:["currentMusic","playlist","currentIndex","currentWords"],data:function(){return{paused:null,isShowBar:!0,isShowLyric:!1,duration:0,currentTime:0,playModule:0,closeList:0}},mounted:function(){var t=this,e=this.$refs.audio;e.addEventListener("pause",(function(){t.paused=!0})),e.addEventListener("play",(function(){t.paused=!1})),e.addEventListener("durationchange",(function(){t.duration=e.duration})),e.addEventListener("timeupdate",(function(){t.currentTime=e.currentTime,t.drawcircle(t.currentTime,t.duration)})),e.addEventListener("ended",(function(){2==t.playModule?(t.currentTime=0,t.toggleMusicState()):t.nextPlay()}))},watch:{paused:function(t){this.$emit("update:paused",t)}},methods:{drawcircle:function(t,e){var i=this.$refs.canvas,s=i.getContext("2d");s.clearRect(0,0,50,50),s.beginPath(),s.strokeStyle="rgba(0,0,0,0.2)",s.arc(25,25,15,0,2*Math.PI),s.stroke(),s.closePath(),s.beginPath(),s.strokeStyle="rgba(0,0,0,1)",s.arc(25,25,15,-.5*Math.PI,Math.PI*(t/e*2-.5),!1),s.stroke(),s.closePath()},toggleMusicState:function(){var t=this.$refs.audio;this.paused?t.play():t.pause()},nextPlay:function(t){if(t+=1,t)t-=1,this.$emit("update:music",{item:this.playlist[t],myindex:t});else{var e=this.calculateNextSongIndex();this.$emit("update:music",{item:this.playlist[e],index:e})}},calculateNextSongIndex:function(){var t=this.currentIndex;if(0==this.playModule||2==this.playModule)++t,t=t>this.playlist.length-1?0:t;else if(1==this.playModule){var e;do{e=Math.floor(Math.random()*this.playlist.length)}while(e===t);t=e}return t},prevPlay:function(){var t=this.calculatePrevSongIndex();this.$emit("update:music",{item:this.playlist[t],index:t})},calculatePrevSongIndex:function(){var t=this.currentIndex;return--t,t=t<0?this.playlist.length-1:t,t},changeSong:function(t){console.log(t),this.nextPlay(t)}}},K=J,G=(i("664e"),Object(m["a"])(K,v,y,!1,null,"7ebd1bab",null)),Q=G.exports,Z={components:{HomeNav:g,Play:Q},watch:{currentMusic:function(t){this.searchWord(t.id)}},data:function(){return{currentMusic:null,paused:null,playlist:[],currentIndex:0,currentWords:"",movestartX:null,moveX:null}},methods:{searchWord:function(t){var e=this;this.axios.get("/lyric?id="+t).then((function(t){e.currentWords=t.data.lrc.lyric}))},movingStart:function(t){this.movestartX=t.touches[0].clientX},movingMove:function(t){this.moveX=t.touches[0].clientX},movingEnd:function(){if(null!=this.movestartX&&null!=this.moveX){var t=this.$route.name;switch(t){case"Recommend":this.moveX<this.movestartX-100&&this.$router.push({path:"/hot"});break;case"Hot":this.moveX<this.movestartX-100?this.$router.push({path:"/search"}):this.movestartX<this.moveX-100&&this.$router.push({path:"/"});break;case"Search":this.movestartX<this.moveX-100&&this.$router.push({path:"/hot"});break;case"PlayList":this.movestartX<this.moveX-100&&this.$router.back();break;case"SingerList":this.movestartX<this.moveX-100&&this.$router.back();break}this.clearX()}},clearX:function(){this.movestartX=null,this.moveX=null}}},tt=Z,et=(i("c236"),Object(m["a"])(tt,u,c,!1,null,"e8537ec8",null)),it=et.exports,st=i("8c4f"),nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"search"},[s("div",{staticClass:"searchingBox"},[s("div",{staticClass:"inputBox"},[s("i",{staticClass:"find"}),s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.inputValue,expression:"inputValue",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"搜索歌曲、歌手、专辑"},domProps:{value:t.inputValue},on:{input:[function(e){e.target.composing||(t.inputValue=e.target.value.trim())},t.searchSuggestWords],keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchSong(e)},click:function(e){t.searching=!0},blur:function(e){return t.$forceUpdate()}}}),s("div",{staticClass:"delete"},[s("i",{on:{click:function(e){t.inputValue="",t.searching=!0}}})])])]),t.searching?[t.inputValue?s("div",{staticClass:"searchTips"},[s("span",{staticClass:"searchTipsTitle",on:{click:t.searchSong}},[t._v("搜索"),t.inputValue?s("span",[t._v('"'+t._s(t.inputValue)+'"')]):t._e()]),s("ul",[t.sugLoading?s("img",{staticClass:"loading",attrs:{src:i("3ac0")}}):t._e(),t._l(t.suggestWordsArr,(function(e,i){return s("SearchWordsItem",{key:i,attrs:{item:e},on:{"update:inputValue":function(e){t.inputValue=e},"search-me":t.searchSong}})}))],2)]):s("div",{staticClass:"hotTips"},[s("h3",[t._v("热门搜索")]),s("keep-alive",[s("ul",{staticClass:"hotWords"},[t.loading?s("img",{staticClass:"loading",attrs:{src:i("3ac0")}}):t._e(),t._l(t.hotWords,(function(e,i){return s("HotWordsItem",{key:i,attrs:{item:e},on:{"update:inputWord":function(e){t.inputValue=e},"search-me":t.searchSong}})}))],2)]),t.localData?s("div",{staticClass:"local"},[s("ul",t._l(t.localData,(function(e,i){return s("LocalItem",{key:i,attrs:{index:i,item:e},on:{"update:inputValue":function(e){t.inputValue=e},"search-me":t.searchSong}})})),1)]):t._e()],1)]:[s("div",{class:{mb:t.$attrs.currentMusic}},[t.listLoading?s("img",{staticClass:"loading",attrs:{src:i("3ac0")}}):s("SearchResult",{attrs:{newSongs:t.songs,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused,singerId:t.singerId},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",e)}}})],1)]],2)},at=[],rt=(i("99af"),i("4160"),i("a434"),i("25f0"),i("159b"),i("5530")),ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"hotSearchWordsBox",on:{click:function(e){t.$emit("update:inputWord",t.item),t.$emit("search-me")}}},[t._v(" "+t._s(t.item)+" ")])},ut=[],ct={props:["item"]},lt=ct,dt=(i("68e7"),Object(m["a"])(lt,ot,ut,!1,null,"055cd884",null)),ht=dt.exports,pt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"searchWordsItem",on:{click:function(e){t.$emit("update:inputValue",t.item),t.$emit("search-me")}}},[i("i"),i("span",[t._v(t._s(t.item))])])},mt=[],ft={props:["item"]},gt=ft,vt=(i("f6b2"),Object(m["a"])(gt,pt,mt,!1,null,null,null)),yt=vt.exports,_t=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"searchResult"},[i("h3",[t._v("最佳匹配")]),i("Singer",{attrs:{singerId:this.$attrs.singerId}}),t._l(t.newSongs,(function(e,s){return i("SongItem",{key:e.id,attrs:{item:e,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.updatePlaylist(s)}}})}))],2)},St=[],bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.singerId&&t.singer?i("ul",t._l(t.singer,(function(e,s){return i("li",{key:s,staticClass:"singer",on:{click:function(i){return t.push(e.id)}}},[i("div",{staticClass:"singer-img"},[i("img",{attrs:{src:e.picUrl+"?imageView=1&type=webp&thumbnail=151x0"}})]),i("h4",[t._v("歌手："+t._s(e.name))]),i("i")])})),0):t._e()},xt=[],wt={props:["singerId"],data:function(){return{singer:[]}},created:function(){this.searchSinger(this.singerId)},watch:{singerId:function(t){this.searchSinger(t)}},methods:{searchSinger:function(t){var e=this;this.singer=[],t.forEach((function(t){e.axios.get("/artists?id="+t).then((function(t){t&&e.singer.push(t.data.artist)}))})),console.log(this.singer)},push:function(t){this.$router.push({path:"/singerList",query:{id:t}})}}},$t=wt,Ct=(i("8368"),Object(m["a"])($t,bt,xt,!1,null,null,null)),Mt=Ct.exports,It=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"song-item",on:{click:function(e){t.$emit("update:music",t.item),t.$emit("update:playlist")}}},[i("div",{staticClass:"song-item-detail",class:{active:!t.paused&&null!=t.currentMusic&&t.currentMusic.id===t.item.id}},[i("h5",[t._v(t._s(t.item.name))]),i("p",[t.item.song.exclusive?i("i",{staticClass:"sq-icon"}):t._e(),t._l(t.item.song.artists,(function(e,s){return i("span",{key:s},[s?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)}))],2)]),i("div",{staticClass:"icon"},[t.currentMusic&&t.currentMusic.id===t.item.id&&!t.paused?i("span",{staticClass:"musicPlay"}):i("span",{staticClass:"musicStop"})])])},Lt=[],kt={props:["item","currentMusic","paused"]},Pt=kt,Tt=(i("8620"),Object(m["a"])(Pt,It,Lt,!1,null,"0a7120f2",null)),Wt=Tt.exports,Et={components:{Singer:Mt,SongItem:Wt},props:{newSongs:{type:Array}},methods:{updatePlaylist:function(t){var e={songListItem:this.newSongs,index:t};this.$emit("update:playlist",e)}}},Ot=Et,jt=(i("19d4"),Object(m["a"])(Ot,_t,St,!1,null,"28d674b8",null)),Nt=jt.exports,Vt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",[i("i",{staticClass:"clock"}),i("span",{on:{click:function(e){t.$emit("update:inputValue",t.item),t.$emit("search-me"),t.$parent.changLocalPosition(t.index)}}},[t._v(t._s(t.item))]),i("figure",[i("i",{on:{click:function(e){return t.$parent.removeLocal(t.index)}}})])])},Ut=[],Xt={props:["item","index"]},qt=Xt,Bt=(i("2098"),Object(m["a"])(qt,Vt,Ut,!1,null,null,null)),Dt=Bt.exports,Ft={components:{HotWordsItem:ht,SearchWordsItem:yt,SearchResult:Nt,LocalItem:Dt},data:function(){return{songs:[],inputValue:"",hotWords:[],searchSuggestWordsTimer:null,suggestWordsArr:[],searching:!0,loading:!0,sugLoading:!1,listLoading:!0,singerId:[],localData:[]}},created:function(){var t=this;this.getLocal(),this.loading=!0,this.axios.get("/search/hot").then((function(e){if(e){var i=[];e.data.result.hots.forEach((function(t){i.push(t.first)})),t.hotWords=[].concat(i)}})).finally((function(){t.loading=!1}))},methods:{searchSuggestWords:function(){var t=this;this.searchSuggestWordsTimer&&clearTimeout(this.searchSuggestWordsTimer),this.sugLoading=!0,this.suggestWordsArr=[],this.searchSuggestWordsTimer=setTimeout((function(){null!=t.inputValue&&void 0!=t.inputValue&&""!=t.inputValue&&(t.axios.get("/search/suggest?keywords="+t.inputValue).then((function(e){if(console.log("词",e),e.data.result){var i=[];e.data.result.order.forEach((function(t){e.data.result[t].forEach((function(t){i.push(t.name)}))})),t.suggestWordsArr=i}})).finally((function(){t.sugLoading=!1})),clearTimeout(t.searchSuggestWordsTimer))}),1e3)},searchSong:function(){var t=this;this.songs=[],this.searching=!1;this.listLoading=!0,null!=this.inputValue&&void 0!=this.inputValue&&""!=this.inputValue&&(this.local(),this.axios.get("/search?keywords="+this.inputValue).then((function(e){if(e.data.result){t.singerId=[];for(var i=0;i<e.data.result.songs[0].artists.length;i++)t.singerId.push(e.data.result.songs[0].artists[i].id);e.data.result.songs.forEach((function(e){var i={};for(var s in e)i.name=e.name,i.picUrl=e.artists[0].img1v1Url,i.id=e.id,i.song=Object(rt["a"])({},e),i.song.exclusive=0==e.fee;t.songs.push(i)}))}})).finally((function(){t.listLoading=!1})),this.getLocal())},local:function(){var t=[];localStorage.getItem("searchWords")&&(t=localStorage.getItem("searchWords").split(",")),t.push(this.inputValue);for(var e=0;e<t.length;e++)for(var i=e+1;i<t.length;i++)t[e]===t[i]&&e!=i&&(t.splice(i,1),i--);t=t.toString(),localStorage.setItem("searchWords",t)},getLocal:function(){var t=localStorage.getItem("searchWords");t?(t=t.split(","),this.localData=t):this.localData=null},removeLocal:function(t){var e=localStorage.getItem("searchWords").split(",");e.splice(t,1),0==e.length?localStorage.removeItem("searchWords"):(e=e.toString(),localStorage.setItem("searchWords",e)),this.getLocal()},changLocalPosition:function(t){var e=localStorage.getItem("searchWords").split(","),i=e.splice(t,1);e.unshift(i),localStorage.setItem("searchWords",e),this.getLocal()}},activated:function(){this.searching=!0,this.songs=[],this.inputValue=""}},Ht=Ft,Rt=(i("1897"),Object(m["a"])(Ht,nt,at,!1,null,"d1575e46",null)),Yt=Rt.exports,At=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"recommed"},[i("RecommendPlayList",{attrs:{currentRecommends:t.currentRecommends}},[t._v("推荐歌单")]),i("RecommendNewMusic",{attrs:{newSongs:t.newSongs,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.$emit("update:playlist",e)}}},[t._v("最新音乐")])],1)},zt=[],Jt=(i("fb6a"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("BorderedTitle",[t._t("default")],2),i("ul",{staticClass:"playList"},t._l(t.currentRecommends,(function(t,e){return i("PlayListItem",{key:e,attrs:{item:t}})})),1)],1)}),Kt=[],Gt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h3",[t._t("default")],2)},Qt=[],Zt={name:"BorderedTitle"},te=Zt,ee=(i("4e16"),Object(m["a"])(te,Gt,Qt,!1,null,"6a0ce83a",null)),ie=ee.exports,se=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"playlistitem",on:{click:function(e){return t.navigateToPlayList(t.item.id)}}},[i("div",{staticClass:"thumb"},[i("img",{attrs:{src:t.item.picUrl+"?imageView=1&type=webp&thumbnail=370x0",alt:""}}),i("span",{staticClass:"play-count"},[t._v(t._s(t._f("formatPlayCount")(t.item.playCount))+" ")])]),i("h6",[t._v(t._s(t.item.name))])])},ne=[],ae=(i("b680"),{name:"PlayListItem",props:{item:{type:Object}},filters:{formatPlayCount:function(t){return(t/1e4).toFixed(1)+"万"}},methods:{navigateToPlayList:function(t){this.$router.push({path:"/playList",query:{id:t,itemPicUrl:this.item.picUrl,playCount:this.item.playCount}})}}}),re=ae,oe=(i("fa1f"),Object(m["a"])(re,se,ne,!1,null,null,null)),ue=oe.exports,ce={components:{BorderedTitle:ie,PlayListItem:ue},props:{currentRecommends:{type:Array}}},le=ce,de=(i("3206"),Object(m["a"])(le,Jt,Kt,!1,null,null,null)),he=de.exports,pe=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("BorderedTitle",[t._t("default")],2),i("ul",{staticClass:"recommendNewMusic",class:{mb:t.currentMusic}},t._l(t.newSongs,(function(e,s){return i("SongItem",{key:e.id,attrs:{item:e,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.updatePlaylist(s)}}})})),1)],1)},me=[],fe={components:{BorderedTitle:ie,SongItem:Wt},props:{newSongs:{type:Array},currentMusic:{type:Object}},methods:{updatePlaylist:function(t){var e={songListItem:this.newSongs,index:t};this.$emit("update:playlist",e)}}},ge=fe,ve=(i("7b24"),Object(m["a"])(ge,pe,me,!1,null,null,null)),ye=ve.exports,_e={name:"Recommed",components:{RecommendPlayList:he,RecommendNewMusic:ye},data:function(){return{recommends:[],newSongs:[],randomIndex:null,selNum:6,count:0}},computed:{currentRecommends:function(){return this.recommends.slice(this.randomIndex,this.randomIndex+this.selNum)}},activated:function(){this.randomIndex=Math.floor(Math.random()*(this.recommends.length-this.selNum)),this.randomIndex=this.randomIndex<0?0:this.randomIndex},created:function(){var t=this;this.$root.isShowLoading=!0,this.axios.get("/personalized").then((function(e){t.recommends=e.data.result})).finally((function(){t.count=t.count+1})),this.axios.get("/personalized/newsong").then((function(e){t.newSongs=e.data.result})).finally((function(){t.count=t.count+1}))},watch:{count:function(t){t>=2&&(this.$root.isShowLoading=!1)}}},Se=_e,be=Object(m["a"])(Se,At,zt,!1,null,"3a834f98",null),xe=be.exports,we=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"playlist"},[s("section",[s("div",{staticClass:"mask",style:"backgroundImage:url('"+t.itemPicUrl+"')"}),s("div",{staticClass:"detail"},[s("div",{staticClass:"detail_pic"},[s("img",{attrs:{src:t.itemPicUrl}}),s("span",{staticClass:"detail_songlist"},[t._v("歌单")]),s("span",{staticClass:"detail_num"},[t._v(t._s(t._f("formatPlayCount")(t.playCount)))])]),s("div",{staticClass:"detail_font"},[s("h2",[t._v(t._s(t.title))]),s("div",[s("img",{attrs:{src:t.userImg+"?param=40y40"}}),s("span",[t._v(t._s(t.userNickName))])])])])]),s("div",{staticClass:"pylst_list"},[s("div",{staticClass:"pylst_list_header"},[t._v("歌曲列表")]),t.loading?s("img",{staticClass:"loading",attrs:{src:i("3ac0")}}):s("ul",t._l(t.songList,(function(e,i){return s("HotSongItem",{key:i,attrs:{index:i,item:e,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.updatePlaylist(i)}}})})),1)])])},$e=[],Ce=(i("a15b"),i("2909")),Me=i("8b05"),Ie={components:{HotSongItem:Me["a"]},data:function(){return{listId:null,itemPicUrl:"",playCount:"",userId:null,userImg:null,userNickName:null,title:"",songList:[],loading:!1}},watch:{"$route.query.id":function(t){t&&(console.log("id更新了"),this.getData())},userId:function(){this.getUserData()}},created:function(){console.log("创建"),this.getData()},methods:{getData:function(){var t=this;this.listId=this.$route.query.id,this.itemPicUrl=this.$route.query.itemPicUrl,this.playCount=this.$route.query.playCount,this.axios.get("/playlist/detail?id="+this.$route.query.id).then((function(e){t.userId=e.data.playlist.userId,t.title=e.data.playlist.name;var i=e.data.playlist.trackIds.slice(0,30).map((function(t){return t.id})).join();t.axios.get("/song/detail?ids="+i).then((function(e){console.log(e.data.songs);for(var i=[],s=0;s<e.data.songs.length;s++)i.push({name:e.data.songs[s].name,picUrl:e.data.songs[s].al.picUrl,id:e.data.songs[s].id,cd:e.data.songs[s].cd,song:Object(Ce["a"])(e.data.songs[s].ar)});t.songList=[].concat(i)}))}))},getUserData:function(){var t=this;this.userId&&(this.loading=!0,this.axios.get("/user/detail?uid="+this.userId).then((function(e){t.userImg=e.data.profile.avatarUrl,t.userNickName=e.data.profile.nickname})).finally((function(){t.loading=!1})))},updatePlaylist:function(t){var e={songListItem:this.songList,index:t};this.$emit("update:playlist",e)}},filters:{formatPlayCount:function(t){return(t/1e4).toFixed(1)+"万"}}},Le=Ie,ke=(i("a7a3"),Object(m["a"])(Le,we,$e,!1,null,null,null)),Pe=ke.exports,Te=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"singerList"},[i("header",[t.isShow?[t._m(0)]:i("img",{attrs:{src:t.singer.picUrl+"?imageView=1&type=webp&thumbnail=1126x0"}}),i("div",{staticClass:"loading-box-title"},[t._v(t._s(t.singer.name))])],2),t.singer.briefDesc?[i("h2",[t._v("歌手简介")]),i("div",{staticClass:"singerMsg"},[i("p",{class:{toFull:!t.isShowMsg}},[t._v(t._s(t.singer.briefDesc))]),i("div",{staticClass:"full",on:{click:function(e){t.isShowMsg=!t.isShowMsg}}},[t._v(" "+t._s(t.isShowMsg?"收起":"完整歌手介绍")+" "),i("i",{staticClass:"arrow",class:{"arrow-up":t.isShowMsg}})])])]:t._e(),i("h2",[t._v("热门单曲")]),i("section",[i("ul",[t.isShow?[t._m(1)]:t._l(t.songs,(function(e,s){return i("HotSongItem",{key:s,attrs:{index:s,item:e,currentMusic:t.$attrs.currentMusic,paused:t.$attrs.paused},on:{"update:music":function(e){return t.$emit("update:music",e)},"update:playlist":function(e){return t.updatePlaylist(s)}}})}))],2)])],2)},We=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-box-1"},[s("img",{staticClass:"loading",attrs:{src:i("3ac0")}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"loading-box-2"},[s("img",{staticClass:"loading",attrs:{src:i("3ac0")}})])}],Ee={components:{HotSongItem:Me["a"]},data:function(){return{singer:{},songs:[],loading:0,isShow:!0,isShowMsg:!1}},watch:{"$route.query.id":function(t){t&&(console.log("id更新了",this.$route.query.id),this.getSinger(),this.getSongs())},loading:function(t){t>=2&&(this.isShow=!1,console.log(this.isShow))}},created:function(){console.log("created",this.$route.query.id),this.getSinger(),this.getSongs()},methods:{getSinger:function(){var t=this;this.isShow=!0,this.axios.get("/artists?id="+this.$route.query.id).then((function(e){t.singer=e.data.artist})).finally((function(){t.loading++}))},getSongs:function(){var t=this;this.isShow=!0,this.axios.get("/artists?id="+this.$route.query.id).then((function(e){if(e){console.log(e);for(var i=[],s=0;s<5;s++)i.push({name:e.data.hotSongs[s].name,picUrl:e.data.hotSongs[s].al.picUrl,id:e.data.hotSongs[s].id,cd:e.data.hotSongs[s].cd,song:Object(Ce["a"])(e.data.hotSongs[s].ar)});t.songs=i}})).finally((function(){t.loading++}))},updatePlaylist:function(t){var e={songListItem:this.songs,index:t};this.$emit("update:playlist",e)}}},Oe=Ee,je=(i("f755"),Object(m["a"])(Oe,Te,We,!1,null,"033a8a71",null)),Ne=je.exports;s["a"].use(st["a"]);var Ve=[{path:"/",name:"Recommend",component:xe,meta:{isShowNav:!0}},{path:"/hot",name:"Hot",component:function(){return i.e("about").then(i.bind(null,"0b70"))},meta:{isShowNav:!0}},{path:"/search",name:"Search",component:Yt,meta:{isShowNav:!0}},{path:"/playList",name:"PlayList",component:Pe,meta:{isShowNav:!1}},{path:"/singerList",name:"SingerList",component:Ne,meta:{isShowNav:!1}}],Ue=new st["a"]({routes:Ve}),Xe=Ue;s["a"].config.productionTip=!1,new s["a"]({router:Xe,render:function(t){return t(it)},data:function(){return{isShowLoading:!1}}}).$mount("#app")},"5ef7":function(t,e,i){},"664e":function(t,e,i){"use strict";i("0fcf")},"68e7":function(t,e,i){"use strict";i("92a1")},"75c2":function(t,e,i){"use strict";i("5ef7")},"7b24":function(t,e,i){"use strict";i("86aa")},8368:function(t,e,i){"use strict";i("a78d")},8620:function(t,e,i){"use strict";i("f3a8")},"86aa":function(t,e,i){},"8a40":function(t,e,i){},"8b05":function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"hot-song-item",on:{click:function(e){t.$emit("update:music",t.item),t.$emit("update:playlist")}}},[i("span",{staticClass:"number",class:{redFont:t.index<3},domProps:{textContent:t._s(t.hotIndex<9?"0"+t.hotIndex:t.hotIndex)}}),i("div",{staticClass:"song-item-detail",class:{active:!t.paused&&null!=t.currentMusic&&t.currentMusic.id===t.item.id}},[i("h5",[t._v(t._s(t.item.name))]),i("p",["01"==t.item.cd?i("i",{staticClass:"sq-icon"}):t._e(),t._l(t.item.song,(function(e,s){return i("span",{key:s},[s?[t._v(" / ")]:t._e(),t._v(t._s(e.name)+" ")],2)}))],2)]),i("div",{staticClass:"icon"},[t.currentMusic&&t.currentMusic.id===t.item.id&&!t.paused?i("span",{staticClass:"musicPlay"}):i("span",{staticClass:"musicStop"})])])},n=[],a={props:["item","index","currentMusic","paused"],data:function(){return{hotIndex:this.index+1}}},r=a,o=(i("48d2"),i("2877")),u=Object(o["a"])(r,s,n,!1,null,"59823064",null);e["a"]=u.exports},"8e6c":function(t,e,i){},"92a1":function(t,e,i){},9438:function(t,e,i){},"9c4f":function(t,e,i){},a09b:function(t,e,i){},a78d:function(t,e,i){},a7a3:function(t,e,i){"use strict";i("3e57")},a9bd:function(t,e,i){"use strict";i("8a40")},b76d:function(t,e,i){t.exports=i.p+"img/wangyiMusic.8631d968.png"},b81e:function(t,e,i){},bc7f:function(t,e,i){},c236:function(t,e,i){"use strict";i("2100")},c4ec:function(t,e,i){"use strict";i("0858")},c756:function(t,e,i){"use strict";i("bc7f")},d4a4:function(t,e,i){},e36d:function(t,e,i){},e7bc:function(t,e,i){},ec61:function(t,e,i){},f3a8:function(t,e,i){},f6b2:function(t,e,i){"use strict";i("d4a4")},f755:function(t,e,i){"use strict";i("9c4f")},fa1f:function(t,e,i){"use strict";i("8e6c")},ffa6:function(t,e,i){"use strict";i("e7bc")}});
//# sourceMappingURL=app.abc3dc77.js.map