import logo from './logo.svg';
import './App.css';
import {TodoCounter} from './TodoCounter';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {TodoClick} from './TodoClick';
import React from 'react';

const defatultTodos = [
  {text:"Cortar cebolla",completed:true},
  {text:"Tomar el curso de intro a React js",completed:true},
  {text:"Llorar con la llorona",completed:false},
  {text:"LALALALALA",completed:false},
  {text:"Estados derivados",completed:true},
];



function App() {
  const [todos,setTodos] = React.useState(defatultTodos);
  const [searchValue,setSearchValue] = React.useState("");
  
  
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  console.log("conpletedodos"+completedTodos);
  //const totalTodos;

  const searchedTodos = todos.filter((todo)=>{
    const todoText = todo.text.toLowerCase();
    const serchText =searchValue.toLowerCase();

    return todoText.includes(serchText);
  });

  

  return (
    <>
      <TodoClick />
      
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      
      <TodoList>
        {searchedTodos.map(todo=>{
          return(
            <TodoItem key={todo.text} name={todo.text}/>
          );
        })}
      </TodoList>

      <CreateTodoButton />    
    </>
  );
}







export default App;
