console.log("hello")

const first=1;
const second=2;
console.log(first);

const str="Dharshini B";
console.log(str);

const fruit=["apple","banana","grapes"];
console.log(fruit[0]);

fruit[1]="orange";
console.log(fruit[1]);

const arr=[1,"name",false,2.4]
console.log(arr);

for(let i=0;i<fruit.length;i++){
    console.log(arr[i]);
}

const fourth= document.getElementById("ptag");
fourth.innerHTML="this is my fourth class";


function newFunction(){
    console.log("i am writting something");
}

const input=document.getElementById("eventListener")
const output=document.getElementById("Ptag")
input.addEventListener("input", ()=>{
    output.textContent = input.value
})


const newvar = document.createElement("h1")
newvar.textContent = "New paragraph";
document.body.appendChild(newvar);

newvar.remove()