const express = require('express');
const app = express();
const port = 3001;

app.get("/",(req,res) =>{
    res.send("Hello World");
})


app.listen(port, () => {
    console.log('Listening on port 3001', port);
});
    