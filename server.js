const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
var fs = require("fs");

// const sqlite3 = require('sqlite3')

// const allowCrossDomain = function(req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
//     res.header(
//       'Access-Control-Allow-Headers',
//       'Content-Type, Authorization, access_token'
//     )

//     // intercept OPTIONS method
//     if ('OPTIONS' === req.method) {
//       res.send(200)
//     } else {
//       next()
//     }
//   }
// app.use(allowCrossDomain)

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
    // fs.appendFileSync('out.txt', kaitou_text + ",", (err, data) => {
    //     if (err) {
    //         throw err;
    //     }
    //     else console.log("追記完了")
    // })
    // var db = new sqlite3.Database('sample.sqlite3');
    // db.serialize(function () {
    //     // db.all('SELECT id,name FROM USER', function(err, rows) {
    //     //     res.json(rows);
    //     // });
    //     db.run('CREATE TABLE answer (info TEXT)');
    //     var stmt = db.prepare('INSERT INTO answer VALUES (?)');
    //     // for (var i = 0; i < 10; i++) {
    //     //     stmt.run('Ipsum ' + i);
    //     // }
    //     stmt.run(req.body["解答"].toString())
    //     stmt.finalize();
    //     // db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    //     //     console.log(row.id + ': ' + row.info);
    //     // });
    // });
    // db.close();
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))