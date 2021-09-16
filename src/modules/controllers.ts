import { Request, Response } from 'express';
import Purchase from '../models';

module.exports.getPurchases = (req: Request, res: Response) => {
    Purchase.find().then((result: Response) => res.send(result));
};

module.exports.createPurchase = (req: Request, res: Response) => {
    const task = new Purchase ({
        id: req.body.id,
        place: req.body.place,
        price: req.body.price,
        date: req.body.date,
        isEdit: req.body.isEdit
    });
    task.save().then((result: Response) => res.send(result));
};

module.exports.updatePurchaseInfo = (req: Request, res: Response) => {
    Purchase.updateOne({id: req.query.id}, {
        id: req.body.id,
        place: req.body.place,
        price: req.body.price,
        date: req.body.date,
        isEdit: req.body.isEdit
    }).then(() => {
        Purchase.find().then((result: Response) => res.send(result));
    });
};

module.exports.deletePurchase = (req: Request, res: Response) => {
    Purchase.deleteOne({id: req.query.id}).then(() => res.send('Deleted'));
};