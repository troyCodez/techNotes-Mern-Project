const express = require('express');
const app = express();
const path = require('path');
const PORT =process.env.PORT || 3000;


// Css file rendering
app.use('/', express.static(path.join(__dirname, '/public')));


// Port listening
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));