//This Creates Order schema and returns the model.

module.exports = function(mongoose) {

    var orderSchema = new mongoose.Schema({
//        _id: Number,
        mtn: String,
        firstname: String,
        lastname: String,
        total: Number,
        status: Number,
        createdDate: Date,
        modifiedDate: Date,
        fulfillDate: Date,
        items: [{
                id: String,
                name: String,
                price: Number,
                count: Number,
                total: Number
            }]
    }, {collection: "Orders"});
    return mongoose.model('Orders', orderSchema);
}