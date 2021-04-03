const express = require("express");
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded ({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(_dirname, "public")));
app.use(htmlRoutes);
app.use(apiRoutes);

app.listen(PORT, () => console.log('listening at http://localhost:${PORT}'));