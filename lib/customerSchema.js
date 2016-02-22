//This Creates Customer schema and returns the model.

module.exports = function(mongoose) {

    var customerSchema = new mongoose.Schema({
        mtn: String,
        firstname: String,
        lastname: String,
    }, {collection: "Customers"});
    return mongoose.model('Customers', customerSchema);
}