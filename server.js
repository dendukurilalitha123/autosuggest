const express = require('express');
const app = express();
const port = process.env.PORT || 6700;

app.use(express.static("frontend"));
app.listen(port, function() {
    console.log('App is running on http://localhost:' + port);
});