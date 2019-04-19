
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
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let appearanceCount = [];
    for (let i = 0; i < input.length; i++){
        let adder = input.length + appearanceCount[appearanceCount.length-1]-((i)*2);
        if (i === 0)
            adder = input.length;
        appearanceCount.push(adder);
    }
    let answer = 0;
    input.split('').forEach((v,i) => {
        if (vowels.includes(v)){
            answer += appearanceCount[i];
        }
    });

    return answer;
}

console.log(vowelRecognition2("ba"));//2
console.log(vowelRecognition2("aba"));//6
console.log(vowelRecognition2("aaa"));//10
console.log(vowelRecognition2("bbbb"));//0
console.log(vowelRecognition2("baceb"));//16
console.log(vowelRecognition2("abcdef"));//16
// console.log(vowelRecognition2("baecb"));//16
// console.log(vowelRecognition("baecb"));//16
// console.log(vowelRecognition("baceb"));//16
// console.log(vowelRecognition("aeiou"));//35
// console.log(vowelRecognition2("aeiouAEIOU"));//220
// console.log(vowelRecognition("bab"));//4
// console.log(vowelRecognition("aba"));//6
// console.log(vowelRecognition2("aei"));//7
// console.log(vowelRecognition("aei"));//7
// console.log(vowelRecognition2("aeio"));//14
// console.log(vowelRecognition2("aeiou"));//
// console.log(vowelRecognition("baceb"));//16
