import React from 'react'
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
// import React-Toastify
 import 'react-toastify/dist/ReactToastify.css';

 import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <div>
      
   <Header></Header>
   <AddTodo></AddTodo>
   <TodoList></TodoList>
   {/* toastcontainer */}
   <ToastContainer></ToastContainer>

    </div>
  )
}

export default App
