const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient();
client.set("visits", 0);

// router
app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        res.send(visits + " visits so far.");
        client.set("visits", +visits++);
    });
});

app.listen(8080);
