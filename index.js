// data set
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass_1=document.getElementById("pass1")
let pass_2=document.getElementById("pass2")

function gen(){
    let p1=characters[Math.floor(Math.random() * 91)]
    for(let i=0; i<8; i+=1){
        p1+=characters[Math.floor(Math.random() * 91)]
    }
    let p2=characters[Math.floor(Math.random() * 91)]
    for(let j=0; j<8; j+=1){
        p2+=characters[Math.floor(Math.random() * 91)]
    }
    pass_1.innerText=p1
    pass_2.innerText=p2

}

function copyit(){
    let text1=document.getElementById("pass1").textContent
    navigator.clipboard.writeText(text1);
}

function copyit2(){
    let text2=document.getElementById("pass2").textContent
    navigator.clipboard.writeText(text2);
}