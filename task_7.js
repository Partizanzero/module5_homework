function liste(arr) {
    var sumOdd = 0;
    var sumPar = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sumPar++;
        } else {
            sumOdd++;
        }
    }

    console.log("Odd : " + sumOdd);
    console.log("Par : " + sumPar);
}

liste([3, 10, 11, 7, 25, 30, 35, 40, 45]);