"use strict"
//          WHILE
/**
 * Declarer une varaible boucle qui est egale a 3
 * tant que boucle est plus petit que 9 
 * incremente boucle de 1
 * si boucle est egal a 8 on arrete la boucle 
 * si boucle est egal a 7 on revient au debut de la boucle 
 * on console log(boucle)
 */
let a=4
let boucle=3;
while(boucle<9){
    boucle++
    if(boucle==7){
        continue
    }
    if(boucle==8){
        break
    }
    console.log(boucle);
}
console.log('Jai cassé la boucle au bout de '+boucle+" tours");