const t=document.querySelector("#container"),e=t.getBoundingClientRect(),i=()=>{let i=Math.min(window.innerWidth/e.width,window.innerHeight/e.height);t.style.transformOrigin="0 0",t.style.transform=`scale(${i})`,t.style.width=`${e.width}px`,t.style.height=`${e.height}px`,t.style.left=`${(window.innerWidth-1111*i)/2}px`,t.style.top=`${(window.innerHeight-1132*i)/2}px`,t.style.position="absolute"};window.addEventListener("resize",i),i(),window.addEventListener("load",()=>{t.style.opacity=1});
//# sourceMappingURL=index.e3ecd4d9.js.map