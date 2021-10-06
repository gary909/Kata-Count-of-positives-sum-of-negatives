function countPositivesSumNegatives(input) {
    var newArr = 0;
    var newArr2 = [];
    for (var i = 0; i < input.length; i++){
        if (input[i] >= 0) {
            newArr = newArr + input[i];
        } else {
            newArr2 = input[i];
        }
    }
    console.log(newArr);

}



console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // 8, -50