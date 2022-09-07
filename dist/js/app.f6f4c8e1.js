(function(e){function t(t){for(var i,s,a=t[0],l=t[1],c=t[2],d=0,v=[];d<a.length;d++)s=a[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&v.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);u&&u(t);while(v.length)v.shift()();return r.push.apply(r,c||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],i=!0,a=1;a<o.length;a++){var l=o[a];0!==n[l]&&(i=!1)}i&&(r.splice(t--,1),e=s(s.s=o[0]))}return e}var i={},n={app:0},r=[];function s(t){if(i[t])return i[t].exports;var o=i[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=i,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(o,i,function(t){return e[t]}.bind(null,i));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var u=l;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"56d7":function(e,t,o){"use strict";o.r(t);o("e623"),o("e379"),o("5dc8"),o("37e1");var i=o("2b0e"),n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{md:"6"}},[o("video-player",{attrs:{videoURL:e.videoURL}})],1)],1)],1)},r=[],s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"video__container",on:{click:e.toggleVideoPlay,mouseover:e.handleShowFunctions,mouseleave:e.setTimeoutFunction}},[e.spinner?o("div",{staticClass:"spinner"},[o("v-progress-circular",{attrs:{indeterminate:"",color:"var(--primary-color)"}})],1):e._e(),o("video",{ref:"videoPlayer",staticClass:"video__player",attrs:{controlslist:"nodownload",oncontextmenu:"return false;"},on:{loadedmetadata:e.updateVideoDetails,timeupdate:e.updateVideoDetails,waiting:function(t){e.spinner=!0},canplay:function(t){e.spinner=!1}}},[o("source",{attrs:{src:e.videoSrc,type:"video/mp4"}})]),e.showProgressBar?o("div",{staticClass:"video__controls"},[o("div",{staticClass:"video__controls__progress__container",style:"margin-bottom:"+(e.showFunctions?"20px":"0")},[o("div",{ref:"videoPlayerProgress",staticClass:"video__controls__progress",on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleProgressClick(t)}}},[o("div",{staticClass:"video__controls__progress__track",style:{width:e.progress+"%"}},[o("div",{staticClass:"video__controls__progress__track--watching",style:{left:e.progress+"%"},attrs:{draggable:""},on:{drag:function(t){return t.stopPropagation(),t.preventDefault(),e.handleTrackOnDrag(t)}}})])])]),e.showFunctions?o("div",{staticClass:"video__controls__functions"},[o("div",[o("button",{staticClass:"video__controls__button",on:{click:function(t){return t.stopPropagation(),e.toggleVideoPlay(t)}}},[e.isPlaying?o("v-icon",{staticStyle:{color:"#fff"}},[e._v("mdi-pause")]):o("v-icon",{staticStyle:{color:"#fff"}},[e._v("mdi-play")])],1),o("div",{staticClass:"video__controls__duration"},[o("span",[e._v(e._s(e.currentTimeFormatted))]),e._v("/ "),o("span",[e._v(e._s(e.durationFormatted))]),e._v(" $el.ownerDocument.defaultView.console.log(currentTimeFormatted); $el.ownerDocument.defaultView.console.log("+e._s(e.durationFormatted)+"); ")])]),o("div",{staticClass:"video__controls__configs"},[o("div",{staticClass:"video__controls__volume"},[o("button",{ref:"volumeTrack",on:{click:function(t){t.stopPropagation(),e.volumeOptionsOpen=!e.volumeOptionsOpen}}},[e.volume<.1?o("v-icon",{staticStyle:{color:"#fff"}},[e._v("mdi-volume-low")]):e.volume>=.1&&e.volume<.8?o("v-icon",{staticStyle:{color:"#fff"}},[e._v("mdi-volume-medium")]):e.volume>=.8?o("v-icon",{staticStyle:{color:"#fff"}},[e._v("mdi-volume-high")]):e._e()],1),e.volumeOptionsOpen?o("div",{ref:"videoVolumeTrack",staticClass:"video__controls__volume--options",on:{click:function(t){return t.stopPropagation(),e.handleVolumeClick(t)}}},[o("div",{staticClass:"video__controls__volume--track"},[o("div",{staticClass:"video__controls__volume--track-current",style:{height:100*e.volume+"%"}}),o("div",{staticClass:"video__controls__volume--track-ball",style:{bottom:"Calc("+100*e.volume+"% - 0.25rem)"}})])]):e._e()]),o("div",{staticClass:"video__controls__speed"},[o("button",{ref:"speed",on:{click:function(t){t.stopPropagation(),e.speedOpen=!e.speedOpen}}},[o("span",[o("v-icon",{staticStyle:{color:"#fff"}},[e._v("mdi-speedometer")])],1)]),e.speedOpen?o("div",{staticClass:"video__controls__speed__options"},[o("div",{class:{active:!("2x"!==e.speed)},on:{click:function(t){return t.stopPropagation(),e.handleVideoPlaybackRate(2)}}},[e._v("2x")]),o("div",{class:{active:!("1.75x"!==e.speed)},on:{click:function(t){return t.stopPropagation(),e.handleVideoPlaybackRate(1.75)}}},[e._v("1.75x")]),o("div",{class:{active:!("1.5x"!==e.speed)},on:{click:function(t){return t.stopPropagation(),e.handleVideoPlaybackRate(1.5)}}},[e._v("1.5x")]),o("div",{class:{active:!("1x"!==e.speed)},on:{click:function(t){return t.stopPropagation(),e.handleVideoPlaybackRate(1)}}},[e._v("1x")]),o("div",{class:{active:!("0.75x"!==e.speed)},on:{click:function(t){return t.stopPropagation(),e.handleVideoPlaybackRate(.75)}}},[e._v("0.75x")]),o("div",{class:{active:!("0.5x"!==e.speed)},on:{click:function(t){return t.stopPropagation(),e.handleVideoPlaybackRate(.5)}}},[e._v("0.5x")])]):e._e()])])]):e._e()]):e._e()])},a=[],l=(o("9129"),o("a9e3"),{name:"VideoPlayer",props:{videoURL:{type:String,required:!0}},data:function(){return{volumeOptionsOpen:!1,volume:.3,isPlaying:!1,duration:0,currentTime:0,speed:"1x",speedOpen:!1,videoSrc:null,spinner:!0,showFunctions:!1,timeout:null,showProgressBar:!1}},computed:{currentTimeFormatted:function(){return this.formatTime(this.currentTime)},durationFormatted:function(){return this.formatTime(this.duration)},progress:function(){return this.currentTime/this.duration*100}},watch:{videoURL:function(e){e&&e!==this.videoSrc&&(this.videoSrc=e,this.$forceUpdate())}},mounted:function(){this.updateVideoDetails(),this.videoSrc=this.videoURL},methods:{toggleVideoPlay:function(){var e;null!==(e=this.$refs)&&void 0!==e&&e.videoPlayer.paused?(this.isPlaying=!0,this.$refs.videoPlayer.play()):(this.isPlaying=!1,this.$refs.videoPlayer.pause())},handleVolumeClick:function(e){var t=this.$refs.videoVolumeTrack,o=(t.getBoundingClientRect().top-e.pageY+t.offsetHeight)/100;o>1?(this.volume=o,this.$refs.videoPlayer.volume=1):o<.1?(this.volume=0,this.$refs.videoPlayer.volume=0):(this.volume=o,this.$refs.videoPlayer.volume=o)},updateVideoDetails:function(){var e;this.$refs.videoPlayer&&(Number.isNaN(this.$refs.videoPlayer.duration)||(this.duration=this.$refs.videoPlayer.duration),this.currentTime=this.$refs.videoPlayer.currentTime,null!==(e=this.$refs)&&void 0!==e&&e.videoPlayer.paused?(this.isPlaying=!1,this.$refs.videoPlayer.pause()):(this.isPlaying=!0,this.$refs.videoPlayer.play()))},formatTime:function(e){var t=Math.floor(e/3600),o=Math.floor(e%3600/60),i=Math.floor(e%60);return t=t<10?"0"+t:t,o=o<10?"0"+o:o,i=i<10?"0"+i:i,t>0?t+":"+o+":"+i:o+":"+i},handleProgressClick:function(e){var t=this.duration*e.offsetX/this.$refs.videoPlayerProgress.offsetWidth;this.currentTime=t,this.$refs.videoPlayer.currentTime=t},handleTrackOnDrag:function(e){if(0!==e.x&&0!==e.y){var t=this.$refs.videoPlayerProgress;if(t){var o=e.pageX-t.getBoundingClientRect().left,i=0;i=o,o<0?i=0:o>t.offsetWidth&&(i=t.offsetWidth),this.currentTime=this.duration*(i/t.offsetWidth),this.$refs.videoPlayer.currentTime=this.currentTime,window.ownerDocument.defaultView.console.log(this.currentTime)}}},handleVideoPlaybackRate:function(e){this.speed="".concat(e,"x"),this.$refs.videoPlayer.playbackRate=e,this.speedOpen&&(this.speedOpen=!1)},handleShowFunctions:function(){this.showFunctions=!0,this.showProgressBar=!0},setTimeoutFunction:function(){var e=this;setTimeout((function(){e.showFunctions=!1,e.speedOpen=!1,e.volumeOptionsOpen=!1}),6e3),setTimeout((function(){e.showProgressBar=!1}),1e4)}}}),c=l,u=(o("9bb6"),o("2877")),d=o("6544"),v=o.n(d),f=o("132d"),p=o("490a"),h=Object(u["a"])(c,s,a,!1,null,null,null),_=h.exports;v()(h,{VIcon:f["a"],VProgressCircular:p["a"]});var m={name:"App",components:{VideoPlayer:_},data:function(){return{videoURL:"https://ia800200.us.archive.org/0/items/Mario1_507/Mario1_507_HQ_512kb.mp4"}},methods:{changeVideoPlaying:function(e){this.videoURL=e}}},y=m,g=(o("034f"),o("62ad")),P=o("a523"),b=o("0fd9b"),w=Object(u["a"])(y,n,r,!1,null,null,null),k=w.exports;v()(w,{VCol:g["a"],VContainer:P["a"],VRow:b["a"]});o("5363");var O=o("f309");i["a"].use(O["a"]);var C=new O["a"]({});i["a"].config.productionTip=!1,new i["a"]({vuetify:C,render:function(e){return e(k)}}).$mount("#app")},"85ec":function(e,t,o){},"9bb6":function(e,t,o){"use strict";o("d9b0")},d9b0:function(e,t,o){}});
//# sourceMappingURL=app.f6f4c8e1.js.map