(this["webpackJsonpgit-prueba"]=this["webpackJsonpgit-prueba"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=(a(20),a(5)),i=(a(21),a(22),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("bf8ae977c9a949ddb9d6141d4886426c","&redirect_uri=").concat("https://kevindavis98.github.io/git-prueba/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var s=function(){return r.a.createElement("div",{className:"login"},r.a.createElement("img",{src:"SuperLogo.jpg",alt:""}),r.a.createElement("a",{href:i},"LOGIN WITH SUPERS\xd3NICO"))},u=a(9),m=a.n(u);a(23),a(24),a(25);var d=function(e){var t=e.title,a=e.Icon;return r.a.createElement("div",{className:"sidebarOption"},a&&r.a.createElement(a,{className:"sidebarOption__icon"}),a?r.a.createElement("h4",null,t):r.a.createElement("p",null,t))},p=a(10),E=a.n(p),f=a(12),v=a.n(f),b=a(13),h=a.n(b),y=Object(n.createContext)(),g=function(e){var t=e.initialState,a=e.reducer,c=e.children;return r.a.createElement(y.Provider,{value:Object(n.useReducer)(a,t)},c)},S=function(){return Object(n.useContext)(y)};var _=function(){var e,t=S(),a=Object(o.a)(t,2),n=a[0].playlists;return a[1],r.a.createElement("div",{className:"sidebar"},r.a.createElement("img",{className:"sidebar__logo",src:"SuperLogo.jpg",alt:""}),r.a.createElement(d,{Icon:E.a,title:"Home"}),r.a.createElement(d,{Icon:v.a,title:"Search"}),r.a.createElement(d,{Icon:h.a,title:"Your Library"}),r.a.createElement("br",null),r.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),r.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return r.a.createElement(d,{title:e.name})})))};a(31);var O=function(){return r.a.createElement("div",{className:"body"},r.a.createElement("h1",null,"I am the body"))};a(32);var j=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("h1",null,"I am the footer"))};var k=function(e){return e.spotify,r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"player__body"},r.a.createElement(_,null),r.a.createElement(O,null)),r.a.createElement(j,null))},w=new m.a;var N=function(){var e=S(),t=Object(o.a)(e,2),a=t[0],c=(a.user,a.token),l=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(l({type:"SET_TOKEN",token:t}),w.setAccessToken(t),w.getMe().then((function(e){l({type:"SET_USER",user:e})})),w.getUserPlaylists().then((function(e){l({type:"SET_PLAYLISTS",playlists:e})})))}),[]),r.a.createElement("div",{className:"app"},c?r.a.createElement(k,{spotify:w}):r.a.createElement(s,null))},I=a(2),T=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(I.a)(Object(I.a)({},e),{},{user:t.user});case"SET_TOKEN":return Object(I.a)(Object(I.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(I.a)(Object(I.a)({},e),{},{playlists:t.playlists});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,{initialState:{user:null,playlists:[],playing:!1,item:null,token:null},reducer:T},r.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.af294674.chunk.js.map