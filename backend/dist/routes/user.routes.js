"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const userRouter = (0, express_1.Router)();
userRouter.get('/', user_controller_1.default.getUsers);
userRouter.post('/signup', user_controller_1.default.addUser);
userRouter.post('/login', user_controller_1.default.loginUser);
userRouter.get('/logout', user_controller_1.default.logout);
userRouter.get('/check-auth', user_controller_1.default.getUserByUsername);
exports.default = userRouter;
// POST /signup = add user
// POST /login = check if username and password exist in database, return cookie session with username inside
// GET /logout = clear the cookie session
// GET /check-auth = check cookie session, get username from cookie, return user info from database based on username
