import "./App.css";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";
import { TodoContextProvider } from "./Context/TodoContext";

function App() {
  return (
    <TodoContextProvider>
      <AddTodo />
      <Todo />
    </TodoContextProvider>
  );
}

export default App;
