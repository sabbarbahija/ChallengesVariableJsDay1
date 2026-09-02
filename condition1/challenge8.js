var prompt=require('prompt-sync')();

let nmb1r= Number(prompt("premier nombre:"));
let oprt= (prompt("orérateur:"));
let nmb2r= Number(prompt("deuxième nombre:"));
switch(oprt){
    case "+":
        console.log("la somme est : ",nmb1r+nmb2r);
        break;
        case "-":
        console.log("la soustraction est : ",nmb1r - nmb2r);
        break;
     case "*":
        console.log("le produit  est : ",nmb1r * nmb2r);
        break;
        case "/":
            if(nmb2r != 0){
        console.log("la division est : ",nmb1r/ nmb2r);
        break;
        } else{
            console.log('erreur');
        }
          break;
        default:
        console.log('choix invalide');
}