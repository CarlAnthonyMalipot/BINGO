console.log("Hello World!")

let B = false, I = false, N = false, G = false, O = false;

let BNum, INum, NNum, GNum, ONum;

function newNumber (maxNumber){
let x = Math.floor(Math.random() * maxNumber) + 1;


if(x <= 15){
    console.log('New number is ${x} belongs to "B"');
    B=true;
    BNum = x;
} else if (x >= 16 && x <= 30 ){
    console.log ('New number is ${x} belongs to "I"');
    I= true;
    INum = x;
} else if (x >= 31 && x <=45 ) {
    console.log ('New number is ${x} belong to "N"');
    N=true;
    NNum = x;
} else if ( x >= 46 && x  <= 60){
    console.log ('New number is ${x} belongs to "G"');
    G=true;
    GNum = x;
}else if ( x >=  61 && x <= 75){
    console.log ('New Number is ${x} belongs to "0"');
    O=true;
    ONum = x;
}else{
    console.log('New number ${x} is invalid!');   
}

if (B = true && I == true && N == true && G == true && O == true){
    console.log('BINGOOOO!!!!');
    console.table({
        B: BNum,
        I: INum,
        N: NNum,
        G: GNum,
        O: ONum,
})

}

return console.log(x);
}

//newNumber(75);

let counter = 5;
//for (counter = 10; counter >= 0; counter--){
//    console.log(Current counter is ${counter});
//    if (counter == 2 )break;

//    newNumber(75);
//}


while (B = false || I == false || N == false || G == false  || O == false){
    newNumber(75);
}