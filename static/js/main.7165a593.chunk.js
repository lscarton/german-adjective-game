(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),s=a.n(c);a(13);function r(){const[e,t]=Object(n.useState)([]),[a,c]=Object(n.useState)(0),[s,r]=Object(n.useState)([]),[o,m]=Object(n.useState)(0),[i,u]=Object(n.useState)(!1);Object(n.useEffect)(()=>{fetch("questions.json").then(e=>e.json()).then(e=>{t(e),r(Array(e[0].answers.length).fill(""))}).catch(e=>console.error("Error loading questions:",e))},[]);return 0===e.length?l.a.createElement("div",{className:"text-center p-4"},"Loading..."):l.a.createElement("div",{className:"p-4 max-w-lg mx-auto text-center"},l.a.createElement("h1",{className:"text-2xl font-bold mb-4"},"German Adjective Endings Game"),l.a.createElement("p",{className:"mb-4"},"Select the correct adjective endings."),l.a.createElement("div",{className:"text-lg mb-4 flex flex-wrap justify-center items-center gap-2"},e[a].text.split(" ").map((t,n)=>t.includes("_")?l.a.createElement("span",{key:n,className:"mx-1 flex items-center"},l.a.createElement("span",{className:"mr-1"},t.replace("_","")," "),l.a.createElement("select",{className:"border rounded px-2 py-1 mx-1 block w-20",value:s[n]||"",onChange:e=>((e,t)=>{const a=[...s];a[e]=t,r(a)})(n,e.target.value),disabled:i},l.a.createElement("option",{value:""},"-"),e[a].options.map((e,t)=>l.a.createElement("option",{key:t,value:e},e)))):l.a.createElement("span",{key:n,className:"mx-1"},t," "))),i?l.a.createElement("div",null,l.a.createElement("p",{className:"mt-2"},"Score: ",o," / ",e[a].answers.length),l.a.createElement("button",{onClick:()=>{a<e.length-1?(c(a+1),r(Array(e[a+1].answers.length).fill("")),u(!1)):alert("Game Over! Refresh to play again.")},className:"bg-green-500 text-white px-4 py-2 mt-2 rounded"},"Next")):l.a.createElement("button",{onClick:()=>{let t=0;s.forEach((n,l)=>{n===e[a].answers[l]&&t++}),m(t),u(!0)},className:"bg-blue-500 text-white px-4 py-2 rounded"},"Submit"))}var o=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,15)).then(t=>{let{getCLS:a,getFID:n,getFCP:l,getLCP:c,getTTFB:s}=t;a(e),n(e),l(e),c(e),s(e)})};s.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(r,null))),o()},4:function(e,t,a){e.exports=a(14)}},[[4,1,2]]]);
//# sourceMappingURL=main.7165a593.chunk.js.map