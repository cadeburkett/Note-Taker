const express = require("express");
const htmlRoutes = require("./htmlRoutes");
const apiRoutes = require("./apiRoutes");
const path = require("path");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`));