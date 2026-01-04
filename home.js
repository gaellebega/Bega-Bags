const burger=document.getElementById("burger");
const menu=document.getElementById("menu");
burger.addEventListener("click",()=>{
  if(menu.classList.contains("none")){
    menu.classList.remove("none");
  }
  else{
    menu.classList.add("none")
  }
})