(this.webpackJsonpproduct=this.webpackJsonpproduct||[]).push([[0],{26:function(t,e,c){},27:function(t,e,c){},53:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),r=c(19),u=c.n(r),a=(c(26),c(27),c(21)),s=c(2),j=c(1),o=function(t){var e=t.initialTitle,c=t.initialPrice,i=t.initialDescription,r=t.onSubmitProp,u=Object(n.useState)(e),a=Object(s.a)(u,2),o=a[0],l=a[1],b=Object(n.useState)(c),d=Object(s.a)(b,2),p=d[0],O=d[1],h=Object(n.useState)(i),f=Object(s.a)(h,2),x=f[0],v=f[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),r({title:o,price:p,description:x})},children:[Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Title"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",onChange:function(t){return l(t.target.value)},value:o})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Price"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",onChange:function(t){return O(t.target.value)},value:p})]}),Object(j.jsxs)("p",{children:[Object(j.jsx)("label",{children:"Description"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",onChange:function(t){return v(t.target.value)},value:x})]}),Object(j.jsx)("input",{type:"submit"})]})},l=c(5),b=c(4),d=c.n(b),p=function(t){var e=t.productId,c=t.successCallback;return Object(j.jsx)("button",{onClick:function(t){d.a.delete("http://localhost:8000/api/finds/"+e).then((function(t){c()}))},children:"Delete"})},O=function(t){var e=Object(n.useState)([]),c=Object(s.a)(e,2),i=c[0],r=c[1];Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/product/").then((function(t){return r(t.data)}))}),[]);var u=function(t){r(i.filter((function(e){return e._id!=t})))};return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"All Products:"}),t.product.map((function(t,e){return Object(j.jsxs)("p",{children:[Object(j.jsx)(l.a,{to:"/product/"+t._id,children:t.title}),"|",Object(j.jsx)(l.a,{to:"/product/"+t._id+"/edit",children:"Edit"}),"|",Object(j.jsx)(p,{productId:t._id,successCallback:function(){return u(t._id)}})]},e)}))]})},h=function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),c=e[0],i=e[1],r=Object(n.useState)(!1),u=Object(s.a)(r,2),l=u[0],b=u[1];Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/product").then((function(t){i(t.data),b(!0)}))}),[]);return Object(j.jsxs)("div",{children:[Object(j.jsx)(o,{onSubmitProp:function(t){d.a.post("http://localhost:8000/api/product/new",t).then((function(e){i([].concat(Object(a.a)(t),[e.data]))}))},initialTitle:"",initialPrice:"",initialDescription:""}),Object(j.jsx)("hr",{}),l&&Object(j.jsx)(O,{product:c})]})},f=function(t){var e=Object(n.useState)({}),c=Object(s.a)(e,2),i=c[0],r=c[1];return Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/product/"+t.id).then((function(t){return r(t.data)}))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Title: ",i.title]}),Object(j.jsxs)("p",{children:["Price: ",i.price]}),Object(j.jsxs)("p",{children:["Description: ",i.description]})]})},x=function(t){var e=t.id,c=Object(n.useState)([]),i=Object(s.a)(c,2),r=i[0],u=i[1],a=Object(n.useState)(!1),b=Object(s.a)(a,2),O=b[0],h=b[1];Object(n.useEffect)((function(){d.a.get("http://localhost:8000/api/find/"+e).then((function(t){u(t.data),h(!0)}))}),[]);return Object(j.jsx)("div",{children:O&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o,{onSubmitProp:function(t){d.a.put("http://localhost:8000/api/find/"+e,r).then((function(t){return console.log(t)}))},initialTitle:r.title,initialPrice:r.price,initialDescription:r.description}),Object(j.jsx)(p,{productId:r._id,successCallback:function(){return Object(l.c)("/product")}})]})})};var v=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.b,{children:[Object(j.jsx)(h,{path:"product/"}),Object(j.jsx)(f,{path:"product/:id"}),Object(j.jsx)(x,{path:"product/:id/edit"})]})})},g=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,54)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,u=e.getTTFB;c(t),n(t),i(t),r(t),u(t)}))};u.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[53,1,2]]]);
//# sourceMappingURL=main.ed4b9bda.chunk.js.map