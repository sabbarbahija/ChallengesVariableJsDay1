var prompt=require('prompt-sync')();
let note = Number(prompt("entrez votre note :"));
if( note >=0 && note <=20){
if ( note < 10 ){
    console.log(" montion : échec");
}else if(note >=10 && note <=11.99 ){
    console.log("montion :passale ");
}else if(note >=12 && note <=13.99 ){
 console.log("montion : assez bien ");
}else if(note >=14 && note <=15.99 ){
 console.log("montion :  bien ");
}else if(note >=16 && note <=17.99 ){
 console.log("montion : trés bien ");
}else if(note >=18  && note <=20 ){
 console.log("montion : excellent ");
}

} else {
     console.log(' la note invalide')}
