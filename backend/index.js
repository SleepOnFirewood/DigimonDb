
const app = require('express')();
const PORT = 8181;

app.listen(
    PORT,
    () => console.log("it's alive!")
)
app.get('/card/', (req, res) =>
{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    const filters = req.query; //assigns the filters verb with the query params.
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    let queryString = '';
    console.log(filters);

    if(Object.keys(filters).length === 0)
    {
        res.status(420).send({message: "Sorry! Can't search without query parameters!"})
        return;
    }

    //Build query string from what was entered.
    for(let key in filters)
    {
        if(queryString.length <1 )
        {
            if(key === 'query')
            {
                queryString = 'n=' + filters['query'];
            }
            else
            {
                queryString = key + '=' + filters[key]
            }
        }
        else{
            queryString = queryString + '&'+key+'='+filters[key];
        }   
        
    }
    //console.log(queryString);

    fetch('https://digimoncard.io/api-public/search.php?' + queryString, options)
    .then(response => response.json())
    .then(response => res.status(200).send(response))
    .then(response => console.log(response))
    .catch(err => console.error(err));
    //console.log(filters['query']);
    //https://digimoncard.io/api-public/search.php?n=Agumon&sort=name&sortdirection=desc
    // res.send(response.json);
})

// function captureJson(response)
// {
//     res.send
// }