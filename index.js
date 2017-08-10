'use strict';

const express = require('express');
const app = express();

app.use((req, res, next) => {
  const msgs = [];
  const oldEnd = res.end;
  const startTime = new Date();
  res.end = (s) => {
    const endTime = new Date();
    console.log({
      startTime,
      endTime,
      msgs,
      latency: endTime - startTime,
      output: s.toString(),
    });
    res.end = oldEnd;
    res.end(s);
  };
  res.log = (m) => msgs.push({time: new Date(), msg: m});
  req.log = res.log;
  next();
});

app.get("/", (req, res) => {
  req.log("I'm in!");
  req.log("It's so beautiful....");
  res.send("Hello world")
});
app.get("/ping", (req, res) => res.send("OK"));

app.use((err, req, res) => {
  console.error(err);
  res.status(500).send("Oops");
});

app.listen(3000);
