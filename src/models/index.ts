const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const purchaseSchema = new Schema({
    id: Number,
    place: String,
    price: Number,
    date: String,
    isEdit: Boolean,
});

const Purchase = mongoose.model('purchases', purchaseSchema);

export default Purchase;
