//This Creates Menus schema and returns the model.

module.exports = function(mongoose) {

        var menuSchema = new mongoose.Schema({
        //_id: mongoose.Schema.ObjectId,
        _id: String,
        name: String,
        sub: [{
            name: String,
            items: [{
                name: String,
                text: String,
                price: Number
            }]
        }]
    }, {collection: "Menu"});
    return mongoose.model('Menu', menuSchema);

}