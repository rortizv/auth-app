const mongoose = require('mongoose');



const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.BD_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });

        console.log('MongoDB connected');


    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar a MongoDB');
    }



}


module.exports = {
    dbConnection
}