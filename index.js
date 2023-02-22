import express from "express";

const app = express();

app.listen(8000, () => console.log("running in port 8000"));

app.get("/", (req, res) => {
    res.json("my api");
});
