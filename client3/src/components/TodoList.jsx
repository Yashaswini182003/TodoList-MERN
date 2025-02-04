import { AiOutlineDelete } from "react-icons/ai"; 
import { AiFillEdit } from "react-icons/ai"; 
// const { useState, useEffect } = require("react")
import { useEffect, useState } from "react";
import './TodoList.css'
import { toast } from "react-toastify";
import axios from "axios";



const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [isEditing, setIsEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({_id: null, message: '' });

    const getAllTodos = async () => {
        try
        {
           const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/todolist/getall`);
           setTodos(response.data.data); 
        } 
        catch (error)
        {
            console.log(error);
            console.log(error)
        }
    };

    useEffect(() => {
        getAllTodos();
        console.log('This runs once when the component mounts. ');
    }, []);

    // The useEffect hook is an essential part of this React component. 

    const handleDelete = async (id) => {
        try
        {
            const result = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/todolist/deleteToDo/${id}`);
            if(result.data.success === 'deleted')
            {
                toast.success('Todo deleted successfully!');
                // calling the get function 
                getAllTodos();
            }
            
        } 
        catch (error) 
        {
            console.error(error);
            toast.error('Failed to delete todo.');
        }
    };

    const handleEditInputChange = (e) => {
        setCurrentTodo({ ... currentTodo, message: e.target.value });
    };

    // {...currentTodo} means "create a new object and copy all properties of currentTodo into it."

    // Example workflow
    // Initial State;

    // isEditing = false
    // currentTodo = {_id: null, message: ''}
    // the user is not editing aany to-do yet

    const handleEdit = (todo) => {
        setIsEditing(true);
        setCurrentTodo({ _id: todo._id, message: todo.message });

    };

    const handleUpdate = async () => {
        // validate the message before updating
        if(currentTodo.message.length < 4 || currentTodo.message.length > 20)
        {
            toast.error('Message must be between  4 and 20 characters.');
            return;
            //  Block the update if validation fails
        }

        try
        {
            const result = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/todolist/updateToDo/${currentTodo._id}`, {
                message: currentTodo.message
            });

            if(result.data.success === 'updated')
            {
                toast.success('Todo updated successfully!');
                getAllTodos();
                setIsEditing(false)
                setCurrentTodo({_id: null, message: '' });
            }

        } 
        catch (error) 
        {
            console.error(error);
            toast.error('Failed to update todo.');
        }
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
        setCurrentTodo({_id: null, message: '' });

    };

    return (
        // here 
        <div>


          {isEditing ? (
            <div>
                <input type="text" value={currentTodo.message} onChange={handleEditInputChange}/>
                <button onClick={handleUpdate}> Update </button>
                <button onClick={handleCancelEdit}> Cancel </button>
            </div>
            
          ) : (

           <ul>

             {todos.map((todo) => (
                <li key={todo._id}>
                    {todo.message}

                     {/* edit iconn from react icons Auto import */}
                    <AiFillEdit  className = "icon" onClick={() => handleEdit(todo)} />

                    {/* delete icons from react icons Auto import */}
                    <AiOutlineDelete className = "icon" onClick={() => handleDelete(todo._id)} />

                    {/* npm install react-icons */}
                    {/* npm install react-toastify for using toast as alert in Reactjs */}

                    {/* import reactTostify in app.jsx */}
                </li>

             ))}

           </ul>

          )}

        </div>
    );
};

export default TodoList;