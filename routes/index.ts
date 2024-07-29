import express, { Router, Request, Response } from 'express';

export const router: Router = express.Router();

router.get('/', (req: Request, res: Response) => res.send('Welcome to Fresh Kicks API!'));

router.get('/api', (req: Request, res: Response) => {
    
})