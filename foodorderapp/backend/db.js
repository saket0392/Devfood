const mongoose = require('mongoose');
const { Clearfix } = require('react-bootstrap');
const mongoURI = 'mongodb+srv://Devfood:Saketk3.%40@cluster0.znhzq.mongodb.net/Devfood?retryWrites=true&w=majority&appName=Cluster0'
const mongoDb = async () =>{
    try{await mongoose.connect(mongoURI)
        console.log("Connected Successfully")
        const fetched_data=mongoose.connection.db.collection("fooditems");
        const data = await fetched_data.find({}).toArray()

        const fetcat =  mongoose.connection.db.collection("foodcategory");
        const foodcategory = await fetcat.find({}).toArray()
        
        global.fooditems=data;
        global.foodcategory=foodcategory;
        console.log("data fetched successfully");
        
    }catch(error){
        console.log('error',error);
    }
}

module.exports = mongoDb;
