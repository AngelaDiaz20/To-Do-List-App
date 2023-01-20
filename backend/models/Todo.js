const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

/* añadí esta linea*/
mongoose.set('strictQuery', false);

module.exports = mongoose.model("Todo", TodoSchema);