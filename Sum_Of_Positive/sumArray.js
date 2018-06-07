function sumArray(array)
{
    return function()
    {
        let sum = 0;

        sum = array.reduce((prev, cur) =>
        {
            if (cur > 0)
                prev += cur;

            return prev;
        }, 0);

        return sum;
    }
}