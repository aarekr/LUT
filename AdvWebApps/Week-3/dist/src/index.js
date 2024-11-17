"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let poems = [];
router.get("/", (req, res) => {
    //console.log("juurihakemisto")
    res.json(poems);
});
router.get("/hello", (req, res) => {
    let item = {
        msg: "Hello world!"
    };
    res.json(item);
});
router.get("/echo/:id", (req, res) => {
    let id = req.params.id;
    let answer = `id: ${id}`;
    res.json(answer);
});
router.post("/sum/:numbers", (req, res) => {
    let numbers = req.params.numbers;
    numbers = numbers.substring(1, numbers.length - 1);
    let osat = numbers.split(",");
    let sum = 0;
    for (let i = 0; i < osat.length; i++) {
        sum += Number(osat[i].trim());
    }
    let answer = {
        "sum": sum
    };
    res.json(answer);
});
exports.default = router;
