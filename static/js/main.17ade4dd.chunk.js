(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],[,,,,function(e,n,t){"use strict";var a;t.d(n,"a",(function(){return a})),function(e){e.Circle="Circle",e.Cross="Cross",e.Empty="Draw"}(a||(a={}))},,,,,,,,function(e,n,t){"use strict";var a=t(65),i=t.n(a),c=t(2);n.a=function(e){return Object(c.jsx)("button",{className:i.a.button,onClick:e.onClick,disabled:e.disabled,children:e.name})}},,,,,,,,function(e,n,t){"use strict";var a=t(3),i=t(30),c=t(1);n.a=function(e,n){var t=Object(c.useCallback)((function(){return i.a.getItem(e,n)}),[e,n]),r=Object(c.useState)(t),o=Object(a.a)(r,2),u=o[0],s=o[1];return Object(c.useEffect)((function(){s(t)}),[t]),Object(c.useEffect)((function(){i.a.setItem(e,u)}),[u]),[u,s]}},function(e,n,t){"use strict";var a=t(54),i=t.n(a),c=t(2);n.a=function(e){return Object(c.jsxs)("label",{className:i.a.select_label,children:[e.name,Object(c.jsx)("select",{className:i.a.select,value:e.value,onChange:function(n){e.onChange(n.currentTarget.value)},children:e.options.map((function(e){return Object(c.jsx)("option",{value:e.value,children:e.label},e.value)}))})]})}},,,,function(e,n,t){e.exports={gameboard_item_div:"GameboardItem_gameboard_item_div__3929z",cross:"GameboardItem_cross__x8R52",circle:"GameboardItem_circle__1bNu0",winner:"GameboardItem_winner__1Rvtl",draw:"GameboardItem_draw__Tx4YD"}},,,,,function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t(9),i=t(11),c=new(function(){function e(){Object(a.a)(this,e)}return Object(i.a)(e,[{key:"setItem",value:function(e,n){localStorage.setItem(e,JSON.stringify({value:n}))}},{key:"getItem",value:function(e,n){var t=localStorage.getItem(e);return null!==t?JSON.parse(t).value:n||null}}]),e}())},,,,,,,,,,function(e,n,t){"use strict";var a=t(63),i=t.n(a),c=t(2);n.a=function(e){return Object(c.jsx)("div",{className:i.a.absolute_wrap_div,children:e.children})}},function(e,n,t){"use strict";var a=t(1),i=t(55),c=t.n(i),r=t(2);n.a=function(e){var n=e.value,t=e.onChange,i=e.min,o=e.max,u=e.step,s=e.name;Object(a.useEffect)((function(){var e=n;if(e>o||e<i){e=e>o?o:i;var a=setTimeout((function(){t(e)}),200);return function(){clearTimeout(a)}}}),[n]);return Object(r.jsxs)("label",{className:c.a.input_label,children:[s,Object(r.jsx)("input",{className:c.a.input,type:"number",value:n,onChange:function(e){var n=+e.currentTarget.value;t(n)},min:i,max:o,step:u})]})}},function(e,n,t){"use strict";var a=t(62),i=t.n(a),c=t(25),r=t.n(c),o=t(4),u=t(2),s=function(e){var n=r.a.empty;return e.cellFill===o.a.Circle&&(n=r.a.circle),e.cellFill===o.a.Cross&&(n=r.a.cross),e.winCombination&&e.winCombination.includes(e.index)&&(n="".concat(n," ").concat(r.a.winner)),e.winCombination&&!e.winCombination.length&&(n="".concat(n," ").concat(r.a.draw)),Object(u.jsx)("div",{onClick:function(){e.cellFill===o.a.Empty&&e.clickHandler(e.index)},className:"".concat(r.a.gameboard_item_div," ").concat(n)})};n.a=function(e){var n=Math.sqrt(e.gameState.length);return Object(u.jsx)("div",{className:i.a.gameboard_div,style:{gridTemplateColumns:"repeat(".concat(n,", 1fr)"),gridTemplateRows:"repeat(".concat(n,", 1fr)")},children:e.gameState.map((function(n,t){return Object(u.jsx)(s,{index:t,cellFill:n,clickHandler:e.clickHandler,winCombination:e.winCombination},t)}))})}},function(e,n,t){e.exports={item:"DropdownMenuItem_item__3Ag1i",active:"DropdownMenuItem_active__3gaGt"}},function(e,n,t){e.exports={dropdown_menu:"DropdownMenu_dropdown_menu__3AN9h",dropdown_menu_ul:"DropdownMenu_dropdown_menu_ul__z1JGj",dropdown_menu_p:"DropdownMenu_dropdown_menu_p__nFtxK"}},function(e,n,t){e.exports={simulation_page:"SimulationPage_simulation_page__3PNR_",simulation_page_grid_div:"SimulationPage_simulation_page_grid_div__48Jlf",select:"SimulationPage_select__3uCKV",simulation_pie_div:"SimulationPage_simulation_pie_div__2ffc_"}},function(e,n,t){e.exports={pagination:"Pagination_pagination__3MM1D",pagination_grid_div:"Pagination_pagination_grid_div__yDBJL",pagination_flex_div:"Pagination_pagination_flex_div__3ekop"}},,,function(e,n,t){e.exports={navbar:"Navbar_navbar__1d0oY",navbar_ul:"Navbar_navbar_ul__l91T-"}},function(e,n,t){e.exports={nav_item:"NavbarItem_nav_item__3xXER",nav_item_button:"NavbarItem_nav_item_button__24DG6"}},,,function(e,n,t){e.exports={homepage:"HomePage_homepage__1klUk",homepage_div_gameboard:"HomePage_homepage_div_gameboard__2J9Pt"}},function(e,n,t){e.exports={select_label:"Select_select_label__AsInw",select:"Select_select__23rDm"}},function(e,n,t){e.exports={input_label:"InputNumber_input_label__K_elD",input:"InputNumber_input__3KllJ"}},function(e,n,t){e.exports={simulated_game:"SimulatedGame_simulated_game__2fQgm",simulated_game_gameboard_div:"SimulatedGame_simulated_game_gameboard_div__1E42G"}},,,,function(e,n,t){e.exports={dropdown:"Dropdown_dropdown__21DRP"}},,function(e,n,t){e.exports={gameboard_div:"Gameboard_gameboard_div__3l_Co"}},function(e,n,t){e.exports={absolute_wrap_div:"AbsoluteWrapper_absolute_wrap_div__2RbBF"}},function(e,n,t){e.exports={aivsai_div:"AIvsAI_aivsai_div__kB9s7"}},function(e,n,t){e.exports={button:"Button_button__3NkHr"}},function(e,n,t){"use strict";(function(e){var a=t(6),i=t(18),c=t.n(i),r=t(23),o=t(3),u=t(45),s=t.n(u),l=t(1),m=t.n(l),d=t(72),b=t(40),j=t(12),f=t(41),v=t(21),_=t(67),p=t(69),O=t(20),g=t(70),x=t(71),h=t(4),C=t(5),w=t(2),y=1,S=50,N=1,I=[{value:"random",label:"RandomAI"},{value:"miniMax",label:"MiniMax"}],A={circleAi:I[0].value,crossAi:I[0].value,number:y},M=function(e,n){return Object(w.jsx)(p.a,{gameState:e.gameState,winCombination:e.winCombination,index:e.index,winner:e.winner},n)};n.a=function(){var n,t=Object(O.a)("simGame",null),i=Object(o.a)(t,2),u=i[0],p=i[1],k=Object(l.useState)(!1),E=Object(o.a)(k,2),P=E[0],H=E[1],D=Object(O.a)("inputState",A),G=Object(o.a)(D,2),T=G[0],F=G[1],V=Object(C.h)().pathname,R=Object(C.j)().path,B=Object(C.g)(),J=function(){var n=Object(r.a)(c.a.mark((function n(){var t,a,i,r;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!P){n.next=2;break}return n.abrupt("return");case 2:return H(!0),t=new Worker(e,{name:"simulateWorker",type:void 0}),a=Object(g.a)(t),i=a.simulate,n.next=7,i(T.number,T.circleAi,T.crossAi);case 7:r=n.sent,p(r),H(!1),B.push("".concat(R,"/1"));case 11:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return u&&(n=u.reduce((function(e,n){return n.winner===h.a.Empty&&e[0]++,n.winner===h.a.Circle&&e[1]++,n.winner===h.a.Cross&&e[2]++,e}),[0,0,0])),Object(w.jsx)(b.a,{children:Object(w.jsxs)("div",{className:s.a.simulation_page,children:[Object(w.jsxs)("div",{className:s.a.simulation_page_grid_div,children:[Object(w.jsx)(v.a,{options:I,value:T.circleAi,onChange:function(e){F((function(n){return Object(a.a)(Object(a.a)({},n),{},{circleAi:e})}))},name:"Circle AI:"}),Object(w.jsx)(v.a,{options:I,value:T.crossAi,onChange:function(e){F((function(n){return Object(a.a)(Object(a.a)({},n),{},{crossAi:e})}))},name:"Cross AI:"}),Object(w.jsx)(f.a,{min:y,max:S,step:N,value:T.number,onChange:function(e){F((function(n){return Object(a.a)(Object(a.a)({},n),{},{number:e})}))},name:"Number of simulation:"}),Object(w.jsx)(j.a,{onClick:J,name:"Simulate"})]}),P&&Object(w.jsx)(_.a,{name:"SIMULATING..."}),n&&Object(w.jsxs)(m.a.Fragment,{children:[Object(w.jsx)("div",{className:s.a.simulation_pie_div,children:Object(w.jsx)(x.PieChart,{data:[{title:"Draw",value:n[0],color:"#E9B5B4"},{title:"Circle",value:n[1],color:"#A5A6BC"},{title:"Cross",value:n[2],color:"#BBD0BA"}],label:function(e){var n=e.dataEntry;if(n.value>0)return"".concat(n.title," ").concat(n.value)},labelStyle:{fontSize:"0.35rem",fontFamily:"inherit"},animate:!0,labelPosition:50})}),Object(w.jsx)(j.a,{name:R===V?"Show Games":"Hide Games",onClick:function(){V!==R?B.push("".concat(R)):B.push("".concat(R,"/1"))}})]}),Object(w.jsx)(C.d,{children:Object(w.jsx)(C.b,{path:"".concat(R,"/:pageNum"),render:function(e){return u?Object(w.jsx)(d.a,Object(a.a)(Object(a.a)({},e),{},{path:R,array:u,mapFunction:M})):Object(w.jsx)(C.a,{to:R})}})})]})})}}).call(this,t(88))},function(e,n,t){"use strict";var a=t(6),i=t(68),c=t.n(i),r=t(22),o=t(2);n.a=function(e){var n=e.name.split(""),t={loop:!0,config:r.config.wobbly,from:{transform:"translate3d(0,0,0)",opacity:1,color:"#D46615"},to:[{transform:"translate3d(0,-40px,0)",opacity:0,color:"#7BFF33"},{transform:"translate3d(0,0,0)",opacity:1,color:"#D46615"}]},i=Object(r.useSprings)(n.length,n.map((function(e,n){return Object(a.a)(Object(a.a)({},t),{},{delay:10*n})})));return Object(o.jsx)("div",{className:c.a.loading_div,children:i.map((function(e,t){return Object(o.jsx)(r.animated.div,{style:e,children:" "===n[t]?Object(o.jsx)(o.Fragment,{children:"\xa0"}):n[t]},"char".concat(t))}))})}},function(e,n,t){e.exports={loading_div:"Loading_loading_div__HqqQw"}},function(e,n,t){"use strict";var a=t(56),i=t.n(a),c=t(4),r=t(42),o=t(2);n.a=function(e){var n="".concat(e.winner," won");return e.winner===c.a.Empty&&(n="Draw"),Object(o.jsxs)("div",{className:i.a.simulated_game,children:[Object(o.jsx)("h1",{children:"Game: ".concat(e.index)}),Object(o.jsx)("h2",{children:"Result: ".concat(n)}),Object(o.jsx)("div",{className:i.a.simulated_game_gameboard_div,children:Object(o.jsx)(r.a,{gameState:e.gameState,winCombination:e.winCombination,clickHandler:function(){}})})]})}},,,function(e,n,t){"use strict";var a=t(46),i=t.n(a),c=t(12),r=t(41),o=t(6),u=t(3),s=t(1),l=t(5),m=t(20),d=function(e,n,t,a){var i=Object(s.useMemo)((function(){return{inputValue:e,passedValue:e}}),[e]),c=Object(s.useState)(1),r=Object(u.a)(c,2),d=r[0],b=r[1],j=Object(m.a)("howMany",i),f=Object(u.a)(j,2),v=f[0],_=f[1],p=Object(l.g)();Object(s.useEffect)((function(){if(v.passedValue!==v.inputValue){var e=setTimeout((function(){_((function(e){return Object(o.a)(Object(o.a)({},e),{},{passedValue:e.inputValue})})),p.push("".concat(t,"/1"))}),500);return function(){clearTimeout(e)}}}),[v.inputValue,_,t,v.passedValue,p]);var O,g=(d-1)*v.passedValue,x=d*v.passedValue;O=Math.ceil(a.length/v.passedValue);var h=a.slice(g,x);Object(s.useEffect)((function(){isNaN(+n)||+n<1?p.push("".concat(t,"/1")):+n>O?p.push("".concat(t,"/").concat(O)):b(+n)}),[n,p,t,O]);return{paginatedArray:h,onChange:function(e){_((function(n){return Object(o.a)(Object(o.a)({},n),{},{inputValue:e})}))},clickHandler:function(e){p.push("".concat(t,"/").concat(e))},prevPage:function(){p.push("".concat(t,"/").concat(d-1))},nextPage:function(){p.push("".concat(t,"/").concat(d+1))},max:O,howMany:v,page:d}},b=t(2);n.a=function(e){for(var n=Object(l.i)().pageNum,t=d(9,n,e.path,e.array),a=t.paginatedArray,o=t.onChange,u=t.clickHandler,s=t.prevPage,m=t.nextPage,j=t.max,f=t.howMany,v=t.page,_=[],p=function(e){var n=Object(b.jsx)(c.a,{onClick:function(){return[u(e)]},disabled:v===e,name:"".concat(e)},e);_.push(n)},O=1;O<=j;O++)p(O);return Object(b.jsxs)("div",{className:i.a.pagination,children:[Object(b.jsx)(r.a,{min:9,max:15,step:1,value:f.inputValue,onChange:o,name:"Numbers of games per page"}),Object(b.jsx)("div",{className:i.a.pagination_grid_div,children:a.map(e.mapFunction)}),Object(b.jsxs)("div",{className:i.a.pagination_flex_div,children:[Object(b.jsx)(c.a,{onClick:s,disabled:1===v,name:"<<"}),_,Object(b.jsx)(c.a,{onClick:m,disabled:v===j,name:">>"})]})]})}},,,,,function(e,n,t){},,,,,,,,,,,function(e,n,t){e.exports=t.p+"static/js/simulateWorker.9f2374d0.chunk.worker.js"},function(e,n,t){"use strict";t.r(n);var a=t(1),i=t.n(a),c=t(36),r=t.n(c),o=(t(77),t(6)),u=t(22),s=t(3),l=t(49),m=t.n(l),d={PvsP:"Play against a friend on 3x3 to 5x5 board",AIvsAI:"Watch AI play against other AI",Easy:"Play against random AI. You can undo your moves",Hard:"Play against unbeatable AI"},b=t(30),j=t(2),f="gameMode",v=b.a.getItem(f,"Easy"),_=i.a.createContext({gameMode:v,setGameMode:function(e){}}),p=function(e){var n=Object(a.useState)(v),t=Object(s.a)(n,2),i=t[0],c=t[1];Object(a.useEffect)((function(){b.a.setItem(f,i)}),[i]);return Object(j.jsx)(_.Provider,{value:{gameMode:i,setGameMode:function(e){c(e)}},children:e.children})},O=t(43),g=t.n(O),x=function(e){var n=e.isActive?"".concat(g.a.item," ").concat(g.a.active):g.a.item;return Object(j.jsx)("div",{className:n,onMouseEnter:function(){e.onMouseEnterHandler()},onClick:function(){e.onClickHandler()},children:e.name})},h=t(44),C=t.n(h),w=function(e){return Object(j.jsxs)("div",{className:C.a.dropdown_menu,children:[Object(j.jsx)("ul",{className:C.a.dropdown_menu_ul,children:e.children}),Object(j.jsx)("p",{className:C.a.dropdown_menu_p,children:e.info})]})},y=t(60),S=t.n(y),N=function(e){return Object(j.jsx)("div",{className:S.a.dropdown,children:e.children})},I=t(50),A=t.n(I),M=t(26),k=function(e){var n=Object(a.useState)(!1),t=Object(s.a)(n,2),i=t[0],c=t[1];return Object(j.jsxs)("li",{className:A.a.nav_item,onMouseEnter:function(){c(!0)},onMouseLeave:function(){c(!1)},children:[Object(j.jsx)(M.b,{to:e.route,className:A.a.nav_item_button,children:e.name}),i&&e.children]})},E=t(7),P=t(5),H=function(e){var n,t=[];for(n in e)t=[].concat(Object(E.a)(t),[n]);return t}(d),D=function(){var e=Object(a.useState)(d.PvsP),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(a.useContext)(_),r=c.setGameMode,o=c.gameMode,u=Object(P.g)(),l=Object(P.h)().pathname;return Object(j.jsx)("nav",{className:m.a.navbar,children:Object(j.jsxs)("ul",{className:m.a.navbar_ul,children:[Object(j.jsx)(k,{name:"Game Modes",route:"/",children:Object(j.jsx)(w,{info:t,children:H.map((function(e){return Object(j.jsx)(x,{name:e,onMouseEnterHandler:function(){i(d[e])},isActive:e===o,onClickHandler:function(){o===e&&"/"===l||(u.push("/"),setTimeout((function(){r(e)}),200))}},e)}))})}),Object(j.jsx)(k,{name:"Simulate",route:"/sim",children:Object(j.jsx)(N,{children:Object(j.jsx)("p",{children:"Simulate up to 50 games of AIvsAI"})})})]})})},G=t(53),T=t.n(G),F=t(20),V=t(42),R=t(40),B=t(64),J=t.n(B),W=t(21),z=t(4),q=function(e){for(var n=Math.sqrt(e.length),t=new Set,a=[],i=new Set,c=[],r=new Set,o=[],u=new Set,s=0;s<n;s++){for(var l=s,m=0;m<n;m++){var d=s*n+m,b=s+n*m;t.add(e[d]),a.push(d),i.add(e[b]),c.push(b),u.add(e[d]),0===s&&(r.add(e[l]),o.push(l),l+=n+1),s===n-1&&(r.add(e[l]),o.push(l),l+=n-1)}if(1===t.size&&!t.has(z.a.Empty))return{winner:t.values().next().value,winCombination:a};if(1===i.size&&!i.has(z.a.Empty))return{winner:i.values().next().value,winCombination:c};if(1===r.size&&!r.has(z.a.Empty))return{winner:r.values().next().value,winCombination:o};t.clear(),a.length=0,i.clear(),c.length=0,r.clear(),o.length=0}return u.has(z.a.Empty)?null:{winner:z.a.Empty,winCombination:[]}},K=function(e){return e.reduce((function(e,n,t){return n===z.a.Empty?(e.push(t),e):e}),[])},L=function(e){var n,t,a=K(e);return a[(n=0,t=a.length-1,n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n)]},Y=function(e,n,t){return function e(a,i){var c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=JSON.stringify(a);if(r in c)return c[r];var o=K(a),u=q(a);if(u){if(u.winner===n){var s={score:10,index:-1};return c[r]=s,s}if(u.winner===t){var l={score:-10,index:-1};return c[r]=l,l}if(u.winner===z.a.Empty){var m={score:0,index:-1};return c[r]=m,m}}var d=o.map((function(c){var r={index:c,score:0},o=a.map((function(e,n){return n===r.index?i:e}));return i===n&&(r.score=e(o,t).score),i===t&&(r.score=e(o,n).score),r})),b=d[0];return i===n&&(b=d.reduce((function(e,n){return e.score>n.score?e:n}),d[0])),i===t&&(b=d.reduce((function(e,n){return e.score<n.score?e:n}),d[0])),c[r]=b,b}(e,n).index},U=t(12),Q=function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),a=1;a<n;a++)t[a-1]=arguments[a];return function(){for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var c=[].concat(a,t);return e.apply(void 0,Object(E.a)(c))}},X=[{value:"random",label:"RandomAI"},{value:"miniMax",label:"MiniMax"}],Z=function(e){var n=e.isWin,t=e.moveAI,i=e.turn,c=Object(a.useState)(X[0].value),r=Object(s.a)(c,2),o=r[0],u=r[1],l=Object(a.useState)(X[0].value),m=Object(s.a)(l,2),d=m[0],b=m[1],f=Object(a.useState)(!1),v=Object(s.a)(f,2),_=v[0],p=v[1];Object(a.useEffect)((function(){if(_){var e=setTimeout((function(){var e=L;i===z.a.Circle&&"miniMax"===o&&(e=Q(Y,z.a.Circle,z.a.Cross)),i===z.a.Cross&&"miniMax"===d&&(e=Q(Y,z.a.Cross,z.a.Circle)),t(e)}),400);return function(){clearTimeout(e)}}}),[_,t,i,o,d]),Object(a.useEffect)((function(){n&&p(!1)}),[n]);return Object(j.jsxs)("div",{className:J.a.aivsai_div,children:[Object(j.jsx)(W.a,{options:X,value:o,onChange:function(e){u(e)},name:"Circle AI: "}),Object(j.jsx)(W.a,{options:X,value:d,onChange:function(e){b(e)},name:"Cross AI: "}),Object(j.jsx)(U.a,{onClick:function(){_||p(!0)},name:"Play"})]})},$=function(e){var n=Object(a.useState)(e),t=Object(s.a)(n,2),i=t[0],c=t[1];return Object(a.useEffect)((function(){c(e)}),[e]),[i,c]},ee=[{value:"3",label:"3x3"},{value:"4",label:"4x4"},{value:"5",label:"5x5"}],ne=function(e){var n=$(e.initialSize.toString()),t=Object(s.a)(n,2),a=t[0],i=t[1];return Object(j.jsx)(W.a,{options:ee,value:a,onChange:function(n){i(n),e.onChange(+n)},name:"Size:"})},te=function(e){for(var n=e*e,t=[],a=0;a<n;a++)t.push(z.a.Empty);return t},ae=function(e,n){var t=Object(a.useMemo)((function(){return{array:n,index:0}}),[n]),i=Object(F.a)(e,t),c=Object(s.a)(i,2),r=c[0],u=c[1],l=Object(a.useCallback)((function(e){u((function(n){var t=Object(E.a)(n.array),a=n.index;return a<t.length-1&&(a=(t=t.slice(0,a+1)).length-1),a++,{array:t=[].concat(Object(E.a)(t),[Object(E.a)(e)]),index:a}}))}),[u]),m=Object(a.useCallback)((function(){u(t)}),[u,t]);return{undo:function(){u((function(e){return Object(o.a)(Object(o.a)({},e),{},{index:e.index-1})}))},redo:function(){u((function(e){return Object(o.a)(Object(o.a)({},e),{},{index:e.index+1})}))},addItemToHistory:l,history:r,setHistory:u,resetHistory:m}},ie=[te(3)],ce=function(e){var n=e.gameState,t=e.turn,i=e.changeState,c=e.isWin,r=ae("history",ie),o=r.history,u=r.undo,s=r.redo,l=r.resetHistory,m=r.addItemToHistory,d=Object(a.useRef)(!0);return Object(a.useEffect)((function(){d.current&&(d.current=!1),i(o.array[o.index])}),[o.index,o.array,i]),Object(a.useEffect)((function(){if(c)l();else if(t===z.a.Cross){var e=setTimeout((function(){var e=Object(E.a)(n);e[L(n)]=z.a.Cross,m(e)}),300);return function(){clearTimeout(e)}}}),[t,c,n,l,m]),Object(j.jsxs)("div",{children:[Object(j.jsx)(U.a,{onClick:s,disabled:o.index>=o.array.length-1||c,name:"REDO"}),Object(j.jsx)(U.a,{onClick:u,disabled:o.index<=0||c,name:"UNDO"})]})},re={turn:z.a.Circle,gameState:te(3)},oe=function(){var e=Object(a.useState)(null),n=Object(s.a)(e,2),t=n[0],i=n[1],c=Object(a.useContext)(_).gameMode,r=Object(F.a)(c,re),u=Object(s.a)(r,2),l=u[0],m=u[1];Object(a.useEffect)((function(){var e=q(l.gameState);e&&e.winner!==(null===t||void 0===t?void 0:t.winner)&&i(e)}),[l.gameState,c,t]);var d=Object(a.useCallback)((function(e){t||m((function(n){var t=Object(E.a)(n.gameState);t[e]=n.turn;var a=z.a.Circle;return n.turn===z.a.Circle&&(a=z.a.Cross),{turn:a,gameState:t}}))}),[t,m]),b=Object(a.useCallback)((function(e){if(!t){var n=e(l.gameState);d(n)}}),[l.gameState,t,d]);Object(a.useEffect)((function(){if("Hard"===c&&l.turn===z.a.Cross){var e=setTimeout((function(){var e=Q(Y,z.a.Cross,z.a.Circle);b(e)}),300);return function(){clearTimeout(e)}}}),[l.turn,c,b]);var f=Object(a.useCallback)((function(e){t||m({turn:z.a.Circle,gameState:e})}),[t,m]),v=l.turn;"Easy"!==c&&"Hard"!==c||(l.turn===z.a.Cross&&(v="AI"),l.turn===z.a.Circle&&(v="Your"));var p="Winner: ";return t&&(p+=t.winner,t.winner===z.a.Empty&&(p="Draw")),Object(j.jsx)(R.a,{children:Object(j.jsxs)("div",{className:T.a.homepage,children:[!t&&Object(j.jsx)("h1",{children:"".concat(v," turn")}),t&&Object(j.jsx)("h1",{children:p}),"PvsP"===c&&Object(j.jsx)(ne,{onChange:function(e){m(Object(o.a)(Object(o.a)({},re),{},{gameState:te(e)})),i(null)},initialSize:Math.sqrt(l.gameState.length)}),"AIvsAI"===c&&Object(j.jsx)(Z,{turn:l.turn,moveAI:b,isWin:null!==t}),"Easy"===c&&Object(j.jsx)(ce,{gameState:l.gameState,turn:l.turn,changeState:f,isWin:null!==t}),Object(j.jsx)("div",{className:T.a.homepage_div_gameboard,children:Object(j.jsx)(V.a,{gameState:l.gameState,winCombination:null===t||void 0===t?void 0:t.winCombination,clickHandler:function(e){"AIvsAI"!==c&&("Easy"!==c&&"Hard"!==c||l.turn!==z.a.Cross)&&d(e)}})}),t&&Object(j.jsx)(U.a,{onClick:function(){m((function(e){return{turn:z.a.Circle,gameState:te(Math.sqrt(e.gameState.length))}})),i(null)},name:"Restart"})]})})},ue=t(66),se=function(){var e=Object(P.h)(),n=Object(u.useTransition)(e,{config:u.config.slow,from:{opacity:0,transform:"translate(100%, 0)"},enter:{opacity:1,transform:"translate(0, 0)"},leave:{opacity:0,transform:"translate(-50%, 0)"}});return Object(j.jsxs)(i.a.Fragment,{children:[Object(j.jsx)(D,{}),n((function(e,n){return Object(j.jsx)(u.animated.div,{style:Object(o.a)({},e),children:Object(j.jsxs)(P.d,{location:n,children:[Object(j.jsx)(P.b,{path:"/sim",component:ue.a}),Object(j.jsx)(P.b,{path:"/",component:oe})]})})}))]})};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(M.a,{basename:"/tic-tac-toe",children:Object(j.jsx)(p,{children:Object(j.jsx)(se,{})})})}),document.getElementById("root"))}],[[89,1,2]]]);
//# sourceMappingURL=main.17ade4dd.chunk.js.map