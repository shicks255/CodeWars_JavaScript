
function test()
{
    console.log('This is a simple countdown');
}

function wontWork(counter)
{
    var i;
    for (i = counter; i >= 0; i--)
    {
        setTimeout(function()
        {
            console.log(i + '...');
            if (i == 0)
                console.log('BLAST OFF');
        }, i * 1000);
    }

}
