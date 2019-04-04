function productSum(n){

    function calculate(n)
    {
        if (n < 2)
            return 0;

        let tempAnswer = [];

        let tester3 = Array(n).fill(1)
        while (true) {
            let sum = tester3.reduce((prev, cur) => prev + cur);
            let prod = tester3.reduce((prev, cur) => prev * cur);

            if (sum === prod && sum > 0) {
                if (tempAnswer === tester3)
                    break;
                if (tempAnswer.length == 0 || tempAnswer.reduce((p,c)=>p+c) > tester3.reduce((p,c)=>p+c)){
                    tempAnswer = tester3.slice(0,n);
                }
            }

            let carry = 0;
            for (let x = n-1; x >= 0; x--)
            {
                if (x == n-1){
                    tester3[x]++;
                }
                let value = tester3[x];

                value += carry;
                tester3[x] = value;
                carry = 0;
                if (value > n){
                    tester3[x] = 1;
                    carry = 1;
                }
            }
        }

        if (tempAnswer.length == 0)
            tempAnswer = tester3;

        let answer3 = tempAnswer.reduce((p, c) => p + c);
        return [answer3, tempAnswer];
    }

    let k = n;
    answers = new Set();
    while (k >= 2)
    {
        let a = calculate(k);
        console.log(a[1]);
        console.log(`for ${k} the answer is ${a[0]}`);
        answers.add(a[0]);
        k--;
    }

    answer = [...answers].reduce((c,p)=>c+p);
    return answer;
}

function Test(f){
    return (n) => f(n);
}

//sum of all product sum numbers up to and including N

// console.log(Test(productSum)(2) === 4);
// console.log(Test(productSum)(3) === 10);
// console.log(Test(productSum)(4) === 18);
// console.log(Test(productSum)(5) === 18);
// console.log(Test(productSum)(6) === 30);
// console.log(Test(productSum)(7) === 30);
console.log(Test(productSum)(8) === 30);
// console.log(Test(productSum)(9) === 45);
// console.log(Test(productSum)(10) === 61);
// console.log(Test(productSum)(11) === 61);
// console.log(Test(productSum)(12) === 61);
