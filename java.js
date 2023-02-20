const per5=document.querySelector("#per1")
per5.hidden=true
let interval
function empezar(){
    if(!interval){
        interval=setInterval(cambio,500)
    }
}

function cambio(){
    const per=document.querySelector("#per")
    const per1=document.querySelector("#per1")
    if(per.hidden===true){
        per.hidden=false
        per1.hidden=true
    }else{
        per.hidden=true
        per1.hidden=false
    }
}


function mover(event){
    empezar()
  if(event.key=="a"){
      const a=document.querySelector("#fondo").style.left.replaceAll("%","")
      const b=Number.parseInt(a)
      const per=document.querySelector("#per").style.left.replaceAll("%","")
      const d=Number.parseInt(per)
      if(b<=-1&&d==30){
      var c=b+1
      const fondo=document.querySelector("#fondo").style
      fondo.left=`${c}%`
      const coche=Number.parseInt(document.querySelector("#coche").style.left.replaceAll("%",""))
      var cochei=coche+1
      const cochef=document.querySelector("#coche").style
      cochef.left=`${cochei}%`
      const p=document.querySelector("#p")
      p.textContent=`${c}%`
      const p2=document.querySelector("#p2")
      p2.textContent=`${cochei}%`
      }
      if(b<-198){
          var e=d-1
          const per1=document.querySelector("#per").style
          const per2=document.querySelector("#per1").style 
          if(e>29){
          per1.left=`${e}%`
          per2.left=`${e}%`
          } 
      }
      if(b>-1&&d>4){
         var e=d-1
          const per1=document.querySelector("#per").style
          const per2=document.querySelector("#per1").style 
          per1.left=`${e}%` 
          per2.left=`${e}%`
      }
      const per2=document.querySelector("#per")
      per2.classList.remove("noinvert")
      per2.classList.add("invert")
          const per3=document.querySelector("#per1")
      per3.classList.remove("noinvert")
      per3.classList.add("invert")
  }
  if(event.key=="d"){
      const a=document.querySelector("#fondo").style.left.replaceAll("%","")
      const b=Number.parseInt(a)
      const per=document.querySelector("#per").style.left.replaceAll("%","")
      const d=Number.parseInt(per)
      if(b>=-198&&d==30){
      var c=b-1
      const fondo=document.querySelector("#fondo").style
      fondo.left=`${c}%`
      const coche=Number.parseInt(document.querySelector("#coche").style.left.replaceAll("%",""))
      var cochei=coche-1
      const cochef=document.querySelector("#coche").style
      cochef.left=`${cochei}%`
      const p=document.querySelector("#p")
      p.textContent=`${c}%`
      const p2=document.querySelector("#p2")
      p2.textContent=`${cochei}%`
      }
      if(b<-198&&d<96){
          var e=d+1
          const per1=document.querySelector("#per").style
          const per2=document.querySelector("#per1").style 
          per1.left=`${e}%`
          per2.left=`${e}%`
          
      }
      if(b>-1){
         var e=d+1
          const per1=document.querySelector("#per").style
          const per2=document.querySelector("#per1").style 
          if(e<31){
          per1.left=`${e}%`
          per2.left=`${e}%`
          }
      }
    const per2=document.querySelector("#per")
      per2.classList.remove("invert")
      per2.classList.add("noinvert")
          const per3=document.querySelector("#per1")
      per3.classList.remove("invert")
      per3.classList.add("noinvert")
  }
}
let interval1
function coche1(){
    const coche=document.querySelector("#coche")
    coche.hidden=false
    coche.classList.remove("opa2")
    coche.classList.add("opa0")
}
function coche2(){
    const coche=document.querySelector("#coche")
    coche.classList.remove("opa0")
    coche.classList.add("opa1")
}
function coche3(){
    const coche=document.querySelector("#coche")
    coche.classList.remove("opa1")
    coche.classList.add("opa2")
}
function coche4(){
    const coche=document.querySelector("#coche")
    coche.hidden=true
}

function coche5(){
    coche1()
    setTimeout(coche2,500)
    setTimeout(coche3,1000)
    setTimeout(coche4,1500)
}

if(!interval1){
    interval1=setInterval(coche5,2000)
}
function fin(){
    clearInterval(interval)
    interval=null
}
document.addEventListener("keypress",(event)=>mover(event))
document.addEventListener("keyup",fin)