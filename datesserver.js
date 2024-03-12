const express = require('express');
const app = express();

app.get('/DaysBetweenDates', (req, res) => {
    const from = new Date(req.query.from);
    const to = new Date(req.query.to);

    const diffTime = Math.abs(to - from);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    res.send(`Number of days between dates: ${diffTime * diffDays}`);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});