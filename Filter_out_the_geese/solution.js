
const geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

console.log('hi');

function removeGeese(arg){
    return arg.filter((val, indx) => {
        return geese.includes(val) === false;
    });
}

let answer = removeGeese(["Mallard", "African"]);
console.log(answer);