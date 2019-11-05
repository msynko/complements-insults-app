const express = require("express");
const path = require("path");

const complements = [
    "You like nice today",
    "That dress looks nice on you",
    "Have you been working out?",
    "You can do hard things",
    "You've gotten far in this course. You're really smart",
    "You're programming! How cool is that?",
    "I'm really proud of you",
    "You made this",
    "You've learned a lot of things, and that's pretty hard to do"
];

const insults = [
    "You like bad today",
    "That dress looks bad on you",
    "You should work out more?",
    "You can't do hard things",
    "You've gotten far in this course. You're really dumb",
    "You're bad in programming!",
    "I'm not proud of you",
    "You've not made this!",
    "You've not learned anything so far"
];

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex];
}

function getRandomInsult() {
    const randomIndex = Math.floor(Math.random() * insults.length);
    return insults[randomIndex];
}

const app = express();

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/complement", function (req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
        .end();
});

app.get("/insult", function (req, res) {
    res
        .json({
            insult: getRandomInsult()
        })
        .end();
});

app.use("/public", express.static("./public"));

app.listen(3000);
console.log("listening on http://localhost:3000");