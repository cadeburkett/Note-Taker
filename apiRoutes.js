const router = require("express").Router();
const path = require("path");
const fs = require("fs");
const uuidv4 = require("uuid");


router.get("/api/notes", function(req,res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err,data) {
        // console.log(data)
        if(err) throw err;
        res.json(JSON.parse(data));
    });
});

router.post("/api/notes", function(req, res) {
    fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err,data) {
        if (err) throw err;
        const memo = JSON.parse(data);
        const id = uuidv4();
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

// router.delete("/api/notes/:id", function(req, res) {
//     fs.readFile(path.join(__dirname, "db", "db.json"), "utf8", function(err, data) {
//         if (err) throw err;
//         const savedMemo = JSON.parse(data);
//         const newArray = [];
//         for (let note of savedMemo) {
//             if(note.id === req.params.id) {
//             newArray.push(note);
//         }

//     };

//     fs.writeFile(path.join__dirname, "db", "db.json"), JSON.stringify(newArray), function(err,data) {
//         if (err) throw err;
//         res.sendStatus(200);

//         };
//     });
// });

module.exports = router