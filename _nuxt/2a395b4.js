(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{821:function(e,n,t){"use strict";t.r(n);var r=t(11),o=(t(43),{data:function(){return{message:"Hello World"}},methods:{send:function(){return Object(r.a)(regeneratorRuntime.mark((function e(){var data,n,t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return data={Header:"ALFGRA",Target:"6002774112",Is_Unicode:"0",Is_Flash:"0",Message_Type:"TXN",Entity_Id:"1401472420000068478",Content_Template_Id:"1407171182618035754",Template_Keys_and_Values:[{Key:"otp",Value:"Value of otp"}]},"https://bulksms.bsnl.in:5010/api/Send_SMS",n={method:"POST",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxd1394hfpbjo1ODkwIiwiYXVkIjoiMTAwMSJ9.lmvxsM13bkj8","Content-Type":"application/json; charset=utf-8"},body:JSON.stringify(data)},e.next=5,fetch("https://bulksms.bsnl.in:5010/api/Send_SMS",n);case 5:return t=e.sent,e.next=8,t.json();case 8:e.sent;case 9:case"end":return e.stop()}}),e)})))()}}}),c=t(7),component=Object(c.a)(o,(function(){var e=this,n=e._self._c;return n("div",[n("button",{on:{click:function(n){return e.send()}}},[e._v("Send")])])}),[],!1,null,"07b1f1fc",null);n.default=component.exports}}]);