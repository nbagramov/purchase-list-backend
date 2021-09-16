const express = require('express');
const router = express.Router();

const {
    getPurchases,
    createPurchase,
    updatePurchaseInfo,
    deletePurchase
} = require('./controllers');

router.get('/', getPurchases);
router.post('/createPurchase', createPurchase);
router.patch('/updatePurchase', updatePurchaseInfo);
router.delete('/deletePurchase', deletePurchase);

module.exports = router;