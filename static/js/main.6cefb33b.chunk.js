(this.webpackJsonpto_do_list=this.webpackJsonpto_do_list||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(1),o=n.n(c),i=n(7),a=n.n(i),s=(n(12),n(5)),d=n(6),l=(n(13),n(0));var r=function(){var t=Object(c.useState)(""),e=Object(d.a)(t,2),n=e[0],o=e[1],i=Object(c.useState)([]),a=Object(d.a)(i,2),r=a[0],u=a[1],j=function(t){u(t),b(t)},b=function(t){localStorage.setItem("todos",JSON.stringify(t))};Object(c.useEffect)((function(){!function(){var t=localStorage.getItem("todos");t&&u(JSON.parse(t))}()}),[]);var f=function(){var t;n&&(t={id:r.length?r[r.length-1].id+1:0,todo:n,done:!1,time:new Date},j([].concat(Object(s.a)(r),[t])),o(""))},h=function(t){var e=new Date(t);return"".concat(e.getHours(),":").concat(e.getMinutes()).concat(e.getHours()>=12?"pm":"am"," ").concat(e.getDate(),"/").concat(e.getMonth(),"/").concat(e.getFullYear())};return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)("section",{className:"todo-list",children:[Object(l.jsx)("h3",{className:"header-title todo-list-div",children:"To Do List"}),Object(l.jsxs)("div",{className:"input-box",children:[Object(l.jsx)("input",{className:"input",value:n,onKeyDown:function(t){"Enter"===t.key&&f()},onChange:function(t){o(t.target.value)},placeholder:"Todo"}),Object(l.jsx)("button",{className:"button",onClick:f,children:"Add Todo"})]}),Object(l.jsx)("div",{className:"todo-list-div todo-list-div-ul",children:Object(l.jsx)("ul",{children:r.map((function(t){return Object(l.jsxs)("li",{children:[Object(l.jsxs)("div",{className:t.done?"todo done":"todo",children:[Object(l.jsx)("span",{onClick:function(){!function(t){var e=r.filter((function(e){return e.id===t}));if(e.length){var n=r.indexOf(e[0]),c=r;c[n].done=!c[n].done,j(Object(s.a)(c))}}(t.id)},children:t.todo}),Object(l.jsx)("span",{children:h(t.time)})]}),Object(l.jsx)("span",{className:"delete",onClick:function(){var e;e=t.id,j(r.filter((function(t){return t.id!==e})))},children:" Delete "})]},t.id)}))})})]})})},u=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,c=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),c(t),o(t),i(t),a(t)}))};a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(r,{})}),document.getElementById("root")),u()}},[[15,1,2]]]);
//# sourceMappingURL=main.6cefb33b.chunk.js.map