
function Containers(input) {
    let containers = [];

    input.split('').map(x => x.charCodeAt(0)).forEach((v) => {
        if (containers.length === 0)
            containers.push([v]);
        else
        {
            let added = false;
            let containerToAdd = containers.find((v2) => {
                console.log(v2);
                if (v2[v2.length-1] >= v )
                    return true;
                return false;
            });
            if (containerToAdd)
            {
                containerToAdd.push(v);
                added = true;
            }

            if(!added)
                containers.push([v]);
        }
    });
    console.log(containers);
    return containers.length;
}

Containers('CBACBACBACBACBA');