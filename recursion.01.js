function sigma(value) {
    var sum = 0
    for(var i=0; i<= value; i++) {
        sum += i
    }
    console.log(sum)
    return sum
}

sigma(10);
sigma(2.5);
sigma(-1);


function factorial(value) {
    var multiply = 1
    for(var i=1; i<=value; i++){
        if(i%1 !=0) {
            Math.round(i)
            multiply *= i
        }
        else {
            multiply *= i
        }
        
    }
    return console.log(multiply)
}

factorial(3);
factorial(6);
factorial(4.5);