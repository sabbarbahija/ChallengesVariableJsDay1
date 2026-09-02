var prompt=require('prompt-sync')();
let Nmbr= Number(prompt("le nombre :"));
 if(Nmbr <0){
      console.log('le nombre est négatif');
}else if(Nmbr == 0){
    console.log(' le nombre est égal a zéro');
}else { console.log(' le nombre est positif');

}