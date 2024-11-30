"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const User_1 = require("./models/User");
const users_1 = __importDefault(require("../data/users"));
const router = (0, express_1.Router)();
// let todos: string[] = []
router.get("/", (req, res) => {
    //res.json(todos)
    res.json({ message: "Index root" });
});
router.get("/:id", (req, res) => {
    let id = parseInt(req.params.id);
});
router.get("/todos/:id", (req, res) => {
    let id = parseInt(req.params.id);
});
router.post("/add", (req, res) => {
    let todo = req.body;
});
//router.post("/delete/:id", (req: Request, res: Response) => {})
router.get("/api/users/populate", async (req, res) => {
    for (let i = 0; i < 2; i++) {
        const user = new User_1.User({
            user: users_1.default[i].user
        });
        await user.save();
    }
    console.log("Database populated");
    res.json({ message: "Database populated" });
});
exports.default = router;
