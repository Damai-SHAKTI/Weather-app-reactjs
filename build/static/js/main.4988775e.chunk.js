(this.webpackJsonpweather=this.webpackJsonpweather||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(10),o=n.n(c),i=(n(67),n(19)),s=(n(68),n(117)),l=n(13),u=n(120),d=n(122),h=n(123),j=n(124),p=n(53),b=n(129),m=n(46),O=n.n(m),x=n(5),f=Object(s.a)((function(e){return{root:{flexGrow:1},title:{flexGrow:1},search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(l.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(l.b)(e.palette.common.white,.25)},marginLeft:0,width:"100% auto"},dropdownBtn:{color:"#ffffff"}}}));function g(e){var t=e.themeColor,n=e.setThemeColor,a=e.themes,c=f(),o=Object(r.useState)(null),s=Object(i.a)(o,2),l=s[0],m=s[1],g=function(e){m(null),"DARK"===e?n(a.grey):"BLUE"===e?n(a.blue):"GREEN"===e?n(a.green):"ORANGE"===e?n(a.orange):"PURPLE"===e?n(a.purple):console.log("No theme found with the color",e),document.getElementById("dropdownBtnText").innerHTML=e};return Object(x.jsx)("div",{className:c.root,children:Object(x.jsx)(u.a,{style:{backgroundColor:t},position:"static",children:Object(x.jsxs)(d.a,{children:[Object(x.jsx)(h.a,{className:c.title,variant:"h6",noWrap:!0,children:"Weather App"}),Object(x.jsxs)("div",{className:c.search,children:[Object(x.jsxs)(j.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){return function(e){m(e.currentTarget)}(e)},children:[Object(x.jsx)(h.a,{id:"dropdownBtnText",className:c.dropdownBtn,children:"BLUE"}),Object(x.jsx)(O.a,{})]}),Object(x.jsxs)(p.a,{id:"simple-menu",anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:function(){return m(null)},children:[Object(x.jsx)(b.a,{onClick:function(){return g("DARK")},children:"DARK"}),Object(x.jsx)(b.a,{onClick:function(){return g("BLUE")},children:"BLUE"}),Object(x.jsx)(b.a,{onClick:function(){return g("GREEN")},children:"GREEN"}),Object(x.jsx)(b.a,{onClick:function(){return g("PURPLE")},children:"PURPLE"}),Object(x.jsx)(b.a,{onClick:function(){return g("ORANGE")},children:"ORANGE"})]})]})]})})})}var w=n(41),y=n.n(w),v=n(47),C=n(125),E=n(127),N=n(126),k=n(128),S=Object(s.a)((function(e){return{paragraphStyle:{fontSize:"25px",margin:"5px 0px"},searchBtn:{marginLeft:"auto"}}}));function B(e){var t=e.themeColor,n=e.deviceWidth,a=S(),c=Object(r.useState)(null),o=Object(i.a)(c,2),s=o[0],l=o[1],u=Object(r.useState)("Wan Chai"),d=Object(i.a)(u,2),h=d[0],p=d[1];Object(r.useEffect)((function(){(function(){var e=Object(v.a)(y.a.mark((function e(){var t,n,r;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(h,"&units=metric&appid=").concat("375a63cc369dd4b4ebcf4e7418d37a35"),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:r=e.sent,l(r);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]);var b={backgroundColor:t,color:"#ffffff"},m={width:n,margin:"10px auto"},O={width:n,margin:"10px auto"};return Object(x.jsxs)(C.a,{style:m,variant:"outlined",children:[Object(x.jsxs)(N.a,{children:[Object(x.jsx)(k.a,{id:"input-city",style:{width:"100%"},label:"Enter Any City Name",variant:"outlined"}),Object(x.jsx)("div",{style:O,children:Object(x.jsxs)("center",{children:[null!=s&&200===s.cod&&Object(x.jsx)("img",{width:"150px",src:"https://openweathermap.org/img/wn/"+s.weather[0].icon+"@2x.png",alt:"Weather Icon"}),null!==s?200!==s.cod?Object(x.jsx)("p",{className:a.paragraphStyle,children:s.message}):Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("p",{className:a.paragraphStyle,children:[" Weather: ",s.weather[0].description]}),Object(x.jsxs)("p",{className:a.paragraphStyle,children:[" Temperature: ",s.main.temp+"\u2103"]}),Object(x.jsxs)("p",{className:a.paragraphStyle,children:[" Wind Speed: ",s.wind.speed]}),Object(x.jsxs)("p",{className:a.paragraphStyle,children:[" Humidity: ",s.main.humidity]}),Object(x.jsxs)("p",{className:a.paragraphStyle,children:[" City: ",h+" ,"+s.sys.country]})]}):"unknown error"]})})]}),Object(x.jsx)(E.a,{children:Object(x.jsx)(j.a,{className:a.searchBtn,variant:"contained",style:b,onClick:function(){return p(document.getElementById("input-city").value)},children:"Search"})})]})}var R=n(48),L=n.n(R),W=n(49),A=n.n(W),G=n(50),T=n.n(G),U=n(51),P=n.n(U),I=n(52),D=n.n(I),K={blue:L.a[500],grey:A.a[900],green:T.a[600],orange:P.a[600],purple:D.a[600]};var M=function(){var e=Object(r.useState)(K.blue),t=Object(i.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(window.innerWidth),o=Object(i.a)(c,2),s=o[0],l=o[1];return window.onresize=function(){return l(window.innerWidth)},document.body.style.backgroundColor="#e8e8e8",Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{themeColor:n,setThemeColor:a,themes:K}),Object(x.jsx)(B,{themeColor:n,deviceWidth:s<=1336?"98%":"50%"})]})};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.4988775e.chunk.js.map