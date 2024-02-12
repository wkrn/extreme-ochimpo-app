const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
var fs = require("fs");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.post('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.set({ 'Access-Control-Allow-Origin': '*' })
    res.send("Received POST Data!");
    console.log(req.body["解答"])
    var kaitou_text = req.body["解答"];
    fs.writeFile('out.txt', kaitou_text, (err, data) => {
        if (err) console.log(err)
        else console.log('write end')
    })
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))