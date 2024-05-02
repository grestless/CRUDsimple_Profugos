const express = require('express');
const app = express();  


//routes
app.get('/', (req, res) => {
    res.send('va para dalloooooot ')
})

app.listen(3000, () => console.log('Server started on port 3000'))