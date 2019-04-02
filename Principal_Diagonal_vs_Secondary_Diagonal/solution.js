// https://www.codewars.com/kata/principal-diagonal-vs-secondary-diagonal/train/javascript


function diagonal(matrix){
    let principal = 0;
    let secondary = 0;

    let secondaryCounter = matrix[0].length-1;
    matrix.forEach((val,idx) => {
        principal += matrix[idx][idx]
        secondary += matrix[idx][secondaryCounter];
        secondaryCounter--;
    });

    if (principal > secondary)
        return "Principal Diagonal win!"
    else if (secondary > principal)
        return "Secondary Diagonal win!";
    else
        return "Draw!";
}

const diag = [
    [1,7],
    [4,5]
]

const diagonal1 = [
    [2,2,2],
    [4,2,6],
    [1,8,2]
]

const diagonal2 = [
    [1, 2, 2, 5, 1],
    [4, 1, 6, 1, 1],
    [1, 8, 5, 6 ,2],
    [1, 5, 2, 1, 2],
    [1, 8, 2, 6, 1]
]

console.log(diagonal(diag));
console.log(diagonal(diagonal1));
console.log(diagonal(diagonal2));