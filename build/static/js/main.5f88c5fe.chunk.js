(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,t,n){e.exports=n(37)},19:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),u=(n(19),n(2)),i=function(e){var t=e.filter,n=e.setFilter,a=e.persons,o=e.setPersons;return r.a.createElement("div",null,"filter shown with: ",r.a.createElement("input",{value:t,onChange:function(e){n(e.target.value);var r=a.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));o(r)}})," ")},s=n(3),l=n.n(s),m="https://protected-headland-68853.herokuapp.com/api/persons",d=function(){return l.a.get(m).then((function(e){return e.data}))},f=function(e){return l.a.post(m,e).then((function(e){return e.data}))},h=function(e){return l.a.delete("".concat(m,"/").concat(e))},b=function(e,t){return l.a.put("".concat(m,"/").concat(e.id),t).then((function(e){return e.data}))},p=function(e){var t=e.setError,n=e.setMessage,a=e.persons,o=e.newName,c=e.setNewName,u=e.newNumber,i=e.setNewNumber,s=e.setPersons;return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var r={name:o,number:u},l=a.find((function(e){return e.name===r.name}));l?(window.confirm("".concat(r.name," is already added to the phonebook, replace the old number with the new one?"))&&b(l,r).then((function(e){return d().then((function(e){s(e),n("Changed ".concat(l.name)),setTimeout((function(){n("")}),5e3)}))})).catch((function(e){t("Information of ".concat(l.name," has already been deleted")),setTimeout((function(){t("")}),5e3)})),c(""),i("")):f(r).then((function(e){s(e),n("Added ".concat(r.name)),setTimeout((function(){n("")}),5e3),c(""),i("")}))}},r.a.createElement("div",null," name: ",r.a.createElement("input",{onChange:function(e){c(e.target.value)},value:o})," "),r.a.createElement("div",null," number: ",r.a.createElement("input",{onChange:function(e){i(e.target.value)},value:u})," "),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},w=function(e){var t=e.setMessage,n=e.persons,a=e.setPersons;return n.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("p",{style:{width:"50%",display:"inline"},key:e.name},e.name," ",e.number),r.a.createElement("button",{onClick:function(){!function(e){window.confirm("Do you want to delete ".concat(e.name," from the phonebook?"))&&h(e.id).then((function(){d().then((function(n){a(n),t("Deleted ".concat(e.name)),setTimeout((function(){t("")}),5e3)}))}))}(e)}},"Delete"))}))},g=function(e){var t=e.message;return""===t?null:r.a.createElement("div",{style:{fontSize:50,color:"green",backgroundColor:"gray",border:"10px solid",borderColor:"green",textAlign:"center"}},t)},E=function(e){var t=e.error;return""===t?null:r.a.createElement("div",{style:{fontSize:50,color:"red",backgroundColor:"gray",border:"10px solid",borderColor:"red",textAlign:"center"}},t)},v=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),s=Object(u.a)(c,2),l=s[0],m=s[1],f=Object(a.useState)(""),h=Object(u.a)(f,2),b=h[0],v=h[1],y=Object(a.useState)(""),j=Object(u.a)(y,2),k=j[0],N=j[1],O=Object(a.useState)(""),C=Object(u.a)(O,2),S=C[0],P=C[1],x=Object(a.useState)(""),M=Object(u.a)(x,2),D=M[0],T=M[1];return Object(a.useEffect)((function(){d().then((function(e){o(e)}))}),[]),r.a.createElement("div",{style:{width:"50%",margin:"auto"}},r.a.createElement("h2",null,"Phonebook"),r.a.createElement(g,{message:S}),r.a.createElement(E,{error:D}),r.a.createElement(i,{filter:k,setFilter:N,persons:n,setPersons:o}),r.a.createElement("h2",null,"add a new"),r.a.createElement(p,{setError:T,message:S,persons:n,newName:l,setNewName:m,newNumber:b,setNewNumber:v,setPersons:o,setMessage:P}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(w,{setMessage:P,persons:n,setPersons:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.5f88c5fe.chunk.js.map