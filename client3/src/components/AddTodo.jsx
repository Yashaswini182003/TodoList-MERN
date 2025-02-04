import { useState } from "react";
import './AddTodo.css'
import { toast} from 'react-toastify';
import axios from 'axios'


// rfc
export default function AddTodo()
{
    const [message, setMessage] = useState('');

    const createToDo = async () => {
        // validate message
        if(message === '')
        {
            // instead of alert we use 'toast'
            toast.error('Cannot add an empty message');
            return;
        }

        if(message.length < 4  || message.length > 20)
        {
            toast.error('Message must be between 4 and 20 characters');
            return;
        }

        try 
        {
            const response = await axios.post(`${process.env.BACKEND_URL}/todolist/`, {
                message: message,
            });

            if(response.data.success === 'created')
            {
                // after giving the message it will send to backend it will automatically refresh
                 window.location.reload();
            }
        }
        catch (error) 
        {
            console.log(error);
            
        }
    };

    return (
        <div className="container">
            {/* Input for message */}
            <input
              type="text"
              placeholder="Add task here"
              onChange={(e) => setMessage(e.target.value)}
            
            />

            {/* Add button */}
            <button onClick={createToDo} className="btn"> ADD </button>
        </div>
    );
}