const express = require("express");
const redis = require("redis");

const app = express();
const client = redis.createClient({
    host: "redis-server",
    port: 6379,
});
client.set("visits", 0);

// router
app.get("/", (req, res) => {
    client.get("visits", (err, visits) => {
        res.send(visits + " visits so far.");
        const newVisits = +visits + 1;
    });
});

app.listen(8080);
