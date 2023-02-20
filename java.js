const en1=document.querySelector("#en1")
const apa1=document.querySelector("#apa1")
const en2=document.querySelector("#en2")
const apa2=document.querySelector("#apa2")
const negro=document.querySelector("#negro")
document.querySelector("#abierto").hidden=true
function abrir() {
  const abierto=document.querySelector("#abierto")
  const cerrado=document.querySelector("#cerrado")
  abierto.hidden=false
  cerrado.hidden=true
}

function cerrar() {
  const abierto=document.querySelector("#abierto")
  const cerrado=document.querySelector("#cerrado")
  abierto.hidden=true
  cerrado.hidden=false
}

const per=document.querySelector(".per")

const abierto=document.querySelector("#abierto")
const cerrado=document.querySelector("#cerrado")

cerrado.onmouseover=()=>abrir()
abierto.onmouseout=()=>cerrar()

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

apa1.hidden=true
apa2.hidden=true

function encender(en,apa){
    en.hidden=true
    apa.hidden=false
    const p=document.querySelectorAll("p")
    for (let i=0;i<p.length;i++){
    p[i].classList.remove("noinvert")
    p[i].classList.add("invert")
    }
    const icono=document.querySelector("#icono")
    icono.classList.remove("noinvert")
    icono.classList.add("invert")
}

function apagar(en,apa){
    en.hidden=false
    apa.hidden=true
    const p=document.querySelectorAll("p")
    for (let i=0;i<p.length;i++){
    p[i].classList.remove("invert")
    p[i].classList.add("noinvert")
    }
    const icono=document.querySelector("#icono")
    icono.classList.remove("invert")
    icono.classList.add("noinvert")
}

en2.onclick=()=>encender(en2,apa2)
apa2.onclick=()=>apagar(en2,apa2)

negro.hidden=true
function cegueraon(negro,en,apa){
    negro.hidden=false
    en.hidden=true
    apa.hidden=false
}

function cegueraoff(negro,en,apa){
    negro.hidden=true
    en.hidden=false
    apa.hidden=true
}

en1.onclick=()=>cegueraon(negro,en1,apa1)
apa1.onclick=()=>cegueraoff(negro,en1,apa1)
