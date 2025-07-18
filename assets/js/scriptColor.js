console.log("coucou");

let color = ["#FA8072", "#FFA07A", "#B22222", "#CD5C5C"];
console.log(color.length);


function maFunction(){
for(let i = 0; i < 4; i++){
    console.log(color [i]);
    let liste = document.createElement("li");
    liste.innerHTML = color[i];
    
}}
maFunction();
