(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{26:function(e,n,t){e.exports=t.p+"static/media/Shape.68ca57dc.svg"},30:function(e,n,t){e.exports=t.p+"static/media/Logo.96990a1b.svg"},32:function(e,n,t){e.exports=t(59)},37:function(e,n,t){},39:function(e,n,t){},57:function(e,n,t){},59:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(25),i=t.n(c),l=(t(37),t(14)),o=t(4),s=t(6),u=t(8),f=t(7),p=t(9),d=t(1),m=t(2),v=t(26),b=t.n(v);function h(){var e=Object(d.a)(["\n  text-align: left;\n  height: 40px;\n  padding: 0 20px;\n  font-weight: normal;\n  font-size: 13px;\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  &:hover {\n    background: #f1fcff;\n  }\n  &:focus {\n    background: #f1fcff;\n  }\n  &:active {\n    background: #f1fcff;\n  }\n\n  input {\n    opacity: 0;\n    position: absolute;\n    z-index: -1;\n    :checked {\n      + .checkbox {\n        &::before {\n          content: '';\n          position: absolute;\n          background-position: center center;\n          width: 12px;\n          height: 8px;\n          top: 6px;\n          left: 5px;\n          background: url(",") no-repeat;\n        }\n        &::after {\n          border: 1px solid #2196f3;\n        }\n      }\n    }\n    + .checkbox::after {\n      content: '';\n      width: 20px;\n      height: 20px;\n      position: absolute;\n      border: 1px solid #9abbce;\n      box-sizing: border-box;\n      border-radius: 2px;\n    }\n  }\n"]);return h=function(){return e},e}function g(){var e=Object(d.a)(["\n  display: inline-block;\n  left: 0;\n  margin-right: 10px;\n  position: relative;\n  width: 20px;\n  height: 20px;\n"]);return g=function(){return e},e}var x=m.b.span(g()),E=m.b.label(h(),b.a),k=function(e){var n=e.label;return r.a.createElement("div",{className:"checkboxes-list__item"},r.a.createElement(E,null,r.a.createElement("input",{type:"checkbox"}),r.a.createElement(x,{className:"checkbox"}),n))};function w(){var e=Object(d.a)(["\n  padding: 0;\n  margin: 10px 0 5px 0;\n  list-style: none;\n"]);return w=function(){return e},e}function O(){var e=Object(d.a)(["\n  background: #ffffff;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  padding: 5px 0;\n"]);return O=function(){return e},e}function j(){var e=Object(d.a)(["\n  font-style: normal;\n  margin: 15px 0 0 20px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 12px;\n  letter-spacing: 0.5px;\n  text-transform: uppercase;\n"]);return j=function(){return e},e}var y=m.b.p(j()),A=m.b.div(O()),_=m.b.ul(w()),N=function(){return r.a.createElement(A,{className:"filters__item filter"},r.a.createElement(y,null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"),r.a.createElement("div",{className:"filter__content"},r.a.createElement("div",{className:"filter__controls checkboxes-list"},r.a.createElement(_,null,[{label:"\u0412\u0441\u0435",id:"all"},{label:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a",id:"non-stop"},{label:"1 \u043f\u0435\u0440\u0441\u0430\u0434\u043a\u0430",id:"1-trasplant"},{label:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:"2-transplant"},{label:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438",id:"3-transplant"}].map((function(e){var n=e.label,t=e.id;return r.a.createElement("li",{key:t},r.a.createElement(k,{label:n}))}))))))};function z(){var e=Object(d.a)(["\n  font-size: 12px;\n  font-family: 'Open Sans', sans-serif !important;\n  line-height: 20px;\n"]);return z=function(){return e},e}function S(){var e=Object(d.a)(["\n  width: 50%;\n  display: inline-block;\n  height: 50px;\n  left: calc(50% - 251px / 2 + 252.5px);\n  background: ",";\n  color: ",";\n  border: 1px solid #dfe5ec;\n"]);return S=function(){return e},e}var I=m.b.button(S(),(function(e){return e.active?"#2196F3":"#fff"}),(function(e){return e.active?"#fff":"#4A4A4A"})),D=m.b.span(z()),B=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(f.a)(n).call(this))).active=function(){var n=e.props.sortDescending;e.setState({active:!0}),n()},e.state={active:!1},e}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){var e=this.props,n=(e.sortDescending,e.sortByAscending),t=this.state.active;return r.a.createElement("div",{className:"tabs-wrapper"},r.a.createElement(I,{type:"button",onClick:this.active,active:t},r.a.createElement(D,null,"\u0441\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439")),r.a.createElement(I,{onClick:function(){return n()},active:t},r.a.createElement(D,null,"\u0441\u0430\u043c\u044b\u0439 \u0434\u043e\u0440\u043e\u0433\u043e\u0439")))}}]),n}(r.a.Component);function M(){var e=Object(d.a)(["\n  width: 35%;\n\n  :nth-last-of-type(1) {\n    width: auto;\n  }\n"]);return M=function(){return e},e}function T(){var e=Object(d.a)(["\n  color: #4a4a4a;\n  margin: 0;\n  font-size: 14px;\n  line-height: 21px;\n  font-weight: 600;\n"]);return T=function(){return e},e}function C(){var e=Object(d.a)(["\n  color: #a0b0b9;\n  letter-spacing: 0.5px;\n  margin: 11px 0 0 0;\n  font-size: 12px;\n  line-height: 18px;\n  text-transform: uppercase;\n"]);return C=function(){return e},e}function F(){var e=Object(d.a)(["\n  display: flex;\n  text-align: left;\n\n  &.ticket-preview__flight {\n    width: 33%;\n  }\n"]);return F=function(){return e},e}var H=m.b.div(F()),J=m.b.p(C()),W=m.b.p(T()),q=m.b.div(M()),L=function(e){return e.segments.map((function(e){var n,t=e.origin,a=e.destination,c=e.date,i=e.duration,l=e.stops,o=l.reduce((function(e,n){return"".concat(n,", ").concat(e)}),""),s=Math.floor(i/60),u=i-60*s,f=new Date(c);switch(l.length){case 1:n="1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430";break;case 3:n="".concat(l.length," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438");break;default:n="\u0431\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}var p="".concat(f.getHours(),":").concat(f.getMinutes()<10?"0".concat(f.getMinutes()):f.getMinutes());return r.a.createElement(H,null,r.a.createElement(q,null,r.a.createElement(J,null,"".concat(t," - ").concat(a)),r.a.createElement(W,null,"".concat(p," - ").concat(function(e,n,t){var a=e.getHours()+n,r=e.getMinutes()+t,c=0;return a>=24&&(a-=24)>=24&&(a-=24),r>=60?(c=r-60,a+=1):c=r,"".concat(a<10?"0".concat(a):a,":").concat(c<10?"0".concat(c):c)}(f,s,u)))),r.a.createElement(q,null,r.a.createElement(J,null,"\u0412 \u043f\u0443\u0442\u0438"),r.a.createElement(W,null,"".concat(s,"\u0447 ").concat(u<10?"0".concat(u):u,"\u043c"))),r.a.createElement(q,null,r.a.createElement(J,null,n),r.a.createElement(W,null,o)))}))};function P(){var e=Object(d.a)(["\n  color: #2196f3;\n  margin: 7px 0 0 0px;\n  font-size: 24px;\n  line-height: 24px;\n"]);return P=function(){return e},e}function $(){var e=Object(d.a)(["\n  margin: 0 30px 0 0;\n"]);return $=function(){return e},e}function G(){var e=Object(d.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return G=function(){return e},e}function K(){var e=Object(d.a)(["\n  background: #ffffff;\n  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);\n  border-radius: 5px;\n  margin-top: 20px;\n  padding: 20px;\n"]);return K=function(){return e},e}var Q=m.b.div(K()),R=m.b.div(G()),U=m.b.div($()),V=m.b.div(P()),X=function(e){var n=e.tickets,t=0;return r.a.createElement(r.a.Fragment,null,n.map((function(e){var n=e.price,a=e.carrier,c=e.segments;if(!((t+=1)>6))return r.a.createElement(Q,{stat:100},r.a.createElement(R,null,r.a.createElement(V,null,r.a.createElement("span",null,"".concat(n," \u0420"))),r.a.createElement("div",{className:"ticket-preview__carriers"},r.a.createElement(U,null,r.a.createElement("img",{className:"ticket-carrier__img",src:"//pics.avs.io/99/36/".concat(a,".png"),width:"100",height:"40"})))),r.a.createElement(L,{segments:c}))})))},Y=(t(39),function(){return r.a.createElement("div",{className:"loadingio-spinner-spin-iictpridqml"},r.a.createElement("div",{className:"ldio-1729iupfvxn"},r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null)),r.a.createElement("div",null,r.a.createElement("div",null))))}),Z=t(5),ee=t.n(Z),ne=t(12),te=t(13),ae=t.n(te),re=function e(){Object(o.a)(this,e),this.getTicketsId=Object(ne.a)(ee.a.mark((function e(){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("https://front-test.beta.aviasales.ru/search");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),this.getAllTickets=function(){var e=Object(ne.a)(ee.a.mark((function e(n){return ee.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ae.a.get("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},ce=(t(57),t(30)),ie=t.n(ce);function le(){var e=Object(d.a)(["\n  body {\n    background-color: #E5E5E5;\n    font-family: 'Open Sans', sans-serif;\n    font-size: 12px;\n    font-weight: 600;\n    color: #4A4A4A;\n    line-height: 20px;\n\n  }\n"]);return le=function(){return e},e}var oe=Object(m.a)(le()),se=function(e){function n(){var e;return Object(o.a)(this,n),(e=Object(u.a)(this,Object(f.a)(n).call(this))).servisec=new re,e.tickets=function(){var n=e.state.ticketId;n&&e.servisec.getAllTickets(n).then((function(n){if(n.data.stop)console.log("STOP");else{var t=n.data.tickets,a=e.state.ticketsAll;e.setState({ticketsAll:[].concat(Object(l.a)(a),Object(l.a)(t)),loading:!1}),e.tickets()}})).catch((function(n){return e.tickets()}))},e.sortDescending=function(){var n=e.state.ticketsAll.sort((function(e,n){return e.price>n.price?1:e.price<n.price?-1:0}));e.setState({ticketsAll:n})},e.sortByAscending=function(){var n=e.state.ticketsAll.sort((function(e,n){return e.price<n.price?1:e.price>n.price?-1:0}));e.setState({ticketsAll:n})},e.state={ticketsAll:[],ticketId:null,loading:!0},e}return Object(p.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.servisec.getTicketsId().then((function(n){var t=n.data;return e.setState({ticketId:t.searchId})})),this.tickets()}},{key:"render",value:function(){console.log(this.state);var e=this.state,n=e.ticketsAll,t=e.loading?r.a.createElement(Y,null):r.a.createElement(X,{tickets:n});return r.a.createElement("div",{className:"App"},r.a.createElement(oe,null),r.a.createElement("div",{className:"header__logo"},r.a.createElement("img",{src:ie.a})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(N,null)),r.a.createElement("div",{className:"main"},r.a.createElement(B,{sortDescending:this.sortDescending,sortByAscending:this.sortByAscending}),t))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(58);i.a.render(r.a.createElement(se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.19ac3235.chunk.js.map