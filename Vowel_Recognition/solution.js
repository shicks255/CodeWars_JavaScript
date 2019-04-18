
function vowelRecognition(input){
    let vowels = ['a','e','i','o','u','A','E','I','O','U']

    let start = 0;
    let answer = 0;

    while (start < input.length) {
        let totalLength = input.length-start;
        let length = 1;
        while (length <= totalLength) {
            let substr = input.substr(start, length);
            let foundVowels = substr.split('').filter((v) => {
                return vowels.includes(v)
            });
            answer += foundVowels.length;
            length += 1;
        }
        start += 1;
    }
    return answer;
}

function vowelRecognition2(input){
    function recurse(n){
        if (n === 1)
            return 1;
        else
            return n*recurse(n-1)
    }

    let answer = 0;
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let numOfVowels = input.split('').filter((v) => vowels.includes(v)).length;
    let numOfNonVowels = input.length - numOfVowels;
    for (let i = 1; i < input.length; i++){
        if (numOfVowels >= i) {
            // answer += numOfVowels*i;
            // let t = recurse(numOfVowels/i);
            let t = i * i > 1 ? i-1 : 1;
            let j = t * numOfVowels-i+1;
            answer += j;
        }
        answer += (numOfVowels * (Math.floor(numOfNonVowels/i)));
    }

    console.log(answer);
    return answer;
}

// console.log(vowelRecognition2("ba") === 2);
// console.log(vowelRecognition2("bab") === 4);
// console.log(vowelRecognition2("aba") === 6);
console.log(vowelRecognition2("aeio") === 0);//14
// console.log(vowelRecognition2("baceb") === 16);
// console.log(vowelRecognition2("baceb") === 16);
// console.log(vowelRecognition2("aeiouAEIOU") === 220);