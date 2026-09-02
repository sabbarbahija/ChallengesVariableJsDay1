var prompt=require('prompt-sync')();
let age= Number(prompt("l'age :"));
if ( age >= 18 ){
    console.log("accés autorisé");
}else{
    console.log(" accés refusé");
}