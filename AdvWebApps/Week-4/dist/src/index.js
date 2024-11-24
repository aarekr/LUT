"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fs_1 = __importDefault(require("fs"));
const router = (0, express_1.Router)();
let todos = [];
fs_1.default.readFile("data/todos.json", "utf8", (err, data) => {
    if (err) {
        console.error('virhetilanne:', err);
        return;
    }
    try {
        todos = JSON.parse(data);
    }
    catch (error) {
        console.error(`Error parsing JSON: ${error}`);
    }
});
router.get("/", (req, res) => {
    res.json(todos);
});
router.get("/:id", (req, res) => {
    let id = parseInt(req.params.id);
    try {
        res.json(todos[id]);
    }
    catch (error) {
        console.error('Virhetilanne: ', error);
    }
});
exports.default = router;
