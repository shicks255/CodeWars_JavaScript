function findSmallestInt(args)
{
    let smallest = NaN;
    args.forEach((value, index) =>
    {
        if (!smallest || smallest > value)
            smallest = value;
    });

    return smallest;
}