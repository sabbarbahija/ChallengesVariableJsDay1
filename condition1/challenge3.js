var prompt=require('prompt-sync')();
let note = Number(prompt("entrez votre note :"));
if(note <=20){
if ( note < 10 ){
    console.log(" résultat :nom admis");
}else{
    console.log("résultat :admis ");
}
} else {
     console.log(' la note invalide')}
