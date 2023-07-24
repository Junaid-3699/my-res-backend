const mongoose = require('mongoose')

const connectToDB = async() => {
    try {
        const url = 'mongodb+srv://admin:admin@myrestaurant.2gbfw9t.mongodb.net/myResDB'
       const conn =  await mongoose.connect(url, {
        useNewUrlParser : true,
        useUnifiedTopology : true
   })
       console.log(`MngoDB connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectToDB