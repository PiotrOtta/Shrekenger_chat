(function(e){function t(t){for(var s,a,c=t[0],r=t[1],u=t[2],m=0,d=[];m<c.length;m++)a=c[m],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&d.push(i[a][0]),i[a]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(e[s]=r[s]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,c=1;c<n.length;c++){var r=n[c];0!==i[r]&&(s=!1)}s&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var s={},i={app:0},o=[];function a(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=s,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)a.d(n,s,function(t){return e[t]}.bind(null,s));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=r;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1837:function(e,t,n){},4158:function(e,t,n){e.exports=n.p+"img/codilion.eda2f3ff.png"},"45db":function(e,t,n){"use strict";n("1837")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid",attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"container d-flex"},[n("DostepnePokoje"),n("Shrekenger"),n("DostepniUzytkownicy")],1)])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"Container3D"},[s("div",{staticClass:"Box3D"},[s("img",{staticClass:"name",attrs:{src:n("4158")}}),s("img",{staticClass:"Object3D",attrs:{src:n("5f83")}})])])}],a=n("5530"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"chatbox"},[n("div",{staticClass:"GornyPasek"},[e._m(0),n("div",{staticClass:"name"},[e._v(e._s(e.getActiveRoomName))]),n("span",{staticClass:"badge d-lg-none"},[e._v(e._s(e.countUsersOnline)+" użytkowników")])]),n("div",{staticClass:"middle"},[n("MessageList")],1),n("div",{staticClass:"bottom-bar"},[n("MessageInput")],1)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"avatar"},[s("img",{attrs:{src:n("7cd0")}})])}],u=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.getMessages,(function(e,t){return n("Message",{key:t,attrs:{from:e.from,message:e.message}})})),1)},m=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{incoming:!e.mine,outgoing:e.mine}},[n("div",{staticClass:"bubble"},[n("p",{staticClass:"text-success bg-white p-1 rounded"},[e._v(e._s(e.from))]),n("p",[e._v(e._s(e.message))])])])},f=[],p={name:"Message",props:{from:{required:!0,type:String},message:{required:!0,type:String}},computed:Object(a["a"])(Object(a["a"])({},Object(u["c"])(["getUserName"])),{},{mine:function(){return this.getUserName===this.from}})},v=p,g=n("2877"),_=Object(g["a"])(v,d,f,!1,null,null,null),b=_.exports,E={name:"MessageList",components:{Message:b},computed:Object(a["a"])({},Object(u["c"])(["getMessages"])),watch:{getMessages:function(){this.$forceUpdate()}}},O=E,h=Object(g["a"])(O,l,m,!1,null,null,null),j=h.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"Wpisz wiadomość..."},domProps:{value:e.message},on:{keyup:e.sendMessageByInput,input:function(t){t.target.composing||(e.message=t.target.value)}}}),n("button",{staticClass:"buttonix",on:{click:e.sendMsg}},[n("span",[e._v("Wyślij")]),n("div",{staticClass:"wave"})])])},N=[],S={name:"MessageInput",data:function(){return{message:null}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["sendMessage"])),{},{sendMsg:function(){this.sendMessage(this.message),this.message=null},sendMessageByInput:function(e){var t=e.key,n=e.keyCode;"Enter"!==t&&13!==n||this.sendMsg()}})},C=S,y=Object(g["a"])(C,k,N,!1,null,null,null),M=y.exports,R={components:{MessageInput:M,MessageList:j},computed:Object(a["a"])(Object(a["a"])({},Object(u["c"])(["getActiveRoomName"])),Object(u["c"])(["countUsersOnline"]))},U=R,A=(n("45db"),Object(g["a"])(U,c,r,!1,null,null,null)),w=A.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"containerPokoje d-sm-block"},[n("div",{staticClass:"dostepnePokoje d-none d-sm-block"},[e._v("Dostępne pokoje")]),n("ul",{staticClass:"ListaPokoje"},e._l(e.rooms,(function(t){return n("li",{key:t.id,staticClass:"pokoj",class:{focus:e.activeRoom===t.id},on:{click:function(n){return e.joinRoom(t.id)}}},[n("span",{staticClass:"title d-none d-sm-block"},[e._v(e._s(t.name))])])})),0)])},x=[],P=(n("dca8"),Object.freeze([{id:1,name:"Pokój 1: Bagno"},{id:2,name:"Pokój 2: Dom Shreka"},{id:3,name:"Pokój 3: Zamek Lorda Farquaada"},{id:4,name:"Pokój 4: Gospoda Zacisze"},{id:5,name:"Pokój 5: Bajo-jajo"}])),L={name:"AvaiableRooms",data:function(){return{rooms:P}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["joinRoom"])),{},{joinDefaultRoom:function(){var e=this;setTimeout((function(){e.getUserName?e.joinRoom(e.activeRoom):e.joinDefaultRoom()}),100)}}),computed:Object(a["a"])({},Object(u["c"])({activeRoom:"getActiveRoom",getUserName:"getUserName"})),mounted:function(){this.joinDefaultRoom()}},I=L,T=Object(g["a"])(I,D,x,!1,null,null,null),z=T.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cointainerOsoby d-none d-lg-block"},[n("CurrentUser"),n("div",{staticClass:"dostepniUzytkownicy"},[e._v("Dostępni użytkownicy "+e._s(e.countUsersOnline))]),n("ul",{staticClass:"ListaUzytkownikow"},e._l(e.getUsersOnline,(function(t){return n("li",{staticClass:"user"},[e._m(0,!0),n("span",{staticClass:"title"},[e._v(e._s(t))])])})),0)],1)},G=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"avatar"},[s("img",{attrs:{src:n("7cd0")}})])}],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"profil"},[e._m(0),n("div",{staticClass:"name2"},[e._v(" "+e._s(e.getUserName)+" "),n("span",{staticClass:"btn-link",staticStyle:{cursor:"pointer"},on:{click:e.inputNickName}},[e._v(" Zmień nick ")])])])},B=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"avatar"},[s("img",{attrs:{src:n("7cd0")}})])}],q={name:"CurrentUser",computed:Object(a["a"])({},Object(u["c"])(["getUserName"])),methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["setNickName"])),{},{inputNickName:function(){var e=prompt("Podaj nazwę");e?this.attemptChangeNickname(e):this.inputNickName()},attemptChangeNickname:function(e){var t=this;setTimeout((function(){try{t.setNickName(e)}catch(n){t.attemptChangeNickname(e)}}),100)}}),mounted:function(){this.inputNickName()}},W=q,F=Object(g["a"])(W,J,B,!1,null,null,null),Z=F.exports,H={name:"AvaiableUsers",components:{CurrentUser:Z},computed:Object(a["a"])({},Object(u["c"])(["countUsersOnline","getUsersOnline"]))},K=H,V=Object(g["a"])(K,$,G,!1,null,"79acb25e",null),Q=V.exports,X=n("58f1"),Y=n.n(X),ee={name:"App",components:{DostepnePokoje:z,Shrekenger:w,DostepniUzytkownicy:Q},methods:Object(a["a"])({},Object(u["b"])(["initService"])),created:function(){this.initService()},mounted:function(){Y.a.init(document.querySelectorAll(".Box3D"),{max:25,speed:400})}},te=ee,ne=(n("034f"),Object(g["a"])(te,i,o,!1,null,null,null)),se=ne.exports,ie=n("5f5b"),oe=n("498a"),ae=(n("f9e3"),n("2dd8"),n("d4ec")),ce=n("bee2"),re=n("8e27"),ue=n.n(re),le={CONNECT:"connect"},me={SEND_MESSAGE:"sendMessage",JOIN_ROOM:"joinRoom",CHANGE_USERNAME:"changeUsername"},de={NEW_MESSAGE:"newMessage",USER_JOINED:"userJoined",USER_LEFT:"userLeft",USERS_ONLINE:"usersOnline"},fe=function(){function e(t){var n=this;Object(ae["a"])(this,e),this.io=ue()(),this.io.on(le.CONNECT,(function(){n.setupEventListeners(t),n.initialized=!0}))}return Object(ce["a"])(e,[{key:"setupEventListeners",value:function(e){this.io.on(de.NEW_MESSAGE,(function(t){e.commit("ADD_MESSAGE",t)})),this.io.on(de.USER_LEFT,(function(t){e.commit("DELETE_USER",t)})),this.io.on(de.USER_JOINED,(function(t){e.commit("ADD_USER",t)})),this.io.on(de.USERS_ONLINE,(function(t){e.commit("SET_USERS_ONLINE",t)}))}},{key:"send",value:function(e,t){if(!this.initialized)throw new Error("Połączenie nie zostało nawiązane.");this.io.emit(e,t)}},{key:"sendMessage",value:function(e){this.send(me.SEND_MESSAGE,e)}},{key:"setNickName",value:function(e){this.send(me.CHANGE_USERNAME,e)}},{key:"joinRoom",value:function(e){this.send(me.JOIN_ROOM,e)}}]),e}(),pe=null,ve={initService:function(e){var t=e.state;t.isInitialized||(pe=new fe(this))},sendMessage:function(e,t){e.commit("ADD_MESSAGE",{from:e.state.nickName,message:t}),pe.sendMessage(t)},setNickName:function(e,t){e.commit("SET_NICKNAME",t),pe.setNickName(t)},joinRoom:function(e,t){e.commit("SET_ACTIVE_ROOM",t),e.commit("CLEAR_MESSAGES"),pe.joinRoom(t)}},ge=(n("7db0"),n("b0c0"),{getActiveRoomName:function(e){var t;return null===(t=P.find((function(t){return t.id===e.activeRoom})))||void 0===t?void 0:t.name},getActiveRoom:function(e){return e.activeRoom},getUsersOnline:function(e){return e.usersOnline},countUsersOnline:function(e){var t,n;return null!==(t=null===(n=e.usersOnline)||void 0===n?void 0:n.length)&&void 0!==t?t:0},getUserName:function(e){var t;return null!==(t=e.nickName)&&void 0!==t?t:""},getMessages:function(e){return e.messages}}),_e=(n("4de4"),{SET_NICKNAME:function(e,t){e.nickName=t},SET_ACTIVE_ROOM:function(e,t){e.activeRoom=t},CLEAR_MESSAGES:function(e){e.messages=[]},ADD_MESSAGE:function(e,t){e.messages.push(t)},ADD_USER:function(e,t){e.usersOnline.push(t)},DELETE_USER:function(e,t){e.usersOnline=e.usersOnline.filter((function(e){return e!==t}))},SET_USERS_ONLINE:function(e,t){e.usersOnline=t}}),be={activeRoom:P[0].id,nickName:null,isInitialized:!1,usersOnline:[],messages:[]};s["default"].use(u["a"]);var Ee=new u["a"].Store({actions:ve,getters:ge,mutations:_e,state:be}),Oe=Ee;s["default"].config.productionTip=!1,s["default"].use(ie["a"]),s["default"].use(oe["a"]),new s["default"]({store:Oe,render:function(e){return e(se)}}).$mount("#app")},"5f83":function(e,t,n){e.exports=n.p+"img/Shrekenger.2da771dd.png"},"7cd0":function(e,t,n){e.exports=n.p+"img/Logo_Shrekenger_gradient.48eba43e.png"},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.41b1d2d3.js.map