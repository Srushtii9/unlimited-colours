//generate random colour
// const randomColour = 
const randomColour= function(){
const hex = '0123456789ABCDEF'
let colour="#";

    for(let i=0;i<6;i++){
   colour += hex[Math.floor(Math.random() * 16)];}
   return colour
    

}
let intervalId;
console.log(randomColour());
function changeBgColour(){
    document.body.style.backgroundColor= randomColour()
}
const startChangingColour=function(){
   if(!intervalId){
    intervalId= setInterval(changeBgColour,500)
   }
}
const stopChangingColour=function(){
    clearInterval(intervalId)
    intervalId=null;
}

document.querySelector('#start').addEventListener('click',startChangingColour);
document.querySelector('#stop').addEventListener('click',stopChangingColour);