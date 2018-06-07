
function shortestWordFinder(string)
{
    chunks = string.split(' ').map( (value, index) => value.length);

    return function()
    {
        return(Math.min(...chunks));
    }
}