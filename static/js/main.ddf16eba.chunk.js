(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),r=a.n(c);a(13);function s(){const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)(0),[r,s]=Object(n.useState)([]),[o,m]=Object(n.useState)(0),[i,u]=Object(n.useState)(!1);Object(n.useEffect)(()=>{fetch("questions.json").then(e=>e.json()).then(e=>{t(e),s(Array(e[0].answers.length).fill(""))}).catch(e=>console.error("Error loading questions:",e))},[]);return 0===e.length?l.a.createElement("div",{className:"text-center p-4"},"Loading..."):l.a.createElement("div",{className:"p-4 max-w-lg mx-auto text-center"},l.a.createElement("h1",{className:"text-2xl font-bold mb-4"},"German Adjective Endings Game"),l.a.createElement("p",{className:"mb-4"},"Fill in the correct adjective endings."),l.a.createElement("p",{className:"text-lg mb-4"},e[a].text.split(" ").map((t,n)=>t.includes("_")?l.a.createElement("select",{key:n,className:"border rounded px-2 py-1 mx-1",value:r[n]||"",onChange:e=>((e,t)=>{const a=[...r];a[e]=t,s(a)})(n,e.target.value),disabled:i},l.a.createElement("option",{value:""},"--"),e[a].options.map((e,t)=>l.a.createElement("option",{key:t,value:e},e))):t+" ")),i?l.a.createElement("div",null,l.a.createElement("p",{className:"mt-2"},"Score: ",o," / ",e[a].answers.length),l.a.createElement("button",{onClick:()=>{a<e.length-1?(c(a+1),s(Array(e[a+1].answers.length).fill("")),u(!1)):alert("Game Over! Refresh to play again.")},className:"bg-green-500 text-white px-4 py-2 mt-2 rounded"},"Next")):l.a.createElement("button",{onClick:()=>{let t=0;r.forEach((n,l)=>{n===e[a].answers[l]&&t++}),m(t),u(!0)},className:"bg-blue-500 text-white px-4 py-2 rounded"},"Submit"))}var o=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:r}=t;a(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s,null))),o()},4:function(e,t,a){e.exports=a(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.ddf16eba.chunk.js.map