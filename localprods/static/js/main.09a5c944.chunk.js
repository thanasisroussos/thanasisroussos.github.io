(this.webpackJsonplocalproducts=this.webpackJsonplocalproducts||[]).push([[0],[,,,function(e,t,i){},,,,,,,,,,,function(e,t,i){},function(e,t,i){},function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var c=i(1),s=i(9),n=i.n(s),a=(i(3),i(14),i(7)),r=i(2),l=(i(15),[{category:"nuts",categoryId:"cat01",name:"\u039e\u03b7\u03c1\u03bf\u03af \u039a\u03b1\u03c1\u03c0\u03bf\u03af",hidden:!1,items:[{id:"1",title:"\u039a\u03b1\u03c1\u03cd\u03b4\u03b9\u03b1",description:"\u0395\u03ba\u03bb\u03b5\u03ba\u03c4\u03ac \u03ba\u03b1\u03c1\u03cd\u03b4\u03b9\u03b1 \u0392\u03cc\u03bb\u03bf\u03c5 \u03c7\u03c9\u03c1\u03af\u03c2 \u03b1\u03bb\u03ac\u03c4\u03b9",price:"11,00",initprice:"14,00",quantity:"950gr",definition:"kg"},{id:"2",title:"\u0391\u03bc\u03cd\u03b3\u03b4\u03b1\u03bb\u03b1",description:"\u0391\u03bc\u03cd\u03b3\u03b4\u03b1\u03bb\u03b1 \u039c\u03b1\u03bd\u03c9\u03bb\u03ac\u03b4\u03b1\u03c2 \u03b1\u03bb\u03b1\u03c4\u03b9\u03c3\u03bc\u03ad\u03bd\u03b1",price:"10,00",initprice:"12,00",quantity:"950gr",definition:"kg"},{id:"3",title:"\u0392\u03c1\u03b1\u03b6\u03b9\u03bb\u03b9\u03ac\u03bd\u03b9\u03ba\u03b1 \u03a6\u03c5\u03c3\u03c4\u03af\u03ba\u03b9\u03b1",description:"\u0392\u03c1\u03b1\u03b6\u03b9\u03bb\u03b9\u03ac\u03bd\u03b9\u03ba\u03b1 \u03a6\u03c5\u03c3\u03c4\u03af\u03ba\u03b9\u03b1 \u03b1\u03c0\u03cc \u03c4\u03b7 \u0392\u03c1\u03b1\u03b6\u03b9\u03bb\u03af\u03b1",price:"28,50",initprice:"",quantity:"500gr",definition:"kg"}]},{category:"honey",categoryId:"cat02",name:"\u039c\u03ad\u03bb\u03b9\u03b1",hidden:!0,items:[{id:"4",title:"\u0398\u03c5\u03bc\u03b1\u03c1\u03af\u03c3\u03b9\u03bf",description:"\u039a\u03c1\u03b7\u03c4\u03b9\u03ba\u03cc \u03bc\u03ad\u03bb\u03b9 \u03bc\u03ad\u03bb\u03b9 \u03b1\u03c0\u03cc \u03b8\u03c5\u03bc\u03ac\u03c1\u03b9",price:"11,50",initprice:"",quantity:"1kg",definition:"kg"},{id:"5",title:"\u0391\u03bd\u03b8\u03ad\u03c9\u03bd",description:"\u039a\u03c1\u03b7\u03c4\u03b9\u03ba\u03cc \u03bc\u03ad\u03bb\u03b9 \u03b1\u03bd\u03b8\u03ad\u03c9\u03bd",price:"8,00",initprice:"9,50",quantity:"950gr",definition:"kg"}]},{category:"flours",categoryId:"cat03",name:"\u0391\u03bb\u03b5\u03cd\u03c1\u03b9\u03b1",hidden:!1,items:[{id:"6",title:"\u0391\u03bb\u03b5\u03cd\u03c1\u03b9 \u039f\u03bb\u03b9\u03ba\u03ae\u03c2",description:"",price:"4,00",initprice:"",quantity:"5kg",definition:"kg"},{id:"7",title:"\u0391\u03bb\u03b5\u03cd\u03c1\u03b9 \u039a\u03b1\u03bb\u03b1\u03bc\u03c0\u03bf\u03ba\u03b9\u03bf\u03cd",description:"",price:"5,00",initprice:"7,00",quantity:"5kg",definition:"kg"}]}]),o=(i(16),i(5),i(0)),d=function(e){var t=e.data,i=e.handleClick,c=e.handleMinus,s=e.handlePlus,n=t.id,a=t.title,r=t.description,l=t.price,d=t.initprice,j=t.quantity,b=t.posotita;return Object(o.jsxs)("div",{className:"product",children:[Object(o.jsx)("div",{className:"firstcol",children:Object(o.jsx)("div",{className:"title",children:a})}),Object(o.jsx)("div",{className:"secondcol",children:Object(o.jsxs)("div",{className:"fullPrice",children:[d.length>0?Object(o.jsxs)("div",{className:"initPrice",children:[d,"\u20ac"]}):null,Object(o.jsxs)("div",{className:"price",children:[l,"\u20ac"]})]})}),Object(o.jsxs)("div",{className:"thirdcol",children:[0===b&&Object(o.jsx)("div",{onClick:function(){return i({id:n,title:a,price:l,posotita:b})},children:Object(o.jsx)("i",{className:"bi bi-plus-square-fill"})}),1===b&&Object(o.jsxs)("div",{className:"change_quantity",children:[Object(o.jsx)("span",{onClick:function(){return c({id:n,title:a,price:l,posotita:b})},children:Object(o.jsx)("i",{className:"bi bi-dash-square-dotted"})}),Object(o.jsx)("span",{className:"quantity",children:b}),Object(o.jsx)("span",{onClick:function(){return s({id:n,title:a,price:l,posotita:b})},children:Object(o.jsx)("i",{className:"bi bi-plus-square"})})]}),0!==b&&1!==b&&Object(o.jsxs)("div",{className:"change_quantity",children:[Object(o.jsx)("span",{onClick:function(){return c({id:n,title:a,price:l,posotita:b})},children:Object(o.jsx)("i",{className:"bi bi-dash-square"})}),Object(o.jsx)("span",{className:"quantity",children:b}),Object(o.jsx)("span",{onClick:function(){return s({id:n,title:a,price:l,posotita:b})},children:Object(o.jsx)("i",{className:"bi bi-plus-square"})})]})]}),Object(o.jsxs)("div",{className:"description",children:[r," (",j,") "]})]})},j=(i(18),Object(c.createContext)()),b=function(){return Object(c.useContext)(j)},u=function(e){var t=e.children,i=Object(c.useState)("O Agrotis"),s=Object(r.a)(i,2),n=s[0],a=s[1],l=Object(c.useState)([]),d=Object(r.a)(l,2),b=d[0],u=d[1],h=Object(c.useState)(!1),m=Object(r.a)(h,2),O=m[0],p=m[1],x=0,f={test:n,addOne:function(){a("I Agrotissa"),console.log("is runnig")},cartLength:function(e){return e},thecart:b,setThecart:u,openCart:O,setOpenCart:p,billTotal:function(){x=0;for(var e=0;e<b.length;e++)x+=b[e].posotita*Number(b[e].price.replace(",","."));return x}};return Object(o.jsx)(j.Provider,{value:f,children:t})},h=function(e){var t=e.content,i=e.clear,c=b(),s=c.setOpenCart,n=c.openCart,a=c.billTotal,r=function(){s(!n)};return t.length>0?Object(o.jsxs)("div",{className:"cart-outer",children:[Object(o.jsx)("div",{className:"background-cart",onClick:r}),Object(o.jsx)("div",{className:"cart-wrapper",children:Object(o.jsxs)("div",{className:"cart-container",children:[Object(o.jsxs)("div",{className:"header-mini-cart",children:[Object(o.jsx)("div",{className:"title-cart",children:"\u039a\u03b1\u03bb\u03ac\u03b8\u03b9"}),Object(o.jsx)("div",{className:"close-cart",onClick:r,children:Object(o.jsx)("i",{className:"bi bi-x-square"})})]}),Object(o.jsx)("div",{className:"mini-cart-items-container",children:t.map((function(e,t){return Object(o.jsxs)("div",{className:"mini-cart-item",children:[Object(o.jsx)("div",{className:"mini-cart-item-posotita",children:Object(o.jsx)("b",{children:e.posotita})}),Object(o.jsx)("div",{className:"mini-cart-item-title",children:e.title}),Object(o.jsx)("div",{className:"mini-cart-item-price",children:Object(o.jsxs)("b",{children:[e.price,"\u20ac"]})})]},t)}))}),Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"mini-cart-total",children:["\u03a3\u03cd\u03bd\u03bf\u03bb\u03bf: ",Object(o.jsxs)("b",{children:[a(),"\u20ac"]})]})}),Object(o.jsx)("div",{className:"goCheckoutBtn",children:"\u039f\u03bb\u03bf\u03ba\u03bb\u03ae\u03c1\u03c9\u03c3\u03b7 \u03a0\u03b1\u03c1\u03b1\u03b3\u03b3\u03b5\u03bb\u03af\u03b1\u03c2"}),Object(o.jsxs)("div",{className:"clear-cart",onClick:i,children:["\u039a\u03b1\u03b8\u03b1\u03c1\u03b9\u03c3\u03bc\u03cc\u03c2 \u039a\u03b1\u03bb\u03b1\u03b8\u03b9\u03bf\u03cd ",Object(o.jsx)("i",{className:"bi bi-trash"})]})]})})]}):null},m=1,O=function(){var e=b(),t=(e.thecart,e.setThecart),i=e.openCart,s=(e.setOpenCart,Object(c.useState)(l)),n=Object(r.a)(s,2),j=n[0],u=n[1],O=Object(c.useState)([]),p=Object(r.a)(O,2),x=p[0],f=p[1],v=function(){for(var e=l,t=0;t<e.length;t++)for(var i=0;i<e[t].items.length;i++)e[t].items[i].posotita=0;u(e)};Object(c.useEffect)((function(){v()}),[]);var g="",N="";Object(c.useEffect)((function(){for(var e=[],t=0;t<j.length;t++)for(var i=0;i<j[t].items.length;i++)j[t].items[i].posotita>0&&e.push(j[t].items[i]);f(e)}),[j]),Object(c.useEffect)((function(){x.length&&console.log(x),t(x)}),[x]);var y=function(e){for(var t=function(t){j[t].items.map((function(i){return i.id===e.id&&(g=e.id,N=t),g}))},i=0;i<j.length;i++)t(i);var c=Object(a.a)(j);c[N].items.filter((function(e){return e.id===g}))[0].posotita=1,u(c)},k=function(e){for(var t=function(t){j[t].items.map((function(i,c){return i.id===e.id&&(g=e.id,m=e.posotita+1,N=t),g}))},i=0;i<j.length;i++)t(i);var c=Object(a.a)(j);c[N].items.filter((function(e){return e.id===g}))[0].posotita=m,u(c)},C=function(e){for(var t=function(t){j[t].items.map((function(i){return i.id===e.id&&(g=e.id,m=e.posotita-1,N=t),g}))},i=0;i<j.length;i++)t(i);var c=Object(a.a)(j);c[N].items.filter((function(e){return e.id===g}))[0].posotita=m,u(c)};return Object(o.jsxs)("div",{className:"content",children:[j.map((function(e,t){e.categoryId;var i=e.name,c=e.items,s=e.hidden;return Object(o.jsxs)("div",{className:s?"category_outer hidden_category":"category_outer",children:[Object(o.jsx)("div",{className:"category_name",onClick:function(e){e.target.closest(".category_outer").classList.toggle("hidden_category")},children:i}),Object(o.jsx)("div",{className:"categorys_products",children:c.map((function(e){return Object(o.jsx)(d,{data:e,handleClick:y,handleMinus:C,handlePlus:k},e.id)}))})]},t)})),x.length>0&&i&&Object(o.jsx)(h,{content:x,clear:function(){v(),f([])}})]})},p=(i(19),function(){return Object(o.jsxs)("div",{className:"social-media-container",children:[Object(o.jsx)("div",{className:"contact_text",children:"\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03ce\u03bd\u03b7\u03c3\u03b5 \u03bc\u03b1\u03b6\u03af \u03bc\u03b1\u03c2."}),Object(o.jsxs)("div",{className:"social-media",children:[Object(o.jsx)("i",{className:"bi bi-facebook",style:{fontSize:30}}),Object(o.jsx)("i",{className:"bi bi-messenger",style:{fontSize:30}}),Object(o.jsx)("i",{className:"bi bi-instagram",style:{fontSize:30}}),Object(o.jsx)("i",{className:"bi bi-telephone",style:{fontSize:30}})]})]})}),x=(i(20),function(){var e=b(),t=e.thecart,i=e.setOpenCart,c=e.openCart,s=e.billTotal;return Object(o.jsx)("div",{className:"header-wrapper",children:Object(o.jsx)("div",{className:"header-container",children:Object(o.jsxs)("div",{className:"header-title",children:[Object(o.jsx)("div",{className:"header-logo",children:"O agrotis"}),Object(o.jsx)("div",{className:"header-description",children:"Local Products"}),Object(o.jsx)("div",{className:"container header-cart",children:t<1?Object(o.jsxs)("div",{className:"my-cart-on-header",children:[Object(o.jsx)("span",{className:"my-cart-text",children:"\u0386\u03b4\u03b5\u03b9\u03bf \u039a\u03b1\u03bb\u03ac\u03b8\u03b9"}),Object(o.jsx)("i",{className:"bi bi-cart3"})]}):Object(o.jsxs)("div",{className:"my-cart-on-header",onClick:function(){i(!c)},children:[Object(o.jsxs)("span",{className:"my-cart-text",children:["\u03a3\u03cd\u03bd\u03bf\u03bb\u03bf: ",s(),"\u20ac"]}),Object(o.jsx)("i",{className:"bi bi-cart3"}),Object(o.jsx)("span",{className:"badge badge-warning",children:function(){for(var e=0,i=0;i<t.length;i++)e+=t[i].posotita;return e}()})]})})]})})})}),f=function(){return Object(o.jsxs)(u,{children:[Object(o.jsx)(x,{}),Object(o.jsxs)("div",{className:"wrapper",children:[Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(O,{})}),Object(o.jsx)(p,{})]})]})};n.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.09a5c944.chunk.js.map