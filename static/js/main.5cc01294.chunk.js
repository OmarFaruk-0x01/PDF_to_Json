(this.webpackJsonppdf_to_json=this.webpackJsonppdf_to_json||[]).push([[0],{101:function(e,t,n){"use strict";n.r(t);var i=n(0),c=n.n(i),a=n(26),r=n.n(a),s=(n(76),n(15)),l=n(18),o=(n.p,n(77),n(139)),d=n(140),f=n(133),j=n(132),u=n(134),m=n(135),x=n(136),p=n(137),b=n(130),h=n(138),O=n(61),y=n.n(O),v=n(141),g=n(142),C=n(62),S=n.n(C),w=n(2);function k(e){var t=e.item,n=e.removeHandle,i=e.pdfJson,a=e.currentStatus,r=c.a.useState(!1),s=Object(l.a)(r,2),o=s[0],d=s[1];return Object(w.jsxs)("div",{style:{backgroundColor:"ActiveBorder"},children:[Object(w.jsxs)("div",{style:{display:"flex"},children:[Object(w.jsxs)(j.a,{onClick:function(){d(!o)},style:{flex:1,justifyItems:"center",justifyContent:"space-between"},children:[Object(w.jsxs)("div",{style:{flex:2,display:"flex",flexDirection:"row",alignItems:"center"},children:[Object(w.jsx)(u.a,{children:Object(w.jsx)(m.a,{children:"picture_as_pdf"})}),Object(w.jsx)(x.a,{primary:t.name})]}),Object(w.jsxs)("div",{style:{flex:1,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"flex-end"},children:[Object(w.jsx)(x.a,{primary:["Queue","Proccessing","Finished","Failed"][a],style:{alignItems:"center",justifyContent:"center",display:"flex",color:0==a?"yellowgreen":2==a?"green":3==a?"red":"GrayText",size:10}}),2==a&&Object(w.jsx)(u.a,{children:Object(w.jsxs)(m.a,{children:["expand_",o?"less":"more"]})}),1==a&&Object(w.jsx)(p.a,{value:100})]})]}),Object(w.jsx)(j.a,{onClick:n,sx:{flex:0,alignItems:"center",justifyContent:"center"},children:Object(w.jsx)(u.a,{children:Object(w.jsx)(m.a,{children:"delete"})})})]}),2==a&&Object(w.jsx)(b.a,{in:o,timeout:"auto",unmountOnExit:!0,children:Object(w.jsx)(h.a,{component:"div",disablePadding:!0,children:Object(w.jsx)("div",{style:{padding:20},children:Object(w.jsx)(y.a,{displayDataTypes:!1,theme:"monokai",src:i.data,collapsed:!0})})})})]})}var J=function(){var e=c.a.useState([]),t=Object(l.a)(e,2),n=t[0],i=t[1];return console.log(n),Object(w.jsx)(o.a,{component:"main",style:{width:"100%"},children:Object(w.jsx)(d.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:Object(w.jsxs)(d.a,{component:"form",noValidate:!0,sx:{mt:1,width:"100%"},children:[Object(w.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[Object(w.jsxs)(v.a,{sx:{fontSize:20},children:["PDFs to JSON Converter",Object(w.jsx)(v.a,{sx:{fontSize:12},children:"made by @omaribnmizan"})]}),Object(w.jsxs)(f.a,{type:"button",fullWidth:!0,variant:"outlined",sx:{mt:3,mb:2,ml:"auto",width:"30%",alignSelf:"flex-end"},children:[Object(w.jsx)("input",{multiple:!0,onChange:function(e){var t=e.target.files;i(new Array(t.length).fill(!1).map((function(e,n){return{currentStatus:0,pdfJson:{},file:t.item(n)}})))},accept:"application/pdf",type:"file",style:{opacity:0,position:"absolute",width:"100%"}}),"Upload PDFs"]})]}),Object(w.jsx)(g.a,{}),n.map((function(e){return Object(w.jsx)(k,{removeHandle:function(){return t=e.file,void i(n.filter((function(e){return e.file.name!==t.name})));var t},item:e.file,pdfJson:e.pdfJson,currentStatus:e.currentStatus},e.file.name)})),Object(w.jsx)(g.a,{}),Object(w.jsx)("div",{style:{backgroundColor:"#fff",position:"sticky",bottom:0},children:Object(w.jsx)(f.a,{disabled:0===n.length,onClick:function(){n.forEach((function(e){var t=n.find((function(t){return t.file.name==e.file.name}));t.currentStatus=1,i([].concat(Object(s.a)(n.filter((function(t){return t.file.name!==e.file.name}))),[t]));var c=new FormData;c.append("pdf",e.file),S.a.post("https://pdf-to-json-v1.herokuapp.com/getjson",c,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){var c=n.find((function(t){return t.file.name==e.file.name}));c.pdfJson=t.data,c.currentStatus=2,i([].concat(Object(s.a)(n.filter((function(t){return t.file.name!==e.file.name}))),[c]))})).catch((function(t){var c=n.find((function(t){return t.file.name==e.file.name}));c.pdfJson={},c.currentStatus=3,i([].concat(Object(s.a)(n.filter((function(t){return t.file.name!==e.file.name}))),[c])),console.log("Error: ",t)}))}))},fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,width:"30%"},children:"Convert to JSON"})})]})})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,143)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),c(e),a(e),r(e)}))};r.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),F()},76:function(e,t,n){},77:function(e,t,n){}},[[101,1,2]]]);
//# sourceMappingURL=main.5cc01294.chunk.js.map