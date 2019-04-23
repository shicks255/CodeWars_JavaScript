
function largestSum(arr){
    if (arr.length == 0)
        return 0;
    if (arr.reduce((x,y) => x+y) < 0)
        return 0;

    let highest = 0;
    let windowSize = arr.length;

    let iterations = 1;
    while (windowSize > 0){
        let start = 0;
        let end = windowSize;

        for (let i = 0; i < iterations; i++){
            let array = arr.slice(start, end);
            let sum = array.reduce((p, c) => p+c, 0);
            if (sum > highest)
                highest = sum;

            start += 1;
            end += 1;
        }

        windowSize -= 1;
        iterations += 1;
    }

    console.log(highest);
    return highest;
}

function largestSum2(arr){
    let highestHere = arr[0];
    let highestSoFar = arr[0];

    for (let i = 1; i < arr.length; i++){
        highestHere = Math.max(arr[i], highestHere + arr[i]);
        highestSoFar = Math.max(highestHere, highestSoFar);
    }

    return highestSoFar > 0 ? highestSoFar : 0;
}

console.log(largestSum([-1,-2,-3]) === 0);
console.log(largestSum([]) === 0);
console.log(largestSum([1,2,3,4]) === 10);
console.log(largestSum2([31,-41,59,26,-53,58,97,-93,-23,84]) === 187);
console.log(largestSum2([-1, -1, 4, -1, 4, -5]) === 7);