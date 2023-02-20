const mr=document.querySelector("#MR")
const ce=document.querySelector("#CE")
const dis=document.querySelector("#DISL")

function select(ver,nover1,nover2){
    ver.classList.remove("opa")
    nover1.classList.add("opa")
    nover2.classList.add("opa")
}

const per=document.querySelector(".per")
const negro=document.querySelector("#negro")
const camino=document.querySelector("#camino")
const paisaje=document.querySelector("#paisaje")
const dislexia=document.querySelector("#dislexia")
const aceptar=document.querySelector("#aceptar")
const aceptar1=document.querySelector("#aceptar1")
const aceptar2=document.querySelector("#aceptar2")
aceptar.hidden=true
aceptar1.hidden=true
aceptar2.hidden=true
dislexia.hidden=true
paisaje.hidden=true
per.hidden=true
negro.hidden=true
camino.hidden=true

function mover(per,event,negro){
const a=per.style.left.replaceAll("px","")
const b=event.x-a
negro.style=`left:${event.x}px;top:${event.y}px`
if (b>0){
  per.classList.remove("invert")
  per.classList.add("noinvert")
  per.style=`left:${event.x}px`
}
if(b<0){
  per.classList.add("invert")
  per.classList.remove("noinvert")
  per.style=`left:${event.x}px`
}
}
document.onmousemove=()=>mover(per,event,negro)


function MR(mr,ce,dis,camino,per,dislexia,aceptar,aceptar1,aceptar2){
    camino.hidden=false
    per.hidden=false
    aceptar.hidden=false
    aceptar1.hidden=true
    aceptar2.hidden=true
    select(mr,ce,dis)
    dislexia.hidden=true
    const p=document.querySelectorAll("p")
    for (let i=0;i<p.length;i++){
        p[i].classList.add("noinvert")
        p[i].classList.remove("invert")
    }
    if(mr.classList.contains("opa")){
    per.hidden=true
    camino.hidden=true
}

if(ce.classList.contains("opa")){
    negro.hidden=true
    paisaje.hidden=true
}
}

function CE(mr,ce,dis,negro,dislexia,aceptar,aceptar1,aceptar2){
    negro.hidden=false
    paisaje.hidden=false
    aceptar.hidden=true
    aceptar1.hidden=false
    aceptar2.hidden=true
    select(ce,mr,dis)
    dislexia.hidden=true
    const p=document.querySelectorAll("p")
    for (let i=0;i<p.length;i++){
        p[i].classList.add("noinvert")
        p[i].classList.remove("invert")
    }
    if(mr.classList.contains("opa")){
    per.hidden=true
    camino.hidden=true
}

if(ce.classList.contains("opa")){
    negro.hidden=true
    paisaje.hidden=true
}
}

function DIS(mr,ce,dis,dislexia,per,camino,negro,paisaje,aceptar,aceptar1,aceptar2){
    dislexia.hidden=false
    const p=document.querySelectorAll("p")
    for (let i=0;i<p.length;i++){
        p[i].classList.remove("noinvert")
        p[i].classList.add("invert")
    }
    select(dis,mr,ce)
    per.hidden=true
    camino.hidden=true
    negro.hidden=true
    paisaje.hidden=true
    aceptar.hidden=true
    aceptar1.hidden=true
    aceptar2.hidden=false
}
mr.onclick=()=>MR(mr,ce,dis,camino,per,dislexia,aceptar,aceptar1,aceptar2)
ce.onclick=()=>CE(mr,ce,dis,negro,dislexia,aceptar,aceptar1,aceptar2)
dis.onclick=()=>DIS(mr,ce,dis,dislexia,per,camino,negro,paisaje,aceptar,aceptar1,aceptar2)

const soon=document.querySelector("#soon")
const close=document.querySelector("#close")
soon.hidden=true
close.hidden=true

function soon1(soon,close){
    soon.hidden=false
    close.hidden=false
}

function soon2(soon,close){
    soon.hidden=true
    close.hidden=true
}

aceptar1.onclick=()=>soon1(soon,close)
aceptar2.onclick=()=>soon1(soon,close)
close.onclick=()=>soon2(soon,close)