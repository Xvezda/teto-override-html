window.onload=function(){let e=0,s=["scene-1","scene-1","scene-1","scene-1","scene-2","scene-3","scene-2","scene-3","scene-2","scene-3","scene-2","scene-3","scene-4","scene-4","scene-4","scene-4","scene-2","scene-3","scene-2","scene-3","scene-2","scene-3","scene-2","scene-3","scene-5","scene-6","scene-5","scene-6","scene-5","scene-6","scene-5","scene-6","scene-2","scene-3","scene-2","scene-3","scene-2","scene-3","scene-2","scene-3","scene-1","scene-1","scene-1","scene-1"],c=()=>{let c=s[++e%s.length];document.body.className!==c&&(document.body.className=c)},n=setInterval(c,1200);window.addEventListener("keydown",e=>{switch(e.key){case"1":case"2":case"3":case"4":case"5":case"6":clearInterval(n),document.body.className=`scene-${e.key}`;break;case"0":setInterval(c,1200)}});let a=document.getElementById("audio");a.addEventListener("click",()=>{let e=document.querySelector("audio");e.paused?(e.play(),a.className="unmuted"):(e.pause(),a.className="muted")})};
//# sourceMappingURL=index.4dbac9b9.js.map