(this["webpackJsonpbloglist-frontend"]=this["webpackJsonpbloglist-frontend"]||[]).push([[0],{41:function(e,t,n){"use strict";n.r(t);var r=n(2),a=n(16),c=n.n(a),s=n(3),u=n.n(s),o=n(4),i=n(6),l=n(0),j=function(e){var t=e.blog;return Object(l.jsxs)("div",{children:[t.title," ",t.author]})},b=function(e){var t=e.message;return null===t?null:Object(l.jsx)("div",{className:"error",children:t})},d=n(5),p=n.n(d),f="api/blogs",O=function(){return p.a.get(f).then((function(e){return e.data}))},g=function(e){"bearer ".concat(e)},v={login:function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.post("api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(null),s=Object(i.a)(c,2),d=s[0],p=s[1],f=Object(r.useState)(""),h=Object(i.a)(f,2),x=h[0],m=h[1],w=Object(r.useState)(""),S=Object(i.a)(w,2),k=S[0],y=S[1],B=Object(r.useState)(null),J=Object(i.a)(B,2),E=J[0],I=J[1];Object(r.useEffect)((function(){O().then((function(e){return a(e)}))}),[]),Object(r.useEffect)((function(){var e=window.localStorage.getItem("loggedBlogappUser");if(e){var t=JSON.parse(e);I(t),g(t.token)}}),[]);var N=function(){var e=Object(o.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,v.login({username:x,password:k});case 4:n=e.sent,window.localStorage.setItem("loggedBlogappUser",JSON.stringify(n)),g(n.token),I(n),m(""),y(""),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),p("Wrong credentials"),setTimeout((function(){p(null)}),5e3);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return null===E?Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Log in to application"}),Object(l.jsxs)("form",{onSubmit:N,children:[Object(l.jsxs)("div",{children:["username",Object(l.jsx)("input",{type:"text",value:x,name:"Username",onChange:function(e){var t=e.target;return m(t.value)}})]}),Object(l.jsxs)("div",{children:["password",Object(l.jsx)("input",{type:"password",value:k,name:"Password",onChange:function(e){var t=e.target;return y(t.value)}})]}),Object(l.jsx)("button",{type:"submit",children:"login"})]})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:"Blogs"}),Object(l.jsx)("div",{children:Object(l.jsxs)("p",{children:[E.name," logged in"]})}),n.map((function(e){return Object(l.jsx)(j,{blog:e},e.id)})),Object(l.jsx)(b,{message:d})]})};c.a.render(Object(l.jsx)(h,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.17fa20f0.chunk.js.map