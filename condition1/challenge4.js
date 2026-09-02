var prompt=require('prompt-sync')();
let montant=Number(prompt("le montant de la commande :"));
let flaivraison;
let total;
if(montant >= 500){
flaivraison=0;
    console.log( 'la livraison: gratuite' );
}else{
    flaivraison=40;
    console.log( 'la livraison: 40 dh' );
}
total= flaivraison + montant;
console.log('total à payer :',total,'dh');