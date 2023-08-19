const express = require("express");
const app = express()
const port = 3000

function calculateSum(counter) {
    var sum = 0;
    for (var i = 0; i<counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function handleReq(req, res) {
    var calculatedSum = calculateSum(100);
    console.log(calculatedSum)
    var answer = "the sum is" + calculatedSum;
    res.send(answer);
}

app.get('/handleSum', handleReq)

function started() {
    console.log(`app listening on port ${port}`)
}
app.listen(port, started)

// const fs = require("fs");

// function callbackFn(err, data) {
//     console.log(data);
// }
// fs.readFile("a.txt", "utf-8", callbackFn);