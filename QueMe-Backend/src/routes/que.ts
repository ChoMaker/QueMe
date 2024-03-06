import express, { Request, Response } from 'express'
import { QueController } from '../features/user/controllers/que'

export const reserveQueRouter = express.Router()
reserveQueRouter.post('/qm/reserveQue', QueController.reserveQue)