const mongoose = require ('mongoose');

function RunServer()
{
    try 
    {
      
        mongoose.connect('mongodb+srv://root:Yash123%2A%23@cluster0.dqdep.mongodb.net/database2?retryWrites=true&w=majority&appName=Cluster0');
        console.log('mongodb connected');

    } 
    catch (error)
    {
        console.log('mongodb not connected',error);
    }
}

module.exports = RunServer;