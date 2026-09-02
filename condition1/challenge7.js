var prompt=require('prompt-sync')();
console.log("1 :lundi");
console.log("2 :mardi");
console.log("3 :mercredi");
console.log("4 :jeudi");
console.log("5 :vendredi");
console.log("6 :samedi");
console.log("7:dimanche");
let numero= Number(prompt("numéro :"));
switch(numero){
    case 1:
        console.log("lundi");
        break;
         case 2:
        console.log("mardi");
        break;
         case 3:
        console.log("mercredi");
        break;
         case 4:
        console.log("jeudi");
        break;
           case 5:
        console.log("vendredi");
        break;
           case 4:
        console.log("samedi");
        break;
           case 4:
        console.log("dimanche");
        break;
        default:
        console.log('jour  invalide');
}