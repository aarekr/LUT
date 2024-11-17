"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let poems = [];
router.get("/", (req, res) => {
    console.log("juurihakemisto");
    res.json(poems);
});
router.get("/hello", (req, res) => {
    let item = {
        msg: "Hello world!"
    };
    res.json(item);
});
exports.default = router;
