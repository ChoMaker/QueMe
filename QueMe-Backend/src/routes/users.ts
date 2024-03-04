import express, { Request, Response } from 'express'
import { UserController } from '../features/user/controllers/users'

export const userRouter = express.Router()
userRouter.post('/qm/sign-in', UserController.signIn)
userRouter.post('/qm/sign-up', UserController.signUp)
userRouter.post('/qm/forgotpassword', UserController.forgotPassword)
userRouter.post('/qm/updatepassword', UserController.updatePassword)