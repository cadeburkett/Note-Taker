const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

router.get("/notes", function(req,res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err,data) {
        // console.log(data)
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err,data) {
        if (err) throw err;
        const memo = JSON.parse(data);
        const id = uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
        memo.push({
            title: req.body.title,
            text: req.body.text,
            id: id,
        });
    fs.writeFile(path.join(__dirname,"db","db.json"), JSON.stringify(memo), function(err,data) {
        if (err) throw err;
        res.sendStatus(200);
    });

});

});

// router.delete("/notes/:id", function(req, res) {
//     fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err, data) {
//         if (err) throw err;
//         const savedMemos = JSON.parse(data);
//         const newArray = [];
//         for (let memo of savedMemos) {
//             console.log (memo);
//             if(memo.id !== req.params.id) {
//             newArray.push(memo);
//         }

//     };

//     fs.writeFile(path.join__dirname, "db", "db.json"), JSON.stringify(newArray), function(err,data) {
//         if (err) throw err;
//         res.sendStatus(200);

//         };
//     });
// });

module.exports = router