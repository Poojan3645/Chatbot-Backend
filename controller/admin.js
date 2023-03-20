//const express = require("express");

exports.getCarname = (req, res, next) => {
  res.send("this is first carname");
};

exports.demo = (req, res) => {
  res.send("demo 2");
};
