const express = require('express');
const app = express();

app.use(express.json());

let port = 3000;

let users = [{}]

// create
app.post('/create', (req, res) =>{
    let body = req.body;

    users.push(body);

    res.send("users req successfully");
})

// get - READ
app.get('/', (req, res) => {
    res.send(users);
})


// update
app.put('/update/:id', (req, res) => {

    // res.send("update hona wala hai")
    let {id} = req.params;
    let {name} = req.name;
    let body = req.body;

    let updatedUser = users.map((val) => {
        
    })
    res.send(updatedUser);
})

// delete
app.delete('/delete/:id', (req, res)=> {
    let {id} = req.params;
    users.filter((val) => val.id !==id);
    users = userData;
    res.send(usersData);
})




app.listen(port, () => {
    console.log('server is run is 3k ${port}')
}); 