//This Creates Menus schema and returns the model.

module.exports = function(mongoose) {

        var menuSchema = new mongoose.Schema({
        //_id: mongoose.Schema.ObjectId,
        _id: String,
        name: String,
        sub: [{
            name: String,
            id: String,
            items: [{
                name: String,
                text: String,
                price: Number,
                id: String
            }]
        }]
    }, {collection: "Menu"});
    return mongoose.model('Menu', menuSchema);

}