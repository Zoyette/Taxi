"use script"
let prenom = "Johnny Deep";
let santeMentale = 10;
let nbreFeu = 30;
let listeMusique=["Anissa-Wejdene","Wheels on the bus- Melanie Martinez","505-Artic Monkeys","Going Under-Evanescence","Alien Blues-Vundabar"];
let feuActuel = 1

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); 
}
for(feuActuel <= nbreFeu;feuActuel++;){
  if ((listeMusique[getRandomIntInclusive(0,listeMusique.length)])== listeMusique[0]){;
    console.log(`Notre Johnny vit mal la musique ${listeMusique[0]}, il a envie de se frapper le crâne contre une vitre.`);
    console.log(`Johnny a une santé mentale de ${santeMentale-=1}`);
  }else{
    console.log("Johnny a kiffé, il a ajouté la musique a sa playlist.");
  }  
  if (santeMentale == 0){;
    console.log("Johnny a explosé !");
    break;
  } 
  if (feuActuel == nbreFeu) {
    console.log("Johnny est rentré tout safe avec une santé mentale de" + " "+santeMentale);
    break;
}
 console.log (`Johnny est au feu numéro ${feuActuel}`);

}


// J'ai pas réussi à afficher les autres titres de chansons demandés, malheureusement Johnny ne saura pas quelles chansons mettre dans sa playlist. :(((