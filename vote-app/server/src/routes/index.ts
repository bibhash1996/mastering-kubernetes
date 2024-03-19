import { Router, Request, Response } from 'express';
import asyncHandler from "express-async-handler";
import { db } from '../init';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    return res.json({
        message: "Ok"
    })
});

router.get('/votes', asyncHandler(async (req: Request, res: Response) => {
    console.log(req.params)
    const collection = db.collection('votes');
    const response = await collection.find({}, { limit: 10 }).toArray();
    res.status(200).json({
        message: "Fetched",
        data: response
    })
}));

router.post('/votes/:id', asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const collection = db.collection('votes');
    await collection.updateOne({ _id: id as any }, { $inc: { count: 1 } });

    res.status(200).json({
        message: "Ok"
    })
}));


export default router;

