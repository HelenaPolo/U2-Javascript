let resultats = () => {
//recollir els nombre i validar-los
let num1 = prompt("Escriu un primer número de l'1 al 50");
while (num1 < 1 || num1 >50 || num1 == "" || num1 == null || isNaN(num1)){
    num1 = prompt("El nombre introduït no és correcte, introdueix-ne un altre");
}
let num2 = prompt("Escriu un segon número de l'1 al 50");
while (num2 < 1 || num2 >50 || num2 == "" || num2 == null || isNaN(num2)){
    num2 = prompt("El nombre introduït no és correcte, introdueix-ne un altre");
}
num1 = parseInt(num1);
num2 = parseInt(num2);

//resultats segons si són iguals o diferents
let result = "Els nombres escollits són el " + num1 + " i el " + num2 + '\n';
    if(num1 === num2){
        result += suma(num1, num2) + '\n' 
        + primer1(num1) + '\n' 
        + parell1(num1) + '\n' 
        + num1;
        alert(result);
    }
    else{
        result += suma(num1, num2) + '\n'
         + primer1(num1) + '\n' 
         + primer2(num2) + '\n' 
         + parell1(num1) + '\n' 
         + parell2(num2) + '\n' 
         + ascendent(num1, num2) + '\n' 
         + descendent(num1, num2);
        alert(result);
    }
}
//funció suma
const suma = (num1, num2) => {
    let resultat1 = num1 + num2;
    return "La suma és " + resultat1;

}

//funció nombres primers
const primer1 = (num1) => {
    let esPrimer = true;
    txt = "El nombre " + num1 + " és primer";

    if(num1 <= 1 || num1 === 4){
        esPrimer = false;
    }
    for(let i = 2; i < (num1 / 2); i++){
        if((num1 % i) ===0){
            esPrimer = false;
        }
    }
    if(!esPrimer){
        txt = "El nombre " + num1 + " no és primer";
    }
    return txt;
}
const primer2 = (num2) => {
    let esPrimer = true;
    txt = "El nombre " + num2 + " és primer";
    if(num2 <= 1 || num2 === 4){
        esPrimer = false;
    }
    for(let i = 2; i < (num2 / 2); i++){
        if((num2 % i) === 0){
            esPrimer = false;
        }
    }
    if(!esPrimer){
        txt = "El nombre " + num2 + " no és primer";
    }
    return txt;
}

//funció nombres parells
const parell1 = (num1) => {
    txt = "El nombre " + num1 + " és parell";

    if ((num1 % 2) != 0){
        txt = "El nombre " + num1 + " no és parell";
    }    
    return txt;
}
const parell2 = (num2) => {
    txt = "El nombre " + num2 + " és parell";

    if ((num2 % 2) != 0){
        txt = "El nombre " + num2 + " no és parell";
    }
    return txt;
}

//funció nombres ascendents
const ascendent = (num1, num2) => {
    let parells = [];
    let txt ="";

    if (num1 < num2){
        for(let i = 2; i < num2; i++){
            if((i % 2) === 0){
                parells.push(i);
            }
        }
        return "El rang de nombres parells és: " + parells;
    }else{
        return txt;
    }
}
//funció nombres descendents
const descendent = (num1, num2) => {
    let senars = [];
    let txt ="";
    if (num1 > num2){
        for(let i = 2; i < num1; i++){
            if((i % 2) != 0){
                senars.push(i);
            }
        }
        return "El rang de nombres senars és: " + senars;
    }else{
        return txt;
    }
}
