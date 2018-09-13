
function test()
{
    console.log('This is a simple countdown');
}

//Regular, wont work
function wontWork(counter) {
    var i;
    for (i = counter; i >= 0; i--)
    {
        setTimeout( function(){
            console.log(i + '...');
            if (i === 0)
                console.log('BLAST OFF');
        }, i * 1000);
    }
}

//Arrow Function, still wont work
function noteSureIfWillWork(counter) {
    var i;
    for (i = counter; i >= 0; i--)
    {
        setTimeout(() =>{
            console.log(i + '...');
            if (i === 0)
                console.log('BLAST OFF');
        }, i * 1000);
    }
}

//Using let to contain scope of variable
function willWork(counter) {
    for (let i = counter; i >= 0; i--)
    {
        setTimeout(() =>{
            console.log(i + '...');
            if (i === 0)
                console.log('BLAST OFF');
        }, (counter - i) * 1000);
    }
}

//closure with IIFE
function willWorkClosure(counter)
{
    var i = counter;
    for (; i >= 0; i--)
    {
        (function(i){
            setTimeout(() => {
                console.log(i + '...');
                if (i === 0)
                    console.log("BLAST OFF");
            }, (counter - i) * 1000);
        })(i);
    }
}
