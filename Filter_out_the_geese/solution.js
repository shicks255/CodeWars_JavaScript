// https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7

const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

function removeGeese(arg){
    return arg.filter((val, indx) => {
        return geese.includes(val) === false;
    });
}

let answer = removeGeese(["Mallard", "African"]);
console.log(answer);