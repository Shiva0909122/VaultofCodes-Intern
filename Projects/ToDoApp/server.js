const express = require("express");

const app = express();
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const items = [];

app.get("/", function (req, res) {
    res.render("list", { ejes: items });
});

app.post("/", function (req, res) {
    const item = req.body.ele1;
    items.push(item);
    res.redirect("/");
});

// Route to delete a task by index
app.delete("/delete/:index", function (req, res) {
    const index = parseInt(req.params.index);
    if (index >= 0 && index < items.length) {
        items.splice(index, 1);
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.listen(4000, function () {
    console.log("Server started on port 4000");
});
