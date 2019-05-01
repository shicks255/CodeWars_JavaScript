
function primeString(s){
    let length = s.length;
    if (length === 1)
        return true;

    let chunkSize = Math.floor(length/2);
    while (chunkSize > 0)
    {
        let startIndex = 0;
        let chunks = [];
        for (let i = 0; i < length/chunkSize; i++)
        {
            chunks.push(s.substr(startIndex, chunkSize));
            startIndex += chunkSize;
        }
        chunkSize--;

        let answer = chunks.every(v => v === chunks[0]);
        if (answer === true)
            return false;
    }

    return true;
}

console.log(primeString("abac")); //t
console.log(primeString("abab")); //f
console.log(primeString("ababab")); //f
console.log(primeString("aaaa")); //f
console.log(primeString("x")); //t
console.log(primeString("abc")); //t
console.log(primeString("fdsyffdsyffdsyffdsyffdsyf")); //f
console.log(primeString("utdutdtdutd")); //t
console.log(primeString("abba")); //t
//