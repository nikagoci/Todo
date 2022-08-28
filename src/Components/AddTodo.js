import React, { useState, useContext } from "react";
import Container from "../UI/Container/Container";
import Button from '../UI/Button/Button';

import { TodoContext } from "../Context/TodoContext";

const AddTodo = () => {
    const [input, setInput] = useState('');

    const TodoCtx = useContext(TodoContext);

    const random = Math.floor(Math.random() * 100000)

    const submitHandler = (e) => {
        e.preventDefault();
        
        const mainInput = {
          name: input, 
          id: random
        }

        if(mainInput.name.length === 0){
          return '';
        } else if(mainInput.name.length > 25){
          return ''
        }
        
        TodoCtx.getInputValue(mainInput)        

        setInput('')
    }

  return (
    
    <Container className="main-container">
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Name Todo" value={input} onChange={(e) => setInput(e.target.value)} />
        <Button type="submit">Add Todo</Button>
      </form>
      
    </Container>
  );
};

export default AddTodo;
