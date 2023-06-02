import mongoose from "mongoose"


const  Connection = async () => {
    
    const URL = `mongodb://pramod:pramod4636@ac-mdenztr-shard-00-00.hzfmser.mongodb.net:27017,ac-mdenztr-shard-00-01.hzfmser.mongodb.net:27017,ac-mdenztr-shard-00-02.hzfmser.mongodb.net:27017/?ssl=true&replicaSet=atlas-x5qc76-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
    
        await mongoose.connect(URL , {useNewUrlParser :true });
        console.log('Database connected sucessfully');

    }catch (error){
        console.log("Error while connecting with the database ",error)
    }
}

export default Connection;
