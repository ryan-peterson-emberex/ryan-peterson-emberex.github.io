(this["webpackJsonpresponsive-design"]=this["webpackJsonpresponsive-design"]||[]).push([[0],{19:function(e,n,t){e.exports=t(47)},24:function(e,n,t){},47:function(e,n,t){"use strict";t.r(n);var r=t(0),i=t.n(r),a=t(12),o=t.n(a),c=(t(24),t(2)),u=t(1),l=t(8),s=t(13),p=t(3),d=t(14),f=t.n(d);function h(e){for(var n=[],t=0;t<e.length;t+=1){var r=e[t].split("x"),i=Object(u.a)(r,2),a=i[0],o=i[1];n.push({width:Number(a.trim()),height:Number(o.trim())})}return n}function m(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  input {\n    margin-left: 5px;\n    width: 160px;\n  }\n"]);return m=function(){return e},e}function x(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return x=function(){return e},e}function b(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  "," + "," {\n    margin-left: 10px;\n  }\n"]);return b=function(){return e},e}function v(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return v=function(){return e},e}function O(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n\n  label {\n    margin-left: 10px;\n  }\n  input {\n    width: 20px;\n    height: 20px;\n  }\n"]);return O=function(){return e},e}function w(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  font-size: 18px;\n"]);return w=function(){return e},e}function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(t,!0).forEach((function(n){Object(s.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=[{id:"desktops",viewports:h(["1024 x 768","1024 x 724","1366 x 609"])},{id:"iPads",viewports:h(["1024 x 1366","768 x 1024"])},{id:"AndroidTablets",viewports:h(["600 x 960","800 x 1280","1280 x 850"])},{id:"iPhone",viewports:h(["414 x 896","375 x 812","414 x 736","375 x 667","320 x 568"])},{id:"AndroidPhones",viewports:h(["360 x 740","480 x 853","412 x 732","412 x 824"])}].map((function(e){var n=e.id;return e.viewports.map((function(e){return g({},e,{isPhone:"iPhone"===n||"AndroidPhones"===n})}))})).reduce((function(e,n){return[].concat(Object(l.a)(e),Object(l.a)(n))})).map((function(e,n){return g({},e,{id:n})})),E=Object(p.a)("div")(w()),P=Object(p.a)("div")(O()),k=p.a.div(v()),S=p.a.div(b(),k,k),C=p.a.div(x()),D=Object(p.a)("div")(m()),A=function(e){var n=Object(r.useState)(""),t=Object(u.a)(n,2),a=t[0],o=t[1],c=Object(r.useState)(!1),l=Object(u.a)(c,2),s=l[0],p=l[1],d=Object(r.useState)(!1),h=Object(u.a)(d,2),m=h[0],x=h[1],b=Object(r.useState)(y[0]),v=Object(u.a)(b,2),O=v[0],w=v[1],j=O.width,g=O.height,A=m?Math.max(j,g):j,W=m?Math.min(j,g):g;return i.a.createElement(E,null,!s&&i.a.createElement(D,null,i.a.createElement("div",null,"Url to host:"),i.a.createElement("input",{type:"text",value:a,onChange:function(e){return o(e.target.value)}}),i.a.createElement("button",{type:"button",onClick:function(e){return p(!0)}},"Set")),s&&i.a.createElement(i.a.Fragment,null,i.a.createElement(P,null,i.a.createElement("label",null,"Force Widescreen: "),i.a.createElement("input",{type:"checkbox",checked:m,onChange:function(e){return x(!m)}})),i.a.createElement(S,null,f()(y,2).map((function(e){return i.a.createElement(k,null,e.map((function(e){return i.a.createElement(C,null,i.a.createElement("input",{name:"resolution",type:"radio",value:e.id,checked:e.id===O.id,onClick:function(){return w(e)}}),i.a.createElement("label",null,e.width," x ",e.height," ",e.isPhone&&"(Phone)"))})))}))),"Current Resolution: ",A," x ",W,i.a.createElement("iframe",{src:a,title:"width=".concat(j,"height=").concat(g),height:"".concat(W,"px"),width:"".concat(A,"px")})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[19,1,2]]]);
//# sourceMappingURL=main.064f7fad.chunk.js.map