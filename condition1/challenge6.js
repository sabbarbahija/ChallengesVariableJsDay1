var prompt=require('prompt-sync')();
console.log("1 :afficher le profil");
console.log("2 :afficher les paramétres");
console.log("3 :afficher les notifications");
console.log("4 :se déconnecter");
let choix= Number(prompt("choix :"));
switch(choix){
    case 1:
        console.log("affichage de profil");
        break;
         case 2:
        console.log("ouverture des paramétres");
        break;
         case 3:
        console.log("affichage des notification");
        break;
         case 4:
        console.log("déconnexion");
        break;
        default:
        console.log('choix invalide');
}
