const express = require('express');
const router = express.Router();

const {
    getPurchases,
    createPurchase,
    updatePurchaseInfo,
    deletePurchase
} = require('./controllers');

router.get('/purchases/', getPurchases);
router.post('/purchases/', createPurchase);
router.patch('/purchases/', updatePurchaseInfo);
router.delete('/purchases/', deletePurchase);

module.exports = router;
