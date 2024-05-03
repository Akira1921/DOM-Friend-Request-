var istatus=document.querySelector("h5")
var btn=document.querySelector("#add")
var flag=0
/*var removefriend=document.querySelector("#remove")*/
btn.addEventListener("click",function(){
    if(flag==0){
    istatus.innerHTML="Friends"
    istatus.style.color="green"
    btn.innerHTML="Remove Friend"
    btn.style.color="black"
    btn.style.backgroundColor="#dadada"
    flag=1
}else{
    istatus.innerHTML="Stranger"
    istatus.style.color="red"
    btn.innerHTML="Add Friend"
    btn.style.color="white"
    btn.style.backgroundColor="cadetblue"
    flag=0
}
})

/*removefriend.addEventListener("click",function(){
    istatus.innerHTML="Stranger"
    istatus.style.color="red"
})*/