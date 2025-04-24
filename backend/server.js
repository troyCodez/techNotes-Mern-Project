const express = require('express');
const app = express();
const path = require('path');
const PORT =process.env.PORT || 3500;


// Css file rendering
app.use('/', express.static(path.join(__dirname, 'public')));

// Router rendering
app.use('/', require('./routes/root'))

app.call('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    } else if(req.accepts('json')){
        res.json({message:'404 Not Found'})
        
    }else {
        res.type('txt').send('404 Not found')
    }
})

// Port listening
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

