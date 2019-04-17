function add(n) {
    return (y) => {
        return y + n;
    }
}

let addOne = add(1);
console.log(addOne(3));
console.log(addOne(1));