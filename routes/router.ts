import { Router, Request, Response } from 'express';

const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {

    res.json({
        ok: true,
        message: 'All is well'
    })

})

router.post('/mensajes/:id', (req: Request, res: Response) => {

    res.json({
        ok: true,
        message: 'All is well - POST',
        body: req.body,
        id: req.params.id
    })

})

export default router;