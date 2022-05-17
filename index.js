// Code your solutions in this file
function countDown(n){
    while (n >= 0){
        console.log(n);
        n -= 1;
    }
}

function writeCards(names, type){
    const thanks = [];
    for (let i = 0; i < names.length; i++){
        thanks.push(`Thank you, ${names[i]}, for the wonderful ${type} gift!`);
    }
    return thanks;
}