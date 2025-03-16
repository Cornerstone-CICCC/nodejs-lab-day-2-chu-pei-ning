import { Router } from "express";
import userController from "../controllers/user.controller";

const userRouter = Router()

userRouter.get('/', userController.getUsers)
userRouter.post('/signup', userController.addUser)
userRouter.post('/login', userController.loginUser)
userRouter.get('/logout', userController.logout)
userRouter.get('/check-auth', userController.getUserByUsername)


export default userRouter

// POST /signup = add user
// POST /login = check if username and password exist in database, return cookie session with username inside
// GET /logout = clear the cookie session
// GET /check-auth = check cookie session, get username from cookie, return user info from database based on username