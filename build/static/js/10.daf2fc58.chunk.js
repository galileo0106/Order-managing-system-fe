(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[10],{1003:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),l=a.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,l=void 0===c?24:c,u=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.a.createElement("path",{d:"M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"}),r.a.createElement("line",{x1:"18",y1:"9",x2:"12",y2:"15"}),r.a.createElement("line",{x1:"12",y1:"9",x2:"18",y2:"15"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="Delete",t.a=u},1021:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(4),l=a.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,l=void 0===c?24:c,u=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="PlusCircle",t.a=u},1048:function(e,t,a){"use strict";a.r(t);var n=a(37),r=a(0),c=a.n(r),l=a(895),o=a(950),i=a(955),u=a(87),s=a(308),m=a(965),d=a(50),p=a(36),f=a(3),b=a(951),v=a(981),g=a(928),E=a(534),O=a(929),h=a(145),y=a(1021),j=a(966),w=a.n(j),P=["className"],k=Object(l.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}},actionIcon:{marginRight:e.spacing(1)}}}));var x=function(e){var t=e.className,a=Object(d.a)(e,P),n=k();return c.a.createElement(b.a,Object.assign({container:!0,spacing:3,justify:"space-between",className:Object(f.a)(n.root,t)},a),c.a.createElement(b.a,{item:!0},c.a.createElement(v.a,{separator:c.a.createElement(w.a,{fontSize:"small"}),"aria-label":"breadcrumb"},c.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app",component:p.a},"Dashboard"),c.a.createElement(g.a,{variant:"body1",color:"inherit",to:"/app/management",component:p.a},"Stores"),c.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"Products List")),c.a.createElement(E.a,{variant:"h3",color:"textPrimary"},"This is products list!")),c.a.createElement(b.a,{item:!0},c.a.createElement(O.a,{color:"secondary",variant:"contained",className:n.action,component:p.a,to:"/app/stores/productCreate"},c.a.createElement(h.a,{fontSize:"small",className:n.actionIcon},c.a.createElement(y.a,null)),"Add New Product")))},N=a(237),S=a.n(N),z=a(310),C=a.n(z),A=a(984),D=a(936),L=a(946),R=a(1037),I=a(1041),T=a(1039),B=a(1040),M=a(1038),W=a(961),Y=a(943),_=a(1044),H=a(931),J=a(1003),V=["className","products","deleteProduct"],q=[{value:"updatedAt|asc",label:"Added Date (oldest first)"},{value:"updatedAt|desc",label:"Added Date (newest first)"},{value:"price|desc",label:"Price (high to low)"},{value:"price|asc",label:"Price (low to high)"}];function F(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}function G(e,t){var a=t.split("|"),r=Object(n.a)(a,2),c=r[0],l=function(e,t){return"desc"===e?function(e,a){return F(e,a,t)}:function(e,a){return-F(e,a,t)}}(r[1],c),o=e.map((function(e,t){return[e,t]}));return o.sort((function(e,t){var a=l(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),o.map((function(e){return e[0]}))}var K=Object(l.a)((function(e){return{root:{},avatar:{height:42,width:42,marginRight:e.spacing(1)}}}));function Q(e){var t=e.className,a=e.products,l=e.deleteProduct,o=Object(d.a)(e,V),u=K(),s=Object(r.useState)(0),m=Object(n.a)(s,2),b=m[0],v=m[1],g=Object(r.useState)(10),E=Object(n.a)(g,2),O=E[0],y=E[1],j=Object(r.useState)(q[0].value),w=Object(n.a)(j,2),P=w[0],k=w[1],x=function(e,t,a){return e.slice(t*a,t*a+a)}(G(a,P),b,O);return c.a.createElement(A.a,Object.assign({className:Object(f.a)(u.root,t)},o),c.a.createElement(D.a,null),c.a.createElement(i.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},c.a.createElement(L.a,{label:"Sort By",name:"sort",onChange:function(e){e.persist(),k(e.target.value)},select:!0,SelectProps:{native:!0},value:P,variant:"outlined"},q.map((function(e){return c.a.createElement("option",{key:e.value,value:e.value},e.label)})))),c.a.createElement(C.a,null,c.a.createElement(i.a,{minWidth:700},c.a.createElement(R.a,null,c.a.createElement(I.a,null,c.a.createElement(T.a,null,c.a.createElement(B.a,null,"No"),c.a.createElement(B.a,null,"Name"),c.a.createElement(B.a,null,"Image"),c.a.createElement(B.a,null,"Price"),c.a.createElement(B.a,null,"Sale Price"),c.a.createElement(B.a,null,"Amount"),c.a.createElement(B.a,null,"Added Date"),c.a.createElement(B.a,{align:"right"},"Actions"))),c.a.createElement(M.a,null,x.map((function(e){return c.a.createElement(T.a,{hover:!0,key:e._id},c.a.createElement(B.a,null,e.number),c.a.createElement(B.a,null,e.name),c.a.createElement(B.a,null,c.a.createElement(W.a,{className:u.avatar,src:e.avatar})),c.a.createElement(B.a,null,e.currency,e.price),c.a.createElement(B.a,null,e.currency,e.saleprice),c.a.createElement(B.a,null,e.amount),c.a.createElement(B.a,null,S()(e.updatedAt).format("DD/MM/YYYY")),c.a.createElement(B.a,{align:"right"},c.a.createElement(Y.a,{component:p.a,to:"/app/stores/productEdit/"+e._id},c.a.createElement(h.a,{fontSize:"small"},c.a.createElement(H.a,null))),c.a.createElement(Y.a,{onClick:function(){window.confirm("Are you really want to delete?")&&l(e._id)}},c.a.createElement(h.a,{fontSize:"small"},c.a.createElement(J.a,null)))))})))))),c.a.createElement(_.a,{component:"div",count:a.length,onChangePage:function(e,t){v(t)},onChangeRowsPerPage:function(e){y(e.target.value)},page:b,rowsPerPage:O,rowsPerPageOptions:[5,10,25]}))}Q.defaultProps={products:[]};var U=Q,X=a(107),Z=Object(l.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=Z(),t=Object(m.a)(),a=Object(r.useState)(null),l=Object(n.a)(a,2),d=l[0],p=l[1],f=Object(r.useCallback)((function(){u.a.get(X.a+"products/list").then((function(e){t.current&&p(e.data.products)}))}),[t]);return Object(r.useEffect)((function(){f()}),[f]),d?c.a.createElement(s.a,{className:e.root,title:"Partners List"},c.a.createElement(o.a,{maxWidth:!1},c.a.createElement(x,null),d&&c.a.createElement(i.a,{mt:10},c.a.createElement(U,{products:d,deleteProduct:function(e){u.a.get(X.a+"products/delete/"+e).then((function(e){t.current&&p(e.data.products)}))}})))):null}},965:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(0);function r(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},984:function(e,t,a){"use strict";var n=a(1),r=a(2),c=a(0),l=a(3),o=a(232),i=a(6),u=c.forwardRef((function(e,t){var a=e.classes,i=e.className,u=e.raised,s=void 0!==u&&u,m=Object(r.a)(e,["classes","className","raised"]);return c.createElement(o.a,Object(n.a)({className:Object(l.a)(a.root,i),elevation:s?8:1,ref:t},m))}));t.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(u)}}]);
//# sourceMappingURL=10.daf2fc58.chunk.js.map