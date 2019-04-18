
function vowelRecognition(input){
    let vowels = ['a','e','i','o','u','A','E','I','O','U']

    let start = 0;
    let answer = 0;

    while (start < input.length)
    {
        let totalLength = input.length-start;
        let length = 1;
        while (length <= totalLength)
        {
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

console.log(vowelRecognition("ba") === 2);
console.log(vowelRecognition("bbbb") === 0);
console.log(vowelRecognition("baceb") === 16);
console.log(vowelRecognition("aeiouAEIOU") === 220);