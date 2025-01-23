// here i got the error of Todo .....beacuse I exported Todo from model/to_do_list.js but in this file I never imported here without importing I was using Todo ....just below I have imported the Todo(in green)
const Todo = require('../model/to_do_list')
const createToDo = async(req, res) => {
    const { message } = req.body;

    if(req.body.message === " ")
    {

        return res.status(401).json ({ errorMessage : "Message cannot be empty" });
    }

    // validation: check if message is empty or does not meet the legth requirements
    if(!message || message.length < 4 || message.length > 20) 
    {
        return res.status(400).json({ errorMessage: "Message must be between 4 and 20 characters." });
    }

    try
    {
        const addToDo = await Todo.create({message});
        res.status(200).json({ success: "created", data: addToDo });
    }
     catch (error)
    {
        console.log(error);
        res.status(500).json({error: "Internal Server Error"});

    }
};

const getAllToDo = async (req, res) => {

    try 
    {
        const getToDo = await Todo.find({});
        res.status(200).json({data: getToDo});
    } 
    catch (error) 
    {
        console.log(error);
        res.status(500).json({error: " Internal Server Error "});
        
    }
};

// When you see empty{} object passed to the .find() method, it means that the function is requesting all the documnets from the collection.

const deleteToDo = async (req, res) => {

   try 
   { 
      const deleted = await Todo.findByIdAndDelete(req.params.id);
      res.status(200).json({ success: "deleted" , data:deleted});
    
   }
   catch (error)
   {
       console.log(error);
    
   }
};

// comments

const updateToDo = async(req, res) => {
    try 
    {
        const updatedTodo = await Todo.findByIdAndUpdate(
            req.params.id,
            {
                message: req.body.message,
            },
            
            // { new: true }: This option tells Mongoose to return the updated document instead of the old one.
            {new: true}
        );

        if(updatedTodo)
        {
            res.json({ success: "updated", data: updatedTodo });
        }
        else
        {
            res.status(400).json({ error: "Todo not found" });
        }
    } 
    catch (error) 
    {
        res.status(400).json({ error: error.message });
    }
};

// { new: true }: This option tells Mongoose to return the updated document instead of the old one. Without { new : true }, Mongoose would return the document as it was before the update

// This ensures that the newly updated version of the document is returned

module.exports = {
    // if you want to export all the functions, then u have to use brackets.
    createToDo,
    getAllToDo,
    updateToDo,
    deleteToDo,
};