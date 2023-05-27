
const app = require('express')();
const PORT = 8181;

app.listen(
    PORT,
    () => console.log("it's alive!")
)
app.get('/card/', (req, res, next) =>
{

    const filters = req.query;
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    };
    let queryString = '';
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
    .then(response => res.send(response))
    .catch(err => console.error(err));
    //console.log(filters['query']);
    //https://digimoncard.io/api-public/search.php?n=Agumon&sort=name&sortdirection=desc
    // res.send(response.json);
})

// function captureJson(response)
// {
//     res.send
// }