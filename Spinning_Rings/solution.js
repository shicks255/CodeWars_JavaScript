
function spinningRings(innerMax, outerMax) {
    let moves = 0;
    let inner = 0, outer = 0

    do{
        inner--;
        outer ++;
        if (inner < 0) inner = innerMax;
        if (outer > outerMax) outer = 0;
        moves++;
    } while (inner !== outer)

    return moves;
};


console.log(spinningRings(2, 3));
