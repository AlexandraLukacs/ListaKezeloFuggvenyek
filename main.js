import { emberekLISTA } from "./adat.js";

for (let index = 0; index < emberekLISTA.length; index++) {
    const element = emberekLISTA[index];
    console.log(element);
}

emberekLISTA.forEach((element, index) => { //első(element) a lista elemeit jelenti, második(index) a lista indexet
    console.log(element);
    console.log(index);
});

/* Szűrjük a férfiakra a listát */
const FERFIAK = emberekLISTA.filter(function(ember){
    //return ember.nem === false;
    return !ember.nem  //ez az érték mindig logikai változó true/false
})

const FERFIAK2 = emberekLISTA.filter((ember) => {
    //return ember.nem === false;
    return !ember.nem  //ez az érték mindig logikai változó true/false
})

console.log(FERFIAK);


/* Azokat az embereket szeretném, aki 20 évnél fiatalabb */
const FIATALOK = emberekLISTA.filter(function(ember){
    return ember.kor < 20;
})

console.log(FIATALOK)

/* 10 évnél idősebb férfiak */
const FERFIAK10FELETT = emberekLISTA.filter((ember) => {
    return ember.kor > 10 && !ember.nem;
})


/* RENDEZÉS */
/* Rendezzük fordított sorrendbe kor szerint az embereinket */
emberekLISTA.sort(function(e1,e2){
    return e2.kor-e1.kor;
})

console.log(emberekLISTA)

/* véletlen sorrnedű rendezés. kor szerint keverés */
emberekLISTA.sort(function(e1,e2){
    /* VÉletlen számot generálok -0,5 és - 0,5 között */
    return Math.random()-0,5;
})

console.log(emberekLISTA)