function countPositivesSumNegatives(input) {
    var num = 0;
    var num2 = 0;
    var newArr = [];
    if (input == null || input.length < 1){
        return [];
      } else {
        for (var i = 0; i < input.length; i++){
            if (input[i] >= 1) {
                num = num + 1;
            } else if (input[i] < 0) {
                num2 = num2 + input[i];
            } else if (input[i] == 0) {
                newArr == 'hello';
            }
        }
        newArr.push(num);
        newArr.push(num2);
        return newArr;
    }

}



console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14])) // 8, -50

console.log(countPositivesSumNegatives([0, 0])) // []