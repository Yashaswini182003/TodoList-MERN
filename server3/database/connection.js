const mongoose = require ('mongoose');

function RunServer()
{
    try 
    {
      
        mongoose.connect(process.env.MONGO_URL);
        console.log('mongodb connected');

    } 
    catch (error)
    {
        console.log('mongodb not connected',error);
    }
}

module.exports = RunServer;