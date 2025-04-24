const express = require('express');
const app = express();
const path = require('path');
const PORT =process.env.PORT || 3500;


// Css file rendering
app.use('/', express.static(path.join(__dirname, '/public')));

// Router rendering
app.use('/', require('./routes/root'))

// Port listening
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

