(this["webpackJsonpgit-prueba"]=this["webpackJsonpgit-prueba"]||[]).push([[0],{157:function(e,t,a){e.exports=a(453)},161:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},166:function(e,t,a){},172:function(e,t,a){},173:function(e,t,a){},174:function(e,t,a){},175:function(e,t,a){},453:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(16),c=a.n(r),i=(a(161),a(24)),o=(a(162),a(163),"".concat("https://accounts.spotify.com/authorize","?client_id=").concat("bf8ae977c9a949ddb9d6141d4886426c","&redirect_uri=").concat("https://kevindavis98.github.io/git-prueba/","&scope=").concat(["user-read-currently-playing","user-read-recently-played","user-read-playback-state","user-top-read","user-modify-playback-state"].join("%20"),"&response_type=token&show_dialog=true"));var s=function(){return l.a.createElement("div",{className:"login"},l.a.createElement("img",{src:"SuperLogo.jpg",alt:""}),l.a.createElement("a",{href:o},"LOGIN WITH SUPERS\xd3NICO"))},m=a(131),u=a.n(m);a(164),a(165),a(166);var E=function(e){var t=e.title,a=e.Icon;return l.a.createElement("div",{className:"sidebarOption"},a&&l.a.createElement(a,{className:"sidebarOption__icon"}),a?l.a.createElement("h4",null,t):l.a.createElement("p",null,t))},d=a(132),p=a.n(d),f=a(58),_=a.n(f),v=a(137),y=a.n(v),g=Object(n.createContext)(),b=function(e){var t=e.initialState,a=e.reducer,r=e.children;return l.a.createElement(g.Provider,{value:Object(n.useReducer)(a,t)},r)},S=function(){return Object(n.useContext)(g)};var h=function(){var e,t=S(),a=Object(i.a)(t,2),n=a[0].playlists;return a[1],l.a.createElement("div",{className:"sidebar"},l.a.createElement("img",{className:"sidebar__logo",src:"SuperLogo.jpg",alt:""}),l.a.createElement(E,{Icon:p.a,title:"Home"}),l.a.createElement(E,{Icon:_.a,title:"Search"}),l.a.createElement(E,{Icon:y.a,title:"Your Library"}),l.a.createElement("br",null),l.a.createElement("strong",{className:"sidebar__title"},"PLAYLISTS"),l.a.createElement("hr",null),null===n||void 0===n||null===(e=n.items)||void 0===e?void 0:e.map((function(e){return l.a.createElement(E,{title:e.name})})))},N=(a(172),a(173),a(467));var T=function(){var e,t=S(),a=Object(i.a)(t,2),n=a[0].user;return a[1],l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"header__left"},l.a.createElement(_.a,null),l.a.createElement("input",{placeholder:"Search for Artists, Songs, Playlists",type:"text"})),l.a.createElement("div",{className:"header__right"},l.a.createElement(N.a,{alt:null===n||void 0===n?void 0:n.display_name,src:null===n||void 0===n||null===(e=n.image[0])||void 0===e?void 0:e.url}),l.a.createElement("h4",null,null===n||void 0===n?void 0:n.display_name)))},O=a(138),k=a.n(O),j=a(139),I=a.n(j),w=a(140),L=a.n(w);a(174);var P=function(e){var t=e.track,a=void 0===t?"test":t;return l.a.createElement("div",{className:"songRow"},l.a.createElement("img",{classname:"songRow__album",src:a.album.images[0].url,alt:""}),l.a.createElement("div",{className:"songRow__info"},l.a.createElement("h1",null,a.name),l.a.createElement("p",null,a.artists.map((function(e){return e.name})).join(", "),a.album.name)))};var A=function(e){var t=e.spotify,a=S(),n=Object(i.a)(a,2),r=n[0].discover_weekly;return n[1],l.a.createElement("div",{className:"body"},l.a.createElement(T,{spotify:t}),l.a.createElement("div",{className:"body__info"},l.a.createElement("img",{src:null===r||void 0===r?void 0:r.images[0].url,alt:""}),l.a.createElement("div",{className:"body__infoText"},l.a.createElement("strong",null,"PLAYLIST"),l.a.createElement("h2",null,"Discover"),l.a.createElement("p",null,null===r||void 0===r?void 0:r.description))),l.a.createElement("div",{className:"body__songs"},l.a.createElement("div",{className:"body__icons"},l.a.createElement(k.a,{className:"body__shuffle"}),l.a.createElement(I.a,{fontSize:"large"}),l.a.createElement(L.a,null)),null===r||void 0===r?void 0:r.tracks.items.map((function(e){return l.a.createElement(P,{track:e.track})}))))},Y=(a(175),a(144)),R=a.n(Y),C=a(143),M=a.n(C),x=a(145),G=a.n(x),U=a(142),W=a.n(U),z=a(146),K=a.n(z),V=a(141),D=a.n(V),J=a(465),B=a(466),F=a(147),H=a.n(F),Z=a(148),Q=a.n(Z);var X=function(e){var t=e.spotify,a=S(),r=Object(i.a)(a,2),c=r[0],o=(c.token,c.item),s=c.playing,m=r[1];Object(n.useEffect)((function(){t.getMycurrentPlaybackState().then((function(e){console.log(e),m({type:"SET_PLAYING",playing:e.is_playing}),m({type:"SET_ITEM",item:e.item})}))}),[t]);var u=function(){s?(t.pause(),m({type:"SET_PLAYING",playing:!1})):(t.play(),m({type:"SET_PLAYING",playing:!0}))};return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer__left"},l.a.createElement("img",{className:"footer__albumLogo",src:null===o||void 0===o?void 0:o.album.images[0].url,alt:null===o||void 0===o?void 0:o.name}),o?l.a.createElement("div",{class:"footer__songInfo"},l.a.createElement("h4",null,o.name),l.a.createElement("p",null,o.artists.map((function(e){return e.name})).join(", "))):l.a.createElement("div",{className:"footer_songInfo"},l.a.createElement("h4",null,"No song is playing"),l.a.createElement("p",null,"..."))),l.a.createElement("div",{className:"footer__center"},l.a.createElement(D.a,{className:"footer__green"}),l.a.createElement(W.a,{onClick:function(){t.skipToNext(),t.getMyCurrentPlayingTrack().then((function(e){m({type:"SET_ITEM",item:e.item}),m({type:"SET_PLAYING",playing:!0})}))},className:"footer__icon"}),s?l.a.createElement(M.a,{onClick:u,fontSize:"large",className:"footer__icon"}):l.a.createElement(R.a,{onClick:u,fontSize:"large",className:"footer__icon"}),l.a.createElement(G.a,{className:"footer__icon"}),l.a.createElement(K.a,{className:"footer__green"})),l.a.createElement("div",{className:"footer_right"},l.a.createElement(J.a,{container:!0,spacing:2},l.a.createElement(J.a,{item:!0},l.a.createElement(H.a,null)),l.a.createElement(J.a,{item:!0},l.a.createElement(Q.a,null)),l.a.createElement(J.a,{item:!0,xs:!0},l.a.createElement(B.a,{"aria-labelledby":"continuous-slider"})))))};var $=function(e){var t=e.spotify;return l.a.createElement("div",{className:"player"},l.a.createElement("div",{className:"player__body"},l.a.createElement(h,null),l.a.createElement(A,{spotify:t})),l.a.createElement(X,null))},q=new u.a;var ee=function(){var e=S(),t=Object(i.a)(e,2),a=t[0].token,r=t[1];return Object(n.useEffect)((function(){var e=window.location.hash.substring(1).split("&").reduce((function(e,t){var a=t.split("=");return e[a[0]]=decodeURIComponent(a[1]),e}),{});window.location.hash="";var t=e.access_token;t&&(q.setAccessToken(t),r({type:"SET_TOKEN",token:t}),q.getPlaylist("37i9dQZEVXcNnhZ8AVJEGj").then((function(e){return r({type:"SET_DISCOVER_WEEKLY",discover_weekly:e})})),q.getMyTopArtists().then((function(e){return r({type:"SET_TOP_ARTISTS",top_artists:e})})),r({type:"SET_SPOTIFY",spotify:q}),q.getMe().then((function(e){r({type:"SET_USER",user:e})})),q.getUserPlaylists().then((function(e){r({type:"SET_PLAYLISTS",playlists:e})})))}),[a,r]),l.a.createElement("div",{className:"app"},!a&&l.a.createElement(s,null),a&&l.a.createElement($,{spotify:q}))},te=a(8),ae=(a(176),function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(te.a)(Object(te.a)({},e),{},{user:t.user});case"SET_PLAYING":return Object(te.a)(Object(te.a)({},e),{},{playing:t.playing});case"SET_ITEM":return Object(te.a)(Object(te.a)({},e),{},{item:t.item});case"SET_TOKEN":return Object(te.a)(Object(te.a)({},e),{},{token:t.token});case"SET_PLAYLISTS":return Object(te.a)(Object(te.a)({},e),{},{playlists:t.playlists});case"SET_DISCOVER_WEEKLY":return Object(te.a)(Object(te.a)({},e),{},{discover_weekly:t.discover_weekly});case"SET_SPOTIFY":return Object(te.a)(Object(te.a)({},e),{},{spotify:t.spotify});default:return e}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(b,{initialState:{user:null,playlists:[],spotify:null,discover_weekly:null,top_artists:null,playing:!1,item:null,token:null},reducer:ae},l.a.createElement(ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[157,1,2]]]);
//# sourceMappingURL=main.88c3788f.chunk.js.map