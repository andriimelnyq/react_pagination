(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,c,a){"use strict";a.r(c);var t=a(4),n=a.n(t),i=a(3),r=a(1);a(9);function l(e,c){for(var a=[],t=e;t<=c;t+=1)a.push(t);return a}var s=a(0),o=function(e){var c=e.total,a=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(c/a);return Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:"page-item ".concat(1===t&&"disabled"),children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===t,onClick:function(){return 1!==t&&n(t-1)},children:"\xab"})}),l(1,i).map((function(e){return Object(s.jsx)("li",{className:"page-item ".concat(t===e&&"active"),children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return n(e)},children:e},e)})})),Object(s.jsx)("li",{className:"page-item ".concat(t===i&&"disabled"),children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":t===i,onClick:function(){return t!==i&&n(t+1)},children:"\xbb"})})]})},j=l(1,42).map((function(e){return"Item ".concat(e)})),d=function(){var e=Object(r.useState)(5),c=Object(i.a)(e,2),a=c[0],t=c[1],n=Object(r.useState)(1),l=Object(i.a)(n,2),d=l[0],u=l[1],h=d*a-a,b=d*a<j.length?d*a:j.length,p=j.slice(h,b);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(d," (items ").concat(h+1," - ").concat(b," of ").concat(j.length,")")}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:a,onChange:function(e){return function(e){t(+e.target.value),u(1)}(e)},children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(o,{total:j.length,perPage:a,currentPage:d,onPageChange:u}),Object(s.jsx)("ul",{children:p.map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(s.jsx)(d,{}),document.getElementById("root"))},9:function(e,c,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.670464d0.chunk.js.map