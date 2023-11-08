import logo from './logo.svg';
import './App.css';
import {TodoCounter} from './TodoCounter';
import {CreateTodoButton} from './CreateTodoButton';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import React from 'react';

const defatultTodos = [
  {text:"Cortar cebolla",completed:true},
  {text:"Tomar el curso de intro a React js",completed:false},
  {text:"Llorar con la llorona",completed:false},
  {text:"LALALALALA",completed:false}
];


function App() {
  return (
    <>
      
      <TodoCounter completed={2} total={9} />
      <TodoSearch />
      
      <TodoList>
        {defatultTodos.map(todo=>{
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
