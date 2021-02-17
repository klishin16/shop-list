(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{74:function(e,t,a){e.exports=a(86)},79:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),o=(a(79),a(8)),u=(a(80),a(15)),i=a(14),s=a(13),m=a(6),d=a.n(m),p=a(12);function b(){}var f=Object(n.createContext)({token:null,userId:null,login:b,logout:b,isAuthenticated:!1}),E=function(){return Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])},v=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(o.a)(c,2),u=l[0],i=l[1],s=E();return{loading:a,request:Object(n.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t){var a,n,c,l,o,u=arguments;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),c["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:c});case 8:return l=e.sent,e.next=11,l.json();case 11:if(o=e.sent,l.ok){e.next=16;break}throw console.log("Http Hook:",o.message),s("Http Hook: ".concat(o.message.message)),new Error(o.message||"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a");case 16:return r(!1),e.abrupt("return",o);case 20:throw e.prev=20,e.t0=e.catch(4),r(!1),i(e.t0.message),e.t0;case 25:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:u,clearError:Object(n.useCallback)((function(){return i(null)}),[])}},g=a(118),O=a(120),h=a(121),j=a(122),k=a(134),x=a(136),y=a(126),C=a(116);function w(){return r.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",zIndex:"2"}},r.a.createElement("h2",null,"Loading..."))}var S=Object(C.a)({formControl:{minWidth:700},amountField:{marginTop:14},sublimeButton:{marginTop:10,background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},card:{marginTop:14},title:{marginTop:14,textAlign:"center",fontSize:45}}),N=function(){var e=S(),t=function(){var e=Object(n.useContext)(f).token,t=E(),a=Object(n.useState)({product:null,amount:0}),r=Object(o.a)(a,2),c=r[0],l=r[1],u=Object(n.useState)([]),i=Object(o.a)(u,2),m=i[0],b=i[1],g=Object(n.useState)(),O=Object(o.a)(g,2),h=O[0],j=(O[1],v()),k=j.loading,x=(j.error,j.request),y=(j.clearError,Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x("api/products");case 3:t=e.sent,b(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("ERROR -> Load Products: ",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[x])),C=function(){var a=Object(p.a)(d.a.mark((function a(){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n="Bearer ".concat(e),a.next=4,x("api/goods","POST",c,{Authorization:n});case 4:t("\u0422\u043e\u0432\u0430\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d!"),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(0),console.log("ERROR -> Create Good: ",a.t0);case 10:case"end":return a.stop()}}),a,null,[[0,7]])})));return function(){return a.apply(this,arguments)}}();return{products:m,fetchProducts:y,bindSelect:{value:h,onChange:function(e){l(Object(s.a)(Object(s.a)({},c),{},{product:e.target.value}))}},bindAmount:{value:c.amount,onChange:function(e){l(Object(s.a)(Object(s.a)({},c),{},{amount:parseInt(e.target.value)}))}},good:c,createHandler:C,loading:k}}(),a=t.products,c=t.fetchProducts,l=t.bindSelect,u=t.bindAmount,i=t.good,m=t.createHandler,b=t.loading;if(Object(n.useEffect)((function(){c()}),[c]),b)return r.a.createElement(w,null);var C=a.map((function(e){return r.a.createElement(g.a,{value:e._id,key:e._id},e.title)}));return r.a.createElement("div",null,r.a.createElement(O.a,{className:e.card},r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement("div",{className:e.title},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0442\u043e\u0432\u0430\u0440\u0430")),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(j.a,{className:e.formControl},r.a.createElement(k.a,l,C),r.a.createElement(x.a,Object.assign({className:e.amountField},u,{label:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430 \u0432 \u0442\u043e\u0432\u0430\u0440\u0435",type:"number"})),r.a.createElement(y.a,{className:e.sublimeButton,onClick:m},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement("pre",null,JSON.stringify(i,null,2))))))},T=a(24),B=a(127),P=a(128),I=Object(C.a)({authCard:{marginTop:34},title:{fontSize:43,textAlign:"center"}}),A=function(){var e=I(),t=Object(n.useContext)(f),a=E(),c=v(),l=c.loading,u=c.error,i=c.request,m=c.clearError,b=Object(n.useState)({email:"",password:""}),g=Object(o.a)(b,2),j=g[0],k=g[1];Object(n.useEffect)((function(){a(u),m()}),[u,a,m]);var C=function(e){k(Object(s.a)(Object(s.a)({},j),{},Object(T.a)({},e.target.name,e.target.value)))},S=function(){var e=Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/api/auth/register/","POST",Object(s.a)({},j));case 3:t=e.sent,a(t.message),console.log("Register Data:",t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),N=function(){var e=Object(p.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/api/auth/login/","POST",Object(s.a)({},j));case 3:a=e.sent,t.login(a.token,a.userId),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("Login Handler:",e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return l?r.a.createElement(w,null):r.a.createElement(h.a,{container:!0,justify:"center",xs:12},r.a.createElement(h.a,{item:!0,xs:4},r.a.createElement(O.a,{className:e.authCard},r.a.createElement(B.a,null,r.a.createElement("div",{className:e.title},"SHOP LIST"),r.a.createElement(x.a,{fullWidth:!0,label:"Email",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email",type:"text",name:"email",onChange:C}),r.a.createElement(x.a,{fullWidth:!0,label:"\u041f\u0430\u0440\u043e\u043b\u044c",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c",type:"password",name:"password",onChange:C}),r.a.createElement(P.a,null,r.a.createElement(y.a,{variant:"outlined",disabled:l,style:{marginRight:10},onClick:N},"\u0412\u043e\u0439\u0442\u0438"),r.a.createElement(y.a,{variant:"outlined",disabled:l,onClick:S},"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"))))))},_=a(135),H=a(89),R=Object(C.a)({card:{minWidth:275,marginTop:9},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:16},pos:{marginTop:12}}),z=function(e){var t=e.product,a=R();return r.a.createElement(O.a,{className:a.card},r.a.createElement(u.b,{to:"/product/".concat(t._id)},r.a.createElement(B.a,null,r.a.createElement("div",{className:a.title},t.title),r.a.createElement(H.a,null,"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f: ",t.unitOfMeasure),r.a.createElement(H.a,{className:a.title},"\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c: ",t.multiplicity))))},W=function(){var e=v(),t=e.loading,a=(e.error,e.request),c=(e.clearError,E()),l=Object(n.useState)([]),u=Object(o.a)(l,2),i=u[0],s=u[1],m=Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a("api/products");case 3:t=e.sent,c("\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!"),s(t),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])}))),[a,c]);if(Object(n.useEffect)((function(){m()}),[m]),t)return r.a.createElement(w,null);var b=i.map((function(e){return r.a.createElement(z,{key:e._id,product:e})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a c\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u0445 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"),r.a.createElement(_.a,null,b))},F=function(){E();var e=Object(i.h)().id,t=function(e){var t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1],l=v(),u=l.loading,i=(l.error,l.request),m=(l.clearError,Object(n.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("/api/products/".concat(t));case 3:a=e.sent,c(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[i]));return{product:r,loadProduct:m,onChange:function(e){var t=e.target,a=t.name,n=t.value;c(Object(s.a)(Object(s.a)({},r),{},Object(T.a)({},a,n)))},patchProduct:function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Patch Product"),e.prev=1,e.next=4,i("/api/products/".concat(t),"POST",r);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}(),loading:u}}([]),a=t.product,c=t.loadProduct,l=t.onChange,u=t.patchProduct,m=t.loading;return Object(n.useEffect)((function(){c(e)}),[c]),m?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement("h1",null,"Product Detail"),r.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",r.a.createElement("input",{type:"text",name:"title",value:a.title,onChange:l})),r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f: "),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"unitOfMeasure",value:a.unitOfMeasure,onChange:l}))),r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"center"}},"\u041a\u0440\u0430\u0442\u043d\u043e\u0441\u0442\u044c "),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"multiplicity",value:a.multiplicity,onChange:l}))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn",onClick:function(){return u(e)}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")),r.a.createElement("pre",null,JSON.stringify(a,null,2)))},q=a(125),D=a(88);var G=r.a.createContext({basketId:null,setBasketId:function(){}}),J=Object(C.a)({card:{minWidth:700,marginTop:9},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginTop:12}}),M=function(e){var t=e.basket,a=J(),c=Object(n.useContext)(G).setBasketId;return r.a.createElement(D.a,{key:t._id},r.a.createElement(O.a,{className:a.card},r.a.createElement(B.a,null,r.a.createElement(u.b,{to:"/basket/".concat(t._id)},t.title," ID: ",t._id),r.a.createElement(P.a,{className:a.pos},r.a.createElement(y.a,{variant:"outlined",onClick:function(){return c(t._id)}},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043a\u043e\u0440\u0437\u0438\u043d\u0443")))))},L=function(){var e=v(),t=e.loading,a=(e.error,e.request),c=(e.clearError,Object(n.useContext)(f).token),l=E(),u=Object(n.useState)([]),i=Object(o.a)(u,2),s=i[0],m=i[1],b=Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Bearer ".concat(c),console.log("Auth Str:",t),e.next=5,a("api/baskets","GET",null,{Authorization:t});case 5:n=e.sent,l("\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u0440\u0437\u0438\u043d \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!"),console.log("Data:",n),m(n),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("Basket Page -> errors:",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])}))),[a,c,l]);if(Object(n.useEffect)((function(){b()}),[b]),t)return r.a.createElement(w,null);var g=s.map((function(e){return r.a.createElement(M,{key:e._id,basket:e})}));return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u043f\u0438\u0441\u043e\u043a \u043a\u043e\u0440\u0437\u0438\u043d"),r.a.createElement(q.a,null,g))},X=function(){var e=Object(n.useState)({title:"",goods:[],total:0}),t=Object(o.a)(e,2),a=t[0],r=t[1],c=E(),l=Object(n.useContext)(G).basketId,u=v(),i=u.loading,m=(u.error,u.request),b=(u.clearError,(null===a||void 0===a?void 0:a.title)?a.title:null),f=Object(n.useCallback)(function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m("/api/baskets/".concat(t));case 3:a=e.sent,r(a),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),[m]),g=function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Patch Basket:",a),e.prev=1,e.next=4,m("/api/baskets/".concat(t),"POST",a);case 4:c("\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0430!"),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(p.a)(d.a.mark((function e(t){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("Add Good",a.goods.concat(t)),n={good:t},e.prev=2,e.next=5,m("/api/baskets/".concat(l,"/addGood"),"POST",n);case 5:c("\u0422\u043e\u0432\u0430\u0440 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"),f(l),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(2);case 11:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useCallback)((function(){console.log("Here"),g(l)}),[a.goods]),{basket:a,loadBasket:f,onChange:function(e){var t=e.target,n=t.name,c=t.value;r(Object(s.a)(Object(s.a)({},a),{},Object(T.a)({},n,c)))},patchBasket:g,loading:i,currentBasket:b,addGood:O}},$=Object(C.a)({card:{minWidth:275,marginTop:9},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginTop:12}}),K=function(e){var t=e.good,a=e.isGoodInBasket,n=e.addToBasket,c=e.children,l=$();function o(){return a?r.a.createElement(y.a,null,"\u0422\u043e\u0432\u0430\u0440 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0435"):r.a.createElement(y.a,{variant:"outlined",color:"primary",onClick:function(){return n(t._id)}},"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443")}return r.a.createElement(O.a,{className:l.card},r.a.createElement(B.a,null,r.a.createElement("span",{className:l.title},t.product.title," ",t._id),r.a.createElement("div",null,"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e: ",t.amount," ",t.product.unitOfMeasure),r.a.createElement(P.a,{className:l.pos},r.a.createElement(y.a,{variant:"outlined"},"\u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c"),r.a.createElement(o,null)),c))},Q="#76ff03",U="#00b0ff",V=Object(C.a)({card:{minWidth:300,marginTop:9},box:{display:"flex"},multiplier:{marginLeft:14,fontSize:34}}),Y=function(e){var t=e.inPurchase,a=V(),c=function(e){var t=Object(n.useState)(e),a=Object(o.a)(t,2),r=a[0],c=a[1],l=v(),u=l.loading,i=(l.error,l.request,l.clearError,Object(n.useState)(U)),m=Object(o.a)(i,2),d=m[0],p=m[1];Object(n.useMemo)((function(){r.buy?p(Q):p(U)}),[r]);return{purchase:r,bgColor:d,buyHandler:function(){c(Object(s.a)(Object(s.a)({},r),{},{buy:!r.buy}))},loading:u}}(t),l=c.purchase,u=c.bgColor,i=c.buyHandler;return r.a.createElement(O.a,{className:a.card},r.a.createElement(B.a,{style:{backgroundColor:u}},r.a.createElement(_.a,{className:a.box},r.a.createElement(K,{good:l.good}),r.a.createElement("div",{className:a.multiplier}," X ",l.things),r.a.createElement(y.a,{variant:"outlined",onClick:i},l.buy?"\u041a\u0443\u043f\u043b\u0435\u043d\u043e!":"\u041a\u0443\u043f\u0438\u0442\u044c!"))))},Z=function(){E();var e=Object(i.h)().id,t=X(),a=t.basket,c=t.loadBasket,l=t.onChange,o=t.patchBasket,u=t.loading;if(Object(n.useEffect)((function(){c(e)}),[c]),u)return r.a.createElement(w,null);var s=a.goods.map((function(e){return r.a.createElement(_.a,{key:e._id},r.a.createElement(Y,{inPurchase:e},r.a.createElement(y.a,{variant:"outlined"},"\u041a\u0443\u043f\u0438\u0442\u044c")))}));return r.a.createElement("div",null,r.a.createElement("h1",null,"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),r.a.createElement("div",null,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435: ",r.a.createElement("input",{type:"text",name:"title",value:a.title,onChange:l})),r.a.createElement("div",null,r.a.createElement(y.a,{variant:"outlined",color:"secondary",onClick:function(){return o(e)}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c")),r.a.createElement(_.a,null,s),r.a.createElement("pre",null,JSON.stringify(a,null,2)))},ee=Object(C.a)({box:{marginTop:9,width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"start"},card:{marginLeft:7,marginRight:7,minWidth:320},updateButton:{marginTop:14,marginLeft:7},title:{fontSize:48,marginTop:14,marginLeft:7},pre:{marginLeft:7},pos:{marginTop:12}}),te=function(){var e=ee(),t=v(),a=t.loading,c=(t.error,t.request),l=(t.clearError,Object(n.useContext)(f).token),u=E(),i=Object(n.useState)([]),s=Object(o.a)(i,2),m=s[0],b=s[1],g=Object(n.useContext)(G).basketId,O=X(),h=O.basket,j=O.loadBasket,k=O.addGood,x=O.patchBasket;Object(n.useEffect)((function(){j(g)}),[j,g]);var C=Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Bearer ".concat(l),console.log("Auth Str:",t),e.next=5,c("api/goods","GET",null,{Authorization:t});case 5:a=e.sent,u("\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!"),console.log("Data:",a),b(a),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])}))),[c,u]);if(Object(n.useEffect)((function(){C()}),[C]),a)return r.a.createElement(w,null);var S=m.map((function(t){return r.a.createElement(_.a,{className:e.card,key:t._id},r.a.createElement(K,{good:t,isGoodInBasket:h.goods.includes(t._id),addToBasket:k}))}));return r.a.createElement("div",null,r.a.createElement("div",{className:e.title},"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"),r.a.createElement(_.a,{className:e.box},S),r.a.createElement(y.a,{className:e.updateButton,variant:"outlined",color:"primary",onClick:function(){return x(g)}},"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),r.a.createElement("pre",{className:e.pre},JSON.stringify(h,null,2)))},ae=Object(C.a)({formControl:{minWidth:700},amountField:{marginTop:14},sublimeButton:{marginTop:10,background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,padding:"0 30px"},title:{textAlign:"center",fontSize:45}}),ne=function(){var e=ae(),t=function(){var e=E(),t=Object(n.useState)({title:"",unitOfMeasure:void 0,multiplicity:1}),a=Object(o.a)(t,2),r=a[0],c=a[1],l=v(),u=l.loading,i=(l.error,l.request);l.clearError;return{product:r,onChange:function(e){var t=e.target,a=t.name,n=t.value;c(Object(s.a)(Object(s.a)({},r),{},Object(T.a)({},a,n)))},createHandler:function(){var t=Object(p.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i("api/products","POST",r);case 3:e("\u041f\u0440\u043e\u0434\u0443\u043a\u0442 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0437\u0434\u0430\u043d!"),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log("ERROR -> Create Product: ",t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(){return t.apply(this,arguments)}}(),loading:u}}(),a=t.product,c=t.onChange,l=t.createHandler;return t.loading?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement(h.a,{container:!0,spacing:3,justify:"center"},r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement("div",{className:e.title},"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430")),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement(j.a,{className:e.formControl},r.a.createElement(x.a,{className:e.amountField,value:a.title,onChange:c,name:"title",label:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430",type:"text"}),r.a.createElement(x.a,{className:e.amountField,value:a.unitOfMeasure,onChange:c,name:"unitOfMeasure",label:"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",type:"text"}),r.a.createElement(x.a,{className:e.amountField,value:a.multiplicity,onChange:c,name:"multiplicity",label:"\u041c\u043d\u043e\u0436\u0438\u0442\u0435\u043b\u044c",type:"number"}),r.a.createElement(y.a,{className:e.sublimeButton,onClick:l},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"))),r.a.createElement(h.a,{item:!0,xs:8},r.a.createElement("pre",null,JSON.stringify(a,null,2)))))},re=Object(C.a)({box:{marginTop:9,width:"100%",display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"start"}}),ce=function(){re();var e=v(),t=e.loading,a=e.request,c=E(),l=Object(n.useState)([]),i=Object(o.a)(l,2),s=i[0],m=i[1],b=Object(n.useContext)(f).token,g=Object(n.useCallback)(Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="Bearer ".concat(b),e.next=4,a("api/presets","GET",null,{Authorization:t});case 4:n=e.sent,c("\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u0435\u0441\u0435\u0442\u043e\u0432 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d!"),m(n),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])}))),[a,c]);Object(n.useEffect)((function(){g()}),[]);var O=s.map((function(e){return r.a.createElement(D.a,null,r.a.createElement(u.b,{to:"/preset/".concat(e._id)},e.title))}));return t?r.a.createElement(w,null):r.a.createElement("div",null,r.a.createElement("h1",null,"Presets Page"),r.a.createElement(q.a,null,O),r.a.createElement("pre",null,JSON.stringify(s,null,2)))},le=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u043f\u0440\u0435\u0441\u0435\u0442\u0430"))},oe=a(129),ue=a(130),ie=a(131),se=a(132),me=function(){var e=Object(i.g)(),t=Object(n.useContext)(f),a=Object(n.useContext)(G).basketId,c=r.a.createElement("div",null,a?r.a.createElement(oe.a,{to:"/basket/".concat(a)},"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043a\u043e\u0440\u0437\u0438\u043d\u0430: ",a):"\u0422\u0435\u043a\u0443\u0449\u0430\u044f \u043a\u043e\u0440\u0437\u0438\u043d\u0430: \u041d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430");return r.a.createElement("nav",null,r.a.createElement(ue.a,{position:"static"},r.a.createElement(ie.a,{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(se.a,null,"SHOP LIST"),r.a.createElement(g.a,null,r.a.createElement(u.c,{to:"/create"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0442\u043e\u0432\u0430\u0440")),r.a.createElement(u.c,{to:"/create-product"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442"),r.a.createElement(u.c,{to:"/create-preset"},"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0440\u0435\u0441\u0435\u0442"),r.a.createElement(u.c,{to:"/products"},"\u0421\u043f\u0438\u0441\u043e\u043a \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u043e\u0432"),r.a.createElement(u.c,{to:"/goods"},"\u0422\u043e\u0432\u0430\u0440\u044b"),r.a.createElement(u.c,{to:"/presets"},"\u041f\u0440\u0435\u0441\u0435\u0442\u044b"),r.a.createElement(u.c,{to:"/baskets"},"\u041a\u043e\u0440\u0437\u0438\u043d\u044b"),c,r.a.createElement(y.a,{onClick:function(a){a.preventDefault(),t.logout(),e.push("/")}},"\u0412\u044b\u0439\u0442\u0438"))))},de=a(133);function pe(){var e=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(o.a)(c,2),u=l[0],i=l[1],s=Object(n.useCallback)((function(e,t){r(e),i(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),m=Object(n.useCallback)((function(){r(null),i(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&s(e.token,e.userId)}),[s]),{login:s,logout:m,token:a,userId:u}}(),t=e.token,a=e.login,c=e.logout,l=e.userId,s=!!t,m=function(e){return e?r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/create",exact:!0},r.a.createElement(N,null)),r.a.createElement(i.b,{path:"/products",exact:!0},r.a.createElement(W,null)),r.a.createElement(i.b,{path:"/create-product",exact:!0},r.a.createElement(ne,null)),r.a.createElement(i.b,{path:"/product/:id"},r.a.createElement(F,null)),r.a.createElement(i.b,{path:"/baskets",exact:!0},r.a.createElement(L,null)),r.a.createElement(i.b,{path:"/basket/:id"},r.a.createElement(Z,null)),r.a.createElement(i.b,{path:"/goods",exact:!0},r.a.createElement(te,null)),r.a.createElement(i.b,{path:"/presets",exact:!0},r.a.createElement(ce,null)),r.a.createElement(i.b,{path:"/create-preset",exact:!0},r.a.createElement(le,null)),r.a.createElement(i.a,{to:"/baskets"})):r.a.createElement(i.d,null,r.a.createElement(i.b,{path:"/",exact:!0},r.a.createElement(A,null)),r.a.createElement(i.a,{to:"/"}))}(s),d=Object(n.useState)(null),p=Object(o.a)(d,2),b=p[0],E=p[1];return r.a.createElement(f.Provider,{value:{token:t,login:a,logout:c,userId:l,isAuthenticated:s}},r.a.createElement(G.Provider,{value:{basketId:b,setBasketId:E}},r.a.createElement(u.a,null,s&&r.a.createElement(me,null),r.a.createElement(de.a,null,m))))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[74,1,2]]]);
//# sourceMappingURL=main.fbf8dea3.chunk.js.map