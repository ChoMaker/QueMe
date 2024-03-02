import express, { Request, Response } from 'express'
import { UserController } from '../features/user/controllers/user'

export const userRouter = express.Router()
userRouter.post('/sign-in', UserController.signIn)
userRouter.post('/sign-up', UserController.signUp)
userRouter.post('/forgotpassword', UserController.forgotPassword)