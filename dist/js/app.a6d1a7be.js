(function(t){function e(e){for(var a,r,c=e[0],o=e[1],u=e[2],p=0,d=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==i[o]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"034f":function(t,e,n){"use strict";n("85ec")},"689a":function(t,e,n){},"85ec":function(t,e,n){},"889e":function(t,e,n){"use strict";n("689a")},aa72:function(t,e,n){},b080:function(t,e,n){"use strict";n("aa72")},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},s=[],r=(n("034f"),n("2877")),c={},o=Object(r["a"])(c,i,s,!1,null,null,null),u=o.exports,l=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{display:"flex"}},[n("autocomplete",{attrs:{items:t.filteredItems,loading:t.loading,searchBy:"name"},on:{searchInput:t.onAutocompleteSearchInput,loadData:t.loadData},scopedSlots:t._u([{key:"listItem",fn:function(e){return[n("div",{staticStyle:{display:"flex",padding:"5px"}},[n("img",{staticClass:"user-avatar",attrs:{src:t.getUrlAvatar(e.item)}}),n("div",{staticStyle:{padding:"5px"}},[n("div",{staticStyle:{"font-size":"18px"}},[t._v(t._s(e.item.name))]),n("div",{staticStyle:{"font-size":"14px",color:"#777777"}},[t._v(" "+t._s(e.item.email)+" ")])])])]}}]),model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)},d=[],h=n("1da1"),f=n("d4ec"),v=n("bee2"),m=n("262e"),b=n("2caf"),y=(n("96cf"),n("4de4"),n("caad"),n("2532"),n("498a"),n("b0c0"),n("c740"),n("9ab4")),g=n("1b40"),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{on:{click:function(e){return e.stopPropagation(),t.onClick.apply(null,arguments)},keydown:t.keyDownNavigation}},[t.isFocus?n("div",{staticClass:"overlay"}):t._e(),n("div",{staticClass:"autocomplete",style:{zIndex:t.isFocus?51:49}},[n("div",{staticClass:"search-block"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],ref:"searchRef",staticClass:"search-field",attrs:{type:"text",placeholder:"Search"},domProps:{value:t.searchInput},on:{input:[function(e){e.target.composing||(t.searchInput=e.target.value)},t.onSearchInput]}}),n("magnify-icon",{staticClass:"search-icon"})],1),t.isFocus?[t.loading?n("div",[n("h1",[t._v("Loading")])]):n("ul",{ref:"listRef",staticClass:"content-block",staticStyle:{padding:"0","background-color":"white"}},t._l(t.items,(function(e,a){return n("li",{key:e.id,staticClass:"list-item",class:t.getClassNameItem(e,a),attrs:{tabindex:"0"},on:{click:function(n){return n.stopPropagation(),t.selectItem(e)}}},[t._t("listItem",null,{item:e})],2)})),0)]:t._e()],2)])},O=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg-icon",{attrs:{type:"mdi",path:t.path}})},k=[],I=n("1fee"),w=n("94ed"),_=function(t){Object(m["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(f["a"])(this,n),t=e.apply(this,arguments),t.path=w["a"],t}return n}(g["d"]);_=Object(y["a"])([Object(g["a"])({components:{SvgIcon:I["a"]}})],_);var A=_,S=A,C=Object(r["a"])(S,x,k,!1,null,null,null),R=C.exports,$=function(t){Object(m["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(f["a"])(this,n),t=e.apply(this,arguments),t.searchInput="",t.isFocus=!1,t.indexActive=null,t.isUploadItems=!1,t}return Object(v["a"])(n,[{key:"searchRef",get:function(){return this.$refs.searchRef}},{key:"getListRef",value:function(){return this.$refs.listRef}},{key:"onClick",value:function(t){var e;"overlay"===(null===t||void 0===t||null===(e=t.target)||void 0===e?void 0:e.className)?this.isFocus=!1:(this.isUploadItems||(this.isUploadItems=!0,this.$emit("loadData")),this.isFocus=!0,this.searchRef.focus())}},{key:"onSearchInput",value:function(t){this.$emit("select",null),this.$emit("searchInput",t.target.value)}},{key:"selectItem",value:function(t){this.$emit("select",t),this.searchInput=t[this.searchBy],this.$emit("searchInput",t[this.searchBy]),this.isFocus=!1}},{key:"getClassNameItem",value:function(t,e){return this.selected===t?"active-item":this.indexActive===e?"focus-item":""}},{key:"keyDownNavigation",value:function(t){var e="ArrowDown"===t.key,n="ArrowUp"===t.key,a="Enter"===t.key;if(e||n){var i=e?1:-1;null===this.indexActive&&(this.indexActive=e?-1:0),this.indexActive=(this.indexActive+i)%this.items.length,this.indexActive<0&&(this.indexActive=this.items.length-1),this.getListRef().childNodes[this.indexActive].focus()}a&&null!==this.indexActive&&this.selectItem(this.items[this.indexActive])}}]),n}(g["d"]);Object(y["a"])([Object(g["c"])()],$.prototype,"items",void 0),Object(y["a"])([Object(g["c"])()],$.prototype,"loading",void 0),Object(y["a"])([Object(g["c"])()],$.prototype,"searchBy",void 0),Object(y["a"])([Object(g["b"])("select")],$.prototype,"selected",void 0),Object(y["a"])([Object(g["e"])("isFocus")],$.prototype,"getListRef",null),$=Object(y["a"])([Object(g["a"])({components:{MagnifyIcon:R}})],$);var P=$,U=P,F=(n("889e"),Object(r["a"])(U,j,O,!1,null,"32635544",null)),D=F.exports,L=n("bc3a"),N=n.n(L),E=function t(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];Object(f["a"])(this,t),this.axios=N.a.create({withCredentials:n,baseURL:e,responseType:"json"})},M=function(t){Object(m["a"])(n,t);var e=Object(b["a"])(n);function n(){return Object(f["a"])(this,n),e.call(this,"https://jsonplaceholder.typicode.com/")}return Object(v["a"])(n,[{key:"getUsers",value:function(){return this.axios.get("users").then((function(t){return t.data}))}},{key:"getAvatars",value:function(){return this.axios.get("photos",{params:{_limit:10}}).then((function(t){return t.data}))}}]),n}(E),B=new M,T=function(t){Object(m["a"])(n,t);var e=Object(b["a"])(n);function n(){var t;return Object(f["a"])(this,n),t=e.apply(this,arguments),t.users=[],t.filteredItems=[],t.avatars=[],t.selected=null,t.loading=!0,t}return Object(v["a"])(n,[{key:"onAutocompleteSearchInput",value:function(t){this.selected||!this.users.length||this.loading||(this.filteredItems=this.users.filter((function(e){return e.name.trim().toLowerCase().includes(t.trim().toLowerCase())})))}},{key:"loadData",value:function(){var t=Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,B.getUsers();case 2:return this.users=t.sent,this.filteredItems=this.users,t.next=6,B.getAvatars();case 6:this.avatars=t.sent,this.loading=!1;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"getUrlAvatar",value:function(t){var e=this.avatars.findIndex((function(e){return e.id===t.id}));return e>-1?this.avatars[e].thumbnailUrl:"https://kctherapy.com/wp-content/uploads/2019/09/default-user-avatar-300x293.png"}}]),n}(g["d"]);T=Object(y["a"])([Object(g["a"])({components:{Autocomplete:D}})],T);var z=T,J=z,H=(n("b080"),Object(r["a"])(J,p,d,!1,null,"10b0a175",null)),q=H.exports;a["a"].use(l["a"]);var G=[{path:"/",name:"Home",component:q}],K=new l["a"]({routes:G}),Q=K,V=n("2f62");a["a"].use(V["a"]);var W=new V["a"].Store({state:{},mutations:{},actions:{},modules:{}});a["a"].config.productionTip=!1,new a["a"]({router:Q,store:W,render:function(t){return t(u)}}).$mount("#app")}});
//# sourceMappingURL=app.a6d1a7be.js.map