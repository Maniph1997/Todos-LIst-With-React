import InputType from "./components/InputType"
import {useState} from 'react'
import TodoList from "./components/TodoList"
import './App.css';

function App() {

   const [listTodo, setListTodo] = useState([])

   let addList= (inputText)=>{
    if(inputText!=="")

         setListTodo([...listTodo, inputText])

   }

  return (
    <div className="main-container">
    <div className="App">
      
      <InputType addList={addList}/>
      {listTodo.map((listItem,i)=>{
        return(
          <TodoList key={i} item={listItem}/>
        )
      })}

    </div>
    </div>
  );
}

export default App;
