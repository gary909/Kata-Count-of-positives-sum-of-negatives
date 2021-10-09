function countPositivesSumNegatives(input) {
    var num = 0;
    var num2 = 0;
    for (var i = 0; i < input.length; i++){
        if (input[i] >= 1) {
            num = num + 1;
        } else if (input[i] < 0) {
            num2 = num2 + input[i];
        }
    }
    console.log(num2);

}



console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // 8, -50