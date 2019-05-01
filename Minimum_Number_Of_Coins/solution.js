
function minCoins(amount){
    let coins = {
        '1L': 1,
        '2L': 2,
        '1p': .01,
        '2p': .02,
        '5p': .05,
        '10p': .1,
        '20p': .2,
        '50p': .5
    }

    let regex2 = new RegExp('£\\d+p');
    let regex1 = new RegExp('£\\d+');
    let regex3 = new RegExp('\\d?(\.)\\d?')

    if (regex2.test(amount))
    {

    }

    else if (regex1.test(amount))
    {

    }

    else if (regex3.test(amount))
    {

    }
}


console.log(minCoins(1.87));
console.log(minCoins(197));
console.log(minCoins("2£1p"));
console.log(minCoins("£21p"));